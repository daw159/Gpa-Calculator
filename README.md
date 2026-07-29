<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Hanken+Grotesk&weight=700&size=38&duration=2800&pause=900&color=00C2CB&center=true&vCenter=true&width=650&lines=GradeMate;GPA+%26+CGPA+Calculator;Track.+Calculate.+Export." alt="GradeMate" />

<h3>A modern GPA &amp; CGPA calculator built with React + Tailwind CSS</h3>

<p>
  <a href="https://gpa-calculator-gules-one.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-00C2CB?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/daw159/Gpa-Calculator"><img src="https://img.shields.io/badge/Source-3E3B92?style=for-the-badge&logo=github&logoColor=white" alt="Source" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/License-MIT-3E3B92?style=flat-square" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

</div>

## Overview

**GradeMate** turns messy grade tracking into a clean, single-page workflow. Add your courses,
pick your grades, and watch your **semester GPA** and **cumulative CGPA** update live — then
export the whole transcript as a PDF. Everything is stored in your browser, so nothing is lost
on refresh and nothing ever leaves your device.

> Built as a first React project — plain hooks, plain JSX, zero TypeScript, zero state libraries.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Features

| | Feature | Description |
| :--: | :-- | :-- |
| 🎓 | **Semester Management** | Create and switch between up to **10 semesters** with tabbed navigation |
| 📚 | **Course Tracking** | Add, edit and delete courses with name, credit hours and letter grade |
| 📊 | **Live GPA & CGPA** | Per-semester GPA and overall CGPA recalculate instantly on every change |
| 🌙 | **Dark Mode** | One-click theme toggle, remembered across reloads, with no flash on load |
| 💾 | **Auto-Save** | Every semester and course persists to `localStorage` automatically |
| 📄 | **PDF Export** | Download the current semester or a full transcript as a formatted PDF |
| 📱 | **Fully Responsive** | Fluid layout from 1440px desktop down to 375px mobile |
| ✨ | **Glassmorphism UI** | Frosted, semi-transparent cards with backdrop blur in both themes |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css,vercel,git&theme=dark" alt="Tech stack" />

</div>

| Layer | Choice | Why |
| :-- | :-- | :-- |
| UI | **React 19** (JSX only) | Hooks + Context — no Redux, no TypeScript |
| Styling | **Tailwind CSS v4** | Theme tokens live in `src/index.css`, no config file |
| Icons | **lucide-react** | Lightweight, consistent stroke icons |
| PDF | **jsPDF + jspdf-autotable** | Client-side transcript generation |
| Build | **Vite 7** | Instant HMR, tiny production bundle |
| Hosting | **Vercel** | Zero-config deploys on every push |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Design System

<div align="center">

| | Token | Hex | Usage |
| :--: | :-- | :-- | :-- |
| ![](https://readme-swatches.vercel.app/3E3B92?style=round) | Deep Indigo | `#3E3B92` | Primary — buttons, headings, brand |
| ![](https://readme-swatches.vercel.app/00C2CB?style=round) | Vibrant Teal | `#00C2CB` | Accent — highlights, progress, CTAs |
| ![](https://readme-swatches.vercel.app/E6E6FA?style=round) | Soft Lavender | `#E6E6FA` | Card surfaces in light mode |
| ![](https://readme-swatches.vercel.app/0B0F1F?style=round) | Near-Black Navy | `#0B0F1F` | Page background in dark mode |

</div>

**Typography** — `Hanken Grotesk` for headings and body, `JetBrains Mono` for every number
(GPA, credits, grade points) so figures stay perfectly aligned.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## How It Works

Each letter grade maps to a grade point in `src/data/gradeScale.js`.

```text
              Σ (grade point × credit hours)
GPA   =  ─────────────────────────────────────      (one semester)
                   Σ credit hours

              Σ (grade point × credit hours)
CGPA  =  ─────────────────────────────────────      (all semesters)
                   Σ credit hours
```

<details>
<summary><b>Example calculation</b></summary>

<br>

| Course | Credits | Grade | Points | Weighted |
| :-- | :--: | :--: | :--: | :--: |
| Data Structures | 3 | A | 4.00 | 12.00 |
| Linear Algebra | 3 | B+ | 3.30 | 9.90 |
| Physics Lab | 1 | A− | 3.70 | 3.70 |
| **Total** | **7** | | | **25.60** |

```text
GPA = 25.60 / 7 = 3.66
```

</details>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Project Structure

```text
gpa-calculator/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── Header.jsx          # Nav bar + dark mode toggle
│   │   ├── Hero.jsx            # Landing headline
│   │   ├── StatsCards.jsx      # GPA / CGPA / credits summary
│   │   ├── StatCard.jsx        # Single glass stat tile
│   │   ├── SemesterTabs.jsx    # Semester switcher (max 10)
│   │   ├── CourseForm.jsx      # Add-course inputs
│   │   ├── CourseTable.jsx     # Course list (cards on mobile)
│   │   ├── Button.jsx          # Shared button variants
│   │   ├── ProgressBar.jsx     # Animated GPA meter
│   │   ├── GradeScale.jsx      # Grade → point reference
│   │   ├── About.jsx           # Project info section
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx    # Light / dark provider
│   ├── hooks/
│   │   └── useTheme.js
│   ├── data/
│   │   └── gradeScale.js       # Letter grade → grade point map
│   ├── utils/
│   │   ├── calculateGPA.js
│   │   ├── calculateCGPA.js
│   │   ├── exportPDF.js
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind v4 @theme tokens
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Getting Started

**Prerequisites** — Node.js 18+ and npm.

```bash
# 1. Clone
git clone https://github.com/daw159/Gpa-Calculator.git
cd Gpa-Calculator

# 2. Install
npm install

# 3. Run
npm run dev
```

Open <http://localhost:5173> in your browser.

### Scripts

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Deployment

The app is a static Vite build — it deploys anywhere that serves static files.

<details open>
<summary><b>Vercel (used for the live demo)</b></summary>

<br>

1. Sign in at [vercel.com](https://vercel.com) with GitHub → **Add New → Project**
2. Import `daw159/Gpa-Calculator`
3. Framework preset: **Vite** · Build command: `npm run build` · Output: `dist`
4. **Deploy** — every push to `main` redeploys automatically

</details>

<details>
<summary><b>Netlify</b></summary>

<br>

**Add new site → Import from Git** → build command `npm run build`, publish directory `dist`.

</details>

> If the app lives in a subfolder of the repo, set **Root Directory** (Vercel) or
> **Base directory** (Netlify) to that folder — otherwise the build fails with
> `no package.json found`.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Roadmap

- [x] Semester management (up to 10)
- [x] Course add / delete
- [x] Live GPA + CGPA
- [x] Dark mode with persistence
- [x] localStorage auto-save
- [x] PDF transcript export
- [x] Responsive layout


<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## Contributing

Contributions are welcome.

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

Then open a pull request.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" />

## License

Released under the **MIT License** — free to use, modify and share.

<div align="center">

<br>

**Built with React, Tailwind CSS **

<a href="https://github.com/daw159"><img src="https://img.shields.io/badge/@daw159-3E3B92?style=for-the-badge&logo=github&logoColor=white" alt="daw159" /></a>

<sub>If this helped you, consider leaving a ⭐ on the repo.</sub>

</div>
