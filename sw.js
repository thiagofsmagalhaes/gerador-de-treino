const CACHE_NAME = 'treinoapp-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './luvas.png'
];

// Instalação do Service Worker e Cache de arquivos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o cache ou busca na rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
