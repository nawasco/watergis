const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-c9c4ac88.js",
  "/watergis/_app/immutable/components/layout.svelte-f27c5754.js",
  "/watergis/_app/immutable/components/error.svelte-87cce996.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-fa41b398.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-22565dc2.js",
  "/watergis/_app/immutable/chunks/index-7ff8e55d.js",
  "/watergis/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/watergis/_app/immutable/chunks/stores-56bab5d1.js",
  "/watergis/_app/immutable/chunks/_page-e729b0b4.js",
  "/watergis/_app/immutable/assets/_page-89d4926e.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-ba3fe7c6.js",
  "/watergis/_app/immutable/chunks/1-35133697.js",
  "/watergis/_app/immutable/chunks/2-493b5bd4.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-5709233f.js"
], m = [
  "/watergis/.nojekyll",
  "/watergis/assets/icons/icon-128x128.png",
  "/watergis/assets/icons/icon-144x144.png",
  "/watergis/assets/icons/icon-152x152.png",
  "/watergis/assets/icons/icon-192x192.png",
  "/watergis/assets/icons/icon-384x384.png",
  "/watergis/assets/icons/icon-48x48.png",
  "/watergis/assets/icons/icon-512x512.png",
  "/watergis/assets/icons/icon-72x72.png",
  "/watergis/assets/icons/icon-96x96.png",
  "/watergis/favicon.png",
  "/watergis/manifest.webmanifest",
  "/watergis/map-center.png",
  "/watergis/robots.txt"
], n = "1666689699932", a = self, o = `cache${n}`, r = l.concat(m), g = new Set(r);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(r)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== o && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function h(s) {
  const e = await caches.open(`offline${n}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const i = await e.match(s);
    if (i)
      return i;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && g.has(e.pathname), p = s.request.cache === "only-if-cached" && !c;
  t && !i && !p && s.respondWith(
    (async () => c && await caches.match(s.request) || h(s.request))()
  );
});
