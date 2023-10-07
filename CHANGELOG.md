# Changelog — Satellites in the Sky

## v1.0 (February 2026)

Full release. 57 HTML files, ~1.1 MB, zero dependencies.

### Session 6 — v1.0 Release Package
- `aa-microbit-space.html` — 6 BBC micro:bit satellite experiments with Python code
- `aa-sdr-guide.html` — Complete SDR satellite reception guide ($30 setup)
- `aa-faq.html` — Frequently asked questions (26 questions, 6 categories)
- `aa-help.html` — Getting started guide with learning paths & troubleshooting
- `README.md` — Full project documentation
- `CHANGELOG.md` — This file

### Session 5 — The Frontier (7 experiences)
- `aa-kessler.html` — Kessler syndrome chain-reaction debris simulation
- `aa-lagrange.html` — L1–L5 Lagrange points interactive explainer
- `aa-satellite-timeline.html` — Satellite history: Sputnik to Starlink
- `aa-golden-age.html` — 6 Islamic Golden Age scholars who enabled satellites
- `aa-debris-dodge.html` — Debris dodging mini-game with educational facts
- `aa-radio-space.html` — Virtual radio dial across satellite frequencies
- `aa-launch-window.html` — Launch window mechanics for ISS/GEO/Mars/Moon

### Session 5 — Deep Cuts (8 experiences)
- `aa-constellation-designer.html` — Design satellite constellations with 3D visualization
- `aa-doppler-demo.html` — Audio + visual Doppler effect demonstration
- `aa-reentry.html` — Atmospheric re-entry physics simulator
- `aa-space-law.html` — Interactive space treaty guide with quiz
- `aa-pale-blue-dot.html` — Contemplative scroll zoom from Earth to the void
- `aa-orbit-decay.html` — Atmospheric drag simulator with solar storm scenarios
- `aa-mission-planner.html` — Step-by-step satellite mission designer
- `aa-photo-guide.html` — Night sky photography guide with exposure calculator

### Session 4 — Beyond Roadmap (8 experiences)
- `aa-arabic-star-map.html` — Full Arabic star name atlas with pronunciations
- `aa-orbit-compare.html` — LEO vs MEO vs GEO vs HEO comparison tool
- `aa-space-weather.html` — Solar storms and satellite effects dashboard
- `aa-satellite-bingo.html` — Satellite spotting bingo card game
- `aa-signal-journey.html` — Follow a signal from satellite to phone
- `aa-satellite-anatomy.html` — Exploded-view satellite component guide
- `aa-ground-stations.html` — Global ground station network map
- `aa-frequency-spectrum.html` — Radio frequency allocation visualization

### Session 3 — Genius Ideas (16 roadmap experiences)
All 16 interactive experiences from the original roadmap:
- Altitude Ladder, Astrolabe Interactive, Culture Cards, Debris Field
- Eclipse Hunter, Gravity Well, Heritage Scholars, ISS Tour
- Kessler Cascade, Launch Countdown, Light Pollution, Math Lab
- Orbital Playground, Satellite Economics, Satellite Graveyard, Sky Music

### Sessions 1–2 — Core Build
- Phase 1: Night Sky Window (real-time satellite visualization)
- Phase 2: Explorer Depth (150+ satellite database with filtering)
- Phase 3: Mission Control (telemetry simulator with commanding)
- Phase 4: Orbital Science (Kepler's laws, gravity lab, math)
- Phase 5: Islamic Heritage (scholars, instruments, star names)
- Ultimate merged experience (all 5 phases, 68 KB)
- Portal, showcase gallery, roadmap

---

## Architecture Decisions

- **Zero dependencies** — no npm, no framework, no build step
- **Single-file architecture** — every HTML file is self-contained
- **Canvas API** — all visualizations, no external charting libraries
- **Web Audio API** — synthesized audio, no audio files
- **CSS custom properties** — consistent design system across all files
- **Google Fonts** — graceful degradation to system fonts offline
- **Progressive enhancement** — core content works without JavaScript
