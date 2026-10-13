const CACHE = 'porcaria-detetive-v1.0.1';
const CORE = ['./', './index.html', './manifest.webmanifest','./css/style.css','./js/cases.js','./js/app.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('porcaria-detetive-')&&k!==CACHE).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const req = event.request;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(hit=>hit || fetch(req).then(response=>{
    if(response && response.ok){const cloned=response.clone(); caches.open(CACHE).then(cache=>cache.put(req,cloned));}
    return response;
  }).catch(()=> req.mode==='navigate' ? caches.match('./index.html') : Response.error())));
});
