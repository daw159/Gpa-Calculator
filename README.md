# Academic Clarity — GPA & CGPA Calculator

A modern, single-page GPA and CGPA calculator built with React. Track courses across multiple semesters, get instant grade-point calculations, and monitor your cumulative GPA — all in a clean, responsive dashboard with full dark mode support.

**Live demo:** [gpa-calculator-gules-one.vercel.app](https://gpa-calculator-gules-one.vercel.app/)

---

## Features

- **Multi-semester tracking** — create up to 10 semesters, switch between them freely
- **Automatic GPA calculation** — semester GPA and overall CGPA update instantly as courses are added, edited, or removed
- **Grade-based input** — select a letter grade per course; points are derived automatically from a single, editable grade scale
- **Course management** — add, view, and delete courses per semester, with a one-click semester reset
- **Live statistics dashboard** — overall CGPA, current semester, total credit hours, and total courses at a glance
- **Dark mode** — full light/dark theming via React Context, persisted across sessions
- **Data persistence** — all semester and course data is saved to Local Storage, so nothing is lost on refresh
- **Grade scale reference** — a transparent, always-visible table of the 4.0 grading scale used for calculations
- **Responsive design** — usable across desktop, tablet, and mobile

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** — styling, including CSS custom properties for theming
- **Lucide React** — icon set
- **React Context API** — global dark/light theme state
- **Local Storage** — client-side data persistence

---

## Design

The initial UI concept and layout were designed using [Stitch](https://stitch.withgoogle.com), Google's AI-assisted UI design tool, then rebuilt from scratch as production React components, restructured for real application state, and extended with full dark mode theming and responsive behavior.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/daw159/Gpa-Calculator.git

# Navigate into the project folder
cd "Gpa-Calculator/Gpa Calculator"

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Project Structure

```
src/
├── assets/            # images and icons
├── components/        # UI components (Header, Hero, CourseForm, CourseTable, etc.)
├── context/            # ThemeContext (dark/light mode state)
├── hooks/              # custom hooks (useTheme)
├── data/               # static data (grade scale)
├── utils/              # calculation logic (GPA/CGPA, PDF export, local storage helpers)
├── App.jsx             # top-level state and layout composition
├── main.jsx            # app entry point
└── index.css           # Tailwind import + theme CSS variables
```

---

## How GPA Is Calculated

Each course has **credit hours** and a **letter grade**. Grade points are looked up from a single grade scale (`A = 4.0`, `A- = 3.7`, ... `F = 0.0`):

```
Course Points = Credits × Grade Points
Semester GPA  = (Sum of all course points in the semester) ÷ (Sum of all credit hours in the semester)
Overall CGPA  = (Sum of course points across all semesters) ÷ (Sum of credit hours across all semesters)
```

---

## Author

**Muhammad Dawood**
- GitHub: [@daw159](https://github.com/daw159)
- LinkedIn: [muhammad-dawood123](https://www.linkedin.com/in/muhammad-dawood123/)
- Email: miandawood2938@gmail.com
