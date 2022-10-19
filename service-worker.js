const m = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-a666ff50.js",
  "/watergis/_app/immutable/components/layout.svelte-a9cbc21f.js",
  "/watergis/_app/immutable/components/error.svelte-47e7ed75.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-17663592.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-7971a996.js",
  "/watergis/_app/immutable/chunks/index-a963075e.js",
  "/watergis/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/watergis/_app/immutable/chunks/stores-0c6a36b4.js",
  "/watergis/_app/immutable/chunks/_page-cf07b2f9.js",
  "/watergis/_app/immutable/assets/_page-056e74a9.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-2f57b4e8.js",
  "/watergis/_app/immutable/chunks/1-b60a0d1e.js",
  "/watergis/_app/immutable/chunks/2-c060b2a2.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-465f7aff.js"
], g = [
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
  "/watergis/robots.txt",
  "/watergis/smui-dark.css",
  "/watergis/smui.css"
], n = "1666191102925", t = self, o = `cache${n}`, r = m.concat(g), l = new Set(r);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(r)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== o && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function u(s) {
  const e = await caches.open(`offline${n}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const i = await e.match(s);
    if (i)
      return i;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && l.has(e.pathname), p = s.request.cache === "only-if-cached" && !c;
  a && !i && !p && s.respondWith(
    (async () => c && await caches.match(s.request) || u(s.request))()
  );
});
