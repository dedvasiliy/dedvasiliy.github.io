self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Просто пропускаем все запросы напрямую, чтобы всегда были свежие данные
  event.respondWith(fetch(event.request));
});
