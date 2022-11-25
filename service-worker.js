const l = [
  "/watergis/_app/immutable/start-08aa4ed6.js",
  "/watergis/_app/immutable/components/layout.svelte-59b0d820.js",
  "/watergis/_app/immutable/components/error.svelte-a2418c2d.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-21b0d0b6.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-687127a0.js",
  "/watergis/_app/immutable/chunks/index-73d65c13.js",
  "/watergis/_app/immutable/chunks/index-aae2ee95.js",
  "/watergis/_app/immutable/chunks/preload-helper-9b728935.js",
  "/watergis/_app/immutable/chunks/_page-336da03b.js",
  "/watergis/_app/immutable/assets/_page-123f531b.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-e732bbe7.js",
  "/watergis/_app/immutable/chunks/1-02568370.js",
  "/watergis/_app/immutable/chunks/2-a75f805b.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-88e864ff.js",
  "/watergis/_app/immutable/chunks/index.es-71d10b7d.js"
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
  "/watergis/robots.txt"
], c = "1669414367427", a = self, o = `cache${c}`, r = l.concat(g), m = new Set(r);
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
  const e = await caches.open(`offline${c}`);
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && m.has(e.pathname), p = s.request.cache === "only-if-cached" && !n;
  t && !i && !p && s.respondWith(
    (async () => n && await caches.match(s.request) || h(s.request))()
  );
});
