const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-4c1939e3.js",
  "/watergis/_app/immutable/components/layout.svelte-f27c5754.js",
  "/watergis/_app/immutable/components/error.svelte-4a845dda.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-1b1a06d6.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-6e048ea5.js",
  "/watergis/_app/immutable/chunks/index-7ff8e55d.js",
  "/watergis/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/watergis/_app/immutable/chunks/stores-3e6ff6da.js",
  "/watergis/_app/immutable/chunks/_page-4e67a065.js",
  "/watergis/_app/immutable/assets/_page-89d4926e.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-ba3fe7c6.js",
  "/watergis/_app/immutable/chunks/1-1752b873.js",
  "/watergis/_app/immutable/chunks/2-a925bd96.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-e0738cad.js"
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
], n = "1666690700144", t = self, o = `cache${n}`, r = l.concat(m), g = new Set(r);
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
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && g.has(e.pathname), p = s.request.cache === "only-if-cached" && !c;
  a && !i && !p && s.respondWith(
    (async () => c && await caches.match(s.request) || h(s.request))()
  );
});
