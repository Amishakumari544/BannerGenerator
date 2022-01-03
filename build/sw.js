if (!self.define) {
  let e,
    i = {};
  const r = (r, s) => (
    (r = new URL(r + ".js", s).href),
    i[r] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = i), document.head.appendChild(e);
        } else (e = r), importScripts(r), i();
      }).then(() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, t) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[n]) return;
    let o = {};
    const c = (e) => r(e, n),
      d = { module: { uri: n }, exports: o, require: c };
    i[n] = Promise.all(s.map((e) => d[e] || c(e))).then((e) => (t(...e), o));
  };
}
define(["./workbox-f2bd007a"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "index.css", revision: "b45c27213ec1600bc1d5fa9b72c77ab8" },
        { url: "index.html", revision: "b334118f30effa226d104d8e1a9e19a4" },
        { url: "index.js", revision: "4e553295153aba91515e3c7896998202" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
