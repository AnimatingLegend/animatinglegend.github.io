// Place this script on every page you want to monitor for errors

window.addEventListener('error', function (e) {
    window.location.href = '/redirect.html';
});

window.addEventListener('unhandledrejection', function (e) {
    window.location.href = '/redirect.html';
});

if (window.location.pathname === '/404.html') {
    window.location.replace('/redirect.html');
}
