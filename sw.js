/* Pocket Studio — service worker. Change VERSION à chaque déploiement pour forcer la mise à jour. */
const VERSION = 'v1';
const CACHE = 'pocket-studio-' + VERSION;
const SHELL = [
  './', 'index.html', 'manifest.webmanifest',
  'icon.svg', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png',
  'dm-mono-latin-400-normal.woff2', 'dm-mono-latin-500-normal.woff2',
  'instrument-sans-latin-500-normal.woff2', 'instrument-sans-latin-600-normal.woff2', 'instrument-sans-latin-700-normal.woff2'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('pocket-studio-')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }          // cache d'abord, mise à jour en arrière-plan
    return (await net) || (req.mode === 'navigate' ? c.match('index.html') : Response.error());
  }));
});
