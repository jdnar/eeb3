# EEB3 ICT — Python course (S4 + S5)

A beginner-friendly Python course in English, as a static website (plain HTML, CSS and a little JavaScript — no build step, no dependencies).

| Section | Folder | Pages |
|---|---|---|
| **Python — The Fundamentals** | [`s4/`](s4/index.html) | 27 |
| **Python — Functions, Strings, Lists, Dictionaries and Files** | [`s5/`](s5/index.html) | 29 |

- **S4** — variables, input/output, conditionals, loops, random.
- **S5** — functions, strings, lists, split & join, dictionaries, files, Hangman project. Inside the Functions chapter there is a **Functions Practice** sub-section (46 graded exercises and 5 mini-projects that review S4).

Each chapter, warm-up, exercise set and project is its own page, with a sidebar, previous/next buttons, copy buttons on code blocks, and light/dark mode.

## Structure

```
.
├── index.html            # landing page "EEB3 ICT" (choose S4 or S5)
├── .nojekyll             # tells GitHub Pages to serve the files as they are
├── assets/
│   ├── style.css
│   └── app.js
├── s4/                   # index.html = "Start here", then one file per chapter
└── s5/
```

All links are **relative**, so the site works from any folder, from a GitHub Pages project URL, or just by double-clicking `index.html` on your computer.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `eeb3-ict`).
2. Upload the **contents** of this folder (`index.html`, `assets/`, `s4/`, `s5/`, `.nojekyll`, `README.md`) to the root of the repository.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, and save.
4. After a minute the course is live at `https://<your-username>.github.io/eeb3-ict/`.

## Subirlo a tu propia web (español)

- **GitHub Pages:** sigue los pasos de arriba (sube el *contenido* de la carpeta, no la carpeta contenedora).
- **Otro hosting o servidor propio:** sube la carpeta completa por FTP o por el gestor de archivos de tu hosting y abre `index.html`. Si la subes dentro de una subcarpeta (por ejemplo `tuweb.com/ict/`), funciona igual porque todos los enlaces son relativos.
- **Para añadir más adelante otra sección:** crea una carpeta nueva junto a `s4` y `s5`, y añade una tarjeta en el `index.html` de la raíz.
