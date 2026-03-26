const CACHE_NAME = 'cache-proyecto-v1.9'; 

const urlsToCache = [
    './',
    './index.html',
    './html/ventanaIntereses.html',
    './html/ventanaIva.html',
    './style.css',
    './javascripts/calculadoraIntereses.js', // Le indicamos que entre a la carpeta javascripts
    './javascripts/calculadoraIva.js',
    './javascripts/homePage.js',
    './novatica.png'
];

// 1. INSTALACIÓN: Guarda los archivos iniciales
self.addEventListener('install', event => {
    // Forza al Service Worker recién instalado a convertirse en el activo
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Nueva caché guardada: ' + CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. ACTIVACIÓN: Aquí es donde borramos la basura de versiones anteriores
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Si la caché que encontramos no es la actual (v2), la borramos
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Toma el control de la página inmediatamente
    );
});

// 3. FETCH: Estrategia "Cache First" (pero busca en red si no existe)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si está en caché, lo devuelve; si no, va a internet
                return response || fetch(event.request);
            })
    );
});