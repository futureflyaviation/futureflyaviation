var cacheName = 'future-fly'; 
var filesToCache = [
'/',    
'/index.html',    
'assets/css/style.j3j834h4.css', 
'assets/vendor/bootstrap/css/bootstrap.min.css',
'assets/vendor/icofont/icofont.min.css',
'assets/vendor/boxicons/css/boxicons.min.css',
'assets/vendor/venobox/venobox.css', 
'assets/vendor/owl.carousel/assets/owl.carousel.min.css',
'/js/main.js'  ];  
self.addEventListener('install', function(e) { 
e.waitUntil(
caches.open(cacheName).then(function(cache) { 
return cache.addAll(filesToCache);   
})    
);  
}); 
/* Serve cached content when offline */ 
self.addEventListener('fetch', function(e) {  
e.respondWith(      caches.match(e.request).then(function(response) {  
return response || fetch(e.request);
})   
);  
});