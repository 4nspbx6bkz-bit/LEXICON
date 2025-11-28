self.addEventListener("install", (e) => {
  console.log("SW instalado");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("SW ativado");
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("axis-cache").then((cache) =>
      fetch(event.request)
        .then((response) => {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => cache.match(event.request))
    )
  );
});