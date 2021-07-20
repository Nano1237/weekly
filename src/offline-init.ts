/**
 * A simple Service worker which allows the app to be offline capable.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('offline-service-worker.js').then(() => {
        }, console.error);
    });
}
