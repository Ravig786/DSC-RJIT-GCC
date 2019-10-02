var cacheName = 'GCPCrashCourse';
var filesToCache = [
  '/',
  '/index.html',
  'css/index.css',
  'js/index.js',
  'images/Android.svg',
  'images/BackgroundPhone.svg',
  'images/Background.svg',
  'images/Certification.svg',
  'images/Data.svg',
  'images/FullTextLogo.svg',
  'images/Hoodie.svg',
  'images/ML.svg',
  'images/Pen.svg',
  'images/StepOne.svg',
  'images/StepTwo.svg',
  'images/StepThree.svg',
  'icons/favicons/icon-512x512.png',
  'icons/favicons/favicon.ico'
];self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});