!(function(n) {
  'use strict';
  function e() {
    var e = n.crypto || n.msCrypto;
    if (!f && e && e.getRandomValues)
      try {
        var r = new Uint8Array(16);
        (s = f = function() {
          return e.getRandomValues(r), r;
        }),
          f();
      } catch (n) {}
    if (!f) {
      var o = new Array(16);
      (i = f = function() {
        for (var n, e = 0; e < 16; e++)
          0 === (3 & e) && (n = 4294967296 * Math.random()),
            (o[e] = (n >>> ((3 & e) << 3)) & 255);
        return o;
      }),
        'undefined' != typeof console &&
          console.warn &&
          console.warn(
            '[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()'
          );
    }
  }
  function r() {
    if ('function' == typeof require)
      try {
        var n = require('crypto').randomBytes;
        (c = f =
          n &&
          function() {
            return n(16);
          }),
          f();
      } catch (n) {}
  }
  function o(n, e, r) {
    var o = (e && r) || 0,
      t = 0;
    for (
      e = e || [],
        n.toLowerCase().replace(/[0-9a-f]{2}/g, function(n) {
          t < 16 && (e[o + t++] = y[n]);
        });
      t < 16;

    )
      e[o + t++] = 0;
    return e;
  }
  function t(n, e) {
    var r = e || 0,
      o = v;
    return (
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]] +
      '-' +
      o[n[r++]] +
      o[n[r++]] +
      '-' +
      o[n[r++]] +
      o[n[r++]] +
      '-' +
      o[n[r++]] +
      o[n[r++]] +
      '-' +
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]] +
      o[n[r++]]
    );
  }
  function u(n, e, r) {
    var o = (e && r) || 0,
      u = e || [];
    n = n || {};
    var a = null != n.clockseq ? n.clockseq : g,
      f = null != n.msecs ? n.msecs : new Date().getTime(),
      i = null != n.nsecs ? n.nsecs : C + 1,
      c = f - h + (i - C) / 1e4;
    if (
      (c < 0 && null == n.clockseq && (a = (a + 1) & 16383),
      (c < 0 || f > h) && null == n.nsecs && (i = 0),
      i >= 1e4)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (h = f), (C = i), (g = a), (f += 122192928e5);
    var s = (1e4 * (268435455 & f) + i) % 4294967296;
    (u[o++] = (s >>> 24) & 255),
      (u[o++] = (s >>> 16) & 255),
      (u[o++] = (s >>> 8) & 255),
      (u[o++] = 255 & s);
    var l = ((f / 4294967296) * 1e4) & 268435455;
    (u[o++] = (l >>> 8) & 255),
      (u[o++] = 255 & l),
      (u[o++] = ((l >>> 24) & 15) | 16),
      (u[o++] = (l >>> 16) & 255),
      (u[o++] = (a >>> 8) | 128),
      (u[o++] = 255 & a);
    for (var d = n.node || w, v = 0; v < 6; v++) u[o + v] = d[v];
    return e ? e : t(u);
  }
  function a(n, e, r) {
    var o = (e && r) || 0;
    'string' == typeof n &&
      ((e = 'binary' === n ? new d(16) : null), (n = null)),
      (n = n || {});
    var u = n.random || (n.rng || f)();
    if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), e))
      for (var a = 0; a < 16; a++) e[o + a] = u[a];
    return e || t(u);
  }
  var f, i, c, s, l;
  n ? e() : r();
  for (
    var d = 'function' == typeof Buffer ? Buffer : Array, v = [], y = {}, m = 0;
    m < 256;
    m++
  )
    (v[m] = (m + 256).toString(16).substr(1)), (y[v[m]] = m);
  var p = f(),
    w = [1 | p[0], p[1], p[2], p[3], p[4], p[5]],
    g = 16383 & ((p[6] << 8) | p[7]),
    h = 0,
    C = 0,
    R = a;
  (R.v1 = u),
    (R.v4 = a),
    (R.parse = o),
    (R.unparse = t),
    (R.BufferClass = d),
    (R._rng = f),
    (R._mathRNG = i),
    (R._nodeRNG = c),
    (R._whatwgRNG = s),
    'undefined' != typeof module && module.exports
      ? (module.exports = R)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return R;
        })
      : ((l = n.uuid),
        (R.noConflict = function() {
          return (n.uuid = l), R;
        }),
        (n.uuid = R));
})('undefined' != typeof window ? window : null);
//# sourceMappingURL=uuid.min.js.map
