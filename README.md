# 🛰️ Satellites in the Sky — v1.0

**An interactive educational experience about satellites, orbital mechanics, and the Arab astronomical heritage that made it all possible.**

57 standalone HTML files. ~1 MB total. Zero dependencies. Works offline. No build step. Just open and explore.

---

## 🚀 Quick Start

1. Open `aa-portal.html` in any modern browser
2. That's it. Everything is linked from the portal.

Or open any individual file directly — every file is 100% self-contained.

---

## 📋 What's Inside

### Core Experiences (5 Phases)

| File | Phase | Description |
|------|-------|-------------|
| `aa-night-sky-window-phase1.html` | 1 — Look Up | Real-time night sky with satellite tracking, constellation overlay, Arabic star names |
| `aa-explorer-depth-phase2.html` | 2 — Explore | Deep-dive satellite explorer with orbit visualization, 150+ satellites, filtering |
| `aa-mission-control-phase3.html` | 3 — Control | Mission control simulator with telemetry, commanding, orbital maneuvers |
| `aa-orbital-science-phase4.html` | 4 — Learn | Orbital mechanics lab, Kepler's laws, gravity simulations, math |
| `aa-islamic-heritage-phase5.html` | 5 — Heritage | Islamic Golden Age astronomy, scholars, instruments, star names, legacy |

### Ultimate Experience

| File | Description |
|------|-------------|
| `aa-satellites-ultimate.html` | All 5 phases merged into one seamless experience (68 KB) |

### Interactive Experiences (41 modules)

#### Roadmap Ideas (16)
| File | Topic |
|------|-------|
| `aa-altitude-ladder.html` | Visual scale of orbit altitudes from sea level to deep space |
| `aa-astrolabe-interactive.html` | Working digital astrolabe with historical context |
| `aa-culture-cards.html` | Collectible cards linking Arab heritage to modern satellites |
| `aa-debris-field.html` | Space debris visualization and Kessler syndrome |
| `aa-eclipse-hunter.html` | How satellites predict and observe eclipses |
| `aa-gravity-well.html` | Interactive gravity well demonstration |
| `aa-heritage-scholars.html` | Arab scholar profiles with modern tech connections |
| `aa-iss-tour.html` | Virtual tour of ISS modules and systems |
| `aa-kessler-cascade.html` | Kessler syndrome chain reaction simulation |
| `aa-launch-countdown.html` | Rocket launch countdown experience |
| `aa-light-pollution.html` | Light pollution impact on satellite observation |
| `aa-math-lab.html` | Orbital math calculator and equation explorer |
| `aa-orbital-playground.html` | Sandbox orbital mechanics playground |
| `aa-satellite-economics.html` | The business of satellites — costs, revenue, markets |
| `aa-satellite-graveyard.html` | Where satellites go to die — graveyard orbits |
| `aa-sky-music.html` | Satellites as musical instruments — orbital sonification |

#### Beyond Roadmap — Sessions 4–6 (25)
| File | Topic |
|------|-------|
| `aa-arabic-star-map.html` | Full Arabic star name atlas with pronunciations |
| `aa-constellation-designer.html` | Design your own satellite constellation — 3D viz, cost |
| `aa-debris-dodge.html` | Flappy-bird-style debris dodging game |
| `aa-doppler-demo.html` | Audio + visual Doppler effect demonstration |
| `aa-frequency-spectrum.html` | Radio frequency allocation for satellites |
| `aa-golden-age.html` | Deep dive: 6 Golden Age scholars → modern satellites |
| `aa-ground-stations.html` | Global ground station network visualization |
| `aa-kessler.html` | Chain-reaction debris cascade (compact version) |
| `aa-lagrange.html` | L1–L5 Lagrange points interactive explainer |
| `aa-launch-window.html` | Why rockets launch at specific times |
| `aa-microbit-space.html` | 6 BBC micro:bit satellite experiments with Python code |
| `aa-mission-planner.html` | Step-by-step satellite mission designer |
| `aa-orbit-compare.html` | Compare LEO vs MEO vs GEO vs HEO orbits |
| `aa-orbit-decay.html` | Atmospheric drag simulator — watch satellites fall |
| `aa-orbital-mechanics.html` | Orbital mechanics reference and visualizer |
| `aa-pale-blue-dot.html` | Contemplative zoom from Earth to the void |
| `aa-photo-guide.html` | Night sky photography guide — phone + DSLR |
| `aa-radio-space.html` | Tune a virtual radio dial across satellite frequencies |
| `aa-reentry.html` | Atmospheric re-entry physics simulator |
| `aa-satellite-anatomy.html` | Exploded-view satellite component guide |
| `aa-satellite-bingo.html` | Satellite spotting bingo card game |
| `aa-satellite-timeline.html` | History: Sputnik (1957) to 10,000+ satellites (2025) |
| `aa-sdr-guide.html` | SDR satellite reception guide — $30 setup |
| `aa-signal-journey.html` | Follow a signal from satellite to your phone |
| `aa-space-law.html` | Interactive space treaty guide with quiz |
| `aa-space-weather.html` | Solar storms and their effect on satellites |

#### Other Files
| File | Description |
|------|-------------|
| `aa-portal.html` | **Master portal** — links to everything, organized by section |
| `aa-showcase-gallery.html` | Visual gallery of all experiences |
| `aa-sky-journal.html` | Personal satellite observation journal |
| `aa-space-timeline.html` | Space history timeline |
| `aa-spotters-guide.html` | Field guide to identifying satellites |
| `aa-radio-decoder.html` | Satellite signal decoder reference |
| `aa-time-machine.html` | Travel through satellite history |
| `aa-zoom-out.html` | Progressive Earth zoom-out |
| `satellites_roadmap.html` | Original project roadmap |

---

## 🏗️ Architecture

```
No build system. No framework. No dependencies.
Every file is a standalone HTML document with embedded CSS and JavaScript.
```

**Technical choices:**
- **Pure HTML/CSS/JS** — no React, no Vue, no bundler
- **Canvas API** — for all visualizations and animations
- **Web Audio API** — for Doppler demo and radio simulations
- **CSS Custom Properties** — consistent design system across all files
- **Google Fonts** — Outfit (UI), JetBrains Mono (data), Playfair Display (editorial)
- **Responsive** — works on mobile, tablet, desktop
- **Offline-capable** — everything works without internet (fonts degrade gracefully)

**Design system:**
```css
--bg: #030510        /* Deep space background */
--card: #0a1020      /* Card/panel background */
--cyan: #5ce0d6      /* Primary accent — satellites, tech */
--blue: #6e8cff      /* Secondary — orbits, science */
--gold: #e8c170      /* Heritage, history, warmth */
--green: #6fcf97     /* Success, nature, beginner */
--orange: #f6ad55    /* Warnings, intermediate */
--red: #fc8181       /* Danger, debris, advanced */
--purple: #b794f4    /* Audio, signals, special */
```

---

## 📐 Physics & Accuracy

All simulations use real orbital mechanics:
- **Gravitational constant:** G = 6.674 × 10⁻¹¹ N⋅m²/kg²
- **Earth mass:** M = 5.972 × 10²⁴ kg
- **Earth radius:** R = 6,371 km
- **Orbital velocity:** v = √(GM/r)
- **Orbital period:** T = 2π√(r³/GM)
- **Atmospheric density:** ρ = 1.225 × e^(-h/8.5) kg/m³
- **Doppler shift:** f_obs = f_source × (1 + v_radial/c)

Satellite data (positions, frequencies, orbital parameters) reflects real-world values as of 2025. Constellation presets (GPS, Starlink, Galileo, etc.) use actual satellite counts and orbital parameters.

---

## 🌙 Heritage Thread

A core theme throughout the project: **the Arab astronomical tradition** that underpins modern satellite science.

- **200+ Arabic star names** used throughout (Aldebaran, Betelgeuse, Rigel, Vega, Altair, Deneb...)
- **6 featured scholars:** al-Khwarizmi (algorithms), al-Biruni (geodesy), Ibn al-Haytham (optics), al-Sufi (star catalog), al-Tusi (orbital models), Ibn Majid (navigation)
- **Direct connections:** al-Khwarizmi's algebra → GPS algorithms. Ibn al-Haytham's optics → satellite cameras. al-Sufi's catalog → star tracker navigation.
- **Interactive astrolabe** — working digital recreation of the Islamic astronomical instrument
- **Arabic calligraphy** — star names shown in both Arabic script and transliteration

---

## 🖥️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

Requires: Canvas API, CSS Grid, ES6+, Web Audio API (for audio features)

---

## 📊 Project Stats

- **57 HTML files**
- **~1.1 MB total size**
- **0 external dependencies**
- **0 build steps**
- **~25,000 lines of code**
- **41 interactive experiences**
- **5 core educational phases**
- **200+ Arabic star names**
- **12 canvas-based simulations**
- **6 hands-on micro:bit experiments**
- **10+ real satellite frequency references**
- **7 audio-enabled experiences**

---

## 📄 License

Educational project. Free to use, share, and adapt for educational purposes.

---

## 🙏 Credits

**Built with:** HTML, CSS, JavaScript, and a deep respect for the astronomers — ancient and modern — who mapped the sky.

**Heritage sources:** al-Sufi's "Book of Fixed Stars" (964 CE), al-Khwarizmi's "Kitab al-Jabr" (820 CE), Ibn al-Haytham's "Kitab al-Manazir" (1011 CE), al-Biruni's geodetic measurements (1030 CE), al-Tusi's "Memoir on Astronomy" (1261 CE).

**Satellite data:** Based on public orbital parameters from CelesTrak, NORAD, ESA, NASA, ITU.

---

*Satellites in the Sky v1.0 — From Sputnik's beep to Starlink's constellation, from al-Sufi's star catalog to JWST's golden mirror.*
