// Service worker minimo: nessuna cache, sempre rete.
// Serve solo a rendere l'app installabile su Android: i dati restano sempre quelli aggiornati.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).catch(() =>
  new Response('Connessione assente. Questa app funziona solo online.',
    {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}}))); });
