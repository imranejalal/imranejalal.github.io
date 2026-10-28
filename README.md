# Imrane Jalal Mansour — E-portfolio

A personal academic e-portfolio for my first year in **Sciences du Numérique at ENSEEIHT – Toulouse INP**.

Public address: **https://imranejalal.github.io/**

## Structure

The portfolio has two static language versions (English at `/`, French at `/fr/`), each with six sections. The FR / EN links appear in the desktop sidebar and mobile header:

1. Welcome
2. Engineering Courses
3. Sustainability and Civic Engagement
4. International Mobility
5. Career Development
6. Sport and Other Activities

Welcome contains the personal introduction, the academic journey, **Education**,
and **Achievements** (CNC rank and MMC participation). Engineering Courses contains
academic projects followed by technical skills. Mobility contains future study
plans followed by languages. Career Development groups the introduction, pitch,
professional links, and interviews. Both language versions follow the same order.

## Editing

No framework, package installation, or build step is needed.

- Edit English text in `index.html` and French text in `fr/index.html`. Keep section IDs identical so language switches preserve the current section.
- Both pages share the same stylesheet, scripts, images, and original TIPE PDF. The English version remains the default. Both language links work without JavaScript.
- Change design variables and responsive layouts in `assets/css/styles.css`.
- Menu, active navigation, automatic pitch video display, and optional CV behavior live in `assets/js/main.js`.
- Add a real CV to `assets/cv/`, then set `cvUrl` in `assets/js/settings.js`.
- A personal photo can be added later by replacing the decorative `.journal-cover` block in `index.html` with a `<figure>` and image. Supply descriptive alt text and intrinsic width/height.
- The original TIPE presentation is at `assets/pdf/TIPE_Imrane_Jalal_Mansour_2026.pdf`.
- The project illustration is extracted from the original TIPE presentation, slide 30.

## MMC competition photos

The two photo slots are in **Welcome → Achievements**, under the MMC entry.
Upload the real JPEG photos as **`assets/images/mmc/photo-1.jpg`** and
**`assets/images/mmc/photo-2.jpg`**, then commit to `main`. Each photo automatically
replaces its own coming-soon placeholder in both languages after deployment.
The two photos can be added separately. No sample competition photo is included.
See `assets/images/mmc/README.md` for the upload instructions.

## Pitch video and interviews

Upload the real video as **`assets/video/pitch.mp4`**, commit it to `main`, then
wait for GitHub Pages to deploy. The video replaces the coming-soon card in both
language versions automatically, with playback controls and no autoplay.
No code change is needed. See `assets/video/README.md` for step-by-step instructions.
A missing video keeps the placeholder visible; no sample video is published.

Under the video, edit `interview-1`, `interview-2`, and `interview-3` in the two
HTML files. Use each person's actual name and one paragraph about their career,
advice, and what I learned. The current entries are explicitly placeholders.

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save. The root `.nojekyll` file keeps the site buildless. No paid service is required.

After a commit, GitHub Pages redeploys the site automatically. The public PDF and all fonts are hosted in the same repository. There are no external scripts, trackers, cookies, or API keys.

## Local preview

From the repository directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Accessibility & maintenance

- Semantic sections, heading hierarchy, a skip link, keyboard navigation, and visible focus styles.
- Mobile menu with Escape handling and focus management.
- Reduced-motion preferences and print styles.
- Text and documents remain usable without JavaScript; a direct MP4 link is provided as the video fallback once uploaded.
- The locally hosted P052 typeface is part of URW Base35. Its license is included in `assets/fonts/LICENSE.txt`.

The site describes my own background and interests. It will grow as I gain experience.
