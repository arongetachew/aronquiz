# 🧮 Aron Math Lab

A premium, mobile-first math quiz application for Grade 7–8 students. Practice algebra, geometry, probability, statistics, general math, and fractions with 600 hand-crafted questions.

---

## ✨ Features

| Feature | Description |
|---|---|
| **600 Questions** | 100 questions per category, hardcoded directly in the app |
| **6 Categories** | Algebra, Geometry, Probability, Statistics, General, Fractions |
| **Instant Feedback** | Auto-grades answers and highlights correct/wrong choices |
| **XP System** | Earn 20 XP for every correct answer |
| **Progress Bar** | Tracks how much of a topic you've completed |
| **Dark Mode** | Full light/dark theme toggle, saved to localStorage |
| **Mobile-First UI** | Bottom navigation bar with icons for easy one-thumb access |
| **Responsive** | Desktop sidebar layout on large screens |
| **Offline Ready** | No backend required — all data is embedded in the JS file |

---

## 📁 Project Structure

```
aronwebsite/
├── index.html    — Main UI (mobile-first, single-page layout)
├── script.js     — All JavaScript logic + 600 hardcoded questions
├── style.css     — Custom CSS (design tokens, quiz styles, dark mode)
└── README.md     — This file
```

---

## 🚀 Getting Started

Because the app is fully static, no build step or server is required.

### Option 1 — Open Directly
Double-click `index.html` to open it in any modern browser.

### Option 2 — Local Server (Recommended)
For best performance and consistent behavior, serve it locally:

```bash
# Using Python
python -m http.server 8080

# Then open: http://localhost:8080
```

---

## 🗂️ Question Categories

| Category | Questions | Topics Covered |
|---|---|---|
| **Algebra** | 100 | Solving equations, evaluating expressions |
| **Geometry** | 100 | Area, perimeter, volume, triangle angles |
| **Probability** | 100 | Coin tosses, dice rolls, marble bags |
| **Statistics** | 100 | Mean, median, mode |
| **General** | 100 | Multiplication, division, subtraction, order of operations |
| **Fractions** | 100 | Addition, subtraction, multiplication, simplification |

Questions are served in random order, and each question is only shown once per session.

---

## 📱 Mobile UI

The mobile layout uses a **fixed bottom navigation bar** with an icon and label for each subject. This allows one-thumb access to all 6 categories from any screen size.

- **Header** — App logo, theme toggle, user avatar
- **Stats Row** — Live Score, Total XP, Current Topic
- **Progress Bar** — Completion % for the current topic
- **Question Card** — Clean card with the challenge question
- **Answer Options** — Full-width labeled buttons (A, B, C, D)
- **Feedback Banner** — Shows Correct ✅ or Wrong ❌ with the right answer
- **Bottom Nav** — Always-visible subject switcher

---

## 🖥️ Desktop UI

On screens `≥ 1024px`, the sidebar appears on the left with:
- App logo and tagline
- Dashboard button
- All 6 subject links with icons

---

## 🎨 Design System

Built with a **Material You**-inspired design language:

- **Typography**: `Outfit` (headlines) + `Inter` (body)
- **Icons**: Google Material Symbols Outlined
- **Colors**: Semantic token system with light and dark palettes
- **Styling**: Tailwind CSS (CDN) + custom `style.css`
- **Glassmorphism**: Frosted glass header with `backdrop-filter`

---

## 💾 Data Persistence

| Data | Storage |
|---|---|
| Total XP | `localStorage` (`mathLabXP`) |
| Theme preference | `localStorage` (`theme`) |
| Session score | In-memory (resets on category change) |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, animations, `@keyframes`
- **Vanilla JavaScript** — No frameworks or dependencies
- **Tailwind CSS** — Loaded via CDN for utility classes
- **Google Fonts** — Outfit & Inter
- **Google Material Symbols** — Icon font

---

## 👤 Author

**Aron Getachew** — Grade 7–8 Mathematics  
Built as a personal study tool for mastering core math concepts.