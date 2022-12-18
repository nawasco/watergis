const m = [
  "/_app/immutable/assets/_page-6810e304.css",
  "/_app/immutable/chunks/0-8c3f9aed.js",
  "/_app/immutable/chunks/1-9724a59d.js",
  "/_app/immutable/chunks/2-81ddc1e6.js",
  "/_app/immutable/components/pages/_page.svelte-5f755da1.js",
  "/_app/immutable/modules/pages/_page.ts-6a8cdd0a.js",
  "/_app/immutable/chunks/index-af4b29fc.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/index-189e0129.js",
  "/_app/immutable/components/error.svelte-8498ad8d.js",
  "/_app/immutable/start-c31e3364.js",
  "/_app/immutable/chunks/singletons-f31f1661.js",
  "/_app/immutable/chunks/purify.es-f1425ba2.js",
  "/_app/immutable/components/layout.svelte-e9f0b961.js",
  "/_app/immutable/chunks/index-5cbadba0.js",
  "/_app/immutable/chunks/_page-7e4796dc.js",
  "/_app/immutable/chunks/index.es-4e8c9eee.js",
  "/_app/immutable/chunks/html2canvas.esm-c0237c70.js",
  "/_app/immutable/chunks/_page-12333780.js"
], h = [
  "/.nojekyll",
  "/assets/icons/icon-128x128.png",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/icon-152x152.png",
  "/assets/icons/icon-192x192.png",
  "/assets/icons/icon-384x384.png",
  "/assets/icons/icon-48x48.png",
  "/assets/icons/icon-512x512.png",
  "/assets/icons/icon-72x72.png",
  "/assets/icons/icon-96x96.png",
  "/assets/preview-1200x630.png",
  "/favicon.png",
  "/manifest.webmanifest",
  "/robots.txt"
], i = "1671362242113", t = self, o = `cache${i}`, p = m.concat(h), u = new Set(p);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
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
async function r(s) {
  const e = await caches.open(`offline${i}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && u.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  a && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
