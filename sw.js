const cacheName = 'todo-pwa-v1';
const assets = [
  './index.html',
  './manifest.json',
  './sw.js'
  // dodaj też ikonki i CSS jeśli są w osobnych plikach
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
