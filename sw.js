/* Minimal service worker to serve index.html for navigation requests.
   This provides an app-shell fallback so SPA routes still load on refresh.
*/
const CACHE_NAME = "app-shell-v1";
const OFFLINE_URL = "/index.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_URL]).catch(() => {});
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // For navigation requests, try network first, fallback to cached index.html
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If valid response, update the cache and return
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(OFFLINE_URL, copy));
          }
          return response;
        })
        .catch(() => caches.match(OFFLINE_URL)),
    );
  }
});
