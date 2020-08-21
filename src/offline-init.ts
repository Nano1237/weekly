if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('offline-service-worker.js').then(() => {
        }, console.error);
    });
}