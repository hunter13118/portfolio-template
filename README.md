# Portfolio Template

A dynamic, data-driven portfolio template built with React. Features a modular case study system where adding new projects is as simple as dropping a folder with text files and images.

## Quick Start

```bash
npm install
npm start
```

## Adding a New Case Study

1. Create a folder in `src/cases/` (e.g., `src/cases/my-project/`)
2. Add the following files:

| File | Purpose |
|------|---------|
| `client.txt` | Client name |
| `project.txt` | Project title |
| `description.txt` | Short description (homepage preview) |
| `long.txt` | Full description (detail page) |
| `img1.png` | Hero / primary image |
| `img2.png` | Detail image 1 |
| `img3.png` | Detail image 2 |

3. Run `npm start` - the build script auto-generates the necessary JS from your text files.

No code editing required.

## Layout System

The homepage cycles through 5 layout variants automatically:
1. Two images (small + medium) + text right
2. Text left + single large image right (reversed)
3. Single large image left + text right
4. Two images (medium + small) + text right
5. Text left + single large image right (reversed)

## Static Fallback

A pure HTML/CSS version lives in `static/` - zero dependencies, opens directly in any browser.

## Tech Stack

- React 19 + React Router
- SCSS with CSS custom properties
- Space Mono + Plus Jakarta Sans typography
- Responsive: Mobile / Tablet (768px) / Desktop (1025px) / Large (1440px)
