const CACHE_NAME = 'calculadora-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './novatica.png'
];

// Instala el Service Worker y guarda los archivos en caché
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Responde con los archivos en caché si no hay internet
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});