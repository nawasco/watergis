const l = [
  "/watergis/_app/immutable/assets/fa-solid-900-d27bc752.woff2",
  "/watergis/_app/immutable/assets/fa-solid-900-6d53c706.ttf",
  "/watergis/_app/immutable/start-7ac378eb.js",
  "/watergis/_app/immutable/components/layout.svelte-b9f3653e.js",
  "/watergis/_app/immutable/components/error.svelte-0f01e4b6.js",
  "/watergis/_app/immutable/components/pages/_page.svelte-2f9d5708.js",
  "/watergis/_app/immutable/modules/pages/_page.ts-f4c35b8f.js",
  "/watergis/_app/immutable/chunks/singletons-c09cb5af.js",
  "/watergis/_app/immutable/chunks/index-fbce07e2.js",
  "/watergis/_app/immutable/chunks/index-3d46d3d9.js",
  "/watergis/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/watergis/_app/immutable/chunks/_page-adf282bd.js",
  "/watergis/_app/immutable/assets/_page-87453f06.css",
  "/watergis/_app/immutable/chunks/_page-c82b235a.js",
  "/watergis/_app/immutable/chunks/0-a5edf11b.js",
  "/watergis/_app/immutable/chunks/1-6d2a82ee.js",
  "/watergis/_app/immutable/chunks/2-4067fb69.js",
  "/watergis/_app/immutable/chunks/html2canvas.esm-fb42d204.js",
  "/watergis/_app/immutable/chunks/purify.es-20117e50.js",
  "/watergis/_app/immutable/chunks/index.es-77227caf.js"
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
], n = "1667164702405", a = self, o = `cache${n}`, p = l.concat(m), g = new Set(p);
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
