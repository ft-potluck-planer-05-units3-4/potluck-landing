_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    2: function (n, e, t) {
      t("GcxT"), (n.exports = t("nOHt"));
    },
    "3ERx": function (n, e, t) {},
    GcxT: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t("IlR1");
        },
      ]);
    },
    IlR1: function (n, e, t) {
      "use strict";
      t.r(e);
      var o = t("q1tI"),
        u = t.n(o),
        a = t("nOHt"),
        w = t.n(a),
        i = (t("3ERx"), u.a.createElement);
      e.default = function (n) {
        var e = n.Component,
          t = n.pageProps;
        return (
          Object(o.useEffect)(function () {
            window.onNextjsAppDidMount && window.onNextjsAppDidMount(),
              window.onNextjsRouteChangeComplete &&
                window.onNextjsRouteChangeComplete();
            var n = function () {
                window.onNextjsRouteChangeStart &&
                  window.onNextjsRouteChangeStart();
              },
              e = function () {
                window.onNextjsRouteChangeComplete &&
                  window.onNextjsRouteChangeComplete();
              };
            return (
              w.a.events.on("routeChangeStart", n),
              w.a.events.on("routeChangeComplete", e),
              function () {
                w.a.events.off("routeChangeStart", n),
                  w.a.events.off("routeChangeComplete", e);
              }
            );
          }, []),
          i(e, t)
        );
      };
    },
  },
  [[2, 0, 2, 1]],
]);
