import './style.css';
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, fe.apply(this, arguments);
}, Ft = { exports: {} }, st = {}, ve = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function In() {
  if (Nr)
    return A;
  Nr = 1;
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function C(c) {
    return c === null || typeof c != "object" ? null : (c = _ && c[_] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, N = {};
  function re(c, m, O) {
    this.props = c, this.context = m, this.refs = N, this.updater = O || x;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(c, m) {
    if (typeof c != "object" && typeof c != "function" && c != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, m, "setState");
  }, re.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function W() {
  }
  W.prototype = re.prototype;
  function U(c, m, O) {
    this.props = c, this.context = m, this.refs = N, this.updater = O || x;
  }
  var de = U.prototype = new W();
  de.constructor = U, P(de, re.prototype), de.isPureReactComponent = !0;
  var le = Array.isArray, Q = Object.prototype.hasOwnProperty, H = { current: null }, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Te(c, m, O) {
    var I, B = {}, z = null, V = null;
    if (m != null)
      for (I in m.ref !== void 0 && (V = m.ref), m.key !== void 0 && (z = "" + m.key), m)
        Q.call(m, I) && !se.hasOwnProperty(I) && (B[I] = m[I]);
    var $ = arguments.length - 2;
    if ($ === 1)
      B.children = O;
    else if (1 < $) {
      for (var Y = Array($), te = 0; te < $; te++)
        Y[te] = arguments[te + 2];
      B.children = Y;
    }
    if (c && c.defaultProps)
      for (I in $ = c.defaultProps, $)
        B[I] === void 0 && (B[I] = $[I]);
    return { $$typeof: n, type: c, key: z, ref: V, props: B, _owner: H.current };
  }
  function xe(c, m) {
    return { $$typeof: n, type: c.type, key: m, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function De(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }
  function tt(c) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return m[O];
    });
  }
  var Ae = /\/+/g;
  function ae(c, m) {
    return typeof c == "object" && c !== null && c.key != null ? tt("" + c.key) : m.toString(36);
  }
  function ue(c, m, O, I, B) {
    var z = typeof c;
    (z === "undefined" || z === "boolean") && (c = null);
    var V = !1;
    if (c === null)
      V = !0;
    else
      switch (z) {
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case n:
            case e:
              V = !0;
          }
      }
    if (V)
      return V = c, B = B(V), c = I === "" ? "." + ae(V, 0) : I, le(B) ? (O = "", c != null && (O = c.replace(Ae, "$&/") + "/"), ue(B, m, O, "", function(te) {
        return te;
      })) : B != null && (De(B) && (B = xe(B, O + (!B.key || V && V.key === B.key ? "" : ("" + B.key).replace(Ae, "$&/") + "/") + c)), m.push(B)), 1;
    if (V = 0, I = I === "" ? "." : I + ":", le(c))
      for (var $ = 0; $ < c.length; $++) {
        z = c[$];
        var Y = I + ae(z, $);
        V += ue(z, m, O, Y, B);
      }
    else if (Y = C(c), typeof Y == "function")
      for (c = Y.call(c), $ = 0; !(z = c.next()).done; )
        z = z.value, Y = I + ae(z, $++), V += ue(z, m, O, Y, B);
    else if (z === "object")
      throw m = String(c), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function ne(c, m, O) {
    if (c == null)
      return c;
    var I = [], B = 0;
    return ue(c, I, "", "", function(z) {
      return m.call(O, z, B++);
    }), I;
  }
  function he(c) {
    if (c._status === -1) {
      var m = c._result;
      m = m(), m.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = m);
    }
    if (c._status === 1)
      return c._result.default;
    throw c._result;
  }
  var S = { current: null }, ye = { transition: null }, Be = { ReactCurrentDispatcher: S, ReactCurrentBatchConfig: ye, ReactCurrentOwner: H };
  return A.Children = { map: ne, forEach: function(c, m, O) {
    ne(c, function() {
      m.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var m = 0;
    return ne(c, function() {
      m++;
    }), m;
  }, toArray: function(c) {
    return ne(c, function(m) {
      return m;
    }) || [];
  }, only: function(c) {
    if (!De(c))
      throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, A.Component = re, A.Fragment = r, A.Profiler = a, A.PureComponent = U, A.StrictMode = o, A.Suspense = y, A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be, A.cloneElement = function(c, m, O) {
    if (c == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var I = P({}, c.props), B = c.key, z = c.ref, V = c._owner;
    if (m != null) {
      if (m.ref !== void 0 && (z = m.ref, V = H.current), m.key !== void 0 && (B = "" + m.key), c.type && c.type.defaultProps)
        var $ = c.type.defaultProps;
      for (Y in m)
        Q.call(m, Y) && !se.hasOwnProperty(Y) && (I[Y] = m[Y] === void 0 && $ !== void 0 ? $[Y] : m[Y]);
    }
    var Y = arguments.length - 2;
    if (Y === 1)
      I.children = O;
    else if (1 < Y) {
      $ = Array(Y);
      for (var te = 0; te < Y; te++)
        $[te] = arguments[te + 2];
      I.children = $;
    }
    return { $$typeof: n, type: c.type, key: B, ref: z, props: I, _owner: V };
  }, A.createContext = function(c) {
    return c = { $$typeof: h, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: u, _context: c }, c.Consumer = c;
  }, A.createElement = Te, A.createFactory = function(c) {
    var m = Te.bind(null, c);
    return m.type = c, m;
  }, A.createRef = function() {
    return { current: null };
  }, A.forwardRef = function(c) {
    return { $$typeof: p, render: c };
  }, A.isValidElement = De, A.lazy = function(c) {
    return { $$typeof: E, _payload: { _status: -1, _result: c }, _init: he };
  }, A.memo = function(c, m) {
    return { $$typeof: b, type: c, compare: m === void 0 ? null : m };
  }, A.startTransition = function(c) {
    var m = ye.transition;
    ye.transition = {};
    try {
      c();
    } finally {
      ye.transition = m;
    }
  }, A.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, A.useCallback = function(c, m) {
    return S.current.useCallback(c, m);
  }, A.useContext = function(c) {
    return S.current.useContext(c);
  }, A.useDebugValue = function() {
  }, A.useDeferredValue = function(c) {
    return S.current.useDeferredValue(c);
  }, A.useEffect = function(c, m) {
    return S.current.useEffect(c, m);
  }, A.useId = function() {
    return S.current.useId();
  }, A.useImperativeHandle = function(c, m, O) {
    return S.current.useImperativeHandle(c, m, O);
  }, A.useInsertionEffect = function(c, m) {
    return S.current.useInsertionEffect(c, m);
  }, A.useLayoutEffect = function(c, m) {
    return S.current.useLayoutEffect(c, m);
  }, A.useMemo = function(c, m) {
    return S.current.useMemo(c, m);
  }, A.useReducer = function(c, m, O) {
    return S.current.useReducer(c, m, O);
  }, A.useRef = function(c) {
    return S.current.useRef(c);
  }, A.useState = function(c) {
    return S.current.useState(c);
  }, A.useSyncExternalStore = function(c, m, O) {
    return S.current.useSyncExternalStore(c, m, O);
  }, A.useTransition = function() {
    return S.current.useTransition();
  }, A.version = "18.2.0", A;
}
var Ot = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function Yn() {
  return $r || ($r = 1, function(n, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.2.0", o = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), b = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), re = Symbol.iterator, W = "@@iterator";
      function U(t) {
        if (t === null || typeof t != "object")
          return null;
        var i = re && t[re] || t[W];
        return typeof i == "function" ? i : null;
      }
      var de = {
        current: null
      }, le = {
        transition: null
      }, Q = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        current: null
      }, se = {}, Te = null;
      function xe(t) {
        Te = t;
      }
      se.setExtraStackFrame = function(t) {
        Te = t;
      }, se.getCurrentStack = null, se.getStackAddendum = function() {
        var t = "";
        Te && (t += Te);
        var i = se.getCurrentStack;
        return i && (t += i() || ""), t;
      };
      var De = !1, tt = !1, Ae = !1, ae = !1, ue = !1, ne = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: H
      };
      ne.ReactDebugCurrentFrame = se, ne.ReactCurrentActQueue = Q;
      function he(t) {
        {
          for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
            l[f - 1] = arguments[f];
          ye("warn", t, l);
        }
      }
      function S(t) {
        {
          for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
            l[f - 1] = arguments[f];
          ye("error", t, l);
        }
      }
      function ye(t, i, l) {
        {
          var f = ne.ReactDebugCurrentFrame, d = f.getStackAddendum();
          d !== "" && (i += "%s", l = l.concat([d]));
          var w = l.map(function(k) {
            return String(k);
          });
          w.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, w);
        }
      }
      var Be = {};
      function c(t, i) {
        {
          var l = t.constructor, f = l && (l.displayName || l.name) || "ReactClass", d = f + "." + i;
          if (Be[d])
            return;
          S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", i, f), Be[d] = !0;
        }
      }
      var m = {
        isMounted: function(t) {
          return !1;
        },
        enqueueForceUpdate: function(t, i, l) {
          c(t, "forceUpdate");
        },
        enqueueReplaceState: function(t, i, l, f) {
          c(t, "replaceState");
        },
        enqueueSetState: function(t, i, l, f) {
          c(t, "setState");
        }
      }, O = Object.assign, I = {};
      Object.freeze(I);
      function B(t, i, l) {
        this.props = t, this.context = i, this.refs = I, this.updater = l || m;
      }
      B.prototype.isReactComponent = {}, B.prototype.setState = function(t, i) {
        if (typeof t != "object" && typeof t != "function" && t != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, i, "setState");
      }, B.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      };
      {
        var z = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, V = function(t, i) {
          Object.defineProperty(B.prototype, t, {
            get: function() {
              he("%s(...) is deprecated in plain JavaScript React classes. %s", i[0], i[1]);
            }
          });
        };
        for (var $ in z)
          z.hasOwnProperty($) && V($, z[$]);
      }
      function Y() {
      }
      Y.prototype = B.prototype;
      function te(t, i, l) {
        this.props = t, this.context = i, this.refs = I, this.updater = l || m;
      }
      var _e = te.prototype = new Y();
      _e.constructor = te, O(_e, B.prototype), _e.isPureReactComponent = !0;
      function Nt() {
        var t = {
          current: null
        };
        return Object.seal(t), t;
      }
      var lt = Array.isArray;
      function Ue(t) {
        return lt(t);
      }
      function $t(t) {
        {
          var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
          return l;
        }
      }
      function He(t) {
        try {
          return Me(t), !1;
        } catch {
          return !0;
        }
      }
      function Me(t) {
        return "" + t;
      }
      function je(t) {
        if (He(t))
          return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(t)), Me(t);
      }
      function ft(t, i, l) {
        var f = t.displayName;
        if (f)
          return f;
        var d = i.displayName || i.name || "";
        return d !== "" ? l + "(" + d + ")" : l;
      }
      function Fe(t) {
        return t.displayName || "Context";
      }
      function me(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case u:
            return "Fragment";
          case a:
            return "Portal";
          case p:
            return "Profiler";
          case h:
            return "StrictMode";
          case _:
            return "Suspense";
          case C:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case b:
              var i = t;
              return Fe(i) + ".Consumer";
            case y:
              var l = t;
              return Fe(l._context) + ".Provider";
            case E:
              return ft(t, t.render, "ForwardRef");
            case x:
              var f = t.displayName || null;
              return f !== null ? f : me(t.type) || "Memo";
            case P: {
              var d = t, w = d._payload, k = d._init;
              try {
                return me(k(w));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ie = Object.prototype.hasOwnProperty, Ke = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ht, pt, qe;
      qe = {};
      function rt(t) {
        if (Ie.call(t, "ref")) {
          var i = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function Se(t) {
        if (Ie.call(t, "key")) {
          var i = Object.getOwnPropertyDescriptor(t, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function Wt(t, i) {
        var l = function() {
          ht || (ht = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
      function vt(t, i) {
        var l = function() {
          pt || (pt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
      function dt(t) {
        if (typeof t.ref == "string" && H.current && t.__self && H.current.stateNode !== t.__self) {
          var i = me(H.current.type);
          qe[i] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i, t.ref), qe[i] = !0);
        }
      }
      var Ye = function(t, i, l, f, d, w, k) {
        var R = {
          $$typeof: o,
          type: t,
          key: i,
          ref: l,
          props: k,
          _owner: w
        };
        return R._store = {}, Object.defineProperty(R._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(R, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.defineProperty(R, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
      };
      function Xt(t, i, l) {
        var f, d = {}, w = null, k = null, R = null, j = null;
        if (i != null) {
          rt(i) && (k = i.ref, dt(i)), Se(i) && (je(i.key), w = "" + i.key), R = i.__self === void 0 ? null : i.__self, j = i.__source === void 0 ? null : i.__source;
          for (f in i)
            Ie.call(i, f) && !Ke.hasOwnProperty(f) && (d[f] = i[f]);
        }
        var X = arguments.length - 2;
        if (X === 1)
          d.children = l;
        else if (X > 1) {
          for (var K = Array(X), q = 0; q < X; q++)
            K[q] = arguments[q + 2];
          Object.freeze && Object.freeze(K), d.children = K;
        }
        if (t && t.defaultProps) {
          var J = t.defaultProps;
          for (f in J)
            d[f] === void 0 && (d[f] = J[f]);
        }
        if (w || k) {
          var ee = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          w && Wt(d, ee), k && vt(d, ee);
        }
        return Ye(t, w, k, R, j, H.current, d);
      }
      function zt(t, i) {
        var l = Ye(t.type, i, t.ref, t._self, t._source, t._owner, t.props);
        return l;
      }
      function Vt(t, i, l) {
        if (t == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var f, d = O({}, t.props), w = t.key, k = t.ref, R = t._self, j = t._source, X = t._owner;
        if (i != null) {
          rt(i) && (k = i.ref, X = H.current), Se(i) && (je(i.key), w = "" + i.key);
          var K;
          t.type && t.type.defaultProps && (K = t.type.defaultProps);
          for (f in i)
            Ie.call(i, f) && !Ke.hasOwnProperty(f) && (i[f] === void 0 && K !== void 0 ? d[f] = K[f] : d[f] = i[f]);
        }
        var q = arguments.length - 2;
        if (q === 1)
          d.children = l;
        else if (q > 1) {
          for (var J = Array(q), ee = 0; ee < q; ee++)
            J[ee] = arguments[ee + 2];
          d.children = J;
        }
        return Ye(t.type, w, k, R, j, X, d);
      }
      function we(t) {
        return typeof t == "object" && t !== null && t.$$typeof === o;
      }
      var yt = ".", Ut = ":";
      function Ht(t) {
        var i = /[=:]/g, l = {
          "=": "=0",
          ":": "=2"
        }, f = t.replace(i, function(d) {
          return l[d];
        });
        return "$" + f;
      }
      var Ge = !1, mt = /\/+/g;
      function ke(t) {
        return t.replace(mt, "$&/");
      }
      function Le(t, i) {
        return typeof t == "object" && t !== null && t.key != null ? (je(t.key), Ht("" + t.key)) : i.toString(36);
      }
      function Pe(t, i, l, f, d) {
        var w = typeof t;
        (w === "undefined" || w === "boolean") && (t = null);
        var k = !1;
        if (t === null)
          k = !0;
        else
          switch (w) {
            case "string":
            case "number":
              k = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case o:
                case a:
                  k = !0;
              }
          }
        if (k) {
          var R = t, j = d(R), X = f === "" ? yt + Le(R, 0) : f;
          if (Ue(j)) {
            var K = "";
            X != null && (K = ke(X) + "/"), Pe(j, i, K, "", function(Fn) {
              return Fn;
            });
          } else
            j != null && (we(j) && (j.key && (!R || R.key !== j.key) && je(j.key), j = zt(
              j,
              l + (j.key && (!R || R.key !== j.key) ? ke("" + j.key) + "/" : "") + X
            )), i.push(j));
          return 1;
        }
        var q, J, ee = 0, ie = f === "" ? yt : f + Ut;
        if (Ue(t))
          for (var Rt = 0; Rt < t.length; Rt++)
            q = t[Rt], J = ie + Le(q, Rt), ee += Pe(q, i, l, J, d);
        else {
          var ar = U(t);
          if (typeof ar == "function") {
            var Ir = t;
            ar === Ir.entries && (Ge || he("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ge = !0);
            for (var Mn = ar.call(Ir), Yr, jn = 0; !(Yr = Mn.next()).done; )
              q = Yr.value, J = ie + Le(q, jn++), ee += Pe(q, i, l, J, d);
          } else if (w === "object") {
            var Lr = String(t);
            throw new Error("Objects are not valid as a React child (found: " + (Lr === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Lr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ee;
      }
      function Ne(t, i, l) {
        if (t == null)
          return t;
        var f = [], d = 0;
        return Pe(t, f, "", "", function(w) {
          return i.call(l, w, d++);
        }), f;
      }
      function Kt(t) {
        var i = 0;
        return Ne(t, function() {
          i++;
        }), i;
      }
      function gt(t, i, l) {
        Ne(t, function() {
          i.apply(this, arguments);
        }, l);
      }
      function qt(t) {
        return Ne(t, function(i) {
          return i;
        }) || [];
      }
      function bt(t) {
        if (!we(t))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
      function Tt(t) {
        var i = {
          $$typeof: b,
          _currentValue: t,
          _currentValue2: t,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        i.Provider = {
          $$typeof: y,
          _context: i
        };
        var l = !1, f = !1, d = !1;
        {
          var w = {
            $$typeof: b,
            _context: i
          };
          Object.defineProperties(w, {
            Provider: {
              get: function() {
                return f || (f = !0, S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), i.Provider;
              },
              set: function(k) {
                i.Provider = k;
              }
            },
            _currentValue: {
              get: function() {
                return i._currentValue;
              },
              set: function(k) {
                i._currentValue = k;
              }
            },
            _currentValue2: {
              get: function() {
                return i._currentValue2;
              },
              set: function(k) {
                i._currentValue2 = k;
              }
            },
            _threadCount: {
              get: function() {
                return i._threadCount;
              },
              set: function(k) {
                i._threadCount = k;
              }
            },
            Consumer: {
              get: function() {
                return l || (l = !0, S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), i.Consumer;
              }
            },
            displayName: {
              get: function() {
                return i.displayName;
              },
              set: function(k) {
                d || (he("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", k), d = !0);
              }
            }
          }), i.Consumer = w;
        }
        return i._currentRenderer = null, i._currentRenderer2 = null, i;
      }
      var $e = -1, nt = 0, ot = 1, Gt = 2;
      function Jt(t) {
        if (t._status === $e) {
          var i = t._result, l = i();
          if (l.then(function(w) {
            if (t._status === nt || t._status === $e) {
              var k = t;
              k._status = ot, k._result = w;
            }
          }, function(w) {
            if (t._status === nt || t._status === $e) {
              var k = t;
              k._status = Gt, k._result = w;
            }
          }), t._status === $e) {
            var f = t;
            f._status = nt, f._result = l;
          }
        }
        if (t._status === ot) {
          var d = t._result;
          return d === void 0 && S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, d), "default" in d || S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, d), d.default;
        } else
          throw t._result;
      }
      function Qt(t) {
        var i = {
          _status: $e,
          _result: t
        }, l = {
          $$typeof: P,
          _payload: i,
          _init: Jt
        };
        {
          var f, d;
          Object.defineProperties(l, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return f;
              },
              set: function(w) {
                S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), f = w, Object.defineProperty(l, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return d;
              },
              set: function(w) {
                S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), d = w, Object.defineProperty(l, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return l;
      }
      function Zt(t) {
        t != null && t.$$typeof === x ? S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof t != "function" ? S("forwardRef requires a render function but was given %s.", t === null ? "null" : typeof t) : t.length !== 0 && t.length !== 2 && S("forwardRef render functions accept exactly two parameters: props and ref. %s", t.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), t != null && (t.defaultProps != null || t.propTypes != null) && S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var i = {
          $$typeof: E,
          render: t
        };
        {
          var l;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(f) {
              l = f, !t.name && !t.displayName && (t.displayName = f);
            }
          });
        }
        return i;
      }
      var s;
      s = Symbol.for("react.module.reference");
      function v(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === u || t === p || ue || t === h || t === _ || t === C || ae || t === N || De || tt || Ae || typeof t == "object" && t !== null && (t.$$typeof === P || t.$$typeof === x || t.$$typeof === y || t.$$typeof === b || t.$$typeof === E || t.$$typeof === s || t.getModuleId !== void 0));
      }
      function g(t, i) {
        v(t) || S("memo: The first argument must be a component. Instead received: %s", t === null ? "null" : typeof t);
        var l = {
          $$typeof: x,
          type: t,
          compare: i === void 0 ? null : i
        };
        {
          var f;
          Object.defineProperty(l, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return f;
            },
            set: function(d) {
              f = d, !t.name && !t.displayName && (t.displayName = d);
            }
          });
        }
        return l;
      }
      function T() {
        var t = de.current;
        return t === null && S(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), t;
      }
      function F(t) {
        var i = T();
        if (t._context !== void 0) {
          var l = t._context;
          l.Consumer === t ? S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : l.Provider === t && S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return i.useContext(t);
      }
      function L(t) {
        var i = T();
        return i.useState(t);
      }
      function M(t, i, l) {
        var f = T();
        return f.useReducer(t, i, l);
      }
      function D(t) {
        var i = T();
        return i.useRef(t);
      }
      function oe(t, i) {
        var l = T();
        return l.useEffect(t, i);
      }
      function G(t, i) {
        var l = T();
        return l.useInsertionEffect(t, i);
      }
      function Z(t, i) {
        var l = T();
        return l.useLayoutEffect(t, i);
      }
      function ce(t, i) {
        var l = T();
        return l.useCallback(t, i);
      }
      function Ce(t, i) {
        var l = T();
        return l.useMemo(t, i);
      }
      function kt(t, i, l) {
        var f = T();
        return f.useImperativeHandle(t, i, l);
      }
      function pe(t, i) {
        {
          var l = T();
          return l.useDebugValue(t, i);
        }
      }
      function fn() {
        var t = T();
        return t.useTransition();
      }
      function hn(t) {
        var i = T();
        return i.useDeferredValue(t);
      }
      function pn() {
        var t = T();
        return t.useId();
      }
      function vn(t, i, l) {
        var f = T();
        return f.useSyncExternalStore(t, i, l);
      }
      var it = 0, mr, gr, br, Tr, kr, Er, _r;
      function Sr() {
      }
      Sr.__reactDisabledLog = !0;
      function dn() {
        {
          if (it === 0) {
            mr = console.log, gr = console.info, br = console.warn, Tr = console.error, kr = console.group, Er = console.groupCollapsed, _r = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: Sr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          it++;
        }
      }
      function yn() {
        {
          if (it--, it === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: O({}, t, {
                value: mr
              }),
              info: O({}, t, {
                value: gr
              }),
              warn: O({}, t, {
                value: br
              }),
              error: O({}, t, {
                value: Tr
              }),
              group: O({}, t, {
                value: kr
              }),
              groupCollapsed: O({}, t, {
                value: Er
              }),
              groupEnd: O({}, t, {
                value: _r
              })
            });
          }
          it < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var er = ne.ReactCurrentDispatcher, tr;
      function Et(t, i, l) {
        {
          if (tr === void 0)
            try {
              throw Error();
            } catch (d) {
              var f = d.stack.trim().match(/\n( *(at )?)/);
              tr = f && f[1] || "";
            }
          return `
` + tr + t;
        }
      }
      var rr = !1, _t;
      {
        var mn = typeof WeakMap == "function" ? WeakMap : Map;
        _t = new mn();
      }
      function wr(t, i) {
        if (!t || rr)
          return "";
        {
          var l = _t.get(t);
          if (l !== void 0)
            return l;
        }
        var f;
        rr = !0;
        var d = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var w;
        w = er.current, er.current = null, dn();
        try {
          if (i) {
            var k = function() {
              throw Error();
            };
            if (Object.defineProperty(k.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(k, []);
              } catch (ie) {
                f = ie;
              }
              Reflect.construct(t, [], k);
            } else {
              try {
                k.call();
              } catch (ie) {
                f = ie;
              }
              t.call(k.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ie) {
              f = ie;
            }
            t();
          }
        } catch (ie) {
          if (ie && f && typeof ie.stack == "string") {
            for (var R = ie.stack.split(`
`), j = f.stack.split(`
`), X = R.length - 1, K = j.length - 1; X >= 1 && K >= 0 && R[X] !== j[K]; )
              K--;
            for (; X >= 1 && K >= 0; X--, K--)
              if (R[X] !== j[K]) {
                if (X !== 1 || K !== 1)
                  do
                    if (X--, K--, K < 0 || R[X] !== j[K]) {
                      var q = `
` + R[X].replace(" at new ", " at ");
                      return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), typeof t == "function" && _t.set(t, q), q;
                    }
                  while (X >= 1 && K >= 0);
                break;
              }
          }
        } finally {
          rr = !1, er.current = w, yn(), Error.prepareStackTrace = d;
        }
        var J = t ? t.displayName || t.name : "", ee = J ? Et(J) : "";
        return typeof t == "function" && _t.set(t, ee), ee;
      }
      function gn(t, i, l) {
        return wr(t, !1);
      }
      function bn(t) {
        var i = t.prototype;
        return !!(i && i.isReactComponent);
      }
      function St(t, i, l) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return wr(t, bn(t));
        if (typeof t == "string")
          return Et(t);
        switch (t) {
          case _:
            return Et("Suspense");
          case C:
            return Et("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case E:
              return gn(t.render);
            case x:
              return St(t.type, i, l);
            case P: {
              var f = t, d = f._payload, w = f._init;
              try {
                return St(w(d), i, l);
              } catch {
              }
            }
          }
        return "";
      }
      var Pr = {}, Cr = ne.ReactDebugCurrentFrame;
      function wt(t) {
        if (t) {
          var i = t._owner, l = St(t.type, t._source, i ? i.type : null);
          Cr.setExtraStackFrame(l);
        } else
          Cr.setExtraStackFrame(null);
      }
      function Tn(t, i, l, f, d) {
        {
          var w = Function.call.bind(Ie);
          for (var k in t)
            if (w(t, k)) {
              var R = void 0;
              try {
                if (typeof t[k] != "function") {
                  var j = Error((f || "React class") + ": " + l + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                R = t[k](i, k, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (X) {
                R = X;
              }
              R && !(R instanceof Error) && (wt(d), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, k, typeof R), wt(null)), R instanceof Error && !(R.message in Pr) && (Pr[R.message] = !0, wt(d), S("Failed %s type: %s", l, R.message), wt(null));
            }
        }
      }
      function Je(t) {
        if (t) {
          var i = t._owner, l = St(t.type, t._source, i ? i.type : null);
          xe(l);
        } else
          xe(null);
      }
      var nr;
      nr = !1;
      function Rr() {
        if (H.current) {
          var t = me(H.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
      function kn(t) {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
      function En(t) {
        return t != null ? kn(t.__source) : "";
      }
      var Or = {};
      function _n(t) {
        var i = Rr();
        if (!i) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
      function xr(t, i) {
        if (!(!t._store || t._store.validated || t.key != null)) {
          t._store.validated = !0;
          var l = _n(i);
          if (!Or[l]) {
            Or[l] = !0;
            var f = "";
            t && t._owner && t._owner !== H.current && (f = " It was passed a child from " + me(t._owner.type) + "."), Je(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, f), Je(null);
          }
        }
      }
      function Dr(t, i) {
        if (typeof t == "object") {
          if (Ue(t))
            for (var l = 0; l < t.length; l++) {
              var f = t[l];
              we(f) && xr(f, i);
            }
          else if (we(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var d = U(t);
            if (typeof d == "function" && d !== t.entries)
              for (var w = d.call(t), k; !(k = w.next()).done; )
                we(k.value) && xr(k.value, i);
          }
        }
      }
      function Ar(t) {
        {
          var i = t.type;
          if (i == null || typeof i == "string")
            return;
          var l;
          if (typeof i == "function")
            l = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === E || i.$$typeof === x))
            l = i.propTypes;
          else
            return;
          if (l) {
            var f = me(i);
            Tn(l, t.props, "prop", f, t);
          } else if (i.PropTypes !== void 0 && !nr) {
            nr = !0;
            var d = me(i);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sn(t) {
        {
          for (var i = Object.keys(t.props), l = 0; l < i.length; l++) {
            var f = i[l];
            if (f !== "children" && f !== "key") {
              Je(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), Je(null);
              break;
            }
          }
          t.ref !== null && (Je(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
        }
      }
      function Br(t, i, l) {
        var f = v(t);
        if (!f) {
          var d = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = En(i);
          w ? d += w : d += Rr();
          var k;
          t === null ? k = "null" : Ue(t) ? k = "array" : t !== void 0 && t.$$typeof === o ? (k = "<" + (me(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, d);
        }
        var R = Xt.apply(this, arguments);
        if (R == null)
          return R;
        if (f)
          for (var j = 2; j < arguments.length; j++)
            Dr(arguments[j], t);
        return t === u ? Sn(R) : Ar(R), R;
      }
      var Mr = !1;
      function wn(t) {
        var i = Br.bind(null, t);
        return i.type = t, Mr || (Mr = !0, he("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(i, "type", {
          enumerable: !1,
          get: function() {
            return he("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: t
            }), t;
          }
        }), i;
      }
      function Pn(t, i, l) {
        for (var f = Vt.apply(this, arguments), d = 2; d < arguments.length; d++)
          Dr(arguments[d], f.type);
        return Ar(f), f;
      }
      function Cn(t, i) {
        var l = le.transition;
        le.transition = {};
        var f = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          t();
        } finally {
          if (le.transition = l, l === null && f._updatedFibers) {
            var d = f._updatedFibers.size;
            d > 10 && he("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
          }
        }
      }
      var jr = !1, Pt = null;
      function Rn(t) {
        if (Pt === null)
          try {
            var i = ("require" + Math.random()).slice(0, 7), l = n && n[i];
            Pt = l.call(n, "timers").setImmediate;
          } catch {
            Pt = function(d) {
              jr === !1 && (jr = !0, typeof MessageChannel > "u" && S("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var w = new MessageChannel();
              w.port1.onmessage = d, w.port2.postMessage(void 0);
            };
          }
        return Pt(t);
      }
      var Qe = 0, Fr = !1;
      function On(t) {
        {
          var i = Qe;
          Qe++, Q.current === null && (Q.current = []);
          var l = Q.isBatchingLegacy, f;
          try {
            if (Q.isBatchingLegacy = !0, f = t(), !l && Q.didScheduleLegacyUpdate) {
              var d = Q.current;
              d !== null && (Q.didScheduleLegacyUpdate = !1, sr(d));
            }
          } catch (J) {
            throw Ct(i), J;
          } finally {
            Q.isBatchingLegacy = l;
          }
          if (f !== null && typeof f == "object" && typeof f.then == "function") {
            var w = f, k = !1, R = {
              then: function(J, ee) {
                k = !0, w.then(function(ie) {
                  Ct(i), Qe === 0 ? or(ie, J, ee) : J(ie);
                }, function(ie) {
                  Ct(i), ee(ie);
                });
              }
            };
            return !Fr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              k || (Fr = !0, S("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), R;
          } else {
            var j = f;
            if (Ct(i), Qe === 0) {
              var X = Q.current;
              X !== null && (sr(X), Q.current = null);
              var K = {
                then: function(J, ee) {
                  Q.current === null ? (Q.current = [], or(j, J, ee)) : J(j);
                }
              };
              return K;
            } else {
              var q = {
                then: function(J, ee) {
                  J(j);
                }
              };
              return q;
            }
          }
        }
      }
      function Ct(t) {
        t !== Qe - 1 && S("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Qe = t;
      }
      function or(t, i, l) {
        {
          var f = Q.current;
          if (f !== null)
            try {
              sr(f), Rn(function() {
                f.length === 0 ? (Q.current = null, i(t)) : or(t, i, l);
              });
            } catch (d) {
              l(d);
            }
          else
            i(t);
        }
      }
      var ir = !1;
      function sr(t) {
        if (!ir) {
          ir = !0;
          var i = 0;
          try {
            for (; i < t.length; i++) {
              var l = t[i];
              do
                l = l(!0);
              while (l !== null);
            }
            t.length = 0;
          } catch (f) {
            throw t = t.slice(i + 1), f;
          } finally {
            ir = !1;
          }
        }
      }
      var xn = Br, Dn = Pn, An = wn, Bn = {
        map: Ne,
        forEach: gt,
        count: Kt,
        toArray: qt,
        only: bt
      };
      e.Children = Bn, e.Component = B, e.Fragment = u, e.Profiler = p, e.PureComponent = te, e.StrictMode = h, e.Suspense = _, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, e.cloneElement = Dn, e.createContext = Tt, e.createElement = xn, e.createFactory = An, e.createRef = Nt, e.forwardRef = Zt, e.isValidElement = we, e.lazy = Qt, e.memo = g, e.startTransition = Cn, e.unstable_act = On, e.useCallback = ce, e.useContext = F, e.useDebugValue = pe, e.useDeferredValue = hn, e.useEffect = oe, e.useId = pn, e.useImperativeHandle = kt, e.useInsertionEffect = G, e.useLayoutEffect = Z, e.useMemo = Ce, e.useReducer = M, e.useRef = D, e.useState = L, e.useSyncExternalStore = vn, e.useTransition = fn, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ot, Ot.exports)), Ot.exports;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = In() : n.exports = Yn();
})(ve);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function Ln() {
  if (Wr)
    return st;
  Wr = 1;
  var n = ve.exports, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, y, b) {
    var E, _ = {}, C = null, x = null;
    b !== void 0 && (C = "" + b), y.key !== void 0 && (C = "" + y.key), y.ref !== void 0 && (x = y.ref);
    for (E in y)
      o.call(y, E) && !u.hasOwnProperty(E) && (_[E] = y[E]);
    if (p && p.defaultProps)
      for (E in y = p.defaultProps, y)
        _[E] === void 0 && (_[E] = y[E]);
    return { $$typeof: e, type: p, key: C, ref: x, props: _, _owner: a.current };
  }
  return st.Fragment = r, st.jsx = h, st.jsxs = h, st;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Nn() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ve.exports, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), P = Symbol.iterator, N = "@@iterator";
    function re(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = P && s[P] || s[N];
      return typeof v == "function" ? v : null;
    }
    var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function U(s) {
      {
        for (var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), T = 1; T < v; T++)
          g[T - 1] = arguments[T];
        de("error", s, g);
      }
    }
    function de(s, v, g) {
      {
        var T = W.ReactDebugCurrentFrame, F = T.getStackAddendum();
        F !== "" && (v += "%s", g = g.concat([F]));
        var L = g.map(function(M) {
          return String(M);
        });
        L.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, L);
      }
    }
    var le = !1, Q = !1, H = !1, se = !1, Te = !1, xe;
    xe = Symbol.for("react.module.reference");
    function De(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === o || s === u || Te || s === a || s === b || s === E || se || s === x || le || Q || H || typeof s == "object" && s !== null && (s.$$typeof === C || s.$$typeof === _ || s.$$typeof === h || s.$$typeof === p || s.$$typeof === y || s.$$typeof === xe || s.getModuleId !== void 0));
    }
    function tt(s, v, g) {
      var T = s.displayName;
      if (T)
        return T;
      var F = v.displayName || v.name || "";
      return F !== "" ? g + "(" + F + ")" : g;
    }
    function Ae(s) {
      return s.displayName || "Context";
    }
    function ae(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && U("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case b:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case p:
            var v = s;
            return Ae(v) + ".Consumer";
          case h:
            var g = s;
            return Ae(g._context) + ".Provider";
          case y:
            return tt(s, s.render, "ForwardRef");
          case _:
            var T = s.displayName || null;
            return T !== null ? T : ae(s.type) || "Memo";
          case C: {
            var F = s, L = F._payload, M = F._init;
            try {
              return ae(M(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, ne = 0, he, S, ye, Be, c, m, O;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function B() {
      {
        if (ne === 0) {
          he = console.log, S = console.info, ye = console.warn, Be = console.error, c = console.group, m = console.groupCollapsed, O = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ne++;
      }
    }
    function z() {
      {
        if (ne--, ne === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, s, {
              value: he
            }),
            info: ue({}, s, {
              value: S
            }),
            warn: ue({}, s, {
              value: ye
            }),
            error: ue({}, s, {
              value: Be
            }),
            group: ue({}, s, {
              value: c
            }),
            groupCollapsed: ue({}, s, {
              value: m
            }),
            groupEnd: ue({}, s, {
              value: O
            })
          });
        }
        ne < 0 && U("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = W.ReactCurrentDispatcher, $;
    function Y(s, v, g) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (F) {
            var T = F.stack.trim().match(/\n( *(at )?)/);
            $ = T && T[1] || "";
          }
        return `
` + $ + s;
      }
    }
    var te = !1, _e;
    {
      var Nt = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new Nt();
    }
    function lt(s, v) {
      if (!s || te)
        return "";
      {
        var g = _e.get(s);
        if (g !== void 0)
          return g;
      }
      var T;
      te = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = V.current, V.current = null, B();
      try {
        if (v) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (pe) {
              T = pe;
            }
            Reflect.construct(s, [], M);
          } else {
            try {
              M.call();
            } catch (pe) {
              T = pe;
            }
            s.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            T = pe;
          }
          s();
        }
      } catch (pe) {
        if (pe && T && typeof pe.stack == "string") {
          for (var D = pe.stack.split(`
`), oe = T.stack.split(`
`), G = D.length - 1, Z = oe.length - 1; G >= 1 && Z >= 0 && D[G] !== oe[Z]; )
            Z--;
          for (; G >= 1 && Z >= 0; G--, Z--)
            if (D[G] !== oe[Z]) {
              if (G !== 1 || Z !== 1)
                do
                  if (G--, Z--, Z < 0 || D[G] !== oe[Z]) {
                    var ce = `
` + D[G].replace(" at new ", " at ");
                    return s.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", s.displayName)), typeof s == "function" && _e.set(s, ce), ce;
                  }
                while (G >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        te = !1, V.current = L, z(), Error.prepareStackTrace = F;
      }
      var Ce = s ? s.displayName || s.name : "", kt = Ce ? Y(Ce) : "";
      return typeof s == "function" && _e.set(s, kt), kt;
    }
    function Ue(s, v, g) {
      return lt(s, !1);
    }
    function $t(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function He(s, v, g) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return lt(s, $t(s));
      if (typeof s == "string")
        return Y(s);
      switch (s) {
        case b:
          return Y("Suspense");
        case E:
          return Y("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case y:
            return Ue(s.render);
          case _:
            return He(s.type, v, g);
          case C: {
            var T = s, F = T._payload, L = T._init;
            try {
              return He(L(F), v, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, je = {}, ft = W.ReactDebugCurrentFrame;
    function Fe(s) {
      if (s) {
        var v = s._owner, g = He(s.type, s._source, v ? v.type : null);
        ft.setExtraStackFrame(g);
      } else
        ft.setExtraStackFrame(null);
    }
    function me(s, v, g, T, F) {
      {
        var L = Function.call.bind(Me);
        for (var M in s)
          if (L(s, M)) {
            var D = void 0;
            try {
              if (typeof s[M] != "function") {
                var oe = Error((T || "React class") + ": " + g + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              D = s[M](v, M, T, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              D = G;
            }
            D && !(D instanceof Error) && (Fe(F), U("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", g, M, typeof D), Fe(null)), D instanceof Error && !(D.message in je) && (je[D.message] = !0, Fe(F), U("Failed %s type: %s", g, D.message), Fe(null));
          }
      }
    }
    var Ie = Array.isArray;
    function Ke(s) {
      return Ie(s);
    }
    function ht(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, g = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return g;
      }
    }
    function pt(s) {
      try {
        return qe(s), !1;
      } catch {
        return !0;
      }
    }
    function qe(s) {
      return "" + s;
    }
    function rt(s) {
      if (pt(s))
        return U("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(s)), qe(s);
    }
    var Se = W.ReactCurrentOwner, Wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, dt, Ye;
    Ye = {};
    function Xt(s) {
      if (Me.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function zt(s) {
      if (Me.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Vt(s, v) {
      if (typeof s.ref == "string" && Se.current && v && Se.current.stateNode !== v) {
        var g = ae(Se.current.type);
        Ye[g] || (U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Se.current.type), s.ref), Ye[g] = !0);
      }
    }
    function we(s, v) {
      {
        var g = function() {
          vt || (vt = !0, U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        g.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function yt(s, v) {
      {
        var g = function() {
          dt || (dt = !0, U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        g.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Ut = function(s, v, g, T, F, L, M) {
      var D = {
        $$typeof: e,
        type: s,
        key: v,
        ref: g,
        props: M,
        _owner: L
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Ht(s, v, g, T, F) {
      {
        var L, M = {}, D = null, oe = null;
        g !== void 0 && (rt(g), D = "" + g), zt(v) && (rt(v.key), D = "" + v.key), Xt(v) && (oe = v.ref, Vt(v, F));
        for (L in v)
          Me.call(v, L) && !Wt.hasOwnProperty(L) && (M[L] = v[L]);
        if (s && s.defaultProps) {
          var G = s.defaultProps;
          for (L in G)
            M[L] === void 0 && (M[L] = G[L]);
        }
        if (D || oe) {
          var Z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          D && we(M, Z), oe && yt(M, Z);
        }
        return Ut(s, D, oe, F, T, Se.current, M);
      }
    }
    var Ge = W.ReactCurrentOwner, mt = W.ReactDebugCurrentFrame;
    function ke(s) {
      if (s) {
        var v = s._owner, g = He(s.type, s._source, v ? v.type : null);
        mt.setExtraStackFrame(g);
      } else
        mt.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Pe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function Ne() {
      {
        if (Ge.current) {
          var s = ae(Ge.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Kt(s) {
      {
        if (s !== void 0) {
          var v = s.fileName.replace(/^.*[\\\/]/, ""), g = s.lineNumber;
          return `

Check your code at ` + v + ":" + g + ".";
        }
        return "";
      }
    }
    var gt = {};
    function qt(s) {
      {
        var v = Ne();
        if (!v) {
          var g = typeof s == "string" ? s : s.displayName || s.name;
          g && (v = `

Check the top-level render call using <` + g + ">.");
        }
        return v;
      }
    }
    function bt(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var g = qt(v);
        if (gt[g])
          return;
        gt[g] = !0;
        var T = "";
        s && s._owner && s._owner !== Ge.current && (T = " It was passed a child from " + ae(s._owner.type) + "."), ke(s), U('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, T), ke(null);
      }
    }
    function Tt(s, v) {
      {
        if (typeof s != "object")
          return;
        if (Ke(s))
          for (var g = 0; g < s.length; g++) {
            var T = s[g];
            Pe(T) && bt(T, v);
          }
        else if (Pe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var F = re(s);
          if (typeof F == "function" && F !== s.entries)
            for (var L = F.call(s), M; !(M = L.next()).done; )
              Pe(M.value) && bt(M.value, v);
        }
      }
    }
    function $e(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var g;
        if (typeof v == "function")
          g = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === y || v.$$typeof === _))
          g = v.propTypes;
        else
          return;
        if (g) {
          var T = ae(v);
          me(g, s.props, "prop", T, s);
        } else if (v.PropTypes !== void 0 && !Le) {
          Le = !0;
          var F = ae(v);
          U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(s) {
      {
        for (var v = Object.keys(s.props), g = 0; g < v.length; g++) {
          var T = v[g];
          if (T !== "children" && T !== "key") {
            ke(s), U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ke(null);
            break;
          }
        }
        s.ref !== null && (ke(s), U("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    function ot(s, v, g, T, F, L) {
      {
        var M = De(s);
        if (!M) {
          var D = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Kt(F);
          oe ? D += oe : D += Ne();
          var G;
          s === null ? G = "null" : Ke(s) ? G = "array" : s !== void 0 && s.$$typeof === e ? (G = "<" + (ae(s.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : G = typeof s, U("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, D);
        }
        var Z = Ht(s, v, g, F, L);
        if (Z == null)
          return Z;
        if (M) {
          var ce = v.children;
          if (ce !== void 0)
            if (T)
              if (Ke(ce)) {
                for (var Ce = 0; Ce < ce.length; Ce++)
                  Tt(ce[Ce], s);
                Object.freeze && Object.freeze(ce);
              } else
                U("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tt(ce, s);
        }
        return s === o ? nt(Z) : $e(Z), Z;
      }
    }
    function Gt(s, v, g) {
      return ot(s, v, g, !0);
    }
    function Jt(s, v, g) {
      return ot(s, v, g, !1);
    }
    var Qt = Jt, Zt = Gt;
    at.Fragment = o, at.jsx = Qt, at.jsxs = Zt;
  }()), at;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Ln() : n.exports = Nn();
})(Ft);
const ur = Ft.exports.Fragment, ge = Ft.exports.jsx, zr = Ft.exports.jsxs;
/*!
 * better-scroll / core
 * (c) 2016-2022 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var hr = function(n, e) {
  return hr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var a in o)
      Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
  }, hr(n, e);
};
function It(n, e) {
  hr(n, e);
  function r() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ut = function() {
  return ut = Object.assign || function(e) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, ut.apply(this, arguments);
};
function tn() {
  for (var n = 0, e = 0, r = arguments.length; e < r; e++)
    n += arguments[e].length;
  for (var o = Array(n), a = 0, e = 0; e < r; e++)
    for (var u = arguments[e], h = 0, p = u.length; h < p; h++, a++)
      o[a] = u[h];
  return o;
}
var $n = [
  {
    sourceKey: "scroller.scrollBehaviorX.currentPos",
    key: "x"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.currentPos",
    key: "y"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.hasScroll",
    key: "hasHorizontalScroll"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.hasScroll",
    key: "hasVerticalScroll"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.contentSize",
    key: "scrollerWidth"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.contentSize",
    key: "scrollerHeight"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
    key: "maxScrollX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
    key: "maxScrollY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.minScrollPos",
    key: "minScrollX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.minScrollPos",
    key: "minScrollY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.movingDirection",
    key: "movingDirectionX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.movingDirection",
    key: "movingDirectionY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.direction",
    key: "directionX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.direction",
    key: "directionY"
  },
  {
    sourceKey: "scroller.actions.enabled",
    key: "enabled"
  },
  {
    sourceKey: "scroller.animater.pending",
    key: "pending"
  },
  {
    sourceKey: "scroller.animater.stop",
    key: "stop"
  },
  {
    sourceKey: "scroller.scrollTo",
    key: "scrollTo"
  },
  {
    sourceKey: "scroller.scrollBy",
    key: "scrollBy"
  },
  {
    sourceKey: "scroller.scrollToElement",
    key: "scrollToElement"
  },
  {
    sourceKey: "scroller.resetPosition",
    key: "resetPosition"
  }
];
function Mt(n) {
  console.error("[BScroll warn]: " + n);
}
var be = typeof window < "u", et = be && navigator.userAgent.toLowerCase(), Wn = !!(et && /wechatdevtools/.test(et)), Xn = et && et.indexOf("android") > 0, zn = function() {
  if (typeof et == "string") {
    var n = /os (\d\d?_\d(_\d)?)/, e = n.exec(et);
    if (!e)
      return !1;
    var r = e[1].split("_").map(function(o) {
      return parseInt(o, 10);
    });
    return r[0] === 13 && r[1] >= 4;
  }
  return !1;
}(), rn = !1;
if (be) {
  var Vn = "test-passive";
  try {
    var Vr = {};
    Object.defineProperty(Vr, "passive", {
      get: function() {
        rn = !0;
      }
    }), window.addEventListener(Vn, function() {
    }, Vr);
  } catch {
  }
}
function ze() {
  return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}
var pr = function(n, e) {
  for (var r in e)
    n[r] = e[r];
  return n;
};
function vr(n) {
  return n == null;
}
function Ur(n, e, r) {
  return n < e ? e : n > r ? r : n;
}
var yr = be && document.createElement("div").style, Ze = function() {
  if (!be)
    return !1;
  for (var n = [
    {
      key: "standard",
      value: "transform"
    },
    {
      key: "webkit",
      value: "webkitTransform"
    },
    {
      key: "Moz",
      value: "MozTransform"
    },
    {
      key: "O",
      value: "OTransform"
    },
    {
      key: "ms",
      value: "msTransform"
    }
  ], e = 0, r = n; e < r.length; e++) {
    var o = r[e];
    if (yr[o.value] !== void 0)
      return o.key;
  }
  return !1;
}();
function Ee(n) {
  return Ze === !1 ? n : Ze === "standard" ? n === "transitionEnd" ? "transitionend" : n : Ze + n.charAt(0).toUpperCase() + n.substr(1);
}
function nn(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function Un(n, e, r, o) {
  var a = rn ? {
    passive: !1,
    capture: !!o
  } : !!o;
  n.addEventListener(e, r, a);
}
function Hn(n, e, r, o) {
  n.removeEventListener(e, r, {
    capture: !!o
  });
}
function on(n) {
  n.cancelable && n.preventDefault();
}
function Hr(n) {
  for (var e = 0, r = 0; n; )
    e -= n.offsetLeft, r -= n.offsetTop, n = n.offsetParent;
  return {
    left: e,
    top: r
  };
}
Ze && Ze !== "standard" && "" + Ze.toLowerCase();
var Kn = Ee("transform"), sn = Ee("transition"), qn = be && Ee("perspective") in yr, Kr = be && ("ontouchstart" in window || Wn), Gn = be && sn in yr, Xe = {
  transform: Kn,
  transition: sn,
  transitionTimingFunction: Ee("transitionTimingFunction"),
  transitionDuration: Ee("transitionDuration"),
  transitionDelay: Ee("transitionDelay"),
  transformOrigin: Ee("transformOrigin"),
  transitionEnd: Ee("transitionEnd"),
  transitionProperty: Ee("transitionProperty")
}, cr = {
  touchstart: 1,
  touchmove: 1,
  touchend: 1,
  touchcancel: 1,
  mousedown: 2,
  mousemove: 2,
  mouseup: 2
};
function qr(n) {
  if (n instanceof window.SVGElement) {
    var e = n.getBoundingClientRect();
    return {
      top: e.top,
      left: e.left,
      width: e.width,
      height: e.height
    };
  } else
    return {
      top: n.offsetTop,
      left: n.offsetLeft,
      width: n.offsetWidth,
      height: n.offsetHeight
    };
}
function ct(n, e) {
  for (var r in e)
    if (e[r].test(n[r]))
      return !0;
  return !1;
}
var Jn = ct;
function Qn(n, e) {
  var r = document.createEvent("Event");
  r.initEvent(e, !0, !0), r.pageX = n.pageX, r.pageY = n.pageY, n.target.dispatchEvent(r);
}
function an(n, e) {
  e === void 0 && (e = "click");
  var r;
  n.type === "mouseup" ? r = n : (n.type === "touchend" || n.type === "touchcancel") && (r = n.changedTouches[0]);
  var o = {};
  r && (o.screenX = r.screenX || 0, o.screenY = r.screenY || 0, o.clientX = r.clientX || 0, o.clientY = r.clientY || 0);
  var a, u = !0, h = !0, p = n.ctrlKey, y = n.shiftKey, b = n.altKey, E = n.metaKey, _ = {
    ctrlKey: p,
    shiftKey: y,
    altKey: b,
    metaKey: E
  };
  if (typeof MouseEvent < "u")
    try {
      a = new MouseEvent(e, pr(ut({
        bubbles: u,
        cancelable: h
      }, _), o));
    } catch {
      C();
    }
  else
    C();
  function C() {
    a = document.createEvent("Event"), a.initEvent(e, u, h), pr(a, o);
  }
  a.forwardedTouchEvent = !0, a._constructed = !0, n.target.dispatchEvent(a);
}
function Zn(n) {
  an(n, "dblclick");
}
var We = {
  swipe: {
    style: "cubic-bezier(0.23, 1, 0.32, 1)",
    fn: function(n) {
      return 1 + --n * n * n * n * n;
    }
  },
  swipeBounce: {
    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fn: function(n) {
      return n * (2 - n);
    }
  },
  bounce: {
    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    fn: function(n) {
      return 1 - --n * n * n * n;
    }
  }
}, eo = 1e3 / 60, Re = be && window;
function un() {
}
var cn = function() {
  return be ? Re.requestAnimationFrame || Re.webkitRequestAnimationFrame || Re.mozRequestAnimationFrame || Re.oRequestAnimationFrame || function(n) {
    return window.setTimeout(n, n.interval || eo);
  } : un;
}(), Ve = function() {
  return be ? Re.cancelAnimationFrame || Re.webkitCancelAnimationFrame || Re.mozCancelAnimationFrame || Re.oCancelAnimationFrame || function(n) {
    window.clearTimeout(n);
  } : un;
}(), Gr = function(n) {
}, lr = {
  enumerable: !0,
  configurable: !0,
  get: Gr,
  set: Gr
}, to = function(n, e) {
  for (var r = e.split("."), o = 0; o < r.length - 1; o++)
    if (n = n[r[o]], typeof n != "object" || !n)
      return;
  var a = r.pop();
  return typeof n[a] == "function" ? function() {
    return n[a].apply(n, arguments);
  } : n[a];
}, ro = function(n, e, r) {
  for (var o = e.split("."), a, u = 0; u < o.length - 1; u++)
    a = o[u], n[a] || (n[a] = {}), n = n[a];
  n[o.pop()] = r;
};
function no(n, e, r) {
  lr.get = function() {
    return to(this, e);
  }, lr.set = function(a) {
    ro(this, e, a);
  }, Object.defineProperty(n, r, lr);
}
var Oe = function() {
  function n(e) {
    this.events = {}, this.eventTypes = {}, this.registerType(e);
  }
  return n.prototype.on = function(e, r, o) {
    return o === void 0 && (o = this), this.hasType(e), this.events[e] || (this.events[e] = []), this.events[e].push([r, o]), this;
  }, n.prototype.once = function(e, r, o) {
    var a = this;
    o === void 0 && (o = this), this.hasType(e);
    var u = function() {
      for (var h = [], p = 0; p < arguments.length; p++)
        h[p] = arguments[p];
      a.off(e, u);
      var y = r.apply(o, h);
      if (y === !0)
        return y;
    };
    return u.fn = r, this.on(e, u), this;
  }, n.prototype.off = function(e, r) {
    if (!e && !r)
      return this.events = {}, this;
    if (e) {
      if (this.hasType(e), !r)
        return this.events[e] = [], this;
      var o = this.events[e];
      if (!o)
        return this;
      for (var a = o.length; a--; )
        (o[a][0] === r || o[a][0] && o[a][0].fn === r) && o.splice(a, 1);
      return this;
    }
  }, n.prototype.trigger = function(e) {
    for (var r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    this.hasType(e);
    var a = this.events[e];
    if (!!a)
      for (var u = a.length, h = tn(a), p, y = 0; y < u; y++) {
        var b = h[y], E = b[0], _ = b[1];
        if (E && (p = E.apply(_, r), p === !0))
          return p;
      }
  }, n.prototype.registerType = function(e) {
    var r = this;
    e.forEach(function(o) {
      r.eventTypes[o] = o;
    });
  }, n.prototype.destroy = function() {
    this.events = {}, this.eventTypes = {};
  }, n.prototype.hasType = function(e) {
    var r = this.eventTypes, o = r[e] === e;
    o || Mt('EventEmitter has used unknown event type: "' + e + '", should be oneof [' + ("" + Object.keys(r).map(function(a) {
      return JSON.stringify(a);
    })) + "]");
  }, n;
}(), jt = function() {
  function n(e, r) {
    this.wrapper = e, this.events = r, this.addDOMEvents();
  }
  return n.prototype.destroy = function() {
    this.removeDOMEvents(), this.events = [];
  }, n.prototype.addDOMEvents = function() {
    this.handleDOMEvents(Un);
  }, n.prototype.removeDOMEvents = function() {
    this.handleDOMEvents(Hn);
  }, n.prototype.handleDOMEvents = function(e) {
    var r = this, o = this.wrapper;
    this.events.forEach(function(a) {
      e(o, a.name, r, !!a.capture);
    });
  }, n.prototype.handleEvent = function(e) {
    var r = e.type;
    this.events.some(function(o) {
      return o.name === r ? (o.handler(e), !0) : !1;
    });
  }, n;
}(), oo = function() {
  function n() {
  }
  return n;
}(), io = function(n) {
  It(e, n);
  function e() {
    var r = n.call(this) || this;
    return r.startX = 0, r.startY = 0, r.scrollX = !1, r.scrollY = !0, r.freeScroll = !1, r.directionLockThreshold = 0, r.eventPassthrough = "", r.click = !1, r.dblclick = !1, r.tap = "", r.bounce = {
      top: !0,
      bottom: !0,
      left: !0,
      right: !0
    }, r.bounceTime = 800, r.momentum = !0, r.momentumLimitTime = 300, r.momentumLimitDistance = 15, r.swipeTime = 2500, r.swipeBounceTime = 500, r.deceleration = 15e-4, r.flickLimitTime = 200, r.flickLimitDistance = 100, r.resizePolling = 60, r.probeType = 0, r.stopPropagation = !1, r.preventDefault = !0, r.preventDefaultException = {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
    }, r.tagException = {
      tagName: /^TEXTAREA$/
    }, r.HWCompositing = !0, r.useTransition = !0, r.bindToWrapper = !1, r.bindToTarget = !1, r.disableMouse = Kr, r.disableTouch = !Kr, r.autoBlur = !0, r.autoEndDistance = 5, r.outOfBoundaryDampingFactor = 1 / 3, r.specifiedIndexAsContent = 0, r.quadrant = 1, r;
  }
  return e.prototype.merge = function(r) {
    if (!r)
      return this;
    for (var o in r) {
      if (o === "bounce") {
        this.bounce = this.resolveBounce(r[o]);
        continue;
      }
      this[o] = r[o];
    }
    return this;
  }, e.prototype.process = function() {
    return this.translateZ = this.HWCompositing && qn ? " translateZ(1px)" : "", this.useTransition = this.useTransition && Gn, this.preventDefault = !this.eventPassthrough && this.preventDefault, this.scrollX = this.eventPassthrough === "horizontal" ? !1 : this.scrollX, this.scrollY = this.eventPassthrough === "vertical" ? !1 : this.scrollY, this.freeScroll = this.freeScroll && !this.eventPassthrough, this.scrollX = this.freeScroll ? !0 : this.scrollX, this.scrollY = this.freeScroll ? !0 : this.scrollY, this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold, this;
  }, e.prototype.resolveBounce = function(r) {
    var o = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    }, a = {
      top: !1,
      right: !1,
      bottom: !1,
      left: !1
    }, u;
    return typeof r == "object" ? u = pr(o, r) : u = r ? o : a, u;
  }, e;
}(oo), so = function() {
  function n(e, r) {
    this.wrapper = e, this.options = r, this.hooks = new Oe([
      "beforeStart",
      "start",
      "move",
      "end",
      "click"
    ]), this.handleDOMEvents();
  }
  return n.prototype.handleDOMEvents = function() {
    var e = this.options, r = e.bindToWrapper, o = e.disableMouse, a = e.disableTouch, u = e.click, h = this.wrapper, p = r ? h : window, y = [], b = [], E = !a, _ = !o;
    u && y.push({
      name: "click",
      handler: this.click.bind(this),
      capture: !0
    }), E && (y.push({
      name: "touchstart",
      handler: this.start.bind(this)
    }), b.push({
      name: "touchmove",
      handler: this.move.bind(this)
    }, {
      name: "touchend",
      handler: this.end.bind(this)
    }, {
      name: "touchcancel",
      handler: this.end.bind(this)
    })), _ && (y.push({
      name: "mousedown",
      handler: this.start.bind(this)
    }), b.push({
      name: "mousemove",
      handler: this.move.bind(this)
    }, {
      name: "mouseup",
      handler: this.end.bind(this)
    })), this.wrapperEventRegister = new jt(h, y), this.targetEventRegister = new jt(p, b);
  }, n.prototype.beforeHandler = function(e, r) {
    var o = this.options, a = o.preventDefault, u = o.stopPropagation, h = o.preventDefaultException, p = {
      start: function() {
        return a && !ct(e.target, h);
      },
      end: function() {
        return a && !ct(e.target, h);
      },
      move: function() {
        return a;
      }
    };
    p[r]() && e.preventDefault(), u && e.stopPropagation();
  }, n.prototype.setInitiated = function(e) {
    e === void 0 && (e = 0), this.initiated = e;
  }, n.prototype.start = function(e) {
    var r = cr[e.type];
    if (!(this.initiated && this.initiated !== r)) {
      if (this.setInitiated(r), Jn(e.target, this.options.tagException)) {
        this.setInitiated();
        return;
      }
      if (!(r === 2 && e.button !== 0) && !this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
        this.beforeHandler(e, "start");
        var o = e.touches ? e.touches[0] : e;
        this.pointX = o.pageX, this.pointY = o.pageY, this.hooks.trigger(this.hooks.eventTypes.start, e);
      }
    }
  }, n.prototype.move = function(e) {
    if (cr[e.type] === this.initiated) {
      this.beforeHandler(e, "move");
      var r = e.touches ? e.touches[0] : e, o = r.pageX - this.pointX, a = r.pageY - this.pointY;
      if (this.pointX = r.pageX, this.pointY = r.pageY, !this.hooks.trigger(this.hooks.eventTypes.move, {
        deltaX: o,
        deltaY: a,
        e
      })) {
        var u = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, h = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, p = this.pointX - u, y = this.pointY - h, b = this.options.autoEndDistance;
        (p > document.documentElement.clientWidth - b || y > document.documentElement.clientHeight - b || p < b || y < b) && this.end(e);
      }
    }
  }, n.prototype.end = function(e) {
    cr[e.type] === this.initiated && (this.setInitiated(), this.beforeHandler(e, "end"), this.hooks.trigger(this.hooks.eventTypes.end, e));
  }, n.prototype.click = function(e) {
    this.hooks.trigger(this.hooks.eventTypes.click, e);
  }, n.prototype.setContent = function(e) {
    e !== this.wrapper && (this.wrapper = e, this.rebindDOMEvents());
  }, n.prototype.rebindDOMEvents = function() {
    this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.handleDOMEvents();
  }, n.prototype.destroy = function() {
    this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.hooks.destroy();
  }, n;
}(), fr = {
  x: ["translateX", "px"],
  y: ["translateY", "px"]
}, ao = function() {
  function n(e) {
    this.setContent(e), this.hooks = new Oe(["beforeTranslate", "translate"]);
  }
  return n.prototype.getComputedPosition = function() {
    var e = window.getComputedStyle(this.content, null), r = e[Xe.transform].split(")")[0].split(", "), o = +(r[12] || r[4]) || 0, a = +(r[13] || r[5]) || 0;
    return {
      x: o,
      y: a
    };
  }, n.prototype.translate = function(e) {
    var r = [];
    Object.keys(e).forEach(function(o) {
      if (!!fr[o]) {
        var a = fr[o][0];
        if (a) {
          var u = fr[o][1], h = e[o];
          r.push(a + "(" + h + u + ")");
        }
      }
    }), this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, r, e), this.style[Xe.transform] = r.join(" "), this.hooks.trigger(this.hooks.eventTypes.translate, e);
  }, n.prototype.setContent = function(e) {
    this.content !== e && (this.content = e, this.style = e.style);
  }, n.prototype.destroy = function() {
    this.hooks.destroy();
  }, n;
}(), ln = function() {
  function n(e, r, o) {
    this.translater = r, this.options = o, this.timer = 0, this.hooks = new Oe([
      "move",
      "end",
      "beforeForceStop",
      "forceStop",
      "callStop",
      "time",
      "timeFunction"
    ]), this.setContent(e);
  }
  return n.prototype.translate = function(e) {
    this.translater.translate(e);
  }, n.prototype.setPending = function(e) {
    this.pending = e;
  }, n.prototype.setForceStopped = function(e) {
    this.forceStopped = e;
  }, n.prototype.setCallStop = function(e) {
    this.callStopWhenPending = e;
  }, n.prototype.setContent = function(e) {
    this.content !== e && (this.content = e, this.style = e.style, this.stop());
  }, n.prototype.clearTimer = function() {
    this.timer && (Ve(this.timer), this.timer = 0);
  }, n.prototype.destroy = function() {
    this.hooks.destroy(), Ve(this.timer);
  }, n;
}(), uo = function(n, e, r, o) {
  var a = function(b, E) {
    var _ = b - E, C = _ > 0 ? -1 : _ < 0 ? 1 : 0;
    return C;
  }, u = a(e.x, n.x), h = a(e.y, n.y), p = r.x - o.x, y = r.y - o.y;
  return u * p <= 0 && h * y <= 0;
}, co = function(n) {
  It(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.startProbe = function(r, o) {
    var a = this, u = r, h = function() {
      var p = a.translater.getComputedPosition();
      uo(r, o, p, u) && a.hooks.trigger(a.hooks.eventTypes.move, p), a.pending || (a.callStopWhenPending ? a.callStopWhenPending = !1 : a.hooks.trigger(a.hooks.eventTypes.end, p)), u = p, a.pending && (a.timer = cn(h));
    };
    this.callStopWhenPending && this.setCallStop(!1), Ve(this.timer), h();
  }, e.prototype.transitionTime = function(r) {
    r === void 0 && (r = 0), this.style[Xe.transitionDuration] = r + "ms", this.hooks.trigger(this.hooks.eventTypes.time, r);
  }, e.prototype.transitionTimingFunction = function(r) {
    this.style[Xe.transitionTimingFunction] = r, this.hooks.trigger(this.hooks.eventTypes.timeFunction, r);
  }, e.prototype.transitionProperty = function() {
    this.style[Xe.transitionProperty] = Xe.transform;
  }, e.prototype.move = function(r, o, a, u) {
    this.setPending(a > 0), this.transitionTimingFunction(u), this.transitionProperty(), this.transitionTime(a), this.translate(o);
    var h = this.options.probeType === 3;
    a && h && this.startProbe(r, o), a || (this._reflow = this.content.offsetHeight, h && this.hooks.trigger(this.hooks.eventTypes.move, o), this.hooks.trigger(this.hooks.eventTypes.end, o));
  }, e.prototype.doStop = function() {
    var r = this.pending;
    if (this.setForceStopped(!1), this.setCallStop(!1), r) {
      this.setPending(!1), Ve(this.timer);
      var o = this.translater.getComputedPosition(), a = o.x, u = o.y;
      this.transitionTime(), this.translate({ x: a, y: u }), this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: a, y: u });
    }
    return r;
  }, e.prototype.stop = function() {
    var r = this.doStop();
    r && this.hooks.trigger(this.hooks.eventTypes.callStop);
  }, e;
}(ln), lo = function(n) {
  It(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e.prototype.move = function(r, o, a, u) {
    if (!a) {
      this.translate(o), this.options.probeType === 3 && this.hooks.trigger(this.hooks.eventTypes.move, o), this.hooks.trigger(this.hooks.eventTypes.end, o);
      return;
    }
    this.animate(r, o, a, u);
  }, e.prototype.animate = function(r, o, a, u) {
    var h = this, p = ze(), y = p + a, b = this.options.probeType === 3, E = function() {
      var _ = ze();
      if (_ >= y) {
        h.translate(o), b && h.hooks.trigger(h.hooks.eventTypes.move, o), h.hooks.trigger(h.hooks.eventTypes.end, o);
        return;
      }
      _ = (_ - p) / a;
      var C = u(_), x = {};
      Object.keys(o).forEach(function(P) {
        var N = r[P], re = o[P];
        x[P] = (re - N) * C + N;
      }), h.translate(x), b && h.hooks.trigger(h.hooks.eventTypes.move, x), h.pending && (h.timer = cn(E)), h.pending || (h.callStopWhenPending ? h.callStopWhenPending = !1 : h.hooks.trigger(h.hooks.eventTypes.end, o));
    };
    this.setPending(!0), this.callStopWhenPending && this.setCallStop(!1), Ve(this.timer), E();
  }, e.prototype.doStop = function() {
    var r = this.pending;
    if (this.setForceStopped(!1), this.setCallStop(!1), r) {
      this.setPending(!1), Ve(this.timer);
      var o = this.translater.getComputedPosition();
      this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, o);
    }
    return r;
  }, e.prototype.stop = function() {
    var r = this.doStop();
    r && this.hooks.trigger(this.hooks.eventTypes.callStop);
  }, e;
}(ln);
function fo(n, e, r) {
  var o = r.useTransition, a = {};
  return Object.defineProperty(a, "probeType", {
    enumerable: !0,
    configurable: !1,
    get: function() {
      return r.probeType;
    }
  }), o ? new co(n, e, a) : new lo(n, e, a);
}
var Jr = function() {
  function n(e, r, o) {
    this.wrapper = e, this.options = o, this.hooks = new Oe([
      "beforeComputeBoundary",
      "computeBoundary",
      "momentum",
      "end",
      "ignoreHasScroll"
    ]), this.refresh(r);
  }
  return n.prototype.start = function() {
    this.dist = 0, this.setMovingDirection(0), this.setDirection(0);
  }, n.prototype.move = function(e) {
    return e = this.hasScroll ? e : 0, this.setMovingDirection(e), this.performDampingAlgorithm(e, this.options.outOfBoundaryDampingFactor);
  }, n.prototype.setMovingDirection = function(e) {
    this.movingDirection = e > 0 ? -1 : e < 0 ? 1 : 0;
  }, n.prototype.setDirection = function(e) {
    this.direction = e > 0 ? -1 : e < 0 ? 1 : 0;
  }, n.prototype.performDampingAlgorithm = function(e, r) {
    var o = this.currentPos + e;
    return (o > this.minScrollPos || o < this.maxScrollPos) && (o > this.minScrollPos && this.options.bounces[0] || o < this.maxScrollPos && this.options.bounces[1] ? o = this.currentPos + e * r : o = o > this.minScrollPos ? this.minScrollPos : this.maxScrollPos), o;
  }, n.prototype.end = function(e) {
    var r = {
      duration: 0
    }, o = Math.abs(this.currentPos - this.startPos);
    if (this.options.momentum && e < this.options.momentumLimitTime && o > this.options.momentumLimitDistance) {
      var a = this.direction === -1 && this.options.bounces[0] || this.direction === 1 && this.options.bounces[1] ? this.wrapperSize : 0;
      r = this.hasScroll ? this.momentum(this.currentPos, this.startPos, e, this.maxScrollPos, this.minScrollPos, a, this.options) : { destination: this.currentPos, duration: 0 };
    } else
      this.hooks.trigger(this.hooks.eventTypes.end, r);
    return r;
  }, n.prototype.momentum = function(e, r, o, a, u, h, p) {
    p === void 0 && (p = this.options);
    var y = e - r, b = Math.abs(y) / o, E = p.deceleration, _ = p.swipeBounceTime, C = p.swipeTime, x = Math.min(C, b * 2 / E), P = {
      destination: e + b * b / E * (y < 0 ? -1 : 1),
      duration: x,
      rate: 15
    };
    return this.hooks.trigger(this.hooks.eventTypes.momentum, P, y), P.destination < a ? (P.destination = h ? Math.max(a - h / 4, a - h / P.rate * b) : a, P.duration = _) : P.destination > u && (P.destination = h ? Math.min(u + h / 4, u + h / P.rate * b) : u, P.duration = _), P.destination = Math.round(P.destination), P;
  }, n.prototype.updateDirection = function() {
    var e = this.currentPos - this.absStartPos;
    this.setDirection(e);
  }, n.prototype.refresh = function(e) {
    var r = this.options.rect, o = r.size, a = r.position, u = window.getComputedStyle(this.wrapper, null).position === "static", h = qr(this.wrapper);
    this.wrapperSize = this.wrapper[o === "width" ? "clientWidth" : "clientHeight"], this.setContent(e);
    var p = qr(this.content);
    this.contentSize = p[o], this.relativeOffset = p[a], u && (this.relativeOffset -= h[a]), this.computeBoundary(), this.setDirection(0);
  }, n.prototype.setContent = function(e) {
    e !== this.content && (this.content = e, this.resetState());
  }, n.prototype.resetState = function() {
    this.currentPos = 0, this.startPos = 0, this.dist = 0, this.setDirection(0), this.setMovingDirection(0), this.resetStartPos();
  }, n.prototype.computeBoundary = function() {
    this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
    var e = {
      minScrollPos: 0,
      maxScrollPos: this.wrapperSize - this.contentSize
    };
    e.maxScrollPos < 0 && (e.maxScrollPos -= this.relativeOffset, this.options.specifiedIndexAsContent === 0 && (e.minScrollPos = -this.relativeOffset)), this.hooks.trigger(this.hooks.eventTypes.computeBoundary, e), this.minScrollPos = e.minScrollPos, this.maxScrollPos = e.maxScrollPos, this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos, !this.hasScroll && this.minScrollPos < this.maxScrollPos && (this.maxScrollPos = this.minScrollPos, this.contentSize = this.wrapperSize);
  }, n.prototype.updatePosition = function(e) {
    this.currentPos = e;
  }, n.prototype.getCurrentPos = function() {
    return this.currentPos;
  }, n.prototype.checkInBoundary = function() {
    var e = this.adjustPosition(this.currentPos), r = e === this.getCurrentPos();
    return {
      position: e,
      inBoundary: r
    };
  }, n.prototype.adjustPosition = function(e) {
    return !this.hasScroll && !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll) ? e = this.minScrollPos : e > this.minScrollPos ? e = this.minScrollPos : e < this.maxScrollPos && (e = this.maxScrollPos), e;
  }, n.prototype.updateStartPos = function() {
    this.startPos = this.currentPos;
  }, n.prototype.updateAbsStartPos = function() {
    this.absStartPos = this.currentPos;
  }, n.prototype.resetStartPos = function() {
    this.updateStartPos(), this.updateAbsStartPos();
  }, n.prototype.getAbsDist = function(e) {
    return this.dist += e, Math.abs(this.dist);
  }, n.prototype.destroy = function() {
    this.hooks.destroy();
  }, n;
}(), xt, Dt, At, Bt, Qr = (xt = {}, xt.yes = function(n) {
  return !0;
}, xt.no = function(n) {
  return on(n), !1;
}, xt), ho = (Dt = {}, Dt.horizontal = (At = {}, At.yes = "horizontal", At.no = "vertical", At), Dt.vertical = (Bt = {}, Bt.yes = "vertical", Bt.no = "horizontal", Bt), Dt), po = function() {
  function n(e, r, o) {
    this.directionLockThreshold = e, this.freeScroll = r, this.eventPassthrough = o, this.reset();
  }
  return n.prototype.reset = function() {
    this.directionLocked = "";
  }, n.prototype.checkMovingDirection = function(e, r, o) {
    return this.computeDirectionLock(e, r), this.handleEventPassthrough(o);
  }, n.prototype.adjustDelta = function(e, r) {
    return this.directionLocked === "horizontal" ? r = 0 : this.directionLocked === "vertical" && (e = 0), {
      deltaX: e,
      deltaY: r
    };
  }, n.prototype.computeDirectionLock = function(e, r) {
    this.directionLocked === "" && !this.freeScroll && (e > r + this.directionLockThreshold ? this.directionLocked = "horizontal" : r >= e + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none");
  }, n.prototype.handleEventPassthrough = function(e) {
    var r = ho[this.directionLocked];
    if (r) {
      if (this.eventPassthrough === r.yes)
        return Qr.yes(e);
      if (this.eventPassthrough === r.no)
        return Qr.no(e);
    }
    return !1;
  }, n;
}(), vo = function(n, e, r) {
  return r === 2 ? [e, -n] : r === 3 ? [-n, -e] : r === 4 ? [-e, n] : [n, e];
}, yo = function() {
  function n(e, r, o, a, u) {
    this.hooks = new Oe([
      "start",
      "beforeMove",
      "scrollStart",
      "scroll",
      "beforeEnd",
      "end",
      "scrollEnd",
      "contentNotMoved",
      "detectMovingDirection",
      "coordinateTransformation"
    ]), this.scrollBehaviorX = e, this.scrollBehaviorY = r, this.actionsHandler = o, this.animater = a, this.options = u, this.directionLockAction = new po(u.directionLockThreshold, u.freeScroll, u.eventPassthrough), this.enabled = !0, this.bindActionsHandler();
  }
  return n.prototype.bindActionsHandler = function() {
    var e = this;
    this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function(r) {
      return e.enabled ? e.handleStart(r) : !0;
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function(r) {
      var o = r.deltaX, a = r.deltaY, u = r.e;
      if (!e.enabled)
        return !0;
      var h = vo(o, a, e.options.quadrant), p = h[0], y = h[1], b = {
        deltaX: p,
        deltaY: y
      };
      return e.hooks.trigger(e.hooks.eventTypes.coordinateTransformation, b), e.handleMove(b.deltaX, b.deltaY, u);
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function(r) {
      return e.enabled ? e.handleEnd(r) : !0;
    }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function(r) {
      e.enabled && !r._constructed && e.handleClick(r);
    });
  }, n.prototype.handleStart = function(e) {
    var r = ze();
    this.fingerMoved = !1, this.contentMoved = !1, this.startTime = r, this.directionLockAction.reset(), this.scrollBehaviorX.start(), this.scrollBehaviorY.start(), this.animater.doStop(), this.scrollBehaviorX.resetStartPos(), this.scrollBehaviorY.resetStartPos(), this.hooks.trigger(this.hooks.eventTypes.start, e);
  }, n.prototype.handleMove = function(e, r, o) {
    if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, o)) {
      var a = this.scrollBehaviorX.getAbsDist(e), u = this.scrollBehaviorY.getAbsDist(r), h = ze();
      if (this.checkMomentum(a, u, h))
        return !0;
      if (this.directionLockAction.checkMovingDirection(a, u, o))
        return this.actionsHandler.setInitiated(), !0;
      var p = this.directionLockAction.adjustDelta(e, r), y = this.scrollBehaviorX.getCurrentPos(), b = this.scrollBehaviorX.move(p.deltaX), E = this.scrollBehaviorY.getCurrentPos(), _ = this.scrollBehaviorY.move(p.deltaY);
      if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
        this.fingerMoved || (this.fingerMoved = !0);
        var C = b !== y || _ !== E;
        !this.contentMoved && !C && this.hooks.trigger(this.hooks.eventTypes.contentNotMoved), !this.contentMoved && C && (this.contentMoved = !0, this.hooks.trigger(this.hooks.eventTypes.scrollStart)), this.contentMoved && C && (this.animater.translate({
          x: b,
          y: _
        }), this.dispatchScroll(h));
      }
    }
  }, n.prototype.dispatchScroll = function(e) {
    e - this.startTime > this.options.momentumLimitTime && (this.startTime = e, this.scrollBehaviorX.updateStartPos(), this.scrollBehaviorY.updateStartPos(), this.options.probeType === 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())), this.options.probeType > 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
  }, n.prototype.checkMomentum = function(e, r, o) {
    return o - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && e < this.options.momentumLimitDistance;
  }, n.prototype.handleEnd = function(e) {
    if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
      var r = this.getCurrentPos();
      if (this.scrollBehaviorX.updateDirection(), this.scrollBehaviorY.updateDirection(), this.hooks.trigger(this.hooks.eventTypes.end, e, r))
        return !0;
      r = this.ensureIntegerPos(r), this.animater.translate(r), this.endTime = ze();
      var o = this.endTime - this.startTime;
      this.hooks.trigger(this.hooks.eventTypes.scrollEnd, r, o);
    }
  }, n.prototype.ensureIntegerPos = function(e) {
    this.ensuringInteger = !0;
    var r = e.x, o = e.y, a = this.scrollBehaviorX, u = a.minScrollPos, h = a.maxScrollPos, p = this.scrollBehaviorY, y = p.minScrollPos, b = p.maxScrollPos;
    return r = r > 0 ? Math.ceil(r) : Math.floor(r), o = o > 0 ? Math.ceil(o) : Math.floor(o), r = Ur(r, h, u), o = Ur(o, b, y), { x: r, y: o };
  }, n.prototype.handleClick = function(e) {
    ct(e.target, this.options.preventDefaultException) || (on(e), e.stopPropagation());
  }, n.prototype.getCurrentPos = function() {
    return {
      x: this.scrollBehaviorX.getCurrentPos(),
      y: this.scrollBehaviorY.getCurrentPos()
    };
  }, n.prototype.refresh = function() {
    this.endTime = 0;
  }, n.prototype.destroy = function() {
    this.hooks.destroy();
  }, n;
}();
function mo(n) {
  var e = [
    "click",
    "bindToWrapper",
    "disableMouse",
    "disableTouch",
    "preventDefault",
    "stopPropagation",
    "tagException",
    "preventDefaultException",
    "autoEndDistance"
  ].reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
  return e;
}
function Zr(n, e, r, o) {
  var a = [
    "momentum",
    "momentumLimitTime",
    "momentumLimitDistance",
    "deceleration",
    "swipeBounceTime",
    "swipeTime",
    "outOfBoundaryDampingFactor",
    "specifiedIndexAsContent"
  ].reduce(function(u, h) {
    return u[h] = n[h], u;
  }, {});
  return a.scrollable = !!n[e], a.bounces = r, a.rect = o, a;
}
function dr(n, e, r) {
  r.forEach(function(o) {
    var a, u;
    typeof o == "string" ? a = u = o : (a = o.source, u = o.target), n.on(a, function() {
      for (var h = [], p = 0; p < arguments.length; p++)
        h[p] = arguments[p];
      return e.trigger.apply(e, tn([u], h));
    });
  });
}
function go(n, e) {
  for (var r = Object.keys(n), o = 0, a = r; o < a.length; o++) {
    var u = a[o];
    if (n[u] !== e[u])
      return !1;
  }
  return !0;
}
var en = 1, bo = function() {
  function n(e, r, o) {
    this.wrapper = e, this.content = r, this.resizeTimeout = 0, this.hooks = new Oe([
      "beforeStart",
      "beforeMove",
      "beforeScrollStart",
      "scrollStart",
      "scroll",
      "beforeEnd",
      "scrollEnd",
      "resize",
      "touchEnd",
      "end",
      "flick",
      "scrollCancel",
      "momentum",
      "scrollTo",
      "minDistanceScroll",
      "scrollToElement",
      "beforeRefresh"
    ]), this.options = o;
    var a = this.options.bounce, u = a.left, h = a.right, p = a.top, y = a.bottom;
    this.scrollBehaviorX = new Jr(e, r, Zr(o, "scrollX", [u, h], {
      size: "width",
      position: "left"
    })), this.scrollBehaviorY = new Jr(e, r, Zr(o, "scrollY", [p, y], {
      size: "height",
      position: "top"
    })), this.translater = new ao(this.content), this.animater = fo(this.content, this.translater, this.options), this.actionsHandler = new so(this.options.bindToTarget ? this.content : e, mo(this.options)), this.actions = new yo(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
    var b = this.resize.bind(this);
    this.resizeRegister = new jt(window, [
      {
        name: "orientationchange",
        handler: b
      },
      {
        name: "resize",
        handler: b
      }
    ]), this.registerTransitionEnd(), this.init();
  }
  return n.prototype.init = function() {
    var e = this;
    this.bindTranslater(), this.bindAnimater(), this.bindActions(), this.hooks.on(this.hooks.eventTypes.scrollEnd, function() {
      e.togglePointerEvents(!0);
    });
  }, n.prototype.registerTransitionEnd = function() {
    this.transitionEndRegister = new jt(this.content, [
      {
        name: Xe.transitionEnd,
        handler: this.transitionEnd.bind(this)
      }
    ]);
  }, n.prototype.bindTranslater = function() {
    var e = this, r = this.translater.hooks;
    r.on(r.eventTypes.beforeTranslate, function(o) {
      e.options.translateZ && o.push(e.options.translateZ);
    }), r.on(r.eventTypes.translate, function(o) {
      var a = e.getCurrentPos();
      if (e.updatePositions(o), e.actions.ensuringInteger === !0) {
        e.actions.ensuringInteger = !1;
        return;
      }
      (o.x !== a.x || o.y !== a.y) && e.togglePointerEvents(!1);
    });
  }, n.prototype.bindAnimater = function() {
    var e = this;
    this.animater.hooks.on(this.animater.hooks.eventTypes.end, function(r) {
      e.resetPosition(e.options.bounceTime) || (e.animater.setPending(!1), e.hooks.trigger(e.hooks.eventTypes.scrollEnd, r));
    }), dr(this.animater.hooks, this.hooks, [
      {
        source: this.animater.hooks.eventTypes.move,
        target: this.hooks.eventTypes.scroll
      },
      {
        source: this.animater.hooks.eventTypes.forceStop,
        target: this.hooks.eventTypes.scrollEnd
      }
    ]);
  }, n.prototype.bindActions = function() {
    var e = this, r = this.actions;
    dr(r.hooks, this.hooks, [
      {
        source: r.hooks.eventTypes.start,
        target: this.hooks.eventTypes.beforeStart
      },
      {
        source: r.hooks.eventTypes.start,
        target: this.hooks.eventTypes.beforeScrollStart
      },
      {
        source: r.hooks.eventTypes.beforeMove,
        target: this.hooks.eventTypes.beforeMove
      },
      {
        source: r.hooks.eventTypes.scrollStart,
        target: this.hooks.eventTypes.scrollStart
      },
      {
        source: r.hooks.eventTypes.scroll,
        target: this.hooks.eventTypes.scroll
      },
      {
        source: r.hooks.eventTypes.beforeEnd,
        target: this.hooks.eventTypes.beforeEnd
      }
    ]), r.hooks.on(r.hooks.eventTypes.end, function(o, a) {
      if (e.hooks.trigger(e.hooks.eventTypes.touchEnd, a), e.hooks.trigger(e.hooks.eventTypes.end, a) || !r.fingerMoved && (e.hooks.trigger(e.hooks.eventTypes.scrollCancel), e.checkClick(o)))
        return !0;
      if (e.resetPosition(e.options.bounceTime, We.bounce))
        return e.animater.setForceStopped(!1), !0;
    }), r.hooks.on(r.hooks.eventTypes.scrollEnd, function(o, a) {
      var u = Math.abs(o.x - e.scrollBehaviorX.startPos), h = Math.abs(o.y - e.scrollBehaviorY.startPos);
      if (e.checkFlick(a, u, h)) {
        e.animater.setForceStopped(!1), e.hooks.trigger(e.hooks.eventTypes.flick);
        return;
      }
      if (e.momentum(o, a)) {
        e.animater.setForceStopped(!1);
        return;
      }
      r.contentMoved && e.hooks.trigger(e.hooks.eventTypes.scrollEnd, o), e.animater.forceStopped && e.animater.setForceStopped(!1);
    });
  }, n.prototype.checkFlick = function(e, r, o) {
    var a = 1;
    if (this.hooks.events.flick.length > 1 && e < this.options.flickLimitTime && r < this.options.flickLimitDistance && o < this.options.flickLimitDistance && (o > a || r > a))
      return !0;
  }, n.prototype.momentum = function(e, r) {
    var o = {
      time: 0,
      easing: We.swiper,
      newX: e.x,
      newY: e.y
    }, a = this.scrollBehaviorX.end(r), u = this.scrollBehaviorY.end(r);
    if (o.newX = vr(a.destination) ? o.newX : a.destination, o.newY = vr(u.destination) ? o.newY : u.destination, o.time = Math.max(a.duration, u.duration), this.hooks.trigger(this.hooks.eventTypes.momentum, o, this), o.newX !== e.x || o.newY !== e.y)
      return (o.newX > this.scrollBehaviorX.minScrollPos || o.newX < this.scrollBehaviorX.maxScrollPos || o.newY > this.scrollBehaviorY.minScrollPos || o.newY < this.scrollBehaviorY.maxScrollPos) && (o.easing = We.swipeBounce), this.scrollTo(o.newX, o.newY, o.time, o.easing), !0;
  }, n.prototype.checkClick = function(e) {
    var r = {
      preventClick: this.animater.forceStopped
    };
    if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
      return this.animater.setForceStopped(!1), !0;
    if (!r.preventClick) {
      var o = this.options.dblclick, a = !1;
      if (o && this.lastClickTime) {
        var u = o.delay, h = u === void 0 ? 300 : u;
        ze() - this.lastClickTime < h && (a = !0, Zn(e));
      }
      return this.options.tap && Qn(e, this.options.tap), this.options.click && !ct(e.target, this.options.preventDefaultException) && an(e), this.lastClickTime = a ? null : ze(), !0;
    }
    return !1;
  }, n.prototype.resize = function() {
    var e = this;
    !this.actions.enabled || (Xn && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(function() {
      e.hooks.trigger(e.hooks.eventTypes.resize);
    }, this.options.resizePolling));
  }, n.prototype.transitionEnd = function(e) {
    if (!(e.target !== this.content || !this.animater.pending)) {
      var r = this.animater;
      r.transitionTime(), this.resetPosition(this.options.bounceTime, We.bounce) || (this.animater.setPending(!1), this.options.probeType !== 3 && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos()));
    }
  }, n.prototype.togglePointerEvents = function(e) {
    e === void 0 && (e = !0);
    for (var r = this.content.children.length ? this.content.children : [this.content], o = e ? "auto" : "none", a = 0; a < r.length; a++) {
      var u = r[a];
      u.isBScrollContainer || (u.style.pointerEvents = o);
    }
  }, n.prototype.refresh = function(e) {
    var r = this.setContent(e);
    this.hooks.trigger(this.hooks.eventTypes.beforeRefresh), this.scrollBehaviorX.refresh(e), this.scrollBehaviorY.refresh(e), r && (this.translater.setContent(e), this.animater.setContent(e), this.transitionEndRegister.destroy(), this.registerTransitionEnd(), this.options.bindToTarget && this.actionsHandler.setContent(e)), this.actions.refresh(), this.wrapperOffset = Hr(this.wrapper);
  }, n.prototype.setContent = function(e) {
    var r = e !== this.content;
    return r && (this.content = e), r;
  }, n.prototype.scrollBy = function(e, r, o, a) {
    o === void 0 && (o = 0);
    var u = this.getCurrentPos(), h = u.x, p = u.y;
    a = a || We.bounce, e += h, r += p, this.scrollTo(e, r, o, a);
  }, n.prototype.scrollTo = function(e, r, o, a, u) {
    o === void 0 && (o = 0), a === void 0 && (a = We.bounce), u === void 0 && (u = {
      start: {},
      end: {}
    });
    var h = this.options.useTransition ? a.style : a.fn, p = this.getCurrentPos(), y = ut({ x: p.x, y: p.y }, u.start), b = ut({
      x: e,
      y: r
    }, u.end);
    if (this.hooks.trigger(this.hooks.eventTypes.scrollTo, b), !go(y, b)) {
      var E = Math.abs(b.x - y.x), _ = Math.abs(b.y - y.y);
      E < en && _ < en && (o = 0, this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)), this.animater.move(y, b, o, h);
    }
  }, n.prototype.scrollToElement = function(e, r, o, a, u) {
    var h = nn(e), p = Hr(h), y = function(E, _, C) {
      return typeof E == "number" ? E : E ? Math.round(_ / 2 - C / 2) : 0;
    };
    o = y(o, h.offsetWidth, this.wrapper.offsetWidth), a = y(a, h.offsetHeight, this.wrapper.offsetHeight);
    var b = function(E, _, C, x) {
      return E -= _, E = x.adjustPosition(E - C), E;
    };
    p.left = b(p.left, this.wrapperOffset.left, o, this.scrollBehaviorX), p.top = b(p.top, this.wrapperOffset.top, a, this.scrollBehaviorY), !this.hooks.trigger(this.hooks.eventTypes.scrollToElement, h, p) && this.scrollTo(p.left, p.top, r, u);
  }, n.prototype.resetPosition = function(e, r) {
    e === void 0 && (e = 0), r === void 0 && (r = We.bounce);
    var o = this.scrollBehaviorX.checkInBoundary(), a = o.position, u = o.inBoundary, h = this.scrollBehaviorY.checkInBoundary(), p = h.position, y = h.inBoundary;
    return u && y ? !1 : (zn && this.reflow(), this.scrollTo(a, p, e, r), !0);
  }, n.prototype.reflow = function() {
    this._reflow = this.content.offsetHeight;
  }, n.prototype.updatePositions = function(e) {
    this.scrollBehaviorX.updatePosition(e.x), this.scrollBehaviorY.updatePosition(e.y);
  }, n.prototype.getCurrentPos = function() {
    return this.actions.getCurrentPos();
  }, n.prototype.enable = function() {
    this.actions.enabled = !0;
  }, n.prototype.disable = function() {
    Ve(this.animater.timer), this.actions.enabled = !1;
  }, n.prototype.destroy = function() {
    var e = this, r = [
      "resizeRegister",
      "transitionEndRegister",
      "actionsHandler",
      "actions",
      "hooks",
      "animater",
      "translater",
      "scrollBehaviorX",
      "scrollBehaviorY"
    ];
    r.forEach(function(o) {
      return e[o].destroy();
    });
  }, n;
}(), Yt = function(n) {
  It(e, n);
  function e(r, o) {
    var a = n.call(this, [
      "refresh",
      "contentChanged",
      "enable",
      "disable",
      "beforeScrollStart",
      "scrollStart",
      "scroll",
      "scrollEnd",
      "scrollCancel",
      "touchEnd",
      "flick",
      "destroy"
    ]) || this, u = nn(r);
    return u ? (a.plugins = {}, a.options = new io().merge(o).process(), a.setContent(u).valid && (a.hooks = new Oe([
      "refresh",
      "enable",
      "disable",
      "destroy",
      "beforeInitialScrollTo",
      "contentChanged"
    ]), a.init(u)), a) : (Mt("Can not resolve the wrapper DOM."), a);
  }
  return e.use = function(r) {
    var o = r.pluginName, a = e.plugins.some(function(u) {
      return r === u.ctor;
    });
    return a ? e : vr(o) ? (Mt("Plugin Class must specify plugin's name in static property by 'pluginName' field."), e) : (e.pluginsMap[o] = !0, e.plugins.push({
      name: o,
      applyOrder: r.applyOrder,
      ctor: r
    }), e);
  }, e.prototype.setContent = function(r) {
    var o = !1, a = !0, u = r.children[this.options.specifiedIndexAsContent];
    return u ? (o = this.content !== u, o && (this.content = u)) : (Mt("The wrapper need at least one child element to be content element to scroll."), a = !1), {
      valid: a,
      contentChanged: o
    };
  }, e.prototype.init = function(r) {
    var o = this;
    this.wrapper = r, r.isBScrollContainer = !0, this.scroller = new bo(r, this.content, this.options), this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function() {
      o.refresh();
    }), this.eventBubbling(), this.handleAutoBlur(), this.enable(), this.proxy($n), this.applyPlugins(), this.refreshWithoutReset(this.content);
    var a = this.options, u = a.startX, h = a.startY, p = {
      x: u,
      y: h
    };
    this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, p) || this.scroller.scrollTo(p.x, p.y);
  }, e.prototype.applyPlugins = function() {
    var r = this, o = this.options;
    e.plugins.sort(function(a, u) {
      var h, p = (h = {}, h.pre = -1, h.post = 1, h), y = a.applyOrder ? p[a.applyOrder] : 0, b = u.applyOrder ? p[u.applyOrder] : 0;
      return y - b;
    }).forEach(function(a) {
      var u = a.ctor;
      o[a.name] && typeof u == "function" && (r.plugins[a.name] = new u(r));
    });
  }, e.prototype.handleAutoBlur = function() {
    this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, function() {
      var r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur();
    });
  }, e.prototype.eventBubbling = function() {
    dr(this.scroller.hooks, this, [
      this.eventTypes.beforeScrollStart,
      this.eventTypes.scrollStart,
      this.eventTypes.scroll,
      this.eventTypes.scrollEnd,
      this.eventTypes.scrollCancel,
      this.eventTypes.touchEnd,
      this.eventTypes.flick
    ]);
  }, e.prototype.refreshWithoutReset = function(r) {
    this.scroller.refresh(r), this.hooks.trigger(this.hooks.eventTypes.refresh, r), this.trigger(this.eventTypes.refresh, r);
  }, e.prototype.proxy = function(r) {
    var o = this;
    r.forEach(function(a) {
      var u = a.key, h = a.sourceKey;
      no(o, h, u);
    });
  }, e.prototype.refresh = function() {
    var r = this.setContent(this.wrapper), o = r.contentChanged, a = r.valid;
    if (a) {
      var u = this.content;
      this.refreshWithoutReset(u), o && (this.hooks.trigger(this.hooks.eventTypes.contentChanged, u), this.trigger(this.eventTypes.contentChanged, u)), this.scroller.resetPosition();
    }
  }, e.prototype.enable = function() {
    this.scroller.enable(), this.hooks.trigger(this.hooks.eventTypes.enable), this.trigger(this.eventTypes.enable);
  }, e.prototype.disable = function() {
    this.scroller.disable(), this.hooks.trigger(this.hooks.eventTypes.disable), this.trigger(this.eventTypes.disable);
  }, e.prototype.destroy = function() {
    this.hooks.trigger(this.hooks.eventTypes.destroy), this.trigger(this.eventTypes.destroy), this.scroller.destroy();
  }, e.prototype.eventRegister = function(r) {
    this.registerType(r);
  }, e.plugins = [], e.pluginsMap = {}, e;
}(Oe);
function Lt(n, e) {
  var r = new Yt(n, e);
  return r;
}
Lt.use = Yt.use;
Lt.plugins = Yt.plugins;
Lt.pluginsMap = Yt.pluginsMap;
var To = Lt, ko = function() {
  function n(p) {
    return Math.floor(p) === p;
  }
  function e(p) {
    var y = { times: 1, num: 0 }, b = p < 0;
    if (n(p))
      return y.num = p, y;
    var E = p + "", _ = E.indexOf("."), C = E.substr(_ + 1).length, x = Math.pow(10, C), P = Math.abs(p) * x + 0.5, N = parseInt(P, 10);
    return y.times = x, b && (N = -N), y.num = N, y;
  }
  function r(p, y, b) {
    var E = e(p), _ = e(y), C = E.num, x = _.num, P = E.times, N = _.times, re = P > N ? P : N, W = null;
    switch (b) {
      case "add":
        return P === N ? W = C + x : P > N ? W = C + x * (P / N) : W = C * (N / P) + x, W / re;
      case "subtract":
        return P === N ? W = C - x : P > N ? W = C - x * (P / N) : W = C * (N / P) - x, W / re;
      case "multiply":
        return W = C * x / (P * N), W;
      case "divide":
        return W = C / x * (N / P), W;
    }
  }
  function o(p, y) {
    return r(p, y, "add");
  }
  function a(p, y) {
    return r(p, y, "subtract");
  }
  function u(p, y) {
    return r(p, y, "multiply");
  }
  function h(p, y) {
    return r(p, y, "divide");
  }
  return {
    add: o,
    subtract: a,
    multiply: u,
    divide: h
  };
}(), Eo = function(n) {
  var e = n.minScale, r = n.maxScale, o = 0.1, a = [], u = e;
  for (a.push({ value: u }); u <= r; )
    u = ko.add(u, o), a.push({ value: u });
  return a = a.map(function(h) {
    return fe(fe({}, h), { isInt: h.value % 1 === 0 });
  }), console.log(a), a;
};
function _o(n) {
  var e = n.minScale, r = e === void 0 ? 0 : e, o = n.maxScale, a = o === void 0 ? 100 : o, u = n.initScale, h = u === void 0 ? 80 : u, p = n.onChange, y = p === void 0 ? function() {
  } : p, b = 60, E = ve.exports.useRef(null), _ = ve.exports.useRef(null), C = ve.exports.useRef(null), x = ve.exports.useRef(0), P = ve.exports.useState(0), N = P[0], re = P[1], W = ve.exports.useState([]), U = W[0], de = W[1], le = (a - r) * b + 12, Q = function(H) {
    var se = (x.current - H) * b;
    E.current.scrollTo(se);
  };
  return ve.exports.useEffect(function() {
    setTimeout(function() {
      Q(h);
    }, 300);
  }, [h]), ve.exports.useEffect(function() {
    x.current = r + _.current.clientWidth / 2 / b, de(Eo({
      minScale: r,
      maxScale: a
    })), E.current = new To(C.current, {
      scrollX: !0,
      probeType: 3,
      snap: "div"
    }), window.ms = E.current, E.current.on("scroll", function(H) {
      var se = (x.current - H.x / b).toFixed(1);
      y(se), re(se);
    });
  }, []), zr("div", fe({
    className: "zxm_rule_select_wrap",
    ref: _
  }, {
    children: [ge("div", fe({
      className: "zxm_rs_value"
    }, {
      children: N
    })), zr("div", fe({
      className: "zxm_rs"
    }, {
      children: [ge("div", {
        className: "zxm_rs_arrow"
      }), ge("div", fe({
        className: "zxm_rs_inner",
        ref: C
      }, {
        children: ge("div", fe({
          className: "zxm_rs_ul_wrap",
          style: {
            width: "".concat(le, "px")
          }
        }, {
          children: ge("div", fe({
            className: "zxm_rs_ul"
          }, {
            children: U.map(function(H, se) {
              return ge(ur, {
                children: ge("div", fe({
                  className: "zxm_rs_li".concat(H.isInt ? " zxm_rs_li_int" : "")
                }, {
                  children: H.isInt ? ge(ur, {
                    children: ge("div", fe({
                      className: "zxm_rs_li_value"
                    }, {
                      children: H.value
                    }))
                  }) : ge(ur, {})
                }), H.value)
              });
            })
          }))
        }))
      }))]
    }))]
  }));
}
export {
  _o as default
};
