import Q from "react";
import mr from "react-dom";
var ce, z = mr;
if (process.env.NODE_ENV === "production")
  ce = z.createRoot, z.hydrateRoot;
else {
  var $e = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ce = function(n, o) {
    $e.usingClientEntryPoint = !0;
    try {
      return z.createRoot(n, o);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  };
}
var Er = Object.defineProperty, _r = (n, o, v) => o in n ? Er(n, o, { enumerable: !0, configurable: !0, writable: !0, value: v }) : n[o] = v, G = (n, o, v) => _r(n, typeof o != "symbol" ? o + "" : o, v);
const Rr = {
  stringify: (n) => n ? "true" : "false",
  parse: (n) => /^[ty1-9]/i.test(n)
}, wr = {
  stringify: (n) => n.name,
  parse: (n, o, v) => {
    const b = (() => {
      if (typeof window < "u" && n in window)
        return window[n];
      if (typeof global < "u" && n in global)
        return global[n];
    })();
    return typeof b == "function" ? b.bind(v) : void 0;
  }
}, Or = {
  stringify: (n) => JSON.stringify(n),
  parse: (n) => JSON.parse(n)
}, Tr = {
  stringify: (n) => `${n}`,
  parse: (n) => parseFloat(n)
}, Cr = {
  stringify: (n) => n,
  parse: (n) => n
}, le = {
  string: Cr,
  number: Tr,
  boolean: Rr,
  function: wr,
  json: Or
};
function Sr(n) {
  return n.replace(
    /([a-z0-9])([A-Z])/g,
    (o, v, b) => `${v}-${b.toLowerCase()}`
  );
}
const X = Symbol.for("r2wc.render"), Z = Symbol.for("r2wc.connected"), $ = Symbol.for("r2wc.context"), A = Symbol.for("r2wc.props");
function Pr(n, o, v) {
  var b, j, D;
  o.props || (o.props = n.propTypes ? Object.keys(n.propTypes) : []), o.events || (o.events = []);
  const k = Array.isArray(o.props) ? o.props.slice() : Object.keys(o.props), T = Array.isArray(o.events) ? o.events.slice() : Object.keys(o.events), f = {}, x = {}, g = {}, R = {};
  for (const p of k) {
    f[p] = Array.isArray(o.props) ? "string" : o.props[p];
    const h = Sr(p);
    g[p] = h, R[h] = p;
  }
  for (const p of T)
    x[p] = Array.isArray(o.events) ? {} : o.events[p];
  class C extends HTMLElement {
    constructor() {
      super(), G(this, D, !0), G(this, j), G(this, b, {}), G(this, "container"), o.shadow ? this.container = this.attachShadow({
        mode: o.shadow
      }) : this.container = this, this[A].container = this.container;
      for (const h of k) {
        const S = g[h], w = this.getAttribute(S), m = f[h], c = m ? le[m] : null;
        c != null && c.parse && w && (this[A][h] = c.parse(w, S, this));
      }
      for (const h of T)
        this[A][h] = (S) => {
          const w = h.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(w, { detail: S, ...x[h] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(R);
    }
    connectedCallback() {
      this[Z] = !0, this[X]();
    }
    disconnectedCallback() {
      this[Z] = !1, this[$] && v.unmount(this[$]), delete this[$];
    }
    attributeChangedCallback(h, S, w) {
      const m = R[h], c = f[m], Y = c ? le[c] : null;
      m in f && Y != null && Y.parse && w && (this[A][m] = Y.parse(w, h, this), this[X]());
    }
    [(D = Z, j = $, b = A, X)]() {
      this[Z] && (this[$] ? v.update(this[$], this[A]) : this[$] = v.mount(
        this.container,
        n,
        this[A]
      ));
    }
  }
  for (const p of k) {
    const h = g[p], S = f[p];
    Object.defineProperty(C.prototype, p, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[A][p];
      },
      set(w) {
        this[A][p] = w;
        const m = S ? le[S] : null;
        if (m != null && m.stringify) {
          const c = m.stringify(w, h, this);
          this.getAttribute(h) !== c && this.setAttribute(h, c);
        } else
          this[X]();
      }
    });
  }
  return C;
}
function jr(n, o, v) {
  const b = ce(n), j = Q.createElement(o, v);
  return b.render(j), {
    root: b,
    ReactComponent: o
  };
}
function kr({ root: n, ReactComponent: o }, v) {
  const b = Q.createElement(o, v);
  n.render(b);
}
function xr({ root: n }) {
  n.unmount();
}
function Ar(n, o = {}) {
  return Pr(n, o, { mount: jr, update: kr, unmount: xr });
}
var fe = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Dr() {
  if (We) return M;
  We = 1;
  var n = Q, o = Symbol.for("react.element"), v = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(T, f, x) {
    var g, R = {}, C = null, p = null;
    x !== void 0 && (C = "" + x), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (p = f.ref);
    for (g in f) b.call(f, g) && !D.hasOwnProperty(g) && (R[g] = f[g]);
    if (T && T.defaultProps) for (g in f = T.defaultProps, f) R[g] === void 0 && (R[g] = f[g]);
    return { $$typeof: o, type: T, key: C, ref: p, props: R, _owner: j.current };
  }
  return M.Fragment = v, M.jsx = k, M.jsxs = k, M;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Fr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Q, o = Symbol.for("react.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = h && e[h] || e[S];
      return typeof r == "function" ? r : null;
    }
    var m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Y("error", e, t);
      }
    }
    function Y(e, r, t) {
      {
        var a = m.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ye = !1, Ne = !1, Ve = !1, Ue = !1, Me = !1, de;
    de = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === D || Me || e === j || e === x || e === g || Ue || e === p || Ye || Ne || Ve || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === k || e.$$typeof === T || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case v:
          return "Portal";
        case D:
          return "Profiler";
        case j:
          return "StrictMode";
        case x:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ve(r) + ".Consumer";
          case k:
            var t = e;
            return ve(t._context) + ".Provider";
          case f:
            return Be(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : P(e.type) || "Memo";
          case C: {
            var u = e, l = u._payload, s = u._init;
            try {
              return P(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, N = 0, pe, he, ye, be, ge, me, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function qe() {
      {
        if (N === 0) {
          pe = console.log, he = console.info, ye = console.warn, be = console.error, ge = console.group, me = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ke() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: pe
            }),
            info: F({}, e, {
              value: he
            }),
            warn: F({}, e, {
              value: ye
            }),
            error: F({}, e, {
              value: be
            }),
            group: F({}, e, {
              value: ge
            }),
            groupCollapsed: F({}, e, {
              value: me
            }),
            groupEnd: F({}, e, {
              value: Ee
            })
          });
        }
        N < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = m.ReactCurrentDispatcher, re;
    function B(e, r, t) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, q;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      q = new He();
    }
    function Re(e, r) {
      if (!e || te)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      te = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = ee.current, ee.current = null, qe();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (_) {
              a = _;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var i = _.stack.split(`
`), E = a.stack.split(`
`), d = i.length - 1, y = E.length - 1; d >= 1 && y >= 0 && i[d] !== E[y]; )
            y--;
          for (; d >= 1 && y >= 0; d--, y--)
            if (i[d] !== E[y]) {
              if (d !== 1 || y !== 1)
                do
                  if (d--, y--, y < 0 || i[d] !== E[y]) {
                    var O = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, O), O;
                  }
                while (d >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = l, Ke(), Error.prepareStackTrace = u;
      }
      var L = e ? e.displayName || e.name : "", I = L ? B(L) : "";
      return typeof e == "function" && q.set(e, I), I;
    }
    function ze(e, r, t) {
      return Re(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Ge(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case x:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ze(e.render);
          case R:
            return K(e.type, r, t);
          case C: {
            var a = e, u = a._payload, l = a._init;
            try {
              return K(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, we = {}, Oe = m.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Xe(e, r, t, a, u) {
      {
        var l = Function.call.bind(V);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var E = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (H(u), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), H(null)), i instanceof Error && !(i.message in we) && (we[i.message] = !0, H(u), c("Failed %s type: %s", t, i.message), H(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ne(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Ce(e) {
      if (er(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Te(e);
    }
    var U = m.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, ae;
    ae = {};
    function tr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = P(U.current.type);
        ae[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(U.current.type), e.ref), ae[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Se || (Se = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, a, u, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ur(e, r, t, a, u) {
      {
        var l, s = {}, i = null, E = null;
        t !== void 0 && (Ce(t), i = "" + t), nr(r) && (Ce(r.key), i = "" + r.key), tr(r) && (E = r.ref, ar(r, u));
        for (l in r)
          V.call(r, l) && !rr.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (i || E) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(s, y), E && ir(s, y);
        }
        return sr(e, i, E, u, a, U.current, s);
      }
    }
    var oe = m.ReactCurrentOwner, je = m.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function ke() {
      {
        if (oe.current) {
          var e = P(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var xe = {};
    function cr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + P(e._owner.type) + "."), W(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), W(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            se(a) && Ae(a, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = w(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), s; !(s = l.next()).done; )
              se(s.value) && Ae(s.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = P(r);
          Xe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var u = P(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            W(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Fe = {};
    function Ie(e, r, t, a, u, l) {
      {
        var s = Je(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = lr();
          E ? i += E : i += ke();
          var d;
          e === null ? d = "null" : ne(e) ? d = "array" : e !== void 0 && e.$$typeof === o ? (d = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var y = ur(e, r, t, u, l);
        if (y == null)
          return y;
        if (s) {
          var O = r.children;
          if (O !== void 0)
            if (a)
              if (ne(O)) {
                for (var L = 0; L < O.length; L++)
                  De(O[L], e);
                Object.freeze && Object.freeze(O);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(O, e);
        }
        if (V.call(r, "key")) {
          var I = P(e), _ = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ue = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[I + ue]) {
            var br = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, I, br, I), Fe[I + ue] = !0;
          }
        }
        return e === b ? dr(y) : fr(y), y;
      }
    }
    function vr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var hr = pr, yr = vr;
    J.Fragment = b, J.jsx = hr, J.jsxs = yr;
  }()), J;
}
process.env.NODE_ENV === "production" ? fe.exports = Dr() : fe.exports = Fr();
var Ir = fe.exports;
const $r = ({ name: n }) => /* @__PURE__ */ Ir.jsxs("h1", { children: [
  "Hello, ",
  n,
  "!"
] }), Wr = Ar($r, {
  props: { name: "string" }
  // Define prop types for attributes
});
customElements.define("hello-wc", Wr);
