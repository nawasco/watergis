const m = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-cc1c882b.js",
  "/watergis/_app/immutable/components/layout.svelte-ba0b0372.js",
  "/watergis/_app/immutable/components/error.svelte-f7bfea82.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-bb43bd8e.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-f3bd809e.js",
  "/watergis/_app/immutable/chunks/index-952dc840.js",
  "/watergis/_app/immutable/chunks/preload-helper-aa6bc0ce.js",
  "/watergis/_app/immutable/chunks/stores-be1f3060.js",
  "/watergis/_app/immutable/chunks/_page-12916bf3.js",
  "/watergis/_app/immutable/assets/_page-f911e15d.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-fec88e83.js",
  "/watergis/_app/immutable/chunks/1-c103211f.js",
  "/watergis/_app/immutable/chunks/2-6f824b16.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-5e52747e.js"
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
], n = "1665927693602", a = self, o = `cache${n}`, r = m.concat(g), l = new Set(r);
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
async function u(s) {
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), i = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && l.has(e.pathname), p = s.request.cache === "only-if-cached" && !c;
  t && !i && !p && s.respondWith(
    (async () => c && await caches.match(s.request) || u(s.request))()
  );
});
