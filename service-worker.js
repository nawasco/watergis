const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-ac72fbe0.js",
  "/watergis/_app/immutable/components/layout.svelte-f25e1fec.js",
  "/watergis/_app/immutable/components/error.svelte-36a6d867.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-9ce00519.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-6fd416a8.js",
  "/watergis/_app/immutable/chunks/index-abb8a827.js",
  "/watergis/_app/immutable/chunks/index-da9beac9.js",
  "/watergis/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/watergis/_app/immutable/chunks/_page-bbe3d13b.js",
  "/watergis/_app/immutable/assets/_page-508a831d.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-7c27cc7a.js",
  "/watergis/_app/immutable/chunks/1-8fe3b2b0.js",
  "/watergis/_app/immutable/chunks/2-58726fc4.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-1c5f5c4c.js"
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
  "/watergis/robots.txt"
], n = "1667899854887", t = self, o = `cache${n}`, p = l.concat(m), g = new Set(p);
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
async function h(s) {
  const e = await caches.open(`offline${n}`);
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && g.has(e.pathname), r = s.request.cache === "only-if-cached" && !i;
  a && !c && !r && s.respondWith(
    (async () => i && await caches.match(s.request) || h(s.request))()
  );
});
