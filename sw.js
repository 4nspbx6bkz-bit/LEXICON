self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("axis-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./script.js",
        "./manifest.json",
        "./icon192.png",
        "./icon512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});