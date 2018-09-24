importScripts('/js/cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('wander').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/images/',
                '/css/style.css',
                '/css/bootstrap.css',
                '/fonts/DancingScript-Regular.ttf',
                '/font-awesome',
                '/js/main.js',
                'js/sw.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {

    console.log(event.request.url);

});