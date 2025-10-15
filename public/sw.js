if (!self.define) {
  let e,
    a = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[n]) return;
    let t = {};
    const d = (e) => s(e, n),
      r = { module: { uri: n }, exports: t, require: d };
    a[n] = Promise.all(c.map((e) => r[e] || d(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "5af569693cbab8698ae306c640c0e6e6",
        },
        {
          url: "/_next/static/chunks/255-4efeec91c7871d79.js",
          revision: "4efeec91c7871d79",
        },
        {
          url: "/_next/static/chunks/356-e5489542cb0f1b9a.js",
          revision: "e5489542cb0f1b9a",
        },
        {
          url: "/_next/static/chunks/4bd1b696-c023c6e3521b1417.js",
          revision: "c023c6e3521b1417",
        },
        {
          url: "/_next/static/chunks/619-9168df9c2a29b74b.js",
          revision: "9168df9c2a29b74b",
        },
        {
          url: "/_next/static/chunks/app/(with-backNav)/history/%5Bkind%5D/page-d3075c3abc44580f.js",
          revision: "d3075c3abc44580f",
        },
        {
          url: "/_next/static/chunks/app/(with-backNav)/layout-5db55c76417658d4.js",
          revision: "5db55c76417658d4",
        },
        {
          url: "/_next/static/chunks/app/(with-backNav)/sellerDetail/%5Bid%5D/page-19d8976696491922.js",
          revision: "19d8976696491922",
        },
        {
          url: "/_next/static/chunks/app/(with-navbar)/chatList/page-137b2c879c933d62.js",
          revision: "137b2c879c933d62",
        },
        {
          url: "/_next/static/chunks/app/(with-navbar)/layout-7c9b2d4296a7fe2c.js",
          revision: "7c9b2d4296a7fe2c",
        },
        {
          url: "/_next/static/chunks/app/(with-navbar)/myPage/page-7689ede88c8dbc45.js",
          revision: "7689ede88c8dbc45",
        },
        {
          url: "/_next/static/chunks/app/(with-navbar)/page-91aa3208794d9af1.js",
          revision: "91aa3208794d9af1",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-00f021304842b549.js",
          revision: "00f021304842b549",
        },
        {
          url: "/_next/static/chunks/app/layout-7c1cf6d68dc70c94.js",
          revision: "7c1cf6d68dc70c94",
        },
        {
          url: "/_next/static/chunks/app/product/%5Bid%5D/page-8c5d02bb50debdb3.js",
          revision: "8c5d02bb50debdb3",
        },
        {
          url: "/_next/static/chunks/app/upload/page-8c5d02bb50debdb3.js",
          revision: "8c5d02bb50debdb3",
        },
        {
          url: "/_next/static/chunks/framework-acd67e14855de5a2.js",
          revision: "acd67e14855de5a2",
        },
        {
          url: "/_next/static/chunks/main-app-b4e346afc48fc5bb.js",
          revision: "b4e346afc48fc5bb",
        },
        {
          url: "/_next/static/chunks/main-d8a67487430c080c.js",
          revision: "d8a67487430c080c",
        },
        {
          url: "/_next/static/chunks/pages/_app-7d307437aca18ad4.js",
          revision: "7d307437aca18ad4",
        },
        {
          url: "/_next/static/chunks/pages/_error-cb2a52f75f2162e2.js",
          revision: "cb2a52f75f2162e2",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-6f2fc1778fca71d6.js",
          revision: "6f2fc1778fca71d6",
        },
        {
          url: "/_next/static/css/cdcf37c7664031f5.css",
          revision: "cdcf37c7664031f5",
        },
        {
          url: "/_next/static/media/119cf01b445a4dc3-s.p.woff2",
          revision: "76a1283c27610a9ad7d6940b9b174e46",
        },
        {
          url: "/_next/static/media/12f0acdcae926a24-s.p.woff2",
          revision: "65d0a735617322a4fe0bcc5350642159",
        },
        {
          url: "/_next/static/media/addIcon.9c6ecc54.svg",
          revision: "58b1ab980ba03120e15ae13bf5e127fb",
        },
        {
          url: "/_next/static/media/backIcon.546a058d.svg",
          revision: "cbd6b4d476d36f8474c85a447eda8b34",
        },
        {
          url: "/_next/static/media/bagIcon.86248148.svg",
          revision: "1d56763626db4288d712f24ea194eac9",
        },
        {
          url: "/_next/static/media/bigBagIcon.a0349e02.svg",
          revision: "2d34f2f4236a4ae57854cc8e74131d3a",
        },
        {
          url: "/_next/static/media/cfa29e4f0aabf12a-s.p.woff2",
          revision: "d3b288a528801dae385d6f104693e022",
        },
        {
          url: "/_next/static/media/chatIcon.aea7b840.svg",
          revision: "b20263af5553a84418e25985916c1c0d",
        },
        {
          url: "/_next/static/media/chatIcon_2.22a73aca.svg",
          revision: "6c7db0995c2715a572157b844eb13cbd",
        },
        {
          url: "/_next/static/media/dd3e76c51ce1a360-s.p.woff2",
          revision: "4e75935a8e92c6b078d8e1bafd81cb42",
        },
        {
          url: "/_next/static/media/e00e15f44d7b58c0-s.p.woff2",
          revision: "33860c9446a2671456e4619020774137",
        },
        {
          url: "/_next/static/media/e725ed3d1f6bc360-s.p.woff2",
          revision: "6e125543eff1bb5e7dde302f1f50a7b0",
        },
        {
          url: "/_next/static/media/gpsIcon.1d9efc1d.svg",
          revision: "04227506fec47588c99ad82b19708bdd",
        },
        {
          url: "/_next/static/media/homeIcon.681b9aec.svg",
          revision: "fd4dde7cb29ee8c137030a6e4e16867c",
        },
        {
          url: "/_next/static/media/homeIcon_2.cc1a7dbf.svg",
          revision: "ade3f0af8d1f6da165d1e633b4331a46",
        },
        {
          url: "/_next/static/media/likeIcon.cd933d96.svg",
          revision: "d54fef536609c03ac6fae27638c0d662",
        },
        {
          url: "/_next/static/media/myPageIcon.1e4c35fa.svg",
          revision: "4aa2a76b285ce82df3f366a1f9228709",
        },
        {
          url: "/_next/static/media/myPageIcon_2.0d5d46e5.svg",
          revision: "eb4cf06076e4e0fb46d46b0f8b326f2e",
        },
        {
          url: "/_next/static/media/noticeIcon.d36cca7e.svg",
          revision: "92d6b902e666ad09e6c6f3f02a01f978",
        },
        {
          url: "/_next/static/media/order.36d93f25.svg",
          revision: "2b6ca75e0b933a2e03e753526a9f1e54",
        },
        {
          url: "/_next/static/media/peopleSmallIcon.fa26895f.svg",
          revision: "844b74a8534e8808e12601a2e98f3f01",
        },
        {
          url: "/_next/static/media/samplePrf.66d636d6.svg",
          revision: "43c2e2dec22958209cb0a300c56c9056",
        },
        {
          url: "/_next/static/media/sampleProduct.c8e3d8c6.jpg",
          revision: "07246a5299ae623bfa11c2f97b6111b2",
        },
        {
          url: "/_next/static/media/searchIcon.51b7ced7.svg",
          revision: "9fa9a487ad19c062f5089ee83534bae6",
        },
        {
          url: "/_next/static/media/staricon.2066fb93.svg",
          revision: "6a4c47c08b42ab1c9fdec7987213f3f2",
        },
        {
          url: "/_next/static/z0EVETcem5b2klpeBraNW/_buildManifest.js",
          revision: "3c13eb8f75f08c2826600a7cad66b18b",
        },
        {
          url: "/_next/static/z0EVETcem5b2klpeBraNW/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/fonts/Pretendard-Bold.woff2",
          revision: "33860c9446a2671456e4619020774137",
        },
        {
          url: "/fonts/Pretendard-ExtraBold.woff2",
          revision: "4e75935a8e92c6b078d8e1bafd81cb42",
        },
        {
          url: "/fonts/Pretendard-Light.woff2",
          revision: "6e125543eff1bb5e7dde302f1f50a7b0",
        },
        {
          url: "/fonts/Pretendard-Medium.woff2",
          revision: "65d0a735617322a4fe0bcc5350642159",
        },
        {
          url: "/fonts/Pretendard-Regular.woff2",
          revision: "76a1283c27610a9ad7d6940b9b174e46",
        },
        {
          url: "/fonts/Pretendard-SemiBold.woff2",
          revision: "d3b288a528801dae385d6f104693e022",
        },
        {
          url: "/logoIcons/icon512_maskable.png",
          revision: "de08e882ad0e468869ddae6cc6d742dc",
        },
        {
          url: "/logoIcons/icon512_rounded.png",
          revision: "995585f7087fe4398902762d5c9fbbae",
        },
        {
          url: "/splityLogo.svg",
          revision: "bc03058259a0df40cb315b5c175e523c",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: c,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
