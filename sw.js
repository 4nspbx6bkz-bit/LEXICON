self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

// NUNCA CACHEAR HTML/JS (pois causa erro de versão)
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  // Sempre busca online
  event.respondWith(fetch(req).catch(() => null));
});
