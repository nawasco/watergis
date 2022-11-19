const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-5683d7da.js",
  "/watergis/_app/immutable/components/layout.svelte-55caf579.js",
  "/watergis/_app/immutable/components/error.svelte-1dd8a7be.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-23a8589c.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-b2db0fc5.js",
  "/watergis/_app/immutable/chunks/index-d0decbdb.js",
  "/watergis/_app/immutable/chunks/index-66f8fb1c.js",
  "/watergis/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/watergis/_app/immutable/chunks/_page-fa3e5c77.js",
  "/watergis/_app/immutable/assets/_page-ffabfe38.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-b6419a9f.js",
  "/watergis/_app/immutable/chunks/1-50ebf77d.js",
  "/watergis/_app/immutable/chunks/2-986297c5.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-88e864ff.js",
  "/watergis/_app/immutable/chunks/index.es-d19f8a4a.js"
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
], n = "1668881786269", t = self, o = `cache${n}`, p = l.concat(m), g = new Set(p);
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
    const i = await e.match(s);
    if (i)
      return i;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && g.has(e.pathname), r = s.request.cache === "only-if-cached" && !c;
  a && !i && !r && s.respondWith(
    (async () => c && await caches.match(s.request) || h(s.request))()
  );
});
