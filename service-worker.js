const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-01b516b5.js",
  "/watergis/_app/immutable/components/layout.svelte-b9f3653e.js",
  "/watergis/_app/immutable/components/error.svelte-2a3bd13e.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-a241a847.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-00cba5c9.js",
  "/watergis/_app/immutable/chunks/index-fbce07e2.js",
  "/watergis/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/watergis/_app/immutable/chunks/stores-ccaad870.js",
  "/watergis/_app/immutable/chunks/_page-0fd392ee.js",
  "/watergis/_app/immutable/assets/_page-f2c95542.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-a5edf11b.js",
  "/watergis/_app/immutable/chunks/1-4b9124a7.js",
  "/watergis/_app/immutable/chunks/2-802dd237.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-7fa32a11.js"
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
], n = "1667148639586", t = self, o = `cache${n}`, r = l.concat(m), g = new Set(r);
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
