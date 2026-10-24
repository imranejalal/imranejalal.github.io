# Imrane Jalal Mansour — E-portfolio

A personal academic e-portfolio for my first year in **Sciences du Numérique at ENSEEIHT – Toulouse INP**.

Public address: **https://imranejalal.github.io/**

## Structure

The portfolio is a single page with six sections:

1. Welcome
2. Engineering Courses
3. International Mobility
4. Sustainability and Civic Engagement
5. Sport and Other Activities
6. Career Development

## Editing

No framework, package installation, or build step is needed.

- Edit text and add project cards in `index.html`.
- Change design variables and responsive layouts in `assets/css/styles.css`.
- Menu, active navigation, and optional CV behavior live in `assets/js/main.js`.
- Add a real CV to `assets/cv/`, then set `cvUrl` in `assets/js/settings.js`.
- A personal photo can be added later by replacing the decorative `.journal-cover` block in `index.html` with a `<figure>` and image. Supply descriptive alt text and intrinsic width/height.
- The original TIPE presentation is at `assets/pdf/TIPE_Imrane_Jalal_Mansour_2026.pdf`.
- The project illustration is extracted from the original TIPE presentation, slide 30.

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
- All content and documents remain usable without JavaScript.
- The locally hosted P052 typeface is part of URW Base35. Its license is included in `assets/fonts/LICENSE.txt`.

The site describes my own background and interests. It will grow as I gain experience.
