const g = [
  "/watergis/_app/immutable/assets/_page-07bf5adb.css",
  "/watergis/_app/immutable/chunks/0-8c3f9aed.js",
  "/watergis/_app/immutable/chunks/_page-7e4796dc.js",
  "/watergis/_app/immutable/start-9ae15960.js",
  "/watergis/_app/immutable/components/error.svelte-0e95dec4.js",
  "/watergis/_app/immutable/chunks/1-30f21a4c.js",
  "/watergis/_app/immutable/chunks/index-05932267.js",
  "/watergis/_app/immutable/chunks/singletons-f31f1661.js",
  "/watergis/_app/immutable/chunks/2-0e06cca0.js",
  "/watergis/_app/immutable/chunks/index-189e0129.js",
  "/watergis/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/watergis/_app/immutable/components/layout.svelte-e9f0b961.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-3d46a4b2.js",
  "/watergis/_app/immutable/chunks/index-5cbadba0.js",
  "/watergis/_app/immutable/chunks/purify.es-b43afbc7.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-b8f85a09.js",
  "/watergis/_app/immutable/chunks/index.es-c09dda1f.js",
  "/watergis/_app/immutable/chunks/_page-ee4dde0e.js"
], l = [
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
  "/watergis/assets/preview-1200x630.png",
  "/watergis/favicon.png",
  "/watergis/manifest.webmanifest",
  "/watergis/robots.txt"
], n = "1670689130801", t = self, o = `cache${n}`, r = g.concat(l), m = new Set(r);
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
async function h(s) {
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && m.has(e.pathname), p = s.request.cache === "only-if-cached" && !c;
  a && !i && !p && s.respondWith(
    (async () => c && await caches.match(s.request) || h(s.request))()
  );
});
