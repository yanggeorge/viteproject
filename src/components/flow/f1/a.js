/* eslint-disable */
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var ud = {
    exports: {},
  },
  ol = {},
  ad = {
    exports: {},
  },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So = Symbol.for('react.element'),
  pm = Symbol.for('react.portal'),
  hm = Symbol.for('react.fragment'),
  gm = Symbol.for('react.strict_mode'),
  mm = Symbol.for('react.profiler'),
  ym = Symbol.for('react.provider'),
  vm = Symbol.for('react.context'),
  wm = Symbol.for('react.forward_ref'),
  xm = Symbol.for('react.suspense'),
  Sm = Symbol.for('react.memo'),
  Em = Symbol.for('react.lazy'),
  Ka = Symbol.iterator;
function _m(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ka && e[Ka]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var cd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fd = Object.assign,
  dd = {};
function dr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = dd), (this.updater = n || cd);
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function pd() {}
pd.prototype = dr.prototype;
function $u(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = dd), (this.updater = n || cd);
}
var Du = ($u.prototype = new pd());
Du.constructor = $u;
fd(Du, dr.prototype);
Du.isPureReactComponent = !0;
var ba = Array.isArray,
  hd = Object.prototype.hasOwnProperty,
  Au = {
    current: null,
  },
  gd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function md(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      hd.call(t, r) && !gd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: So,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Au.current,
  };
}
function km(e, t) {
  return {
    $$typeof: So,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ou(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So;
}
function Cm(e) {
  var t = {
    '=': '=0',
    ':': '=2',
  };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ga = /\/+/g;
function jl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Cm('' + e.key) : t.toString(36);
}
function si(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case So:
          case pm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + jl(l, 0) : r),
      ba(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ga, '$&/') + '/'),
          si(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (Ou(o) &&
            (o = km(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Ga, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), ba(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + jl(i, s);
      l += si(i, t, n, u, o);
    }
  else if (((u = _m(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (u = r + jl(i, s++)), (l += si(i, t, n, u, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function Do(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    si(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Nm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = {
    current: null,
  },
  ui = {
    transition: null,
  },
  Mm = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: ui,
    ReactCurrentOwner: Au,
  };
function yd() {
  throw Error('act(...) is not supported in production builds of React.');
}
q.Children = {
  map: Do,
  forEach: function (e, t, n) {
    Do(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Do(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Do(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ou(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
q.Component = dr;
q.Fragment = hm;
q.Profiler = mm;
q.PureComponent = $u;
q.StrictMode = gm;
q.Suspense = xm;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
q.act = yd;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = fd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Au.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t) hd.call(t, u) && !gd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return {
    $$typeof: So,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: l,
  };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: vm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: ym,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
q.createElement = md;
q.createFactory = function (e) {
  var t = md.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return {
    current: null,
  };
};
q.forwardRef = function (e) {
  return {
    $$typeof: wm,
    render: e,
  };
};
q.isValidElement = Ou;
q.lazy = function (e) {
  return {
    $$typeof: Em,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: Nm,
  };
};
q.memo = function (e, t) {
  return {
    $$typeof: Sm,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
q.startTransition = function (e) {
  var t = ui.transition;
  ui.transition = {};
  try {
    e();
  } finally {
    ui.transition = t;
  }
};
q.unstable_act = yd;
q.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Le.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
q.useId = function () {
  return Le.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Le.current.useRef(e);
};
q.useState = function (e) {
  return Le.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Le.current.useTransition();
};
q.version = '18.3.1';
ad.exports = q;
var D = ad.exports;
const vd = sd(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pm = D,
  Tm = Symbol.for('react.element'),
  Im = Symbol.for('react.fragment'),
  zm = Object.prototype.hasOwnProperty,
  Rm = Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function wd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) zm.call(t, r) && !Lm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Tm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Rm.current,
  };
}
ol.Fragment = Im;
ol.jsx = wd;
ol.jsxs = wd;
ud.exports = ol;
var R = ud.exports,
  ks = {},
  xd = {
    exports: {},
  },
  Ke = {},
  Sd = {
    exports: {},
  },
  Ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(E, N) {
    var z = E.length;
    E.push(N);
    e: for (; 0 < z; ) {
      var A = (z - 1) >>> 1,
        j = E[A];
      if (0 < o(j, N)) (E[A] = N), (E[z] = j), (z = A);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0],
      z = E.pop();
    if (z !== N) {
      E[0] = z;
      e: for (var A = 0, j = E.length, K = j >>> 1; A < K; ) {
        var U = 2 * (A + 1) - 1,
          X = E[U],
          Y = U + 1,
          B = E[Y];
        if (0 > o(X, z)) Y < j && 0 > o(B, X) ? ((E[A] = B), (E[Y] = z), (A = Y)) : ((E[A] = X), (E[U] = z), (A = U));
        else if (Y < j && 0 > o(B, z)) (E[A] = B), (E[Y] = z), (A = Y);
        else break e;
      }
    }
    return N;
  }
  function o(E, N) {
    var z = E.sortIndex - N.sortIndex;
    return z !== 0 ? z : E.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    f = null,
    c = 3,
    p = !1,
    y = !1,
    w = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= E) r(a), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(a);
    }
  }
  function v(E) {
    if (((w = !1), h(E), !y))
      if (n(u) !== null) (y = !0), k(C);
      else {
        var N = n(a);
        N !== null && L(v, N.startTime - E);
      }
  }
  function C(E, N) {
    (y = !1), w && ((w = !1), g(P), (P = -1)), (p = !0);
    var z = c;
    try {
      for (h(N), f = n(u); f !== null && (!(f.expirationTime > N) || (E && !V())); ) {
        var A = f.callback;
        if (typeof A == 'function') {
          (f.callback = null), (c = f.priorityLevel);
          var j = A(f.expirationTime <= N);
          (N = e.unstable_now()), typeof j == 'function' ? (f.callback = j) : f === n(u) && r(u), h(N);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var K = !0;
      else {
        var U = n(a);
        U !== null && L(v, U.startTime - N), (K = !1);
      }
      return K;
    } finally {
      (f = null), (c = z), (p = !1);
    }
  }
  var M = !1,
    _ = null,
    P = -1,
    $ = 5,
    T = -1;
  function V() {
    return !(e.unstable_now() - T < $);
  }
  function F() {
    if (_ !== null) {
      var E = e.unstable_now();
      T = E;
      var N = !0;
      try {
        N = _(!0, E);
      } finally {
        N ? O() : ((M = !1), (_ = null));
      }
    } else M = !1;
  }
  var O;
  if (typeof m == 'function')
    O = function () {
      m(F);
    };
  else if (typeof MessageChannel < 'u') {
    var x = new MessageChannel(),
      I = x.port2;
    (x.port1.onmessage = F),
      (O = function () {
        I.postMessage(null);
      });
  } else
    O = function () {
      S(F, 0);
    };
  function k(E) {
    (_ = E), M || ((M = !0), O());
  }
  function L(E, N) {
    P = S(function () {
      E(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || p || ((y = !0), k(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : ($ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = c;
      }
      var z = c;
      c = N;
      try {
        return E();
      } finally {
        c = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = c;
      c = E;
      try {
        return N();
      } finally {
        c = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, N, z) {
      var A = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? A + z : A))
          : (z = A),
        E)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = z + j),
        (E = {
          id: d++,
          callback: N,
          priorityLevel: E,
          startTime: z,
          expirationTime: j,
          sortIndex: -1,
        }),
        z > A
          ? ((E.sortIndex = z), t(a, E), n(u) === null && E === n(a) && (w ? (g(P), (P = -1)) : (w = !0), L(v, z - A)))
          : ((E.sortIndex = j), t(u, E), y || p || ((y = !0), k(C))),
        E
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (E) {
      var N = c;
      return function () {
        var z = c;
        c = N;
        try {
          return E.apply(this, arguments);
        } finally {
          c = z;
        }
      };
    });
})(Ed);
Sd.exports = Ed;
var $m = Sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm = D,
  Ye = $m;
function H(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var _d = new Set(),
  Kr = {};
function Mn(e, t) {
  qn(e, t), qn(e + 'Capture', t);
}
function qn(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) _d.add(t[e]);
}
var Pt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Cs = Object.prototype.hasOwnProperty,
  Am =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qa = {},
  Za = {};
function Om(e) {
  return Cs.call(Za, e) ? !0 : Cs.call(Qa, e) ? !1 : Am.test(e) ? (Za[e] = !0) : ((Qa[e] = !0), !1);
}
function Fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Vm(e, t, n, r) {
  if (t === null || typeof t > 'u' || Fm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ne[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ne[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Ne[e] = new $e(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ne[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ne[e] = new $e(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ne[e] = new $e(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ne[e] = new $e(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ne[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fu = /[\-:]([a-z])/g;
function Vu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Fu, Vu);
    Ne[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Fu, Vu);
  Ne[t] = new $e(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Fu, Vu);
  Ne[t] = new $e(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new $e('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hu(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Vm(t, n, o, r) && (n = null),
    r || o === null
      ? Om(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ao = Symbol.for('react.element'),
  In = Symbol.for('react.portal'),
  zn = Symbol.for('react.fragment'),
  ju = Symbol.for('react.strict_mode'),
  Ns = Symbol.for('react.profiler'),
  kd = Symbol.for('react.provider'),
  Cd = Symbol.for('react.context'),
  Bu = Symbol.for('react.forward_ref'),
  Ms = Symbol.for('react.suspense'),
  Ps = Symbol.for('react.suspense_list'),
  Uu = Symbol.for('react.memo'),
  Vt = Symbol.for('react.lazy'),
  Nd = Symbol.for('react.offscreen'),
  qa = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (qa && e[qa]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  Bl;
function Ir(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || '';
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Ul = !1;
function Wl(e, t) {
  if (!e || Ul) return '';
  Ul = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var u =
                  `
` + o[l].replace(' at new ', ' at ');
                return e.displayName && u.includes('<anonymous>') && (u = u.replace('<anonymous>', e.displayName)), u;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ir(e) : '';
}
function Hm(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir('Lazy');
    case 13:
      return Ir('Suspense');
    case 19:
      return Ir('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return '';
  }
}
function Ts(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case zn:
      return 'Fragment';
    case In:
      return 'Portal';
    case Ns:
      return 'Profiler';
    case ju:
      return 'StrictMode';
    case Ms:
      return 'Suspense';
    case Ps:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Cd:
        return (e.displayName || 'Context') + '.Consumer';
      case kd:
        return (e._context.displayName || 'Context') + '.Provider';
      case Bu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Uu:
        return (t = e.displayName || null), t !== null ? t : Ts(e.type) || 'Memo';
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return Ts(e(t));
        } catch {}
    }
  return null;
}
function jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ts(t);
    case 8:
      return t === ju ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Md(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Bm(e) {
  var t = Md(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oo(e) {
  e._valueTracker || (e._valueTracker = Bm(e));
}
function Pd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Md(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function _i(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Is(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ja(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Td(e, t) {
  (t = t.checked), t != null && Hu(e, 'checked', t, !1);
}
function zs(e, t) {
  Td(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? Rs(e, t.type, n) : t.hasOwnProperty('defaultValue') && Rs(e, t.type, nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ec(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Rs(e, t, n) {
  (t !== 'number' || _i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + nn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ls(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function tc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = {
    initialValue: nn(n),
  };
}
function Id(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function nc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function zd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function $s(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? zd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Fo,
  Rd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement('div'),
          Fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ar = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Um = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ar).forEach(function (e) {
  Um.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
  });
});
function Ld(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
      ? ('' + t).trim()
      : t + 'px';
}
function $d(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Ld(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Wm = pe(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ds(e, t) {
  if (t) {
    if (Wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(H(62));
  }
}
function As(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Os = null;
function Wu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fs = null,
  Yn = null,
  Xn = null;
function rc(e) {
  if ((e = ko(e))) {
    if (typeof Fs != 'function') throw Error(H(280));
    var t = e.stateNode;
    t && ((t = al(t)), Fs(e.stateNode, e.type, t));
  }
}
function Dd(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Ad() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), rc(e), t)) for (e = 0; e < t.length; e++) rc(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function Fd() {}
var Yl = !1;
function Vd(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Od(e, t, n);
  } finally {
    (Yl = !1), (Yn !== null || Xn !== null) && (Fd(), Ad());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(H(231, t, typeof n));
  return n;
}
var Vs = !1;
if (Pt)
  try {
    var Sr = {};
    Object.defineProperty(Sr, 'passive', {
      get: function () {
        Vs = !0;
      },
    }),
      window.addEventListener('test', Sr, Sr),
      window.removeEventListener('test', Sr, Sr);
  } catch {
    Vs = !1;
  }
function Ym(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Or = !1,
  ki = null,
  Ci = !1,
  Hs = null,
  Xm = {
    onError: function (e) {
      (Or = !0), (ki = e);
    },
  };
function Km(e, t, n, r, o, i, l, s, u) {
  (Or = !1), (ki = null), Ym.apply(Xm, arguments);
}
function bm(e, t, n, r, o, i, l, s, u) {
  if ((Km.apply(this, arguments), Or)) {
    if (Or) {
      var a = ki;
      (Or = !1), (ki = null);
    } else throw Error(H(198));
    Ci || ((Ci = !0), (Hs = a));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function oc(e) {
  if (Pn(e) !== e) throw Error(H(188));
}
function Gm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return oc(o), e;
        if (i === r) return oc(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function jd(e) {
  return (e = Gm(e)), e !== null ? Bd(e) : null;
}
function Bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ud = Ye.unstable_scheduleCallback,
  ic = Ye.unstable_cancelCallback,
  Qm = Ye.unstable_shouldYield,
  Zm = Ye.unstable_requestPaint,
  me = Ye.unstable_now,
  qm = Ye.unstable_getCurrentPriorityLevel,
  Yu = Ye.unstable_ImmediatePriority,
  Wd = Ye.unstable_UserBlockingPriority,
  Ni = Ye.unstable_NormalPriority,
  Jm = Ye.unstable_LowPriority,
  Yd = Ye.unstable_IdlePriority,
  il = null,
  mt = null;
function ey(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : ry,
  ty = Math.log,
  ny = Math.LN2;
function ry(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ty(e) / ny) | 0)) | 0;
}
var Vo = 64,
  Ho = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Rr(s)) : ((i &= l), i !== 0 && (r = Rr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Rr(l)) : i !== 0 && (r = Rr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - at(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function oy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function iy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - at(i),
      s = 1 << l,
      u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = oy(s, t)) : u <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function js(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xd() {
  var e = Vo;
  return (Vo <<= 1), !(Vo & 4194240) && (Vo = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function ly(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function Kd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bd,
  Ku,
  Gd,
  Qd,
  Zd,
  Bs = !1,
  jo = [],
  Kt = null,
  bt = null,
  Gt = null,
  Qr = new Map(),
  Zr = new Map(),
  Bt = [],
  sy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function lc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Kt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      bt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Gt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Zr.delete(t.pointerId);
  }
}
function Er(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ko(t)), t !== null && Ku(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function uy(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Kt = Er(Kt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (bt = Er(bt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Gt = Er(Gt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Qr.set(i, Er(Qr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), Zr.set(i, Er(Zr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function qd(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hd(n)), t !== null)) {
          (e.blockedOn = t),
            Zd(e.priority, function () {
              Gd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Os = r), n.target.dispatchEvent(r), (Os = null);
    } else return (t = ko(n)), t !== null && Ku(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sc(e, t, n) {
  ai(e) && n.delete(t);
}
function ay() {
  (Bs = !1),
    Kt !== null && ai(Kt) && (Kt = null),
    bt !== null && ai(bt) && (bt = null),
    Gt !== null && ai(Gt) && (Gt = null),
    Qr.forEach(sc),
    Zr.forEach(sc);
}
function _r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Bs || ((Bs = !0), Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, ay)));
}
function qr(e) {
  function t(o) {
    return _r(o, e);
  }
  if (0 < jo.length) {
    _r(jo[0], e);
    for (var n = 1; n < jo.length; n++) {
      var r = jo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kt !== null && _r(Kt, e), bt !== null && _r(bt, e), Gt !== null && _r(Gt, e), Qr.forEach(t), Zr.forEach(t), n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); ) qd(n), n.blockedOn === null && Bt.shift();
}
var Kn = Lt.ReactCurrentBatchConfig,
  Pi = !0;
function cy(e, t, n, r) {
  var o = oe,
    i = Kn.transition;
  Kn.transition = null;
  try {
    (oe = 1), bu(e, t, n, r);
  } finally {
    (oe = o), (Kn.transition = i);
  }
}
function fy(e, t, n, r) {
  var o = oe,
    i = Kn.transition;
  Kn.transition = null;
  try {
    (oe = 4), bu(e, t, n, r);
  } finally {
    (oe = o), (Kn.transition = i);
  }
}
function bu(e, t, n, r) {
  if (Pi) {
    var o = Us(e, t, n, r);
    if (o === null) ns(e, t, r, Ti, n), lc(e, r);
    else if (uy(o, e, t, n, r)) r.stopPropagation();
    else if ((lc(e, r), t & 4 && -1 < sy.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if ((i !== null && bd(i), (i = Us(e, t, n, r)), i === null && ns(e, t, r, Ti, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ns(e, t, r, null, n);
  }
}
var Ti = null;
function Us(e, t, n, r) {
  if (((Ti = null), (e = Wu(r)), (e = dn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ti = e), null;
}
function Jd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (qm()) {
        case Yu:
          return 1;
        case Wd:
          return 4;
        case Ni:
        case Jm:
          return 16;
        case Yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Gu = null,
  ci = null;
function ep() {
  if (ci) return ci;
  var e,
    t = Gu,
    n = t.length,
    r,
    o = 'value' in Yt ? Yt.value : Yt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (ci = o.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bo() {
  return !0;
}
function uc() {
  return !1;
}
function be(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bo : uc),
      (this.isPropagationStopped = uc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bo));
      },
      persist: function () {},
      isPersistent: Bo,
    }),
    t
  );
}
var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qu = be(pr),
  _o = pe({}, pr, {
    view: 0,
    detail: 0,
  }),
  dy = be(_o),
  Kl,
  bl,
  kr,
  ll = pe({}, _o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== kr &&
            (kr && e.type === 'mousemove'
              ? ((Kl = e.screenX - kr.screenX), (bl = e.screenY - kr.screenY))
              : (bl = Kl = 0),
            (kr = e)),
          Kl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : bl;
    },
  }),
  ac = be(ll),
  py = pe({}, ll, {
    dataTransfer: 0,
  }),
  hy = be(py),
  gy = pe({}, _o, {
    relatedTarget: 0,
  }),
  Gl = be(gy),
  my = pe({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  yy = be(my),
  vy = pe({}, pr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wy = be(vy),
  xy = pe({}, pr, {
    data: 0,
  }),
  cc = be(xy),
  Sy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  _y = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ky(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _y[e]) ? !!t[e] : !1;
}
function Zu() {
  return ky;
}
var Cy = pe({}, _o, {
    key: function (e) {
      if (e.key) {
        var t = Sy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Ey[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zu,
    charCode: function (e) {
      return e.type === 'keypress' ? fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? fi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Ny = be(Cy),
  My = pe({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  fc = be(My),
  Py = pe({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zu,
  }),
  Ty = be(Py),
  Iy = pe({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  zy = be(Iy),
  Ry = pe({}, ll, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ly = be(Ry),
  $y = [9, 13, 27, 32],
  qu = Pt && 'CompositionEvent' in window,
  Fr = null;
Pt && 'documentMode' in document && (Fr = document.documentMode);
var Dy = Pt && 'TextEvent' in window && !Fr,
  tp = Pt && (!qu || (Fr && 8 < Fr && 11 >= Fr)),
  dc = String.fromCharCode(32),
  pc = !1;
function np(e, t) {
  switch (e) {
    case 'keyup':
      return $y.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function rp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Rn = !1;
function Ay(e, t) {
  switch (e) {
    case 'compositionend':
      return rp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((pc = !0), dc);
    case 'textInput':
      return (e = t.data), e === dc && pc ? null : e;
    default:
      return null;
  }
}
function Oy(e, t) {
  if (Rn) return e === 'compositionend' || (!qu && np(e, t)) ? ((e = ep()), (ci = Gu = Yt = null), (Rn = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return tp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Fy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Fy[e.type] : t === 'textarea';
}
function op(e, t, n, r) {
  Dd(r),
    (t = Ii(t, 'onChange')),
    0 < t.length &&
      ((n = new Qu('onChange', 'change', null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Vr = null,
  Jr = null;
function Vy(e) {
  gp(e, 0);
}
function sl(e) {
  var t = Dn(e);
  if (Pd(t)) return e;
}
function Hy(e, t) {
  if (e === 'change') return t;
}
var ip = !1;
if (Pt) {
  var Ql;
  if (Pt) {
    var Zl = 'oninput' in document;
    if (!Zl) {
      var gc = document.createElement('div');
      gc.setAttribute('oninput', 'return;'), (Zl = typeof gc.oninput == 'function');
    }
    Ql = Zl;
  } else Ql = !1;
  ip = Ql && (!document.documentMode || 9 < document.documentMode);
}
function mc() {
  Vr && (Vr.detachEvent('onpropertychange', lp), (Jr = Vr = null));
}
function lp(e) {
  if (e.propertyName === 'value' && sl(Jr)) {
    var t = [];
    op(t, Jr, e, Wu(e)), Vd(Vy, t);
  }
}
function jy(e, t, n) {
  e === 'focusin' ? (mc(), (Vr = t), (Jr = n), Vr.attachEvent('onpropertychange', lp)) : e === 'focusout' && mc();
}
function By(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sl(Jr);
}
function Uy(e, t) {
  if (e === 'click') return sl(t);
}
function Wy(e, t) {
  if (e === 'input' || e === 'change') return sl(t);
}
function Yy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == 'function' ? Object.is : Yy;
function eo(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Cs.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function yc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vc(e, t) {
  var n = yc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yc(n);
  }
}
function sp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? sp(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function up() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _i(e.document);
  }
  return t;
}
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Xy(e) {
  var t = up(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sp(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ju(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = vc(n, i));
        var l = vc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Ky = Pt && 'documentMode' in document && 11 >= document.documentMode,
  Ln = null,
  Ws = null,
  Hr = null,
  Ys = !1;
function wc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ys ||
    Ln == null ||
    Ln !== _i(r) ||
    ((r = Ln),
    'selectionStart' in r && Ju(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Hr && eo(Hr, r)) ||
      ((Hr = r),
      (r = Ii(Ws, 'onSelect')),
      0 < r.length &&
        ((t = new Qu('onSelect', 'select', null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Ln))));
}
function Uo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var $n = {
    animationend: Uo('Animation', 'AnimationEnd'),
    animationiteration: Uo('Animation', 'AnimationIteration'),
    animationstart: Uo('Animation', 'AnimationStart'),
    transitionend: Uo('Transition', 'TransitionEnd'),
  },
  ql = {},
  ap = {};
Pt &&
  ((ap = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation),
  'TransitionEvent' in window || delete $n.transitionend.transition);
function ul(e) {
  if (ql[e]) return ql[e];
  if (!$n[e]) return e;
  var t = $n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ap) return (ql[e] = t[n]);
  return e;
}
var cp = ul('animationend'),
  fp = ul('animationiteration'),
  dp = ul('animationstart'),
  pp = ul('transitionend'),
  hp = new Map(),
  xc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function on(e, t) {
  hp.set(e, t), Mn(t, [e]);
}
for (var Jl = 0; Jl < xc.length; Jl++) {
  var es = xc[Jl],
    by = es.toLowerCase(),
    Gy = es[0].toUpperCase() + es.slice(1);
  on(by, 'on' + Gy);
}
on(cp, 'onAnimationEnd');
on(fp, 'onAnimationIteration');
on(dp, 'onAnimationStart');
on('dblclick', 'onDoubleClick');
on('focusin', 'onFocus');
on('focusout', 'onBlur');
on(pp, 'onTransitionEnd');
qn('onMouseEnter', ['mouseout', 'mouseover']);
qn('onMouseLeave', ['mouseout', 'mouseover']);
qn('onPointerEnter', ['pointerout', 'pointerover']);
qn('onPointerLeave', ['pointerout', 'pointerover']);
Mn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Mn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Mn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Mn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Lr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Qy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Lr));
function Sc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), bm(r, t, void 0, e), (e.currentTarget = null);
}
function gp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          Sc(o, s, a), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]), (u = s.instance), (a = s.currentTarget), (s = s.listener), u !== i && o.isPropagationStopped())
          )
            break e;
          Sc(o, s, a), (i = u);
        }
    }
  }
  if (Ci) throw ((e = Hs), (Ci = !1), (Hs = null), e);
}
function se(e, t) {
  var n = t[Qs];
  n === void 0 && (n = t[Qs] = new Set());
  var r = e + '__bubble';
  n.has(r) || (mp(t, e, 2, !1), n.add(r));
}
function ts(e, t, n) {
  var r = 0;
  t && (r |= 4), mp(n, e, r, t);
}
var Wo = '_reactListening' + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[Wo]) {
    (e[Wo] = !0),
      _d.forEach(function (n) {
        n !== 'selectionchange' && (Qy.has(n) || ts(n, !1, e), ts(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wo] || ((t[Wo] = !0), ts('selectionchange', !1, t));
  }
}
function mp(e, t, n, r) {
  switch (Jd(t)) {
    case 1:
      var o = cy;
      break;
    case 4:
      o = fy;
      break;
    default:
      o = bu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vs || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: o,
          })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, {
            passive: o,
          })
        : e.addEventListener(t, n, !1);
}
function ns(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo), u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = dn(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Vd(function () {
    var a = i,
      d = Wu(n),
      f = [];
    e: {
      var c = hp.get(e);
      if (c !== void 0) {
        var p = Qu,
          y = e;
        switch (e) {
          case 'keypress':
            if (fi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = Ny;
            break;
          case 'focusin':
            (y = 'focus'), (p = Gl);
            break;
          case 'focusout':
            (y = 'blur'), (p = Gl);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = Gl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = ac;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = hy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = Ty;
            break;
          case cp:
          case fp:
          case dp:
            p = yy;
            break;
          case pp:
            p = zy;
            break;
          case 'scroll':
            p = dy;
            break;
          case 'wheel':
            p = Ly;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = wy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = fc;
        }
        var w = (t & 4) !== 0,
          S = !w && e === 'scroll',
          g = w ? (c !== null ? c + 'Capture' : null) : c;
        w = [];
        for (var m = a, h; m !== null; ) {
          h = m;
          var v = h.stateNode;
          if (
            (h.tag === 5 && v !== null && ((h = v), g !== null && ((v = Gr(m, g)), v != null && w.push(no(m, v, h)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((c = new p(c, y, null, n, d)),
          f.push({
            event: c,
            listeners: w,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          c && n !== Os && (y = n.relatedTarget || n.fromElement) && (dn(y) || y[Tt]))
        )
          break e;
        if (
          (p || c) &&
          ((c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = a),
              (y = y ? dn(y) : null),
              y !== null && ((S = Pn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((p = null), (y = a)),
          p !== y)
        ) {
          if (
            ((w = ac),
            (v = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = fc), (v = 'onPointerLeave'), (g = 'onPointerEnter'), (m = 'pointer')),
            (S = p == null ? c : Dn(p)),
            (h = y == null ? c : Dn(y)),
            (c = new w(v, m + 'leave', p, n, d)),
            (c.target = S),
            (c.relatedTarget = h),
            (v = null),
            dn(d) === a && ((w = new w(g, m + 'enter', y, n, d)), (w.target = h), (w.relatedTarget = S), (v = w)),
            (S = v),
            p && y)
          )
            t: {
              for (w = p, g = y, m = 0, h = w; h; h = Tn(h)) m++;
              for (h = 0, v = g; v; v = Tn(v)) h++;
              for (; 0 < m - h; ) (w = Tn(w)), m--;
              for (; 0 < h - m; ) (g = Tn(g)), h--;
              for (; m--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = Tn(w)), (g = Tn(g));
              }
              w = null;
            }
          else w = null;
          p !== null && Ec(f, c, p, w, !1), y !== null && S !== null && Ec(f, S, y, w, !0);
        }
      }
      e: {
        if (
          ((c = a ? Dn(a) : window),
          (p = c.nodeName && c.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && c.type === 'file'))
        )
          var C = Hy;
        else if (hc(c))
          if (ip) C = Wy;
          else {
            C = By;
            var M = jy;
          }
        else
          (p = c.nodeName) && p.toLowerCase() === 'input' && (c.type === 'checkbox' || c.type === 'radio') && (C = Uy);
        if (C && (C = C(e, a))) {
          op(f, C, n, d);
          break e;
        }
        M && M(e, c, a),
          e === 'focusout' && (M = c._wrapperState) && M.controlled && c.type === 'number' && Rs(c, 'number', c.value);
      }
      switch (((M = a ? Dn(a) : window), e)) {
        case 'focusin':
          (hc(M) || M.contentEditable === 'true') && ((Ln = M), (Ws = a), (Hr = null));
          break;
        case 'focusout':
          Hr = Ws = Ln = null;
          break;
        case 'mousedown':
          Ys = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ys = !1), wc(f, n, d);
          break;
        case 'selectionchange':
          if (Ky) break;
        case 'keydown':
        case 'keyup':
          wc(f, n, d);
      }
      var _;
      if (qu)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Rn ? np(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (tp &&
          n.locale !== 'ko' &&
          (Rn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Rn && (_ = ep())
            : ((Yt = d), (Gu = 'value' in Yt ? Yt.value : Yt.textContent), (Rn = !0))),
        (M = Ii(a, P)),
        0 < M.length &&
          ((P = new cc(P, e, null, n, d)),
          f.push({
            event: P,
            listeners: M,
          }),
          _ ? (P.data = _) : ((_ = rp(n)), _ !== null && (P.data = _)))),
        (_ = Dy ? Ay(e, n) : Oy(e, n)) &&
          ((a = Ii(a, 'onBeforeInput')),
          0 < a.length &&
            ((d = new cc('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({
              event: d,
              listeners: a,
            }),
            (d.data = _)));
    }
    gp(f, t);
  });
}
function no(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Ii(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Gr(e, n)), i != null && r.unshift(no(e, i, o)), (i = Gr(e, t)), i != null && r.push(no(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ec(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Gr(n, i)), u != null && l.unshift(no(n, u, s)))
        : o || ((u = Gr(n, i)), u != null && l.push(no(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 &&
    e.push({
      event: t,
      listeners: l,
    });
}
var Zy = /\r\n?/g,
  qy = /\u0000|\uFFFD/g;
function _c(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Zy,
      `
`,
    )
    .replace(qy, '');
}
function Yo(e, t, n) {
  if (((t = _c(t)), _c(e) !== t && n)) throw Error(H(425));
}
function zi() {}
var Xs = null,
  Ks = null;
function bs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gs = typeof setTimeout == 'function' ? setTimeout : void 0,
  Jy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  kc = typeof Promise == 'function' ? Promise : void 0,
  ev =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof kc < 'u'
        ? function (e) {
            return kc.resolve(null).then(e).catch(tv);
          }
        : Gs;
function tv(e) {
  setTimeout(function () {
    throw e;
  });
}
function rs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), qr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  qr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Cc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hr = Math.random().toString(36).slice(2),
  gt = '__reactFiber$' + hr,
  ro = '__reactProps$' + hr,
  Tt = '__reactContainer$' + hr,
  Qs = '__reactEvents$' + hr,
  nv = '__reactListeners$' + hr,
  rv = '__reactHandles$' + hr;
function dn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[gt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Cc(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Cc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (e = e[gt] || e[Tt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function al(e) {
  return e[ro] || null;
}
var Zs = [],
  An = -1;
function ln(e) {
  return {
    current: e,
  };
}
function ue(e) {
  0 > An || ((e.current = Zs[An]), (Zs[An] = null), An--);
}
function ie(e, t) {
  An++, (Zs[An] = e.current), (e.current = t);
}
var rn = {},
  Ie = ln(rn),
  Fe = ln(!1),
  xn = rn;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Ri() {
  ue(Fe), ue(Ie);
}
function Nc(e, t, n) {
  if (Ie.current !== rn) throw Error(H(168));
  ie(Ie, t), ie(Fe, n);
}
function yp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, jm(e) || 'Unknown', o));
  return pe({}, n, r);
}
function Li(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (xn = Ie.current),
    ie(Ie, e),
    ie(Fe, Fe.current),
    !0
  );
}
function Mc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? ((e = yp(e, t, xn)), (r.__reactInternalMemoizedMergedChildContext = e), ue(Fe), ue(Ie), ie(Ie, e)) : ue(Fe),
    ie(Fe, n);
}
var Et = null,
  cl = !1,
  os = !1;
function vp(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function ov(e) {
  (cl = !0), vp(e);
}
function sn() {
  if (!os && Et !== null) {
    os = !0;
    var e = 0,
      t = oe;
    try {
      var n = Et;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (cl = !1);
    } catch (o) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Ud(Yu, sn), o);
    } finally {
      (oe = t), (os = !1);
    }
  }
  return null;
}
var On = [],
  Fn = 0,
  $i = null,
  Di = 0,
  Ge = [],
  Qe = 0,
  Sn = null,
  _t = 1,
  kt = '';
function an(e, t) {
  (On[Fn++] = Di), (On[Fn++] = $i), ($i = e), (Di = t);
}
function wp(e, t, n) {
  (Ge[Qe++] = _t), (Ge[Qe++] = kt), (Ge[Qe++] = Sn), (Sn = e);
  var r = _t;
  e = kt;
  var o = 32 - at(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - at(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (_t = (1 << (32 - at(t) + o)) | (n << o) | r),
      (kt = i + e);
  } else (_t = (1 << i) | (n << o) | r), (kt = e);
}
function ea(e) {
  e.return !== null && (an(e, 1), wp(e, 1, 0));
}
function ta(e) {
  for (; e === $i; ) ($i = On[--Fn]), (On[Fn] = null), (Di = On[--Fn]), (On[Fn] = null);
  for (; e === Sn; )
    (Sn = Ge[--Qe]), (Ge[Qe] = null), (kt = Ge[--Qe]), (Ge[Qe] = null), (_t = Ge[--Qe]), (Ge[Qe] = null);
}
var We = null,
  Ue = null,
  ae = !1,
  lt = null;
function xp(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ue = Qt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Sn !== null
                ? {
                    id: _t,
                    overflow: kt,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Js(e) {
  if (ae) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Pc(e, t)) {
        if (qs(e)) throw Error(H(418));
        t = Qt(n.nextSibling);
        var r = We;
        t && Pc(e, t) ? xp(r, n) : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (We = e));
      }
    } else {
      if (qs(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (We = e);
    }
  }
}
function Tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Xo(e) {
  if (e !== We) return !1;
  if (!ae) return Tc(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !bs(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (qs(e)) throw (Sp(), Error(H(418)));
    for (; t; ) xp(e, t), (t = Qt(t.nextSibling));
  }
  if ((Tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ue = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = We ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function Sp() {
  for (var e = Ue; e; ) e = Qt(e.nextSibling);
}
function er() {
  (Ue = We = null), (ae = !1);
}
function na(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var iv = Lt.ReactCurrentBatchConfig;
function Cr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(H(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function Ic(e) {
  var t = e._init;
  return t(e._payload);
}
function Ep(e) {
  function t(g, m) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [m]), (g.flags |= 16)) : h.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function o(g, m) {
    return (g = en(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, m, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate), h !== null ? ((h = h.index), h < m ? ((g.flags |= 2), m) : h) : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function l(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, m, h, v) {
    return m === null || m.tag !== 6 ? ((m = fs(h, g.mode, v)), (m.return = g), m) : ((m = o(m, h)), (m.return = g), m);
  }
  function u(g, m, h, v) {
    var C = h.type;
    return C === zn
      ? d(g, m, h.props.children, v, h.key)
      : m !== null &&
          (m.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === Vt && Ic(C) === m.type))
        ? ((v = o(m, h.props)), (v.ref = Cr(g, m, h)), (v.return = g), v)
        : ((v = vi(h.type, h.key, h.props, null, g.mode, v)), (v.ref = Cr(g, m, h)), (v.return = g), v);
  }
  function a(g, m, h, v) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = ds(h, g.mode, v)), (m.return = g), m)
      : ((m = o(m, h.children || [])), (m.return = g), m);
  }
  function d(g, m, h, v, C) {
    return m === null || m.tag !== 7
      ? ((m = yn(h, g.mode, v, C)), (m.return = g), m)
      : ((m = o(m, h)), (m.return = g), m);
  }
  function f(g, m, h) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = fs('' + m, g.mode, h)), (m.return = g), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Ao:
          return (h = vi(m.type, m.key, m.props, null, g.mode, h)), (h.ref = Cr(g, null, m)), (h.return = g), h;
        case In:
          return (m = ds(m, g.mode, h)), (m.return = g), m;
        case Vt:
          var v = m._init;
          return f(g, v(m._payload), h);
      }
      if (zr(m) || xr(m)) return (m = yn(m, g.mode, h, null)), (m.return = g), m;
      Ko(g, m);
    }
    return null;
  }
  function c(g, m, h, v) {
    var C = m !== null ? m.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return C !== null ? null : s(g, m, '' + h, v);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Ao:
          return h.key === C ? u(g, m, h, v) : null;
        case In:
          return h.key === C ? a(g, m, h, v) : null;
        case Vt:
          return (C = h._init), c(g, m, C(h._payload), v);
      }
      if (zr(h) || xr(h)) return C !== null ? null : d(g, m, h, v, null);
      Ko(g, h);
    }
    return null;
  }
  function p(g, m, h, v, C) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number') return (g = g.get(h) || null), s(m, g, '' + v, C);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Ao:
          return (g = g.get(v.key === null ? h : v.key) || null), u(m, g, v, C);
        case In:
          return (g = g.get(v.key === null ? h : v.key) || null), a(m, g, v, C);
        case Vt:
          var M = v._init;
          return p(g, m, h, M(v._payload), C);
      }
      if (zr(v) || xr(v)) return (g = g.get(h) || null), d(m, g, v, C, null);
      Ko(m, v);
    }
    return null;
  }
  function y(g, m, h, v) {
    for (var C = null, M = null, _ = m, P = (m = 0), $ = null; _ !== null && P < h.length; P++) {
      _.index > P ? (($ = _), (_ = null)) : ($ = _.sibling);
      var T = c(g, _, h[P], v);
      if (T === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && T.alternate === null && t(g, _),
        (m = i(T, m, P)),
        M === null ? (C = T) : (M.sibling = T),
        (M = T),
        (_ = $);
    }
    if (P === h.length) return n(g, _), ae && an(g, P), C;
    if (_ === null) {
      for (; P < h.length; P++)
        (_ = f(g, h[P], v)), _ !== null && ((m = i(_, m, P)), M === null ? (C = _) : (M.sibling = _), (M = _));
      return ae && an(g, P), C;
    }
    for (_ = r(g, _); P < h.length; P++)
      ($ = p(_, g, P, h[P], v)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? P : $.key),
          (m = i($, m, P)),
          M === null ? (C = $) : (M.sibling = $),
          (M = $));
    return (
      e &&
        _.forEach(function (V) {
          return t(g, V);
        }),
      ae && an(g, P),
      C
    );
  }
  function w(g, m, h, v) {
    var C = xr(h);
    if (typeof C != 'function') throw Error(H(150));
    if (((h = C.call(h)), h == null)) throw Error(H(151));
    for (var M = (C = null), _ = m, P = (m = 0), $ = null, T = h.next(); _ !== null && !T.done; P++, T = h.next()) {
      _.index > P ? (($ = _), (_ = null)) : ($ = _.sibling);
      var V = c(g, _, T.value, v);
      if (V === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && V.alternate === null && t(g, _),
        (m = i(V, m, P)),
        M === null ? (C = V) : (M.sibling = V),
        (M = V),
        (_ = $);
    }
    if (T.done) return n(g, _), ae && an(g, P), C;
    if (_ === null) {
      for (; !T.done; P++, T = h.next())
        (T = f(g, T.value, v)), T !== null && ((m = i(T, m, P)), M === null ? (C = T) : (M.sibling = T), (M = T));
      return ae && an(g, P), C;
    }
    for (_ = r(g, _); !T.done; P++, T = h.next())
      (T = p(_, g, P, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? P : T.key),
          (m = i(T, m, P)),
          M === null ? (C = T) : (M.sibling = T),
          (M = T));
    return (
      e &&
        _.forEach(function (F) {
          return t(g, F);
        }),
      ae && an(g, P),
      C
    );
  }
  function S(g, m, h, v) {
    if (
      (typeof h == 'object' && h !== null && h.type === zn && h.key === null && (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ao:
          e: {
            for (var C = h.key, M = m; M !== null; ) {
              if (M.key === C) {
                if (((C = h.type), C === zn)) {
                  if (M.tag === 7) {
                    n(g, M.sibling), (m = o(M, h.props.children)), (m.return = g), (g = m);
                    break e;
                  }
                } else if (
                  M.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Vt && Ic(C) === M.type)
                ) {
                  n(g, M.sibling), (m = o(M, h.props)), (m.ref = Cr(g, M, h)), (m.return = g), (g = m);
                  break e;
                }
                n(g, M);
                break;
              } else t(g, M);
              M = M.sibling;
            }
            h.type === zn
              ? ((m = yn(h.props.children, g.mode, v, h.key)), (m.return = g), (g = m))
              : ((v = vi(h.type, h.key, h.props, null, g.mode, v)), (v.ref = Cr(g, m, h)), (v.return = g), (g = v));
          }
          return l(g);
        case In:
          e: {
            for (M = h.key; m !== null; ) {
              if (m.key === M)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  n(g, m.sibling), (m = o(m, h.children || [])), (m.return = g), (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = ds(h, g.mode, v)), (m.return = g), (g = m);
          }
          return l(g);
        case Vt:
          return (M = h._init), S(g, m, M(h._payload), v);
      }
      if (zr(h)) return y(g, m, h, v);
      if (xr(h)) return w(g, m, h, v);
      Ko(g, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = o(m, h)), (m.return = g), (g = m))
          : (n(g, m), (m = fs(h, g.mode, v)), (m.return = g), (g = m)),
        l(g))
      : n(g, m);
  }
  return S;
}
var tr = Ep(!0),
  _p = Ep(!1),
  Ai = ln(null),
  Oi = null,
  Vn = null,
  ra = null;
function oa() {
  ra = Vn = Oi = null;
}
function ia(e) {
  var t = Ai.current;
  ue(Ai), (e._currentValue = t);
}
function eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bn(e, t) {
  (Oi = e),
    (ra = Vn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Vn === null)
    ) {
      if (Oi === null) throw Error(H(308));
      (Vn = e),
        (Oi.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Vn = Vn.next = e;
  return t;
}
var pn = null;
function la(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function kp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), la(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function sa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function Cp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), It(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), la(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function di(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
function zc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Fi(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l && (s === null ? (d.firstBaseUpdate = a) : (s.next = a), (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (d = a = u = null), (s = i);
    do {
      var c = s.lane,
        p = s.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((c = t), (p = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                f = y.call(p, f, c);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = w.payload), (c = typeof y == 'function' ? y.call(p, f, c) : y), c == null)) break e;
              f = pe({}, f, c);
              break e;
            case 2:
              Ht = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [s]) : c.push(s));
      } else
        (p = {
          eventTime: p,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = p), (u = f)) : (d = d.next = p),
          (l |= c);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (c = s), (s = c.next), (c.next = null), (o.lastBaseUpdate = c), (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (_n |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Rc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(H(191, o));
        o.call(r);
      }
    }
}
var Co = {},
  yt = ln(Co),
  oo = ln(Co),
  io = ln(Co);
function hn(e) {
  if (e === Co) throw Error(H(174));
  return e;
}
function ua(e, t) {
  switch ((ie(io, t), ie(oo, e), ie(yt, Co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $s(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = $s(t, e));
  }
  ue(yt), ie(yt, t);
}
function nr() {
  ue(yt), ue(oo), ue(io);
}
function Np(e) {
  hn(io.current);
  var t = hn(yt.current),
    n = $s(t, e.type);
  t !== n && (ie(oo, e), ie(yt, n));
}
function aa(e) {
  oo.current === e && (ue(yt), ue(oo));
}
var fe = ln(0);
function Vi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var is = [];
function ca() {
  for (var e = 0; e < is.length; e++) is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var pi = Lt.ReactCurrentDispatcher,
  ls = Lt.ReactCurrentBatchConfig,
  En = 0,
  de = null,
  we = null,
  Se = null,
  Hi = !1,
  jr = !1,
  lo = 0,
  lv = 0;
function Me() {
  throw Error(H(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function da(e, t, n, r, o, i) {
  if (
    ((En = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pi.current = e === null || e.memoizedState === null ? cv : fv),
    (e = n(r, o)),
    jr)
  ) {
    i = 0;
    do {
      if (((jr = !1), (lo = 0), 25 <= i)) throw Error(H(301));
      (i += 1), (Se = we = null), (t.updateQueue = null), (pi.current = dv), (e = n(r, o));
    } while (jr);
  }
  if (((pi.current = ji), (t = we !== null && we.next !== null), (En = 0), (Se = we = de = null), (Hi = !1), t))
    throw Error(H(300));
  return e;
}
function pa() {
  var e = lo !== 0;
  return (lo = 0), e;
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (de.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function et() {
  if (we === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Se === null ? de.memoizedState : Se.next;
  if (t !== null) (Se = t), (we = e);
  else {
    if (e === null) throw Error(H(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Se === null ? (de.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function so(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ss(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = i;
    do {
      var d = a.lane;
      if ((En & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f), (de.lanes |= d), (_n |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (l = r) : (u.next = s),
      ft(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (de.lanes |= i), (_n |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function us(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ft(i, t.memoizedState) || (Ae = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Mp() {}
function Pp(e, t) {
  var n = de,
    r = et(),
    o = t(),
    i = !ft(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ae = !0)),
    (r = r.queue),
    ha(zp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), uo(9, Ip.bind(null, n, r, o, t), void 0, null), Ee === null)) throw Error(H(349));
    En & 30 || Tp(n, t, o);
  }
  return o;
}
function Tp(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = de.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ip(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rp(t) && Lp(e);
}
function zp(e, t, n) {
  return n(function () {
    Rp(t) && Lp(e);
  });
}
function Rp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Lp(e) {
  var t = It(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Lc(e) {
  var t = ht();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = av.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function uo(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = de.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $p() {
  return et().memoizedState;
}
function hi(e, t, n, r) {
  var o = ht();
  (de.flags |= e), (o.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var l = we.memoizedState;
    if (((i = l.destroy), r !== null && fa(r, l.deps))) {
      o.memoizedState = uo(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = uo(1 | t, n, i, r));
}
function $c(e, t) {
  return hi(8390656, 8, e, t);
}
function ha(e, t) {
  return fl(2048, 8, e, t);
}
function Dp(e, t) {
  return fl(4, 2, e, t);
}
function Ap(e, t) {
  return fl(4, 4, e, t);
}
function Op(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fp(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), fl(4, 4, Op.bind(null, t, e), n);
}
function ga() {}
function Vp(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Hp(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jp(e, t, n) {
  return En & 21
    ? (ft(n, t) || ((n = Xd()), (de.lanes |= n), (_n |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function sv(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ls.transition;
  ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (ls.transition = r);
  }
}
function Bp() {
  return et().memoizedState;
}
function uv(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Up(e))
  )
    Wp(t, n);
  else if (((n = kp(e, t, n, r)), n !== null)) {
    var o = Re();
    ct(n, e, r, o), Yp(n, t, r);
  }
}
function av(e, t, n) {
  var r = Jt(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Up(e)) Wp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ft(s, l))) {
          var u = t.interleaved;
          u === null ? ((o.next = o), la(t)) : ((o.next = u.next), (u.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = kp(e, t, o, r)), n !== null && ((o = Re()), ct(n, e, r, o), Yp(n, t, r));
  }
}
function Up(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function Wp(e, t) {
  jr = Hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Yp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
var ji = {
    readContext: Je,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: Je,
    useCallback: function (e, t) {
      return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: $c,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), hi(4194308, 4, Op.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = uv.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: Lc,
    useDebugValue: ga,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = Lc(!1),
        t = e[0];
      return (e = sv.bind(null, e[1])), (ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = ht();
      if (ae) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(H(349));
        En & 30 || Tp(r, t, n);
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t,
      };
      return (
        (o.queue = i),
        $c(zp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        uo(9, Ip.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = Ee.identifierPrefix;
      if (ae) {
        var n = kt,
          r = _t;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = lo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = lv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fv = {
    readContext: Je,
    useCallback: Vp,
    useContext: Je,
    useEffect: ha,
    useImperativeHandle: Fp,
    useInsertionEffect: Dp,
    useLayoutEffect: Ap,
    useMemo: Hp,
    useReducer: ss,
    useRef: $p,
    useState: function () {
      return ss(so);
    },
    useDebugValue: ga,
    useDeferredValue: function (e) {
      var t = et();
      return jp(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(so)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Mp,
    useSyncExternalStore: Pp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  },
  dv = {
    readContext: Je,
    useCallback: Vp,
    useContext: Je,
    useEffect: ha,
    useImperativeHandle: Fp,
    useInsertionEffect: Dp,
    useLayoutEffect: Ap,
    useMemo: Hp,
    useReducer: us,
    useRef: $p,
    useState: function () {
      return us(so);
    },
    useDebugValue: ga,
    useDeferredValue: function (e) {
      var t = et();
      return we === null ? (t.memoizedState = e) : jp(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = us(so)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Mp,
    useSyncExternalStore: Pp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  };
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Jt(e),
      i = Nt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Zt(e, i, o)), t !== null && (ct(t, e, o, r), di(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Jt(e),
      i = Nt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Zt(e, i, o)),
      t !== null && (ct(t, e, o, r), di(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Jt(e),
      o = Nt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Zt(e, o, r)), t !== null && (ct(t, e, r, n), di(t, e, r));
  },
};
function Dc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !eo(n, r) || !eo(o, i)
        : !0
  );
}
function Xp(e, t, n) {
  var r = !1,
    o = rn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Je(i))
      : ((o = Ve(t) ? xn : Ie.current), (r = t.contextTypes), (i = (r = r != null) ? Jn(e, o) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ac(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function nu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), sa(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = Je(i)) : ((i = Ve(t) ? xn : Ie.current), (o.context = Jn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (tu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && dl.enqueueReplaceState(o, o.state, null),
      Fi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function rr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Hm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null,
  };
}
function as(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function ru(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var pv = typeof WeakMap == 'function' ? WeakMap : Map;
function Kp(e, t, n) {
  (n = Nt(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      Ui || ((Ui = !0), (pu = r)), ru(e, t);
    }),
    n
  );
}
function bp(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ru(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ru(e, t), typeof r != 'function' && (qt === null ? (qt = new Set([this])) : qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function Oc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Mv.bind(null, e, t, n)), t.then(e, e));
}
function Fc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hv = Lt.ReactCurrentOwner,
  Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? _p(t, null, n, r) : tr(t, e.child, n, r);
}
function Hc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    bn(t, o),
    (r = da(e, t, n, r, i, o)),
    (n = pa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zt(e, t, o))
      : (ae && n && ea(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function jc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !_a(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Gp(e, t, i, r, o))
      : ((e = vi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : eo), n(l, r) && e.ref === t.ref)) return zt(e, t, o);
  }
  return (t.flags |= 1), (e = en(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Gp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (eo(i, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), zt(e, t, o);
  }
  return ou(e, t, n, r, o);
}
function Qp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        ie(jn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(jn, je),
          (je |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        ie(jn, je),
        (je |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ie(jn, je), (je |= r);
  return ze(e, t, o, n), t.child;
}
function Zp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ou(e, t, n, r, o) {
  var i = Ve(n) ? xn : Ie.current;
  return (
    (i = Jn(t, i)),
    bn(t, o),
    (n = da(e, t, n, r, i, o)),
    (r = pa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zt(e, t, o))
      : (ae && r && ea(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function Bc(e, t, n, r, o) {
  if (Ve(n)) {
    var i = !0;
    Li(t);
  } else i = !1;
  if ((bn(t, o), t.stateNode === null)) gi(e, t), Xp(t, n, r), nu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null ? (a = Je(a)) : ((a = Ve(n) ? xn : Ie.current), (a = Jn(t, a)));
    var d = n.getDerivedStateFromProps,
      f = typeof d == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && Ac(t, l, r, a)),
      (Ht = !1);
    var c = t.memoizedState;
    (l.state = c),
      Fi(t, r, l, o),
      (u = t.memoizedState),
      s !== r || c !== u || Fe.current || Ht
        ? (typeof d == 'function' && (tu(t, n, d, r), (u = t.memoizedState)),
          (s = Ht || Dc(t, n, s, r, c, u, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Cp(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : rt(t.type, s)),
      (l.props = a),
      (f = t.pendingProps),
      (c = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null ? (u = Je(u)) : ((u = Ve(n) ? xn : Ie.current), (u = Jn(t, u)));
    var p = n.getDerivedStateFromProps;
    (d = typeof p == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== f || c !== u) && Ac(t, l, r, u)),
      (Ht = !1),
      (c = t.memoizedState),
      (l.state = c),
      Fi(t, r, l, o);
    var y = t.memoizedState;
    s !== f || c !== y || Fe.current || Ht
      ? (typeof p == 'function' && (tu(t, n, p, r), (y = t.memoizedState)),
        (a = Ht || Dc(t, n, a, r, c, y, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, y, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, y, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return iu(e, t, n, r, i, o);
}
function iu(e, t, n, r, o, i) {
  Zp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Mc(t, n, !1), zt(e, t, i);
  (r = t.stateNode), (hv.current = t);
  var s = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = tr(t, e.child, null, i)), (t.child = tr(t, null, s, i))) : ze(e, t, s, i),
    (t.memoizedState = r.state),
    o && Mc(t, n, !0),
    t.child
  );
}
function qp(e) {
  var t = e.stateNode;
  t.pendingContext ? Nc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nc(e, t.context, !1),
    ua(e, t.containerInfo);
}
function Uc(e, t, n, r, o) {
  return er(), na(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var lu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function su(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ie(fe, o & 1),
    e === null)
  )
    return (
      Js(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = {
                mode: 'hidden',
                children: l,
              }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = gl(l, r, 0, null)),
              (e = yn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = lu),
              e)
            : ma(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return gv(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = {
      mode: 'hidden',
      children: r.children,
    };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = en(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = en(s, i)) : ((i = yn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? su(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = lu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = en(i, {
      mode: 'visible',
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ma(e, t) {
  return (
    (t = gl(
      {
        mode: 'visible',
        children: t,
      },
      e.mode,
      0,
      null,
    )),
    (t.return = e),
    (e.child = t)
  );
}
function bo(e, t, n, r) {
  return (
    r !== null && na(r),
    tr(t, e.child, null, n),
    (e = ma(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = as(Error(H(422)))), bo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = gl(
            {
              mode: 'visible',
              children: r.children,
            },
            o,
            0,
            null,
          )),
          (i = yn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && tr(t, e.child, null, l),
          (t.child.memoizedState = su(l)),
          (t.memoizedState = lu),
          i);
  if (!(t.mode & 1)) return bo(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(H(419))), (r = as(i, r, void 0)), bo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ae || s)) {
    if (((r = Ee), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), It(e, o), ct(r, e, o, -1));
    }
    return Ea(), (r = as(Error(H(421)))), bo(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = Pv.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ue = Qt(o.nextSibling)),
      (We = t),
      (ae = !0),
      (lt = null),
      e !== null && ((Ge[Qe++] = _t), (Ge[Qe++] = kt), (Ge[Qe++] = Sn), (_t = e.id), (kt = e.overflow), (Sn = t)),
      (t = ma(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eu(e.return, t, n);
}
function cs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function eh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = fe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Vi(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          cs(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Vi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cs(t, !0, n, null, i);
        break;
      case 'together':
        cs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (_n |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mv(e, t, n) {
  switch (t.tag) {
    case 3:
      qp(t), er();
      break;
    case 5:
      Np(t);
      break;
    case 1:
      Ve(t.type) && Li(t);
      break;
    case 4:
      ua(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie(Ai, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Jp(e, t, n)
            : (ie(fe, fe.current & 1), (e = zt(e, t, n)), e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return eh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qp(e, t, n);
  }
  return zt(e, t, n);
}
var th, uu, nh, rh;
th = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
uu = function () {};
nh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), hn(yt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Is(e, o)), (r = Is(e, r)), (i = []);
        break;
      case 'select':
        (o = pe({}, o, {
          value: void 0,
        })),
          (r = pe({}, r, {
            value: void 0,
          })),
          (i = []);
        break;
      case 'textarea':
        (o = Ls(e, o)), (r = Ls(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = zi);
    }
    Ds(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var s = o[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Kr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (((s = o != null ? o[a] : void 0), r.hasOwnProperty(a) && u !== s && (u != null || s != null)))
        if (a === 'style')
          if (s) {
            for (l in s) !s.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === 'children'
              ? (typeof u != 'string' && typeof u != 'number') || (i = i || []).push(a, '' + u)
              : a !== 'suppressContentEditableWarning' &&
                a !== 'suppressHydrationWarning' &&
                (Kr.hasOwnProperty(a)
                  ? (u != null && a === 'onScroll' && se('scroll', e), i || s === u || (i = []))
                  : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
rh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yv(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Ve(t.type) && Ri(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        ue(Fe),
        ue(Ie),
        ca(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (mu(lt), (lt = null)))),
        uu(e, t),
        Pe(t),
        null
      );
    case 5:
      aa(t);
      var o = hn(io.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return Pe(t), null;
        }
        if (((e = hn(yt.current)), Xo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[ro] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              se('cancel', r), se('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              se('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Lr.length; o++) se(Lr[o], r);
              break;
            case 'source':
              se('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              se('error', r), se('load', r);
              break;
            case 'details':
              se('toggle', r);
              break;
            case 'input':
              Ja(r, i), se('invalid', r);
              break;
            case 'select':
              (r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                se('invalid', r);
              break;
            case 'textarea':
              tc(r, i), se('invalid', r);
          }
          Ds(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Yo(r.textContent, s, e), (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Yo(r.textContent, s, e), (o = ['children', '' + s]))
                : Kr.hasOwnProperty(l) && s != null && l === 'onScroll' && se('scroll', r);
            }
          switch (n) {
            case 'input':
              Oo(r), ec(r, i, !0);
              break;
            case 'textarea':
              Oo(r), nc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = zi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = zd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = l.createElement(n, {
                      is: r.is,
                    }))
                  : ((e = l.createElement(n)),
                    n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[gt] = t),
            (e[ro] = r),
            th(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = As(n, r)), n)) {
              case 'dialog':
                se('cancel', e), se('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                se('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Lr.length; o++) se(Lr[o], e);
                o = r;
                break;
              case 'source':
                se('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                se('error', e), se('load', e), (o = r);
                break;
              case 'details':
                se('toggle', e), (o = r);
                break;
              case 'input':
                Ja(e, r), (o = Is(e, r)), se('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (o = pe({}, r, {
                    value: void 0,
                  })),
                  se('invalid', e);
                break;
              case 'textarea':
                tc(e, r), (o = Ls(e, r)), se('invalid', e);
                break;
              default:
                o = r;
            }
            Ds(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? $d(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Rd(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && br(e, u)
                        : typeof u == 'number' && br(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Kr.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && se('scroll', e)
                          : u != null && Hu(e, i, u, l));
              }
            switch (n) {
              case 'input':
                Oo(e), ec(e, r, !1);
                break;
              case 'textarea':
                Oo(e), nc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + nn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = zi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) rh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166));
        if (((n = hn(io.current)), hn(yt.current), Xo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[gt] = t), (i = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[gt] = t), (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (ue(fe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ue !== null && t.mode & 1 && !(t.flags & 128)) Sp(), er(), (t.flags |= 98560), (i = !1);
        else if (((i = Xo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(H(317));
            i[gt] = t;
          } else er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else lt !== null && (mu(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || fe.current & 1 ? xe === 0 && (xe = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return nr(), uu(e, t), e === null && to(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return ia(t.type._context), Pe(t), null;
    case 17:
      return Ve(t.type) && Ri(), Pe(t), null;
    case 19:
      if ((ue(fe), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Nr(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Vi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Nr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && me() > or && ((t.flags |= 128), (r = !0), Nr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !ae)
            )
              return Pe(t), null;
          } else
            2 * me() - i.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = me()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? je & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function vv(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return Ve(t.type) && Ri(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        nr(), ue(Fe), ue(Ie), ca(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return aa(t), null;
    case 13:
      if ((ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(H(340));
        er();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ue(fe), null;
    case 4:
      return nr(), null;
    case 10:
      return ia(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Go = !1,
  Te = !1,
  wv = typeof WeakSet == 'function' ? WeakSet : Set,
  W = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Yc = !1;
function xv(e, t) {
  if (((Xs = Pi), (e = up()), Ju(e))) {
    if ('selectionStart' in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            f = e,
            c = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (c = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if ((c === n && ++a === o && (s = l), c === i && ++d === r && (u = l), (p = f.nextSibling) !== null))
                break;
              (f = c), (c = f.parentNode);
            }
            f = p;
          }
          n =
            s === -1 || u === -1
              ? null
              : {
                  start: s,
                  end: u,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    Ks = {
      focusedElem: e,
      selectionRange: n,
    },
      Pi = !1,
      W = t;
    W !== null;

  )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    S = y.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : rt(t.type, w), S);
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (v) {
          he(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (y = Yc), (Yc = !1), y;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && au(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function pl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function oh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), oh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[gt], delete t[ro], delete t[Qs], delete t[nv], delete t[rv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ih(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ih(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), (e = e.sibling);
}
var ke = null,
  ot = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) lh(e, t, n), (n = n.sibling);
}
function lh(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Hn(n, t);
    case 6:
      var r = ke,
        o = ot;
      (ke = null),
        At(e, t, n),
        (ke = r),
        (ot = o),
        ke !== null &&
          (ot
            ? ((e = ke), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (ot
          ? ((e = ke), (n = n.stateNode), e.nodeType === 8 ? rs(e.parentNode, n) : e.nodeType === 1 && rs(e, n), qr(e))
          : rs(ke, n.stateNode));
      break;
    case 4:
      (r = ke), (o = ot), (ke = n.stateNode.containerInfo), (ot = !0), At(e, t, n), (ke = r), (ot = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && au(n, t, l), (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (!Te && (Hn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          he(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Te = (r = Te) || n.memoizedState !== null), At(e, t, n), (Te = r)) : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Kc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wv()),
      t.forEach(function (r) {
        var o = Tv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ke = s.stateNode), (ot = !1);
              break e;
            case 3:
              (ke = s.stateNode.containerInfo), (ot = !0);
              break e;
            case 4:
              (ke = s.stateNode.containerInfo), (ot = !0);
              break e;
          }
          s = s.return;
        }
        if (ke === null) throw Error(H(160));
        lh(i, l, o), (ke = null), (ot = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        he(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sh(t, e), (t = t.sibling);
}
function sh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), pt(e), r & 4)) {
        try {
          Br(3, e, e.return), pl(3, e);
        } catch (w) {
          he(e, e.return, w);
        }
        try {
          Br(5, e, e.return);
        } catch (w) {
          he(e, e.return, w);
        }
      }
      break;
    case 1:
      nt(t, e), pt(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if ((nt(t, e), pt(e), r & 512 && n !== null && Hn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          br(o, '');
        } catch (w) {
          he(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Td(o, i), As(s, l);
            var a = As(s, i);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                f = u[l + 1];
              d === 'style'
                ? $d(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? Rd(o, f)
                  : d === 'children'
                    ? br(o, f)
                    : Hu(o, d, f, a);
            }
            switch (s) {
              case 'input':
                zs(o, i);
                break;
              case 'textarea':
                Id(o, i);
                break;
              case 'select':
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Wn(o, !!i.multiple, p, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(o, !!i.multiple, i.defaultValue, !0)
                      : Wn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[ro] = i;
          } catch (w) {
            he(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((nt(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          he(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((nt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          qr(t.containerInfo);
        } catch (w) {
          he(e, e.return, w);
        }
      break;
    case 4:
      nt(t, e), pt(e);
      break;
    case 13:
      nt(t, e),
        pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (wa = me())),
        r & 4 && Kc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (a = Te) || d), nt(t, e), (Te = a)) : nt(t, e),
        pt(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !d && e.mode & 1))
          for (W = e, d = e.child; d !== null; ) {
            for (f = W = d; W !== null; ) {
              switch (((c = W), (p = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, c, c.return);
                  break;
                case 1:
                  Hn(c, c.return);
                  var y = c.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = c), (n = c.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (w) {
                      he(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Hn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Gc(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = c), (W = p)) : Gc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (l = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (s.style.display = Ld('display', l)));
              } catch (w) {
                he(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (w) {
                he(e, e.return, w);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      nt(t, e), pt(e), r & 4 && Kc(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ih(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (br(o, ''), (r.flags &= -33));
          var i = Xc(e);
          du(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Xc(e);
          fu(e, s, l);
          break;
        default:
          throw Error(H(161));
      }
    } catch (u) {
      he(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sv(e, t, n) {
  (W = e), uh(e);
}
function uh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Go;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Te;
        s = Go;
        var a = Te;
        if (((Go = l), (Te = u) && !a))
          for (W = o; W !== null; )
            (l = W),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null ? Qc(o) : u !== null ? ((u.return = l), (W = u)) : Qc(o);
        for (; i !== null; ) (W = i), uh(i), (i = i.sibling);
        (W = o), (Go = s), (Te = a);
      }
      bc(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (W = i)) : bc(e);
  }
}
function bc(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Rc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Rc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && qr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
        Te || (t.flags & 512 && cu(t));
      } catch (c) {
        he(t, t.return, c);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Gc(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Qc(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (u) {
            he(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              he(t, o, u);
            }
          }
          var i = t.return;
          try {
            cu(t);
          } catch (u) {
            he(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            cu(t);
          } catch (u) {
            he(t, l, u);
          }
      }
    } catch (u) {
      he(t, t.return, u);
    }
    if (t === e) {
      W = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (W = s);
      break;
    }
    W = t.return;
  }
}
var Ev = Math.ceil,
  Bi = Lt.ReactCurrentDispatcher,
  ya = Lt.ReactCurrentOwner,
  qe = Lt.ReactCurrentBatchConfig,
  ee = 0,
  Ee = null,
  ye = null,
  Ce = 0,
  je = 0,
  jn = ln(0),
  xe = 0,
  ao = null,
  _n = 0,
  hl = 0,
  va = 0,
  Ur = null,
  De = null,
  wa = 0,
  or = 1 / 0,
  St = null,
  Ui = !1,
  pu = null,
  qt = null,
  Qo = !1,
  Xt = null,
  Wi = 0,
  Wr = 0,
  hu = null,
  mi = -1,
  yi = 0;
function Re() {
  return ee & 6 ? me() : mi !== -1 ? mi : (mi = me());
}
function Jt(e) {
  return e.mode & 1
    ? ee & 2 && Ce !== 0
      ? Ce & -Ce
      : iv.transition !== null
        ? (yi === 0 && (yi = Xd()), yi)
        : ((e = oe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jd(e.type))), e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (hu = null), Error(H(185)));
  Eo(e, n, r),
    (!(ee & 2) || e !== Ee) &&
      (e === Ee && (!(ee & 2) && (hl |= n), xe === 4 && Ut(e, Ce)),
      He(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((or = me() + 500), cl && sn()));
}
function He(e, t) {
  var n = e.callbackNode;
  iy(e, t);
  var r = Mi(e, e === Ee ? Ce : 0);
  if (r === 0) n !== null && ic(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ic(n), t === 1))
      e.tag === 0 ? ov(Zc.bind(null, e)) : vp(Zc.bind(null, e)),
        ev(function () {
          !(ee & 6) && sn();
        }),
        (n = null);
    else {
      switch (Kd(r)) {
        case 1:
          n = Yu;
          break;
        case 4:
          n = Wd;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = Yd;
          break;
        default:
          n = Ni;
      }
      n = mh(n, ah.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ah(e, t) {
  if (((mi = -1), (yi = 0), ee & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = Mi(e, e === Ee ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yi(e, r);
  else {
    t = r;
    var o = ee;
    ee |= 2;
    var i = fh();
    (Ee !== e || Ce !== t) && ((St = null), (or = me() + 500), mn(e, t));
    do
      try {
        Cv();
        break;
      } catch (s) {
        ch(e, s);
      }
    while (1);
    oa(), (Bi.current = i), (ee = o), ye !== null ? (t = 0) : ((Ee = null), (Ce = 0), (t = xe));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = js(e)), o !== 0 && ((r = o), (t = gu(e, o)))), t === 1))
      throw ((n = ao), mn(e, 0), Ut(e, r), He(e, me()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !_v(o) &&
          ((t = Yi(e, r)), t === 2 && ((i = js(e)), i !== 0 && ((r = i), (t = gu(e, i)))), t === 1))
      )
        throw ((n = ao), mn(e, 0), Ut(e, r), He(e, me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          cn(e, De, St);
          break;
        case 3:
          if ((Ut(e, r), (r & 130023424) === r && ((t = wa + 500 - me()), 10 < t))) {
            if (Mi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Gs(cn.bind(null, e, De, St), t);
            break;
          }
          cn(e, De, St);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - at(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ev(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gs(cn.bind(null, e, De, St), r);
            break;
          }
          cn(e, De, St);
          break;
        case 5:
          cn(e, De, St);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return He(e, me()), e.callbackNode === n ? ah.bind(null, e) : null;
}
function gu(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = Yi(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && mu(t)),
    e
  );
}
function mu(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function _v(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (t &= ~va, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Zc(e) {
  if (ee & 6) throw Error(H(327));
  Gn();
  var t = Mi(e, 0);
  if (!(t & 1)) return He(e, me()), null;
  var n = Yi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = js(e);
    r !== 0 && ((t = r), (n = gu(e, r)));
  }
  if (n === 1) throw ((n = ao), mn(e, 0), Ut(e, t), He(e, me()), n);
  if (n === 6) throw Error(H(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), cn(e, De, St), He(e, me()), null;
}
function xa(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((or = me() + 500), cl && sn());
  }
}
function kn(e) {
  Xt !== null && Xt.tag === 0 && !(ee & 6) && Gn();
  var t = ee;
  ee |= 1;
  var n = qe.transition,
    r = oe;
  try {
    if (((qe.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (qe.transition = n), (ee = t), !(ee & 6) && sn();
  }
}
function Sa() {
  (je = jn.current), ue(jn);
}
function mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jy(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ri();
          break;
        case 3:
          nr(), ue(Fe), ue(Ie), ca();
          break;
        case 5:
          aa(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          ia(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ye = e = en(e.current, null)),
    (Ce = je = t),
    (xe = 0),
    (ao = null),
    (va = hl = _n = 0),
    (De = Ur = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function ch(e, t) {
  do {
    var n = ye;
    try {
      if ((oa(), (pi.current = ji), Hi)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Hi = !1;
      }
      if (
        ((En = 0), (Se = we = de = null), (jr = !1), (lo = 0), (ya.current = null), n === null || n.return === null)
      ) {
        (xe = 1), (ao = t), (ye = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (((t = Ce), (s.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
          var a = u,
            d = s,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue), (d.memoizedState = c.memoizedState), (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = Fc(l);
          if (p !== null) {
            (p.flags &= -257), Vc(p, l, s, i, t), p.mode & 1 && Oc(i, a, t), (t = p), (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Oc(i, a, t), Ea();
              break e;
            }
            u = Error(H(426));
          }
        } else if (ae && s.mode & 1) {
          var S = Fc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Vc(S, l, s, i, t), na(rr(u, s));
            break e;
          }
        }
        (i = u = rr(u, s)), xe !== 4 && (xe = 2), Ur === null ? (Ur = [i]) : Ur.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Kp(i, u, t);
              zc(i, g);
              break e;
            case 1:
              s = u;
              var m = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (qt === null || !qt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = bp(i, s, t);
                zc(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ph(n);
    } catch (C) {
      (t = C), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fh() {
  var e = Bi.current;
  return (Bi.current = ji), e === null ? ji : e;
}
function Ea() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ee === null || (!(_n & 268435455) && !(hl & 268435455)) || Ut(Ee, Ce);
}
function Yi(e, t) {
  var n = ee;
  ee |= 2;
  var r = fh();
  (Ee !== e || Ce !== t) && ((St = null), mn(e, t));
  do
    try {
      kv();
      break;
    } catch (o) {
      ch(e, o);
    }
  while (1);
  if ((oa(), (ee = n), (Bi.current = r), ye !== null)) throw Error(H(261));
  return (Ee = null), (Ce = 0), xe;
}
function kv() {
  for (; ye !== null; ) dh(ye);
}
function Cv() {
  for (; ye !== null && !Qm(); ) dh(ye);
}
function dh(e) {
  var t = gh(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps), t === null ? ph(e) : (ye = t), (ya.current = null);
}
function ph(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vv(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = yv(n, t, je)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function cn(e, t, n) {
  var r = oe,
    o = qe.transition;
  try {
    (qe.transition = null), (oe = 1), Nv(e, t, n, r);
  } finally {
    (qe.transition = o), (oe = r);
  }
  return null;
}
function Nv(e, t, n, r) {
  do Gn();
  while (Xt !== null);
  if (ee & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ly(e, i),
    e === Ee && ((ye = Ee = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qo ||
      ((Qo = !0),
      mh(Ni, function () {
        return Gn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var l = oe;
    oe = 1;
    var s = ee;
    (ee |= 4),
      (ya.current = null),
      xv(e, n),
      sh(n, e),
      Xy(Ks),
      (Pi = !!Xs),
      (Ks = Xs = null),
      (e.current = n),
      Sv(n),
      Zm(),
      (ee = s),
      (oe = l),
      (qe.transition = i);
  } else e.current = n;
  if (
    (Qo && ((Qo = !1), (Xt = e), (Wi = o)),
    (i = e.pendingLanes),
    i === 0 && (qt = null),
    ey(n.stateNode),
    He(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]),
        r(o.value, {
          componentStack: o.stack,
          digest: o.digest,
        });
  if (Ui) throw ((Ui = !1), (e = pu), (pu = null), e);
  return (
    Wi & 1 && e.tag !== 0 && Gn(),
    (i = e.pendingLanes),
    i & 1 ? (e === hu ? Wr++ : ((Wr = 0), (hu = e))) : (Wr = 0),
    sn(),
    null
  );
}
function Gn() {
  if (Xt !== null) {
    var e = Kd(Wi),
      t = qe.transition,
      n = oe;
    try {
      if (((qe.transition = null), (oe = 16 > e ? 16 : e), Xt === null)) var r = !1;
      else {
        if (((e = Xt), (Xt = null), (Wi = 0), ee & 6)) throw Error(H(331));
        var o = ee;
        for (ee |= 4, W = e.current; W !== null; ) {
          var i = W,
            l = i.child;
          if (W.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (W = a; W !== null; ) {
                  var d = W;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (W = f);
                  else
                    for (; W !== null; ) {
                      d = W;
                      var c = d.sibling,
                        p = d.return;
                      if ((oh(d), d === a)) {
                        W = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = p), (W = c);
                        break;
                      }
                      W = p;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              W = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (W = l);
          else
            e: for (; W !== null; ) {
              if (((i = W), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (W = g);
                break e;
              }
              W = i.return;
            }
        }
        var m = e.current;
        for (W = m; W !== null; ) {
          l = W;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (W = h);
          else
            e: for (l = m; W !== null; ) {
              if (((s = W), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, s);
                  }
                } catch (C) {
                  he(s, s.return, C);
                }
              if (s === l) {
                W = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (W = v);
                break e;
              }
              W = s.return;
            }
        }
        if (((ee = o), sn(), mt && typeof mt.onPostCommitFiberRoot == 'function'))
          try {
            mt.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (qe.transition = t);
    }
  }
  return !1;
}
function qc(e, t, n) {
  (t = rr(n, t)), (t = Kp(e, t, 1)), (e = Zt(e, t, 1)), (t = Re()), e !== null && (Eo(e, 1, t), He(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) qc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (qt === null || !qt.has(r)))
        ) {
          (e = rr(n, e)), (e = bp(t, e, 1)), (t = Zt(t, e, 1)), (e = Re()), t !== null && (Eo(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Mv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Ce & n) === n &&
      (xe === 4 || (xe === 3 && (Ce & 130023424) === Ce && 500 > me() - wa) ? mn(e, 0) : (va |= n)),
    He(e, t);
}
function hh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Ho), (Ho <<= 1), !(Ho & 130023424) && (Ho = 4194304)) : (t = 1));
  var n = Re();
  (e = It(e, t)), e !== null && (Eo(e, t, n), He(e, n));
}
function Pv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hh(e, n);
}
function Tv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), hh(e, n);
}
var gh;
gh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), mv(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), ae && t.flags & 1048576 && wp(t, Di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gi(e, t), (e = t.pendingProps);
      var o = Jn(t, Ie.current);
      bn(t, n), (o = da(null, t, r, e, o, n));
      var i = pa();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((i = !0), Li(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            sa(t),
            (o.updater = dl),
            (t.stateNode = o),
            (o._reactInternals = t),
            nu(t, r, e, n),
            (t = iu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && ea(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = zv(r)),
          (e = rt(r, e)),
          o)
        ) {
          case 0:
            t = ou(null, t, r, e, n);
            break e;
          case 1:
            t = Bc(null, t, r, e, n);
            break e;
          case 11:
            t = Hc(null, t, r, e, n);
            break e;
          case 14:
            t = jc(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : rt(r, o)), ou(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : rt(r, o)), Bc(e, t, r, o, n);
    case 3:
      e: {
        if ((qp(t), e === null)) throw Error(H(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Cp(e, t), Fi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = rr(Error(H(423)), t)), (t = Uc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = rr(Error(H(424)), t)), (t = Uc(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Qt(t.stateNode.containerInfo.firstChild),
                We = t,
                ae = !0,
                lt = null,
                n = _p(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === o)) {
            t = zt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Np(t),
        e === null && Js(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        bs(r, o) ? (l = null) : i !== null && bs(r, i) && (t.flags |= 32),
        Zp(e, t),
        ze(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Js(t), null;
    case 13:
      return Jp(e, t, n);
    case 4:
      return (
        ua(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : rt(r, o)), Hc(e, t, r, o, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ie(Ai, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ft(i.value, l)) {
            if (i.children === o.children && !Fe.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Nt(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)), (a.pending = u);
                      }
                    }
                    (i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), eu(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(H(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), eu(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        bn(t, n),
        (o = Je(o)),
        (r = r(o)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = rt(r, t.pendingProps)), (o = rt(r.type, o)), jc(e, t, r, o, n);
    case 15:
      return Gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        gi(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Li(t)) : (e = !1),
        bn(t, n),
        Xp(t, r, o),
        nu(t, r, o, n),
        iu(null, t, r, !0, e, n)
      );
    case 19:
      return eh(e, t, n);
    case 22:
      return Qp(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function mh(e, t) {
  return Ud(e, t);
}
function Iv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new Iv(e, t, n, r);
}
function _a(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zv(e) {
  if (typeof e == 'function') return _a(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bu)) return 11;
    if (e === Uu) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) _a(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case zn:
        return yn(n.children, o, i, t);
      case ju:
        (l = 8), (o |= 8);
        break;
      case Ns:
        return (e = Ze(12, n, t, o | 2)), (e.elementType = Ns), (e.lanes = i), e;
      case Ms:
        return (e = Ze(13, n, t, o)), (e.elementType = Ms), (e.lanes = i), e;
      case Ps:
        return (e = Ze(19, n, t, o)), (e.elementType = Ps), (e.lanes = i), e;
      case Nd:
        return gl(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case kd:
              l = 10;
              break e;
            case Cd:
              l = 9;
              break e;
            case Bu:
              l = 11;
              break e;
            case Uu:
              l = 14;
              break e;
            case Vt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ''));
    }
  return (t = Ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function yn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = Nd),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function fs(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function ds(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ka(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new Rv(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sa(i),
    e
  );
}
function Lv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yh(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return yp(e, n, t);
  }
  return t;
}
function vh(e, t, n, r, o, i, l, s, u) {
  return (
    (e = ka(n, r, !0, e, o, i, l, s, u)),
    (e.context = yh(null)),
    (n = e.current),
    (r = Re()),
    (o = Jt(n)),
    (i = Nt(r, o)),
    (i.callback = t ?? null),
    Zt(n, i, o),
    (e.current.lanes = o),
    Eo(e, o, r),
    He(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var o = t.current,
    i = Re(),
    l = Jt(o);
  return (
    (n = yh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, l)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(o, t, l)),
    e !== null && (ct(e, o, l, i), di(e, o, l)),
    l
  );
}
function Xi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ca(e, t) {
  Jc(e, t), (e = e.alternate) && Jc(e, t);
}
function $v() {
  return null;
}
var wh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
yl.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  ml(e, t, null, null);
};
yl.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function () {
      ml(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qd();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && qd(e);
  }
};
function Ma(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ef() {}
function Dv(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Xi(l);
        i.call(a);
      };
    }
    var l = vh(t, r, e, 0, null, !1, !1, '', ef);
    return (e._reactRootContainer = l), (e[Tt] = l.current), to(e.nodeType === 8 ? e.parentNode : e), kn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Xi(u);
      s.call(a);
    };
  }
  var u = ka(e, 0, !1, null, null, !1, !1, '', ef);
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      ml(t, u, n, r);
    }),
    u
  );
}
function wl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Xi(l);
        s.call(u);
      };
    }
    ml(t, l, e, o);
  } else l = Dv(n, t, e, o, r);
  return Xi(l);
}
bd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Xu(t, n | 1), He(t, me()), !(ee & 6) && ((or = me() + 500), sn()));
      }
      break;
    case 13:
      kn(function () {
        var r = It(e, 1);
        if (r !== null) {
          var o = Re();
          ct(r, e, 1, o);
        }
      }),
        Ca(e, 1);
  }
};
Ku = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      ct(t, e, 134217728, n);
    }
    Ca(e, 134217728);
  }
};
Gd = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = It(e, t);
    if (n !== null) {
      var r = Re();
      ct(n, e, t, r);
    }
    Ca(e, t);
  }
};
Qd = function () {
  return oe;
};
Zd = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Fs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((zs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = al(r);
            if (!o) throw Error(H(90));
            Pd(r), zs(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Id(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
Od = xa;
Fd = kn;
var Av = {
    usingClientEntryPoint: !1,
    Events: [ko, Dn, al, Dd, Ad, xa],
  },
  Mr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Ov = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || $v,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zo.isDisabled && Zo.supportsFiber)
    try {
      (il = Zo.inject(Ov)), (mt = Zo);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ma(t)) throw Error(H(200));
  return Lv(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!Ma(e)) throw Error(H(299));
  var n = !1,
    r = '',
    o = wh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ka(e, 1, !1, null, null, n, !1, r, o)),
    (e[Tt] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
Ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(H(188)) : ((e = Object.keys(e).join(',')), Error(H(268, e)));
  return (e = jd(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return kn(e);
};
Ke.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(H(200));
  return wl(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!Ma(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = wh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = vh(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Tt] = t.current),
    to(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new yl(t);
};
Ke.render = function (e, t, n) {
  if (!vl(t)) throw Error(H(200));
  return wl(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (kn(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = xa;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return wl(e, t, n, !1, r);
};
Ke.version = '18.3.1-next-f1338f8080-20240426';
function xh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xh);
    } catch (e) {
      console.error(e);
    }
}
xh(), (xd.exports = Ke);
var Fv = xd.exports,
  tf = Fv;
(ks.createRoot = tf.createRoot), (ks.hydrateRoot = tf.hydrateRoot);
function ve(e) {
  if (typeof e == 'string' || typeof e == 'number') return '' + e;
  let t = '';
  if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = ve(e[n])) !== '' && (t += (t && ' ') + r);
  else for (let n in e) e[n] && (t += (t && ' ') + n);
  return t;
}
var Vv = {
  value: () => {},
};
function xl() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r)) throw new Error('illegal type: ' + r);
    n[r] = [];
  }
  return new wi(n);
}
function wi(e) {
  this._ = e;
}
function Hv(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        o = n.indexOf('.');
      if ((o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))), n && !t.hasOwnProperty(n)))
        throw new Error('unknown type: ' + n);
      return {
        type: n,
        name: r,
      };
    });
}
wi.prototype = xl.prototype = {
  constructor: wi,
  on: function (e, t) {
    var n = this._,
      r = Hv(e + '', n),
      o,
      i = -1,
      l = r.length;
    if (arguments.length < 2) {
      for (; ++i < l; ) if ((o = (e = r[i]).type) && (o = jv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t);
    for (; ++i < l; )
      if ((o = (e = r[i]).type)) n[o] = nf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = nf(n[o], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new wi(e);
  },
  call: function (e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  },
};
function jv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n) if ((o = e[n]).name === t) return o.value;
}
function nf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      (e[r] = Vv), (e = e.slice(0, r).concat(e.slice(r + 1)));
      break;
    }
  return (
    n != null &&
      e.push({
        name: t,
        value: n,
      }),
    e
  );
}
var yu = 'http://www.w3.org/1999/xhtml';
const rf = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: yu,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function Sl(e) {
  var t = (e += ''),
    n = t.indexOf(':');
  return (
    n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
    rf.hasOwnProperty(t)
      ? {
          space: rf[t],
          local: e,
        }
      : e
  );
}
function Bv(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === yu && t.documentElement.namespaceURI === yu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Uv(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Sh(e) {
  var t = Sl(e);
  return (t.local ? Uv : Bv)(t);
}
function Wv() {}
function Pa(e) {
  return e == null
    ? Wv
    : function () {
        return this.querySelector(e);
      };
}
function Yv(e) {
  typeof e != 'function' && (e = Pa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = new Array(l)), u, a, d = 0; d < l; ++d)
      (u = i[d]) && (a = e.call(u, u.__data__, d, i)) && ('__data__' in u && (a.__data__ = u.__data__), (s[d] = a));
  return new Xe(r, this._parents);
}
function Xv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Kv() {
  return [];
}
function Eh(e) {
  return e == null
    ? Kv
    : function () {
        return this.querySelectorAll(e);
      };
}
function bv(e) {
  return function () {
    return Xv(e.apply(this, arguments));
  };
}
function Gv(e) {
  typeof e == 'function' ? (e = bv(e)) : (e = Eh(e));
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var l = t[i], s = l.length, u, a = 0; a < s; ++a)
      (u = l[a]) && (r.push(e.call(u, u.__data__, a, l)), o.push(u));
  return new Xe(r, o);
}
function _h(e) {
  return function () {
    return this.matches(e);
  };
}
function kh(e) {
  return function (t) {
    return t.matches(e);
  };
}
var Qv = Array.prototype.find;
function Zv(e) {
  return function () {
    return Qv.call(this.children, e);
  };
}
function qv() {
  return this.firstElementChild;
}
function Jv(e) {
  return this.select(e == null ? qv : Zv(typeof e == 'function' ? e : kh(e)));
}
var e1 = Array.prototype.filter;
function t1() {
  return Array.from(this.children);
}
function n1(e) {
  return function () {
    return e1.call(this.children, e);
  };
}
function r1(e) {
  return this.selectAll(e == null ? t1 : n1(typeof e == 'function' ? e : kh(e)));
}
function o1(e) {
  typeof e != 'function' && (e = _h(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = []), u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new Xe(r, this._parents);
}
function Ch(e) {
  return new Array(e.length);
}
function i1() {
  return new Xe(this._enter || this._groups.map(Ch), this._parents);
}
function Ki(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
Ki.prototype = {
  constructor: Ki,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function l1(e) {
  return function () {
    return e;
  };
}
function s1(e, t, n, r, o, i) {
  for (var l = 0, s, u = t.length, a = i.length; l < a; ++l)
    (s = t[l]) ? ((s.__data__ = i[l]), (r[l] = s)) : (n[l] = new Ki(e, i[l]));
  for (; l < u; ++l) (s = t[l]) && (o[l] = s);
}
function u1(e, t, n, r, o, i, l) {
  var s,
    u,
    a = new Map(),
    d = t.length,
    f = i.length,
    c = new Array(d),
    p;
  for (s = 0; s < d; ++s)
    (u = t[s]) && ((c[s] = p = l.call(u, u.__data__, s, t) + ''), a.has(p) ? (o[s] = u) : a.set(p, u));
  for (s = 0; s < f; ++s)
    (p = l.call(e, i[s], s, i) + ''),
      (u = a.get(p)) ? ((r[s] = u), (u.__data__ = i[s]), a.delete(p)) : (n[s] = new Ki(e, i[s]));
  for (s = 0; s < d; ++s) (u = t[s]) && a.get(c[s]) === u && (o[s] = u);
}
function a1(e) {
  return e.__data__;
}
function c1(e, t) {
  if (!arguments.length) return Array.from(this, a1);
  var n = t ? u1 : s1,
    r = this._parents,
    o = this._groups;
  typeof e != 'function' && (e = l1(e));
  for (var i = o.length, l = new Array(i), s = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var d = r[a],
      f = o[a],
      c = f.length,
      p = f1(e.call(d, d && d.__data__, a, r)),
      y = p.length,
      w = (s[a] = new Array(y)),
      S = (l[a] = new Array(y)),
      g = (u[a] = new Array(c));
    n(d, f, w, S, g, p, t);
    for (var m = 0, h = 0, v, C; m < y; ++m)
      if ((v = w[m])) {
        for (m >= h && (h = m + 1); !(C = S[h]) && ++h < y; );
        v._next = C || null;
      }
  }
  return (l = new Xe(l, r)), (l._enter = s), (l._exit = u), l;
}
function f1(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function d1() {
  return new Xe(this._exit || this._groups.map(Ch), this._parents);
}
function p1(e, t, n) {
  var r = this.enter(),
    o = this,
    i = this.exit();
  return (
    typeof e == 'function' ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + '')),
    t != null && ((o = t(o)), o && (o = o.selection())),
    n == null ? i.remove() : n(i),
    r && o ? r.merge(o).order() : o
  );
}
function h1(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      o = n.length,
      i = r.length,
      l = Math.min(o, i),
      s = new Array(o),
      u = 0;
    u < l;
    ++u
  )
    for (var a = n[u], d = r[u], f = a.length, c = (s[u] = new Array(f)), p, y = 0; y < f; ++y)
      (p = a[y] || d[y]) && (c[y] = p);
  for (; u < o; ++u) s[u] = n[u];
  return new Xe(s, this._parents);
}
function g1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], l; --o >= 0; )
      (l = r[o]) && (i && l.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(l, i), (i = l));
  return this;
}
function m1(e) {
  e || (e = y1);
  function t(f, c) {
    return f && c ? e(f.__data__, c.__data__) : !f - !c;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var l = n[i], s = l.length, u = (o[i] = new Array(s)), a, d = 0; d < s; ++d) (a = l[d]) && (u[d] = a);
    u.sort(t);
  }
  return new Xe(o, this._parents).order();
}
function y1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function v1() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function w1() {
  return Array.from(this);
}
function x1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var l = r[o];
      if (l) return l;
    }
  return null;
}
function S1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function E1() {
  return !this.node();
}
function _1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, l = o.length, s; i < l; ++i) (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function k1(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function C1(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function N1(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function M1(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function P1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function T1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function I1(e, t) {
  var n = Sl(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null ? (n.local ? C1 : k1) : typeof t == 'function' ? (n.local ? T1 : P1) : n.local ? M1 : N1)(n, t),
  );
}
function Nh(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function z1(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function R1(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function L1(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $1(e, t, n) {
  return arguments.length > 1
    ? this.each((t == null ? z1 : typeof t == 'function' ? L1 : R1)(e, t, n ?? ''))
    : ir(this.node(), e);
}
function ir(e, t) {
  return e.style.getPropertyValue(t) || Nh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function D1(e) {
  return function () {
    delete this[e];
  };
}
function A1(e, t) {
  return function () {
    this[e] = t;
  };
}
function O1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function F1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? D1 : typeof t == 'function' ? O1 : A1)(e, t)) : this.node()[e];
}
function Mh(e) {
  return e.trim().split(/^|\s+/);
}
function Ta(e) {
  return e.classList || new Ph(e);
}
function Ph(e) {
  (this._node = e), (this._names = Mh(e.getAttribute('class') || ''));
}
Ph.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Th(e, t) {
  for (var n = Ta(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ih(e, t) {
  for (var n = Ta(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function V1(e) {
  return function () {
    Th(this, e);
  };
}
function H1(e) {
  return function () {
    Ih(this, e);
  };
}
function j1(e, t) {
  return function () {
    (t.apply(this, arguments) ? Th : Ih)(this, e);
  };
}
function B1(e, t) {
  var n = Mh(e + '');
  if (arguments.length < 2) {
    for (var r = Ta(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == 'function' ? j1 : t ? V1 : H1)(n, t));
}
function U1() {
  this.textContent = '';
}
function W1(e) {
  return function () {
    this.textContent = e;
  };
}
function Y1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? '';
  };
}
function X1(e) {
  return arguments.length ? this.each(e == null ? U1 : (typeof e == 'function' ? Y1 : W1)(e)) : this.node().textContent;
}
function K1() {
  this.innerHTML = '';
}
function b1(e) {
  return function () {
    this.innerHTML = e;
  };
}
function G1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? '';
  };
}
function Q1(e) {
  return arguments.length ? this.each(e == null ? K1 : (typeof e == 'function' ? G1 : b1)(e)) : this.node().innerHTML;
}
function Z1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function q1() {
  return this.each(Z1);
}
function J1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ew() {
  return this.each(J1);
}
function tw(e) {
  var t = typeof e == 'function' ? e : Sh(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function nw() {
  return null;
}
function rw(e, t) {
  var n = typeof e == 'function' ? e : Sh(e),
    r = t == null ? nw : typeof t == 'function' ? t : Pa(t);
  return this.select(function () {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ow() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function iw() {
  return this.each(ow);
}
function lw() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sw() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function uw(e) {
  return this.select(e ? sw : lw);
}
function aw(e) {
  return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function cw(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function fw(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = '',
        r = t.indexOf('.');
      return (
        r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
        {
          type: t,
          name: n,
        }
      );
    });
}
function dw(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        (i = t[n]),
          (!e.type || i.type === e.type) && i.name === e.name
            ? this.removeEventListener(i.type, i.listener, i.options)
            : (t[++r] = i);
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function pw(e, t, n) {
  return function () {
    var r = this.__on,
      o,
      i = cw(t);
    if (r) {
      for (var l = 0, s = r.length; l < s; ++l)
        if ((o = r[l]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options),
            this.addEventListener(o.type, (o.listener = i), (o.options = n)),
            (o.value = t);
          return;
        }
    }
    this.addEventListener(e.type, i, n),
      (o = {
        type: e.type,
        name: e.name,
        value: t,
        listener: i,
        options: n,
      }),
      r ? r.push(o) : (this.__on = [o]);
  };
}
function hw(e, t, n) {
  var r = fw(e + ''),
    o,
    i = r.length,
    l;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, a = s.length, d; u < a; ++u)
        for (o = 0, d = s[u]; o < i; ++o) if ((l = r[o]).type === d.type && l.name === d.name) return d.value;
    }
    return;
  }
  for (s = t ? pw : dw, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function zh(e, t, n) {
  var r = Nh(e),
    o = r.CustomEvent;
  typeof o == 'function'
    ? (o = new o(t, n))
    : ((o = r.document.createEvent('Event')),
      n ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail)) : o.initEvent(t, !1, !1)),
    e.dispatchEvent(o);
}
function gw(e, t) {
  return function () {
    return zh(this, e, t);
  };
}
function mw(e, t) {
  return function () {
    return zh(this, e, t.apply(this, arguments));
  };
}
function yw(e, t) {
  return this.each((typeof t == 'function' ? mw : gw)(e, t));
}
function* vw() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, l; o < i; ++o) (l = r[o]) && (yield l);
}
var Rh = [null];
function Xe(e, t) {
  (this._groups = e), (this._parents = t);
}
function No() {
  return new Xe([[document.documentElement]], Rh);
}
function ww() {
  return this;
}
Xe.prototype = No.prototype = {
  constructor: Xe,
  select: Yv,
  selectAll: Gv,
  selectChild: Jv,
  selectChildren: r1,
  filter: o1,
  data: c1,
  enter: i1,
  exit: d1,
  join: p1,
  merge: h1,
  selection: ww,
  order: g1,
  sort: m1,
  call: v1,
  nodes: w1,
  node: x1,
  size: S1,
  empty: E1,
  each: _1,
  attr: I1,
  style: $1,
  property: F1,
  classed: B1,
  text: X1,
  html: Q1,
  raise: q1,
  lower: ew,
  append: tw,
  insert: rw,
  remove: iw,
  clone: uw,
  datum: aw,
  on: hw,
  dispatch: yw,
  [Symbol.iterator]: vw,
};
function Be(e) {
  return typeof e == 'string' ? new Xe([[document.querySelector(e)]], [document.documentElement]) : new Xe([[e]], Rh);
}
function xw(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function it(e, t) {
  if (((e = xw(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (r.x = e.clientX), (r.y = e.clientY), (r = r.matrixTransform(t.getScreenCTM().inverse())), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Sw = {
    passive: !1,
  },
  co = {
    capture: !0,
    passive: !1,
  };
function ps(e) {
  e.stopImmediatePropagation();
}
function Qn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Lh(e) {
  var t = e.document.documentElement,
    n = Be(e).on('dragstart.drag', Qn, co);
  'onselectstart' in t
    ? n.on('selectstart.drag', Qn, co)
    : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'));
}
function $h(e, t) {
  var n = e.document.documentElement,
    r = Be(e).on('dragstart.drag', null);
  t &&
    (r.on('click.drag', Qn, co),
    setTimeout(function () {
      r.on('click.drag', null);
    }, 0)),
    'onselectstart' in n
      ? r.on('selectstart.drag', null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
const qo = (e) => () => e;
function vu(
  e,
  { sourceEvent: t, subject: n, target: r, identifier: o, active: i, x: l, y: s, dx: u, dy: a, dispatch: d },
) {
  Object.defineProperties(this, {
    type: {
      value: e,
      enumerable: !0,
      configurable: !0,
    },
    sourceEvent: {
      value: t,
      enumerable: !0,
      configurable: !0,
    },
    subject: {
      value: n,
      enumerable: !0,
      configurable: !0,
    },
    target: {
      value: r,
      enumerable: !0,
      configurable: !0,
    },
    identifier: {
      value: o,
      enumerable: !0,
      configurable: !0,
    },
    active: {
      value: i,
      enumerable: !0,
      configurable: !0,
    },
    x: {
      value: l,
      enumerable: !0,
      configurable: !0,
    },
    y: {
      value: s,
      enumerable: !0,
      configurable: !0,
    },
    dx: {
      value: u,
      enumerable: !0,
      configurable: !0,
    },
    dy: {
      value: a,
      enumerable: !0,
      configurable: !0,
    },
    _: {
      value: d,
    },
  });
}
vu.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Ew(e) {
  return !e.ctrlKey && !e.button;
}
function _w() {
  return this.parentNode;
}
function kw(e, t) {
  return (
    t ?? {
      x: e.x,
      y: e.y,
    }
  );
}
function Cw() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Dh() {
  var e = Ew,
    t = _w,
    n = kw,
    r = Cw,
    o = {},
    i = xl('start', 'drag', 'end'),
    l = 0,
    s,
    u,
    a,
    d,
    f = 0;
  function c(v) {
    v.on('mousedown.drag', p)
      .filter(r)
      .on('touchstart.drag', S)
      .on('touchmove.drag', g, Sw)
      .on('touchend.drag touchcancel.drag', m)
      .style('touch-action', 'none')
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  function p(v, C) {
    if (!(d || !e.call(this, v, C))) {
      var M = h(this, t.call(this, v, C), v, C, 'mouse');
      M &&
        (Be(v.view).on('mousemove.drag', y, co).on('mouseup.drag', w, co),
        Lh(v.view),
        ps(v),
        (a = !1),
        (s = v.clientX),
        (u = v.clientY),
        M('start', v));
    }
  }
  function y(v) {
    if ((Qn(v), !a)) {
      var C = v.clientX - s,
        M = v.clientY - u;
      a = C * C + M * M > f;
    }
    o.mouse('drag', v);
  }
  function w(v) {
    Be(v.view).on('mousemove.drag mouseup.drag', null), $h(v.view, a), Qn(v), o.mouse('end', v);
  }
  function S(v, C) {
    if (e.call(this, v, C)) {
      var M = v.changedTouches,
        _ = t.call(this, v, C),
        P = M.length,
        $,
        T;
      for ($ = 0; $ < P; ++$) (T = h(this, _, v, C, M[$].identifier, M[$])) && (ps(v), T('start', v, M[$]));
    }
  }
  function g(v) {
    var C = v.changedTouches,
      M = C.length,
      _,
      P;
    for (_ = 0; _ < M; ++_) (P = o[C[_].identifier]) && (Qn(v), P('drag', v, C[_]));
  }
  function m(v) {
    var C = v.changedTouches,
      M = C.length,
      _,
      P;
    for (
      d && clearTimeout(d),
        d = setTimeout(function () {
          d = null;
        }, 500),
        _ = 0;
      _ < M;
      ++_
    )
      (P = o[C[_].identifier]) && (ps(v), P('end', v, C[_]));
  }
  function h(v, C, M, _, P, $) {
    var T = i.copy(),
      V = it($ || M, C),
      F,
      O,
      x;
    if (
      (x = n.call(
        v,
        new vu('beforestart', {
          sourceEvent: M,
          target: c,
          identifier: P,
          active: l,
          x: V[0],
          y: V[1],
          dx: 0,
          dy: 0,
          dispatch: T,
        }),
        _,
      )) != null
    )
      return (
        (F = x.x - V[0] || 0),
        (O = x.y - V[1] || 0),
        function I(k, L, E) {
          var N = V,
            z;
          switch (k) {
            case 'start':
              (o[P] = I), (z = l++);
              break;
            case 'end':
              delete o[P], --l;
            case 'drag':
              (V = it(E || L, C)), (z = l);
              break;
          }
          T.call(
            k,
            v,
            new vu(k, {
              sourceEvent: L,
              subject: x,
              target: c,
              identifier: P,
              active: z,
              x: V[0] + F,
              y: V[1] + O,
              dx: V[0] - N[0],
              dy: V[1] - N[1],
              dispatch: T,
            }),
            _,
          );
        }
      );
  }
  return (
    (c.filter = function (v) {
      return arguments.length ? ((e = typeof v == 'function' ? v : qo(!!v)), c) : e;
    }),
    (c.container = function (v) {
      return arguments.length ? ((t = typeof v == 'function' ? v : qo(v)), c) : t;
    }),
    (c.subject = function (v) {
      return arguments.length ? ((n = typeof v == 'function' ? v : qo(v)), c) : n;
    }),
    (c.touchable = function (v) {
      return arguments.length ? ((r = typeof v == 'function' ? v : qo(!!v)), c) : r;
    }),
    (c.on = function () {
      var v = i.on.apply(i, arguments);
      return v === i ? c : v;
    }),
    (c.clickDistance = function (v) {
      return arguments.length ? ((f = (v = +v) * v), c) : Math.sqrt(f);
    }),
    c
  );
}
function Ia(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Ah(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Mo() {}
var fo = 0.7,
  bi = 1 / fo,
  Zn = '\\s*([+-]?\\d+)\\s*',
  po = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  vt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  Nw = /^#([0-9a-f]{3,8})$/,
  Mw = new RegExp(`^rgb\\(${Zn},${Zn},${Zn}\\)$`),
  Pw = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`),
  Tw = new RegExp(`^rgba\\(${Zn},${Zn},${Zn},${po}\\)$`),
  Iw = new RegExp(`^rgba\\(${vt},${vt},${vt},${po}\\)$`),
  zw = new RegExp(`^hsl\\(${po},${vt},${vt}\\)$`),
  Rw = new RegExp(`^hsla\\(${po},${vt},${vt},${po}\\)$`),
  of = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Ia(Mo, ho, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: lf,
  formatHex: lf,
  formatHex8: Lw,
  formatHsl: $w,
  formatRgb: sf,
  toString: sf,
});
function lf() {
  return this.rgb().formatHex();
}
function Lw() {
  return this.rgb().formatHex8();
}
function $w() {
  return Oh(this).formatHsl();
}
function sf() {
  return this.rgb().formatRgb();
}
function ho(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = Nw.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? uf(t)
          : n === 3
            ? new Oe(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
            : n === 8
              ? Jo((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : n === 4
                ? Jo(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Mw.exec(e))
        ? new Oe(t[1], t[2], t[3], 1)
        : (t = Pw.exec(e))
          ? new Oe((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = Tw.exec(e))
            ? Jo(t[1], t[2], t[3], t[4])
            : (t = Iw.exec(e))
              ? Jo((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = zw.exec(e))
                ? ff(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Rw.exec(e))
                  ? ff(t[1], t[2] / 100, t[3] / 100, t[4])
                  : of.hasOwnProperty(e)
                    ? uf(of[e])
                    : e === 'transparent'
                      ? new Oe(NaN, NaN, NaN, 0)
                      : null
  );
}
function uf(e) {
  return new Oe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Jo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function Dw(e) {
  return e instanceof Mo || (e = ho(e)), e ? ((e = e.rgb()), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe();
}
function wu(e, t, n, r) {
  return arguments.length === 1 ? Dw(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Ia(
  Oe,
  wu,
  Ah(Mo, {
    brighter(e) {
      return (e = e == null ? bi : Math.pow(bi, e)), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return (e = e == null ? fo : Math.pow(fo, e)), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Oe(vn(this.r), vn(this.g), vn(this.b), Gi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: af,
    formatHex: af,
    formatHex8: Aw,
    formatRgb: cf,
    toString: cf,
  }),
);
function af() {
  return `#${gn(this.r)}${gn(this.g)}${gn(this.b)}`;
}
function Aw() {
  return `#${gn(this.r)}${gn(this.g)}${gn(this.b)}${gn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cf() {
  const e = Gi(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${vn(this.r)}, ${vn(this.g)}, ${vn(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function Gi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function vn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function gn(e) {
  return (e = vn(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function ff(e, t, n, r) {
  return r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new st(e, t, n, r);
}
function Oh(e) {
  if (e instanceof st) return new st(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Mo || (e = ho(e)), !e)) return new st();
  if (e instanceof st) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    o = Math.min(t, n, r),
    i = Math.max(t, n, r),
    l = NaN,
    s = i - o,
    u = (i + o) / 2;
  return (
    s
      ? (t === i ? (l = (n - r) / s + (n < r) * 6) : n === i ? (l = (r - t) / s + 2) : (l = (t - n) / s + 4),
        (s /= u < 0.5 ? i + o : 2 - i - o),
        (l *= 60))
      : (s = u > 0 && u < 1 ? 0 : l),
    new st(l, s, u, e.opacity)
  );
}
function Ow(e, t, n, r) {
  return arguments.length === 1 ? Oh(e) : new st(e, t, n, r ?? 1);
}
function st(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Ia(
  st,
  Ow,
  Ah(Mo, {
    brighter(e) {
      return (e = e == null ? bi : Math.pow(bi, e)), new st(this.h, this.s, this.l * e, this.opacity);
    },
    darker(e) {
      return (e = e == null ? fo : Math.pow(fo, e)), new st(this.h, this.s, this.l * e, this.opacity);
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        o = 2 * n - r;
      return new Oe(
        hs(e >= 240 ? e - 240 : e + 120, o, r),
        hs(e, o, r),
        hs(e < 120 ? e + 240 : e - 120, o, r),
        this.opacity,
      );
    },
    clamp() {
      return new st(df(this.h), ei(this.s), ei(this.l), Gi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Gi(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${df(this.h)}, ${ei(this.s) * 100}%, ${ei(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  }),
);
function df(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function ei(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hs(e, t, n) {
  return (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) * 255;
}
const Fh = (e) => () => e;
function Fw(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Vw(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function Hw(e) {
  return (e = +e) == 1
    ? Vh
    : function (t, n) {
        return n - t ? Vw(t, n, e) : Fh(isNaN(t) ? n : t);
      };
}
function Vh(e, t) {
  var n = t - e;
  return n ? Fw(e, n) : Fh(isNaN(e) ? t : e);
}
const pf = (function e(t) {
  var n = Hw(t);
  function r(o, i) {
    var l = n((o = wu(o)).r, (i = wu(i)).r),
      s = n(o.g, i.g),
      u = n(o.b, i.b),
      a = Vh(o.opacity, i.opacity);
    return function (d) {
      return (o.r = l(d)), (o.g = s(d)), (o.b = u(d)), (o.opacity = a(d)), o + '';
    };
  }
  return (r.gamma = e), r;
})(1);
function jt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
var xu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  gs = new RegExp(xu.source, 'g');
function jw(e) {
  return function () {
    return e;
  };
}
function Bw(e) {
  return function (t) {
    return e(t) + '';
  };
}
function Uw(e, t) {
  var n = (xu.lastIndex = gs.lastIndex = 0),
    r,
    o,
    i,
    l = -1,
    s = [],
    u = [];
  for (e = e + '', t = t + ''; (r = xu.exec(e)) && (o = gs.exec(t)); )
    (i = o.index) > n && ((i = t.slice(n, i)), s[l] ? (s[l] += i) : (s[++l] = i)),
      (r = r[0]) === (o = o[0])
        ? s[l]
          ? (s[l] += o)
          : (s[++l] = o)
        : ((s[++l] = null),
          u.push({
            i: l,
            x: jt(r, o),
          })),
      (n = gs.lastIndex);
  return (
    n < t.length && ((i = t.slice(n)), s[l] ? (s[l] += i) : (s[++l] = i)),
    s.length < 2
      ? u[0]
        ? Bw(u[0].x)
        : jw(t)
      : ((t = u.length),
        function (a) {
          for (var d = 0, f; d < t; ++d) s[(f = u[d]).i] = f.x(a);
          return s.join('');
        })
  );
}
var hf = 180 / Math.PI,
  Su = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Hh(e, t, n, r, o, i) {
  var l, s, u;
  return (
    (l = Math.sqrt(e * e + t * t)) && ((e /= l), (t /= l)),
    (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
    (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (u /= s)),
    e * r < t * n && ((e = -e), (t = -t), (u = -u), (l = -l)),
    {
      translateX: o,
      translateY: i,
      rotate: Math.atan2(t, e) * hf,
      skewX: Math.atan(u) * hf,
      scaleX: l,
      scaleY: s,
    }
  );
}
var ti;
function Ww(e) {
  const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
  return t.isIdentity ? Su : Hh(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Yw(e) {
  return e == null ||
    (ti || (ti = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    ti.setAttribute('transform', e),
    !(e = ti.transform.baseVal.consolidate()))
    ? Su
    : ((e = e.matrix), Hh(e.a, e.b, e.c, e.d, e.e, e.f));
}
function jh(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + ' ' : '';
  }
  function i(a, d, f, c, p, y) {
    if (a !== f || d !== c) {
      var w = p.push('translate(', null, t, null, n);
      y.push(
        {
          i: w - 4,
          x: jt(a, f),
        },
        {
          i: w - 2,
          x: jt(d, c),
        },
      );
    } else (f || c) && p.push('translate(' + f + t + c + n);
  }
  function l(a, d, f, c) {
    a !== d
      ? (a - d > 180 ? (d += 360) : d - a > 180 && (a += 360),
        c.push({
          i: f.push(o(f) + 'rotate(', null, r) - 2,
          x: jt(a, d),
        }))
      : d && f.push(o(f) + 'rotate(' + d + r);
  }
  function s(a, d, f, c) {
    a !== d
      ? c.push({
          i: f.push(o(f) + 'skewX(', null, r) - 2,
          x: jt(a, d),
        })
      : d && f.push(o(f) + 'skewX(' + d + r);
  }
  function u(a, d, f, c, p, y) {
    if (a !== f || d !== c) {
      var w = p.push(o(p) + 'scale(', null, ',', null, ')');
      y.push(
        {
          i: w - 4,
          x: jt(a, f),
        },
        {
          i: w - 2,
          x: jt(d, c),
        },
      );
    } else (f !== 1 || c !== 1) && p.push(o(p) + 'scale(' + f + ',' + c + ')');
  }
  return function (a, d) {
    var f = [],
      c = [];
    return (
      (a = e(a)),
      (d = e(d)),
      i(a.translateX, a.translateY, d.translateX, d.translateY, f, c),
      l(a.rotate, d.rotate, f, c),
      s(a.skewX, d.skewX, f, c),
      u(a.scaleX, a.scaleY, d.scaleX, d.scaleY, f, c),
      (a = d = null),
      function (p) {
        for (var y = -1, w = c.length, S; ++y < w; ) f[(S = c[y]).i] = S.x(p);
        return f.join('');
      }
    );
  };
}
var Xw = jh(Ww, 'px, ', 'px)', 'deg)'),
  Kw = jh(Yw, ', ', ')', ')'),
  bw = 1e-12;
function gf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Gw(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Qw(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Zw = (function e(t, n, r) {
  function o(i, l) {
    var s = i[0],
      u = i[1],
      a = i[2],
      d = l[0],
      f = l[1],
      c = l[2],
      p = d - s,
      y = f - u,
      w = p * p + y * y,
      S,
      g;
    if (w < bw)
      (g = Math.log(c / a) / t),
        (S = function (_) {
          return [s + _ * p, u + _ * y, a * Math.exp(t * _ * g)];
        });
    else {
      var m = Math.sqrt(w),
        h = (c * c - a * a + r * w) / (2 * a * n * m),
        v = (c * c - a * a - r * w) / (2 * c * n * m),
        C = Math.log(Math.sqrt(h * h + 1) - h),
        M = Math.log(Math.sqrt(v * v + 1) - v);
      (g = (M - C) / t),
        (S = function (_) {
          var P = _ * g,
            $ = gf(C),
            T = (a / (n * m)) * ($ * Qw(t * P + C) - Gw(C));
          return [s + T * p, u + T * y, (a * $) / gf(t * P + C)];
        });
    }
    return (S.duration = (g * 1e3 * t) / Math.SQRT2), S;
  }
  return (
    (o.rho = function (i) {
      var l = Math.max(0.001, +i),
        s = l * l,
        u = s * s;
      return e(l, s, u);
    }),
    o
  );
})(Math.SQRT2, 2, 4);
var lr = 0,
  $r = 0,
  Pr = 0,
  Bh = 1e3,
  Qi,
  Dr,
  Zi = 0,
  Cn = 0,
  El = 0,
  go = typeof performance == 'object' && performance.now ? performance : Date,
  Uh =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function za() {
  return Cn || (Uh(qw), (Cn = go.now() + El));
}
function qw() {
  Cn = 0;
}
function qi() {
  this._call = this._time = this._next = null;
}
qi.prototype = Wh.prototype = {
  constructor: qi,
  restart: function (e, t, n) {
    if (typeof e != 'function') throw new TypeError('callback is not a function');
    (n = (n == null ? za() : +n) + (t == null ? 0 : +t)),
      !this._next && Dr !== this && (Dr ? (Dr._next = this) : (Qi = this), (Dr = this)),
      (this._call = e),
      (this._time = n),
      Eu();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Eu());
  },
};
function Wh(e, t, n) {
  var r = new qi();
  return r.restart(e, t, n), r;
}
function Jw() {
  za(), ++lr;
  for (var e = Qi, t; e; ) (t = Cn - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --lr;
}
function mf() {
  (Cn = (Zi = go.now()) + El), (lr = $r = 0);
  try {
    Jw();
  } finally {
    (lr = 0), tx(), (Cn = 0);
  }
}
function ex() {
  var e = go.now(),
    t = e - Zi;
  t > Bh && ((El -= t), (Zi = e));
}
function tx() {
  for (var e, t = Qi, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Qi = n)));
  (Dr = e), Eu(r);
}
function Eu(e) {
  if (!lr) {
    $r && ($r = clearTimeout($r));
    var t = e - Cn;
    t > 24
      ? (e < 1 / 0 && ($r = setTimeout(mf, e - go.now() - El)), Pr && (Pr = clearInterval(Pr)))
      : (Pr || ((Zi = go.now()), (Pr = setInterval(ex, Bh))), (lr = 1), Uh(mf));
  }
}
function yf(e, t, n) {
  var r = new qi();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (o) => {
        r.stop(), e(o + t);
      },
      t,
      n,
    ),
    r
  );
}
var nx = xl('start', 'end', 'cancel', 'interrupt'),
  rx = [],
  Yh = 0,
  vf = 1,
  _u = 2,
  xi = 3,
  wf = 4,
  ku = 5,
  Si = 6;
function _l(e, t, n, r, o, i) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  ox(e, n, {
    name: t,
    index: r,
    group: o,
    on: nx,
    tween: rx,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Yh,
  });
}
function Ra(e, t) {
  var n = dt(e, t);
  if (n.state > Yh) throw new Error('too late; already scheduled');
  return n;
}
function wt(e, t) {
  var n = dt(e, t);
  if (n.state > xi) throw new Error('too late; already running');
  return n;
}
function dt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error('transition not found');
  return n;
}
function ox(e, t, n) {
  var r = e.__transition,
    o;
  (r[t] = n), (n.timer = Wh(i, 0, n.time));
  function i(a) {
    (n.state = vf), n.timer.restart(l, n.delay, n.time), n.delay <= a && l(a - n.delay);
  }
  function l(a) {
    var d, f, c, p;
    if (n.state !== vf) return u();
    for (d in r)
      if (((p = r[d]), p.name === n.name)) {
        if (p.state === xi) return yf(l);
        p.state === wf
          ? ((p.state = Si), p.timer.stop(), p.on.call('interrupt', e, e.__data__, p.index, p.group), delete r[d])
          : +d < t &&
            ((p.state = Si), p.timer.stop(), p.on.call('cancel', e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (
      (yf(function () {
        n.state === xi && ((n.state = wf), n.timer.restart(s, n.delay, n.time), s(a));
      }),
      (n.state = _u),
      n.on.call('start', e, e.__data__, n.index, n.group),
      n.state === _u)
    ) {
      for (n.state = xi, o = new Array((c = n.tween.length)), d = 0, f = -1; d < c; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = p);
      o.length = f + 1;
    }
  }
  function s(a) {
    for (
      var d = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), (n.state = ku), 1),
        f = -1,
        c = o.length;
      ++f < c;

    )
      o[f].call(e, d);
    n.state === ku && (n.on.call('end', e, e.__data__, n.index, n.group), u());
  }
  function u() {
    (n.state = Si), n.timer.stop(), delete r[t];
    for (var a in r) return;
    delete e.__transition;
  }
}
function Ei(e, t) {
  var n = e.__transition,
    r,
    o,
    i = !0,
    l;
  if (n) {
    t = t == null ? null : t + '';
    for (l in n) {
      if ((r = n[l]).name !== t) {
        i = !1;
        continue;
      }
      (o = r.state > _u && r.state < ku),
        (r.state = Si),
        r.timer.stop(),
        r.on.call(o ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
        delete n[l];
    }
    i && delete e.__transition;
  }
}
function ix(e) {
  return this.each(function () {
    Ei(this, e);
  });
}
function lx(e, t) {
  var n, r;
  return function () {
    var o = wt(this, e),
      i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var l = 0, s = r.length; l < s; ++l)
        if (r[l].name === t) {
          (r = r.slice()), r.splice(l, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function sx(e, t, n) {
  var r, o;
  if (typeof n != 'function') throw new Error();
  return function () {
    var i = wt(this, e),
      l = i.tween;
    if (l !== r) {
      o = (r = l).slice();
      for (
        var s = {
            name: t,
            value: n,
          },
          u = 0,
          a = o.length;
        u < a;
        ++u
      )
        if (o[u].name === t) {
          o[u] = s;
          break;
        }
      u === a && o.push(s);
    }
    i.tween = o;
  };
}
function ux(e, t) {
  var n = this._id;
  if (((e += ''), arguments.length < 2)) {
    for (var r = dt(this.node(), n).tween, o = 0, i = r.length, l; o < i; ++o)
      if ((l = r[o]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? lx : sx)(n, e, t));
}
function La(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var o = wt(this, r);
      (o.value || (o.value = {}))[t] = n.apply(this, arguments);
    }),
    function (o) {
      return dt(o, r).value[t];
    }
  );
}
function Xh(e, t) {
  var n;
  return (typeof t == 'number' ? jt : t instanceof ho ? pf : (n = ho(t)) ? ((t = n), pf) : Uw)(e, t);
}
function ax(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function cx(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function fx(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = this.getAttribute(e);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function dx(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function px(e, t, n) {
  var r, o, i;
  return function () {
    var l,
      s = n(this),
      u;
    return s == null
      ? void this.removeAttribute(e)
      : ((l = this.getAttribute(e)),
        (u = s + ''),
        l === u ? null : l === r && u === o ? i : ((o = u), (i = t((r = l), s))));
  };
}
function hx(e, t, n) {
  var r, o, i;
  return function () {
    var l,
      s = n(this),
      u;
    return s == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((l = this.getAttributeNS(e.space, e.local)),
        (u = s + ''),
        l === u ? null : l === r && u === o ? i : ((o = u), (i = t((r = l), s))));
  };
}
function gx(e, t) {
  var n = Sl(e),
    r = n === 'transform' ? Kw : Xh;
  return this.attrTween(
    e,
    typeof t == 'function'
      ? (n.local ? hx : px)(n, r, La(this, 'attr.' + e, t))
      : t == null
        ? (n.local ? cx : ax)(n)
        : (n.local ? dx : fx)(n, r, t),
  );
}
function mx(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function yx(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function vx(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && yx(e, i)), n;
  }
  return (o._value = t), o;
}
function wx(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && mx(e, i)), n;
  }
  return (o._value = t), o;
}
function xx(e, t) {
  var n = 'attr.' + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != 'function') throw new Error();
  var r = Sl(e);
  return this.tween(n, (r.local ? vx : wx)(r, t));
}
function Sx(e, t) {
  return function () {
    Ra(this, e).delay = +t.apply(this, arguments);
  };
}
function Ex(e, t) {
  return (
    (t = +t),
    function () {
      Ra(this, e).delay = t;
    }
  );
}
function _x(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == 'function' ? Sx : Ex)(t, e)) : dt(this.node(), t).delay;
}
function kx(e, t) {
  return function () {
    wt(this, e).duration = +t.apply(this, arguments);
  };
}
function Cx(e, t) {
  return (
    (t = +t),
    function () {
      wt(this, e).duration = t;
    }
  );
}
function Nx(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == 'function' ? kx : Cx)(t, e)) : dt(this.node(), t).duration;
}
function Mx(e, t) {
  if (typeof t != 'function') throw new Error();
  return function () {
    wt(this, e).ease = t;
  };
}
function Px(e) {
  var t = this._id;
  return arguments.length ? this.each(Mx(t, e)) : dt(this.node(), t).ease;
}
function Tx(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != 'function') throw new Error();
    wt(this, e).ease = n;
  };
}
function Ix(e) {
  if (typeof e != 'function') throw new Error();
  return this.each(Tx(this._id, e));
}
function zx(e) {
  typeof e != 'function' && (e = _h(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = []), u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new Rt(r, this._parents, this._name, this._id);
}
function Rx(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), l = new Array(r), s = 0;
    s < i;
    ++s
  )
    for (var u = t[s], a = n[s], d = u.length, f = (l[s] = new Array(d)), c, p = 0; p < d; ++p)
      (c = u[p] || a[p]) && (f[p] = c);
  for (; s < r; ++s) l[s] = t[s];
  return new Rt(l, this._parents, this._name, this._id);
}
function Lx(e) {
  return (e + '')
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf('.');
      return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
    });
}
function $x(e, t, n) {
  var r,
    o,
    i = Lx(t) ? Ra : wt;
  return function () {
    var l = i(this, e),
      s = l.on;
    s !== r && (o = (r = s).copy()).on(t, n), (l.on = o);
  };
}
function Dx(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dt(this.node(), n).on.on(e) : this.each($x(n, e, t));
}
function Ax(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Ox() {
  return this.on('end.remove', Ax(this._id));
}
function Fx(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = Pa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l)
    for (var s = r[l], u = s.length, a = (i[l] = new Array(u)), d, f, c = 0; c < u; ++c)
      (d = s[c]) &&
        (f = e.call(d, d.__data__, c, s)) &&
        ('__data__' in d && (f.__data__ = d.__data__), (a[c] = f), _l(a[c], t, n, c, a, dt(d, n)));
  return new Rt(i, this._parents, t, n);
}
function Vx(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = Eh(e));
  for (var r = this._groups, o = r.length, i = [], l = [], s = 0; s < o; ++s)
    for (var u = r[s], a = u.length, d, f = 0; f < a; ++f)
      if ((d = u[f])) {
        for (var c = e.call(d, d.__data__, f, u), p, y = dt(d, n), w = 0, S = c.length; w < S; ++w)
          (p = c[w]) && _l(p, t, n, w, c, y);
        i.push(c), l.push(d);
      }
  return new Rt(i, l, t, n);
}
var Hx = No.prototype.constructor;
function jx() {
  return new Hx(this._groups, this._parents);
}
function Bx(e, t) {
  var n, r, o;
  return function () {
    var i = ir(this, e),
      l = (this.style.removeProperty(e), ir(this, e));
    return i === l ? null : i === n && l === r ? o : (o = t((n = i), (r = l)));
  };
}
function Kh(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Ux(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = ir(this, e);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function Wx(e, t, n) {
  var r, o, i;
  return function () {
    var l = ir(this, e),
      s = n(this),
      u = s + '';
    return (
      s == null && (u = s = (this.style.removeProperty(e), ir(this, e))),
      l === u ? null : l === r && u === o ? i : ((o = u), (i = t((r = l), s)))
    );
  };
}
function Yx(e, t) {
  var n,
    r,
    o,
    i = 'style.' + t,
    l = 'end.' + i,
    s;
  return function () {
    var u = wt(this, e),
      a = u.on,
      d = u.value[i] == null ? s || (s = Kh(t)) : void 0;
    (a !== n || o !== d) && (r = (n = a).copy()).on(l, (o = d)), (u.on = r);
  };
}
function Xx(e, t, n) {
  var r = (e += '') == 'transform' ? Xw : Xh;
  return t == null
    ? this.styleTween(e, Bx(e, r)).on('end.style.' + e, Kh(e))
    : typeof t == 'function'
      ? this.styleTween(e, Wx(e, r, La(this, 'style.' + e, t))).each(Yx(this._id, e))
      : this.styleTween(e, Ux(e, r, t), n).on('end.style.' + e, null);
}
function Kx(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function bx(e, t, n) {
  var r, o;
  function i() {
    var l = t.apply(this, arguments);
    return l !== o && (r = (o = l) && Kx(e, l, n)), r;
  }
  return (i._value = t), i;
}
function Gx(e, t, n) {
  var r = 'style.' + (e += '');
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != 'function') throw new Error();
  return this.tween(r, bx(e, t, n ?? ''));
}
function Qx(e) {
  return function () {
    this.textContent = e;
  };
}
function Zx(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? '';
  };
}
function qx(e) {
  return this.tween('text', typeof e == 'function' ? Zx(La(this, 'text', e)) : Qx(e == null ? '' : e + ''));
}
function Jx(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function eS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Jx(o)), t;
  }
  return (r._value = e), r;
}
function tS(e) {
  var t = 'text';
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != 'function') throw new Error();
  return this.tween(t, eS(e));
}
function nS() {
  for (var e = this._name, t = this._id, n = bh(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a)
      if ((u = l[a])) {
        var d = dt(u, t);
        _l(u, e, n, a, l, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease,
        });
      }
  return new Rt(r, this._parents, e, n);
}
function rS() {
  var e,
    t,
    n = this,
    r = n._id,
    o = n.size();
  return new Promise(function (i, l) {
    var s = {
        value: l,
      },
      u = {
        value: function () {
          --o === 0 && i();
        },
      };
    n.each(function () {
      var a = wt(this, r),
        d = a.on;
      d !== e && ((t = (e = d).copy()), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(u)), (a.on = t);
    }),
      o === 0 && i();
  });
}
var oS = 0;
function Rt(e, t, n, r) {
  (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function bh() {
  return ++oS;
}
var xt = No.prototype;
Rt.prototype = {
  constructor: Rt,
  select: Fx,
  selectAll: Vx,
  selectChild: xt.selectChild,
  selectChildren: xt.selectChildren,
  filter: zx,
  merge: Rx,
  selection: jx,
  transition: nS,
  call: xt.call,
  nodes: xt.nodes,
  node: xt.node,
  size: xt.size,
  empty: xt.empty,
  each: xt.each,
  on: Dx,
  attr: gx,
  attrTween: xx,
  style: Xx,
  styleTween: Gx,
  text: qx,
  textTween: tS,
  remove: Ox,
  tween: ux,
  delay: _x,
  duration: Nx,
  ease: Px,
  easeVarying: Ix,
  end: rS,
  [Symbol.iterator]: xt[Symbol.iterator],
};
function iS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var lS = {
  time: null,
  delay: 0,
  duration: 250,
  ease: iS,
};
function sS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function uS(e) {
  var t, n;
  e instanceof Rt
    ? ((t = e._id), (e = e._name))
    : ((t = bh()), ((n = lS).time = za()), (e = e == null ? null : e + ''));
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a) (u = l[a]) && _l(u, e, t, a, l, n || sS(u, t));
  return new Rt(r, this._parents, e, t);
}
No.prototype.interrupt = ix;
No.prototype.transition = uS;
const ni = (e) => () => e;
function aS(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
  Object.defineProperties(this, {
    type: {
      value: e,
      enumerable: !0,
      configurable: !0,
    },
    sourceEvent: {
      value: t,
      enumerable: !0,
      configurable: !0,
    },
    target: {
      value: n,
      enumerable: !0,
      configurable: !0,
    },
    transform: {
      value: r,
      enumerable: !0,
      configurable: !0,
    },
    _: {
      value: o,
    },
  });
}
function Ct(e, t, n) {
  (this.k = e), (this.x = t), (this.y = n);
}
Ct.prototype = {
  constructor: Ct,
  scale: function (e) {
    return e === 1 ? this : new Ct(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0) ? this : new Ct(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
var kl = new Ct(1, 0, 0);
Gh.prototype = Ct.prototype;
function Gh(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return kl;
  return e.__zoom;
}
function ms(e) {
  e.stopImmediatePropagation();
}
function Tr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function cS(e) {
  return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function fS() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute('viewBox')
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function xf() {
  return this.__zoom || kl;
}
function dS(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function pS() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function hS(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    o = e.invertX(t[1][0]) - n[1][0],
    i = e.invertY(t[0][1]) - n[0][1],
    l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l),
  );
}
function Qh() {
  var e = cS,
    t = fS,
    n = hS,
    r = dS,
    o = pS,
    i = [0, 1 / 0],
    l = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    s = 250,
    u = Zw,
    a = xl('start', 'zoom', 'end'),
    d,
    f,
    c,
    p = 500,
    y = 150,
    w = 0,
    S = 10;
  function g(x) {
    x.property('__zoom', xf)
      .on('wheel.zoom', P, {
        passive: !1,
      })
      .on('mousedown.zoom', $)
      .on('dblclick.zoom', T)
      .filter(o)
      .on('touchstart.zoom', V)
      .on('touchmove.zoom', F)
      .on('touchend.zoom touchcancel.zoom', O)
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  (g.transform = function (x, I, k, L) {
    var E = x.selection ? x.selection() : x;
    E.property('__zoom', xf),
      x !== E
        ? C(x, I, k, L)
        : E.interrupt().each(function () {
            M(this, arguments)
              .event(L)
              .start()
              .zoom(null, typeof I == 'function' ? I.apply(this, arguments) : I)
              .end();
          });
  }),
    (g.scaleBy = function (x, I, k, L) {
      g.scaleTo(
        x,
        function () {
          var E = this.__zoom.k,
            N = typeof I == 'function' ? I.apply(this, arguments) : I;
          return E * N;
        },
        k,
        L,
      );
    }),
    (g.scaleTo = function (x, I, k, L) {
      g.transform(
        x,
        function () {
          var E = t.apply(this, arguments),
            N = this.__zoom,
            z = k == null ? v(E) : typeof k == 'function' ? k.apply(this, arguments) : k,
            A = N.invert(z),
            j = typeof I == 'function' ? I.apply(this, arguments) : I;
          return n(h(m(N, j), z, A), E, l);
        },
        k,
        L,
      );
    }),
    (g.translateBy = function (x, I, k, L) {
      g.transform(
        x,
        function () {
          return n(
            this.__zoom.translate(
              typeof I == 'function' ? I.apply(this, arguments) : I,
              typeof k == 'function' ? k.apply(this, arguments) : k,
            ),
            t.apply(this, arguments),
            l,
          );
        },
        null,
        L,
      );
    }),
    (g.translateTo = function (x, I, k, L, E) {
      g.transform(
        x,
        function () {
          var N = t.apply(this, arguments),
            z = this.__zoom,
            A = L == null ? v(N) : typeof L == 'function' ? L.apply(this, arguments) : L;
          return n(
            kl
              .translate(A[0], A[1])
              .scale(z.k)
              .translate(
                typeof I == 'function' ? -I.apply(this, arguments) : -I,
                typeof k == 'function' ? -k.apply(this, arguments) : -k,
              ),
            N,
            l,
          );
        },
        L,
        E,
      );
    });
  function m(x, I) {
    return (I = Math.max(i[0], Math.min(i[1], I))), I === x.k ? x : new Ct(I, x.x, x.y);
  }
  function h(x, I, k) {
    var L = I[0] - k[0] * x.k,
      E = I[1] - k[1] * x.k;
    return L === x.x && E === x.y ? x : new Ct(x.k, L, E);
  }
  function v(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function C(x, I, k, L) {
    x.on('start.zoom', function () {
      M(this, arguments).event(L).start();
    })
      .on('interrupt.zoom end.zoom', function () {
        M(this, arguments).event(L).end();
      })
      .tween('zoom', function () {
        var E = this,
          N = arguments,
          z = M(E, N).event(L),
          A = t.apply(E, N),
          j = k == null ? v(A) : typeof k == 'function' ? k.apply(E, N) : k,
          K = Math.max(A[1][0] - A[0][0], A[1][1] - A[0][1]),
          U = E.__zoom,
          X = typeof I == 'function' ? I.apply(E, N) : I,
          Y = u(U.invert(j).concat(K / U.k), X.invert(j).concat(K / X.k));
        return function (B) {
          if (B === 1) B = X;
          else {
            var G = Y(B),
              Z = K / G[2];
            B = new Ct(Z, j[0] - G[0] * Z, j[1] - G[1] * Z);
          }
          z.zoom(null, B);
        };
      });
  }
  function M(x, I, k) {
    return (!k && x.__zooming) || new _(x, I);
  }
  function _(x, I) {
    (this.that = x),
      (this.args = I),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(x, I)),
      (this.taps = 0);
  }
  _.prototype = {
    event: function (x) {
      return x && (this.sourceEvent = x), this;
    },
    start: function () {
      return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
    },
    zoom: function (x, I) {
      return (
        this.mouse && x !== 'mouse' && (this.mouse[1] = I.invert(this.mouse[0])),
        this.touch0 && x !== 'touch' && (this.touch0[1] = I.invert(this.touch0[0])),
        this.touch1 && x !== 'touch' && (this.touch1[1] = I.invert(this.touch1[0])),
        (this.that.__zoom = I),
        this.emit('zoom'),
        this
      );
    },
    end: function () {
      return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
    },
    emit: function (x) {
      var I = Be(this.that).datum();
      a.call(
        x,
        this.that,
        new aS(x, {
          sourceEvent: this.sourceEvent,
          target: g,
          type: x,
          transform: this.that.__zoom,
          dispatch: a,
        }),
        I,
      );
    },
  };
  function P(x, ...I) {
    if (!e.apply(this, arguments)) return;
    var k = M(this, I).event(x),
      L = this.__zoom,
      E = Math.max(i[0], Math.min(i[1], L.k * Math.pow(2, r.apply(this, arguments)))),
      N = it(x);
    if (k.wheel)
      (k.mouse[0][0] !== N[0] || k.mouse[0][1] !== N[1]) && (k.mouse[1] = L.invert((k.mouse[0] = N))),
        clearTimeout(k.wheel);
    else {
      if (L.k === E) return;
      (k.mouse = [N, L.invert(N)]), Ei(this), k.start();
    }
    Tr(x), (k.wheel = setTimeout(z, y)), k.zoom('mouse', n(h(m(L, E), k.mouse[0], k.mouse[1]), k.extent, l));
    function z() {
      (k.wheel = null), k.end();
    }
  }
  function $(x, ...I) {
    if (c || !e.apply(this, arguments)) return;
    var k = x.currentTarget,
      L = M(this, I, !0).event(x),
      E = Be(x.view).on('mousemove.zoom', j, !0).on('mouseup.zoom', K, !0),
      N = it(x, k),
      z = x.clientX,
      A = x.clientY;
    Lh(x.view), ms(x), (L.mouse = [N, this.__zoom.invert(N)]), Ei(this), L.start();
    function j(U) {
      if ((Tr(U), !L.moved)) {
        var X = U.clientX - z,
          Y = U.clientY - A;
        L.moved = X * X + Y * Y > w;
      }
      L.event(U).zoom('mouse', n(h(L.that.__zoom, (L.mouse[0] = it(U, k)), L.mouse[1]), L.extent, l));
    }
    function K(U) {
      E.on('mousemove.zoom mouseup.zoom', null), $h(U.view, L.moved), Tr(U), L.event(U).end();
    }
  }
  function T(x, ...I) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom,
        L = it(x.changedTouches ? x.changedTouches[0] : x, this),
        E = k.invert(L),
        N = k.k * (x.shiftKey ? 0.5 : 2),
        z = n(h(m(k, N), L, E), t.apply(this, I), l);
      Tr(x), s > 0 ? Be(this).transition().duration(s).call(C, z, L, x) : Be(this).call(g.transform, z, L, x);
    }
  }
  function V(x, ...I) {
    if (e.apply(this, arguments)) {
      var k = x.touches,
        L = k.length,
        E = M(this, I, x.changedTouches.length === L).event(x),
        N,
        z,
        A,
        j;
      for (ms(x), z = 0; z < L; ++z)
        (A = k[z]),
          (j = it(A, this)),
          (j = [j, this.__zoom.invert(j), A.identifier]),
          E.touch0
            ? !E.touch1 && E.touch0[2] !== j[2] && ((E.touch1 = j), (E.taps = 0))
            : ((E.touch0 = j), (N = !0), (E.taps = 1 + !!d));
      d && (d = clearTimeout(d)),
        N &&
          (E.taps < 2 &&
            ((f = j[0]),
            (d = setTimeout(function () {
              d = null;
            }, p))),
          Ei(this),
          E.start());
    }
  }
  function F(x, ...I) {
    if (this.__zooming) {
      var k = M(this, I).event(x),
        L = x.changedTouches,
        E = L.length,
        N,
        z,
        A,
        j;
      for (Tr(x), N = 0; N < E; ++N)
        (z = L[N]),
          (A = it(z, this)),
          k.touch0 && k.touch0[2] === z.identifier
            ? (k.touch0[0] = A)
            : k.touch1 && k.touch1[2] === z.identifier && (k.touch1[0] = A);
      if (((z = k.that.__zoom), k.touch1)) {
        var K = k.touch0[0],
          U = k.touch0[1],
          X = k.touch1[0],
          Y = k.touch1[1],
          B = (B = X[0] - K[0]) * B + (B = X[1] - K[1]) * B,
          G = (G = Y[0] - U[0]) * G + (G = Y[1] - U[1]) * G;
        (z = m(z, Math.sqrt(B / G))),
          (A = [(K[0] + X[0]) / 2, (K[1] + X[1]) / 2]),
          (j = [(U[0] + Y[0]) / 2, (U[1] + Y[1]) / 2]);
      } else if (k.touch0) (A = k.touch0[0]), (j = k.touch0[1]);
      else return;
      k.zoom('touch', n(h(z, A, j), k.extent, l));
    }
  }
  function O(x, ...I) {
    if (this.__zooming) {
      var k = M(this, I).event(x),
        L = x.changedTouches,
        E = L.length,
        N,
        z;
      for (
        ms(x),
          c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, p),
          N = 0;
        N < E;
        ++N
      )
        (z = L[N]),
          k.touch0 && k.touch0[2] === z.identifier
            ? delete k.touch0
            : k.touch1 && k.touch1[2] === z.identifier && delete k.touch1;
      if ((k.touch1 && !k.touch0 && ((k.touch0 = k.touch1), delete k.touch1), k.touch0))
        k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if ((k.end(), k.taps === 2 && ((z = it(z, this)), Math.hypot(f[0] - z[0], f[1] - z[1]) < S))) {
        var A = Be(this).on('dblclick.zoom');
        A && A.apply(this, arguments);
      }
    }
  }
  return (
    (g.wheelDelta = function (x) {
      return arguments.length ? ((r = typeof x == 'function' ? x : ni(+x)), g) : r;
    }),
    (g.filter = function (x) {
      return arguments.length ? ((e = typeof x == 'function' ? x : ni(!!x)), g) : e;
    }),
    (g.touchable = function (x) {
      return arguments.length ? ((o = typeof x == 'function' ? x : ni(!!x)), g) : o;
    }),
    (g.extent = function (x) {
      return arguments.length
        ? ((t =
            typeof x == 'function'
              ? x
              : ni([
                  [+x[0][0], +x[0][1]],
                  [+x[1][0], +x[1][1]],
                ])),
          g)
        : t;
    }),
    (g.scaleExtent = function (x) {
      return arguments.length ? ((i[0] = +x[0]), (i[1] = +x[1]), g) : [i[0], i[1]];
    }),
    (g.translateExtent = function (x) {
      return arguments.length
        ? ((l[0][0] = +x[0][0]), (l[1][0] = +x[1][0]), (l[0][1] = +x[0][1]), (l[1][1] = +x[1][1]), g)
        : [
            [l[0][0], l[0][1]],
            [l[1][0], l[1][1]],
          ];
    }),
    (g.constrain = function (x) {
      return arguments.length ? ((n = x), g) : n;
    }),
    (g.duration = function (x) {
      return arguments.length ? ((s = +x), g) : s;
    }),
    (g.interpolate = function (x) {
      return arguments.length ? ((u = x), g) : u;
    }),
    (g.on = function () {
      var x = a.on.apply(a, arguments);
      return x === a ? g : x;
    }),
    (g.clickDistance = function (x) {
      return arguments.length ? ((w = (x = +x) * x), g) : Math.sqrt(w);
    }),
    (g.tapDistance = function (x) {
      return arguments.length ? ((S = +x), g) : S;
    }),
    g
  );
}
const $t = {
    error001: () =>
      '[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001',
    error002: () =>
      "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
    error004: () => 'The React Flow parent container needs a width and a height to render the graph.',
    error005: () => 'Only child nodes can use a parent extent.',
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
      `Couldn't create edge for ${e} handle id: "${e === 'source' ? n : r}", edge id: ${t}.`,
    error010: () => 'Handle: No node id found. Make sure to only use a Handle inside a custom Node.',
    error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) =>
      `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (e = 'react') =>
      `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () =>
      'useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.',
  },
  mo = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
  Zh = ['Enter', ' ', 'Escape'];
var sr;
(function (e) {
  (e.Strict = 'strict'), (e.Loose = 'loose');
})(sr || (sr = {}));
var wn;
(function (e) {
  (e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
})(wn || (wn = {}));
var yo;
(function (e) {
  (e.Partial = 'partial'), (e.Full = 'full');
})(yo || (yo = {}));
const qh = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
};
var Wt;
(function (e) {
  (e.Bezier = 'default'),
    (e.Straight = 'straight'),
    (e.Step = 'step'),
    (e.SmoothStep = 'smoothstep'),
    (e.SimpleBezier = 'simplebezier');
})(Wt || (Wt = {}));
var Ji;
(function (e) {
  (e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
})(Ji || (Ji = {}));
var b;
(function (e) {
  (e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom');
})(b || (b = {}));
const Sf = {
  [b.Left]: b.Right,
  [b.Right]: b.Left,
  [b.Top]: b.Bottom,
  [b.Bottom]: b.Top,
};
function Jh(e) {
  return e === null ? null : e ? 'valid' : 'invalid';
}
const eg = (e) => 'id' in e && 'source' in e && 'target' in e,
  gS = (e) => 'id' in e && 'position' in e && !('source' in e) && !('target' in e),
  $a = (e) => 'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
  Po = (e, t = [0, 0]) => {
    const { width: n, height: r } = Dt(e),
      o = e.origin ?? t,
      i = n * o[0],
      l = r * o[1];
    return {
      x: e.position.x - i,
      y: e.position.y - l,
    };
  },
  mS = (
    e,
    t = {
      nodeOrigin: [0, 0],
      nodeLookup: void 0,
    },
  ) => {
    if (e.length === 0)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    const n = e.reduce(
      (r, o) => {
        const i = typeof o == 'string';
        let l = !t.nodeLookup && !i ? o : void 0;
        t.nodeLookup && (l = i ? t.nodeLookup.get(o) : $a(o) ? o : t.nodeLookup.get(o.id));
        const s = l
          ? el(l, t.nodeOrigin)
          : {
              x: 0,
              y: 0,
              x2: 0,
              y2: 0,
            };
        return Cl(r, s);
      },
      {
        x: 1 / 0,
        y: 1 / 0,
        x2: -1 / 0,
        y2: -1 / 0,
      },
    );
    return Nl(n);
  },
  To = (e, t = {}) => {
    if (e.size === 0)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    let n = {
      x: 1 / 0,
      y: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
    };
    return (
      e.forEach((r) => {
        if (t.filter === void 0 || t.filter(r)) {
          const o = el(r);
          n = Cl(n, o);
        }
      }),
      Nl(n)
    );
  },
  tg = (e, t, [n, r, o] = [0, 0, 1], i = !1, l = !1) => {
    const s = {
        ...Io(t, [n, r, o]),
        width: t.width / o,
        height: t.height / o,
      },
      u = [];
    for (const a of e.values()) {
      const { measured: d, selectable: f = !0, hidden: c = !1 } = a;
      if ((l && !f) || c) continue;
      const p = d.width ?? a.width ?? a.initialWidth ?? null,
        y = d.height ?? a.height ?? a.initialHeight ?? null,
        w = vo(s, ar(a)),
        S = (p ?? 0) * (y ?? 0),
        g = i && w > 0;
      (!a.internals.handleBounds || g || w >= S || a.dragging) && u.push(a);
    }
    return u;
  },
  yS = (e, t) => {
    const n = new Set();
    return (
      e.forEach((r) => {
        n.add(r.id);
      }),
      t.filter((r) => n.has(r.source) || n.has(r.target))
    );
  };
function Cu(e, t) {
  const n = new Map(),
    r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return (
    e.forEach((o) => {
      o.measured.width &&
        o.measured.height &&
        ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) &&
        (!r || r.has(o.id)) &&
        n.set(o.id, o);
    }),
    n
  );
}
async function Nu({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, l) {
  if (e.size === 0) return Promise.resolve(!1);
  const s = To(e),
    u = Da(
      s,
      t,
      n,
      (l == null ? void 0 : l.minZoom) ?? o,
      (l == null ? void 0 : l.maxZoom) ?? i,
      (l == null ? void 0 : l.padding) ?? 0.1,
    );
  return (
    await r.setViewport(u, {
      duration: l == null ? void 0 : l.duration,
    }),
    Promise.resolve(!0)
  );
}
function ng({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const l = n.get(e),
    s = l.parentId ? n.get(l.parentId) : void 0,
    { x: u, y: a } = s
      ? s.internals.positionAbsolute
      : {
          x: 0,
          y: 0,
        },
    d = l.origin ?? r;
  let f = o;
  if (l.extent === 'parent' && !l.expandParent)
    if (!s) i == null || i('005', $t.error005());
    else {
      const p = s.measured.width,
        y = s.measured.height;
      p &&
        y &&
        (f = [
          [u, a],
          [u + p, a + y],
        ]);
    }
  else
    s &&
      cr(l.extent) &&
      (f = [
        [l.extent[0][0] + u, l.extent[0][1] + a],
        [l.extent[1][0] + u, l.extent[1][1] + a],
      ]);
  const c = cr(f) ? Nn(t, f, l.measured) : t;
  return {
    position: {
      x: c.x - u + l.measured.width * d[0],
      y: c.y - a + l.measured.height * d[1],
    },
    positionAbsolute: c,
  };
}
async function vS({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((c) => c.id)),
    l = [];
  for (const c of n) {
    if (c.deletable === !1) continue;
    const p = i.has(c.id),
      y = !p && c.parentId && l.find((w) => w.id === c.parentId);
    (p || y) && l.push(c);
  }
  const s = new Set(t.map((c) => c.id)),
    u = r.filter((c) => c.deletable !== !1),
    d = yS(l, u);
  for (const c of u) s.has(c.id) && !d.find((y) => y.id === c.id) && d.push(c);
  if (!o)
    return {
      edges: d,
      nodes: l,
    };
  const f = await o({
    nodes: l,
    edges: d,
  });
  return typeof f == 'boolean'
    ? f
      ? {
          edges: d,
          nodes: l,
        }
      : {
          edges: [],
          nodes: [],
        }
    : f;
}
const ur = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
  Nn = (
    e = {
      x: 0,
      y: 0,
    },
    t,
    n,
  ) => ({
    x: ur(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
    y: ur(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
  });
function rg(e, t, n) {
  const { width: r, height: o } = Dt(n),
    { x: i, y: l } = n.internals.positionAbsolute;
  return Nn(
    e,
    [
      [i, l],
      [i + r, l + o],
    ],
    t,
  );
}
const Ef = (e, t, n) => (e < t ? ur(Math.abs(e - t), 1, t) / t : e > n ? -ur(Math.abs(e - n), 1, t) / t : 0),
  og = (e, t, n = 15, r = 40) => {
    const o = Ef(e.x, r, t.width - r) * n,
      i = Ef(e.y, r, t.height - r) * n;
    return [o, i];
  },
  Cl = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  Mu = ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    x2: e + n,
    y2: t + r,
  }),
  Nl = ({ x: e, y: t, x2: n, y2: r }) => ({
    x: e,
    y: t,
    width: n - e,
    height: r - t,
  }),
  ar = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = $a(e) ? e.internals.positionAbsolute : Po(e, t);
    return {
      x: n,
      y: r,
      width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
      height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0,
    };
  },
  el = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = $a(e) ? e.internals.positionAbsolute : Po(e, t);
    return {
      x: n,
      y: r,
      x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
      y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0),
    };
  },
  ig = (e, t) => Nl(Cl(Mu(e), Mu(t))),
  vo = (e, t) => {
    const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
      r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
    return Math.ceil(n * r);
  },
  _f = (e) => ut(e.width) && ut(e.height) && ut(e.x) && ut(e.y),
  ut = (e) => !isNaN(e) && isFinite(e),
  wS = (e, t) => {},
  Ml = (e, t = [1, 1]) => ({
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1]),
  }),
  Io = ({ x: e, y: t }, [n, r, o], i = !1, l = [1, 1]) => {
    const s = {
      x: (e - n) / o,
      y: (t - r) / o,
    };
    return i ? Ml(s, l) : s;
  },
  lg = ({ x: e, y: t }, [n, r, o]) => ({
    x: e * o + n,
    y: t * o + r,
  }),
  Da = (e, t, n, r, o, i) => {
    const l = t / (e.width * (1 + i)),
      s = n / (e.height * (1 + i)),
      u = Math.min(l, s),
      a = ur(u, r, o),
      d = e.x + e.width / 2,
      f = e.y + e.height / 2,
      c = t / 2 - d * a,
      p = n / 2 - f * a;
    return {
      x: c,
      y: p,
      zoom: a,
    };
  },
  tl = () => {
    var e;
    return (
      typeof navigator < 'u' &&
      ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf('Mac')) >= 0
    );
  };
function cr(e) {
  return e !== void 0 && e !== 'parent';
}
function Dt(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0,
  };
}
function sg(e) {
  var t, n;
  return (
    (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
    (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
  );
}
function ug(
  e,
  t = {
    width: 0,
    height: 0,
  },
  n,
  r,
  o,
) {
  const i = {
      ...e,
    },
    l = r.get(n);
  if (l) {
    const s = l.origin || o;
    (i.x += l.internals.positionAbsolute.x - (t.width ?? 0) * s[0]),
      (i.y += l.internals.positionAbsolute.y - (t.height ?? 0) * s[1]);
  }
  return i;
}
function kf(e, t) {
  if (e.size !== t.size) return !1;
  for (const n of e) if (!t.has(n)) return !1;
  return !0;
}
function Yr(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: l } = Mt(e),
    s = Io(
      {
        x: i - ((o == null ? void 0 : o.left) ?? 0),
        y: l - ((o == null ? void 0 : o.top) ?? 0),
      },
      r,
    ),
    { x: u, y: a } = n ? Ml(s, t) : s;
  return {
    xSnapped: u,
    ySnapped: a,
    ...s,
  };
}
const Pl = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight,
  }),
  ag = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
      (window == null ? void 0 : window.document)
    );
  },
  xS = ['INPUT', 'SELECT', 'TEXTAREA'];
function Pu(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1
    ? !1
    : xS.includes(t.nodeName) || t.hasAttribute('contenteditable') || !!t.closest('.nokey');
}
const cg = (e) => 'clientX' in e,
  Mt = (e, t) => {
    var i, l;
    const n = cg(e),
      r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX,
      o = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
    return {
      x: r - ((t == null ? void 0 : t.left) ?? 0),
      y: o - ((t == null ? void 0 : t.top) ?? 0),
    };
  },
  Cf = (e, t, n, r, o) => {
    const i = t.querySelectorAll(`.${e}`);
    return !i || !i.length
      ? null
      : Array.from(i).map((l) => {
          const s = l.getBoundingClientRect();
          return {
            id: l.getAttribute('data-handleid'),
            type: e,
            nodeId: o,
            position: l.getAttribute('data-handlepos'),
            x: (s.left - n.left) / r,
            y: (s.top - n.top) / r,
            ...Pl(l),
          };
        });
  };
function fg({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: i,
  targetControlX: l,
  targetControlY: s,
}) {
  const u = e * 0.125 + o * 0.375 + l * 0.375 + n * 0.125,
    a = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125,
    d = Math.abs(u - e),
    f = Math.abs(a - t);
  return [u, a, d, f];
}
function ri(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Nf({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case b.Left:
      return [t - ri(t - r, i), n];
    case b.Right:
      return [t + ri(r - t, i), n];
    case b.Top:
      return [t, n - ri(n - o, i)];
    case b.Bottom:
      return [t, n + ri(o - n, i)];
  }
}
function dg({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = b.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = b.Top,
  curvature: l = 0.25,
}) {
  const [s, u] = Nf({
      pos: n,
      x1: e,
      y1: t,
      x2: r,
      y2: o,
      c: l,
    }),
    [a, d] = Nf({
      pos: i,
      x1: r,
      y1: o,
      x2: e,
      y2: t,
      c: l,
    }),
    [f, c, p, y] = fg({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: s,
      sourceControlY: u,
      targetControlX: a,
      targetControlY: d,
    });
  return [`M${e},${t} C${s},${u} ${a},${d} ${r},${o}`, f, c, p, y];
}
function pg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2,
    i = n < e ? n + o : n - o,
    l = Math.abs(r - t) / 2,
    s = r < t ? r + l : r - l;
  return [i, s, o, l];
}
function SS({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o) return r;
  const i = n || t.selected || e.selected,
    l = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? l : 0);
}
function ES({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Cl(el(e), el(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const l = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2],
  };
  return vo(l, Nl(i)) > 0;
}
const _S = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ''}-${n}${r || ''}`,
  kS = (e, t) =>
    t.some(
      (n) =>
        n.source === e.source &&
        n.target === e.target &&
        (n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
        (n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle)),
    ),
  hg = (e, t) => {
    if (!e.source || !e.target) return t;
    let n;
    return (
      eg(e)
        ? (n = {
            ...e,
          })
        : (n = {
            ...e,
            id: _S(e),
          }),
      kS(n, t)
        ? t
        : (n.sourceHandle === null && delete n.sourceHandle,
          n.targetHandle === null && delete n.targetHandle,
          t.concat(n))
    );
  };
function gg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, l, s] = pg({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, l, s];
}
const Mf = {
    [b.Left]: {
      x: -1,
      y: 0,
    },
    [b.Right]: {
      x: 1,
      y: 0,
    },
    [b.Top]: {
      x: 0,
      y: -1,
    },
    [b.Bottom]: {
      x: 0,
      y: 1,
    },
  },
  CS = ({ source: e, sourcePosition: t = b.Bottom, target: n }) =>
    t === b.Left || t === b.Right
      ? e.x < n.x
        ? {
            x: 1,
            y: 0,
          }
        : {
            x: -1,
            y: 0,
          }
      : e.y < n.y
        ? {
            x: 0,
            y: 1,
          }
        : {
            x: 0,
            y: -1,
          },
  Pf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function NS({ source: e, sourcePosition: t = b.Bottom, target: n, targetPosition: r = b.Top, center: o, offset: i }) {
  const l = Mf[t],
    s = Mf[r],
    u = {
      x: e.x + l.x * i,
      y: e.y + l.y * i,
    },
    a = {
      x: n.x + s.x * i,
      y: n.y + s.y * i,
    },
    d = CS({
      source: u,
      sourcePosition: t,
      target: a,
    }),
    f = d.x !== 0 ? 'x' : 'y',
    c = d[f];
  let p = [],
    y,
    w;
  const S = {
      x: 0,
      y: 0,
    },
    g = {
      x: 0,
      y: 0,
    },
    [m, h, v, C] = pg({
      sourceX: e.x,
      sourceY: e.y,
      targetX: n.x,
      targetY: n.y,
    });
  if (l[f] * s[f] === -1) {
    (y = o.x ?? m), (w = o.y ?? h);
    const _ = [
        {
          x: y,
          y: u.y,
        },
        {
          x: y,
          y: a.y,
        },
      ],
      P = [
        {
          x: u.x,
          y: w,
        },
        {
          x: a.x,
          y: w,
        },
      ];
    l[f] === c ? (p = f === 'x' ? _ : P) : (p = f === 'x' ? P : _);
  } else {
    const _ = [
        {
          x: u.x,
          y: a.y,
        },
      ],
      P = [
        {
          x: a.x,
          y: u.y,
        },
      ];
    if ((f === 'x' ? (p = l.x === c ? P : _) : (p = l.y === c ? _ : P), t === r)) {
      const O = Math.abs(e[f] - n[f]);
      if (O <= i) {
        const x = Math.min(i - 1, i - O);
        l[f] === c ? (S[f] = (u[f] > e[f] ? -1 : 1) * x) : (g[f] = (a[f] > n[f] ? -1 : 1) * x);
      }
    }
    if (t !== r) {
      const O = f === 'x' ? 'y' : 'x',
        x = l[f] === s[O],
        I = u[O] > a[O],
        k = u[O] < a[O];
      ((l[f] === 1 && ((!x && I) || (x && k))) || (l[f] !== 1 && ((!x && k) || (x && I)))) && (p = f === 'x' ? _ : P);
    }
    const $ = {
        x: u.x + S.x,
        y: u.y + S.y,
      },
      T = {
        x: a.x + g.x,
        y: a.y + g.y,
      },
      V = Math.max(Math.abs($.x - p[0].x), Math.abs(T.x - p[0].x)),
      F = Math.max(Math.abs($.y - p[0].y), Math.abs(T.y - p[0].y));
    V >= F ? ((y = ($.x + T.x) / 2), (w = p[0].y)) : ((y = p[0].x), (w = ($.y + T.y) / 2));
  }
  return [
    [
      e,
      {
        x: u.x + S.x,
        y: u.y + S.y,
      },
      ...p,
      {
        x: a.x + g.x,
        y: a.y + g.y,
      },
      n,
    ],
    y,
    w,
    v,
    C,
  ];
}
function MS(e, t, n, r) {
  const o = Math.min(Pf(e, t) / 2, Pf(t, n) / 2, r),
    { x: i, y: l } = t;
  if ((e.x === i && i === n.x) || (e.y === l && l === n.y)) return `L${i} ${l}`;
  if (e.y === l) {
    const a = e.x < n.x ? -1 : 1,
      d = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${l}Q ${i},${l} ${i},${l + o * d}`;
  }
  const s = e.x < n.x ? 1 : -1,
    u = e.y < n.y ? -1 : 1;
  return `L ${i},${l + o * u}Q ${i},${l} ${i + o * s},${l}`;
}
function Tu({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = b.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = b.Top,
  borderRadius: l = 5,
  centerX: s,
  centerY: u,
  offset: a = 20,
}) {
  const [d, f, c, p, y] = NS({
    source: {
      x: e,
      y: t,
    },
    sourcePosition: n,
    target: {
      x: r,
      y: o,
    },
    targetPosition: i,
    center: {
      x: s,
      y: u,
    },
    offset: a,
  });
  return [
    d.reduce((S, g, m) => {
      let h = '';
      return (
        m > 0 && m < d.length - 1 ? (h = MS(d[m - 1], g, d[m + 1], l)) : (h = `${m === 0 ? 'M' : 'L'}${g.x} ${g.y}`),
        (S += h),
        S
      );
    }, ''),
    f,
    c,
    p,
    y,
  ];
}
function Tf(e) {
  var t;
  return (
    e &&
    !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function PS(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Tf(t) || !Tf(n)) return null;
  const r = t.internals.handleBounds || If(t.handles),
    o = n.internals.handleBounds || If(n.handles),
    i = zf((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
    l = zf(
      e.connectionMode === sr.Strict
        ? ((o == null ? void 0 : o.target) ?? [])
        : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
      e.targetHandle,
    );
  if (!i || !l)
    return (
      (f = e.onError) == null ||
        f.call(
          e,
          '008',
          $t.error008(i ? 'target' : 'source', {
            id: e.id,
            sourceHandle: e.sourceHandle,
            targetHandle: e.targetHandle,
          }),
        ),
      null
    );
  const s = (i == null ? void 0 : i.position) || b.Bottom,
    u = (l == null ? void 0 : l.position) || b.Top,
    a = wo(t, i, s),
    d = wo(n, l, u);
  return {
    sourceX: a.x,
    sourceY: a.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: s,
    targetPosition: u,
  };
}
function If(e) {
  if (!e) return null;
  const t = [],
    n = [];
  for (const r of e)
    (r.width = r.width ?? 1),
      (r.height = r.height ?? 1),
      r.type === 'source' ? t.push(r) : r.type === 'target' && n.push(r);
  return {
    source: t,
    target: n,
  };
}
function wo(e, t, n = b.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
    i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
    { width: l, height: s } = t ?? Dt(e);
  if (r)
    return {
      x: o + l / 2,
      y: i + s / 2,
    };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case b.Top:
      return {
        x: o + l / 2,
        y: i,
      };
    case b.Right:
      return {
        x: o + l,
        y: i + s / 2,
      };
    case b.Bottom:
      return {
        x: o + l / 2,
        y: i + s,
      };
    case b.Left:
      return {
        x: o,
        y: i + s / 2,
      };
  }
}
function zf(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Iu(e, t) {
  return e
    ? typeof e == 'string'
      ? e
      : `${t ? `${t}__` : ''}${Object.keys(e)
          .sort()
          .map((r) => `${r}=${e[r]}`)
          .join('&')}`
    : '';
}
function TS(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = new Set();
  return e
    .reduce(
      (l, s) => (
        [s.markerStart || r, s.markerEnd || o].forEach((u) => {
          if (u && typeof u == 'object') {
            const a = Iu(u, t);
            i.has(a) ||
              (l.push({
                id: a,
                color: u.color || n,
                ...u,
              }),
              i.add(a));
          }
        }),
        l
      ),
      [],
    )
    .sort((l, s) => l.id.localeCompare(s.id));
}
const Aa = {
    nodeOrigin: [0, 0],
    nodeExtent: mo,
    elevateNodesOnSelect: !0,
    defaults: {},
  },
  IS = {
    ...Aa,
    checkEquality: !0,
  };
function Oa(e, t) {
  const n = {
    ...e,
  };
  for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function zS(e, t, n) {
  const r = Oa(Aa, n);
  for (const o of e.values())
    if (o.parentId) Fa(o, e, t, r);
    else {
      const i = Po(o, r.nodeOrigin),
        l = cr(o.extent) ? o.extent : r.nodeExtent,
        s = Nn(i, l, Dt(o));
      o.internals.positionAbsolute = s;
    }
}
function zu(e, t, n, r) {
  var s, u;
  const o = Oa(IS, r),
    i = new Map(t),
    l = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const a of e) {
    let d = i.get(a.id);
    if (o.checkEquality && a === (d == null ? void 0 : d.internals.userNode)) t.set(a.id, d);
    else {
      const f = Po(a, o.nodeOrigin),
        c = cr(a.extent) ? a.extent : o.nodeExtent,
        p = Nn(f, c, Dt(a));
      (d = {
        ...o.defaults,
        ...a,
        measured: {
          width: (s = a.measured) == null ? void 0 : s.width,
          height: (u = a.measured) == null ? void 0 : u.height,
        },
        internals: {
          positionAbsolute: p,
          handleBounds: a.measured ? (d == null ? void 0 : d.internals.handleBounds) : void 0,
          z: mg(a, l),
          userNode: a,
        },
      }),
        t.set(a.id, d);
    }
    a.parentId && Fa(d, t, n, r);
  }
}
function RS(e, t) {
  if (!e.parentId) return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function Fa(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: l } = Oa(Aa, r),
    s = e.parentId,
    u = t.get(s);
  if (!u) {
    console.warn(
      `Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  RS(e, n);
  const a = o ? 1e3 : 0,
    { x: d, y: f, z: c } = LS(e, u, i, l, a),
    { positionAbsolute: p } = e.internals,
    y = d !== p.x || f !== p.y;
  (y || c !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: y
          ? {
              x: d,
              y: f,
            }
          : p,
        z: c,
      },
    });
}
function mg(e, t) {
  return (ut(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function LS(e, t, n, r, o) {
  const { x: i, y: l } = t.internals.positionAbsolute,
    s = Dt(e),
    u = Po(e, n),
    a = cr(e.extent) ? Nn(u, e.extent, s) : u;
  let d = Nn(
    {
      x: i + a.x,
      y: l + a.y,
    },
    r,
    s,
  );
  e.extent === 'parent' && (d = rg(d, s, t));
  const f = mg(e, o),
    c = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: c > f ? c : f,
  };
}
function Va(e, t, n, r = [0, 0]) {
  var l;
  const o = [],
    i = new Map();
  for (const s of e) {
    const u = t.get(s.parentId);
    if (!u) continue;
    const a = ((l = i.get(s.parentId)) == null ? void 0 : l.expandedRect) ?? ar(u),
      d = ig(a, s.rect);
    i.set(s.parentId, {
      expandedRect: d,
      parent: u,
    });
  }
  return (
    i.size > 0 &&
      i.forEach(({ expandedRect: s, parent: u }, a) => {
        var h;
        const d = u.internals.positionAbsolute,
          f = Dt(u),
          c = u.origin ?? r,
          p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0,
          y = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0,
          w = Math.max(f.width, Math.round(s.width)),
          S = Math.max(f.height, Math.round(s.height)),
          g = (w - f.width) * c[0],
          m = (S - f.height) * c[1];
        (p > 0 || y > 0 || g || m) &&
          (o.push({
            id: a,
            type: 'position',
            position: {
              x: u.position.x - p + g,
              y: u.position.y - y + m,
            },
          }),
          (h = n.get(a)) == null ||
            h.forEach((v) => {
              e.some((C) => C.id === v.id) ||
                o.push({
                  id: v.id,
                  type: 'position',
                  position: {
                    x: v.position.x + p,
                    y: v.position.y + y,
                  },
                });
            })),
          (f.width < s.width || f.height < s.height || p || y) &&
            o.push({
              id: a,
              type: 'dimensions',
              setAttributes: !0,
              dimensions: {
                width: w + (p ? c[0] * p - g : 0),
                height: S + (y ? c[1] * y - m : 0),
              },
            });
      }),
    o
  );
}
function $S(e, t, n, r, o, i) {
  const l = r == null ? void 0 : r.querySelector('.xyflow__viewport');
  let s = !1;
  if (!l)
    return {
      changes: [],
      updatedInternals: s,
    };
  const u = [],
    a = window.getComputedStyle(l),
    { m22: d } = new window.DOMMatrixReadOnly(a.transform),
    f = [];
  for (const c of e.values()) {
    const p = t.get(c.id);
    if (!p) continue;
    if (p.hidden) {
      t.set(p.id, {
        ...p,
        internals: {
          ...p.internals,
          handleBounds: void 0,
        },
      }),
        (s = !0);
      continue;
    }
    const y = Pl(c.nodeElement),
      w = p.measured.width !== y.width || p.measured.height !== y.height;
    if (!!(y.width && y.height && (w || !p.internals.handleBounds || c.force))) {
      const g = c.nodeElement.getBoundingClientRect(),
        m = cr(p.extent) ? p.extent : i;
      let { positionAbsolute: h } = p.internals;
      p.parentId && p.extent === 'parent' ? (h = rg(h, y, t.get(p.parentId))) : m && (h = Nn(h, m, y));
      const v = {
        ...p,
        measured: y,
        internals: {
          ...p.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Cf('source', c.nodeElement, g, d, p.id),
            target: Cf('target', c.nodeElement, g, d, p.id),
          },
        },
      };
      t.set(p.id, v),
        p.parentId &&
          Fa(v, t, n, {
            nodeOrigin: o,
          }),
        (s = !0),
        w &&
          (u.push({
            id: p.id,
            type: 'dimensions',
            dimensions: y,
          }),
          p.expandParent &&
            p.parentId &&
            f.push({
              id: p.id,
              parentId: p.parentId,
              rect: ar(v, o),
            }));
    }
  }
  if (f.length > 0) {
    const c = Va(f, t, n, o);
    u.push(...c);
  }
  return {
    changes: u,
    updatedInternals: s,
  };
}
async function DS({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
  const l = await t.setViewportConstrained(
      {
        x: n[0] + e.x,
        y: n[1] + e.y,
        zoom: n[2],
      },
      [
        [0, 0],
        [o, i],
      ],
      r,
    ),
    s = !!l && (l.x !== n[0] || l.y !== n[1] || l.k !== n[2]);
  return Promise.resolve(s);
}
function Rf(e, t, n, r, o, i) {
  let l = o;
  const s = r.get(l) || new Map();
  r.set(l, s.set(n, t)), (l = `${o}-${e}`);
  const u = r.get(l) || new Map();
  if ((r.set(l, u.set(n, t)), i)) {
    l = `${o}-${e}-${i}`;
    const a = r.get(l) || new Map();
    r.set(l, a.set(n, t));
  }
}
function yg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: l = null, targetHandle: s = null } = r,
      u = {
        edgeId: r.id,
        source: o,
        target: i,
        sourceHandle: l,
        targetHandle: s,
      },
      a = `${o}-${l}--${i}-${s}`,
      d = `${i}-${s}--${o}-${l}`;
    Rf('source', u, d, e, o, l), Rf('target', u, a, e, i, s), t.set(r.id, r);
  }
}
function vg(e, t) {
  if (!e.parentId) return !1;
  const n = t.get(e.parentId);
  return n ? (n.selected ? !0 : vg(n, t)) : !1;
}
function Lf(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
    if (r === n) return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function AS(e, t, n, r) {
  const o = new Map();
  for (const [i, l] of e)
    if ((l.selected || l.id === r) && (!l.parentId || !vg(l, e)) && (l.draggable || (t && typeof l.draggable > 'u'))) {
      const s = e.get(i);
      s &&
        o.set(i, {
          id: i,
          position: s.position || {
            x: 0,
            y: 0,
          },
          distance: {
            x: n.x - s.internals.positionAbsolute.x,
            y: n.y - s.internals.positionAbsolute.y,
          },
          extent: s.extent,
          parentId: s.parentId,
          origin: s.origin,
          expandParent: s.expandParent,
          internals: {
            positionAbsolute: s.internals.positionAbsolute || {
              x: 0,
              y: 0,
            },
          },
          measured: {
            width: s.measured.width ?? 0,
            height: s.measured.height ?? 0,
          },
        });
    }
  return o;
}
function ys({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var l, s, u;
  const o = [];
  for (const [a, d] of t) {
    const f = (l = n.get(a)) == null ? void 0 : l.internals.userNode;
    f &&
      o.push({
        ...f,
        position: d.position,
        dragging: r,
      });
  }
  if (!e) return [o[0], o];
  const i = (s = n.get(e)) == null ? void 0 : s.internals.userNode;
  return [
    i
      ? {
          ...i,
          position: ((u = t.get(e)) == null ? void 0 : u.position) || i.position,
          dragging: r,
        }
      : o[0],
    o,
  ];
}
function OS({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = {
      x: null,
      y: null,
    },
    l = 0,
    s = new Map(),
    u = !1,
    a = {
      x: 0,
      y: 0,
    },
    d = null,
    f = !1,
    c = null,
    p = !1;
  function y({
    noDragClassName: S,
    handleSelector: g,
    domNode: m,
    isSelectable: h,
    nodeId: v,
    nodeClickDistance: C = 0,
  }) {
    c = Be(m);
    function M({ x: T, y: V }, F) {
      const {
        nodeLookup: O,
        nodeExtent: x,
        snapGrid: I,
        snapToGrid: k,
        nodeOrigin: L,
        onNodeDrag: E,
        onSelectionDrag: N,
        onError: z,
        updateNodePositions: A,
      } = t();
      i = {
        x: T,
        y: V,
      };
      let j = !1,
        K = {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
        };
      if (s.size > 1 && x) {
        const U = To(s);
        K = Mu(U);
      }
      for (const [U, X] of s) {
        if (!O.has(U)) continue;
        let Y = {
          x: T - X.distance.x,
          y: V - X.distance.y,
        };
        k && (Y = Ml(Y, I));
        let B = [
          [x[0][0], x[0][1]],
          [x[1][0], x[1][1]],
        ];
        if (s.size > 1 && x && !X.extent) {
          const { positionAbsolute: re } = X.internals,
            J = re.x - K.x + x[0][0],
            Q = re.x + X.measured.width - K.x2 + x[1][0],
            ne = re.y - K.y + x[0][1],
            le = re.y + X.measured.height - K.y2 + x[1][1];
          B = [
            [J, ne],
            [Q, le],
          ];
        }
        const { position: G, positionAbsolute: Z } = ng({
          nodeId: U,
          nextPosition: Y,
          nodeLookup: O,
          nodeExtent: B,
          nodeOrigin: L,
          onError: z,
        });
        (j = j || X.position.x !== G.x || X.position.y !== G.y), (X.position = G), (X.internals.positionAbsolute = Z);
      }
      if (j && (A(s, !0), F && (r || E || (!v && N)))) {
        const [U, X] = ys({
          nodeId: v,
          dragItems: s,
          nodeLookup: O,
        });
        r == null || r(F, s, U, X), E == null || E(F, U, X), v || N == null || N(F, X);
      }
    }
    async function _() {
      if (!d) return;
      const { transform: T, panBy: V, autoPanSpeed: F, autoPanOnNodeDrag: O } = t();
      if (!O) {
        (u = !1), cancelAnimationFrame(l);
        return;
      }
      const [x, I] = og(a, d, F);
      (x !== 0 || I !== 0) &&
        ((i.x = (i.x ?? 0) - x / T[2]),
        (i.y = (i.y ?? 0) - I / T[2]),
        (await V({
          x,
          y: I,
        })) && M(i, null)),
        (l = requestAnimationFrame(_));
    }
    function P(T) {
      var j;
      const {
        nodeLookup: V,
        multiSelectionActive: F,
        nodesDraggable: O,
        transform: x,
        snapGrid: I,
        snapToGrid: k,
        selectNodesOnDrag: L,
        onNodeDragStart: E,
        onSelectionDragStart: N,
        unselectNodesAndEdges: z,
      } = t();
      (f = !0),
        (!L || !h) && !F && v && (((j = V.get(v)) != null && j.selected) || z()),
        h && L && v && (e == null || e(v));
      const A = Yr(T.sourceEvent, {
        transform: x,
        snapGrid: I,
        snapToGrid: k,
        containerBounds: d,
      });
      if (((i = A), (s = AS(V, O, A, v)), s.size > 0 && (n || E || (!v && N)))) {
        const [K, U] = ys({
          nodeId: v,
          dragItems: s,
          nodeLookup: V,
        });
        n == null || n(T.sourceEvent, s, K, U),
          E == null || E(T.sourceEvent, K, U),
          v || N == null || N(T.sourceEvent, U);
      }
    }
    const $ = Dh()
      .clickDistance(C)
      .on('start', (T) => {
        const { domNode: V, nodeDragThreshold: F, transform: O, snapGrid: x, snapToGrid: I } = t();
        (d = (V == null ? void 0 : V.getBoundingClientRect()) || null),
          (p = !1),
          F === 0 && P(T),
          (i = Yr(T.sourceEvent, {
            transform: O,
            snapGrid: x,
            snapToGrid: I,
            containerBounds: d,
          })),
          (a = Mt(T.sourceEvent, d));
      })
      .on('drag', (T) => {
        const {
            autoPanOnNodeDrag: V,
            transform: F,
            snapGrid: O,
            snapToGrid: x,
            nodeDragThreshold: I,
            nodeLookup: k,
          } = t(),
          L = Yr(T.sourceEvent, {
            transform: F,
            snapGrid: O,
            snapToGrid: x,
            containerBounds: d,
          });
        if (
          (((T.sourceEvent.type === 'touchmove' && T.sourceEvent.touches.length > 1) || (v && !k.has(v))) && (p = !0),
          !p)
        ) {
          if ((!u && V && f && ((u = !0), _()), !f)) {
            const E = L.xSnapped - (i.x ?? 0),
              N = L.ySnapped - (i.y ?? 0);
            Math.sqrt(E * E + N * N) > I && P(T);
          }
          (i.x !== L.xSnapped || i.y !== L.ySnapped) && s && f && ((a = Mt(T.sourceEvent, d)), M(L, T.sourceEvent));
        }
      })
      .on('end', (T) => {
        if (!(!f || p) && ((u = !1), (f = !1), cancelAnimationFrame(l), s.size > 0)) {
          const { nodeLookup: V, updateNodePositions: F, onNodeDragStop: O, onSelectionDragStop: x } = t();
          if ((F(s, !1), o || O || (!v && x))) {
            const [I, k] = ys({
              nodeId: v,
              dragItems: s,
              nodeLookup: V,
              dragging: !1,
            });
            o == null || o(T.sourceEvent, s, I, k),
              O == null || O(T.sourceEvent, I, k),
              v || x == null || x(T.sourceEvent, k);
          }
        }
      })
      .filter((T) => {
        const V = T.target;
        return !T.button && (!S || !Lf(V, `.${S}`, m)) && (!g || Lf(V, g, m));
      });
    c.call($);
  }
  function w() {
    c == null || c.on('.drag', null);
  }
  return {
    update: y,
    destroy: w,
  };
}
function FS(e, t, n) {
  const r = [],
    o = {
      x: e.x - n,
      y: e.y - n,
      width: n * 2,
      height: n * 2,
    };
  for (const i of t.values()) vo(o, ar(i)) > 0 && r.push(i);
  return r;
}
const VS = 250;
function HS(e, t, n, r) {
  var s, u;
  let o = [],
    i = 1 / 0;
  const l = FS(e, n, t + VS);
  for (const a of l) {
    const d = [
      ...(((s = a.internals.handleBounds) == null ? void 0 : s.source) ?? []),
      ...(((u = a.internals.handleBounds) == null ? void 0 : u.target) ?? []),
    ];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id) continue;
      const { x: c, y: p } = wo(a, f, f.position, !0),
        y = Math.sqrt(Math.pow(c - e.x, 2) + Math.pow(p - e.y, 2));
      y > t ||
        (y < i
          ? ((o = [
              {
                ...f,
                x: c,
                y: p,
              },
            ]),
            (i = y))
          : y === i &&
            o.push({
              ...f,
              x: c,
              y: p,
            }));
    }
  }
  if (!o.length) return null;
  if (o.length > 1) {
    const a = r.type === 'source' ? 'target' : 'source';
    return o.find((d) => d.type === a) ?? o[0];
  }
  return o[0];
}
function wg(e, t, n, r, o, i = !1) {
  var a, d, f;
  const l = r.get(e);
  if (!l) return null;
  const s =
      o === 'strict'
        ? (a = l.internals.handleBounds) == null
          ? void 0
          : a[t]
        : [
            ...(((d = l.internals.handleBounds) == null ? void 0 : d.source) ?? []),
            ...(((f = l.internals.handleBounds) == null ? void 0 : f.target) ?? []),
          ],
    u = (n ? (s == null ? void 0 : s.find((c) => c.id === n)) : s == null ? void 0 : s[0]) ?? null;
  return u && i
    ? {
        ...u,
        ...wo(l, u, u.position, !0),
      }
    : u;
}
function xg(e, t) {
  return (
    e ||
    (t != null && t.classList.contains('target')
      ? 'target'
      : t != null && t.classList.contains('source')
        ? 'source'
        : null)
  );
}
function jS(e, t) {
  let n = null;
  return t ? (n = !0) : e && !t && (n = !1), n;
}
const Sg = () => !0;
function BS(
  e,
  {
    connectionMode: t,
    connectionRadius: n,
    handleId: r,
    nodeId: o,
    edgeUpdaterType: i,
    isTarget: l,
    domNode: s,
    nodeLookup: u,
    lib: a,
    autoPanOnConnect: d,
    flowId: f,
    panBy: c,
    cancelConnection: p,
    onConnectStart: y,
    onConnect: w,
    onConnectEnd: S,
    isValidConnection: g = Sg,
    onReconnectEnd: m,
    updateConnection: h,
    getTransform: v,
    getFromHandle: C,
    autoPanSpeed: M,
  },
) {
  const _ = ag(e.target);
  let P = 0,
    $;
  const { x: T, y: V } = Mt(e),
    F = _ == null ? void 0 : _.elementFromPoint(T, V),
    O = xg(i, F),
    x = s == null ? void 0 : s.getBoundingClientRect();
  if (!x || !O) return;
  const I = wg(o, O, r, u, t);
  if (!I) return;
  let k = Mt(e, x),
    L = !1,
    E = null,
    N = !1,
    z = null;
  function A() {
    if (!d || !x) return;
    const [Z, re] = og(k, x, M);
    c({
      x: Z,
      y: re,
    }),
      (P = requestAnimationFrame(A));
  }
  const j = {
      ...I,
      nodeId: o,
      type: O,
      position: I.position,
    },
    K = u.get(o),
    X = {
      inProgress: !0,
      isValid: null,
      from: wo(K, j, b.Left, !0),
      fromHandle: j,
      fromPosition: j.position,
      fromNode: K,
      to: k,
      toHandle: null,
      toPosition: Sf[j.position],
      toNode: null,
    };
  h(X);
  let Y = X;
  y == null ||
    y(e, {
      nodeId: o,
      handleId: r,
      handleType: O,
    });
  function B(Z) {
    if (!C() || !j) {
      G(Z);
      return;
    }
    const re = v();
    (k = Mt(Z, x)), ($ = HS(Io(k, re, !1, [1, 1]), n, u, j)), L || (A(), (L = !0));
    const J = Eg(Z, {
      handle: $,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: l ? 'target' : 'source',
      isValidConnection: g,
      doc: _,
      lib: a,
      flowId: f,
      nodeLookup: u,
    });
    (z = J.handleDomNode), (E = J.connection), (N = jS(!!$, J.isValid));
    const Q = {
      ...Y,
      isValid: N,
      to:
        $ && N
          ? lg(
              {
                x: $.x,
                y: $.y,
              },
              re,
            )
          : k,
      toHandle: J.toHandle,
      toPosition: N && J.toHandle ? J.toHandle.position : Sf[j.position],
      toNode: J.toHandle ? u.get(J.toHandle.nodeId) : null,
    };
    (N &&
      $ &&
      Y.toHandle &&
      Q.toHandle &&
      Y.toHandle.type === Q.toHandle.type &&
      Y.toHandle.nodeId === Q.toHandle.nodeId &&
      Y.toHandle.id === Q.toHandle.id &&
      Y.to.x === Q.to.x &&
      Y.to.y === Q.to.y) ||
      (h(Q), (Y = Q));
  }
  function G(Z) {
    ($ || z) && E && N && (w == null || w(E));
    const { inProgress: re, ...J } = Y,
      Q = {
        ...J,
        toPosition: Y.toHandle ? Y.toPosition : null,
      };
    S == null || S(Z, Q),
      i && (m == null || m(Z, Q)),
      p(),
      cancelAnimationFrame(P),
      (L = !1),
      (N = !1),
      (E = null),
      (z = null),
      _.removeEventListener('mousemove', B),
      _.removeEventListener('mouseup', G),
      _.removeEventListener('touchmove', B),
      _.removeEventListener('touchend', G);
  }
  _.addEventListener('mousemove', B),
    _.addEventListener('mouseup', G),
    _.addEventListener('touchmove', B),
    _.addEventListener('touchend', G);
}
function Eg(
  e,
  {
    handle: t,
    connectionMode: n,
    fromNodeId: r,
    fromHandleId: o,
    fromType: i,
    doc: l,
    lib: s,
    flowId: u,
    isValidConnection: a = Sg,
    nodeLookup: d,
  },
) {
  const f = i === 'target',
    c = t
      ? l.querySelector(
          `.${s}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
        )
      : null,
    { x: p, y } = Mt(e),
    w = l.elementFromPoint(p, y),
    S = w != null && w.classList.contains(`${s}-flow__handle`) ? w : c,
    g = {
      handleDomNode: S,
      isValid: !1,
      connection: null,
      toHandle: null,
    };
  if (S) {
    const m = xg(void 0, S),
      h = S.getAttribute('data-nodeid'),
      v = S.getAttribute('data-handleid'),
      C = S.classList.contains('connectable'),
      M = S.classList.contains('connectableend');
    if (!h || !m) return g;
    const _ = {
      source: f ? h : r,
      sourceHandle: f ? v : o,
      target: f ? r : h,
      targetHandle: f ? o : v,
    };
    g.connection = _;
    const $ = C && M && (n === sr.Strict ? (f && m === 'source') || (!f && m === 'target') : h !== r || v !== o);
    (g.isValid = $ && a(_)), (g.toHandle = wg(h, m, v, d, n, !1));
  }
  return g;
}
const Ru = {
  onPointerDown: BS,
  isValid: Eg,
};
function US({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Be(e);
  function i({
    translateExtent: s,
    width: u,
    height: a,
    zoomStep: d = 10,
    pannable: f = !0,
    zoomable: c = !0,
    inversePan: p = !1,
  }) {
    const y = (h) => {
      const v = n();
      if (h.sourceEvent.type !== 'wheel' || !t) return;
      const C =
          -h.sourceEvent.deltaY * (h.sourceEvent.deltaMode === 1 ? 0.05 : h.sourceEvent.deltaMode ? 1 : 0.002) * d,
        M = v[2] * Math.pow(2, C);
      t.scaleTo(M);
    };
    let w = [0, 0];
    const S = (h) => {
        (h.sourceEvent.type === 'mousedown' || h.sourceEvent.type === 'touchstart') &&
          (w = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ]);
      },
      g = (h) => {
        const v = n();
        if ((h.sourceEvent.type !== 'mousemove' && h.sourceEvent.type !== 'touchmove') || !t) return;
        const C = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ],
          M = [C[0] - w[0], C[1] - w[1]];
        w = C;
        const _ = r() * Math.max(v[2], Math.log(v[2])) * (p ? -1 : 1),
          P = {
            x: v[0] - M[0] * _,
            y: v[1] - M[1] * _,
          },
          $ = [
            [0, 0],
            [u, a],
          ];
        t.setViewportConstrained(
          {
            x: P.x,
            y: P.y,
            zoom: v[2],
          },
          $,
          s,
        );
      },
      m = Qh()
        .on('start', S)
        .on('zoom', f ? g : null)
        .on('zoom.wheel', c ? y : null);
    o.call(m, {});
  }
  function l() {
    o.on('zoom', null);
  }
  return {
    update: i,
    destroy: l,
    pointer: it,
  };
}
const WS = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
  Tl = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k,
  }),
  vs = ({ x: e, y: t, zoom: n }) => kl.translate(e, t).scale(n),
  Bn = (e, t) => e.target.closest(`.${t}`),
  _g = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  ws = (e, t = 0, n = () => {}) => {
    const r = typeof t == 'number' && t > 0;
    return r || n(), r ? e.transition().duration(t).on('end', n) : e;
  },
  kg = (e) => {
    const t = e.ctrlKey && tl() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function YS({
  zoomPanValues: e,
  noWheelClassName: t,
  d3Selection: n,
  d3Zoom: r,
  panOnScrollMode: o,
  panOnScrollSpeed: i,
  zoomOnPinch: l,
  onPanZoomStart: s,
  onPanZoom: u,
  onPanZoomEnd: a,
}) {
  return (d) => {
    if (Bn(d, t)) return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property('__zoom').k || 1;
    if (d.ctrlKey && l) {
      const S = it(d),
        g = kg(d),
        m = f * Math.pow(2, g);
      r.scaleTo(n, m, S, d);
      return;
    }
    const c = d.deltaMode === 1 ? 20 : 1;
    let p = o === wn.Vertical ? 0 : d.deltaX * c,
      y = o === wn.Horizontal ? 0 : d.deltaY * c;
    !tl() && d.shiftKey && o !== wn.Vertical && ((p = d.deltaY * c), (y = 0)),
      r.translateBy(n, -(p / f) * i, -(y / f) * i, {
        internal: !0,
      });
    const w = Tl(n.property('__zoom'));
    clearTimeout(e.panScrollTimeout),
      e.isPanScrolling || ((e.isPanScrolling = !0), s == null || s(d, w)),
      e.isPanScrolling &&
        (u == null || u(d, w),
        (e.panScrollTimeout = setTimeout(() => {
          a == null || a(d, w), (e.isPanScrolling = !1);
        }, 150)));
  };
}
function XS({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, o) {
    if ((!t && r.type === 'wheel' && !r.ctrlKey) || Bn(r, e)) return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function KS({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, l, s;
    if ((i = r.sourceEvent) != null && i.internal) return;
    const o = Tl(r.transform);
    (e.mouseButton = ((l = r.sourceEvent) == null ? void 0 : l.button) || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = o),
      ((s = r.sourceEvent) == null ? void 0 : s.type) === 'mousedown' && t(!0),
      n && (n == null || n(r.sourceEvent, o));
  };
}
function bS({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var l, s;
    (e.usedRightMouseButton = !!(n && _g(t, e.mouseButton ?? 0))),
      ((l = i.sourceEvent) != null && l.sync) || r([i.transform.x, i.transform.y, i.transform.k]),
      o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Tl(i.transform)));
  };
}
function GS({
  zoomPanValues: e,
  panOnDrag: t,
  panOnScroll: n,
  onDraggingChange: r,
  onPanZoomEnd: o,
  onPaneContextMenu: i,
}) {
  return (l) => {
    var s;
    if (
      !((s = l.sourceEvent) != null && s.internal) &&
      ((e.isZoomingOrPanning = !1),
      i && _g(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && i(l.sourceEvent),
      (e.usedRightMouseButton = !1),
      r(!1),
      o && WS(e.prevViewport, l.transform))
    ) {
      const u = Tl(l.transform);
      (e.prevViewport = u),
        clearTimeout(e.timerId),
        (e.timerId = setTimeout(
          () => {
            o == null || o(l.sourceEvent, u);
          },
          n ? 150 : 0,
        ));
    }
  };
}
function QS({
  zoomActivationKeyPressed: e,
  zoomOnScroll: t,
  zoomOnPinch: n,
  panOnDrag: r,
  panOnScroll: o,
  zoomOnDoubleClick: i,
  userSelectionActive: l,
  noWheelClassName: s,
  noPanClassName: u,
  lib: a,
}) {
  return (d) => {
    var y;
    const f = e || t,
      c = n && d.ctrlKey;
    if (d.button === 1 && d.type === 'mousedown' && (Bn(d, `${a}-flow__node`) || Bn(d, `${a}-flow__edge`))) return !0;
    if (
      (!r && !f && !o && !i && !n) ||
      l ||
      (Bn(d, s) && d.type === 'wheel') ||
      (Bn(d, u) && (d.type !== 'wheel' || (o && d.type === 'wheel' && !e))) ||
      (!n && d.ctrlKey && d.type === 'wheel')
    )
      return !1;
    if (!n && d.type === 'touchstart' && ((y = d.touches) == null ? void 0 : y.length) > 1)
      return d.preventDefault(), !1;
    if (
      (!f && !o && !c && d.type === 'wheel') ||
      (!r && (d.type === 'mousedown' || d.type === 'touchstart')) ||
      (Array.isArray(r) && !r.includes(d.button) && d.type === 'mousedown')
    )
      return !1;
    const p = (Array.isArray(r) && r.includes(d.button)) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === 'wheel') && p;
  };
}
function ZS({
  domNode: e,
  minZoom: t,
  maxZoom: n,
  paneClickDistance: r,
  translateExtent: o,
  viewport: i,
  onPanZoom: l,
  onPanZoomStart: s,
  onPanZoomEnd: u,
  onDraggingChange: a,
}) {
  const d = {
      isZoomingOrPanning: !1,
      usedRightMouseButton: !1,
      prevViewport: {
        x: 0,
        y: 0,
        zoom: 0,
      },
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: !1,
    },
    f = e.getBoundingClientRect(),
    c = Qh()
      .clickDistance(!ut(r) || r < 0 ? 0 : r)
      .scaleExtent([t, n])
      .translateExtent(o),
    p = Be(e).call(c);
  h(
    {
      x: i.x,
      y: i.y,
      zoom: ur(i.zoom, t, n),
    },
    [
      [0, 0],
      [f.width, f.height],
    ],
    o,
  );
  const y = p.on('wheel.zoom'),
    w = p.on('dblclick.zoom');
  c.wheelDelta(kg);
  function S(F, O) {
    return p
      ? new Promise((x) => {
          c == null ||
            c.transform(
              ws(p, O == null ? void 0 : O.duration, () => x(!0)),
              F,
            );
        })
      : Promise.resolve(!1);
  }
  function g({
    noWheelClassName: F,
    noPanClassName: O,
    onPaneContextMenu: x,
    userSelectionActive: I,
    panOnScroll: k,
    panOnDrag: L,
    panOnScrollMode: E,
    panOnScrollSpeed: N,
    preventScrolling: z,
    zoomOnPinch: A,
    zoomOnScroll: j,
    zoomOnDoubleClick: K,
    zoomActivationKeyPressed: U,
    lib: X,
    onTransformChange: Y,
  }) {
    I && !d.isZoomingOrPanning && m();
    const G =
      k && !U && !I
        ? YS({
            zoomPanValues: d,
            noWheelClassName: F,
            d3Selection: p,
            d3Zoom: c,
            panOnScrollMode: E,
            panOnScrollSpeed: N,
            zoomOnPinch: A,
            onPanZoomStart: s,
            onPanZoom: l,
            onPanZoomEnd: u,
          })
        : XS({
            noWheelClassName: F,
            preventScrolling: z,
            d3ZoomHandler: y,
          });
    if (
      (p.on('wheel.zoom', G, {
        passive: !1,
      }),
      !I)
    ) {
      const re = KS({
        zoomPanValues: d,
        onDraggingChange: a,
        onPanZoomStart: s,
      });
      c.on('start', re);
      const J = bS({
        zoomPanValues: d,
        panOnDrag: L,
        onPaneContextMenu: !!x,
        onPanZoom: l,
        onTransformChange: Y,
      });
      c.on('zoom', J);
      const Q = GS({
        zoomPanValues: d,
        panOnDrag: L,
        panOnScroll: k,
        onPaneContextMenu: x,
        onPanZoomEnd: u,
        onDraggingChange: a,
      });
      c.on('end', Q);
    }
    const Z = QS({
      zoomActivationKeyPressed: U,
      panOnDrag: L,
      zoomOnScroll: j,
      panOnScroll: k,
      zoomOnDoubleClick: K,
      zoomOnPinch: A,
      userSelectionActive: I,
      noPanClassName: O,
      noWheelClassName: F,
      lib: X,
    });
    c.filter(Z), K ? p.on('dblclick.zoom', w) : p.on('dblclick.zoom', null);
  }
  function m() {
    c.on('zoom', null);
  }
  async function h(F, O, x) {
    const I = vs(F),
      k = c == null ? void 0 : c.constrain()(I, O, x);
    return k && (await S(k)), new Promise((L) => L(k));
  }
  async function v(F, O) {
    const x = vs(F);
    return await S(x, O), new Promise((I) => I(x));
  }
  function C(F) {
    if (p) {
      const O = vs(F),
        x = p.property('__zoom');
      (x.k !== F.zoom || x.x !== F.x || x.y !== F.y) &&
        (c == null ||
          c.transform(p, O, null, {
            sync: !0,
          }));
    }
  }
  function M() {
    const F = p
      ? Gh(p.node())
      : {
          x: 0,
          y: 0,
          k: 1,
        };
    return {
      x: F.x,
      y: F.y,
      zoom: F.k,
    };
  }
  function _(F, O) {
    return p
      ? new Promise((x) => {
          c == null ||
            c.scaleTo(
              ws(p, O == null ? void 0 : O.duration, () => x(!0)),
              F,
            );
        })
      : Promise.resolve(!1);
  }
  function P(F, O) {
    return p
      ? new Promise((x) => {
          c == null ||
            c.scaleBy(
              ws(p, O == null ? void 0 : O.duration, () => x(!0)),
              F,
            );
        })
      : Promise.resolve(!1);
  }
  function $(F) {
    c == null || c.scaleExtent(F);
  }
  function T(F) {
    c == null || c.translateExtent(F);
  }
  function V(F) {
    const O = !ut(F) || F < 0 ? 0 : F;
    c == null || c.clickDistance(O);
  }
  return {
    update: g,
    destroy: m,
    setViewport: v,
    setViewportConstrained: h,
    getViewport: M,
    scaleTo: _,
    scaleBy: P,
    setScaleExtent: $,
    setTranslateExtent: T,
    syncViewport: C,
    setClickDistance: V,
  };
}
var Xr;
(function (e) {
  (e.Line = 'line'), (e.Handle = 'handle');
})(Xr || (Xr = {}));
function qS({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const l = e - t,
    s = n - r,
    u = [l > 0 ? 1 : l < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
  return l && o && (u[0] = u[0] * -1), s && i && (u[1] = u[1] * -1), u;
}
function JS(e) {
  const t = e.includes('right') || e.includes('left'),
    n = e.includes('bottom') || e.includes('top'),
    r = e.includes('left'),
    o = e.includes('top');
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o,
  };
}
function Ot(e, t) {
  return Math.max(0, t - e);
}
function Ft(e, t) {
  return Math.max(0, e - t);
}
function oi(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function $f(e, t) {
  return e ? !t : t;
}
function eE(e, t, n, r, o, i, l, s) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: d, isVertical: f } = t,
    c = d && f,
    { xSnapped: p, ySnapped: y } = n,
    { minWidth: w, maxWidth: S, minHeight: g, maxHeight: m } = r,
    { x: h, y: v, width: C, height: M, aspectRatio: _ } = e;
  let P = Math.floor(d ? p - e.pointerX : 0),
    $ = Math.floor(f ? y - e.pointerY : 0);
  const T = C + (u ? -P : P),
    V = M + (a ? -$ : $),
    F = -i[0] * C,
    O = -i[1] * M;
  let x = oi(T, w, S),
    I = oi(V, g, m);
  if (l) {
    let E = 0,
      N = 0;
    u && P < 0 ? (E = Ot(h + P + F, l[0][0])) : !u && P > 0 && (E = Ft(h + T + F, l[1][0])),
      a && $ < 0 ? (N = Ot(v + $ + O, l[0][1])) : !a && $ > 0 && (N = Ft(v + V + O, l[1][1])),
      (x = Math.max(x, E)),
      (I = Math.max(I, N));
  }
  if (s) {
    let E = 0,
      N = 0;
    u && P > 0 ? (E = Ft(h + P, s[0][0])) : !u && P < 0 && (E = Ot(h + T, s[1][0])),
      a && $ > 0 ? (N = Ft(v + $, s[0][1])) : !a && $ < 0 && (N = Ot(v + V, s[1][1])),
      (x = Math.max(x, E)),
      (I = Math.max(I, N));
  }
  if (o) {
    if (d) {
      const E = oi(T / _, g, m) * _;
      if (((x = Math.max(x, E)), l)) {
        let N = 0;
        (!u && !a) || (u && !a && c)
          ? (N = Ft(v + O + T / _, l[1][1]) * _)
          : (N = Ot(v + O + (u ? P : -P) / _, l[0][1]) * _),
          (x = Math.max(x, N));
      }
      if (s) {
        let N = 0;
        (!u && !a) || (u && !a && c) ? (N = Ot(v + T / _, s[1][1]) * _) : (N = Ft(v + (u ? P : -P) / _, s[0][1]) * _),
          (x = Math.max(x, N));
      }
    }
    if (f) {
      const E = oi(V * _, w, S) / _;
      if (((I = Math.max(I, E)), l)) {
        let N = 0;
        (!u && !a) || (a && !u && c)
          ? (N = Ft(h + V * _ + F, l[1][0]) / _)
          : (N = Ot(h + (a ? $ : -$) * _ + F, l[0][0]) / _),
          (I = Math.max(I, N));
      }
      if (s) {
        let N = 0;
        (!u && !a) || (a && !u && c) ? (N = Ot(h + V * _, s[1][0]) / _) : (N = Ft(h + (a ? $ : -$) * _, s[0][0]) / _),
          (I = Math.max(I, N));
      }
    }
  }
  ($ = $ + ($ < 0 ? I : -I)),
    (P = P + (P < 0 ? x : -x)),
    o &&
      (c
        ? T > V * _
          ? ($ = ($f(u, a) ? -P : P) / _)
          : (P = ($f(u, a) ? -$ : $) * _)
        : d
          ? (($ = P / _), (a = u))
          : ((P = $ * _), (u = a)));
  const k = u ? h + P : h,
    L = a ? v + $ : v;
  return {
    width: C + (u ? -P : P),
    height: M + (a ? -$ : $),
    x: i[0] * P * (u ? -1 : 1) + k,
    y: i[1] * $ * (a ? -1 : 1) + L,
  };
}
const Cg = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
  tE = {
    ...Cg,
    pointerX: 0,
    pointerY: 0,
    aspectRatio: 1,
  };
function nE(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height],
  ];
}
function rE(e, t, n) {
  const r = t.position.x + e.position.x,
    o = t.position.y + e.position.y,
    i = e.measured.width ?? 0,
    l = e.measured.height ?? 0,
    s = n[0] * i,
    u = n[1] * l;
  return [
    [r - s, o - u],
    [r + i - s, o + l - u],
  ];
}
function oE({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = Be(e);
  function l({
    controlPosition: u,
    boundaries: a,
    keepAspectRatio: d,
    onResizeStart: f,
    onResize: c,
    onResizeEnd: p,
    shouldResize: y,
  }) {
    let w = {
        ...Cg,
      },
      S = {
        ...tE,
      };
    const g = JS(u);
    let m,
      h = null,
      v = [],
      C,
      M,
      _;
    const P = Dh()
      .on('start', ($) => {
        const { nodeLookup: T, transform: V, snapGrid: F, snapToGrid: O, nodeOrigin: x, paneDomNode: I } = n();
        if (((m = T.get(t)), !m)) return;
        h = (I == null ? void 0 : I.getBoundingClientRect()) ?? null;
        const { xSnapped: k, ySnapped: L } = Yr($.sourceEvent, {
          transform: V,
          snapGrid: F,
          snapToGrid: O,
          containerBounds: h,
        });
        (w = {
          width: m.measured.width ?? 0,
          height: m.measured.height ?? 0,
          x: m.position.x ?? 0,
          y: m.position.y ?? 0,
        }),
          (S = {
            ...w,
            pointerX: k,
            pointerY: L,
            aspectRatio: w.width / w.height,
          }),
          (C = void 0),
          m.parentId &&
            (m.extent === 'parent' || m.expandParent) &&
            ((C = T.get(m.parentId)), (M = C && m.extent === 'parent' ? nE(C) : void 0)),
          (v = []),
          (_ = void 0);
        for (const [E, N] of T)
          if (
            N.parentId === t &&
            (v.push({
              id: E,
              position: {
                ...N.position,
              },
              extent: N.extent,
            }),
            N.extent === 'parent' || N.expandParent)
          ) {
            const z = rE(N, m, N.origin ?? x);
            _
              ? (_ = [
                  [Math.min(z[0][0], _[0][0]), Math.min(z[0][1], _[0][1])],
                  [Math.max(z[1][0], _[1][0]), Math.max(z[1][1], _[1][1])],
                ])
              : (_ = z);
          }
        f == null ||
          f($, {
            ...w,
          });
      })
      .on('drag', ($) => {
        const { transform: T, snapGrid: V, snapToGrid: F, nodeOrigin: O } = n(),
          x = Yr($.sourceEvent, {
            transform: T,
            snapGrid: V,
            snapToGrid: F,
            containerBounds: h,
          }),
          I = [];
        if (!m) return;
        const { x: k, y: L, width: E, height: N } = w,
          z = {},
          A = m.origin ?? O,
          { width: j, height: K, x: U, y: X } = eE(S, g, x, a, d, A, M, _),
          Y = j !== E,
          B = K !== N,
          G = U !== k && Y,
          Z = X !== L && B;
        if (!G && !Z && !Y && !B) return;
        if (
          (G || Z || A[0] === 1 || A[1] === 1) &&
          ((z.x = G ? U : w.x), (z.y = Z ? X : w.y), (w.x = z.x), (w.y = z.y), v.length > 0)
        ) {
          const ne = U - k,
            le = X - L;
          for (const _e of v)
            (_e.position = {
              x: _e.position.x - ne + A[0] * (j - E),
              y: _e.position.y - le + A[1] * (K - N),
            }),
              I.push(_e);
        }
        if (
          ((Y || B) &&
            ((z.width = Y ? j : w.width), (z.height = B ? K : w.height), (w.width = z.width), (w.height = z.height)),
          C && m.expandParent)
        ) {
          const ne = A[0] * (z.width ?? 0);
          z.x && z.x < ne && ((w.x = ne), (S.x = S.x - (z.x - ne)));
          const le = A[1] * (z.height ?? 0);
          z.y && z.y < le && ((w.y = le), (S.y = S.y - (z.y - le)));
        }
        const re = qS({
            width: w.width,
            prevWidth: E,
            height: w.height,
            prevHeight: N,
            affectsX: g.affectsX,
            affectsY: g.affectsY,
          }),
          J = {
            ...w,
            direction: re,
          };
        (y == null ? void 0 : y($, J)) !== !1 && (c == null || c($, J), r(z, I));
      })
      .on('end', ($) => {
        p == null ||
          p($, {
            ...w,
          }),
          o == null || o();
      });
    i.call(P);
  }
  function s() {
    i.on('.drag', null);
  }
  return {
    update: l,
    destroy: s,
  };
}
var Ng = {
    exports: {},
  },
  Mg = {},
  Pg = {
    exports: {},
  },
  Tg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = D;
function iE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lE = typeof Object.is == 'function' ? Object.is : iE,
  sE = fr.useState,
  uE = fr.useEffect,
  aE = fr.useLayoutEffect,
  cE = fr.useDebugValue;
function fE(e, t) {
  var n = t(),
    r = sE({
      inst: {
        value: n,
        getSnapshot: t,
      },
    }),
    o = r[0].inst,
    i = r[1];
  return (
    aE(
      function () {
        (o.value = n),
          (o.getSnapshot = t),
          xs(o) &&
            i({
              inst: o,
            });
      },
      [e, n, t],
    ),
    uE(
      function () {
        return (
          xs(o) &&
            i({
              inst: o,
            }),
          e(function () {
            xs(o) &&
              i({
                inst: o,
              });
          })
        );
      },
      [e],
    ),
    cE(n),
    n
  );
}
function xs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lE(e, n);
  } catch {
    return !0;
  }
}
function dE(e, t) {
  return t();
}
var pE = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? dE : fE;
Tg.useSyncExternalStore = fr.useSyncExternalStore !== void 0 ? fr.useSyncExternalStore : pE;
Pg.exports = Tg;
var hE = Pg.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Il = D,
  gE = hE;
function mE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yE = typeof Object.is == 'function' ? Object.is : mE,
  vE = gE.useSyncExternalStore,
  wE = Il.useRef,
  xE = Il.useEffect,
  SE = Il.useMemo,
  EE = Il.useDebugValue;
Mg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = wE(null);
  if (i.current === null) {
    var l = {
      hasValue: !1,
      value: null,
    };
    i.current = l;
  } else l = i.current;
  i = SE(
    function () {
      function u(p) {
        if (!a) {
          if (((a = !0), (d = p), (p = r(p)), o !== void 0 && l.hasValue)) {
            var y = l.value;
            if (o(y, p)) return (f = y);
          }
          return (f = p);
        }
        if (((y = f), yE(d, p))) return y;
        var w = r(p);
        return o !== void 0 && o(y, w) ? y : ((d = p), (f = w));
      }
      var a = !1,
        d,
        f,
        c = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        c === null
          ? void 0
          : function () {
              return u(c());
            },
      ];
    },
    [t, n, r, o],
  );
  var s = vE(e, i[0], i[1]);
  return (
    xE(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s],
    ),
    EE(s),
    s
  );
};
Ng.exports = Mg;
var _E = Ng.exports;
const kE = sd(_E),
  Df = (e) => {
    let t;
    const n = new Set(),
      r = (d, f) => {
        const c = typeof d == 'function' ? d(t) : d;
        if (!Object.is(c, t)) {
          const p = t;
          (t = (f ?? (typeof c != 'object' || c === null)) ? c : Object.assign({}, t, c)), n.forEach((y) => y(t, p));
        }
      },
      o = () => t,
      u = {
        setState: r,
        getState: o,
        getInitialState: () => a,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
        destroy: () => {
          n.clear();
        },
      },
      a = (t = e(r, o, u));
    return u;
  },
  CE = (e) => (e ? Df(e) : Df),
  { useDebugValue: NE } = vd,
  { useSyncExternalStoreWithSelector: ME } = kE,
  PE = (e) => e;
function Ig(e, t = PE, n) {
  const r = ME(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return NE(r), r;
}
const Af = (e, t) => {
    const n = CE(e),
      r = (o, i = t) => Ig(n, o, i);
    return Object.assign(r, n), r;
  },
  TE = (e, t) => (e ? Af(e, t) : Af);
function ge(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
  return !0;
}
const zl = D.createContext(null),
  IE = zl.Provider,
  zg = $t.error001();
function te(e, t) {
  const n = D.useContext(zl);
  if (n === null) throw new Error(zg);
  return Ig(n, e, t);
}
function ce() {
  const e = D.useContext(zl);
  if (e === null) throw new Error(zg);
  return D.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const Of = {
    display: 'none',
  },
  zE = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0px, 0px, 0px, 0px)',
    clipPath: 'inset(100%)',
  },
  Rg = 'react-flow__node-desc',
  Lg = 'react-flow__edge-desc',
  RE = 'react-flow__aria-live',
  LE = (e) => e.ariaLiveMessage;
function $E({ rfId: e }) {
  const t = te(LE);
  return R.jsx('div', {
    id: `${RE}-${e}`,
    'aria-live': 'assertive',
    'aria-atomic': 'true',
    style: zE,
    children: t,
  });
}
function DE({ rfId: e, disableKeyboardA11y: t }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsxs('div', {
        id: `${Rg}-${e}`,
        style: Of,
        children: [
          'Press enter or space to select a node.',
          !t && 'You can then use the arrow keys to move the node around.',
          ' Press delete to remove it and escape to cancel.',
          ' ',
        ],
      }),
      R.jsx('div', {
        id: `${Lg}-${e}`,
        style: Of,
        children: 'Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.',
      }),
      !t &&
        R.jsx($E, {
          rfId: e,
        }),
    ],
  });
}
const AE = (e) => (e.userSelectionActive ? 'none' : 'all'),
  zo = D.forwardRef(({ position: e = 'top-left', children: t, className: n, style: r, ...o }, i) => {
    const l = te(AE),
      s = `${e}`.split('-');
    return R.jsx('div', {
      className: ve(['react-flow__panel', n, ...s]),
      style: {
        ...r,
        pointerEvents: l,
      },
      ref: i,
      ...o,
      children: t,
    });
  });
zo.displayName = 'Panel';
function OE({ proOptions: e, position: t = 'bottom-right' }) {
  return e != null && e.hideAttribution
    ? null
    : R.jsx(zo, {
        position: t,
        className: 'react-flow__attribution',
        'data-message':
          'Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev',
        children: R.jsx('a', {
          href: 'https://reactflow.dev',
          target: '_blank',
          rel: 'noopener noreferrer',
          'aria-label': 'React Flow attribution',
          children: 'React Flow',
        }),
      });
}
const FE = (e) => {
    const t = [],
      n = [];
    for (const [, r] of e.nodeLookup) r.selected && t.push(r.internals.userNode);
    for (const [, r] of e.edgeLookup) r.selected && n.push(r);
    return {
      selectedNodes: t,
      selectedEdges: n,
    };
  },
  ii = (e) => e.id;
function VE(e, t) {
  return ge(e.selectedNodes.map(ii), t.selectedNodes.map(ii)) && ge(e.selectedEdges.map(ii), t.selectedEdges.map(ii));
}
function HE({ onSelectionChange: e }) {
  const t = ce(),
    { selectedNodes: n, selectedEdges: r } = te(FE, VE);
  return (
    D.useEffect(() => {
      const o = {
        nodes: n,
        edges: r,
      };
      e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
    }, [n, r, e]),
    null
  );
}
const jE = (e) => !!e.onSelectionChangeHandlers;
function BE({ onSelectionChange: e }) {
  const t = te(jE);
  return e || t
    ? R.jsx(HE, {
        onSelectionChange: e,
      })
    : null;
}
const $g = [0, 0],
  UE = {
    x: 0,
    y: 0,
    zoom: 1,
  },
  WE = [
    'nodes',
    'edges',
    'defaultNodes',
    'defaultEdges',
    'onConnect',
    'onConnectStart',
    'onConnectEnd',
    'onClickConnectStart',
    'onClickConnectEnd',
    'nodesDraggable',
    'nodesConnectable',
    'nodesFocusable',
    'edgesFocusable',
    'edgesReconnectable',
    'elevateNodesOnSelect',
    'elevateEdgesOnSelect',
    'minZoom',
    'maxZoom',
    'nodeExtent',
    'onNodesChange',
    'onEdgesChange',
    'elementsSelectable',
    'connectionMode',
    'snapGrid',
    'snapToGrid',
    'translateExtent',
    'connectOnClick',
    'defaultEdgeOptions',
    'fitView',
    'fitViewOptions',
    'onNodesDelete',
    'onEdgesDelete',
    'onDelete',
    'onNodeDrag',
    'onNodeDragStart',
    'onNodeDragStop',
    'onSelectionDrag',
    'onSelectionDragStart',
    'onSelectionDragStop',
    'onMoveStart',
    'onMove',
    'onMoveEnd',
    'noPanClassName',
    'nodeOrigin',
    'autoPanOnConnect',
    'autoPanOnNodeDrag',
    'onError',
    'connectionRadius',
    'isValidConnection',
    'selectNodesOnDrag',
    'nodeDragThreshold',
    'onBeforeDelete',
    'debug',
    'autoPanSpeed',
    'paneClickDistance',
  ],
  Ff = [...WE, 'rfId'],
  YE = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setPaneClickDistance: e.setPaneClickDistance,
  }),
  Vf = {
    translateExtent: mo,
    nodeOrigin: $g,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: 'nopan',
    rfId: '1',
    paneClickDistance: 0,
  };
function XE(e) {
  const {
      setNodes: t,
      setEdges: n,
      setMinZoom: r,
      setMaxZoom: o,
      setTranslateExtent: i,
      setNodeExtent: l,
      reset: s,
      setDefaultNodesAndEdges: u,
      setPaneClickDistance: a,
    } = te(YE, ge),
    d = ce();
  D.useEffect(
    () => (
      u(e.defaultNodes, e.defaultEdges),
      () => {
        (f.current = Vf), s();
      }
    ),
    [],
  );
  const f = D.useRef(Vf);
  return (
    D.useEffect(
      () => {
        for (const c of Ff) {
          const p = e[c],
            y = f.current[c];
          p !== y &&
            (typeof e[c] > 'u' ||
              (c === 'nodes'
                ? t(p)
                : c === 'edges'
                  ? n(p)
                  : c === 'minZoom'
                    ? r(p)
                    : c === 'maxZoom'
                      ? o(p)
                      : c === 'translateExtent'
                        ? i(p)
                        : c === 'nodeExtent'
                          ? l(p)
                          : c === 'paneClickDistance'
                            ? a(p)
                            : c === 'fitView'
                              ? d.setState({
                                  fitViewOnInit: p,
                                })
                              : c === 'fitViewOptions'
                                ? d.setState({
                                    fitViewOnInitOptions: p,
                                  })
                                : d.setState({
                                    [c]: p,
                                  })));
        }
        f.current = e;
      },
      Ff.map((c) => e[c]),
    ),
    null
  );
}
function Hf() {
  return typeof window > 'u' || !window.matchMedia ? null : window.matchMedia('(prefers-color-scheme: dark)');
}
function KE(e) {
  var r;
  const [t, n] = D.useState(e === 'system' ? null : e);
  return (
    D.useEffect(() => {
      if (e !== 'system') {
        n(e);
        return;
      }
      const o = Hf(),
        i = () => n(o != null && o.matches ? 'dark' : 'light');
      return (
        i(),
        o == null || o.addEventListener('change', i),
        () => {
          o == null || o.removeEventListener('change', i);
        }
      );
    }, [e]),
    t !== null ? t : (r = Hf()) != null && r.matches ? 'dark' : 'light'
  );
}
const jf = typeof document < 'u' ? document : null;
function xo(
  e = null,
  t = {
    target: jf,
    actInsideInputWithModifier: !0,
  },
) {
  const [n, r] = D.useState(!1),
    o = D.useRef(!1),
    i = D.useRef(new Set([])),
    [l, s] = D.useMemo(() => {
      if (e !== null) {
        const a = (Array.isArray(e) ? e : [e])
            .filter((f) => typeof f == 'string')
            .map((f) =>
              f
                .replace(
                  '+',
                  `
`,
                )
                .replace(
                  `

`,
                  `
+`,
                ).split(`
`),
            ),
          d = a.reduce((f, c) => f.concat(...c), []);
        return [a, d];
      }
      return [[], []];
    }, [e]);
  return (
    D.useEffect(() => {
      const u = (t == null ? void 0 : t.target) || jf;
      if (e !== null) {
        const a = (c) => {
            if (
              ((o.current = c.ctrlKey || c.metaKey || c.shiftKey),
              (!o.current || (o.current && !t.actInsideInputWithModifier)) && Pu(c))
            )
              return !1;
            const y = Uf(c.code, s);
            i.current.add(c[y]), Bf(l, i.current, !1) && (c.preventDefault(), r(!0));
          },
          d = (c) => {
            if ((!o.current || (o.current && !t.actInsideInputWithModifier)) && Pu(c)) return !1;
            const y = Uf(c.code, s);
            Bf(l, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(c[y]),
              c.key === 'Meta' && i.current.clear(),
              (o.current = !1);
          },
          f = () => {
            i.current.clear(), r(!1);
          };
        return (
          u == null || u.addEventListener('keydown', a),
          u == null || u.addEventListener('keyup', d),
          window.addEventListener('blur', f),
          window.addEventListener('contextmenu', f),
          () => {
            u == null || u.removeEventListener('keydown', a),
              u == null || u.removeEventListener('keyup', d),
              window.removeEventListener('blur', f),
              window.removeEventListener('contextmenu', f);
          }
        );
      }
    }, [e, r]),
    n
  );
}
function Bf(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function Uf(e, t) {
  return t.includes(e) ? 'code' : 'key';
}
const bE = () => {
  const e = ce();
  return D.useMemo(
    () => ({
      zoomIn: (t) => {
        const { panZoom: n } = e.getState();
        return n
          ? n.scaleBy(1.2, {
              duration: t == null ? void 0 : t.duration,
            })
          : Promise.resolve(!1);
      },
      zoomOut: (t) => {
        const { panZoom: n } = e.getState();
        return n
          ? n.scaleBy(1 / 1.2, {
              duration: t == null ? void 0 : t.duration,
            })
          : Promise.resolve(!1);
      },
      zoomTo: (t, n) => {
        const { panZoom: r } = e.getState();
        return r
          ? r.scaleTo(t, {
              duration: n == null ? void 0 : n.duration,
            })
          : Promise.resolve(!1);
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, n) => {
        const {
          transform: [r, o, i],
          panZoom: l,
        } = e.getState();
        return l
          ? (await l.setViewport(
              {
                x: t.x ?? r,
                y: t.y ?? o,
                zoom: t.zoom ?? i,
              },
              {
                duration: n == null ? void 0 : n.duration,
              },
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      getViewport: () => {
        const [t, n, r] = e.getState().transform;
        return {
          x: t,
          y: n,
          zoom: r,
        };
      },
      fitView: (t) => {
        const { nodeLookup: n, minZoom: r, maxZoom: o, panZoom: i, domNode: l } = e.getState();
        if (!i || !l) return Promise.resolve(!1);
        const s = Cu(n, t),
          { width: u, height: a } = Pl(l);
        return Nu(
          {
            nodes: s,
            width: u,
            height: a,
            minZoom: r,
            maxZoom: o,
            panZoom: i,
          },
          t,
        );
      },
      setCenter: async (t, n, r) => {
        const { width: o, height: i, maxZoom: l, panZoom: s } = e.getState(),
          u = typeof (r == null ? void 0 : r.zoom) < 'u' ? r.zoom : l,
          a = o / 2 - t * u,
          d = i / 2 - n * u;
        return s
          ? (await s.setViewport(
              {
                x: a,
                y: d,
                zoom: u,
              },
              {
                duration: r == null ? void 0 : r.duration,
              },
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      fitBounds: async (t, n) => {
        const { width: r, height: o, minZoom: i, maxZoom: l, panZoom: s } = e.getState(),
          u = Da(t, r, o, i, l, (n == null ? void 0 : n.padding) ?? 0.1);
        return s
          ? (await s.setViewport(u, {
              duration: n == null ? void 0 : n.duration,
            }),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      screenToFlowPosition: (t, n = {}) => {
        const { transform: r, snapGrid: o, snapToGrid: i, domNode: l } = e.getState();
        if (!l) return t;
        const { x: s, y: u } = l.getBoundingClientRect(),
          a = {
            x: t.x - s,
            y: t.y - u,
          },
          d = n.snapGrid ?? o,
          f = n.snapToGrid ?? i;
        return Io(a, r, f, d);
      },
      flowToScreenPosition: (t) => {
        const { transform: n, domNode: r } = e.getState();
        if (!r) return t;
        const { x: o, y: i } = r.getBoundingClientRect(),
          l = lg(t, n);
        return {
          x: l.x + o,
          y: l.y + i,
        };
      },
    }),
    [],
  );
};
function Dg(e, t) {
  const n = [],
    r = new Map(),
    o = [];
  for (const i of e)
    if (i.type === 'add') {
      o.push(i);
      continue;
    } else if (i.type === 'remove' || i.type === 'replace') r.set(i.id, [i]);
    else {
      const l = r.get(i.id);
      l ? l.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const l = r.get(i.id);
    if (!l) {
      n.push(i);
      continue;
    }
    if (l[0].type === 'remove') continue;
    if (l[0].type === 'replace') {
      n.push({
        ...l[0].item,
      });
      continue;
    }
    const s = {
      ...i,
    };
    for (const u of l) GE(u, s);
    n.push(s);
  }
  return (
    o.length &&
      o.forEach((i) => {
        i.index !== void 0
          ? n.splice(i.index, 0, {
              ...i.item,
            })
          : n.push({
              ...i.item,
            });
      }),
    n
  );
}
function GE(e, t) {
  switch (e.type) {
    case 'select': {
      t.selected = e.selected;
      break;
    }
    case 'position': {
      typeof e.position < 'u' && (t.position = e.position), typeof e.dragging < 'u' && (t.dragging = e.dragging);
      break;
    }
    case 'dimensions': {
      typeof e.dimensions < 'u' &&
        (t.measured ?? (t.measured = {}),
        (t.measured.width = e.dimensions.width),
        (t.measured.height = e.dimensions.height),
        e.setAttributes && ((t.width = e.dimensions.width), (t.height = e.dimensions.height))),
        typeof e.resizing == 'boolean' && (t.resizing = e.resizing);
      break;
    }
  }
}
function Ag(e, t) {
  return Dg(e, t);
}
function Og(e, t) {
  return Dg(e, t);
}
function fn(e, t) {
  return {
    id: e,
    type: 'select',
    selected: t,
  };
}
function Un(e, t = new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const l = t.has(o);
    !(i.selected === void 0 && !l) && i.selected !== l && (n && (i.selected = l), r.push(fn(i.id, l)));
  }
  return r;
}
function Wf({ items: e = [], lookup: t }) {
  var o;
  const n = [],
    r = new Map(e.map((i) => [i.id, i]));
  for (const [i, l] of e.entries()) {
    const s = t.get(l.id),
      u = ((o = s == null ? void 0 : s.internals) == null ? void 0 : o.userNode) ?? s;
    u !== void 0 &&
      u !== l &&
      n.push({
        id: l.id,
        item: l,
        type: 'replace',
      }),
      u === void 0 &&
        n.push({
          item: l,
          type: 'add',
          index: i,
        });
  }
  for (const [i] of t)
    r.get(i) === void 0 &&
      n.push({
        id: i,
        type: 'remove',
      });
  return n;
}
function Yf(e) {
  return {
    id: e.id,
    type: 'remove',
  };
}
const Xf = (e) => gS(e),
  QE = (e) => eg(e);
function Fg(e) {
  return D.forwardRef(e);
}
const ZE = typeof window < 'u' ? D.useLayoutEffect : D.useEffect;
function Kf(e) {
  const [t, n] = D.useState(BigInt(0)),
    [r] = D.useState(() => qE(() => n((o) => o + BigInt(1))));
  return (
    ZE(() => {
      const o = r.get();
      o.length && (e(o), r.reset());
    }, [t]),
    r
  );
}
function qE(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    },
  };
}
const Vg = D.createContext(null);
function JE({ children: e }) {
  const t = ce(),
    n = D.useCallback((s) => {
      const { nodes: u = [], setNodes: a, hasDefaultNodes: d, onNodesChange: f, nodeLookup: c } = t.getState();
      let p = u;
      for (const y of s) p = typeof y == 'function' ? y(p) : y;
      d
        ? a(p)
        : f &&
          f(
            Wf({
              items: p,
              lookup: c,
            }),
          );
    }, []),
    r = Kf(n),
    o = D.useCallback((s) => {
      const { edges: u = [], setEdges: a, hasDefaultEdges: d, onEdgesChange: f, edgeLookup: c } = t.getState();
      let p = u;
      for (const y of s) p = typeof y == 'function' ? y(p) : y;
      d
        ? a(p)
        : f &&
          f(
            Wf({
              items: p,
              lookup: c,
            }),
          );
    }, []),
    i = Kf(o),
    l = D.useMemo(
      () => ({
        nodeQueue: r,
        edgeQueue: i,
      }),
      [],
    );
  return R.jsx(Vg.Provider, {
    value: l,
    children: e,
  });
}
function e_() {
  const e = D.useContext(Vg);
  if (!e) throw new Error('useBatchContext must be used within a BatchProvider');
  return e;
}
const t_ = (e) => !!e.panZoom;
function Ro() {
  const e = bE(),
    t = ce(),
    n = e_(),
    r = te(t_),
    o = D.useMemo(() => {
      const i = (f) => t.getState().nodeLookup.get(f),
        l = (f) => {
          n.nodeQueue.push(f);
        },
        s = (f) => {
          n.edgeQueue.push(f);
        },
        u = (f) => {
          var g, m;
          const { nodeLookup: c, nodeOrigin: p } = t.getState(),
            y = Xf(f) ? f : c.get(f.id),
            w = y.parentId ? ug(y.position, y.measured, y.parentId, c, p) : y.position,
            S = {
              ...y,
              position: w,
              width: ((g = y.measured) == null ? void 0 : g.width) ?? y.width,
              height: ((m = y.measured) == null ? void 0 : m.height) ?? y.height,
            };
          return ar(S);
        },
        a = (
          f,
          c,
          p = {
            replace: !1,
          },
        ) => {
          l((y) =>
            y.map((w) => {
              if (w.id === f) {
                const S = typeof c == 'function' ? c(w) : c;
                return p.replace && Xf(S)
                  ? S
                  : {
                      ...w,
                      ...S,
                    };
              }
              return w;
            }),
          );
        },
        d = (
          f,
          c,
          p = {
            replace: !1,
          },
        ) => {
          s((y) =>
            y.map((w) => {
              if (w.id === f) {
                const S = typeof c == 'function' ? c(w) : c;
                return p.replace && QE(S)
                  ? S
                  : {
                      ...w,
                      ...S,
                    };
              }
              return w;
            }),
          );
        };
      return {
        getNodes: () =>
          t.getState().nodes.map((f) => ({
            ...f,
          })),
        getNode: (f) => {
          var c;
          return (c = i(f)) == null ? void 0 : c.internals.userNode;
        },
        getInternalNode: i,
        getEdges: () => {
          const { edges: f = [] } = t.getState();
          return f.map((c) => ({
            ...c,
          }));
        },
        getEdge: (f) => t.getState().edgeLookup.get(f),
        setNodes: l,
        setEdges: s,
        addNodes: (f) => {
          const c = Array.isArray(f) ? f : [f];
          n.nodeQueue.push((p) => [...p, ...c]);
        },
        addEdges: (f) => {
          const c = Array.isArray(f) ? f : [f];
          n.edgeQueue.push((p) => [...p, ...c]);
        },
        toObject: () => {
          const { nodes: f = [], edges: c = [], transform: p } = t.getState(),
            [y, w, S] = p;
          return {
            nodes: f.map((g) => ({
              ...g,
            })),
            edges: c.map((g) => ({
              ...g,
            })),
            viewport: {
              x: y,
              y: w,
              zoom: S,
            },
          };
        },
        deleteElements: async ({ nodes: f = [], edges: c = [] }) => {
          const {
              nodes: p,
              edges: y,
              onNodesDelete: w,
              onEdgesDelete: S,
              triggerNodeChanges: g,
              triggerEdgeChanges: m,
              onDelete: h,
              onBeforeDelete: v,
            } = t.getState(),
            { nodes: C, edges: M } = await vS({
              nodesToRemove: f,
              edgesToRemove: c,
              nodes: p,
              edges: y,
              onBeforeDelete: v,
            }),
            _ = M.length > 0,
            P = C.length > 0;
          if (_) {
            const $ = M.map(Yf);
            S == null || S(M), m($);
          }
          if (P) {
            const $ = C.map(Yf);
            w == null || w(C), g($);
          }
          return (
            (P || _) &&
              (h == null ||
                h({
                  nodes: C,
                  edges: M,
                })),
            {
              deletedNodes: C,
              deletedEdges: M,
            }
          );
        },
        getIntersectingNodes: (f, c = !0, p) => {
          const y = _f(f),
            w = y ? f : u(f),
            S = p !== void 0;
          return w
            ? (p || t.getState().nodes).filter((g) => {
                const m = t.getState().nodeLookup.get(g.id);
                if (m && !y && (g.id === f.id || !m.internals.positionAbsolute)) return !1;
                const h = ar(S ? g : m),
                  v = vo(h, w);
                return (c && v > 0) || v >= w.width * w.height;
              })
            : [];
        },
        isNodeIntersecting: (f, c, p = !0) => {
          const w = _f(f) ? f : u(f);
          if (!w) return !1;
          const S = vo(w, c);
          return (p && S > 0) || S >= w.width * w.height;
        },
        updateNode: a,
        updateNodeData: (
          f,
          c,
          p = {
            replace: !1,
          },
        ) => {
          a(
            f,
            (y) => {
              const w = typeof c == 'function' ? c(y) : c;
              return p.replace
                ? {
                    ...y,
                    data: w,
                  }
                : {
                    ...y,
                    data: {
                      ...y.data,
                      ...w,
                    },
                  };
            },
            p,
          );
        },
        updateEdge: d,
        updateEdgeData: (
          f,
          c,
          p = {
            replace: !1,
          },
        ) => {
          d(
            f,
            (y) => {
              const w = typeof c == 'function' ? c(y) : c;
              return p.replace
                ? {
                    ...y,
                    data: w,
                  }
                : {
                    ...y,
                    data: {
                      ...y.data,
                      ...w,
                    },
                  };
            },
            p,
          );
        },
        getNodesBounds: (f) => {
          const { nodeLookup: c, nodeOrigin: p } = t.getState();
          return mS(f, {
            nodeLookup: c,
            nodeOrigin: p,
          });
        },
        getHandleConnections: ({ type: f, id: c, nodeId: p }) => {
          var y;
          return Array.from(
            ((y = t.getState().connectionLookup.get(`${p}-${f}${c ? `-${c}` : ''}`)) == null ? void 0 : y.values()) ??
              [],
          );
        },
        getNodeConnections: ({ type: f, handleId: c, nodeId: p }) => {
          var y;
          return Array.from(
            ((y = t.getState().connectionLookup.get(`${p}${f ? (c ? `-${f}-${c}` : `-${f}`) : ''}`)) == null
              ? void 0
              : y.values()) ?? [],
          );
        },
      };
    }, []);
  return D.useMemo(
    () => ({
      ...o,
      ...e,
      viewportInitialized: r,
    }),
    [r],
  );
}
const bf = (e) => e.selected,
  n_ = {
    actInsideInputWithModifier: !1,
  },
  r_ = typeof window < 'u' ? window : void 0;
function o_({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = ce(),
    { deleteElements: r } = Ro(),
    o = xo(e, n_),
    i = xo(t, {
      target: r_,
    });
  D.useEffect(() => {
    if (o) {
      const { edges: l, nodes: s } = n.getState();
      r({
        nodes: s.filter(bf),
        edges: l.filter(bf),
      }),
        n.setState({
          nodesSelectionActive: !1,
        });
    }
  }, [o]),
    D.useEffect(() => {
      n.setState({
        multiSelectionActive: i,
      });
    }, [i]);
}
function i_(e) {
  const t = ce();
  D.useEffect(() => {
    const n = () => {
      var o, i;
      if (!e.current) return !1;
      const r = Pl(e.current);
      (r.height === 0 || r.width === 0) &&
        ((i = (o = t.getState()).onError) == null || i.call(o, '004', $t.error004())),
        t.setState({
          width: r.width || 500,
          height: r.height || 500,
        });
    };
    if (e.current) {
      n(), window.addEventListener('resize', n);
      const r = new ResizeObserver(() => n());
      return (
        r.observe(e.current),
        () => {
          window.removeEventListener('resize', n), r && e.current && r.unobserve(e.current);
        }
      );
    }
  }, []);
}
const Rl = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  l_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
  });
function s_({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: n = !0,
  panOnScroll: r = !1,
  panOnScrollSpeed: o = 0.5,
  panOnScrollMode: i = wn.Free,
  zoomOnDoubleClick: l = !0,
  panOnDrag: s = !0,
  defaultViewport: u,
  translateExtent: a,
  minZoom: d,
  maxZoom: f,
  zoomActivationKeyCode: c,
  preventScrolling: p = !0,
  children: y,
  noWheelClassName: w,
  noPanClassName: S,
  onViewportChange: g,
  isControlledViewport: m,
  paneClickDistance: h,
}) {
  const v = ce(),
    C = D.useRef(null),
    { userSelectionActive: M, lib: _ } = te(l_, ge),
    P = xo(c),
    $ = D.useRef();
  i_(C);
  const T = D.useCallback(
    (V) => {
      g == null ||
        g({
          x: V[0],
          y: V[1],
          zoom: V[2],
        }),
        m ||
          v.setState({
            transform: V,
          });
    },
    [g, m],
  );
  return (
    D.useEffect(() => {
      if (C.current) {
        $.current = ZS({
          domNode: C.current,
          minZoom: d,
          maxZoom: f,
          translateExtent: a,
          viewport: u,
          paneClickDistance: h,
          onDraggingChange: (x) =>
            v.setState({
              paneDragging: x,
            }),
          onPanZoomStart: (x, I) => {
            const { onViewportChangeStart: k, onMoveStart: L } = v.getState();
            L == null || L(x, I), k == null || k(I);
          },
          onPanZoom: (x, I) => {
            const { onViewportChange: k, onMove: L } = v.getState();
            L == null || L(x, I), k == null || k(I);
          },
          onPanZoomEnd: (x, I) => {
            const { onViewportChangeEnd: k, onMoveEnd: L } = v.getState();
            L == null || L(x, I), k == null || k(I);
          },
        });
        const { x: V, y: F, zoom: O } = $.current.getViewport();
        return (
          v.setState({
            panZoom: $.current,
            transform: [V, F, O],
            domNode: C.current.closest('.react-flow'),
          }),
          () => {
            var x;
            (x = $.current) == null || x.destroy();
          }
        );
      }
    }, []),
    D.useEffect(() => {
      var V;
      (V = $.current) == null ||
        V.update({
          onPaneContextMenu: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnScroll: r,
          panOnScrollSpeed: o,
          panOnScrollMode: i,
          zoomOnDoubleClick: l,
          panOnDrag: s,
          zoomActivationKeyPressed: P,
          preventScrolling: p,
          noPanClassName: S,
          userSelectionActive: M,
          noWheelClassName: w,
          lib: _,
          onTransformChange: T,
        });
    }, [e, t, n, r, o, i, l, s, P, p, S, M, w, _, T]),
    R.jsx('div', {
      className: 'react-flow__renderer',
      ref: C,
      style: Rl,
      children: y,
    })
  );
}
const u_ = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function a_() {
  const { userSelectionActive: e, userSelectionRect: t } = te(u_, ge);
  return e && t
    ? R.jsx('div', {
        className: 'react-flow__selection react-flow__container',
        style: {
          width: t.width,
          height: t.height,
          transform: `translate(${t.x}px, ${t.y}px)`,
        },
      })
    : null;
}
const Ss = (e, t) => (n) => {
    n.target === t.current && (e == null || e(n));
  },
  c_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging,
  });
function f_({
  isSelecting: e,
  selectionKeyPressed: t,
  selectionMode: n = yo.Full,
  panOnDrag: r,
  selectionOnDrag: o,
  onSelectionStart: i,
  onSelectionEnd: l,
  onPaneClick: s,
  onPaneContextMenu: u,
  onPaneScroll: a,
  onPaneMouseEnter: d,
  onPaneMouseMove: f,
  onPaneMouseLeave: c,
  children: p,
}) {
  const y = ce(),
    { userSelectionActive: w, elementsSelectable: S, dragging: g } = te(c_, ge),
    m = S && (e || w),
    h = D.useRef(null),
    v = D.useRef(),
    C = D.useRef(new Set()),
    M = D.useRef(new Set()),
    _ = D.useRef(!1),
    P = D.useRef(!1),
    $ = (k) => {
      if (_.current) {
        _.current = !1;
        return;
      }
      s == null || s(k),
        y.getState().resetSelectedElements(),
        y.setState({
          nodesSelectionActive: !1,
        });
    },
    T = (k) => {
      if (Array.isArray(r) && r != null && r.includes(2)) {
        k.preventDefault();
        return;
      }
      u == null || u(k);
    },
    V = a ? (k) => a(k) : void 0,
    F = (k) => {
      var A, j;
      const { resetSelectedElements: L, domNode: E } = y.getState();
      if (
        ((v.current = E == null ? void 0 : E.getBoundingClientRect()),
        !S || !e || k.button !== 0 || k.target !== h.current || !v.current)
      )
        return;
      (j = (A = k.target) == null ? void 0 : A.setPointerCapture) == null || j.call(A, k.pointerId),
        (P.current = !0),
        (_.current = !1);
      const { x: N, y: z } = Mt(k.nativeEvent, v.current);
      L(),
        y.setState({
          userSelectionRect: {
            width: 0,
            height: 0,
            startX: N,
            startY: z,
            x: N,
            y: z,
          },
        }),
        i == null || i(k);
    },
    O = (k) => {
      const {
        userSelectionRect: L,
        transform: E,
        nodeLookup: N,
        edgeLookup: z,
        connectionLookup: A,
        triggerNodeChanges: j,
        triggerEdgeChanges: K,
        defaultEdgeOptions: U,
      } = y.getState();
      if (!v.current || !L) return;
      _.current = !0;
      const { x: X, y: Y } = Mt(k.nativeEvent, v.current),
        { startX: B, startY: G } = L,
        Z = {
          startX: B,
          startY: G,
          x: X < B ? X : B,
          y: Y < G ? Y : G,
          width: Math.abs(X - B),
          height: Math.abs(Y - G),
        },
        re = C.current,
        J = M.current;
      (C.current = new Set(tg(N, Z, E, n === yo.Partial, !0).map((ne) => ne.id))), (M.current = new Set());
      const Q = (U == null ? void 0 : U.selectable) ?? !0;
      for (const ne of C.current) {
        const le = A.get(ne);
        if (le)
          for (const { edgeId: _e } of le.values()) {
            const tt = z.get(_e);
            tt && (tt.selectable ?? Q) && M.current.add(_e);
          }
      }
      if (!kf(re, C.current)) {
        const ne = Un(N, C.current, !0);
        j(ne);
      }
      if (!kf(J, M.current)) {
        const ne = Un(z, M.current);
        K(ne);
      }
      y.setState({
        userSelectionRect: Z,
        userSelectionActive: !0,
        nodesSelectionActive: !1,
      });
    },
    x = (k) => {
      var E, N;
      if (k.button !== 0 || !P.current) return;
      (N = (E = k.target) == null ? void 0 : E.releasePointerCapture) == null || N.call(E, k.pointerId);
      const { userSelectionRect: L } = y.getState();
      !w && L && k.target === h.current && ($ == null || $(k)),
        y.setState({
          userSelectionActive: !1,
          userSelectionRect: null,
          nodesSelectionActive: C.current.size > 0,
        }),
        l == null || l(k),
        (t || o) && (_.current = !1),
        (P.current = !1);
    },
    I = r === !0 || (Array.isArray(r) && r.includes(0));
  return R.jsxs('div', {
    className: ve([
      'react-flow__pane',
      {
        draggable: I,
        dragging: g,
        selection: e,
      },
    ]),
    onClick: m ? void 0 : Ss($, h),
    onContextMenu: Ss(T, h),
    onWheel: Ss(V, h),
    onPointerEnter: m ? void 0 : d,
    onPointerDown: m ? F : f,
    onPointerMove: m ? O : f,
    onPointerUp: m ? x : void 0,
    onPointerLeave: c,
    ref: h,
    style: Rl,
    children: [p, R.jsx(a_, {})],
  });
}
function Lu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const {
      addSelectedNodes: o,
      unselectNodesAndEdges: i,
      multiSelectionActive: l,
      nodeLookup: s,
      onError: u,
    } = t.getState(),
    a = s.get(e);
  if (!a) {
    u == null || u('012', $t.error012(e));
    return;
  }
  t.setState({
    nodesSelectionActive: !1,
  }),
    a.selected
      ? (n || (a.selected && l)) &&
        (i({
          nodes: [a],
          edges: [],
        }),
        requestAnimationFrame(() => {
          var d;
          return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
        }))
      : o([e]);
}
function Hg({
  nodeRef: e,
  disabled: t = !1,
  noDragClassName: n,
  handleSelector: r,
  nodeId: o,
  isSelectable: i,
  nodeClickDistance: l,
}) {
  const s = ce(),
    [u, a] = D.useState(!1),
    d = D.useRef();
  return (
    D.useEffect(() => {
      d.current = OS({
        getStoreItems: () => s.getState(),
        onNodeMouseDown: (f) => {
          Lu({
            id: f,
            store: s,
            nodeRef: e,
          });
        },
        onDragStart: () => {
          a(!0);
        },
        onDragStop: () => {
          a(!1);
        },
      });
    }, []),
    D.useEffect(() => {
      var f, c;
      if (t) (f = d.current) == null || f.destroy();
      else if (e.current)
        return (
          (c = d.current) == null ||
            c.update({
              noDragClassName: n,
              handleSelector: r,
              domNode: e.current,
              isSelectable: i,
              nodeId: o,
              nodeClickDistance: l,
            }),
          () => {
            var p;
            (p = d.current) == null || p.destroy();
          }
        );
    }, [n, r, t, i, e, o]),
    u
  );
}
const d_ = (e) => (t) => t.selected && (t.draggable || (e && typeof t.draggable > 'u'));
function jg() {
  const e = ce();
  return D.useCallback((n) => {
    const {
        nodeExtent: r,
        snapToGrid: o,
        snapGrid: i,
        nodesDraggable: l,
        onError: s,
        updateNodePositions: u,
        nodeLookup: a,
        nodeOrigin: d,
      } = e.getState(),
      f = new Map(),
      c = d_(l),
      p = o ? i[0] : 5,
      y = o ? i[1] : 5,
      w = n.direction.x * p * n.factor,
      S = n.direction.y * y * n.factor;
    for (const [, g] of a) {
      if (!c(g)) continue;
      let m = {
        x: g.internals.positionAbsolute.x + w,
        y: g.internals.positionAbsolute.y + S,
      };
      o && (m = Ml(m, i));
      const { position: h, positionAbsolute: v } = ng({
        nodeId: g.id,
        nextPosition: m,
        nodeLookup: a,
        nodeExtent: r,
        nodeOrigin: d,
        onError: s,
      });
      (g.position = h), (g.internals.positionAbsolute = v), f.set(g.id, g);
    }
    u(f);
  }, []);
}
const Ha = D.createContext(null),
  p_ = Ha.Provider;
Ha.Consumer;
const Bg = () => D.useContext(Ha),
  h_ = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  g_ = (e, t, n) => (r) => {
    const { connectionClickStartHandle: o, connectionMode: i, connection: l } = r,
      { fromHandle: s, toHandle: u, isValid: a } = l,
      d =
        (u == null ? void 0 : u.nodeId) === e &&
        (u == null ? void 0 : u.id) === t &&
        (u == null ? void 0 : u.type) === n;
    return {
      connectingFrom:
        (s == null ? void 0 : s.nodeId) === e &&
        (s == null ? void 0 : s.id) === t &&
        (s == null ? void 0 : s.type) === n,
      connectingTo: d,
      clickConnecting:
        (o == null ? void 0 : o.nodeId) === e &&
        (o == null ? void 0 : o.id) === t &&
        (o == null ? void 0 : o.type) === n,
      isPossibleEndHandle:
        i === sr.Strict
          ? (s == null ? void 0 : s.type) !== n
          : e !== (s == null ? void 0 : s.nodeId) || t !== (s == null ? void 0 : s.id),
      connectionInProcess: !!s,
      valid: d && a,
    };
  };
function m_(
  {
    type: e = 'source',
    position: t = b.Top,
    isValidConnection: n,
    isConnectable: r = !0,
    isConnectableStart: o = !0,
    isConnectableEnd: i = !0,
    id: l,
    onConnect: s,
    children: u,
    className: a,
    onMouseDown: d,
    onTouchStart: f,
    ...c
  },
  p,
) {
  var x, I;
  const y = l || null,
    w = e === 'target',
    S = ce(),
    g = Bg(),
    { connectOnClick: m, noPanClassName: h, rfId: v } = te(h_, ge),
    {
      connectingFrom: C,
      connectingTo: M,
      clickConnecting: _,
      isPossibleEndHandle: P,
      connectionInProcess: $,
      valid: T,
    } = te(g_(g, y, e), ge);
  g || (I = (x = S.getState()).onError) == null || I.call(x, '010', $t.error010());
  const V = (k) => {
      const { defaultEdgeOptions: L, onConnect: E, hasDefaultEdges: N } = S.getState(),
        z = {
          ...L,
          ...k,
        };
      if (N) {
        const { edges: A, setEdges: j } = S.getState();
        j(hg(z, A));
      }
      E == null || E(z), s == null || s(z);
    },
    F = (k) => {
      if (!g) return;
      const L = cg(k.nativeEvent);
      if (o && ((L && k.button === 0) || !L)) {
        const E = S.getState();
        Ru.onPointerDown(k.nativeEvent, {
          autoPanOnConnect: E.autoPanOnConnect,
          connectionMode: E.connectionMode,
          connectionRadius: E.connectionRadius,
          domNode: E.domNode,
          nodeLookup: E.nodeLookup,
          lib: E.lib,
          isTarget: w,
          handleId: y,
          nodeId: g,
          flowId: E.rfId,
          panBy: E.panBy,
          cancelConnection: E.cancelConnection,
          onConnectStart: E.onConnectStart,
          onConnectEnd: E.onConnectEnd,
          updateConnection: E.updateConnection,
          onConnect: V,
          isValidConnection: n || E.isValidConnection,
          getTransform: () => S.getState().transform,
          getFromHandle: () => S.getState().connection.fromHandle,
          autoPanSpeed: E.autoPanSpeed,
        });
      }
      L ? d == null || d(k) : f == null || f(k);
    },
    O = (k) => {
      const {
        onClickConnectStart: L,
        onClickConnectEnd: E,
        connectionClickStartHandle: N,
        connectionMode: z,
        isValidConnection: A,
        lib: j,
        rfId: K,
        nodeLookup: U,
        connection: X,
      } = S.getState();
      if (!g || (!N && !o)) return;
      if (!N) {
        L == null ||
          L(k.nativeEvent, {
            nodeId: g,
            handleId: y,
            handleType: e,
          }),
          S.setState({
            connectionClickStartHandle: {
              nodeId: g,
              type: e,
              id: y,
            },
          });
        return;
      }
      const Y = ag(k.target),
        B = n || A,
        { connection: G, isValid: Z } = Ru.isValid(k.nativeEvent, {
          handle: {
            nodeId: g,
            id: y,
            type: e,
          },
          connectionMode: z,
          fromNodeId: N.nodeId,
          fromHandleId: N.id || null,
          fromType: N.type,
          isValidConnection: B,
          flowId: K,
          doc: Y,
          lib: j,
          nodeLookup: U,
        });
      Z && G && V(G);
      const re = structuredClone(X);
      delete re.inProgress,
        (re.toPosition = re.toHandle ? re.toHandle.position : null),
        E == null || E(k, re),
        S.setState({
          connectionClickStartHandle: null,
        });
    };
  return R.jsx('div', {
    'data-handleid': y,
    'data-nodeid': g,
    'data-handlepos': t,
    'data-id': `${v}-${g}-${y}-${e}`,
    className: ve([
      'react-flow__handle',
      `react-flow__handle-${t}`,
      'nodrag',
      h,
      a,
      {
        source: !w,
        target: w,
        connectable: r,
        connectablestart: o,
        connectableend: i,
        clickconnecting: _,
        connectingfrom: C,
        connectingto: M,
        valid: T,
        connectionindicator: r && (!$ || P) && ($ ? i : o),
      },
    ]),
    onMouseDown: F,
    onTouchStart: F,
    onClick: m ? O : void 0,
    ref: p,
    ...c,
    children: u,
  });
}
const nl = D.memo(Fg(m_));
function y_({ data: e, isConnectable: t, sourcePosition: n = b.Bottom }) {
  return R.jsxs(R.Fragment, {
    children: [
      e == null ? void 0 : e.label,
      R.jsx(nl, {
        type: 'source',
        position: n,
        isConnectable: t,
      }),
    ],
  });
}
function v_({ data: e, isConnectable: t, targetPosition: n = b.Top, sourcePosition: r = b.Bottom }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(nl, {
        type: 'target',
        position: n,
        isConnectable: t,
      }),
      e == null ? void 0 : e.label,
      R.jsx(nl, {
        type: 'source',
        position: r,
        isConnectable: t,
      }),
    ],
  });
}
function w_() {
  return null;
}
function x_({ data: e, isConnectable: t, targetPosition: n = b.Top }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(nl, {
        type: 'target',
        position: n,
        isConnectable: t,
      }),
      e == null ? void 0 : e.label,
    ],
  });
}
const rl = {
    ArrowUp: {
      x: 0,
      y: -1,
    },
    ArrowDown: {
      x: 0,
      y: 1,
    },
    ArrowLeft: {
      x: -1,
      y: 0,
    },
    ArrowRight: {
      x: 1,
      y: 0,
    },
  },
  Gf = {
    input: y_,
    default: v_,
    output: x_,
    group: w_,
  };
function S_(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0
    ? {
        width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
        height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height),
      }
    : {
        width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
        height: e.height ?? ((o = e.style) == null ? void 0 : o.height),
      };
}
const E_ = (e) => {
  const {
    width: t,
    height: n,
    x: r,
    y: o,
  } = To(e.nodeLookup, {
    filter: (i) => !!i.selected,
  });
  return {
    width: ut(t) ? t : null,
    height: ut(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`,
  };
};
function __({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = ce(),
    { width: o, height: i, transformString: l, userSelectionActive: s } = te(E_, ge),
    u = jg(),
    a = D.useRef(null);
  if (
    (D.useEffect(() => {
      var c;
      n ||
        (c = a.current) == null ||
        c.focus({
          preventScroll: !0,
        });
    }, [n]),
    Hg({
      nodeRef: a,
    }),
    s || !o || !i)
  )
    return null;
  const d = e
      ? (c) => {
          const p = r.getState().nodes.filter((y) => y.selected);
          e(c, p);
        }
      : void 0,
    f = (c) => {
      Object.prototype.hasOwnProperty.call(rl, c.key) &&
        (c.preventDefault(),
        u({
          direction: rl[c.key],
          factor: c.shiftKey ? 4 : 1,
        }));
    };
  return R.jsx('div', {
    className: ve(['react-flow__nodesselection', 'react-flow__container', t]),
    style: {
      transform: l,
    },
    children: R.jsx('div', {
      ref: a,
      className: 'react-flow__nodesselection-rect',
      onContextMenu: d,
      tabIndex: n ? void 0 : -1,
      onKeyDown: n ? void 0 : f,
      style: {
        width: o,
        height: i,
      },
    }),
  });
}
const Qf = typeof window < 'u' ? window : void 0,
  k_ = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function Ug({
  children: e,
  onPaneClick: t,
  onPaneMouseEnter: n,
  onPaneMouseMove: r,
  onPaneMouseLeave: o,
  onPaneContextMenu: i,
  onPaneScroll: l,
  paneClickDistance: s,
  deleteKeyCode: u,
  selectionKeyCode: a,
  selectionOnDrag: d,
  selectionMode: f,
  onSelectionStart: c,
  onSelectionEnd: p,
  multiSelectionKeyCode: y,
  panActivationKeyCode: w,
  zoomActivationKeyCode: S,
  elementsSelectable: g,
  zoomOnScroll: m,
  zoomOnPinch: h,
  panOnScroll: v,
  panOnScrollSpeed: C,
  panOnScrollMode: M,
  zoomOnDoubleClick: _,
  panOnDrag: P,
  defaultViewport: $,
  translateExtent: T,
  minZoom: V,
  maxZoom: F,
  preventScrolling: O,
  onSelectionContextMenu: x,
  noWheelClassName: I,
  noPanClassName: k,
  disableKeyboardA11y: L,
  onViewportChange: E,
  isControlledViewport: N,
}) {
  const { nodesSelectionActive: z, userSelectionActive: A } = te(k_),
    j = xo(a, {
      target: Qf,
    }),
    K = xo(w, {
      target: Qf,
    }),
    U = K || P,
    X = K || v,
    Y = d && U !== !0,
    B = j || A || Y;
  return (
    o_({
      deleteKeyCode: u,
      multiSelectionKeyCode: y,
    }),
    R.jsx(s_, {
      onPaneContextMenu: i,
      elementsSelectable: g,
      zoomOnScroll: m,
      zoomOnPinch: h,
      panOnScroll: X,
      panOnScrollSpeed: C,
      panOnScrollMode: M,
      zoomOnDoubleClick: _,
      panOnDrag: !j && U,
      defaultViewport: $,
      translateExtent: T,
      minZoom: V,
      maxZoom: F,
      zoomActivationKeyCode: S,
      preventScrolling: O,
      noWheelClassName: I,
      noPanClassName: k,
      onViewportChange: E,
      isControlledViewport: N,
      paneClickDistance: s,
      children: R.jsxs(f_, {
        onSelectionStart: c,
        onSelectionEnd: p,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: o,
        onPaneContextMenu: i,
        onPaneScroll: l,
        panOnDrag: U,
        isSelecting: !!B,
        selectionMode: f,
        selectionKeyPressed: j,
        selectionOnDrag: Y,
        children: [
          e,
          z &&
            R.jsx(__, {
              onSelectionContextMenu: x,
              noPanClassName: k,
              disableKeyboardA11y: L,
            }),
        ],
      }),
    })
  );
}
Ug.displayName = 'FlowRenderer';
const C_ = D.memo(Ug),
  N_ = (e) => (t) =>
    e
      ? tg(
          t.nodeLookup,
          {
            x: 0,
            y: 0,
            width: t.width,
            height: t.height,
          },
          t.transform,
          !0,
        ).map((n) => n.id)
      : Array.from(t.nodeLookup.keys());
function M_(e) {
  return te(D.useCallback(N_(e), [e]), ge);
}
const P_ = (e) => e.updateNodeInternals;
function T_() {
  const e = te(P_),
    [t] = D.useState(() =>
      typeof ResizeObserver > 'u'
        ? null
        : new ResizeObserver((n) => {
            const r = new Map();
            n.forEach((o) => {
              const i = o.target.getAttribute('data-id');
              r.set(i, {
                id: i,
                nodeElement: o.target,
                force: !0,
              });
            }),
              e(r);
          }),
    );
  return (
    D.useEffect(
      () => () => {
        t == null || t.disconnect();
      },
      [t],
    ),
    t
  );
}
function I_({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = ce(),
    i = D.useRef(null),
    l = D.useRef(null),
    s = D.useRef(e.sourcePosition),
    u = D.useRef(e.targetPosition),
    a = D.useRef(t),
    d = n && !!e.internals.handleBounds;
  return (
    D.useEffect(() => {
      i.current &&
        !e.hidden &&
        (!d || l.current !== i.current) &&
        (l.current && (r == null || r.unobserve(l.current)),
        r == null || r.observe(i.current),
        (l.current = i.current));
    }, [d, e.hidden]),
    D.useEffect(
      () => () => {
        l.current && (r == null || r.unobserve(l.current), (l.current = null));
      },
      [],
    ),
    D.useEffect(() => {
      if (i.current) {
        const f = a.current !== t,
          c = s.current !== e.sourcePosition,
          p = u.current !== e.targetPosition;
        (f || c || p) &&
          ((a.current = t),
          (s.current = e.sourcePosition),
          (u.current = e.targetPosition),
          o.getState().updateNodeInternals(
            new Map([
              [
                e.id,
                {
                  id: e.id,
                  nodeElement: i.current,
                  force: !0,
                },
              ],
            ]),
          ));
      }
    }, [e.id, t, e.sourcePosition, e.targetPosition]),
    i
  );
}
function z_({
  id: e,
  onClick: t,
  onMouseEnter: n,
  onMouseMove: r,
  onMouseLeave: o,
  onContextMenu: i,
  onDoubleClick: l,
  nodesDraggable: s,
  elementsSelectable: u,
  nodesConnectable: a,
  nodesFocusable: d,
  resizeObserver: f,
  noDragClassName: c,
  noPanClassName: p,
  disableKeyboardA11y: y,
  rfId: w,
  nodeTypes: S,
  nodeClickDistance: g,
  onError: m,
}) {
  const {
    node: h,
    internals: v,
    isParent: C,
  } = te((B) => {
    const G = B.nodeLookup.get(e),
      Z = B.parentLookup.has(e);
    return {
      node: G,
      internals: G.internals,
      isParent: Z,
    };
  }, ge);
  let M = h.type || 'default',
    _ = (S == null ? void 0 : S[M]) || Gf[M];
  _ === void 0 && (m == null || m('003', $t.error003(M)), (M = 'default'), (_ = Gf.default));
  const P = !!(h.draggable || (s && typeof h.draggable > 'u')),
    $ = !!(h.selectable || (u && typeof h.selectable > 'u')),
    T = !!(h.connectable || (a && typeof h.connectable > 'u')),
    V = !!(h.focusable || (d && typeof h.focusable > 'u')),
    F = ce(),
    O = sg(h),
    x = I_({
      node: h,
      nodeType: M,
      hasDimensions: O,
      resizeObserver: f,
    }),
    I = Hg({
      nodeRef: x,
      disabled: h.hidden || !P,
      noDragClassName: c,
      handleSelector: h.dragHandle,
      nodeId: e,
      isSelectable: $,
      nodeClickDistance: g,
    }),
    k = jg();
  if (h.hidden) return null;
  const L = Dt(h),
    E = S_(h),
    N = $ || P || t || n || r || o,
    z = n
      ? (B) =>
          n(B, {
            ...v.userNode,
          })
      : void 0,
    A = r
      ? (B) =>
          r(B, {
            ...v.userNode,
          })
      : void 0,
    j = o
      ? (B) =>
          o(B, {
            ...v.userNode,
          })
      : void 0,
    K = i
      ? (B) =>
          i(B, {
            ...v.userNode,
          })
      : void 0,
    U = l
      ? (B) =>
          l(B, {
            ...v.userNode,
          })
      : void 0,
    X = (B) => {
      const { selectNodesOnDrag: G, nodeDragThreshold: Z } = F.getState();
      $ &&
        (!G || !P || Z > 0) &&
        Lu({
          id: e,
          store: F,
          nodeRef: x,
        }),
        t &&
          t(B, {
            ...v.userNode,
          });
    },
    Y = (B) => {
      if (!(Pu(B.nativeEvent) || y))
        if (Zh.includes(B.key) && $) {
          const G = B.key === 'Escape';
          Lu({
            id: e,
            store: F,
            unselect: G,
            nodeRef: x,
          });
        } else
          P &&
            h.selected &&
            Object.prototype.hasOwnProperty.call(rl, B.key) &&
            (B.preventDefault(),
            F.setState({
              ariaLiveMessage: `Moved selected node ${B.key.replace('Arrow', '').toLowerCase()}. New position, x: ${~~v.positionAbsolute.x}, y: ${~~v.positionAbsolute.y}`,
            }),
            k({
              direction: rl[B.key],
              factor: B.shiftKey ? 4 : 1,
            }));
    };
  return R.jsx('div', {
    className: ve([
      'react-flow__node',
      `react-flow__node-${M}`,
      {
        [p]: P,
      },
      h.className,
      {
        selected: h.selected,
        selectable: $,
        parent: C,
        draggable: P,
        dragging: I,
      },
    ]),
    ref: x,
    style: {
      zIndex: v.z,
      transform: `translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,
      pointerEvents: N ? 'all' : 'none',
      visibility: O ? 'visible' : 'hidden',
      ...h.style,
      ...E,
    },
    'data-id': e,
    'data-testid': `rf__node-${e}`,
    onMouseEnter: z,
    onMouseMove: A,
    onMouseLeave: j,
    onContextMenu: K,
    onClick: X,
    onDoubleClick: U,
    onKeyDown: V ? Y : void 0,
    tabIndex: V ? 0 : void 0,
    role: V ? 'button' : void 0,
    'aria-describedby': y ? void 0 : `${Rg}-${w}`,
    'aria-label': h.ariaLabel,
    children: R.jsx(p_, {
      value: e,
      children: R.jsx(_, {
        id: e,
        data: h.data,
        type: M,
        positionAbsoluteX: v.positionAbsolute.x,
        positionAbsoluteY: v.positionAbsolute.y,
        selected: h.selected ?? !1,
        selectable: $,
        draggable: P,
        deletable: h.deletable ?? !0,
        isConnectable: T,
        sourcePosition: h.sourcePosition,
        targetPosition: h.targetPosition,
        dragging: I,
        dragHandle: h.dragHandle,
        zIndex: v.z,
        parentId: h.parentId,
        ...L,
      }),
    }),
  });
}
const R_ = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function Wg(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = te(R_, ge),
    l = M_(e.onlyRenderVisibleElements),
    s = T_();
  return R.jsx('div', {
    className: 'react-flow__nodes',
    style: Rl,
    children: l.map((u) =>
      R.jsx(
        z_,
        {
          id: u,
          nodeTypes: e.nodeTypes,
          nodeExtent: e.nodeExtent,
          onClick: e.onNodeClick,
          onMouseEnter: e.onNodeMouseEnter,
          onMouseMove: e.onNodeMouseMove,
          onMouseLeave: e.onNodeMouseLeave,
          onContextMenu: e.onNodeContextMenu,
          onDoubleClick: e.onNodeDoubleClick,
          noDragClassName: e.noDragClassName,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
          disableKeyboardA11y: e.disableKeyboardA11y,
          resizeObserver: s,
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: o,
          nodeClickDistance: e.nodeClickDistance,
          onError: i,
        },
        u,
      ),
    ),
  });
}
Wg.displayName = 'NodeRenderer';
const L_ = D.memo(Wg);
function $_(e) {
  return te(
    D.useCallback(
      (n) => {
        if (!e) return n.edges.map((o) => o.id);
        const r = [];
        if (n.width && n.height)
          for (const o of n.edges) {
            const i = n.nodeLookup.get(o.source),
              l = n.nodeLookup.get(o.target);
            i &&
              l &&
              ES({
                sourceNode: i,
                targetNode: l,
                width: n.width,
                height: n.height,
                transform: n.transform,
              }) &&
              r.push(o.id);
          }
        return r;
      },
      [e],
    ),
    ge,
  );
}
const D_ = ({ color: e = 'none', strokeWidth: t = 1 }) =>
    R.jsx('polyline', {
      style: {
        stroke: e,
        strokeWidth: t,
      },
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
      points: '-5,-4 0,0 -5,4',
    }),
  A_ = ({ color: e = 'none', strokeWidth: t = 1 }) =>
    R.jsx('polyline', {
      style: {
        stroke: e,
        fill: e,
        strokeWidth: t,
      },
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      points: '-5,-4 0,0 -5,4 -5,-4',
    }),
  Zf = {
    [Ji.Arrow]: D_,
    [Ji.ArrowClosed]: A_,
  };
function O_(e) {
  const t = ce();
  return D.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Zf, e)
      ? Zf[e]
      : ((i = (o = t.getState()).onError) == null || i.call(o, '009', $t.error009(e)), null);
  }, [e]);
}
const F_ = ({
    id: e,
    type: t,
    color: n,
    width: r = 12.5,
    height: o = 12.5,
    markerUnits: i = 'strokeWidth',
    strokeWidth: l,
    orient: s = 'auto-start-reverse',
  }) => {
    const u = O_(t);
    return u
      ? R.jsx('marker', {
          className: 'react-flow__arrowhead',
          id: e,
          markerWidth: `${r}`,
          markerHeight: `${o}`,
          viewBox: '-10 -10 20 20',
          markerUnits: i,
          orient: s,
          refX: '0',
          refY: '0',
          children: R.jsx(u, {
            color: n,
            strokeWidth: l,
          }),
        })
      : null;
  },
  Yg = ({ defaultColor: e, rfId: t }) => {
    const n = te((i) => i.edges),
      r = te((i) => i.defaultEdgeOptions),
      o = D.useMemo(
        () =>
          TS(n, {
            id: t,
            defaultColor: e,
            defaultMarkerStart: r == null ? void 0 : r.markerStart,
            defaultMarkerEnd: r == null ? void 0 : r.markerEnd,
          }),
        [n, r, t, e],
      );
    return o.length
      ? R.jsx('svg', {
          className: 'react-flow__marker',
          children: R.jsx('defs', {
            children: o.map((i) =>
              R.jsx(
                F_,
                {
                  id: i.id,
                  type: i.type,
                  color: i.color,
                  width: i.width,
                  height: i.height,
                  markerUnits: i.markerUnits,
                  strokeWidth: i.strokeWidth,
                  orient: i.orient,
                },
                i.id,
              ),
            ),
          }),
        })
      : null;
  };
Yg.displayName = 'MarkerDefinitions';
var V_ = D.memo(Yg);
function Xg({
  x: e,
  y: t,
  label: n,
  labelStyle: r = {},
  labelShowBg: o = !0,
  labelBgStyle: i = {},
  labelBgPadding: l = [2, 4],
  labelBgBorderRadius: s = 2,
  children: u,
  className: a,
  ...d
}) {
  const [f, c] = D.useState({
      x: 1,
      y: 0,
      width: 0,
      height: 0,
    }),
    p = ve(['react-flow__edge-textwrapper', a]),
    y = D.useRef(null);
  return (
    D.useEffect(() => {
      if (y.current) {
        const w = y.current.getBBox();
        c({
          x: w.x,
          y: w.y,
          width: w.width,
          height: w.height,
        });
      }
    }, [n]),
    typeof n > 'u' || !n
      ? null
      : R.jsxs('g', {
          transform: `translate(${e - f.width / 2} ${t - f.height / 2})`,
          className: p,
          visibility: f.width ? 'visible' : 'hidden',
          ...d,
          children: [
            o &&
              R.jsx('rect', {
                width: f.width + 2 * l[0],
                x: -l[0],
                y: -l[1],
                height: f.height + 2 * l[1],
                className: 'react-flow__edge-textbg',
                style: i,
                rx: s,
                ry: s,
              }),
            R.jsx('text', {
              className: 'react-flow__edge-text',
              y: f.height / 2,
              dy: '0.3em',
              ref: y,
              style: r,
              children: n,
            }),
            u,
          ],
        })
  );
}
Xg.displayName = 'EdgeText';
const H_ = D.memo(Xg);
function Ll({
  path: e,
  labelX: t,
  labelY: n,
  label: r,
  labelStyle: o,
  labelShowBg: i,
  labelBgStyle: l,
  labelBgPadding: s,
  labelBgBorderRadius: u,
  interactionWidth: a = 20,
  ...d
}) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx('path', {
        ...d,
        d: e,
        fill: 'none',
        className: ve(['react-flow__edge-path', d.className]),
      }),
      a &&
        R.jsx('path', {
          d: e,
          fill: 'none',
          strokeOpacity: 0,
          strokeWidth: a,
          className: 'react-flow__edge-interaction',
        }),
      r && ut(t) && ut(n)
        ? R.jsx(H_, {
            x: t,
            y: n,
            label: r,
            labelStyle: o,
            labelShowBg: i,
            labelBgStyle: l,
            labelBgPadding: s,
            labelBgBorderRadius: u,
          })
        : null,
    ],
  });
}
function qf({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === b.Left || e === b.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function Kg({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = b.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = b.Top,
}) {
  const [l, s] = qf({
      pos: n,
      x1: e,
      y1: t,
      x2: r,
      y2: o,
    }),
    [u, a] = qf({
      pos: i,
      x1: r,
      y1: o,
      x2: e,
      y2: t,
    }),
    [d, f, c, p] = fg({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: l,
      sourceControlY: s,
      targetControlX: u,
      targetControlY: a,
    });
  return [`M${e},${t} C${l},${s} ${u},${a} ${r},${o}`, d, f, c, p];
}
function bg(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: l = b.Bottom,
      targetPosition: s = b.Top,
      label: u,
      labelStyle: a,
      labelShowBg: d,
      labelBgStyle: f,
      labelBgPadding: c,
      labelBgBorderRadius: p,
      style: y,
      markerEnd: w,
      markerStart: S,
      interactionWidth: g,
    }) => {
      const [m, h, v] = Kg({
          sourceX: n,
          sourceY: r,
          sourcePosition: l,
          targetX: o,
          targetY: i,
          targetPosition: s,
        }),
        C = e.isInternal ? void 0 : t;
      return R.jsx(Ll, {
        id: C,
        path: m,
        labelX: h,
        labelY: v,
        label: u,
        labelStyle: a,
        labelShowBg: d,
        labelBgStyle: f,
        labelBgPadding: c,
        labelBgBorderRadius: p,
        style: y,
        markerEnd: w,
        markerStart: S,
        interactionWidth: g,
      });
    },
  );
}
const j_ = bg({
    isInternal: !1,
  }),
  Gg = bg({
    isInternal: !0,
  });
j_.displayName = 'SimpleBezierEdge';
Gg.displayName = 'SimpleBezierEdgeInternal';
function Qg(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: l,
      labelStyle: s,
      labelShowBg: u,
      labelBgStyle: a,
      labelBgPadding: d,
      labelBgBorderRadius: f,
      style: c,
      sourcePosition: p = b.Bottom,
      targetPosition: y = b.Top,
      markerEnd: w,
      markerStart: S,
      pathOptions: g,
      interactionWidth: m,
    }) => {
      const [h, v, C] = Tu({
          sourceX: n,
          sourceY: r,
          sourcePosition: p,
          targetX: o,
          targetY: i,
          targetPosition: y,
          borderRadius: g == null ? void 0 : g.borderRadius,
          offset: g == null ? void 0 : g.offset,
        }),
        M = e.isInternal ? void 0 : t;
      return R.jsx(Ll, {
        id: M,
        path: h,
        labelX: v,
        labelY: C,
        label: l,
        labelStyle: s,
        labelShowBg: u,
        labelBgStyle: a,
        labelBgPadding: d,
        labelBgBorderRadius: f,
        style: c,
        markerEnd: w,
        markerStart: S,
        interactionWidth: m,
      });
    },
  );
}
const Zg = Qg({
    isInternal: !1,
  }),
  qg = Qg({
    isInternal: !0,
  });
Zg.displayName = 'SmoothStepEdge';
qg.displayName = 'SmoothStepEdgeInternal';
function Jg(e) {
  return D.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return R.jsx(Zg, {
      ...n,
      id: r,
      pathOptions: D.useMemo(() => {
        var i;
        return {
          borderRadius: 0,
          offset: (i = n.pathOptions) == null ? void 0 : i.offset,
        };
      }, [(o = n.pathOptions) == null ? void 0 : o.offset]),
    });
  });
}
const B_ = Jg({
    isInternal: !1,
  }),
  e0 = Jg({
    isInternal: !0,
  });
B_.displayName = 'StepEdge';
e0.displayName = 'StepEdgeInternal';
function t0(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: l,
      labelStyle: s,
      labelShowBg: u,
      labelBgStyle: a,
      labelBgPadding: d,
      labelBgBorderRadius: f,
      style: c,
      markerEnd: p,
      markerStart: y,
      interactionWidth: w,
    }) => {
      const [S, g, m] = gg({
          sourceX: n,
          sourceY: r,
          targetX: o,
          targetY: i,
        }),
        h = e.isInternal ? void 0 : t;
      return R.jsx(Ll, {
        id: h,
        path: S,
        labelX: g,
        labelY: m,
        label: l,
        labelStyle: s,
        labelShowBg: u,
        labelBgStyle: a,
        labelBgPadding: d,
        labelBgBorderRadius: f,
        style: c,
        markerEnd: p,
        markerStart: y,
        interactionWidth: w,
      });
    },
  );
}
const U_ = t0({
    isInternal: !1,
  }),
  n0 = t0({
    isInternal: !0,
  });
U_.displayName = 'StraightEdge';
n0.displayName = 'StraightEdgeInternal';
function r0(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: l = b.Bottom,
      targetPosition: s = b.Top,
      label: u,
      labelStyle: a,
      labelShowBg: d,
      labelBgStyle: f,
      labelBgPadding: c,
      labelBgBorderRadius: p,
      style: y,
      markerEnd: w,
      markerStart: S,
      pathOptions: g,
      interactionWidth: m,
    }) => {
      const [h, v, C] = dg({
          sourceX: n,
          sourceY: r,
          sourcePosition: l,
          targetX: o,
          targetY: i,
          targetPosition: s,
          curvature: g == null ? void 0 : g.curvature,
        }),
        M = e.isInternal ? void 0 : t;
      return R.jsx(Ll, {
        id: M,
        path: h,
        labelX: v,
        labelY: C,
        label: u,
        labelStyle: a,
        labelShowBg: d,
        labelBgStyle: f,
        labelBgPadding: c,
        labelBgBorderRadius: p,
        style: y,
        markerEnd: w,
        markerStart: S,
        interactionWidth: m,
      });
    },
  );
}
const W_ = r0({
    isInternal: !1,
  }),
  o0 = r0({
    isInternal: !0,
  });
W_.displayName = 'BezierEdge';
o0.displayName = 'BezierEdgeInternal';
const Jf = {
    default: o0,
    straight: n0,
    step: e0,
    smoothstep: qg,
    simplebezier: Gg,
  },
  ed = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
  },
  Y_ = (e, t, n) => (n === b.Left ? e - t : n === b.Right ? e + t : e),
  X_ = (e, t, n) => (n === b.Top ? e - t : n === b.Bottom ? e + t : e),
  td = 'react-flow__edgeupdater';
function nd({
  position: e,
  centerX: t,
  centerY: n,
  radius: r = 10,
  onMouseDown: o,
  onMouseEnter: i,
  onMouseOut: l,
  type: s,
}) {
  return R.jsx('circle', {
    onMouseDown: o,
    onMouseEnter: i,
    onMouseOut: l,
    className: ve([td, `${td}-${s}`]),
    cx: Y_(t, r, e),
    cy: X_(n, r, e),
    r,
    stroke: 'transparent',
    fill: 'transparent',
  });
}
function K_({
  isReconnectable: e,
  reconnectRadius: t,
  edge: n,
  sourceX: r,
  sourceY: o,
  targetX: i,
  targetY: l,
  sourcePosition: s,
  targetPosition: u,
  onReconnect: a,
  onReconnectStart: d,
  onReconnectEnd: f,
  setReconnecting: c,
  setUpdateHover: p,
}) {
  const y = ce(),
    w = (v, C) => {
      if (v.button !== 0) return;
      const {
          autoPanOnConnect: M,
          domNode: _,
          isValidConnection: P,
          connectionMode: $,
          connectionRadius: T,
          lib: V,
          onConnectStart: F,
          onConnectEnd: O,
          cancelConnection: x,
          nodeLookup: I,
          rfId: k,
          panBy: L,
          updateConnection: E,
        } = y.getState(),
        N = C.type === 'target';
      c(!0), d == null || d(v, n, C.type);
      const z = (j, K) => {
          c(!1), f == null || f(j, n, C.type, K);
        },
        A = (j) => (a == null ? void 0 : a(n, j));
      Ru.onPointerDown(v.nativeEvent, {
        autoPanOnConnect: M,
        connectionMode: $,
        connectionRadius: T,
        domNode: _,
        handleId: C.id,
        nodeId: C.nodeId,
        nodeLookup: I,
        isTarget: N,
        edgeUpdaterType: C.type,
        lib: V,
        flowId: k,
        cancelConnection: x,
        panBy: L,
        isValidConnection: P,
        onConnect: A,
        onConnectStart: F,
        onConnectEnd: O,
        onReconnectEnd: z,
        updateConnection: E,
        getTransform: () => y.getState().transform,
        getFromHandle: () => y.getState().connection.fromHandle,
      });
    },
    S = (v) =>
      w(v, {
        nodeId: n.target,
        id: n.targetHandle ?? null,
        type: 'target',
      }),
    g = (v) =>
      w(v, {
        nodeId: n.source,
        id: n.sourceHandle ?? null,
        type: 'source',
      }),
    m = () => p(!0),
    h = () => p(!1);
  return R.jsxs(R.Fragment, {
    children: [
      (e === !0 || e === 'source') &&
        R.jsx(nd, {
          position: s,
          centerX: r,
          centerY: o,
          radius: t,
          onMouseDown: S,
          onMouseEnter: m,
          onMouseOut: h,
          type: 'source',
        }),
      (e === !0 || e === 'target') &&
        R.jsx(nd, {
          position: u,
          centerX: i,
          centerY: l,
          radius: t,
          onMouseDown: g,
          onMouseEnter: m,
          onMouseOut: h,
          type: 'target',
        }),
    ],
  });
}
function b_({
  id: e,
  edgesFocusable: t,
  edgesReconnectable: n,
  elementsSelectable: r,
  onClick: o,
  onDoubleClick: i,
  onContextMenu: l,
  onMouseEnter: s,
  onMouseMove: u,
  onMouseLeave: a,
  reconnectRadius: d,
  onReconnect: f,
  onReconnectStart: c,
  onReconnectEnd: p,
  rfId: y,
  edgeTypes: w,
  noPanClassName: S,
  onError: g,
  disableKeyboardA11y: m,
}) {
  let h = te((Q) => Q.edgeLookup.get(e));
  const v = te((Q) => Q.defaultEdgeOptions);
  h = v
    ? {
        ...v,
        ...h,
      }
    : h;
  let C = h.type || 'default',
    M = (w == null ? void 0 : w[C]) || Jf[C];
  M === void 0 && (g == null || g('011', $t.error011(C)), (C = 'default'), (M = Jf.default));
  const _ = !!(h.focusable || (t && typeof h.focusable > 'u')),
    P = typeof f < 'u' && (h.reconnectable || (n && typeof h.reconnectable > 'u')),
    $ = !!(h.selectable || (r && typeof h.selectable > 'u')),
    T = D.useRef(null),
    [V, F] = D.useState(!1),
    [O, x] = D.useState(!1),
    I = ce(),
    {
      zIndex: k,
      sourceX: L,
      sourceY: E,
      targetX: N,
      targetY: z,
      sourcePosition: A,
      targetPosition: j,
    } = te(
      D.useCallback(
        (Q) => {
          const ne = Q.nodeLookup.get(h.source),
            le = Q.nodeLookup.get(h.target);
          if (!ne || !le)
            return {
              zIndex: h.zIndex,
              ...ed,
            };
          const _e = PS({
            id: e,
            sourceNode: ne,
            targetNode: le,
            sourceHandle: h.sourceHandle || null,
            targetHandle: h.targetHandle || null,
            connectionMode: Q.connectionMode,
            onError: g,
          });
          return {
            zIndex: SS({
              selected: h.selected,
              zIndex: h.zIndex,
              sourceNode: ne,
              targetNode: le,
              elevateOnSelect: Q.elevateEdgesOnSelect,
            }),
            ...(_e || ed),
          };
        },
        [h.source, h.target, h.sourceHandle, h.targetHandle, h.selected, h.zIndex],
      ),
      ge,
    ),
    K = D.useMemo(() => (h.markerStart ? `url('#${Iu(h.markerStart, y)}')` : void 0), [h.markerStart, y]),
    U = D.useMemo(() => (h.markerEnd ? `url('#${Iu(h.markerEnd, y)}')` : void 0), [h.markerEnd, y]);
  if (h.hidden || L === null || E === null || N === null || z === null) return null;
  const X = (Q) => {
      var tt;
      const { addSelectedEdges: ne, unselectNodesAndEdges: le, multiSelectionActive: _e } = I.getState();
      $ &&
        (I.setState({
          nodesSelectionActive: !1,
        }),
        h.selected && _e
          ? (le({
              nodes: [],
              edges: [h],
            }),
            (tt = T.current) == null || tt.blur())
          : ne([e])),
        o && o(Q, h);
    },
    Y = i
      ? (Q) => {
          i(Q, {
            ...h,
          });
        }
      : void 0,
    B = l
      ? (Q) => {
          l(Q, {
            ...h,
          });
        }
      : void 0,
    G = s
      ? (Q) => {
          s(Q, {
            ...h,
          });
        }
      : void 0,
    Z = u
      ? (Q) => {
          u(Q, {
            ...h,
          });
        }
      : void 0,
    re = a
      ? (Q) => {
          a(Q, {
            ...h,
          });
        }
      : void 0,
    J = (Q) => {
      var ne;
      if (!m && Zh.includes(Q.key) && $) {
        const { unselectNodesAndEdges: le, addSelectedEdges: _e } = I.getState();
        Q.key === 'Escape'
          ? ((ne = T.current) == null || ne.blur(),
            le({
              edges: [h],
            }))
          : _e([e]);
      }
    };
  return R.jsx('svg', {
    style: {
      zIndex: k,
    },
    children: R.jsxs('g', {
      className: ve([
        'react-flow__edge',
        `react-flow__edge-${C}`,
        h.className,
        S,
        {
          selected: h.selected,
          animated: h.animated,
          inactive: !$ && !o,
          updating: V,
          selectable: $,
        },
      ]),
      onClick: X,
      onDoubleClick: Y,
      onContextMenu: B,
      onMouseEnter: G,
      onMouseMove: Z,
      onMouseLeave: re,
      onKeyDown: _ ? J : void 0,
      tabIndex: _ ? 0 : void 0,
      role: _ ? 'button' : 'img',
      'data-id': e,
      'data-testid': `rf__edge-${e}`,
      'aria-label': h.ariaLabel === null ? void 0 : h.ariaLabel || `Edge from ${h.source} to ${h.target}`,
      'aria-describedby': _ ? `${Lg}-${y}` : void 0,
      ref: T,
      children: [
        !O &&
          R.jsx(M, {
            id: e,
            source: h.source,
            target: h.target,
            type: h.type,
            selected: h.selected,
            animated: h.animated,
            selectable: $,
            deletable: h.deletable ?? !0,
            label: h.label,
            labelStyle: h.labelStyle,
            labelShowBg: h.labelShowBg,
            labelBgStyle: h.labelBgStyle,
            labelBgPadding: h.labelBgPadding,
            labelBgBorderRadius: h.labelBgBorderRadius,
            sourceX: L,
            sourceY: E,
            targetX: N,
            targetY: z,
            sourcePosition: A,
            targetPosition: j,
            data: h.data,
            style: h.style,
            sourceHandleId: h.sourceHandle,
            targetHandleId: h.targetHandle,
            markerStart: K,
            markerEnd: U,
            pathOptions: 'pathOptions' in h ? h.pathOptions : void 0,
            interactionWidth: h.interactionWidth,
          }),
        P &&
          R.jsx(K_, {
            edge: h,
            isReconnectable: P,
            reconnectRadius: d,
            onReconnect: f,
            onReconnectStart: c,
            onReconnectEnd: p,
            sourceX: L,
            sourceY: E,
            targetX: N,
            targetY: z,
            sourcePosition: A,
            targetPosition: j,
            setUpdateHover: F,
            setReconnecting: x,
          }),
      ],
    }),
  });
}
const G_ = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function i0({
  defaultMarkerColor: e,
  onlyRenderVisibleElements: t,
  rfId: n,
  edgeTypes: r,
  noPanClassName: o,
  onReconnect: i,
  onEdgeContextMenu: l,
  onEdgeMouseEnter: s,
  onEdgeMouseMove: u,
  onEdgeMouseLeave: a,
  onEdgeClick: d,
  reconnectRadius: f,
  onEdgeDoubleClick: c,
  onReconnectStart: p,
  onReconnectEnd: y,
  disableKeyboardA11y: w,
}) {
  const { edgesFocusable: S, edgesReconnectable: g, elementsSelectable: m, onError: h } = te(G_, ge),
    v = $_(t);
  return R.jsxs('div', {
    className: 'react-flow__edges',
    children: [
      R.jsx(V_, {
        defaultColor: e,
        rfId: n,
      }),
      v.map((C) =>
        R.jsx(
          b_,
          {
            id: C,
            edgesFocusable: S,
            edgesReconnectable: g,
            elementsSelectable: m,
            noPanClassName: o,
            onReconnect: i,
            onContextMenu: l,
            onMouseEnter: s,
            onMouseMove: u,
            onMouseLeave: a,
            onClick: d,
            reconnectRadius: f,
            onDoubleClick: c,
            onReconnectStart: p,
            onReconnectEnd: y,
            rfId: n,
            onError: h,
            edgeTypes: r,
            disableKeyboardA11y: w,
          },
          C,
        ),
      ),
    ],
  });
}
i0.displayName = 'EdgeRenderer';
const Q_ = D.memo(i0),
  Z_ = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function q_({ children: e }) {
  const t = te(Z_);
  return R.jsx('div', {
    className: 'react-flow__viewport xyflow__viewport react-flow__container',
    style: {
      transform: t,
    },
    children: e,
  });
}
function J_(e) {
  const t = Ro(),
    n = D.useRef(!1);
  D.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), (n.current = !0));
  }, [e, t.viewportInitialized]);
}
const ek = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function tk(e) {
  const t = te(ek),
    n = ce();
  return (
    D.useEffect(() => {
      e &&
        (t == null || t(e),
        n.setState({
          transform: [e.x, e.y, e.zoom],
        }));
    }, [e, t]),
    null
  );
}
function rd(e) {
  return e.connection.inProgress
    ? {
        ...e.connection,
        to: Io(e.connection.to, e.transform),
      }
    : {
        ...e.connection,
      };
}
function nk(e) {
  return e
    ? (n) => {
        const r = rd(n);
        return e(r);
      }
    : rd;
}
function rk(e) {
  const t = nk(e);
  return te(t, ge);
}
const ok = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function ik({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: l, isValid: s, inProgress: u } = te(ok, ge);
  return !(i && o && u)
    ? null
    : R.jsx('svg', {
        style: e,
        width: i,
        height: l,
        className: 'react-flow__connectionline react-flow__container',
        children: R.jsx('g', {
          className: ve(['react-flow__connection', Jh(s)]),
          children: R.jsx(l0, {
            style: t,
            type: n,
            CustomComponent: r,
            isValid: s,
          }),
        }),
      });
}
const l0 = ({ style: e, type: t = Wt.Bezier, CustomComponent: n, isValid: r }) => {
  const {
    inProgress: o,
    from: i,
    fromNode: l,
    fromHandle: s,
    fromPosition: u,
    to: a,
    toNode: d,
    toHandle: f,
    toPosition: c,
  } = rk();
  if (!o) return;
  if (n)
    return R.jsx(n, {
      connectionLineType: t,
      connectionLineStyle: e,
      fromNode: l,
      fromHandle: s,
      fromX: i.x,
      fromY: i.y,
      toX: a.x,
      toY: a.y,
      fromPosition: u,
      toPosition: c,
      connectionStatus: Jh(r),
      toNode: d,
      toHandle: f,
    });
  let p = '';
  const y = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: u,
    targetX: a.x,
    targetY: a.y,
    targetPosition: c,
  };
  switch (t) {
    case Wt.Bezier:
      [p] = dg(y);
      break;
    case Wt.SimpleBezier:
      [p] = Kg(y);
      break;
    case Wt.Step:
      [p] = Tu({
        ...y,
        borderRadius: 0,
      });
      break;
    case Wt.SmoothStep:
      [p] = Tu(y);
      break;
    default:
      [p] = gg(y);
  }
  return R.jsx('path', {
    d: p,
    fill: 'none',
    className: 'react-flow__connection-path',
    style: e,
  });
};
l0.displayName = 'ConnectionLine';
const lk = {};
function od(e = lk) {
  D.useRef(e), ce(), D.useEffect(() => {}, [e]);
}
function sk() {
  ce(), D.useRef(!1), D.useEffect(() => {}, []);
}
function s0({
  nodeTypes: e,
  edgeTypes: t,
  onInit: n,
  onNodeClick: r,
  onEdgeClick: o,
  onNodeDoubleClick: i,
  onEdgeDoubleClick: l,
  onNodeMouseEnter: s,
  onNodeMouseMove: u,
  onNodeMouseLeave: a,
  onNodeContextMenu: d,
  onSelectionContextMenu: f,
  onSelectionStart: c,
  onSelectionEnd: p,
  connectionLineType: y,
  connectionLineStyle: w,
  connectionLineComponent: S,
  connectionLineContainerStyle: g,
  selectionKeyCode: m,
  selectionOnDrag: h,
  selectionMode: v,
  multiSelectionKeyCode: C,
  panActivationKeyCode: M,
  zoomActivationKeyCode: _,
  deleteKeyCode: P,
  onlyRenderVisibleElements: $,
  elementsSelectable: T,
  defaultViewport: V,
  translateExtent: F,
  minZoom: O,
  maxZoom: x,
  preventScrolling: I,
  defaultMarkerColor: k,
  zoomOnScroll: L,
  zoomOnPinch: E,
  panOnScroll: N,
  panOnScrollSpeed: z,
  panOnScrollMode: A,
  zoomOnDoubleClick: j,
  panOnDrag: K,
  onPaneClick: U,
  onPaneMouseEnter: X,
  onPaneMouseMove: Y,
  onPaneMouseLeave: B,
  onPaneScroll: G,
  onPaneContextMenu: Z,
  paneClickDistance: re,
  nodeClickDistance: J,
  onEdgeContextMenu: Q,
  onEdgeMouseEnter: ne,
  onEdgeMouseMove: le,
  onEdgeMouseLeave: _e,
  reconnectRadius: tt,
  onReconnect: $l,
  onReconnectStart: Dl,
  onReconnectEnd: Al,
  noDragClassName: gr,
  noWheelClassName: Ol,
  noPanClassName: mr,
  disableKeyboardA11y: yr,
  nodeExtent: Fl,
  rfId: vr,
  viewport: wr,
  onViewportChange: Lo,
}) {
  return (
    od(e),
    od(t),
    sk(),
    J_(n),
    tk(wr),
    R.jsx(C_, {
      onPaneClick: U,
      onPaneMouseEnter: X,
      onPaneMouseMove: Y,
      onPaneMouseLeave: B,
      onPaneContextMenu: Z,
      onPaneScroll: G,
      paneClickDistance: re,
      deleteKeyCode: P,
      selectionKeyCode: m,
      selectionOnDrag: h,
      selectionMode: v,
      onSelectionStart: c,
      onSelectionEnd: p,
      multiSelectionKeyCode: C,
      panActivationKeyCode: M,
      zoomActivationKeyCode: _,
      elementsSelectable: T,
      zoomOnScroll: L,
      zoomOnPinch: E,
      zoomOnDoubleClick: j,
      panOnScroll: N,
      panOnScrollSpeed: z,
      panOnScrollMode: A,
      panOnDrag: K,
      defaultViewport: V,
      translateExtent: F,
      minZoom: O,
      maxZoom: x,
      onSelectionContextMenu: f,
      preventScrolling: I,
      noDragClassName: gr,
      noWheelClassName: Ol,
      noPanClassName: mr,
      disableKeyboardA11y: yr,
      onViewportChange: Lo,
      isControlledViewport: !!wr,
      children: R.jsxs(q_, {
        children: [
          R.jsx(Q_, {
            edgeTypes: t,
            onEdgeClick: o,
            onEdgeDoubleClick: l,
            onReconnect: $l,
            onReconnectStart: Dl,
            onReconnectEnd: Al,
            onlyRenderVisibleElements: $,
            onEdgeContextMenu: Q,
            onEdgeMouseEnter: ne,
            onEdgeMouseMove: le,
            onEdgeMouseLeave: _e,
            reconnectRadius: tt,
            defaultMarkerColor: k,
            noPanClassName: mr,
            disableKeyboardA11y: yr,
            rfId: vr,
          }),
          R.jsx(ik, {
            style: w,
            type: y,
            component: S,
            containerStyle: g,
          }),
          R.jsx('div', {
            className: 'react-flow__edgelabel-renderer',
          }),
          R.jsx(L_, {
            nodeTypes: e,
            onNodeClick: r,
            onNodeDoubleClick: i,
            onNodeMouseEnter: s,
            onNodeMouseMove: u,
            onNodeMouseLeave: a,
            onNodeContextMenu: d,
            nodeClickDistance: J,
            onlyRenderVisibleElements: $,
            noPanClassName: mr,
            noDragClassName: gr,
            disableKeyboardA11y: yr,
            nodeExtent: Fl,
            rfId: vr,
          }),
          R.jsx('div', {
            className: 'react-flow__viewport-portal',
          }),
        ],
      }),
    })
  );
}
s0.displayName = 'GraphView';
const uk = D.memo(s0),
  id = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: l,
    nodeOrigin: s,
    nodeExtent: u,
  } = {}) => {
    const a = new Map(),
      d = new Map(),
      f = new Map(),
      c = new Map(),
      p = r ?? t ?? [],
      y = n ?? e ?? [],
      w = s ?? [0, 0],
      S = u ?? mo;
    yg(f, c, p),
      zu(y, a, d, {
        nodeOrigin: w,
        nodeExtent: S,
        elevateNodesOnSelect: !1,
      });
    let g = [0, 0, 1];
    if (l && o && i) {
      const m = To(a, {
          filter: (M) => !!((M.width || M.initialWidth) && (M.height || M.initialHeight)),
        }),
        { x: h, y: v, zoom: C } = Da(m, o, i, 0.5, 2, 0.1);
      g = [h, v, C];
    }
    return {
      rfId: '1',
      width: 0,
      height: 0,
      transform: g,
      nodes: y,
      nodeLookup: a,
      parentLookup: d,
      edges: p,
      edgeLookup: c,
      connectionLookup: f,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: n !== void 0,
      hasDefaultEdges: r !== void 0,
      panZoom: null,
      minZoom: 0.5,
      maxZoom: 2,
      translateExtent: mo,
      nodeExtent: S,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionMode: sr.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: 'nopan',
      nodeOrigin: w,
      nodeDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesReconnectable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      elevateEdgesOnSelect: !1,
      fitViewOnInit: !1,
      fitViewDone: !1,
      fitViewOnInitOptions: void 0,
      selectNodesOnDrag: !0,
      multiSelectionActive: !1,
      connection: {
        ...qh,
      },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: '',
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: wS,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: 'react',
      debug: !1,
    };
  },
  ak = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: l,
    nodeOrigin: s,
    nodeExtent: u,
  }) =>
    TE(
      (a, d) => ({
        ...id({
          nodes: e,
          edges: t,
          width: o,
          height: i,
          fitView: l,
          nodeOrigin: s,
          nodeExtent: u,
          defaultNodes: n,
          defaultEdges: r,
        }),
        setNodes: (f) => {
          const { nodeLookup: c, parentLookup: p, nodeOrigin: y, elevateNodesOnSelect: w } = d();
          zu(f, c, p, {
            nodeOrigin: y,
            nodeExtent: u,
            elevateNodesOnSelect: w,
            checkEquality: !0,
          }),
            a({
              nodes: f,
            });
        },
        setEdges: (f) => {
          const { connectionLookup: c, edgeLookup: p } = d();
          yg(c, p, f),
            a({
              edges: f,
            });
        },
        setDefaultNodesAndEdges: (f, c) => {
          if (f) {
            const { setNodes: p } = d();
            p(f),
              a({
                hasDefaultNodes: !0,
              });
          }
          if (c) {
            const { setEdges: p } = d();
            p(c),
              a({
                hasDefaultEdges: !0,
              });
          }
        },
        updateNodeInternals: (
          f,
          c = {
            triggerFitView: !0,
          },
        ) => {
          const {
              triggerNodeChanges: p,
              nodeLookup: y,
              parentLookup: w,
              fitViewOnInit: S,
              fitViewDone: g,
              fitViewOnInitOptions: m,
              domNode: h,
              nodeOrigin: v,
              nodeExtent: C,
              debug: M,
              fitViewSync: _,
            } = d(),
            { changes: P, updatedInternals: $ } = $S(f, y, w, h, v, C);
          if ($) {
            if (
              (zS(y, w, {
                nodeOrigin: v,
                nodeExtent: C,
              }),
              c.triggerFitView)
            ) {
              let T = g;
              !g &&
                S &&
                (T = _({
                  ...m,
                  nodes: m == null ? void 0 : m.nodes,
                })),
                a({
                  fitViewDone: T,
                });
            } else a({});
            (P == null ? void 0 : P.length) > 0 &&
              (M && console.log('React Flow: trigger node changes', P), p == null || p(P));
          }
        },
        updateNodePositions: (f, c = !1) => {
          const p = [],
            y = [];
          for (const [w, S] of f) {
            const g = !!(S != null && S.expandParent && S != null && S.parentId && S != null && S.position),
              m = {
                id: w,
                type: 'position',
                position: g
                  ? {
                      x: Math.max(0, S.position.x),
                      y: Math.max(0, S.position.y),
                    }
                  : S.position,
                dragging: c,
              };
            g &&
              p.push({
                id: w,
                parentId: S.parentId,
                rect: {
                  ...S.internals.positionAbsolute,
                  width: S.measured.width,
                  height: S.measured.height,
                },
              }),
              y.push(m);
          }
          if (p.length > 0) {
            const { nodeLookup: w, parentLookup: S, nodeOrigin: g } = d(),
              m = Va(p, w, S, g);
            y.push(...m);
          }
          d().triggerNodeChanges(y);
        },
        triggerNodeChanges: (f) => {
          const { onNodesChange: c, setNodes: p, nodes: y, hasDefaultNodes: w, debug: S } = d();
          if (f != null && f.length) {
            if (w) {
              const g = Ag(f, y);
              p(g);
            }
            S && console.log('React Flow: trigger node changes', f), c == null || c(f);
          }
        },
        triggerEdgeChanges: (f) => {
          const { onEdgesChange: c, setEdges: p, edges: y, hasDefaultEdges: w, debug: S } = d();
          if (f != null && f.length) {
            if (w) {
              const g = Og(f, y);
              p(g);
            }
            S && console.log('React Flow: trigger edge changes', f), c == null || c(f);
          }
        },
        addSelectedNodes: (f) => {
          const {
            multiSelectionActive: c,
            edgeLookup: p,
            nodeLookup: y,
            triggerNodeChanges: w,
            triggerEdgeChanges: S,
          } = d();
          if (c) {
            const g = f.map((m) => fn(m, !0));
            w(g);
            return;
          }
          w(Un(y, new Set([...f]), !0)), S(Un(p));
        },
        addSelectedEdges: (f) => {
          const {
            multiSelectionActive: c,
            edgeLookup: p,
            nodeLookup: y,
            triggerNodeChanges: w,
            triggerEdgeChanges: S,
          } = d();
          if (c) {
            const g = f.map((m) => fn(m, !0));
            S(g);
            return;
          }
          S(Un(p, new Set([...f]))), w(Un(y, new Set(), !0));
        },
        unselectNodesAndEdges: ({ nodes: f, edges: c } = {}) => {
          const { edges: p, nodes: y, nodeLookup: w, triggerNodeChanges: S, triggerEdgeChanges: g } = d(),
            m = f || y,
            h = c || p,
            v = m.map((M) => {
              const _ = w.get(M.id);
              return _ && (_.selected = !1), fn(M.id, !1);
            }),
            C = h.map((M) => fn(M.id, !1));
          S(v), g(C);
        },
        setMinZoom: (f) => {
          const { panZoom: c, maxZoom: p } = d();
          c == null || c.setScaleExtent([f, p]),
            a({
              minZoom: f,
            });
        },
        setMaxZoom: (f) => {
          const { panZoom: c, minZoom: p } = d();
          c == null || c.setScaleExtent([p, f]),
            a({
              maxZoom: f,
            });
        },
        setTranslateExtent: (f) => {
          var c;
          (c = d().panZoom) == null || c.setTranslateExtent(f),
            a({
              translateExtent: f,
            });
        },
        setPaneClickDistance: (f) => {
          var c;
          (c = d().panZoom) == null || c.setClickDistance(f);
        },
        resetSelectedElements: () => {
          const { edges: f, nodes: c, triggerNodeChanges: p, triggerEdgeChanges: y } = d(),
            w = c.reduce((g, m) => (m.selected ? [...g, fn(m.id, !1)] : g), []),
            S = f.reduce((g, m) => (m.selected ? [...g, fn(m.id, !1)] : g), []);
          p(w), y(S);
        },
        setNodeExtent: (f) => {
          const {
            nodes: c,
            nodeLookup: p,
            parentLookup: y,
            nodeOrigin: w,
            elevateNodesOnSelect: S,
            nodeExtent: g,
          } = d();
          (f[0][0] === g[0][0] && f[0][1] === g[0][1] && f[1][0] === g[1][0] && f[1][1] === g[1][1]) ||
            (zu(c, p, y, {
              nodeOrigin: w,
              nodeExtent: f,
              elevateNodesOnSelect: S,
              checkEquality: !1,
            }),
            a({
              nodeExtent: f,
            }));
        },
        panBy: (f) => {
          const { transform: c, width: p, height: y, panZoom: w, translateExtent: S } = d();
          return DS({
            delta: f,
            panZoom: w,
            transform: c,
            translateExtent: S,
            width: p,
            height: y,
          });
        },
        fitView: (f) => {
          const { panZoom: c, width: p, height: y, minZoom: w, maxZoom: S, nodeLookup: g } = d();
          if (!c) return Promise.resolve(!1);
          const m = Cu(g, f);
          return Nu(
            {
              nodes: m,
              width: p,
              height: y,
              panZoom: c,
              minZoom: w,
              maxZoom: S,
            },
            f,
          );
        },
        fitViewSync: (f) => {
          const { panZoom: c, width: p, height: y, minZoom: w, maxZoom: S, nodeLookup: g } = d();
          if (!c) return !1;
          const m = Cu(g, f);
          return (
            Nu(
              {
                nodes: m,
                width: p,
                height: y,
                panZoom: c,
                minZoom: w,
                maxZoom: S,
              },
              f,
            ),
            m.size > 0
          );
        },
        cancelConnection: () => {
          a({
            connection: {
              ...qh,
            },
          });
        },
        updateConnection: (f) => {
          a({
            connection: f,
          });
        },
        reset: () =>
          a({
            ...id(),
          }),
      }),
      Object.is,
    );
function u0({
  initialNodes: e,
  initialEdges: t,
  defaultNodes: n,
  defaultEdges: r,
  initialWidth: o,
  initialHeight: i,
  fitView: l,
  nodeOrigin: s,
  nodeExtent: u,
  children: a,
}) {
  const [d] = D.useState(() =>
    ak({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      width: o,
      height: i,
      fitView: l,
      nodeOrigin: s,
      nodeExtent: u,
    }),
  );
  return R.jsx(IE, {
    value: d,
    children: R.jsx(JE, {
      children: a,
    }),
  });
}
function ck({
  children: e,
  nodes: t,
  edges: n,
  defaultNodes: r,
  defaultEdges: o,
  width: i,
  height: l,
  fitView: s,
  nodeOrigin: u,
  nodeExtent: a,
}) {
  return D.useContext(zl)
    ? R.jsx(R.Fragment, {
        children: e,
      })
    : R.jsx(u0, {
        initialNodes: t,
        initialEdges: n,
        defaultNodes: r,
        defaultEdges: o,
        initialWidth: i,
        initialHeight: l,
        fitView: s,
        nodeOrigin: u,
        nodeExtent: a,
        children: e,
      });
}
const fk = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 0,
};
function dk(
  {
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    className: o,
    nodeTypes: i,
    edgeTypes: l,
    onNodeClick: s,
    onEdgeClick: u,
    onInit: a,
    onMove: d,
    onMoveStart: f,
    onMoveEnd: c,
    onConnect: p,
    onConnectStart: y,
    onConnectEnd: w,
    onClickConnectStart: S,
    onClickConnectEnd: g,
    onNodeMouseEnter: m,
    onNodeMouseMove: h,
    onNodeMouseLeave: v,
    onNodeContextMenu: C,
    onNodeDoubleClick: M,
    onNodeDragStart: _,
    onNodeDrag: P,
    onNodeDragStop: $,
    onNodesDelete: T,
    onEdgesDelete: V,
    onDelete: F,
    onSelectionChange: O,
    onSelectionDragStart: x,
    onSelectionDrag: I,
    onSelectionDragStop: k,
    onSelectionContextMenu: L,
    onSelectionStart: E,
    onSelectionEnd: N,
    onBeforeDelete: z,
    connectionMode: A,
    connectionLineType: j = Wt.Bezier,
    connectionLineStyle: K,
    connectionLineComponent: U,
    connectionLineContainerStyle: X,
    deleteKeyCode: Y = 'Backspace',
    selectionKeyCode: B = 'Shift',
    selectionOnDrag: G = !1,
    selectionMode: Z = yo.Full,
    panActivationKeyCode: re = 'Space',
    multiSelectionKeyCode: J = tl() ? 'Meta' : 'Control',
    zoomActivationKeyCode: Q = tl() ? 'Meta' : 'Control',
    snapToGrid: ne,
    snapGrid: le,
    onlyRenderVisibleElements: _e = !1,
    selectNodesOnDrag: tt,
    nodesDraggable: $l,
    nodesConnectable: Dl,
    nodesFocusable: Al,
    nodeOrigin: gr = $g,
    edgesFocusable: Ol,
    edgesReconnectable: mr,
    elementsSelectable: yr = !0,
    defaultViewport: Fl = UE,
    minZoom: vr = 0.5,
    maxZoom: wr = 2,
    translateExtent: Lo = mo,
    preventScrolling: d0 = !0,
    nodeExtent: Vl,
    defaultMarkerColor: p0 = '#b1b1b7',
    zoomOnScroll: h0 = !0,
    zoomOnPinch: g0 = !0,
    panOnScroll: m0 = !1,
    panOnScrollSpeed: y0 = 0.5,
    panOnScrollMode: v0 = wn.Free,
    zoomOnDoubleClick: w0 = !0,
    panOnDrag: x0 = !0,
    onPaneClick: S0,
    onPaneMouseEnter: E0,
    onPaneMouseMove: _0,
    onPaneMouseLeave: k0,
    onPaneScroll: C0,
    onPaneContextMenu: N0,
    paneClickDistance: ja = 0,
    nodeClickDistance: M0 = 0,
    children: P0,
    onReconnect: T0,
    onReconnectStart: I0,
    onReconnectEnd: z0,
    onEdgeContextMenu: R0,
    onEdgeDoubleClick: L0,
    onEdgeMouseEnter: $0,
    onEdgeMouseMove: D0,
    onEdgeMouseLeave: A0,
    reconnectRadius: O0 = 10,
    onNodesChange: F0,
    onEdgesChange: V0,
    noDragClassName: H0 = 'nodrag',
    noWheelClassName: j0 = 'nowheel',
    noPanClassName: Ba = 'nopan',
    fitView: Ua,
    fitViewOptions: B0,
    connectOnClick: U0,
    attributionPosition: W0,
    proOptions: Y0,
    defaultEdgeOptions: X0,
    elevateNodesOnSelect: K0,
    elevateEdgesOnSelect: b0,
    disableKeyboardA11y: Wa = !1,
    autoPanOnConnect: G0,
    autoPanOnNodeDrag: Q0,
    autoPanSpeed: Z0,
    connectionRadius: q0,
    isValidConnection: J0,
    onError: em,
    style: tm,
    id: Ya,
    nodeDragThreshold: nm,
    viewport: rm,
    onViewportChange: om,
    width: im,
    height: lm,
    colorMode: sm = 'light',
    debug: um,
    onScroll: $o,
    ...am
  },
  cm,
) {
  const Hl = Ya || '1',
    fm = KE(sm),
    dm = D.useCallback(
      (Xa) => {
        Xa.currentTarget.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        }),
          $o == null || $o(Xa);
      },
      [$o],
    );
  return R.jsx('div', {
    'data-testid': 'rf__wrapper',
    ...am,
    onScroll: dm,
    style: {
      ...tm,
      ...fk,
    },
    ref: cm,
    className: ve(['react-flow', o, fm]),
    id: Ya,
    children: R.jsxs(ck, {
      nodes: e,
      edges: t,
      width: im,
      height: lm,
      fitView: Ua,
      nodeOrigin: gr,
      nodeExtent: Vl,
      children: [
        R.jsx(uk, {
          onInit: a,
          onNodeClick: s,
          onEdgeClick: u,
          onNodeMouseEnter: m,
          onNodeMouseMove: h,
          onNodeMouseLeave: v,
          onNodeContextMenu: C,
          onNodeDoubleClick: M,
          nodeTypes: i,
          edgeTypes: l,
          connectionLineType: j,
          connectionLineStyle: K,
          connectionLineComponent: U,
          connectionLineContainerStyle: X,
          selectionKeyCode: B,
          selectionOnDrag: G,
          selectionMode: Z,
          deleteKeyCode: Y,
          multiSelectionKeyCode: J,
          panActivationKeyCode: re,
          zoomActivationKeyCode: Q,
          onlyRenderVisibleElements: _e,
          defaultViewport: Fl,
          translateExtent: Lo,
          minZoom: vr,
          maxZoom: wr,
          preventScrolling: d0,
          zoomOnScroll: h0,
          zoomOnPinch: g0,
          zoomOnDoubleClick: w0,
          panOnScroll: m0,
          panOnScrollSpeed: y0,
          panOnScrollMode: v0,
          panOnDrag: x0,
          onPaneClick: S0,
          onPaneMouseEnter: E0,
          onPaneMouseMove: _0,
          onPaneMouseLeave: k0,
          onPaneScroll: C0,
          onPaneContextMenu: N0,
          paneClickDistance: ja,
          nodeClickDistance: M0,
          onSelectionContextMenu: L,
          onSelectionStart: E,
          onSelectionEnd: N,
          onReconnect: T0,
          onReconnectStart: I0,
          onReconnectEnd: z0,
          onEdgeContextMenu: R0,
          onEdgeDoubleClick: L0,
          onEdgeMouseEnter: $0,
          onEdgeMouseMove: D0,
          onEdgeMouseLeave: A0,
          reconnectRadius: O0,
          defaultMarkerColor: p0,
          noDragClassName: H0,
          noWheelClassName: j0,
          noPanClassName: Ba,
          rfId: Hl,
          disableKeyboardA11y: Wa,
          nodeExtent: Vl,
          viewport: rm,
          onViewportChange: om,
        }),
        R.jsx(XE, {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          onConnect: p,
          onConnectStart: y,
          onConnectEnd: w,
          onClickConnectStart: S,
          onClickConnectEnd: g,
          nodesDraggable: $l,
          nodesConnectable: Dl,
          nodesFocusable: Al,
          edgesFocusable: Ol,
          edgesReconnectable: mr,
          elementsSelectable: yr,
          elevateNodesOnSelect: K0,
          elevateEdgesOnSelect: b0,
          minZoom: vr,
          maxZoom: wr,
          nodeExtent: Vl,
          onNodesChange: F0,
          onEdgesChange: V0,
          snapToGrid: ne,
          snapGrid: le,
          connectionMode: A,
          translateExtent: Lo,
          connectOnClick: U0,
          defaultEdgeOptions: X0,
          fitView: Ua,
          fitViewOptions: B0,
          onNodesDelete: T,
          onEdgesDelete: V,
          onDelete: F,
          onNodeDragStart: _,
          onNodeDrag: P,
          onNodeDragStop: $,
          onSelectionDrag: I,
          onSelectionDragStart: x,
          onSelectionDragStop: k,
          onMove: d,
          onMoveStart: f,
          onMoveEnd: c,
          noPanClassName: Ba,
          nodeOrigin: gr,
          rfId: Hl,
          autoPanOnConnect: G0,
          autoPanOnNodeDrag: Q0,
          autoPanSpeed: Z0,
          onError: em,
          connectionRadius: q0,
          isValidConnection: J0,
          selectNodesOnDrag: tt,
          nodeDragThreshold: nm,
          onBeforeDelete: z,
          paneClickDistance: ja,
          debug: um,
        }),
        R.jsx(BE, {
          onSelectionChange: O,
        }),
        P0,
        R.jsx(OE, {
          proOptions: Y0,
          position: W0,
        }),
        R.jsx(DE, {
          rfId: Hl,
          disableKeyboardA11y: Wa,
        }),
      ],
    }),
  });
}
var pk = Fg(dk);
function hk(e) {
  const [t, n] = D.useState(e),
    r = D.useCallback((o) => n((i) => Ag(o, i)), []);
  return [t, n, r];
}
function gk(e) {
  const [t, n] = D.useState(e),
    r = D.useCallback((o) => n((i) => Og(o, i)), []);
  return [t, n, r];
}
function mk({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return R.jsx('path', {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: ve(['react-flow__background-pattern', n, r]),
  });
}
function yk({ radius: e, className: t }) {
  return R.jsx('circle', {
    cx: e,
    cy: e,
    r: e,
    className: ve(['react-flow__background-pattern', 'dots', t]),
  });
}
var tn;
(function (e) {
  (e.Lines = 'lines'), (e.Dots = 'dots'), (e.Cross = 'cross');
})(tn || (tn = {}));
const vk = {
    [tn.Dots]: 1,
    [tn.Lines]: 1,
    [tn.Cross]: 6,
  },
  wk = (e) => ({
    transform: e.transform,
    patternId: `pattern-${e.rfId}`,
  });
function a0({
  id: e,
  variant: t = tn.Dots,
  gap: n = 20,
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: l,
  bgColor: s,
  style: u,
  className: a,
  patternClassName: d,
}) {
  const f = D.useRef(null),
    { transform: c, patternId: p } = te(wk, ge),
    y = r || vk[t],
    w = t === tn.Dots,
    S = t === tn.Cross,
    g = Array.isArray(n) ? n : [n, n],
    m = [g[0] * c[2] || 1, g[1] * c[2] || 1],
    h = y * c[2],
    v = Array.isArray(i) ? i : [i, i],
    C = S ? [h, h] : m,
    M = [v[0] * c[2] || 1 + C[0] / 2, v[1] * c[2] || 1 + C[1] / 2],
    _ = `${p}${e || ''}`;
  return R.jsxs('svg', {
    className: ve(['react-flow__background', a]),
    style: {
      ...u,
      ...Rl,
      '--xy-background-color-props': s,
      '--xy-background-pattern-color-props': l,
    },
    ref: f,
    'data-testid': 'rf__background',
    children: [
      R.jsx('pattern', {
        id: _,
        x: c[0] % m[0],
        y: c[1] % m[1],
        width: m[0],
        height: m[1],
        patternUnits: 'userSpaceOnUse',
        patternTransform: `translate(-${M[0]},-${M[1]})`,
        children: w
          ? R.jsx(yk, {
              radius: h / 2,
              className: d,
            })
          : R.jsx(mk, {
              dimensions: C,
              lineWidth: o,
              variant: t,
              className: d,
            }),
      }),
      R.jsx('rect', {
        x: '0',
        y: '0',
        width: '100%',
        height: '100%',
        fill: `url(#${_})`,
      }),
    ],
  });
}
a0.displayName = 'Background';
const xk = D.memo(a0);
function Sk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    children: R.jsx('path', {
      d: 'M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z',
    }),
  });
}
function Ek() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 5',
    children: R.jsx('path', {
      d: 'M0 0h32v4.2H0z',
    }),
  });
}
function _k() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 30',
    children: R.jsx('path', {
      d: 'M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z',
    }),
  });
}
function kk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 25 32',
    children: R.jsx('path', {
      d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z',
    }),
  });
}
function Ck() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 25 32',
    children: R.jsx('path', {
      d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z',
    }),
  });
}
function li({ children: e, className: t, ...n }) {
  return R.jsx('button', {
    type: 'button',
    className: ve(['react-flow__controls-button', t]),
    ...n,
    children: e,
  });
}
const Nk = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
});
function c0({
  style: e,
  showZoom: t = !0,
  showFitView: n = !0,
  showInteractive: r = !0,
  fitViewOptions: o,
  onZoomIn: i,
  onZoomOut: l,
  onFitView: s,
  onInteractiveChange: u,
  className: a,
  children: d,
  position: f = 'bottom-left',
  orientation: c = 'vertical',
  'aria-label': p = 'React Flow controls',
}) {
  const y = ce(),
    { isInteractive: w, minZoomReached: S, maxZoomReached: g } = te(Nk, ge),
    { zoomIn: m, zoomOut: h, fitView: v } = Ro(),
    C = () => {
      m(), i == null || i();
    },
    M = () => {
      h(), l == null || l();
    },
    _ = () => {
      v(o), s == null || s();
    },
    P = () => {
      y.setState({
        nodesDraggable: !w,
        nodesConnectable: !w,
        elementsSelectable: !w,
      }),
        u == null || u(!w);
    },
    $ = c === 'horizontal' ? 'horizontal' : 'vertical';
  return R.jsxs(zo, {
    className: ve(['react-flow__controls', $, a]),
    position: f,
    style: e,
    'data-testid': 'rf__controls',
    'aria-label': p,
    children: [
      t &&
        R.jsxs(R.Fragment, {
          children: [
            R.jsx(li, {
              onClick: C,
              className: 'react-flow__controls-zoomin',
              title: 'zoom in',
              'aria-label': 'zoom in',
              disabled: g,
              children: R.jsx(Sk, {}),
            }),
            R.jsx(li, {
              onClick: M,
              className: 'react-flow__controls-zoomout',
              title: 'zoom out',
              'aria-label': 'zoom out',
              disabled: S,
              children: R.jsx(Ek, {}),
            }),
          ],
        }),
      n &&
        R.jsx(li, {
          className: 'react-flow__controls-fitview',
          onClick: _,
          title: 'fit view',
          'aria-label': 'fit view',
          children: R.jsx(_k, {}),
        }),
      r &&
        R.jsx(li, {
          className: 'react-flow__controls-interactive',
          onClick: P,
          title: 'toggle interactivity',
          'aria-label': 'toggle interactivity',
          children: w ? R.jsx(Ck, {}) : R.jsx(kk, {}),
        }),
      d,
    ],
  });
}
c0.displayName = 'Controls';
const Mk = D.memo(c0);
function Pk({
  id: e,
  x: t,
  y: n,
  width: r,
  height: o,
  style: i,
  color: l,
  strokeColor: s,
  strokeWidth: u,
  className: a,
  borderRadius: d,
  shapeRendering: f,
  selected: c,
  onClick: p,
}) {
  const { background: y, backgroundColor: w } = i || {},
    S = l || y || w;
  return R.jsx('rect', {
    className: ve([
      'react-flow__minimap-node',
      {
        selected: c,
      },
      a,
    ]),
    x: t,
    y: n,
    rx: d,
    ry: d,
    width: r,
    height: o,
    style: {
      fill: S,
      stroke: s,
      strokeWidth: u,
    },
    shapeRendering: f,
    onClick: p ? (g) => p(g, e) : void 0,
  });
}
const Tk = D.memo(Pk),
  Ik = (e) => e.nodes.map((t) => t.id),
  Es = (e) => (e instanceof Function ? e : () => e);
function zk({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = '',
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  nodeComponent: i = Tk,
  onClick: l,
}) {
  const s = te(Ik, ge),
    u = Es(t),
    a = Es(e),
    d = Es(n),
    f = typeof window > 'u' || window.chrome ? 'crispEdges' : 'geometricPrecision';
  return R.jsx(R.Fragment, {
    children: s.map((c) =>
      R.jsx(
        Lk,
        {
          id: c,
          nodeColorFunc: u,
          nodeStrokeColorFunc: a,
          nodeClassNameFunc: d,
          nodeBorderRadius: r,
          nodeStrokeWidth: o,
          NodeComponent: i,
          onClick: l,
          shapeRendering: f,
        },
        c,
      ),
    ),
  });
}
function Rk({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: n,
  nodeClassNameFunc: r,
  nodeBorderRadius: o,
  nodeStrokeWidth: i,
  shapeRendering: l,
  NodeComponent: s,
  onClick: u,
}) {
  const {
    node: a,
    x: d,
    y: f,
    width: c,
    height: p,
  } = te((y) => {
    const w = y.nodeLookup.get(e),
      { x: S, y: g } = w.internals.positionAbsolute,
      { width: m, height: h } = Dt(w);
    return {
      node: w,
      x: S,
      y: g,
      width: m,
      height: h,
    };
  }, ge);
  return !a || a.hidden || !sg(a)
    ? null
    : R.jsx(s, {
        x: d,
        y: f,
        width: c,
        height: p,
        style: a.style,
        selected: !!a.selected,
        className: r(a),
        color: t(a),
        borderRadius: o,
        strokeColor: n(a),
        strokeWidth: i,
        shapeRendering: l,
        onClick: u,
        id: a.id,
      });
}
const Lk = D.memo(Rk);
var $k = D.memo(zk);
const Dk = 200,
  Ak = 150,
  Ok = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect: e.nodeLookup.size > 0 ? ig(To(e.nodeLookup), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
    };
  },
  Fk = 'react-flow__minimap-desc';
function f0({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = '',
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: l,
  nodeComponent: s,
  bgColor: u,
  maskColor: a,
  maskStrokeColor: d,
  maskStrokeWidth: f,
  position: c = 'bottom-right',
  onClick: p,
  onNodeClick: y,
  pannable: w = !1,
  zoomable: S = !1,
  ariaLabel: g = 'React Flow mini map',
  inversePan: m,
  zoomStep: h = 10,
  offsetScale: v = 5,
}) {
  const C = ce(),
    M = D.useRef(null),
    { boundingRect: _, viewBB: P, rfId: $, panZoom: T, translateExtent: V, flowWidth: F, flowHeight: O } = te(Ok, ge),
    x = (e == null ? void 0 : e.width) ?? Dk,
    I = (e == null ? void 0 : e.height) ?? Ak,
    k = _.width / x,
    L = _.height / I,
    E = Math.max(k, L),
    N = E * x,
    z = E * I,
    A = v * E,
    j = _.x - (N - _.width) / 2 - A,
    K = _.y - (z - _.height) / 2 - A,
    U = N + A * 2,
    X = z + A * 2,
    Y = `${Fk}-${$}`,
    B = D.useRef(0),
    G = D.useRef();
  (B.current = E),
    D.useEffect(() => {
      if (M.current && T)
        return (
          (G.current = US({
            domNode: M.current,
            panZoom: T,
            getTransform: () => C.getState().transform,
            getViewScale: () => B.current,
          })),
          () => {
            var J;
            (J = G.current) == null || J.destroy();
          }
        );
    }, [T]),
    D.useEffect(() => {
      var J;
      (J = G.current) == null ||
        J.update({
          translateExtent: V,
          width: F,
          height: O,
          inversePan: m,
          pannable: w,
          zoomStep: h,
          zoomable: S,
        });
    }, [w, S, m, h, V, F, O]);
  const Z = p
      ? (J) => {
          var le;
          const [Q, ne] = ((le = G.current) == null ? void 0 : le.pointer(J)) || [0, 0];
          p(J, {
            x: Q,
            y: ne,
          });
        }
      : void 0,
    re = y
      ? D.useCallback((J, Q) => {
          const ne = C.getState().nodeLookup.get(Q);
          y(J, ne);
        }, [])
      : void 0;
  return R.jsx(zo, {
    position: c,
    style: {
      ...e,
      '--xy-minimap-background-color-props': typeof u == 'string' ? u : void 0,
      '--xy-minimap-mask-background-color-props': typeof a == 'string' ? a : void 0,
      '--xy-minimap-mask-stroke-color-props': typeof d == 'string' ? d : void 0,
      '--xy-minimap-mask-stroke-width-props': typeof f == 'number' ? f * E : void 0,
      '--xy-minimap-node-background-color-props': typeof r == 'string' ? r : void 0,
      '--xy-minimap-node-stroke-color-props': typeof n == 'string' ? n : void 0,
      '--xy-minimap-node-stroke-width-props': typeof l == 'string' ? l : void 0,
    },
    className: ve(['react-flow__minimap', t]),
    'data-testid': 'rf__minimap',
    children: R.jsxs('svg', {
      width: x,
      height: I,
      viewBox: `${j} ${K} ${U} ${X}`,
      className: 'react-flow__minimap-svg',
      role: 'img',
      'aria-labelledby': Y,
      ref: M,
      onClick: Z,
      children: [
        g &&
          R.jsx('title', {
            id: Y,
            children: g,
          }),
        R.jsx($k, {
          onClick: re,
          nodeColor: r,
          nodeStrokeColor: n,
          nodeBorderRadius: i,
          nodeClassName: o,
          nodeStrokeWidth: l,
          nodeComponent: s,
        }),
        R.jsx('path', {
          className: 'react-flow__minimap-mask',
          d: `M${j - A},${K - A}h${U + A * 2}v${X + A * 2}h${-U - A * 2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,
          fillRule: 'evenodd',
          pointerEvents: 'none',
        }),
      ],
    }),
  });
}
f0.displayName = 'MiniMap';
D.memo(f0);
function Vk({
  nodeId: e,
  position: t,
  variant: n = Xr.Handle,
  className: r,
  style: o = {},
  children: i,
  color: l,
  minWidth: s = 10,
  minHeight: u = 10,
  maxWidth: a = Number.MAX_VALUE,
  maxHeight: d = Number.MAX_VALUE,
  keepAspectRatio: f = !1,
  shouldResize: c,
  onResizeStart: p,
  onResize: y,
  onResizeEnd: w,
}) {
  const S = Bg(),
    g = typeof e == 'string' ? e : S,
    m = ce(),
    h = D.useRef(null),
    v = n === Xr.Line ? 'right' : 'bottom-right',
    C = t ?? v,
    M = D.useRef(null);
  D.useEffect(() => {
    if (!(!h.current || !g))
      return (
        M.current ||
          (M.current = oE({
            domNode: h.current,
            nodeId: g,
            getStoreItems: () => {
              const {
                nodeLookup: T,
                transform: V,
                snapGrid: F,
                snapToGrid: O,
                nodeOrigin: x,
                domNode: I,
              } = m.getState();
              return {
                nodeLookup: T,
                transform: V,
                snapGrid: F,
                snapToGrid: O,
                nodeOrigin: x,
                paneDomNode: I,
              };
            },
            onChange: (T, V) => {
              const { triggerNodeChanges: F, nodeLookup: O, parentLookup: x, nodeOrigin: I } = m.getState(),
                k = [],
                L = {
                  x: T.x,
                  y: T.y,
                },
                E = O.get(g);
              if (E && E.expandParent && E.parentId) {
                const N = E.origin ?? I,
                  z = T.width ?? E.measured.width,
                  A = T.height ?? E.measured.height,
                  j = {
                    id: E.id,
                    parentId: E.parentId,
                    rect: {
                      width: z,
                      height: A,
                      ...ug(
                        {
                          x: T.x ?? E.position.x,
                          y: T.y ?? E.position.y,
                        },
                        {
                          width: z,
                          height: A,
                        },
                        E.parentId,
                        O,
                        N,
                      ),
                    },
                  },
                  K = Va([j], O, x, I);
                k.push(...K),
                  (L.x = T.x ? Math.max(N[0] * z, T.x) : void 0),
                  (L.y = T.y ? Math.max(N[1] * A, T.y) : void 0);
              }
              if (L.x !== void 0 && L.y !== void 0) {
                const N = {
                  id: g,
                  type: 'position',
                  position: {
                    ...L,
                  },
                };
                k.push(N);
              }
              if (T.width !== void 0 && T.height !== void 0) {
                const N = {
                  id: g,
                  type: 'dimensions',
                  resizing: !0,
                  setAttributes: !0,
                  dimensions: {
                    width: T.width,
                    height: T.height,
                  },
                };
                k.push(N);
              }
              for (const N of V) {
                const z = {
                  ...N,
                  type: 'position',
                };
                k.push(z);
              }
              F(k);
            },
            onEnd: () => {
              const T = {
                id: g,
                type: 'dimensions',
                resizing: !1,
              };
              m.getState().triggerNodeChanges([T]);
            },
          })),
        M.current.update({
          controlPosition: C,
          boundaries: {
            minWidth: s,
            minHeight: u,
            maxWidth: a,
            maxHeight: d,
          },
          keepAspectRatio: f,
          onResizeStart: p,
          onResize: y,
          onResizeEnd: w,
          shouldResize: c,
        }),
        () => {
          var T;
          (T = M.current) == null || T.destroy();
        }
      );
  }, [C, s, u, a, d, f, p, y, w, c]);
  const _ = C.split('-'),
    P = n === Xr.Line ? 'borderColor' : 'backgroundColor',
    $ = l
      ? {
          ...o,
          [P]: l,
        }
      : o;
  return R.jsx('div', {
    className: ve(['react-flow__resize-control', 'nodrag', ..._, n, r]),
    ref: h,
    style: $,
    children: i,
  });
}
D.memo(Vk);
const _s = {
    maxHistorySize: 100,
    enableShortcuts: !0,
  },
  Hk = ({ maxHistorySize: e = _s.maxHistorySize, enableShortcuts: t = _s.enableShortcuts } = _s) => {
    const [n, r] = D.useState([]),
      [o, i] = D.useState([]),
      { setNodes: l, setEdges: s, getNodes: u, getEdges: a } = Ro(),
      d = D.useCallback(() => {
        r((p) => [
          ...p.slice(p.length - e + 1, p.length),
          {
            nodes: u(),
            edges: a(),
          },
        ]),
          i([]);
      }, [u, a, e]),
      f = D.useCallback(() => {
        const p = n[n.length - 1];
        p &&
          (r((y) => y.slice(0, y.length - 1)),
          i((y) => [
            ...y,
            {
              nodes: u(),
              edges: a(),
            },
          ]),
          l(p.nodes),
          s(p.edges));
      }, [l, s, u, a, n]),
      c = D.useCallback(() => {
        const p = o[o.length - 1];
        p &&
          (i((y) => y.slice(0, y.length - 1)),
          r((y) => [
            ...y,
            {
              nodes: u(),
              edges: a(),
            },
          ]),
          l(p.nodes),
          s(p.edges));
      }, [l, s, u, a, o]);
    return (
      D.useEffect(() => {
        if (!t) return;
        const p = (y) => {
          y.key === 'z' && (y.ctrlKey || y.metaKey) && y.shiftKey
            ? c()
            : y.key === 'z' && (y.ctrlKey || y.metaKey) && f();
        };
        return (
          document.addEventListener('keydown', p),
          () => {
            document.removeEventListener('keydown', p);
          }
        );
      }, [f, c, t]),
      {
        undo: f,
        redo: c,
        takeSnapshot: d,
        canUndo: !n.length,
        canRedo: !o.length,
      }
    );
  };
const jk = '_node_q7kpp_1',
  Bk = '_buttonGroup_q7kpp_26',
  Uk = '_button_q7kpp_26',
  Wk = '_buttonIcon_q7kpp_54',
  Yk = '_instructions_q7kpp_64',
  un = {
    node: jk,
    buttonGroup: Bk,
    button: Uk,
    buttonIcon: Wk,
    instructions: Yk,
  },
  ld = ['Wire', 'your', 'ideas', 'with', 'React', 'Flow', '!'],
  Xk = {
    account: 'paid-pro',
    hideAttribution: !0,
  },
  Kk = [],
  bk = [],
  Gk = {
    style: {
      strokeWidth: 3,
      stroke: '#ff0071',
    },
  },
  Qk = {
    strokeWidth: 2,
    stroke: '#ff99c7',
  },
  Zk = [0.5, 0.5];
function qk() {
  const { undo: e, redo: t, canUndo: n, canRedo: r, takeSnapshot: o } = Hk(),
    [i, , l] = hk(Kk),
    [s, u, a] = gk(bk),
    { screenToFlowPosition: d, addNodes: f } = Ro(),
    c = D.useCallback(
      (m) => {
        o(), u((h) => hg(m, h));
      },
      [u, o],
    ),
    p = D.useCallback(
      (m) => {
        o();
        const h = d({
            x: m.clientX,
            y: m.clientY,
          }),
          v = ld.shift();
        f([
          {
            id: `${new Date().getTime()}`,
            data: {
              label: v,
            },
            position: h,
            className: un.node,
          },
        ]),
          ld.push(`${v}`);
      },
      [o, f, d],
    ),
    y = D.useCallback(() => {
      o();
    }, [o]),
    w = D.useCallback(() => {
      o();
    }, [o]),
    S = D.useCallback(() => {
      o();
    }, [o]),
    g = D.useCallback(() => {
      o();
    }, [o]);
  return R.jsxs(pk, {
    nodes: i,
    edges: s,
    onNodesChange: l,
    onEdgesChange: a,
    proOptions: Xk,
    onConnect: c,
    onNodeDragStart: y,
    onSelectionDragStart: w,
    onNodesDelete: S,
    onEdgesDelete: g,
    defaultEdgeOptions: Gk,
    onPaneClick: p,
    nodeOrigin: Zk,
    connectionLineStyle: Qk,
    selectNodesOnDrag: !1,
    children: [
      R.jsx(xk, {}),
      R.jsx(Mk, {}),
      R.jsx(zo, {
        position: 'bottom-center',
        children: R.jsxs('div', {
          className: un.buttonGroup,
          children: [
            R.jsxs('button', {
              disabled: n,
              className: un.button,
              onClick: e,
              children: [
                R.jsx('span', {
                  className: un.buttonIcon,
                  children: '⤴️',
                }),
                ' undo',
              ],
            }),
            R.jsxs('button', {
              disabled: r,
              className: un.button,
              onClick: t,
              children: [
                'redo ',
                R.jsx('span', {
                  className: un.buttonIcon,
                  children: '⤵️',
                }),
              ],
            }),
          ],
        }),
      }),
      !i.length &&
        R.jsx('div', {
          className: un.instructions,
          children: 'Click anywhere on the pane to add nodes',
        }),
    ],
  });
}
function Jk(e) {
  return R.jsx(u0, {
    children: R.jsx(qk, {
      ...e,
    }),
  });
}
ks.createRoot(document.getElementById('root')).render(
  R.jsx(vd.StrictMode, {
    children: R.jsx(Jk, {}),
  }),
);
