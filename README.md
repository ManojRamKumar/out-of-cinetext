# out of cinetext.
A static editorial writing portfolio for GitHub Pages. No dependencies or build step.

## Publish
Upload the contents of this folder (not the containing folder) to the root of your public GitHub repository. In Settings > Pages choose Deploy from a branch, main, / (root).

## Edit the writing
Open `works.js`. Each item has a unique string `id`, `group` (Cinema, Culture, Personal, or a new group), `category` (the more specific label), `title`, `summary`, optional `image`, optional `imageAlt`, `instagram`, and `body`. Replace `body: lorem` with your full essay between backticks, with blank lines between paragraphs. Escape literal backticks and ${ sequences in template literals. Set instagram to the actual post URL. Put cover images in `images/` and use e.g. `image: "images/work-01.jpg"`. All eight existing items have sample titles and three placeholder paragraphs. Reading time is calculated from the body.

## Add more work
Copy an existing object in the works array, give it a new unique id (e.g. "09"), and add your text. Keep a comma between objects. The first eight in array order appear in the featured bento layout; subsequent pages use a regular grid (eight essays per page). Filters apply to the entire collection, not just the first eight. Rearrange array order to change featured works and article navigation. Categories are generated automatically.

## Contact and resume
Set `contactEmail` in works.js to your professional email. The Instagram profile link in index.html is editable. Upload your actual resume PDF to the root as `resume.pdf` (or change resumePath in works.js). Until a PDF is available the Resume button opens a clearly labelled placeholder page. The website defaults to system theme; the header selector allows System, Light, and Dark and saves your choice locally.

## Preview locally
Run `python -m http.server 8000` in the repository root and visit http://localhost:8000. Check homepage, filters, pagination after adding a ninth essay, article links, progress, themes, mobile sizes, resume and contact links before sharing publicly.
