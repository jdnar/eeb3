# Python Course (S4 + S5)

A beginner-friendly Python course in English, as a static website (plain HTML, CSS and a little JavaScript — no build step, no dependencies).

| Course | Folder | Pages | Topics |
|---|---|---|---|
| **S4 — The Fundamentals** | [`s4/`](s4/index.html) | 29 | Variables, input/output, conditionals, loops, random |
| **S5 — Functions, Strings, Lists, Dictionaries and Files** | [`s5/`](s5/index.html) | 23 | Functions, strings, lists, split & join, dictionaries, files, Hangman project |

Each chapter, warm-up, exercise set, project and appendix is its own page, with a sidebar, previous/next buttons, copy buttons on code blocks, and light/dark mode.

## Structure

```
python-course/
├── index.html            # landing page (choose S4 or S5)
├── .nojekyll             # tells GitHub Pages to serve the files as they are
├── assets/
│   ├── style.css
│   └── app.js
├── s4/                   # index.html = "Start here", then one file per chapter
└── s5/
```

All links are **relative**, so the site works from any folder, from a GitHub Pages project URL, or just by double-clicking `index.html` on your computer.

## Publish on GitHub Pages (English)

1. Create a new repository on GitHub (for example `python-course`).
2. Upload the **contents** of this folder (`index.html`, `assets/`, `s4/`, `s5/`, `.nojekyll`, `README.md`) to the root of the repository.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, and save.
4. After a minute your course is live at `https://<your-username>.github.io/python-course/`.

## Cómo subirlo a GitHub (español)

1. En GitHub, pulsa **New repository** y ponle un nombre (por ejemplo `python-course`).
2. Pulsa **uploading an existing file** y arrastra el **contenido** de esta carpeta (`index.html`, `assets`, `s4`, `s5`, `.nojekyll`, `README.md`). Confirma con **Commit changes**.
   - Si el navegador no te deja arrastrar carpetas, usa Git: `git init`, `git add .`, `git commit -m "Python course"`, `git branch -M main`, `git remote add origin <URL-del-repo>`, `git push -u origin main`.
3. Ve a **Settings → Pages**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y guarda.
4. En un minuto estará publicado en `https://<tu-usuario>.github.io/python-course/`.
