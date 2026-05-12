# 📋 Portfolio Dev Log — Kishore N S
> Maintained by Antigravity AI | Last updated: May 12, 2026

---

## 🗂️ Project Overview

**Repository:** [kishorens17.github.io](https://github.com/Kishorens17/kishorens17.github.io)  
**Live Site:** [https://kishorens17.github.io](https://kishorens17.github.io)  
**Stack:** HTML · CSS · JavaScript (Vanilla — no frameworks)  
**Hosting:** GitHub Pages (auto-deploy on push to `main`)

---

## ✅ Session 1 — May 11, 2026 (Initial Build)

Built the entire portfolio from scratch.

### Files Created
| File | Purpose |
|------|---------|
| `index.html` | Main portfolio page (all sections) |
| `style.css` | Full design system — dark theme, animations, responsive |
| `script.js` | Typed effect, scroll reveal, navbar, tilt on cards |
| `README.md` | GitHub repo description |

### Sections Built
- **Navbar** — Fixed, scrolled glass effect, hamburger for mobile
- **Hero** — Animated orbs background, typed role effect, social links
- **About** — Bio, stat cards (CGPA, Projects, Publications, Awards), info card
- **Education & Training** — Timeline (Amrita, SmartEd, ShadowFox, Code Galatta)
- **Skills** — Programming, AI/ML, Soft Skills, Languages
- **Projects** — 3 static cards (Hardware Hunters, WBC, Leather Defect)
- **Publications** — 1 paper (IC-SIT 2024)
- **Awards** — 4 award cards
- **Contact** — Email, LinkedIn, GitHub, Phone

### Design Choices
- Color palette: `#38bdf8` (cyan accent) + `#818cf8` (purple accent2)
- Font: Inter (Google Fonts) + Fira Code for tech tags
- Dark background: `#060b18` primary, `#0d1526` secondary
- Reveal animations on scroll via `IntersectionObserver`
- 3D tilt effect on project cards via `mousemove`

---

## ✅ Session 2 — May 12, 2026 (Major Content Update)

### Projects — Replaced & Expanded (16 projects total)
Moved project rendering to **JavaScript** (data array in `script.js`) to avoid HTML bloat.  
Each card now shows: emoji icon, date badge, title, description, tech tags, GitHub link.

| # | Project | Date | Repo |
|---|---------|------|------|
| 1 | Hardware Hunters | Feb 2024 | `Hardware-Hunters` |
| 2 | Pedestrian Detection | Mar 2024 | `Pedestrian-Detection-Using-Threshold-Frequency-in-Open-CV-Python` |
| 3 | Anomaly Detection | Aug 2024 | `Anomaly-Detection-using-Python-OpenCV` |
| 4 | DNA Sequence Identification | Sep 2024 | `DNA-Sequence-identification-using-Trie-Data-Structure` |
| 5 | Image Dehazing | Oct 2024 | `IMAGE-DEHAZING-WITH-IMAGE-DECOMPOSITION-TECHNIQUE-USING-DOMAIN-ADAPTATION-MODEL` |
| 6 | Image Enhancement | Nov 2024 | `Enhancement-of-various-images-using-coefficient-of-analytic-function-using-python` |
| 7 | Autonomous Road Sweeping Robot | Jan 2025 | `Autonomous-Road-Sweeping-Robot` |
| 8 | Leather Defect Detection | Mar 2025 | `Leather-Defect-Detection` |
| 9 | White Blood Cell Classification | Apr 2025 | `Classification-of-White-Blood-Cells-using-Feature-Extraction-and-Cell-Segmentation` |
| 10 | SQL Query Resource Prediction | Aug 2025 | `SQL-Query-Resource-Prediction-Using-Machine-Learning-Techniques` |
| 11 | F1 Accident Prediction | Sep 2025 | `F1-Race-Accident-Prediction-using-Bayesian-Network` |
| 12 | Pick and Place Robot | Oct 2025 | `Pick-and-Place-Robot` |
| 13 | Real-Time Flight Monitoring | Jan 2026 | `Real-time-Flight-monitoring-and-Delay-Anaylysis-system` |
| 14 | Multimodal Sentiment Analysis | Feb 2026 | `Multimodal-Emotion-aware-crosslingual-sentiment-analysis` |
| 15 | Neurovoice – Noise Cancellation | Mar 2026 | `Neurovoice-Application-for-adaptive-audio-noice-cancellation` |
| 16 | Voice-Controlled PC Automation | Apr 2026 | `Voice-controlled-pc-automation-system-using-small-vocabulary-speech-recognition` |

### Publications — Updated to 3 Papers
| # | Paper | Conference | Status |
|---|-------|-----------|--------|
| 1 | Enhancement of various images using coefficients of Analytic Functions | IC-SIT 2024 · DOI: `10.1109/IC-SIT63503.2024.10861925` | Published |
| 2 | Classification of White Blood Cells using Feature Extraction and Cell Segmentation | INSPECT 2025 · DOI: `10.1109/INSPECT67393.2025.11350320` | Published |
| 3 | Edge-Native Text-Conditional Noise Reduction via FiLM-Modulated U-Nets | ICDCS'26 · Karunya Institute · March 2026 | Accepted – Pending |

### Awards — Replaced with Correct 4 Achievements
| Award | Details | Year |
|-------|---------|------|
| 🥇 1st Place — Code Royale | Solo rapid DSA coding challenge | Feb 2026 |
| 🥇 1st Place — Colay | Relay team coding & puzzle challenge | Feb 2026 |
| 🏆 Smart India Hackathon | National Level Submission | 2024 & 2025 |
| 🎹 World Record — Piano | Kalam Book of Records | 2021 |

### Links Section — New Section Added
Added a dedicated **Links** section (also in navbar) with 3 cards:
- 📜 **Certificates** → [Google Drive](https://drive.google.com/drive/folders/1KFlewEutQHxMrJKwQGWeSCYmClFgCrc3?usp=drive_link)
- 💡 **LeetCode** → [KISHORE_NSK](https://leetcode.com/u/KISHORE_NSK/)
- 🐙 **GitHub** → [Kishorens17](https://github.com/Kishorens17)

### Stats Updated
- Projects stat card: `3+` → `16+`

---

## 🚀 Deployment — May 12, 2026

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/Kishorens17/kishorens17.github.io.git
git branch -M main
git push -u origin main
```

---

## 🔄 How to Update in Future

Whenever you make changes to any file:

```bash
git add .
git commit -m "describe what you changed"
git push
```

GitHub Pages auto-deploys within ~1 minute of every push.

---

## 📌 Things To Add Later
- [ ] Resume / CV download button
- [ ] Dark/Light mode toggle
- [ ] Project filter by category (CV, ML, Robotics, Web)
- [ ] Blog or Notes section
- [ ] Internship experience details
