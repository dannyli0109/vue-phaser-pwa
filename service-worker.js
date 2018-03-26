importScripts("/vue-phaser-pwa/precache-manifest.b26a0f2120a816c2449ae55b451536d4.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "vue_phaser_pwa"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/img\/pacman/, workbox.strategies.staleWhileRevalidate({
    cacheName: 'icons',
    plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 30 * 24 * 60 * 60
        })
    ]
}))
