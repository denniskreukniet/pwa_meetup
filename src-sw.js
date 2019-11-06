workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    /https:\/\/pluralsight\-pwa\-scratch\.firebaseio\.com\/*\.json/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'api-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Only cache requests for a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
                // Only cache 50 requests.
                maxEntries: 50,
            }),
        ]

    })
);
