const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-b25606e9.js",
  "/watergis/_app/immutable/components/layout.svelte-55caf579.js",
  "/watergis/_app/immutable/components/error.svelte-e73d0218.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-2a1210b0.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-f2202798.js",
  "/watergis/_app/immutable/chunks/index-d0decbdb.js",
  "/watergis/_app/immutable/chunks/index-66f8fb1c.js",
  "/watergis/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/watergis/_app/immutable/chunks/_page-6310ed1d.js",
  "/watergis/_app/immutable/assets/_page-ffabfe38.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-b6419a9f.js",
  "/watergis/_app/immutable/chunks/1-1a85ace3.js",
  "/watergis/_app/immutable/chunks/2-7019a90c.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-88e864ff.js",
  "/watergis/_app/immutable/chunks/index.es-16394fd7.js"
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
], n = "1668353623477", a = self, o = `cache${n}`, p = l.concat(m), g = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(p)).then(() => {
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && g.has(e.pathname), r = s.request.cache === "only-if-cached" && !c;
  t && !i && !r && s.respondWith(
    (async () => c && await caches.match(s.request) || h(s.request))()
  );
});
