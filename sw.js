/*  Satellites in the Sky — Service Worker v1.0
    Strategy: Cache-first for local assets, network-first for API calls (TLE data).
    All 58 HTML files + logos cached on install for full offline use.  */

const CACHE_NAME = 'sats-sky-v1.0';

const CORE_ASSETS = [
  './',
  './start_here.html',
  './aa-portal.html',
  './aa-night-sky-window-phase1.html',
  './aa-explorer-depth-phase2.html',
  './aa-mission-control-phase3.html',
  './aa-orbital-science-phase4.html',
  './aa-islamic-heritage-phase5.html',
  './aa-satellites-ultimate.html',
  './aa-showcase-gallery.html',
  './aa-altitude-ladder.html',
  './aa-arabic-star-map.html',
  './aa-astrolabe-interactive.html',
  './aa-constellation-designer.html',
  './aa-culture-cards.html',
  './aa-debris-dodge.html',
  './aa-debris-field.html',
  './aa-doppler-demo.html',
  './aa-eclipse-hunter.html',
  './aa-frequency-spectrum.html',
  './aa-golden-age.html',
  './aa-gravity-well.html',
  './aa-ground-stations.html',
  './aa-heritage-scholars.html',
  './aa-iss-tour.html',
  './aa-kessler-cascade.html',
  './aa-kessler.html',
  './aa-lagrange.html',
  './aa-launch-countdown.html',
  './aa-launch-window.html',
  './aa-light-pollution.html',
  './aa-math-lab.html',
  './aa-microbit-space.html',
  './aa-mission-planner.html',
  './aa-orbit-compare.html',
  './aa-orbit-decay.html',
  './aa-orbital-mechanics.html',
  './aa-orbital-playground.html',
  './aa-pale-blue-dot.html',
  './aa-photo-guide.html',
  './aa-radio-decoder.html',
  './aa-radio-space.html',
  './aa-reentry.html',
  './aa-satellite-anatomy.html',
  './aa-satellite-bingo.html',
  './aa-satellite-economics.html',
  './aa-satellite-graveyard.html',
  './aa-satellite-timeline.html',
  './aa-sdr-guide.html',
  './aa-signal-journey.html',
  './aa-sky-journal.html',
  './aa-sky-music.html',
  './aa-space-law.html',
  './aa-space-timeline.html',
  './aa-space-weather.html',
  './aa-spotters-guide.html',
  './aa-time-machine.html',
  './aa-zoom-out.html',
  './aa-faq.html',
  './aa-help.html',
  './logo_icon.png',
  './logo_icon_sm.png',
  './logo_wdiy.svg',
  './manifest.json',
  './icon-72x72.png',
  './icon-96x96.png',
  './icon-128x128.png',
  './icon-144x144.png',
  './icon-152x152.png',
  './icon-192x192.png',
  './icon-384x384.png',
  './icon-512x512.png',
];

/* TLE data endpoints — network-first with cache fallback */
const API_HOSTS = ['celestrak.org', 'celestrak.com', 'tle.ivanstanojevic.me'];

/* Install: pre-cache all core assets */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching core assets');
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

/* Activate: clean old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch strategy */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* API calls (TLE data): network-first, cache fallback */
  if (API_HOSTS.some(h => url.hostname.includes(h))) {
    event.respondWith(
      fetch(event.request).then(response => {
        /* Cache successful API responses for offline use */
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  /* Local assets: cache-first, network fallback */
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        /* Cache new local requests */
        if (response.ok && url.origin === self.location.origin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      /* Offline fallback for navigation requests */
      if (event.request.mode === 'navigate') {
        return caches.match('./aa-portal.html');
      }
    })
  );
});
