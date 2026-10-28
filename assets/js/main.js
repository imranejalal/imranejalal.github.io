(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('#site-menu');
  const toggle = document.querySelector('.menu-toggle');
  const backdrop = document.querySelector('.menu-backdrop');
  const links = [...document.querySelectorAll('.nav-link')];
  const mobile = window.matchMedia('(max-width: 960px)');
  const sections = [...document.querySelectorAll('main > section[id]')];
  const isFrench = document.documentElement.lang === 'fr';
  const menuIsOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  function setMenu(open, restoreFocus = false) {
    const isOpen = mobile.matches && open;
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.querySelector('.menu-label').textContent = isOpen ? (isFrench ? 'Fermer' : 'Close') : 'Menu';
    document.body.classList.toggle('menu-open', isOpen);
    backdrop.hidden = !isOpen;
    menu.inert = mobile.matches && !isOpen;
    if (isOpen) links[0].focus({ preventScroll: true });
    if (restoreFocus) toggle.focus({ preventScroll: true });
  }

  toggle.hidden = false;
  toggle.addEventListener('click', () => setMenu(!menuIsOpen()));
  backdrop.addEventListener('click', () => setMenu(false, true));
  links.forEach(link => link.addEventListener('click', () => {
    if (mobile.matches) {
      setMenu(false);
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  }));
  document.addEventListener('keydown', event => {
    if (!menuIsOpen()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenu(false, true);
    }
    if (event.key === 'Tab') {
      const focusable = [...document.querySelectorAll('.mobile-header .language-switch a'), toggle, ...menu.querySelectorAll('a')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });
  mobile.addEventListener('change', () => setMenu(false));
  setMenu(false);

  let queued = false;
  function updateActiveSection() {
    const offset = mobile.matches ? 125 : 115;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
    for (const link of links) {
      const active = link.getAttribute('href') === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  }
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; window.requestAnimationFrame(updateActiveSection); }
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();
  // Both static translations share section IDs, so language changes keep your place.
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      const hash = document.querySelector('.nav-link.active')?.getAttribute('href');
      const url = new URL(link.getAttribute('href'), window.location.href);
      url.hash = hash && hash !== '#welcome' ? hash : '';
      link.href = url.href;
    });
  });
  document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());

  // Each real MMC photo replaces only its own placeholder when uploaded.
  document.querySelectorAll('img[data-competition-photo]').forEach(photo => {
    const placeholder = photo.closest('.competition-photo-frame').querySelector('.competition-photo-placeholder');
    photo.addEventListener('load', () => {
      photo.hidden = false;
      placeholder.hidden = true;
      window.requestAnimationFrame(updateActiveSection);
    });
    photo.addEventListener('error', () => {
      photo.hidden = true;
      placeholder.hidden = false;
    });
    photo.src = photo.dataset.competitionPhoto;
  });

  const settings = window.portfolioSettings;
  const pitchVideo = document.querySelector('#pitch-player');
  const pitchWaiting = document.querySelector('#pitch-waiting');
  const pitchDownload = document.querySelector('#pitch-download');
  if (pitchVideo && pitchWaiting && settings?.pitchVideoUrl) {
    const videoUrl = new URL(settings.pitchVideoUrl, `${window.location.origin}/`);
    if (videoUrl.origin === window.location.origin && /\.mp4$/i.test(videoUrl.pathname)) {
      // A missing file keeps the honest "coming soon" card visible. Once the
      // owner uploads pitch.mp4, native playback appears on the next page load.
      pitchVideo.addEventListener('loadedmetadata', () => {
        pitchVideo.hidden = false;
        pitchWaiting.hidden = true;
        pitchDownload.hidden = false;
        window.requestAnimationFrame(updateActiveSection);
      });
      pitchVideo.addEventListener('error', () => {
        pitchVideo.hidden = true;
        pitchWaiting.hidden = false;
        pitchDownload.hidden = true;
      });
      pitchDownload.querySelector('a').href = videoUrl.href;
      pitchVideo.src = videoUrl.href;
      pitchVideo.load();
    }
  }
  if (settings?.cvUrl) {
    const url = new URL(settings.cvUrl, `${window.location.origin}/`);
    if (url.origin === window.location.origin && /\.pdf$/i.test(url.pathname)) {
      const link = document.createElement('a');
      link.href = url.href;
      link.download = 'Imrane_Jalal_Mansour_CV.pdf';
      link.className = 'button button-primary';
      link.textContent = isFrench ? (settings.cvLabelFr || 'Télécharger mon CV') : (settings.cvLabel || 'Download my CV');
      const container = document.querySelector('#cv-action');
      container.append(link);
      container.hidden = false;
    }
  }
})();
