---
layout: null
---

const staticCacheName = "chords-v1";

console.log("installing worker");

const filesToCache = [
  "/",
  {% for page in site.html_pages %}
    '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
    '{{ post.url }}',
  {% endfor %}
  // can be automated rather than manual entries
  "/images/icon192.png",
  "/images/icon512.png",
  "/images/logo.png",
  "/images/flag.png",
  "/images/404.jpg",
  "/style.css",
  "/index.html"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith("chords-")
            && cacheName != staticCacheName;
        }).map(function(cacheName){
          return cache.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener("fetch", function(e){
  e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   )
});
