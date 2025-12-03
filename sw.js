self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Não cacheia NADA — força SEMPRE pegar online
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
