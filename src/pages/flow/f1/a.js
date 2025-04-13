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
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var ld = {
    exports: {},
  },
  nl = {},
  sd = {
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
  fm = Symbol.for('react.portal'),
  dm = Symbol.for('react.fragment'),
  hm = Symbol.for('react.strict_mode'),
  pm = Symbol.for('react.profiler'),
  gm = Symbol.for('react.provider'),
  mm = Symbol.for('react.context'),
  ym = Symbol.for('react.forward_ref'),
  vm = Symbol.for('react.suspense'),
  wm = Symbol.for('react.memo'),
  xm = Symbol.for('react.lazy'),
  Xa = Symbol.iterator;
function Sm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xa && e[Xa]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ud = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ad = Object.assign,
  cd = {};
function fr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = cd), (this.updater = n || ud);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function fd() {}
fd.prototype = fr.prototype;
function Ru(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = cd), (this.updater = n || ud);
}
var Lu = (Ru.prototype = new fd());
Lu.constructor = Ru;
ad(Lu, fr.prototype);
Lu.isPureReactComponent = !0;
var ba = Array.isArray,
  dd = Object.prototype.hasOwnProperty,
  $u = {
    current: null,
  },
  hd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function pd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      dd.call(t, r) && !hd.hasOwnProperty(r) && (o[r] = t[r]);
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
    _owner: $u.current,
  };
}
function Em(e, t) {
  return {
    $$typeof: So,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Du(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So;
}
function _m(e) {
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
var Ka = /\/+/g;
function Vl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? _m('' + e.key) : t.toString(36);
}
function ii(e, t, n, r, o) {
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
          case fm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Vl(l, 0) : r),
      ba(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ka, '$&/') + '/'),
          ii(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (Du(o) &&
            (o = Em(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Ka, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), ba(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Vl(i, s);
      l += ii(i, t, n, u, o);
    }
  else if (((u = Sm(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (u = r + Vl(i, s++)), (l += ii(i, t, n, u, o));
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
function Lo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ii(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function km(e) {
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
  li = {
    transition: null,
  },
  Cm = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: li,
    ReactCurrentOwner: $u,
  };
function gd() {
  throw Error('act(...) is not supported in production builds of React.');
}
q.Children = {
  map: Lo,
  forEach: function (e, t, n) {
    Lo(
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
      Lo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Du(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
q.Component = fr;
q.Fragment = dm;
q.Profiler = pm;
q.PureComponent = Ru;
q.StrictMode = hm;
q.Suspense = vm;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
q.act = gd;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = ad({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = $u.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t) dd.call(t, u) && !hd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
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
      $$typeof: mm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: gm,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
q.createElement = pd;
q.createFactory = function (e) {
  var t = pd.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return {
    current: null,
  };
};
q.forwardRef = function (e) {
  return {
    $$typeof: ym,
    render: e,
  };
};
q.isValidElement = Du;
q.lazy = function (e) {
  return {
    $$typeof: xm,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: km,
  };
};
q.memo = function (e, t) {
  return {
    $$typeof: wm,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
q.startTransition = function (e) {
  var t = li.transition;
  li.transition = {};
  try {
    e();
  } finally {
    li.transition = t;
  }
};
q.unstable_act = gd;
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
sd.exports = q;
var D = sd.exports;
const md = id(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm = D,
  Mm = Symbol.for('react.element'),
  Pm = Symbol.for('react.fragment'),
  Tm = Object.prototype.hasOwnProperty,
  Im = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function yd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Tm.call(t, r) && !zm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Mm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Im.current,
  };
}
nl.Fragment = Pm;
nl.jsx = yd;
nl.jsxs = yd;
ld.exports = nl;
var R = ld.exports,
  Es = {},
  vd = {
    exports: {},
  },
  be = {},
  wd = {
    exports: {},
  },
  xd = {};
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
        B = E[A];
      if (0 < o(B, N)) (E[A] = N), (E[z] = B), (z = A);
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
      e: for (var A = 0, B = E.length, b = B >>> 1; A < b; ) {
        var U = 2 * (A + 1) - 1,
          X = E[U],
          Y = U + 1,
          j = E[Y];
        if (0 > o(X, z)) Y < B && 0 > o(j, X) ? ((E[A] = j), (E[Y] = z), (A = Y)) : ((E[A] = X), (E[U] = z), (A = U));
        else if (Y < B && 0 > o(j, z)) (E[A] = j), (E[Y] = z), (A = Y);
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
    h = !1,
    m = !1,
    w = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    y = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= E) r(a), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(a);
    }
  }
  function v(E) {
    if (((w = !1), p(E), !m))
      if (n(u) !== null) (m = !0), C(k);
      else {
        var N = n(a);
        N !== null && $(v, N.startTime - E);
      }
  }
  function k(E, N) {
    (m = !1), w && ((w = !1), g(P), (P = -1)), (h = !0);
    var z = c;
    try {
      for (p(N), f = n(u); f !== null && (!(f.expirationTime > N) || (E && !H())); ) {
        var A = f.callback;
        if (typeof A == 'function') {
          (f.callback = null), (c = f.priorityLevel);
          var B = A(f.expirationTime <= N);
          (N = e.unstable_now()), typeof B == 'function' ? (f.callback = B) : f === n(u) && r(u), p(N);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var b = !0;
      else {
        var U = n(a);
        U !== null && $(v, U.startTime - N), (b = !1);
      }
      return b;
    } finally {
      (f = null), (c = z), (h = !1);
    }
  }
  var M = !1,
    _ = null,
    P = -1,
    L = 5,
    T = -1;
  function H() {
    return !(e.unstable_now() - T < L);
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
  if (typeof y == 'function')
    O = function () {
      y(F);
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
  function C(E) {
    (_ = E), M || ((M = !0), O());
  }
  function $(E, N) {
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
      m || h || ((m = !0), C(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (L = 0 < E ? Math.floor(1e3 / E) : 5);
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
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = z + B),
        (E = {
          id: d++,
          callback: N,
          priorityLevel: E,
          startTime: z,
          expirationTime: B,
          sortIndex: -1,
        }),
        z > A
          ? ((E.sortIndex = z), t(a, E), n(u) === null && E === n(a) && (w ? (g(P), (P = -1)) : (w = !0), $(v, z - A)))
          : ((E.sortIndex = B), t(u, E), m || h || ((m = !0), C(k))),
        E
      );
    }),
    (e.unstable_shouldYield = H),
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
})(xd);
wd.exports = xd;
var Rm = wd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lm = D,
  Ye = Rm;
function V(e) {
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
var Sd = new Set(),
  br = {};
function Nn(e, t) {
  Zn(e, t), Zn(e + 'Capture', t);
}
function Zn(e, t) {
  for (br[e] = t, e = 0; e < t.length; e++) Sd.add(t[e]);
}
var Pt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  _s = Object.prototype.hasOwnProperty,
  $m =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ga = {},
  Qa = {};
function Dm(e) {
  return _s.call(Qa, e) ? !0 : _s.call(Ga, e) ? !1 : $m.test(e) ? (Qa[e] = !0) : ((Ga[e] = !0), !1);
}
function Am(e, t, n, r) {
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
function Om(e, t, n, r) {
  if (t === null || typeof t > 'u' || Am(e, t, n, r)) return !0;
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
var Au = /[\-:]([a-z])/g;
function Ou(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Au, Ou);
    Ne[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Au, Ou);
  Ne[t] = new $e(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Au, Ou);
  Ne[t] = new $e(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new $e('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ne[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fu(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Om(t, n, o, r) && (n = null),
    r || o === null
      ? Dm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Lt = Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $o = Symbol.for('react.element'),
  Tn = Symbol.for('react.portal'),
  In = Symbol.for('react.fragment'),
  Hu = Symbol.for('react.strict_mode'),
  ks = Symbol.for('react.profiler'),
  Ed = Symbol.for('react.provider'),
  _d = Symbol.for('react.context'),
  Vu = Symbol.for('react.forward_ref'),
  Cs = Symbol.for('react.suspense'),
  Ns = Symbol.for('react.suspense_list'),
  Bu = Symbol.for('react.memo'),
  Ht = Symbol.for('react.lazy'),
  kd = Symbol.for('react.offscreen'),
  Za = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Za && e[Za]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var he = Object.assign,
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
var jl = !1;
function Ul(e, t) {
  if (!e || jl) return '';
  jl = !0;
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
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ir(e) : '';
}
function Fm(e) {
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
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return '';
  }
}
function Ms(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case In:
      return 'Fragment';
    case Tn:
      return 'Portal';
    case ks:
      return 'Profiler';
    case Hu:
      return 'StrictMode';
    case Cs:
      return 'Suspense';
    case Ns:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case _d:
        return (e.displayName || 'Context') + '.Consumer';
      case Ed:
        return (e._context.displayName || 'Context') + '.Provider';
      case Vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Bu:
        return (t = e.displayName || null), t !== null ? t : Ms(e.type) || 'Memo';
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return Ms(e(t));
        } catch {}
    }
  return null;
}
function Hm(e) {
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
      return Ms(t);
    case 8:
      return t === Hu ? 'StrictMode' : 'Mode';
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
function Cd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Vm(e) {
  var t = Cd(e) ? 'checked' : 'value',
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
function Do(e) {
  e._valueTracker || (e._valueTracker = Vm(e));
}
function Nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Cd(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Si(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Md(e, t) {
  (t = t.checked), t != null && Fu(e, 'checked', t, !1);
}
function Ts(e, t) {
  Md(e, t);
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
  t.hasOwnProperty('value') ? Is(e, t.type, n) : t.hasOwnProperty('defaultValue') && Is(e, t.type, nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ja(e, t, n) {
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
function Is(e, t, n) {
  (t !== 'number' || Si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zr = Array.isArray;
function Un(e, t, n, r) {
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
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ec(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(V(93));
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
function Pd(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function tc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Td(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Rs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Td(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ao,
  Id = (function (e) {
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
        Ao = Ao || document.createElement('div'),
          Ao.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ao.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kr(e, t) {
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
  Bm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ar).forEach(function (e) {
  Bm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
  });
});
function zd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Rd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = zd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var jm = he(
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
function Ls(e, t) {
  if (t) {
    if (jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(V(62));
  }
}
function $s(e, t) {
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
var Ds = null;
function ju(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var As = null,
  Wn = null,
  Yn = null;
function nc(e) {
  if ((e = ko(e))) {
    if (typeof As != 'function') throw Error(V(280));
    var t = e.stateNode;
    t && ((t = sl(t)), As(e.stateNode, e.type, t));
  }
}
function Ld(e) {
  Wn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Wn = e);
}
function $d() {
  if (Wn) {
    var e = Wn,
      t = Yn;
    if (((Yn = Wn = null), nc(e), t)) for (e = 0; e < t.length; e++) nc(t[e]);
  }
}
function Dd(e, t) {
  return e(t);
}
function Ad() {}
var Wl = !1;
function Od(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return Dd(e, t, n);
  } finally {
    (Wl = !1), (Wn !== null || Yn !== null) && (Ad(), $d());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
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
  if (n && typeof n != 'function') throw Error(V(231, t, typeof n));
  return n;
}
var Os = !1;
if (Pt)
  try {
    var xr = {};
    Object.defineProperty(xr, 'passive', {
      get: function () {
        Os = !0;
      },
    }),
      window.addEventListener('test', xr, xr),
      window.removeEventListener('test', xr, xr);
  } catch {
    Os = !1;
  }
function Um(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Or = !1,
  Ei = null,
  _i = !1,
  Fs = null,
  Wm = {
    onError: function (e) {
      (Or = !0), (Ei = e);
    },
  };
function Ym(e, t, n, r, o, i, l, s, u) {
  (Or = !1), (Ei = null), Um.apply(Wm, arguments);
}
function Xm(e, t, n, r, o, i, l, s, u) {
  if ((Ym.apply(this, arguments), Or)) {
    if (Or) {
      var a = Ei;
      (Or = !1), (Ei = null);
    } else throw Error(V(198));
    _i || ((_i = !0), (Fs = a));
  }
}
function Mn(e) {
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
function Fd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function rc(e) {
  if (Mn(e) !== e) throw Error(V(188));
}
function bm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(V(188));
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
        if (i === n) return rc(o), e;
        if (i === r) return rc(o), t;
        i = i.sibling;
      }
      throw Error(V(188));
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
        if (!l) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function Hd(e) {
  return (e = bm(e)), e !== null ? Vd(e) : null;
}
function Vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bd = Ye.unstable_scheduleCallback,
  oc = Ye.unstable_cancelCallback,
  Km = Ye.unstable_shouldYield,
  Gm = Ye.unstable_requestPaint,
  me = Ye.unstable_now,
  Qm = Ye.unstable_getCurrentPriorityLevel,
  Uu = Ye.unstable_ImmediatePriority,
  jd = Ye.unstable_UserBlockingPriority,
  ki = Ye.unstable_NormalPriority,
  Zm = Ye.unstable_LowPriority,
  Ud = Ye.unstable_IdlePriority,
  rl = null,
  mt = null;
function qm(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : ty,
  Jm = Math.log,
  ey = Math.LN2;
function ty(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jm(e) / ey) | 0)) | 0;
}
var Oo = 64,
  Fo = 4194304;
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
function Ci(e, t) {
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
function ny(e, t) {
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
function ry(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - at(i),
      s = 1 << l,
      u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = ny(s, t)) : u <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function Hs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wd() {
  var e = Oo;
  return (Oo <<= 1), !(Oo & 4194240) && (Oo = 64), e;
}
function Yl(e) {
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
function oy(e, t) {
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
function Wu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function Yd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xd,
  Yu,
  bd,
  Kd,
  Gd,
  Vs = !1,
  Ho = [],
  bt = null,
  Kt = null,
  Gt = null,
  Qr = new Map(),
  Zr = new Map(),
  jt = [],
  iy =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function ic(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      bt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Kt = null;
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
function Sr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ko(t)), t !== null && Yu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ly(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (bt = Sr(bt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Kt = Sr(Kt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Gt = Sr(Gt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Qr.set(i, Sr(Qr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), Zr.set(i, Sr(Zr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Qd(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fd(n)), t !== null)) {
          (e.blockedOn = t),
            Gd(e.priority, function () {
              bd(n);
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
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ds = r), n.target.dispatchEvent(r), (Ds = null);
    } else return (t = ko(n)), t !== null && Yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function lc(e, t, n) {
  si(e) && n.delete(t);
}
function sy() {
  (Vs = !1),
    bt !== null && si(bt) && (bt = null),
    Kt !== null && si(Kt) && (Kt = null),
    Gt !== null && si(Gt) && (Gt = null),
    Qr.forEach(lc),
    Zr.forEach(lc);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Vs || ((Vs = !0), Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, sy)));
}
function qr(e) {
  function t(o) {
    return Er(o, e);
  }
  if (0 < Ho.length) {
    Er(Ho[0], e);
    for (var n = 1; n < Ho.length; n++) {
      var r = Ho[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bt !== null && Er(bt, e), Kt !== null && Er(Kt, e), Gt !== null && Er(Gt, e), Qr.forEach(t), Zr.forEach(t), n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); ) Qd(n), n.blockedOn === null && jt.shift();
}
var Xn = Lt.ReactCurrentBatchConfig,
  Ni = !0;
function uy(e, t, n, r) {
  var o = oe,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (oe = 1), Xu(e, t, n, r);
  } finally {
    (oe = o), (Xn.transition = i);
  }
}
function ay(e, t, n, r) {
  var o = oe,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (oe = 4), Xu(e, t, n, r);
  } finally {
    (oe = o), (Xn.transition = i);
  }
}
function Xu(e, t, n, r) {
  if (Ni) {
    var o = Bs(e, t, n, r);
    if (o === null) ts(e, t, r, Mi, n), ic(e, r);
    else if (ly(o, e, t, n, r)) r.stopPropagation();
    else if ((ic(e, r), t & 4 && -1 < iy.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if ((i !== null && Xd(i), (i = Bs(e, t, n, r)), i === null && ts(e, t, r, Mi, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Mi = null;
function Bs(e, t, n, r) {
  if (((Mi = null), (e = ju(r)), (e = fn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Mi = e), null;
}
function Zd(e) {
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
      switch (Qm()) {
        case Uu:
          return 1;
        case jd:
          return 4;
        case ki:
        case Zm:
          return 16;
        case Ud:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  bu = null,
  ui = null;
function qd() {
  if (ui) return ui;
  var e,
    t = bu,
    n = t.length,
    r,
    o = 'value' in Yt ? Yt.value : Yt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (ui = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ai(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vo() {
  return !0;
}
function sc() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vo : sc),
      (this.isPropagationStopped = sc),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vo));
      },
      persist: function () {},
      isPersistent: Vo,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ku = Ke(dr),
  _o = he({}, dr, {
    view: 0,
    detail: 0,
  }),
  cy = Ke(_o),
  Xl,
  bl,
  _r,
  ol = he({}, _o, {
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
    getModifierState: Gu,
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
        : (e !== _r &&
            (_r && e.type === 'mousemove'
              ? ((Xl = e.screenX - _r.screenX), (bl = e.screenY - _r.screenY))
              : (bl = Xl = 0),
            (_r = e)),
          Xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : bl;
    },
  }),
  uc = Ke(ol),
  fy = he({}, ol, {
    dataTransfer: 0,
  }),
  dy = Ke(fy),
  hy = he({}, _o, {
    relatedTarget: 0,
  }),
  Kl = Ke(hy),
  py = he({}, dr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  gy = Ke(py),
  my = he({}, dr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yy = Ke(my),
  vy = he({}, dr, {
    data: 0,
  }),
  ac = Ke(vy),
  wy = {
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
  xy = {
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
  Sy = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Ey(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sy[e]) ? !!t[e] : !1;
}
function Gu() {
  return Ey;
}
var _y = he({}, _o, {
    key: function (e) {
      if (e.key) {
        var t = wy[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ai(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? xy[e.keyCode] || 'Unidentified'
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
    getModifierState: Gu,
    charCode: function (e) {
      return e.type === 'keypress' ? ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? ai(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  ky = Ke(_y),
  Cy = he({}, ol, {
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
  cc = Ke(Cy),
  Ny = he({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  My = Ke(Ny),
  Py = he({}, dr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Ty = Ke(Py),
  Iy = he({}, ol, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zy = Ke(Iy),
  Ry = [9, 13, 27, 32],
  Qu = Pt && 'CompositionEvent' in window,
  Fr = null;
Pt && 'documentMode' in document && (Fr = document.documentMode);
var Ly = Pt && 'TextEvent' in window && !Fr,
  Jd = Pt && (!Qu || (Fr && 8 < Fr && 11 >= Fr)),
  fc = String.fromCharCode(32),
  dc = !1;
function eh(e, t) {
  switch (e) {
    case 'keyup':
      return Ry.indexOf(t.keyCode) !== -1;
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
function th(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var zn = !1;
function $y(e, t) {
  switch (e) {
    case 'compositionend':
      return th(t);
    case 'keypress':
      return t.which !== 32 ? null : ((dc = !0), fc);
    case 'textInput':
      return (e = t.data), e === fc && dc ? null : e;
    default:
      return null;
  }
}
function Dy(e, t) {
  if (zn) return e === 'compositionend' || (!Qu && eh(e, t)) ? ((e = qd()), (ui = bu = Yt = null), (zn = !1), e) : null;
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
      return Jd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Ay = {
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
  return t === 'input' ? !!Ay[e.type] : t === 'textarea';
}
function nh(e, t, n, r) {
  Ld(r),
    (t = Pi(t, 'onChange')),
    0 < t.length &&
      ((n = new Ku('onChange', 'change', null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Hr = null,
  Jr = null;
function Oy(e) {
  hh(e, 0);
}
function il(e) {
  var t = $n(e);
  if (Nd(t)) return e;
}
function Fy(e, t) {
  if (e === 'change') return t;
}
var rh = !1;
if (Pt) {
  var Gl;
  if (Pt) {
    var Ql = 'oninput' in document;
    if (!Ql) {
      var pc = document.createElement('div');
      pc.setAttribute('oninput', 'return;'), (Ql = typeof pc.oninput == 'function');
    }
    Gl = Ql;
  } else Gl = !1;
  rh = Gl && (!document.documentMode || 9 < document.documentMode);
}
function gc() {
  Hr && (Hr.detachEvent('onpropertychange', oh), (Jr = Hr = null));
}
function oh(e) {
  if (e.propertyName === 'value' && il(Jr)) {
    var t = [];
    nh(t, Jr, e, ju(e)), Od(Oy, t);
  }
}
function Hy(e, t, n) {
  e === 'focusin' ? (gc(), (Hr = t), (Jr = n), Hr.attachEvent('onpropertychange', oh)) : e === 'focusout' && gc();
}
function Vy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return il(Jr);
}
function By(e, t) {
  if (e === 'click') return il(t);
}
function jy(e, t) {
  if (e === 'input' || e === 'change') return il(t);
}
function Uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == 'function' ? Object.is : Uy;
function eo(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!_s.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function mc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yc(e, t) {
  var n = mc(e);
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
    n = mc(n);
  }
}
function ih(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ih(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function lh() {
  for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Si(e.document);
  }
  return t;
}
function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Wy(e) {
  var t = lh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ih(n.ownerDocument.documentElement, n)) {
    if (r !== null && Zu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = yc(n, i));
        var l = yc(n, r);
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
var Yy = Pt && 'documentMode' in document && 11 >= document.documentMode,
  Rn = null,
  js = null,
  Vr = null,
  Us = !1;
function vc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Us ||
    Rn == null ||
    Rn !== Si(r) ||
    ((r = Rn),
    'selectionStart' in r && Zu(r)
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
    (Vr && eo(Vr, r)) ||
      ((Vr = r),
      (r = Pi(js, 'onSelect')),
      0 < r.length &&
        ((t = new Ku('onSelect', 'select', null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Rn))));
}
function Bo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Ln = {
    animationend: Bo('Animation', 'AnimationEnd'),
    animationiteration: Bo('Animation', 'AnimationIteration'),
    animationstart: Bo('Animation', 'AnimationStart'),
    transitionend: Bo('Transition', 'TransitionEnd'),
  },
  Zl = {},
  sh = {};
Pt &&
  ((sh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation),
  'TransitionEvent' in window || delete Ln.transitionend.transition);
function ll(e) {
  if (Zl[e]) return Zl[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sh) return (Zl[e] = t[n]);
  return e;
}
var uh = ll('animationend'),
  ah = ll('animationiteration'),
  ch = ll('animationstart'),
  fh = ll('transitionend'),
  dh = new Map(),
  wc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function on(e, t) {
  dh.set(e, t), Nn(t, [e]);
}
for (var ql = 0; ql < wc.length; ql++) {
  var Jl = wc[ql],
    Xy = Jl.toLowerCase(),
    by = Jl[0].toUpperCase() + Jl.slice(1);
  on(Xy, 'on' + by);
}
on(uh, 'onAnimationEnd');
on(ah, 'onAnimationIteration');
on(ch, 'onAnimationStart');
on('dblclick', 'onDoubleClick');
on('focusin', 'onFocus');
on('focusout', 'onBlur');
on(fh, 'onTransitionEnd');
Zn('onMouseEnter', ['mouseout', 'mouseover']);
Zn('onMouseLeave', ['mouseout', 'mouseover']);
Zn('onPointerEnter', ['pointerout', 'pointerover']);
Zn('onPointerLeave', ['pointerout', 'pointerover']);
Nn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Nn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Nn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Nn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Nn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Nn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Lr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Ky = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Lr));
function xc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Xm(r, t, void 0, e), (e.currentTarget = null);
}
function hh(e, t) {
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
          xc(o, s, a), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]), (u = s.instance), (a = s.currentTarget), (s = s.listener), u !== i && o.isPropagationStopped())
          )
            break e;
          xc(o, s, a), (i = u);
        }
    }
  }
  if (_i) throw ((e = Fs), (_i = !1), (Fs = null), e);
}
function se(e, t) {
  var n = t[Ks];
  n === void 0 && (n = t[Ks] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ph(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), ph(n, e, r, t);
}
var jo = '_reactListening' + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[jo]) {
    (e[jo] = !0),
      Sd.forEach(function (n) {
        n !== 'selectionchange' && (Ky.has(n) || es(n, !1, e), es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jo] || ((t[jo] = !0), es('selectionchange', !1, t));
  }
}
function ph(e, t, n, r) {
  switch (Zd(t)) {
    case 1:
      var o = uy;
      break;
    case 4:
      o = ay;
      break;
    default:
      o = Xu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Os || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
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
function ts(e, t, n, r, o) {
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
          if (((l = fn(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Od(function () {
    var a = i,
      d = ju(n),
      f = [];
    e: {
      var c = dh.get(e);
      if (c !== void 0) {
        var h = Ku,
          m = e;
        switch (e) {
          case 'keypress':
            if (ai(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            h = ky;
            break;
          case 'focusin':
            (m = 'focus'), (h = Kl);
            break;
          case 'focusout':
            (m = 'blur'), (h = Kl);
            break;
          case 'beforeblur':
          case 'afterblur':
            h = Kl;
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
            h = uc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = dy;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = My;
            break;
          case uh:
          case ah:
          case ch:
            h = gy;
            break;
          case fh:
            h = Ty;
            break;
          case 'scroll':
            h = cy;
            break;
          case 'wheel':
            h = zy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            h = yy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = cc;
        }
        var w = (t & 4) !== 0,
          S = !w && e === 'scroll',
          g = w ? (c !== null ? c + 'Capture' : null) : c;
        w = [];
        for (var y = a, p; y !== null; ) {
          p = y;
          var v = p.stateNode;
          if (
            (p.tag === 5 && v !== null && ((p = v), g !== null && ((v = Gr(y, g)), v != null && w.push(no(y, v, p)))),
            S)
          )
            break;
          y = y.return;
        }
        0 < w.length &&
          ((c = new h(c, m, null, n, d)),
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
          (h = e === 'mouseout' || e === 'pointerout'),
          c && n !== Ds && (m = n.relatedTarget || n.fromElement) && (fn(m) || m[Tt]))
        )
          break e;
        if (
          (h || c) &&
          ((c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = a),
              (m = m ? fn(m) : null),
              m !== null && ((S = Mn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((h = null), (m = a)),
          h !== m)
        ) {
          if (
            ((w = uc),
            (v = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (y = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = cc), (v = 'onPointerLeave'), (g = 'onPointerEnter'), (y = 'pointer')),
            (S = h == null ? c : $n(h)),
            (p = m == null ? c : $n(m)),
            (c = new w(v, y + 'leave', h, n, d)),
            (c.target = S),
            (c.relatedTarget = p),
            (v = null),
            fn(d) === a && ((w = new w(g, y + 'enter', m, n, d)), (w.target = p), (w.relatedTarget = S), (v = w)),
            (S = v),
            h && m)
          )
            t: {
              for (w = h, g = m, y = 0, p = w; p; p = Pn(p)) y++;
              for (p = 0, v = g; v; v = Pn(v)) p++;
              for (; 0 < y - p; ) (w = Pn(w)), y--;
              for (; 0 < p - y; ) (g = Pn(g)), p--;
              for (; y--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                (w = Pn(w)), (g = Pn(g));
              }
              w = null;
            }
          else w = null;
          h !== null && Sc(f, c, h, w, !1), m !== null && S !== null && Sc(f, S, m, w, !0);
        }
      }
      e: {
        if (
          ((c = a ? $n(a) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && c.type === 'file'))
        )
          var k = Fy;
        else if (hc(c))
          if (rh) k = jy;
          else {
            k = Vy;
            var M = Hy;
          }
        else
          (h = c.nodeName) && h.toLowerCase() === 'input' && (c.type === 'checkbox' || c.type === 'radio') && (k = By);
        if (k && (k = k(e, a))) {
          nh(f, k, n, d);
          break e;
        }
        M && M(e, c, a),
          e === 'focusout' && (M = c._wrapperState) && M.controlled && c.type === 'number' && Is(c, 'number', c.value);
      }
      switch (((M = a ? $n(a) : window), e)) {
        case 'focusin':
          (hc(M) || M.contentEditable === 'true') && ((Rn = M), (js = a), (Vr = null));
          break;
        case 'focusout':
          Vr = js = Rn = null;
          break;
        case 'mousedown':
          Us = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Us = !1), vc(f, n, d);
          break;
        case 'selectionchange':
          if (Yy) break;
        case 'keydown':
        case 'keyup':
          vc(f, n, d);
      }
      var _;
      if (Qu)
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
        zn ? eh(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (Jd &&
          n.locale !== 'ko' &&
          (zn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && zn && (_ = qd())
            : ((Yt = d), (bu = 'value' in Yt ? Yt.value : Yt.textContent), (zn = !0))),
        (M = Pi(a, P)),
        0 < M.length &&
          ((P = new ac(P, e, null, n, d)),
          f.push({
            event: P,
            listeners: M,
          }),
          _ ? (P.data = _) : ((_ = th(n)), _ !== null && (P.data = _)))),
        (_ = Ly ? $y(e, n) : Dy(e, n)) &&
          ((a = Pi(a, 'onBeforeInput')),
          0 < a.length &&
            ((d = new ac('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({
              event: d,
              listeners: a,
            }),
            (d.data = _)));
    }
    hh(f, t);
  });
}
function no(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Pi(e, t) {
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
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sc(e, t, n, r, o) {
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
var Gy = /\r\n?/g,
  Qy = /\u0000|\uFFFD/g;
function Ec(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Gy,
      `
`,
    )
    .replace(Qy, '');
}
function Uo(e, t, n) {
  if (((t = Ec(t)), Ec(e) !== t && n)) throw Error(V(425));
}
function Ti() {}
var Ws = null,
  Ys = null;
function Xs(e, t) {
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
var bs = typeof setTimeout == 'function' ? setTimeout : void 0,
  Zy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _c = typeof Promise == 'function' ? Promise : void 0,
  qy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _c < 'u'
        ? function (e) {
            return _c.resolve(null).then(e).catch(Jy);
          }
        : bs;
function Jy(e) {
  setTimeout(function () {
    throw e;
  });
}
function ns(e, t) {
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
function kc(e) {
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
  Ks = '__reactEvents$' + hr,
  ev = '__reactListeners$' + hr,
  tv = '__reactHandles$' + hr;
function fn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[gt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = kc(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = kc(e);
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
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function sl(e) {
  return e[ro] || null;
}
var Gs = [],
  Dn = -1;
function ln(e) {
  return {
    current: e,
  };
}
function ue(e) {
  0 > Dn || ((e.current = Gs[Dn]), (Gs[Dn] = null), Dn--);
}
function ie(e, t) {
  Dn++, (Gs[Dn] = e.current), (e.current = t);
}
var rn = {},
  Ie = ln(rn),
  Fe = ln(!1),
  wn = rn;
function qn(e, t) {
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
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Ii() {
  ue(Fe), ue(Ie);
}
function Cc(e, t, n) {
  if (Ie.current !== rn) throw Error(V(168));
  ie(Ie, t), ie(Fe, n);
}
function gh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, Hm(e) || 'Unknown', o));
  return he({}, n, r);
}
function zi(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (wn = Ie.current),
    ie(Ie, e),
    ie(Fe, Fe.current),
    !0
  );
}
function Nc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? ((e = gh(e, t, wn)), (r.__reactInternalMemoizedMergedChildContext = e), ue(Fe), ue(Ie), ie(Ie, e)) : ue(Fe),
    ie(Fe, n);
}
var Et = null,
  ul = !1,
  rs = !1;
function mh(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function nv(e) {
  (ul = !0), mh(e);
}
function sn() {
  if (!rs && Et !== null) {
    rs = !0;
    var e = 0,
      t = oe;
    try {
      var n = Et;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (ul = !1);
    } catch (o) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Bd(Uu, sn), o);
    } finally {
      (oe = t), (rs = !1);
    }
  }
  return null;
}
var An = [],
  On = 0,
  Ri = null,
  Li = 0,
  Ge = [],
  Qe = 0,
  xn = null,
  _t = 1,
  kt = '';
function un(e, t) {
  (An[On++] = Li), (An[On++] = Ri), (Ri = e), (Li = t);
}
function yh(e, t, n) {
  (Ge[Qe++] = _t), (Ge[Qe++] = kt), (Ge[Qe++] = xn), (xn = e);
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
function qu(e) {
  e.return !== null && (un(e, 1), yh(e, 1, 0));
}
function Ju(e) {
  for (; e === Ri; ) (Ri = An[--On]), (An[On] = null), (Li = An[--On]), (An[On] = null);
  for (; e === xn; )
    (xn = Ge[--Qe]), (Ge[Qe] = null), (kt = Ge[--Qe]), (Ge[Qe] = null), (_t = Ge[--Qe]), (Ge[Qe] = null);
}
var We = null,
  Ue = null,
  ae = !1,
  lt = null;
function vh(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Mc(e, t) {
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
              xn !== null
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
function Qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zs(e) {
  if (ae) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Mc(e, t)) {
        if (Qs(e)) throw Error(V(418));
        t = Qt(n.nextSibling);
        var r = We;
        t && Mc(e, t) ? vh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (We = e));
      }
    } else {
      if (Qs(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (We = e);
    }
  }
}
function Pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Wo(e) {
  if (e !== We) return !1;
  if (!ae) return Pc(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Xs(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Qs(e)) throw (wh(), Error(V(418)));
    for (; t; ) vh(e, t), (t = Qt(t.nextSibling));
  }
  if ((Pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(V(317));
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
function wh() {
  for (var e = Ue; e; ) e = Qt(e.nextSibling);
}
function Jn() {
  (Ue = We = null), (ae = !1);
}
function ea(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var rv = Lt.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
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
    if (typeof e != 'string') throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function Yo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(V(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function Tc(e) {
  var t = e._init;
  return t(e._payload);
}
function xh(e) {
  function t(g, y) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [y]), (g.flags |= 16)) : p.push(y);
    }
  }
  function n(g, y) {
    if (!e) return null;
    for (; y !== null; ) t(g, y), (y = y.sibling);
    return null;
  }
  function r(g, y) {
    for (g = new Map(); y !== null; ) y.key !== null ? g.set(y.key, y) : g.set(y.index, y), (y = y.sibling);
    return g;
  }
  function o(g, y) {
    return (g = en(g, y)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, y, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate), p !== null ? ((p = p.index), p < y ? ((g.flags |= 2), y) : p) : ((g.flags |= 2), y))
        : ((g.flags |= 1048576), y)
    );
  }
  function l(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, y, p, v) {
    return y === null || y.tag !== 6 ? ((y = cs(p, g.mode, v)), (y.return = g), y) : ((y = o(y, p)), (y.return = g), y);
  }
  function u(g, y, p, v) {
    var k = p.type;
    return k === In
      ? d(g, y, p.props.children, v, p.key)
      : y !== null &&
          (y.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === Ht && Tc(k) === y.type))
        ? ((v = o(y, p.props)), (v.ref = kr(g, y, p)), (v.return = g), v)
        : ((v = mi(p.type, p.key, p.props, null, g.mode, v)), (v.ref = kr(g, y, p)), (v.return = g), v);
  }
  function a(g, y, p, v) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== p.containerInfo ||
      y.stateNode.implementation !== p.implementation
      ? ((y = fs(p, g.mode, v)), (y.return = g), y)
      : ((y = o(y, p.children || [])), (y.return = g), y);
  }
  function d(g, y, p, v, k) {
    return y === null || y.tag !== 7
      ? ((y = mn(p, g.mode, v, k)), (y.return = g), y)
      : ((y = o(y, p)), (y.return = g), y);
  }
  function f(g, y, p) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (y = cs('' + y, g.mode, p)), (y.return = g), y;
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case $o:
          return (p = mi(y.type, y.key, y.props, null, g.mode, p)), (p.ref = kr(g, null, y)), (p.return = g), p;
        case Tn:
          return (y = fs(y, g.mode, p)), (y.return = g), y;
        case Ht:
          var v = y._init;
          return f(g, v(y._payload), p);
      }
      if (zr(y) || wr(y)) return (y = mn(y, g.mode, p, null)), (y.return = g), y;
      Yo(g, y);
    }
    return null;
  }
  function c(g, y, p, v) {
    var k = y !== null ? y.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number') return k !== null ? null : s(g, y, '' + p, v);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case $o:
          return p.key === k ? u(g, y, p, v) : null;
        case Tn:
          return p.key === k ? a(g, y, p, v) : null;
        case Ht:
          return (k = p._init), c(g, y, k(p._payload), v);
      }
      if (zr(p) || wr(p)) return k !== null ? null : d(g, y, p, v, null);
      Yo(g, p);
    }
    return null;
  }
  function h(g, y, p, v, k) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number') return (g = g.get(p) || null), s(y, g, '' + v, k);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case $o:
          return (g = g.get(v.key === null ? p : v.key) || null), u(y, g, v, k);
        case Tn:
          return (g = g.get(v.key === null ? p : v.key) || null), a(y, g, v, k);
        case Ht:
          var M = v._init;
          return h(g, y, p, M(v._payload), k);
      }
      if (zr(v) || wr(v)) return (g = g.get(p) || null), d(y, g, v, k, null);
      Yo(y, v);
    }
    return null;
  }
  function m(g, y, p, v) {
    for (var k = null, M = null, _ = y, P = (y = 0), L = null; _ !== null && P < p.length; P++) {
      _.index > P ? ((L = _), (_ = null)) : (L = _.sibling);
      var T = c(g, _, p[P], v);
      if (T === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && T.alternate === null && t(g, _),
        (y = i(T, y, P)),
        M === null ? (k = T) : (M.sibling = T),
        (M = T),
        (_ = L);
    }
    if (P === p.length) return n(g, _), ae && un(g, P), k;
    if (_ === null) {
      for (; P < p.length; P++)
        (_ = f(g, p[P], v)), _ !== null && ((y = i(_, y, P)), M === null ? (k = _) : (M.sibling = _), (M = _));
      return ae && un(g, P), k;
    }
    for (_ = r(g, _); P < p.length; P++)
      (L = h(_, g, P, p[P], v)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? P : L.key),
          (y = i(L, y, P)),
          M === null ? (k = L) : (M.sibling = L),
          (M = L));
    return (
      e &&
        _.forEach(function (H) {
          return t(g, H);
        }),
      ae && un(g, P),
      k
    );
  }
  function w(g, y, p, v) {
    var k = wr(p);
    if (typeof k != 'function') throw Error(V(150));
    if (((p = k.call(p)), p == null)) throw Error(V(151));
    for (var M = (k = null), _ = y, P = (y = 0), L = null, T = p.next(); _ !== null && !T.done; P++, T = p.next()) {
      _.index > P ? ((L = _), (_ = null)) : (L = _.sibling);
      var H = c(g, _, T.value, v);
      if (H === null) {
        _ === null && (_ = L);
        break;
      }
      e && _ && H.alternate === null && t(g, _),
        (y = i(H, y, P)),
        M === null ? (k = H) : (M.sibling = H),
        (M = H),
        (_ = L);
    }
    if (T.done) return n(g, _), ae && un(g, P), k;
    if (_ === null) {
      for (; !T.done; P++, T = p.next())
        (T = f(g, T.value, v)), T !== null && ((y = i(T, y, P)), M === null ? (k = T) : (M.sibling = T), (M = T));
      return ae && un(g, P), k;
    }
    for (_ = r(g, _); !T.done; P++, T = p.next())
      (T = h(_, g, P, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? P : T.key),
          (y = i(T, y, P)),
          M === null ? (k = T) : (M.sibling = T),
          (M = T));
    return (
      e &&
        _.forEach(function (F) {
          return t(g, F);
        }),
      ae && un(g, P),
      k
    );
  }
  function S(g, y, p, v) {
    if (
      (typeof p == 'object' && p !== null && p.type === In && p.key === null && (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case $o:
          e: {
            for (var k = p.key, M = y; M !== null; ) {
              if (M.key === k) {
                if (((k = p.type), k === In)) {
                  if (M.tag === 7) {
                    n(g, M.sibling), (y = o(M, p.props.children)), (y.return = g), (g = y);
                    break e;
                  }
                } else if (
                  M.elementType === k ||
                  (typeof k == 'object' && k !== null && k.$$typeof === Ht && Tc(k) === M.type)
                ) {
                  n(g, M.sibling), (y = o(M, p.props)), (y.ref = kr(g, M, p)), (y.return = g), (g = y);
                  break e;
                }
                n(g, M);
                break;
              } else t(g, M);
              M = M.sibling;
            }
            p.type === In
              ? ((y = mn(p.props.children, g.mode, v, p.key)), (y.return = g), (g = y))
              : ((v = mi(p.type, p.key, p.props, null, g.mode, v)), (v.ref = kr(g, y, p)), (v.return = g), (g = v));
          }
          return l(g);
        case Tn:
          e: {
            for (M = p.key; y !== null; ) {
              if (y.key === M)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === p.containerInfo &&
                  y.stateNode.implementation === p.implementation
                ) {
                  n(g, y.sibling), (y = o(y, p.children || [])), (y.return = g), (g = y);
                  break e;
                } else {
                  n(g, y);
                  break;
                }
              else t(g, y);
              y = y.sibling;
            }
            (y = fs(p, g.mode, v)), (y.return = g), (g = y);
          }
          return l(g);
        case Ht:
          return (M = p._init), S(g, y, M(p._payload), v);
      }
      if (zr(p)) return m(g, y, p, v);
      if (wr(p)) return w(g, y, p, v);
      Yo(g, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        y !== null && y.tag === 6
          ? (n(g, y.sibling), (y = o(y, p)), (y.return = g), (g = y))
          : (n(g, y), (y = cs(p, g.mode, v)), (y.return = g), (g = y)),
        l(g))
      : n(g, y);
  }
  return S;
}
var er = xh(!0),
  Sh = xh(!1),
  $i = ln(null),
  Di = null,
  Fn = null,
  ta = null;
function na() {
  ta = Fn = Di = null;
}
function ra(e) {
  var t = $i.current;
  ue($i), (e._currentValue = t);
}
function qs(e, t, n) {
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
  (Di = e),
    (ta = Fn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (ta !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Fn === null)
    ) {
      if (Di === null) throw Error(V(308));
      (Fn = e),
        (Di.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Fn = Fn.next = e;
  return t;
}
var dn = null;
function oa(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Eh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), oa(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function ia(e) {
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
function _h(e, t) {
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
  if (((r = r.shared), te & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), It(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), oa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function ci(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wu(e, n);
  }
}
function Ic(e, t) {
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
function Ai(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
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
        h = s.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            w = s;
          switch (((c = t), (h = n), w.tag)) {
            case 1:
              if (((m = w.payload), typeof m == 'function')) {
                f = m.call(h, f, c);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (((m = w.payload), (c = typeof m == 'function' ? m.call(h, f, c) : m), c == null)) break e;
              f = he({}, f, c);
              break e;
            case 2:
              Vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [s]) : c.push(s));
      } else
        (h = {
          eventTime: h,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = h), (u = f)) : (d = d.next = h),
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
    (En |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function zc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(V(191, o));
        o.call(r);
      }
    }
}
var Co = {},
  yt = ln(Co),
  oo = ln(Co),
  io = ln(Co);
function hn(e) {
  if (e === Co) throw Error(V(174));
  return e;
}
function la(e, t) {
  switch ((ie(io, t), ie(oo, e), ie(yt, Co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rs(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Rs(t, e));
  }
  ue(yt), ie(yt, t);
}
function tr() {
  ue(yt), ue(oo), ue(io);
}
function kh(e) {
  hn(io.current);
  var t = hn(yt.current),
    n = Rs(t, e.type);
  t !== n && (ie(oo, e), ie(yt, n));
}
function sa(e) {
  oo.current === e && (ue(yt), ue(oo));
}
var fe = ln(0);
function Oi(e) {
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
var os = [];
function ua() {
  for (var e = 0; e < os.length; e++) os[e]._workInProgressVersionPrimary = null;
  os.length = 0;
}
var fi = Lt.ReactCurrentDispatcher,
  is = Lt.ReactCurrentBatchConfig,
  Sn = 0,
  de = null,
  we = null,
  Se = null,
  Fi = !1,
  Br = !1,
  lo = 0,
  ov = 0;
function Me() {
  throw Error(V(321));
}
function aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function ca(e, t, n, r, o, i) {
  if (
    ((Sn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fi.current = e === null || e.memoizedState === null ? uv : av),
    (e = n(r, o)),
    Br)
  ) {
    i = 0;
    do {
      if (((Br = !1), (lo = 0), 25 <= i)) throw Error(V(301));
      (i += 1), (Se = we = null), (t.updateQueue = null), (fi.current = cv), (e = n(r, o));
    } while (Br);
  }
  if (((fi.current = Hi), (t = we !== null && we.next !== null), (Sn = 0), (Se = we = de = null), (Fi = !1), t))
    throw Error(V(300));
  return e;
}
function fa() {
  var e = lo !== 0;
  return (lo = 0), e;
}
function pt() {
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
    if (e === null) throw Error(V(310));
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
function ls(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(V(311));
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
      if ((Sn & d) === d)
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
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f), (de.lanes |= d), (En |= d);
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
    do (i = o.lane), (de.lanes |= i), (En |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ss(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(V(311));
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
function Ch() {}
function Nh(e, t) {
  var n = de,
    r = et(),
    o = t(),
    i = !ft(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ae = !0)),
    (r = r.queue),
    da(Th.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), uo(9, Ph.bind(null, n, r, o, t), void 0, null), Ee === null)) throw Error(V(349));
    Sn & 30 || Mh(n, t, o);
  }
  return o;
}
function Mh(e, t, n) {
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
function Ph(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ih(t) && zh(e);
}
function Th(e, t, n) {
  return n(function () {
    Ih(t) && zh(e);
  });
}
function Ih(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function zh(e) {
  var t = It(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Rc(e) {
  var t = pt();
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
    (e = e.dispatch = sv.bind(null, de, e)),
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
function Rh() {
  return et().memoizedState;
}
function di(e, t, n, r) {
  var o = pt();
  (de.flags |= e), (o.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var l = we.memoizedState;
    if (((i = l.destroy), r !== null && aa(r, l.deps))) {
      o.memoizedState = uo(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = uo(1 | t, n, i, r));
}
function Lc(e, t) {
  return di(8390656, 8, e, t);
}
function da(e, t) {
  return al(2048, 8, e, t);
}
function Lh(e, t) {
  return al(4, 2, e, t);
}
function $h(e, t) {
  return al(4, 4, e, t);
}
function Dh(e, t) {
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
function Ah(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), al(4, 4, Dh.bind(null, t, e), n);
}
function ha() {}
function Oh(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Fh(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && aa(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hh(e, t, n) {
  return Sn & 21
    ? (ft(n, t) || ((n = Wd()), (de.lanes |= n), (En |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function iv(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = is.transition;
  is.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (is.transition = r);
  }
}
function Vh() {
  return et().memoizedState;
}
function lv(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bh(e))
  )
    jh(t, n);
  else if (((n = Eh(e, t, n, r)), n !== null)) {
    var o = Re();
    ct(n, e, r, o), Uh(n, t, r);
  }
}
function sv(e, t, n) {
  var r = Jt(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Bh(e)) jh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ft(s, l))) {
          var u = t.interleaved;
          u === null ? ((o.next = o), oa(t)) : ((o.next = u.next), (u.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Eh(e, t, o, r)), n !== null && ((o = Re()), ct(n, e, r, o), Uh(n, t, r));
  }
}
function Bh(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function jh(e, t) {
  Br = Fi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Uh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wu(e, n);
  }
}
var Hi = {
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
  uv = {
    readContext: Je,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Lc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), di(4194308, 4, Dh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return di(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return di(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = pt();
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
        (e = e.dispatch = lv.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: Rc,
    useDebugValue: ha,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Rc(!1),
        t = e[0];
      return (e = iv.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = pt();
      if (ae) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(V(349));
        Sn & 30 || Mh(r, t, n);
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t,
      };
      return (
        (o.queue = i),
        Lc(Th.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        uo(9, Ph.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = Ee.identifierPrefix;
      if (ae) {
        var n = kt,
          r = _t;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = lo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = ov++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  av = {
    readContext: Je,
    useCallback: Oh,
    useContext: Je,
    useEffect: da,
    useImperativeHandle: Ah,
    useInsertionEffect: Lh,
    useLayoutEffect: $h,
    useMemo: Fh,
    useReducer: ls,
    useRef: Rh,
    useState: function () {
      return ls(so);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = et();
      return Hh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(so)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ch,
    useSyncExternalStore: Nh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: Je,
    useCallback: Oh,
    useContext: Je,
    useEffect: da,
    useImperativeHandle: Ah,
    useInsertionEffect: Lh,
    useLayoutEffect: $h,
    useMemo: Fh,
    useReducer: ss,
    useRef: Rh,
    useState: function () {
      return ss(so);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = et();
      return we === null ? (t.memoizedState = e) : Hh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ss(so)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ch,
    useSyncExternalStore: Nh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  };
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Js(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Jt(e),
      i = Nt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Zt(e, i, o)), t !== null && (ct(t, e, o, r), ci(t, e, o));
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
      t !== null && (ct(t, e, o, r), ci(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Jt(e),
      o = Nt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Zt(e, o, r)), t !== null && (ct(t, e, r, n), ci(t, e, r));
  },
};
function $c(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !eo(n, r) || !eo(o, i)
        : !0
  );
}
function Wh(e, t, n) {
  var r = !1,
    o = rn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Je(i))
      : ((o = He(t) ? wn : Ie.current), (r = t.contextTypes), (i = (r = r != null) ? qn(e, o) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Dc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function eu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ia(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = Je(i)) : ((i = He(t) ? wn : Ie.current), (o.context = qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Js(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && cl.enqueueReplaceState(o, o.state, null),
      Ai(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Fm(r)), (r = r.return);
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
function us(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fv = typeof WeakMap == 'function' ? WeakMap : Map;
function Yh(e, t, n) {
  (n = Nt(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      Bi || ((Bi = !0), (fu = r)), tu(e, t);
    }),
    n
  );
}
function Xh(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        tu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        tu(e, t), typeof r != 'function' && (qt === null ? (qt = new Set([this])) : qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function Ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Cv.bind(null, e, t, n)), t.then(e, e));
}
function Oc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fc(e, t, n, r, o) {
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
var dv = Lt.ReactCurrentOwner,
  Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Sh(t, null, n, r) : er(t, e.child, n, r);
}
function Hc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    bn(t, o),
    (r = ca(e, t, n, r, i, o)),
    (n = fa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zt(e, t, o))
      : (ae && n && qu(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function Vc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Sa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), bh(e, t, i, r, o))
      : ((e = mi(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : eo), n(l, r) && e.ref === t.ref)) return zt(e, t, o);
  }
  return (t.flags |= 1), (e = en(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function bh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (eo(i, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), zt(e, t, o);
  }
  return nu(e, t, n, r, o);
}
function Kh(e, t, n) {
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
        ie(Vn, Be),
        (Be |= n);
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
          ie(Vn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        ie(Vn, Be),
        (Be |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ie(Vn, Be), (Be |= r);
  return ze(e, t, o, n), t.child;
}
function Gh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function nu(e, t, n, r, o) {
  var i = He(n) ? wn : Ie.current;
  return (
    (i = qn(t, i)),
    bn(t, o),
    (n = ca(e, t, n, r, i, o)),
    (r = fa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zt(e, t, o))
      : (ae && r && qu(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function Bc(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    zi(t);
  } else i = !1;
  if ((bn(t, o), t.stateNode === null)) hi(e, t), Wh(t, n, r), eu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null ? (a = Je(a)) : ((a = He(n) ? wn : Ie.current), (a = qn(t, a)));
    var d = n.getDerivedStateFromProps,
      f = typeof d == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && Dc(t, l, r, a)),
      (Vt = !1);
    var c = t.memoizedState;
    (l.state = c),
      Ai(t, r, l, o),
      (u = t.memoizedState),
      s !== r || c !== u || Fe.current || Vt
        ? (typeof d == 'function' && (Js(t, n, d, r), (u = t.memoizedState)),
          (s = Vt || $c(t, n, s, r, c, u, a))
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
      _h(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : rt(t.type, s)),
      (l.props = a),
      (f = t.pendingProps),
      (c = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null ? (u = Je(u)) : ((u = He(n) ? wn : Ie.current), (u = qn(t, u)));
    var h = n.getDerivedStateFromProps;
    (d = typeof h == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((s !== f || c !== u) && Dc(t, l, r, u)),
      (Vt = !1),
      (c = t.memoizedState),
      (l.state = c),
      Ai(t, r, l, o);
    var m = t.memoizedState;
    s !== f || c !== m || Fe.current || Vt
      ? (typeof h == 'function' && (Js(t, n, h, r), (m = t.memoizedState)),
        (a = Vt || $c(t, n, a, r, c, m, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, m, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, m, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
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
  return ru(e, t, n, r, i, o);
}
function ru(e, t, n, r, o, i) {
  Gh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Nc(t, n, !1), zt(e, t, i);
  (r = t.stateNode), (dv.current = t);
  var s = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = er(t, e.child, null, i)), (t.child = er(t, null, s, i))) : ze(e, t, s, i),
    (t.memoizedState = r.state),
    o && Nc(t, n, !0),
    t.child
  );
}
function Qh(e) {
  var t = e.stateNode;
  t.pendingContext ? Cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cc(e, t.context, !1),
    la(e, t.containerInfo);
}
function jc(e, t, n, r, o) {
  return Jn(), ea(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var ou = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function iu(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Zh(e, t, n) {
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
      Zs(t),
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
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = hl(l, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = iu(n)),
              (t.memoizedState = ou),
              e)
            : pa(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return hv(e, t, l, r, s, o, n);
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
      s !== null ? (i = en(s, i)) : ((i = mn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? iu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ou),
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
function pa(e, t) {
  return (
    (t = hl(
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
function Xo(e, t, n, r) {
  return (
    r !== null && ea(r),
    er(t, e.child, null, n),
    (e = pa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = us(Error(V(422)))), Xo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = hl(
            {
              mode: 'visible',
              children: r.children,
            },
            o,
            0,
            null,
          )),
          (i = mn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && er(t, e.child, null, l),
          (t.child.memoizedState = iu(l)),
          (t.memoizedState = ou),
          i);
  if (!(t.mode & 1)) return Xo(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(V(419))), (r = us(i, r, void 0)), Xo(e, t, l, r);
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
    return xa(), (r = us(Error(V(421)))), Xo(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = Nv.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ue = Qt(o.nextSibling)),
      (We = t),
      (ae = !0),
      (lt = null),
      e !== null && ((Ge[Qe++] = _t), (Ge[Qe++] = kt), (Ge[Qe++] = xn), (_t = e.id), (kt = e.overflow), (xn = t)),
      (t = pa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qs(e.return, t, n);
}
function as(e, t, n, r, o) {
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
function qh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = fe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uc(e, n, t);
        else if (e.tag === 19) Uc(e, n, t);
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
          (e = n.alternate), e !== null && Oi(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          as(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Oi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        as(t, !0, n, null, i);
        break;
      case 'together':
        as(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (En |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pv(e, t, n) {
  switch (t.tag) {
    case 3:
      Qh(t), Jn();
      break;
    case 5:
      kh(t);
      break;
    case 1:
      He(t.type) && zi(t);
      break;
    case 4:
      la(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie($i, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Zh(e, t, n)
            : (ie(fe, fe.current & 1), (e = zt(e, t, n)), e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return qh(e, t, n);
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
      return (t.lanes = 0), Kh(e, t, n);
  }
  return zt(e, t, n);
}
var Jh, lu, ep, tp;
Jh = function (e, t) {
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
lu = function () {};
ep = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), hn(yt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Ps(e, o)), (r = Ps(e, r)), (i = []);
        break;
      case 'select':
        (o = he({}, o, {
          value: void 0,
        })),
          (r = he({}, r, {
            value: void 0,
          })),
          (i = []);
        break;
      case 'textarea':
        (o = zs(e, o)), (r = zs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ti);
    }
    Ls(n, r);
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
            (br.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
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
                (br.hasOwnProperty(a)
                  ? (u != null && a === 'onScroll' && se('scroll', e), i || s === u || (i = []))
                  : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
tp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
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
function gv(e, t, n) {
  var r = t.pendingProps;
  switch ((Ju(t), t.tag)) {
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
      return He(t.type) && Ii(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tr(),
        ue(Fe),
        ue(Ie),
        ua(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (pu(lt), (lt = null)))),
        lu(e, t),
        Pe(t),
        null
      );
    case 5:
      sa(t);
      var o = hn(io.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ep(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Pe(t), null;
        }
        if (((e = hn(yt.current)), Wo(t))) {
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
              qa(r, i), se('invalid', r);
              break;
            case 'select':
              (r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                se('invalid', r);
              break;
            case 'textarea':
              ec(r, i), se('invalid', r);
          }
          Ls(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Uo(r.textContent, s, e), (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 && Uo(r.textContent, s, e), (o = ['children', '' + s]))
                : br.hasOwnProperty(l) && s != null && l === 'onScroll' && se('scroll', r);
            }
          switch (n) {
            case 'input':
              Do(r), Ja(r, i, !0);
              break;
            case 'textarea':
              Do(r), tc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ti);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Td(n)),
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
            Jh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = $s(n, r)), n)) {
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
                qa(e, r), (o = Ps(e, r)), se('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (o = he({}, r, {
                    value: void 0,
                  })),
                  se('invalid', e);
                break;
              case 'textarea':
                ec(e, r), (o = zs(e, r)), se('invalid', e);
                break;
              default:
                o = r;
            }
            Ls(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? Rd(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Id(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Kr(e, u)
                        : typeof u == 'number' && Kr(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (br.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && se('scroll', e)
                          : u != null && Fu(e, i, u, l));
              }
            switch (n) {
              case 'input':
                Do(e), Ja(e, r, !1);
                break;
              case 'textarea':
                Do(e), tc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + nn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Ti);
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
      if (e && t.stateNode != null) tp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(V(166));
        if (((n = hn(io.current)), hn(yt.current), Wo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[gt] = t), (i = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Uo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Uo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[gt] = t), (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (ue(fe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ue !== null && t.mode & 1 && !(t.flags & 128)) wh(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Wo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(V(317));
            i[gt] = t;
          } else Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else lt !== null && (pu(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || fe.current & 1 ? xe === 0 && (xe = 3) : xa())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return tr(), lu(e, t), e === null && to(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return ra(t.type._context), Pe(t), null;
    case 17:
      return He(t.type) && Ii(), Pe(t), null;
    case 19:
      if ((ue(fe), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Cr(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Oi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Cr(i, !1),
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
          i.tail !== null && me() > rr && ((t.flags |= 128), (r = !0), Cr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Oi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !ae)
            )
              return Pe(t), null;
          } else
            2 * me() - i.renderingStartTime > rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cr(i, !1), (t.lanes = 4194304));
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
        wa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Be & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function mv(e, t) {
  switch ((Ju(t), t.tag)) {
    case 1:
      return He(t.type) && Ii(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        tr(), ue(Fe), ue(Ie), ua(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sa(t), null;
    case 13:
      if ((ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(V(340));
        Jn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ue(fe), null;
    case 4:
      return tr(), null;
    case 10:
      return ra(t.type._context), null;
    case 22:
    case 23:
      return wa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bo = !1,
  Te = !1,
  yv = typeof WeakSet == 'function' ? WeakSet : Set,
  W = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function su(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Wc = !1;
function vv(e, t) {
  if (((Ws = Ni), (e = lh()), Zu(e))) {
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
              var h;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (c = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if ((c === n && ++a === o && (s = l), c === i && ++d === r && (u = l), (h = f.nextSibling) !== null))
                break;
              (f = c), (c = f.parentNode);
            }
            f = h;
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
    Ys = {
      focusedElem: e,
      selectionRange: n,
    },
      Ni = !1,
      W = t;
    W !== null;

  )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var w = m.memoizedProps,
                    S = m.memoizedState,
                    g = t.stateNode,
                    y = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : rt(t.type, w), S);
                  g.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (v) {
          pe(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (m = Wc), (Wc = !1), m;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && su(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function fl(e, t) {
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
function uu(e) {
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
function np(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), np(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[gt], delete t[ro], delete t[Ks], delete t[ev], delete t[tv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling);
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
var ke = null,
  ot = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) op(e, t, n), (n = n.sibling);
}
function op(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(rl, n);
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
          ? ((e = ke), (n = n.stateNode), e.nodeType === 8 ? ns(e.parentNode, n) : e.nodeType === 1 && ns(e, n), qr(e))
          : ns(ke, n.stateNode));
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
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && su(n, t, l), (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (!Te && (Hn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          pe(n, t, s);
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
function Xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yv()),
      t.forEach(function (r) {
        var o = Mv.bind(null, e, r);
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
        if (ke === null) throw Error(V(160));
        op(i, l, o), (ke = null), (ot = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        pe(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ip(t, e), (t = t.sibling);
}
function ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), ht(e), r & 4)) {
        try {
          jr(3, e, e.return), fl(3, e);
        } catch (w) {
          pe(e, e.return, w);
        }
        try {
          jr(5, e, e.return);
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      break;
    case 1:
      nt(t, e), ht(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if ((nt(t, e), ht(e), r & 512 && n !== null && Hn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Kr(o, '');
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Md(o, i), $s(s, l);
            var a = $s(s, i);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                f = u[l + 1];
              d === 'style'
                ? Rd(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? Id(o, f)
                  : d === 'children'
                    ? Kr(o, f)
                    : Fu(o, d, f, a);
            }
            switch (s) {
              case 'input':
                Ts(o, i);
                break;
              case 'textarea':
                Pd(o, i);
                break;
              case 'select':
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Un(o, !!i.multiple, h, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Un(o, !!i.multiple, i.defaultValue, !0)
                      : Un(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[ro] = i;
          } catch (w) {
            pe(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((nt(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((nt(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          qr(t.containerInfo);
        } catch (w) {
          pe(e, e.return, w);
        }
      break;
    case 4:
      nt(t, e), ht(e);
      break;
    case 13:
      nt(t, e),
        ht(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (ya = me())),
        r & 4 && Xc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (a = Te) || d), nt(t, e), (Te = a)) : nt(t, e),
        ht(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !d && e.mode & 1))
          for (W = e, d = e.child; d !== null; ) {
            for (f = W = d; W !== null; ) {
              switch (((c = W), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, c, c.return);
                  break;
                case 1:
                  Hn(c, c.return);
                  var m = c.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = c), (n = c.return);
                    try {
                      (t = r), (m.props = t.memoizedProps), (m.state = t.memoizedState), m.componentWillUnmount();
                    } catch (w) {
                      pe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Hn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Kc(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), (W = h)) : Kc(f);
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
                      (s.style.display = zd('display', l)));
              } catch (w) {
                pe(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (w) {
                pe(e, e.return, w);
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
      nt(t, e), ht(e), r & 4 && Xc(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Kr(o, ''), (r.flags &= -33));
          var i = Yc(e);
          cu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Yc(e);
          au(e, s, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (u) {
      pe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wv(e, t, n) {
  (W = e), lp(e);
}
function lp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || bo;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Te;
        s = bo;
        var a = Te;
        if (((bo = l), (Te = u) && !a))
          for (W = o; W !== null; )
            (l = W),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null ? Gc(o) : u !== null ? ((u.return = l), (W = u)) : Gc(o);
        for (; i !== null; ) (W = i), lp(i), (i = i.sibling);
        (W = o), (bo = s), (Te = a);
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
              Te || fl(5, t);
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
              i !== null && zc(t, i, r);
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
                zc(t, l, n);
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
              throw Error(V(163));
          }
        Te || (t.flags & 512 && uu(t));
      } catch (c) {
        pe(t, t.return, c);
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
function Kc(e) {
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
function Gc(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (u) {
            pe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              pe(t, o, u);
            }
          }
          var i = t.return;
          try {
            uu(t);
          } catch (u) {
            pe(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            uu(t);
          } catch (u) {
            pe(t, l, u);
          }
      }
    } catch (u) {
      pe(t, t.return, u);
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
var xv = Math.ceil,
  Vi = Lt.ReactCurrentDispatcher,
  ga = Lt.ReactCurrentOwner,
  qe = Lt.ReactCurrentBatchConfig,
  te = 0,
  Ee = null,
  ye = null,
  Ce = 0,
  Be = 0,
  Vn = ln(0),
  xe = 0,
  ao = null,
  En = 0,
  dl = 0,
  ma = 0,
  Ur = null,
  De = null,
  ya = 0,
  rr = 1 / 0,
  St = null,
  Bi = !1,
  fu = null,
  qt = null,
  Ko = !1,
  Xt = null,
  ji = 0,
  Wr = 0,
  du = null,
  pi = -1,
  gi = 0;
function Re() {
  return te & 6 ? me() : pi !== -1 ? pi : (pi = me());
}
function Jt(e) {
  return e.mode & 1
    ? te & 2 && Ce !== 0
      ? Ce & -Ce
      : rv.transition !== null
        ? (gi === 0 && (gi = Wd()), gi)
        : ((e = oe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zd(e.type))), e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (du = null), Error(V(185)));
  Eo(e, n, r),
    (!(te & 2) || e !== Ee) &&
      (e === Ee && (!(te & 2) && (dl |= n), xe === 4 && Ut(e, Ce)),
      Ve(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((rr = me() + 500), ul && sn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  ry(e, t);
  var r = Ci(e, e === Ee ? Ce : 0);
  if (r === 0) n !== null && oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && oc(n), t === 1))
      e.tag === 0 ? nv(Qc.bind(null, e)) : mh(Qc.bind(null, e)),
        qy(function () {
          !(te & 6) && sn();
        }),
        (n = null);
    else {
      switch (Yd(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = jd;
          break;
        case 16:
          n = ki;
          break;
        case 536870912:
          n = Ud;
          break;
        default:
          n = ki;
      }
      n = pp(n, sp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function sp(e, t) {
  if (((pi = -1), (gi = 0), te & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Ci(e, e === Ee ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = ap();
    (Ee !== e || Ce !== t) && ((St = null), (rr = me() + 500), gn(e, t));
    do
      try {
        _v();
        break;
      } catch (s) {
        up(e, s);
      }
    while (1);
    na(), (Vi.current = i), (te = o), ye !== null ? (t = 0) : ((Ee = null), (Ce = 0), (t = xe));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Hs(e)), o !== 0 && ((r = o), (t = hu(e, o)))), t === 1))
      throw ((n = ao), gn(e, 0), Ut(e, r), Ve(e, me()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Sv(o) &&
          ((t = Ui(e, r)), t === 2 && ((i = Hs(e)), i !== 0 && ((r = i), (t = hu(e, i)))), t === 1))
      )
        throw ((n = ao), gn(e, 0), Ut(e, r), Ve(e, me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          an(e, De, St);
          break;
        case 3:
          if ((Ut(e, r), (r & 130023424) === r && ((t = ya + 500 - me()), 10 < t))) {
            if (Ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = bs(an.bind(null, e, De, St), t);
            break;
          }
          an(e, De, St);
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
                          : 1960 * xv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bs(an.bind(null, e, De, St), r);
            break;
          }
          an(e, De, St);
          break;
        case 5:
          an(e, De, St);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return Ve(e, me()), e.callbackNode === n ? sp.bind(null, e) : null;
}
function hu(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = Ui(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && pu(t)),
    e
  );
}
function pu(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function Sv(e) {
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
  for (t &= ~ma, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qc(e) {
  if (te & 6) throw Error(V(327));
  Kn();
  var t = Ci(e, 0);
  if (!(t & 1)) return Ve(e, me()), null;
  var n = Ui(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && ((t = r), (n = hu(e, r)));
  }
  if (n === 1) throw ((n = ao), gn(e, 0), Ut(e, t), Ve(e, me()), n);
  if (n === 6) throw Error(V(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), an(e, De, St), Ve(e, me()), null;
}
function va(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((rr = me() + 500), ul && sn());
  }
}
function _n(e) {
  Xt !== null && Xt.tag === 0 && !(te & 6) && Kn();
  var t = te;
  te |= 1;
  var n = qe.transition,
    r = oe;
  try {
    if (((qe.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (qe.transition = n), (te = t), !(te & 6) && sn();
  }
}
function wa() {
  (Be = Vn.current), ue(Vn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zy(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Ju(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ii();
          break;
        case 3:
          tr(), ue(Fe), ue(Ie), ua();
          break;
        case 5:
          sa(r);
          break;
        case 4:
          tr();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          ra(r.type._context);
          break;
        case 22:
        case 23:
          wa();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ye = e = en(e.current, null)),
    (Ce = Be = t),
    (xe = 0),
    (ao = null),
    (ma = dl = En = 0),
    (De = Ur = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function up(e, t) {
  do {
    var n = ye;
    try {
      if ((na(), (fi.current = Hi), Fi)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Fi = !1;
      }
      if (
        ((Sn = 0), (Se = we = de = null), (Br = !1), (lo = 0), (ga.current = null), n === null || n.return === null)
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
          var h = Oc(l);
          if (h !== null) {
            (h.flags &= -257), Fc(h, l, s, i, t), h.mode & 1 && Ac(i, a, t), (t = h), (u = a);
            var m = t.updateQueue;
            if (m === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ac(i, a, t), xa();
              break e;
            }
            u = Error(V(426));
          }
        } else if (ae && s.mode & 1) {
          var S = Oc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Fc(S, l, s, i, t), ea(nr(u, s));
            break e;
          }
        }
        (i = u = nr(u, s)), xe !== 4 && (xe = 2), Ur === null ? (Ur = [i]) : Ur.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Yh(i, u, t);
              Ic(i, g);
              break e;
            case 1:
              s = u;
              var y = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == 'function' ||
                  (p !== null && typeof p.componentDidCatch == 'function' && (qt === null || !qt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Xh(i, s, t);
                Ic(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      fp(n);
    } catch (k) {
      (t = k), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ap() {
  var e = Vi.current;
  return (Vi.current = Hi), e === null ? Hi : e;
}
function xa() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ee === null || (!(En & 268435455) && !(dl & 268435455)) || Ut(Ee, Ce);
}
function Ui(e, t) {
  var n = te;
  te |= 2;
  var r = ap();
  (Ee !== e || Ce !== t) && ((St = null), gn(e, t));
  do
    try {
      Ev();
      break;
    } catch (o) {
      up(e, o);
    }
  while (1);
  if ((na(), (te = n), (Vi.current = r), ye !== null)) throw Error(V(261));
  return (Ee = null), (Ce = 0), xe;
}
function Ev() {
  for (; ye !== null; ) cp(ye);
}
function _v() {
  for (; ye !== null && !Km(); ) cp(ye);
}
function cp(e) {
  var t = hp(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps), t === null ? fp(e) : (ye = t), (ga.current = null);
}
function fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mv(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = gv(n, t, Be)), n !== null)) {
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
function an(e, t, n) {
  var r = oe,
    o = qe.transition;
  try {
    (qe.transition = null), (oe = 1), kv(e, t, n, r);
  } finally {
    (qe.transition = o), (oe = r);
  }
  return null;
}
function kv(e, t, n, r) {
  do Kn();
  while (Xt !== null);
  if (te & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (oy(e, i),
    e === Ee && ((ye = Ee = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ko ||
      ((Ko = !0),
      pp(ki, function () {
        return Kn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var l = oe;
    oe = 1;
    var s = te;
    (te |= 4),
      (ga.current = null),
      vv(e, n),
      ip(n, e),
      Wy(Ys),
      (Ni = !!Ws),
      (Ys = Ws = null),
      (e.current = n),
      wv(n),
      Gm(),
      (te = s),
      (oe = l),
      (qe.transition = i);
  } else e.current = n;
  if (
    (Ko && ((Ko = !1), (Xt = e), (ji = o)),
    (i = e.pendingLanes),
    i === 0 && (qt = null),
    qm(n.stateNode),
    Ve(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]),
        r(o.value, {
          componentStack: o.stack,
          digest: o.digest,
        });
  if (Bi) throw ((Bi = !1), (e = fu), (fu = null), e);
  return (
    ji & 1 && e.tag !== 0 && Kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === du ? Wr++ : ((Wr = 0), (du = e))) : (Wr = 0),
    sn(),
    null
  );
}
function Kn() {
  if (Xt !== null) {
    var e = Yd(ji),
      t = qe.transition,
      n = oe;
    try {
      if (((qe.transition = null), (oe = 16 > e ? 16 : e), Xt === null)) var r = !1;
      else {
        if (((e = Xt), (Xt = null), (ji = 0), te & 6)) throw Error(V(331));
        var o = te;
        for (te |= 4, W = e.current; W !== null; ) {
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
                      jr(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (W = f);
                  else
                    for (; W !== null; ) {
                      d = W;
                      var c = d.sibling,
                        h = d.return;
                      if ((np(d), d === a)) {
                        W = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), (W = c);
                        break;
                      }
                      W = h;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var w = m.child;
                if (w !== null) {
                  m.child = null;
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
                    jr(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (W = g);
                break e;
              }
              W = i.return;
            }
        }
        var y = e.current;
        for (W = y; W !== null; ) {
          l = W;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (W = p);
          else
            e: for (l = y; W !== null; ) {
              if (((s = W), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, s);
                  }
                } catch (k) {
                  pe(s, s.return, k);
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
        if (((te = o), sn(), mt && typeof mt.onPostCommitFiberRoot == 'function'))
          try {
            mt.onPostCommitFiberRoot(rl, e);
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
function Zc(e, t, n) {
  (t = nr(n, t)), (t = Yh(e, t, 1)), (e = Zt(e, t, 1)), (t = Re()), e !== null && (Eo(e, 1, t), Ve(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Zc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (qt === null || !qt.has(r)))
        ) {
          (e = nr(n, e)), (e = Xh(t, e, 1)), (t = Zt(t, e, 1)), (e = Re()), t !== null && (Eo(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Cv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Ce & n) === n &&
      (xe === 4 || (xe === 3 && (Ce & 130023424) === Ce && 500 > me() - ya) ? gn(e, 0) : (ma |= n)),
    Ve(e, t);
}
function dp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Fo), (Fo <<= 1), !(Fo & 130023424) && (Fo = 4194304)) : (t = 1));
  var n = Re();
  (e = It(e, t)), e !== null && (Eo(e, t, n), Ve(e, n));
}
function Nv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), dp(e, n);
}
function Mv(e, t) {
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
      throw Error(V(314));
  }
  r !== null && r.delete(t), dp(e, n);
}
var hp;
hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), pv(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), ae && t.flags & 1048576 && yh(t, Li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hi(e, t), (e = t.pendingProps);
      var o = qn(t, Ie.current);
      bn(t, n), (o = ca(null, t, r, e, o, n));
      var i = fa();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), zi(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            ia(t),
            (o.updater = cl),
            (t.stateNode = o),
            (o._reactInternals = t),
            eu(t, r, e, n),
            (t = ru(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && qu(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Tv(r)),
          (e = rt(r, e)),
          o)
        ) {
          case 0:
            t = nu(null, t, r, e, n);
            break e;
          case 1:
            t = Bc(null, t, r, e, n);
            break e;
          case 11:
            t = Hc(null, t, r, e, n);
            break e;
          case 14:
            t = Vc(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : rt(r, o)), nu(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : rt(r, o)), Bc(e, t, r, o, n);
    case 3:
      e: {
        if ((Qh(t), e === null)) throw Error(V(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), _h(e, t), Ai(t, r, null, n);
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
            (o = nr(Error(V(423)), t)), (t = jc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = nr(Error(V(424)), t)), (t = jc(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Qt(t.stateNode.containerInfo.firstChild),
                We = t,
                ae = !0,
                lt = null,
                n = Sh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === o)) {
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
        kh(t),
        e === null && Zs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Xs(r, o) ? (l = null) : i !== null && Xs(r, i) && (t.flags |= 32),
        Gh(e, t),
        ze(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Zs(t), null;
    case 13:
      return Zh(e, t, n);
    case 4:
      return (
        la(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = er(t, null, r, n)) : ze(e, t, r, n),
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
          ie($i, r._currentValue),
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
                    (i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), qs(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(V(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), qs(l, n, t), (l = i.sibling);
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
      return (r = t.type), (o = rt(r, t.pendingProps)), (o = rt(r.type, o)), Vc(e, t, r, o, n);
    case 15:
      return bh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        hi(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), zi(t)) : (e = !1),
        bn(t, n),
        Wh(t, r, o),
        eu(t, r, o, n),
        ru(null, t, r, !0, e, n)
      );
    case 19:
      return qh(e, t, n);
    case 22:
      return Kh(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function pp(e, t) {
  return Bd(e, t);
}
function Pv(e, t, n, r) {
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
  return new Pv(e, t, n, r);
}
function Sa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Tv(e) {
  if (typeof e == 'function') return Sa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vu)) return 11;
    if (e === Bu) return 14;
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
function mi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Sa(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case In:
        return mn(n.children, o, i, t);
      case Hu:
        (l = 8), (o |= 8);
        break;
      case ks:
        return (e = Ze(12, n, t, o | 2)), (e.elementType = ks), (e.lanes = i), e;
      case Cs:
        return (e = Ze(13, n, t, o)), (e.elementType = Cs), (e.lanes = i), e;
      case Ns:
        return (e = Ze(19, n, t, o)), (e.elementType = Ns), (e.lanes = i), e;
      case kd:
        return hl(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ed:
              l = 10;
              break e;
            case _d:
              l = 9;
              break e;
            case Vu:
              l = 11;
              break e;
            case Bu:
              l = 14;
              break e;
            case Ht:
              (l = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ''));
    }
  return (t = Ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function mn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = kd),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function cs(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function fs(e, t, n) {
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
function Iv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ea(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new Iv(e, t, n, s, u)),
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
    ia(i),
    e
  );
}
function zv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gp(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return gh(e, n, t);
  }
  return t;
}
function mp(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Ea(n, r, !0, e, o, i, l, s, u)),
    (e.context = gp(null)),
    (n = e.current),
    (r = Re()),
    (o = Jt(n)),
    (i = Nt(r, o)),
    (i.callback = t ?? null),
    Zt(n, i, o),
    (e.current.lanes = o),
    Eo(e, o, r),
    Ve(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var o = t.current,
    i = Re(),
    l = Jt(o);
  return (
    (n = gp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, l)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(o, t, l)),
    e !== null && (ct(e, o, l, i), ci(e, o, l)),
    l
  );
}
function Wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _a(e, t) {
  qc(e, t), (e = e.alternate) && qc(e, t);
}
function Rv() {
  return null;
}
var yp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ka(e) {
  this._internalRoot = e;
}
gl.prototype.render = ka.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  pl(e, t, null, null);
};
gl.prototype.unmount = ka.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      pl(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kd();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && Qd(e);
  }
};
function Ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Jc() {}
function Lv(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Wi(l);
        i.call(a);
      };
    }
    var l = mp(t, r, e, 0, null, !1, !1, '', Jc);
    return (e._reactRootContainer = l), (e[Tt] = l.current), to(e.nodeType === 8 ? e.parentNode : e), _n(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Wi(u);
      s.call(a);
    };
  }
  var u = Ea(e, 0, !1, null, null, !1, !1, '', Jc);
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      pl(t, u, n, r);
    }),
    u
  );
}
function yl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Wi(l);
        s.call(u);
      };
    }
    pl(t, l, e, o);
  } else l = Lv(n, t, e, o, r);
  return Wi(l);
}
Xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Wu(t, n | 1), Ve(t, me()), !(te & 6) && ((rr = me() + 500), sn()));
      }
      break;
    case 13:
      _n(function () {
        var r = It(e, 1);
        if (r !== null) {
          var o = Re();
          ct(r, e, 1, o);
        }
      }),
        _a(e, 1);
  }
};
Yu = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      ct(t, e, 134217728, n);
    }
    _a(e, 134217728);
  }
};
bd = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = It(e, t);
    if (n !== null) {
      var r = Re();
      ct(n, e, t, r);
    }
    _a(e, t);
  }
};
Kd = function () {
  return oe;
};
Gd = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
As = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ts(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sl(r);
            if (!o) throw Error(V(90));
            Nd(r), Ts(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Pd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
Dd = va;
Ad = _n;
var $v = {
    usingClientEntryPoint: !1,
    Events: [ko, $n, sl, Ld, $d, va],
  },
  Nr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Dv = {
    bundleType: Nr.bundleType,
    version: Nr.version,
    rendererPackageName: Nr.rendererPackageName,
    rendererConfig: Nr.rendererConfig,
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
      return (e = Hd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nr.findFiberByHostInstance || Rv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Go.isDisabled && Go.supportsFiber)
    try {
      (rl = Go.inject(Dv)), (mt = Go);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $v;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ca(t)) throw Error(V(200));
  return zv(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Ca(e)) throw Error(V(299));
  var n = !1,
    r = '',
    o = yp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ea(e, 1, !1, null, null, n, !1, r, o)),
    (e[Tt] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new ka(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(V(188)) : ((e = Object.keys(e).join(',')), Error(V(268, e)));
  return (e = Hd(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return _n(e);
};
be.hydrate = function (e, t, n) {
  if (!ml(t)) throw Error(V(200));
  return yl(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Ca(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = yp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = mp(t, null, e, 1, n ?? null, o, !1, i, l)),
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
  return new gl(t);
};
be.render = function (e, t, n) {
  if (!ml(t)) throw Error(V(200));
  return yl(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (_n(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = va;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ml(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return yl(e, t, n, !1, r);
};
be.version = '18.3.1-next-f1338f8080-20240426';
function vp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vp);
    } catch (e) {
      console.error(e);
    }
}
vp(), (vd.exports = be);
var Av = vd.exports,
  ef = Av;
(Es.createRoot = ef.createRoot), (Es.hydrateRoot = ef.hydrateRoot);
function ve(e) {
  if (typeof e == 'string' || typeof e == 'number') return '' + e;
  let t = '';
  if (Array.isArray(e)) for (let n = 0, r; n < e.length; n++) (r = ve(e[n])) !== '' && (t += (t && ' ') + r);
  else for (let n in e) e[n] && (t += (t && ' ') + n);
  return t;
}
var Ov = {
  value: () => {},
};
function vl() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r)) throw new Error('illegal type: ' + r);
    n[r] = [];
  }
  return new yi(n);
}
function yi(e) {
  this._ = e;
}
function Fv(e, t) {
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
yi.prototype = vl.prototype = {
  constructor: yi,
  on: function (e, t) {
    var n = this._,
      r = Fv(e + '', n),
      o,
      i = -1,
      l = r.length;
    if (arguments.length < 2) {
      for (; ++i < l; ) if ((o = (e = r[i]).type) && (o = Hv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t);
    for (; ++i < l; )
      if ((o = (e = r[i]).type)) n[o] = tf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = tf(n[o], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new yi(e);
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
function Hv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n) if ((o = e[n]).name === t) return o.value;
}
function tf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      (e[r] = Ov), (e = e.slice(0, r).concat(e.slice(r + 1)));
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
var gu = 'http://www.w3.org/1999/xhtml';
const nf = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: gu,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function wl(e) {
  var t = (e += ''),
    n = t.indexOf(':');
  return (
    n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
    nf.hasOwnProperty(t)
      ? {
          space: nf[t],
          local: e,
        }
      : e
  );
}
function Vv(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === gu && t.documentElement.namespaceURI === gu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Bv(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function wp(e) {
  var t = wl(e);
  return (t.local ? Bv : Vv)(t);
}
function jv() {}
function Na(e) {
  return e == null
    ? jv
    : function () {
        return this.querySelector(e);
      };
}
function Uv(e) {
  typeof e != 'function' && (e = Na(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = new Array(l)), u, a, d = 0; d < l; ++d)
      (u = i[d]) && (a = e.call(u, u.__data__, d, i)) && ('__data__' in u && (a.__data__ = u.__data__), (s[d] = a));
  return new Xe(r, this._parents);
}
function Wv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Yv() {
  return [];
}
function xp(e) {
  return e == null
    ? Yv
    : function () {
        return this.querySelectorAll(e);
      };
}
function Xv(e) {
  return function () {
    return Wv(e.apply(this, arguments));
  };
}
function bv(e) {
  typeof e == 'function' ? (e = Xv(e)) : (e = xp(e));
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var l = t[i], s = l.length, u, a = 0; a < s; ++a)
      (u = l[a]) && (r.push(e.call(u, u.__data__, a, l)), o.push(u));
  return new Xe(r, o);
}
function Sp(e) {
  return function () {
    return this.matches(e);
  };
}
function Ep(e) {
  return function (t) {
    return t.matches(e);
  };
}
var Kv = Array.prototype.find;
function Gv(e) {
  return function () {
    return Kv.call(this.children, e);
  };
}
function Qv() {
  return this.firstElementChild;
}
function Zv(e) {
  return this.select(e == null ? Qv : Gv(typeof e == 'function' ? e : Ep(e)));
}
var qv = Array.prototype.filter;
function Jv() {
  return Array.from(this.children);
}
function e1(e) {
  return function () {
    return qv.call(this.children, e);
  };
}
function t1(e) {
  return this.selectAll(e == null ? Jv : e1(typeof e == 'function' ? e : Ep(e)));
}
function n1(e) {
  typeof e != 'function' && (e = Sp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = []), u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new Xe(r, this._parents);
}
function _p(e) {
  return new Array(e.length);
}
function r1() {
  return new Xe(this._enter || this._groups.map(_p), this._parents);
}
function Yi(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
Yi.prototype = {
  constructor: Yi,
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
function o1(e) {
  return function () {
    return e;
  };
}
function i1(e, t, n, r, o, i) {
  for (var l = 0, s, u = t.length, a = i.length; l < a; ++l)
    (s = t[l]) ? ((s.__data__ = i[l]), (r[l] = s)) : (n[l] = new Yi(e, i[l]));
  for (; l < u; ++l) (s = t[l]) && (o[l] = s);
}
function l1(e, t, n, r, o, i, l) {
  var s,
    u,
    a = new Map(),
    d = t.length,
    f = i.length,
    c = new Array(d),
    h;
  for (s = 0; s < d; ++s)
    (u = t[s]) && ((c[s] = h = l.call(u, u.__data__, s, t) + ''), a.has(h) ? (o[s] = u) : a.set(h, u));
  for (s = 0; s < f; ++s)
    (h = l.call(e, i[s], s, i) + ''),
      (u = a.get(h)) ? ((r[s] = u), (u.__data__ = i[s]), a.delete(h)) : (n[s] = new Yi(e, i[s]));
  for (s = 0; s < d; ++s) (u = t[s]) && a.get(c[s]) === u && (o[s] = u);
}
function s1(e) {
  return e.__data__;
}
function u1(e, t) {
  if (!arguments.length) return Array.from(this, s1);
  var n = t ? l1 : i1,
    r = this._parents,
    o = this._groups;
  typeof e != 'function' && (e = o1(e));
  for (var i = o.length, l = new Array(i), s = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var d = r[a],
      f = o[a],
      c = f.length,
      h = a1(e.call(d, d && d.__data__, a, r)),
      m = h.length,
      w = (s[a] = new Array(m)),
      S = (l[a] = new Array(m)),
      g = (u[a] = new Array(c));
    n(d, f, w, S, g, h, t);
    for (var y = 0, p = 0, v, k; y < m; ++y)
      if ((v = w[y])) {
        for (y >= p && (p = y + 1); !(k = S[p]) && ++p < m; );
        v._next = k || null;
      }
  }
  return (l = new Xe(l, r)), (l._enter = s), (l._exit = u), l;
}
function a1(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function c1() {
  return new Xe(this._exit || this._groups.map(_p), this._parents);
}
function f1(e, t, n) {
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
function d1(e) {
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
    for (var a = n[u], d = r[u], f = a.length, c = (s[u] = new Array(f)), h, m = 0; m < f; ++m)
      (h = a[m] || d[m]) && (c[m] = h);
  for (; u < o; ++u) s[u] = n[u];
  return new Xe(s, this._parents);
}
function h1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], l; --o >= 0; )
      (l = r[o]) && (i && l.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(l, i), (i = l));
  return this;
}
function p1(e) {
  e || (e = g1);
  function t(f, c) {
    return f && c ? e(f.__data__, c.__data__) : !f - !c;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var l = n[i], s = l.length, u = (o[i] = new Array(s)), a, d = 0; d < s; ++d) (a = l[d]) && (u[d] = a);
    u.sort(t);
  }
  return new Xe(o, this._parents).order();
}
function g1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function m1() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function y1() {
  return Array.from(this);
}
function v1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var l = r[o];
      if (l) return l;
    }
  return null;
}
function w1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function x1() {
  return !this.node();
}
function S1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, l = o.length, s; i < l; ++i) (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function E1(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function _1(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function k1(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function C1(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function N1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function M1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function P1(e, t) {
  var n = wl(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null ? (n.local ? _1 : E1) : typeof t == 'function' ? (n.local ? M1 : N1) : n.local ? C1 : k1)(n, t),
  );
}
function kp(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function T1(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function I1(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function z1(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function R1(e, t, n) {
  return arguments.length > 1
    ? this.each((t == null ? T1 : typeof t == 'function' ? z1 : I1)(e, t, n ?? ''))
    : or(this.node(), e);
}
function or(e, t) {
  return e.style.getPropertyValue(t) || kp(e).getComputedStyle(e, null).getPropertyValue(t);
}
function L1(e) {
  return function () {
    delete this[e];
  };
}
function $1(e, t) {
  return function () {
    this[e] = t;
  };
}
function D1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function A1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? L1 : typeof t == 'function' ? D1 : $1)(e, t)) : this.node()[e];
}
function Cp(e) {
  return e.trim().split(/^|\s+/);
}
function Ma(e) {
  return e.classList || new Np(e);
}
function Np(e) {
  (this._node = e), (this._names = Cp(e.getAttribute('class') || ''));
}
Np.prototype = {
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
function Mp(e, t) {
  for (var n = Ma(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Pp(e, t) {
  for (var n = Ma(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function O1(e) {
  return function () {
    Mp(this, e);
  };
}
function F1(e) {
  return function () {
    Pp(this, e);
  };
}
function H1(e, t) {
  return function () {
    (t.apply(this, arguments) ? Mp : Pp)(this, e);
  };
}
function V1(e, t) {
  var n = Cp(e + '');
  if (arguments.length < 2) {
    for (var r = Ma(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == 'function' ? H1 : t ? O1 : F1)(n, t));
}
function B1() {
  this.textContent = '';
}
function j1(e) {
  return function () {
    this.textContent = e;
  };
}
function U1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? '';
  };
}
function W1(e) {
  return arguments.length ? this.each(e == null ? B1 : (typeof e == 'function' ? U1 : j1)(e)) : this.node().textContent;
}
function Y1() {
  this.innerHTML = '';
}
function X1(e) {
  return function () {
    this.innerHTML = e;
  };
}
function b1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? '';
  };
}
function K1(e) {
  return arguments.length ? this.each(e == null ? Y1 : (typeof e == 'function' ? b1 : X1)(e)) : this.node().innerHTML;
}
function G1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Q1() {
  return this.each(G1);
}
function Z1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function q1() {
  return this.each(Z1);
}
function J1(e) {
  var t = typeof e == 'function' ? e : wp(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ew() {
  return null;
}
function tw(e, t) {
  var n = typeof e == 'function' ? e : wp(e),
    r = t == null ? ew : typeof t == 'function' ? t : Na(t);
  return this.select(function () {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function nw() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function rw() {
  return this.each(nw);
}
function ow() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function iw() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function lw(e) {
  return this.select(e ? iw : ow);
}
function sw(e) {
  return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function uw(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function aw(e) {
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
function cw(e) {
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
function fw(e, t, n) {
  return function () {
    var r = this.__on,
      o,
      i = uw(t);
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
function dw(e, t, n) {
  var r = aw(e + ''),
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
  for (s = t ? fw : cw, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function Tp(e, t, n) {
  var r = kp(e),
    o = r.CustomEvent;
  typeof o == 'function'
    ? (o = new o(t, n))
    : ((o = r.document.createEvent('Event')),
      n ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail)) : o.initEvent(t, !1, !1)),
    e.dispatchEvent(o);
}
function hw(e, t) {
  return function () {
    return Tp(this, e, t);
  };
}
function pw(e, t) {
  return function () {
    return Tp(this, e, t.apply(this, arguments));
  };
}
function gw(e, t) {
  return this.each((typeof t == 'function' ? pw : hw)(e, t));
}
function* mw() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, l; o < i; ++o) (l = r[o]) && (yield l);
}
var Ip = [null];
function Xe(e, t) {
  (this._groups = e), (this._parents = t);
}
function No() {
  return new Xe([[document.documentElement]], Ip);
}
function yw() {
  return this;
}
Xe.prototype = No.prototype = {
  constructor: Xe,
  select: Uv,
  selectAll: bv,
  selectChild: Zv,
  selectChildren: t1,
  filter: n1,
  data: u1,
  enter: r1,
  exit: c1,
  join: f1,
  merge: d1,
  selection: yw,
  order: h1,
  sort: p1,
  call: m1,
  nodes: y1,
  node: v1,
  size: w1,
  empty: x1,
  each: S1,
  attr: P1,
  style: R1,
  property: A1,
  classed: V1,
  text: W1,
  html: K1,
  raise: Q1,
  lower: q1,
  append: J1,
  insert: tw,
  remove: rw,
  clone: lw,
  datum: sw,
  on: dw,
  dispatch: gw,
  [Symbol.iterator]: mw,
};
function je(e) {
  return typeof e == 'string' ? new Xe([[document.querySelector(e)]], [document.documentElement]) : new Xe([[e]], Ip);
}
function vw(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function it(e, t) {
  if (((e = vw(e)), t === void 0 && (t = e.currentTarget), t)) {
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
const ww = {
    passive: !1,
  },
  co = {
    capture: !0,
    passive: !1,
  };
function ds(e) {
  e.stopImmediatePropagation();
}
function Gn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function zp(e) {
  var t = e.document.documentElement,
    n = je(e).on('dragstart.drag', Gn, co);
  'onselectstart' in t
    ? n.on('selectstart.drag', Gn, co)
    : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'));
}
function Rp(e, t) {
  var n = e.document.documentElement,
    r = je(e).on('dragstart.drag', null);
  t &&
    (r.on('click.drag', Gn, co),
    setTimeout(function () {
      r.on('click.drag', null);
    }, 0)),
    'onselectstart' in n
      ? r.on('selectstart.drag', null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
const Qo = (e) => () => e;
function mu(
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
mu.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function xw(e) {
  return !e.ctrlKey && !e.button;
}
function Sw() {
  return this.parentNode;
}
function Ew(e, t) {
  return (
    t ?? {
      x: e.x,
      y: e.y,
    }
  );
}
function _w() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function Lp() {
  var e = xw,
    t = Sw,
    n = Ew,
    r = _w,
    o = {},
    i = vl('start', 'drag', 'end'),
    l = 0,
    s,
    u,
    a,
    d,
    f = 0;
  function c(v) {
    v.on('mousedown.drag', h)
      .filter(r)
      .on('touchstart.drag', S)
      .on('touchmove.drag', g, ww)
      .on('touchend.drag touchcancel.drag', y)
      .style('touch-action', 'none')
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  function h(v, k) {
    if (!(d || !e.call(this, v, k))) {
      var M = p(this, t.call(this, v, k), v, k, 'mouse');
      M &&
        (je(v.view).on('mousemove.drag', m, co).on('mouseup.drag', w, co),
        zp(v.view),
        ds(v),
        (a = !1),
        (s = v.clientX),
        (u = v.clientY),
        M('start', v));
    }
  }
  function m(v) {
    if ((Gn(v), !a)) {
      var k = v.clientX - s,
        M = v.clientY - u;
      a = k * k + M * M > f;
    }
    o.mouse('drag', v);
  }
  function w(v) {
    je(v.view).on('mousemove.drag mouseup.drag', null), Rp(v.view, a), Gn(v), o.mouse('end', v);
  }
  function S(v, k) {
    if (e.call(this, v, k)) {
      var M = v.changedTouches,
        _ = t.call(this, v, k),
        P = M.length,
        L,
        T;
      for (L = 0; L < P; ++L) (T = p(this, _, v, k, M[L].identifier, M[L])) && (ds(v), T('start', v, M[L]));
    }
  }
  function g(v) {
    var k = v.changedTouches,
      M = k.length,
      _,
      P;
    for (_ = 0; _ < M; ++_) (P = o[k[_].identifier]) && (Gn(v), P('drag', v, k[_]));
  }
  function y(v) {
    var k = v.changedTouches,
      M = k.length,
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
      (P = o[k[_].identifier]) && (ds(v), P('end', v, k[_]));
  }
  function p(v, k, M, _, P, L) {
    var T = i.copy(),
      H = it(L || M, k),
      F,
      O,
      x;
    if (
      (x = n.call(
        v,
        new mu('beforestart', {
          sourceEvent: M,
          target: c,
          identifier: P,
          active: l,
          x: H[0],
          y: H[1],
          dx: 0,
          dy: 0,
          dispatch: T,
        }),
        _,
      )) != null
    )
      return (
        (F = x.x - H[0] || 0),
        (O = x.y - H[1] || 0),
        function I(C, $, E) {
          var N = H,
            z;
          switch (C) {
            case 'start':
              (o[P] = I), (z = l++);
              break;
            case 'end':
              delete o[P], --l;
            case 'drag':
              (H = it(E || $, k)), (z = l);
              break;
          }
          T.call(
            C,
            v,
            new mu(C, {
              sourceEvent: $,
              subject: x,
              target: c,
              identifier: P,
              active: z,
              x: H[0] + F,
              y: H[1] + O,
              dx: H[0] - N[0],
              dy: H[1] - N[1],
              dispatch: T,
            }),
            _,
          );
        }
      );
  }
  return (
    (c.filter = function (v) {
      return arguments.length ? ((e = typeof v == 'function' ? v : Qo(!!v)), c) : e;
    }),
    (c.container = function (v) {
      return arguments.length ? ((t = typeof v == 'function' ? v : Qo(v)), c) : t;
    }),
    (c.subject = function (v) {
      return arguments.length ? ((n = typeof v == 'function' ? v : Qo(v)), c) : n;
    }),
    (c.touchable = function (v) {
      return arguments.length ? ((r = typeof v == 'function' ? v : Qo(!!v)), c) : r;
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
function Pa(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function $p(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Mo() {}
var fo = 0.7,
  Xi = 1 / fo,
  Qn = '\\s*([+-]?\\d+)\\s*',
  ho = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  vt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  kw = /^#([0-9a-f]{3,8})$/,
  Cw = new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`),
  Nw = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`),
  Mw = new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${ho}\\)$`),
  Pw = new RegExp(`^rgba\\(${vt},${vt},${vt},${ho}\\)$`),
  Tw = new RegExp(`^hsl\\(${ho},${vt},${vt}\\)$`),
  Iw = new RegExp(`^hsla\\(${ho},${vt},${vt},${ho}\\)$`),
  rf = {
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
Pa(Mo, po, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: of,
  formatHex: of,
  formatHex8: zw,
  formatHsl: Rw,
  formatRgb: lf,
  toString: lf,
});
function of() {
  return this.rgb().formatHex();
}
function zw() {
  return this.rgb().formatHex8();
}
function Rw() {
  return Dp(this).formatHsl();
}
function lf() {
  return this.rgb().formatRgb();
}
function po(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = kw.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? sf(t)
          : n === 3
            ? new Oe(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
            : n === 8
              ? Zo((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : n === 4
                ? Zo(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Cw.exec(e))
        ? new Oe(t[1], t[2], t[3], 1)
        : (t = Nw.exec(e))
          ? new Oe((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = Mw.exec(e))
            ? Zo(t[1], t[2], t[3], t[4])
            : (t = Pw.exec(e))
              ? Zo((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = Tw.exec(e))
                ? cf(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Iw.exec(e))
                  ? cf(t[1], t[2] / 100, t[3] / 100, t[4])
                  : rf.hasOwnProperty(e)
                    ? sf(rf[e])
                    : e === 'transparent'
                      ? new Oe(NaN, NaN, NaN, 0)
                      : null
  );
}
function sf(e) {
  return new Oe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function Lw(e) {
  return e instanceof Mo || (e = po(e)), e ? ((e = e.rgb()), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe();
}
function yu(e, t, n, r) {
  return arguments.length === 1 ? Lw(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Pa(
  Oe,
  yu,
  $p(Mo, {
    brighter(e) {
      return (e = e == null ? Xi : Math.pow(Xi, e)), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker(e) {
      return (e = e == null ? fo : Math.pow(fo, e)), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Oe(yn(this.r), yn(this.g), yn(this.b), bi(this.opacity));
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
    hex: uf,
    formatHex: uf,
    formatHex8: $w,
    formatRgb: af,
    toString: af,
  }),
);
function uf() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}`;
}
function $w() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}${pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function af() {
  const e = bi(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${yn(this.r)}, ${yn(this.g)}, ${yn(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function bi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function yn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pn(e) {
  return (e = yn(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function cf(e, t, n, r) {
  return r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new st(e, t, n, r);
}
function Dp(e) {
  if (e instanceof st) return new st(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Mo || (e = po(e)), !e)) return new st();
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
function Dw(e, t, n, r) {
  return arguments.length === 1 ? Dp(e) : new st(e, t, n, r ?? 1);
}
function st(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Pa(
  st,
  Dw,
  $p(Mo, {
    brighter(e) {
      return (e = e == null ? Xi : Math.pow(Xi, e)), new st(this.h, this.s, this.l * e, this.opacity);
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
      return new st(ff(this.h), qo(this.s), qo(this.l), bi(this.opacity));
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
      const e = bi(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${ff(this.h)}, ${qo(this.s) * 100}%, ${qo(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  }),
);
function ff(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function qo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hs(e, t, n) {
  return (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) * 255;
}
const Ap = (e) => () => e;
function Aw(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Ow(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function Fw(e) {
  return (e = +e) == 1
    ? Op
    : function (t, n) {
        return n - t ? Ow(t, n, e) : Ap(isNaN(t) ? n : t);
      };
}
function Op(e, t) {
  var n = t - e;
  return n ? Aw(e, n) : Ap(isNaN(e) ? t : e);
}
const df = (function e(t) {
  var n = Fw(t);
  function r(o, i) {
    var l = n((o = yu(o)).r, (i = yu(i)).r),
      s = n(o.g, i.g),
      u = n(o.b, i.b),
      a = Op(o.opacity, i.opacity);
    return function (d) {
      return (o.r = l(d)), (o.g = s(d)), (o.b = u(d)), (o.opacity = a(d)), o + '';
    };
  }
  return (r.gamma = e), r;
})(1);
function Bt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
var vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ps = new RegExp(vu.source, 'g');
function Hw(e) {
  return function () {
    return e;
  };
}
function Vw(e) {
  return function (t) {
    return e(t) + '';
  };
}
function Bw(e, t) {
  var n = (vu.lastIndex = ps.lastIndex = 0),
    r,
    o,
    i,
    l = -1,
    s = [],
    u = [];
  for (e = e + '', t = t + ''; (r = vu.exec(e)) && (o = ps.exec(t)); )
    (i = o.index) > n && ((i = t.slice(n, i)), s[l] ? (s[l] += i) : (s[++l] = i)),
      (r = r[0]) === (o = o[0])
        ? s[l]
          ? (s[l] += o)
          : (s[++l] = o)
        : ((s[++l] = null),
          u.push({
            i: l,
            x: Bt(r, o),
          })),
      (n = ps.lastIndex);
  return (
    n < t.length && ((i = t.slice(n)), s[l] ? (s[l] += i) : (s[++l] = i)),
    s.length < 2
      ? u[0]
        ? Vw(u[0].x)
        : Hw(t)
      : ((t = u.length),
        function (a) {
          for (var d = 0, f; d < t; ++d) s[(f = u[d]).i] = f.x(a);
          return s.join('');
        })
  );
}
var hf = 180 / Math.PI,
  wu = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Fp(e, t, n, r, o, i) {
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
var Jo;
function jw(e) {
  const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
  return t.isIdentity ? wu : Fp(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Uw(e) {
  return e == null ||
    (Jo || (Jo = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    Jo.setAttribute('transform', e),
    !(e = Jo.transform.baseVal.consolidate()))
    ? wu
    : ((e = e.matrix), Fp(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Hp(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + ' ' : '';
  }
  function i(a, d, f, c, h, m) {
    if (a !== f || d !== c) {
      var w = h.push('translate(', null, t, null, n);
      m.push(
        {
          i: w - 4,
          x: Bt(a, f),
        },
        {
          i: w - 2,
          x: Bt(d, c),
        },
      );
    } else (f || c) && h.push('translate(' + f + t + c + n);
  }
  function l(a, d, f, c) {
    a !== d
      ? (a - d > 180 ? (d += 360) : d - a > 180 && (a += 360),
        c.push({
          i: f.push(o(f) + 'rotate(', null, r) - 2,
          x: Bt(a, d),
        }))
      : d && f.push(o(f) + 'rotate(' + d + r);
  }
  function s(a, d, f, c) {
    a !== d
      ? c.push({
          i: f.push(o(f) + 'skewX(', null, r) - 2,
          x: Bt(a, d),
        })
      : d && f.push(o(f) + 'skewX(' + d + r);
  }
  function u(a, d, f, c, h, m) {
    if (a !== f || d !== c) {
      var w = h.push(o(h) + 'scale(', null, ',', null, ')');
      m.push(
        {
          i: w - 4,
          x: Bt(a, f),
        },
        {
          i: w - 2,
          x: Bt(d, c),
        },
      );
    } else (f !== 1 || c !== 1) && h.push(o(h) + 'scale(' + f + ',' + c + ')');
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
      function (h) {
        for (var m = -1, w = c.length, S; ++m < w; ) f[(S = c[m]).i] = S.x(h);
        return f.join('');
      }
    );
  };
}
var Ww = Hp(jw, 'px, ', 'px)', 'deg)'),
  Yw = Hp(Uw, ', ', ')', ')'),
  Xw = 1e-12;
function pf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function bw(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Kw(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Gw = (function e(t, n, r) {
  function o(i, l) {
    var s = i[0],
      u = i[1],
      a = i[2],
      d = l[0],
      f = l[1],
      c = l[2],
      h = d - s,
      m = f - u,
      w = h * h + m * m,
      S,
      g;
    if (w < Xw)
      (g = Math.log(c / a) / t),
        (S = function (_) {
          return [s + _ * h, u + _ * m, a * Math.exp(t * _ * g)];
        });
    else {
      var y = Math.sqrt(w),
        p = (c * c - a * a + r * w) / (2 * a * n * y),
        v = (c * c - a * a - r * w) / (2 * c * n * y),
        k = Math.log(Math.sqrt(p * p + 1) - p),
        M = Math.log(Math.sqrt(v * v + 1) - v);
      (g = (M - k) / t),
        (S = function (_) {
          var P = _ * g,
            L = pf(k),
            T = (a / (n * y)) * (L * Kw(t * P + k) - bw(k));
          return [s + T * h, u + T * m, (a * L) / pf(t * P + k)];
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
var ir = 0,
  $r = 0,
  Mr = 0,
  Vp = 1e3,
  Ki,
  Dr,
  Gi = 0,
  kn = 0,
  xl = 0,
  go = typeof performance == 'object' && performance.now ? performance : Date,
  Bp =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Ta() {
  return kn || (Bp(Qw), (kn = go.now() + xl));
}
function Qw() {
  kn = 0;
}
function Qi() {
  this._call = this._time = this._next = null;
}
Qi.prototype = jp.prototype = {
  constructor: Qi,
  restart: function (e, t, n) {
    if (typeof e != 'function') throw new TypeError('callback is not a function');
    (n = (n == null ? Ta() : +n) + (t == null ? 0 : +t)),
      !this._next && Dr !== this && (Dr ? (Dr._next = this) : (Ki = this), (Dr = this)),
      (this._call = e),
      (this._time = n),
      xu();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), xu());
  },
};
function jp(e, t, n) {
  var r = new Qi();
  return r.restart(e, t, n), r;
}
function Zw() {
  Ta(), ++ir;
  for (var e = Ki, t; e; ) (t = kn - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --ir;
}
function gf() {
  (kn = (Gi = go.now()) + xl), (ir = $r = 0);
  try {
    Zw();
  } finally {
    (ir = 0), Jw(), (kn = 0);
  }
}
function qw() {
  var e = go.now(),
    t = e - Gi;
  t > Vp && ((xl -= t), (Gi = e));
}
function Jw() {
  for (var e, t = Ki, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Ki = n)));
  (Dr = e), xu(r);
}
function xu(e) {
  if (!ir) {
    $r && ($r = clearTimeout($r));
    var t = e - kn;
    t > 24
      ? (e < 1 / 0 && ($r = setTimeout(gf, e - go.now() - xl)), Mr && (Mr = clearInterval(Mr)))
      : (Mr || ((Gi = go.now()), (Mr = setInterval(qw, Vp))), (ir = 1), Bp(gf));
  }
}
function mf(e, t, n) {
  var r = new Qi();
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
var ex = vl('start', 'end', 'cancel', 'interrupt'),
  tx = [],
  Up = 0,
  yf = 1,
  Su = 2,
  vi = 3,
  vf = 4,
  Eu = 5,
  wi = 6;
function Sl(e, t, n, r, o, i) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  nx(e, n, {
    name: t,
    index: r,
    group: o,
    on: ex,
    tween: tx,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Up,
  });
}
function Ia(e, t) {
  var n = dt(e, t);
  if (n.state > Up) throw new Error('too late; already scheduled');
  return n;
}
function wt(e, t) {
  var n = dt(e, t);
  if (n.state > vi) throw new Error('too late; already running');
  return n;
}
function dt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error('transition not found');
  return n;
}
function nx(e, t, n) {
  var r = e.__transition,
    o;
  (r[t] = n), (n.timer = jp(i, 0, n.time));
  function i(a) {
    (n.state = yf), n.timer.restart(l, n.delay, n.time), n.delay <= a && l(a - n.delay);
  }
  function l(a) {
    var d, f, c, h;
    if (n.state !== yf) return u();
    for (d in r)
      if (((h = r[d]), h.name === n.name)) {
        if (h.state === vi) return mf(l);
        h.state === vf
          ? ((h.state = wi), h.timer.stop(), h.on.call('interrupt', e, e.__data__, h.index, h.group), delete r[d])
          : +d < t &&
            ((h.state = wi), h.timer.stop(), h.on.call('cancel', e, e.__data__, h.index, h.group), delete r[d]);
      }
    if (
      (mf(function () {
        n.state === vi && ((n.state = vf), n.timer.restart(s, n.delay, n.time), s(a));
      }),
      (n.state = Su),
      n.on.call('start', e, e.__data__, n.index, n.group),
      n.state === Su)
    ) {
      for (n.state = vi, o = new Array((c = n.tween.length)), d = 0, f = -1; d < c; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function s(a) {
    for (
      var d = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), (n.state = Eu), 1),
        f = -1,
        c = o.length;
      ++f < c;

    )
      o[f].call(e, d);
    n.state === Eu && (n.on.call('end', e, e.__data__, n.index, n.group), u());
  }
  function u() {
    (n.state = wi), n.timer.stop(), delete r[t];
    for (var a in r) return;
    delete e.__transition;
  }
}
function xi(e, t) {
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
      (o = r.state > Su && r.state < Eu),
        (r.state = wi),
        r.timer.stop(),
        r.on.call(o ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
        delete n[l];
    }
    i && delete e.__transition;
  }
}
function rx(e) {
  return this.each(function () {
    xi(this, e);
  });
}
function ox(e, t) {
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
function ix(e, t, n) {
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
function lx(e, t) {
  var n = this._id;
  if (((e += ''), arguments.length < 2)) {
    for (var r = dt(this.node(), n).tween, o = 0, i = r.length, l; o < i; ++o)
      if ((l = r[o]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? ox : ix)(n, e, t));
}
function za(e, t, n) {
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
function Wp(e, t) {
  var n;
  return (typeof t == 'number' ? Bt : t instanceof po ? df : (n = po(t)) ? ((t = n), df) : Bw)(e, t);
}
function sx(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function ux(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ax(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = this.getAttribute(e);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function cx(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function fx(e, t, n) {
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
function dx(e, t, n) {
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
function hx(e, t) {
  var n = wl(e),
    r = n === 'transform' ? Yw : Wp;
  return this.attrTween(
    e,
    typeof t == 'function'
      ? (n.local ? dx : fx)(n, r, za(this, 'attr.' + e, t))
      : t == null
        ? (n.local ? ux : sx)(n)
        : (n.local ? cx : ax)(n, r, t),
  );
}
function px(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function gx(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function mx(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && gx(e, i)), n;
  }
  return (o._value = t), o;
}
function yx(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && px(e, i)), n;
  }
  return (o._value = t), o;
}
function vx(e, t) {
  var n = 'attr.' + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != 'function') throw new Error();
  var r = wl(e);
  return this.tween(n, (r.local ? mx : yx)(r, t));
}
function wx(e, t) {
  return function () {
    Ia(this, e).delay = +t.apply(this, arguments);
  };
}
function xx(e, t) {
  return (
    (t = +t),
    function () {
      Ia(this, e).delay = t;
    }
  );
}
function Sx(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == 'function' ? wx : xx)(t, e)) : dt(this.node(), t).delay;
}
function Ex(e, t) {
  return function () {
    wt(this, e).duration = +t.apply(this, arguments);
  };
}
function _x(e, t) {
  return (
    (t = +t),
    function () {
      wt(this, e).duration = t;
    }
  );
}
function kx(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == 'function' ? Ex : _x)(t, e)) : dt(this.node(), t).duration;
}
function Cx(e, t) {
  if (typeof t != 'function') throw new Error();
  return function () {
    wt(this, e).ease = t;
  };
}
function Nx(e) {
  var t = this._id;
  return arguments.length ? this.each(Cx(t, e)) : dt(this.node(), t).ease;
}
function Mx(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != 'function') throw new Error();
    wt(this, e).ease = n;
  };
}
function Px(e) {
  if (typeof e != 'function') throw new Error();
  return this.each(Mx(this._id, e));
}
function Tx(e) {
  typeof e != 'function' && (e = Sp(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = (r[o] = []), u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new Rt(r, this._parents, this._name, this._id);
}
function Ix(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), l = new Array(r), s = 0;
    s < i;
    ++s
  )
    for (var u = t[s], a = n[s], d = u.length, f = (l[s] = new Array(d)), c, h = 0; h < d; ++h)
      (c = u[h] || a[h]) && (f[h] = c);
  for (; s < r; ++s) l[s] = t[s];
  return new Rt(l, this._parents, this._name, this._id);
}
function zx(e) {
  return (e + '')
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf('.');
      return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
    });
}
function Rx(e, t, n) {
  var r,
    o,
    i = zx(t) ? Ia : wt;
  return function () {
    var l = i(this, e),
      s = l.on;
    s !== r && (o = (r = s).copy()).on(t, n), (l.on = o);
  };
}
function Lx(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dt(this.node(), n).on.on(e) : this.each(Rx(n, e, t));
}
function $x(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Dx() {
  return this.on('end.remove', $x(this._id));
}
function Ax(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = Na(e));
  for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l)
    for (var s = r[l], u = s.length, a = (i[l] = new Array(u)), d, f, c = 0; c < u; ++c)
      (d = s[c]) &&
        (f = e.call(d, d.__data__, c, s)) &&
        ('__data__' in d && (f.__data__ = d.__data__), (a[c] = f), Sl(a[c], t, n, c, a, dt(d, n)));
  return new Rt(i, this._parents, t, n);
}
function Ox(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = xp(e));
  for (var r = this._groups, o = r.length, i = [], l = [], s = 0; s < o; ++s)
    for (var u = r[s], a = u.length, d, f = 0; f < a; ++f)
      if ((d = u[f])) {
        for (var c = e.call(d, d.__data__, f, u), h, m = dt(d, n), w = 0, S = c.length; w < S; ++w)
          (h = c[w]) && Sl(h, t, n, w, c, m);
        i.push(c), l.push(d);
      }
  return new Rt(i, l, t, n);
}
var Fx = No.prototype.constructor;
function Hx() {
  return new Fx(this._groups, this._parents);
}
function Vx(e, t) {
  var n, r, o;
  return function () {
    var i = or(this, e),
      l = (this.style.removeProperty(e), or(this, e));
    return i === l ? null : i === n && l === r ? o : (o = t((n = i), (r = l)));
  };
}
function Yp(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Bx(e, t, n) {
  var r,
    o = n + '',
    i;
  return function () {
    var l = or(this, e);
    return l === o ? null : l === r ? i : (i = t((r = l), n));
  };
}
function jx(e, t, n) {
  var r, o, i;
  return function () {
    var l = or(this, e),
      s = n(this),
      u = s + '';
    return (
      s == null && (u = s = (this.style.removeProperty(e), or(this, e))),
      l === u ? null : l === r && u === o ? i : ((o = u), (i = t((r = l), s)))
    );
  };
}
function Ux(e, t) {
  var n,
    r,
    o,
    i = 'style.' + t,
    l = 'end.' + i,
    s;
  return function () {
    var u = wt(this, e),
      a = u.on,
      d = u.value[i] == null ? s || (s = Yp(t)) : void 0;
    (a !== n || o !== d) && (r = (n = a).copy()).on(l, (o = d)), (u.on = r);
  };
}
function Wx(e, t, n) {
  var r = (e += '') == 'transform' ? Ww : Wp;
  return t == null
    ? this.styleTween(e, Vx(e, r)).on('end.style.' + e, Yp(e))
    : typeof t == 'function'
      ? this.styleTween(e, jx(e, r, za(this, 'style.' + e, t))).each(Ux(this._id, e))
      : this.styleTween(e, Bx(e, r, t), n).on('end.style.' + e, null);
}
function Yx(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Xx(e, t, n) {
  var r, o;
  function i() {
    var l = t.apply(this, arguments);
    return l !== o && (r = (o = l) && Yx(e, l, n)), r;
  }
  return (i._value = t), i;
}
function bx(e, t, n) {
  var r = 'style.' + (e += '');
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != 'function') throw new Error();
  return this.tween(r, Xx(e, t, n ?? ''));
}
function Kx(e) {
  return function () {
    this.textContent = e;
  };
}
function Gx(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? '';
  };
}
function Qx(e) {
  return this.tween('text', typeof e == 'function' ? Gx(za(this, 'text', e)) : Kx(e == null ? '' : e + ''));
}
function Zx(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function qx(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Zx(o)), t;
  }
  return (r._value = e), r;
}
function Jx(e) {
  var t = 'text';
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != 'function') throw new Error();
  return this.tween(t, qx(e));
}
function eS() {
  for (var e = this._name, t = this._id, n = Xp(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a)
      if ((u = l[a])) {
        var d = dt(u, t);
        Sl(u, e, n, a, l, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease,
        });
      }
  return new Rt(r, this._parents, e, n);
}
function tS() {
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
var nS = 0;
function Rt(e, t, n, r) {
  (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function Xp() {
  return ++nS;
}
var xt = No.prototype;
Rt.prototype = {
  constructor: Rt,
  select: Ax,
  selectAll: Ox,
  selectChild: xt.selectChild,
  selectChildren: xt.selectChildren,
  filter: Tx,
  merge: Ix,
  selection: Hx,
  transition: eS,
  call: xt.call,
  nodes: xt.nodes,
  node: xt.node,
  size: xt.size,
  empty: xt.empty,
  each: xt.each,
  on: Lx,
  attr: hx,
  attrTween: vx,
  style: Wx,
  styleTween: bx,
  text: Qx,
  textTween: Jx,
  remove: Dx,
  tween: lx,
  delay: Sx,
  duration: kx,
  ease: Nx,
  easeVarying: Px,
  end: tS,
  [Symbol.iterator]: xt[Symbol.iterator],
};
function rS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var oS = {
  time: null,
  delay: 0,
  duration: 250,
  ease: rS,
};
function iS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function lS(e) {
  var t, n;
  e instanceof Rt
    ? ((t = e._id), (e = e._name))
    : ((t = Xp()), ((n = oS).time = Ta()), (e = e == null ? null : e + ''));
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a) (u = l[a]) && Sl(u, e, t, a, l, n || iS(u, t));
  return new Rt(r, this._parents, e, t);
}
No.prototype.interrupt = rx;
No.prototype.transition = lS;
const ei = (e) => () => e;
function sS(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
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
var El = new Ct(1, 0, 0);
bp.prototype = Ct.prototype;
function bp(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return El;
  return e.__zoom;
}
function gs(e) {
  e.stopImmediatePropagation();
}
function Pr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function uS(e) {
  return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function aS() {
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
function wf() {
  return this.__zoom || El;
}
function cS(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function fS() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function dS(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    o = e.invertX(t[1][0]) - n[1][0],
    i = e.invertY(t[0][1]) - n[0][1],
    l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l),
  );
}
function Kp() {
  var e = uS,
    t = aS,
    n = dS,
    r = cS,
    o = fS,
    i = [0, 1 / 0],
    l = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    s = 250,
    u = Gw,
    a = vl('start', 'zoom', 'end'),
    d,
    f,
    c,
    h = 500,
    m = 150,
    w = 0,
    S = 10;
  function g(x) {
    x.property('__zoom', wf)
      .on('wheel.zoom', P, {
        passive: !1,
      })
      .on('mousedown.zoom', L)
      .on('dblclick.zoom', T)
      .filter(o)
      .on('touchstart.zoom', H)
      .on('touchmove.zoom', F)
      .on('touchend.zoom touchcancel.zoom', O)
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  (g.transform = function (x, I, C, $) {
    var E = x.selection ? x.selection() : x;
    E.property('__zoom', wf),
      x !== E
        ? k(x, I, C, $)
        : E.interrupt().each(function () {
            M(this, arguments)
              .event($)
              .start()
              .zoom(null, typeof I == 'function' ? I.apply(this, arguments) : I)
              .end();
          });
  }),
    (g.scaleBy = function (x, I, C, $) {
      g.scaleTo(
        x,
        function () {
          var E = this.__zoom.k,
            N = typeof I == 'function' ? I.apply(this, arguments) : I;
          return E * N;
        },
        C,
        $,
      );
    }),
    (g.scaleTo = function (x, I, C, $) {
      g.transform(
        x,
        function () {
          var E = t.apply(this, arguments),
            N = this.__zoom,
            z = C == null ? v(E) : typeof C == 'function' ? C.apply(this, arguments) : C,
            A = N.invert(z),
            B = typeof I == 'function' ? I.apply(this, arguments) : I;
          return n(p(y(N, B), z, A), E, l);
        },
        C,
        $,
      );
    }),
    (g.translateBy = function (x, I, C, $) {
      g.transform(
        x,
        function () {
          return n(
            this.__zoom.translate(
              typeof I == 'function' ? I.apply(this, arguments) : I,
              typeof C == 'function' ? C.apply(this, arguments) : C,
            ),
            t.apply(this, arguments),
            l,
          );
        },
        null,
        $,
      );
    }),
    (g.translateTo = function (x, I, C, $, E) {
      g.transform(
        x,
        function () {
          var N = t.apply(this, arguments),
            z = this.__zoom,
            A = $ == null ? v(N) : typeof $ == 'function' ? $.apply(this, arguments) : $;
          return n(
            El.translate(A[0], A[1])
              .scale(z.k)
              .translate(
                typeof I == 'function' ? -I.apply(this, arguments) : -I,
                typeof C == 'function' ? -C.apply(this, arguments) : -C,
              ),
            N,
            l,
          );
        },
        $,
        E,
      );
    });
  function y(x, I) {
    return (I = Math.max(i[0], Math.min(i[1], I))), I === x.k ? x : new Ct(I, x.x, x.y);
  }
  function p(x, I, C) {
    var $ = I[0] - C[0] * x.k,
      E = I[1] - C[1] * x.k;
    return $ === x.x && E === x.y ? x : new Ct(x.k, $, E);
  }
  function v(x) {
    return [(+x[0][0] + +x[1][0]) / 2, (+x[0][1] + +x[1][1]) / 2];
  }
  function k(x, I, C, $) {
    x.on('start.zoom', function () {
      M(this, arguments).event($).start();
    })
      .on('interrupt.zoom end.zoom', function () {
        M(this, arguments).event($).end();
      })
      .tween('zoom', function () {
        var E = this,
          N = arguments,
          z = M(E, N).event($),
          A = t.apply(E, N),
          B = C == null ? v(A) : typeof C == 'function' ? C.apply(E, N) : C,
          b = Math.max(A[1][0] - A[0][0], A[1][1] - A[0][1]),
          U = E.__zoom,
          X = typeof I == 'function' ? I.apply(E, N) : I,
          Y = u(U.invert(B).concat(b / U.k), X.invert(B).concat(b / X.k));
        return function (j) {
          if (j === 1) j = X;
          else {
            var G = Y(j),
              Z = b / G[2];
            j = new Ct(Z, B[0] - G[0] * Z, B[1] - G[1] * Z);
          }
          z.zoom(null, j);
        };
      });
  }
  function M(x, I, C) {
    return (!C && x.__zooming) || new _(x, I);
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
      var I = je(this.that).datum();
      a.call(
        x,
        this.that,
        new sS(x, {
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
    var C = M(this, I).event(x),
      $ = this.__zoom,
      E = Math.max(i[0], Math.min(i[1], $.k * Math.pow(2, r.apply(this, arguments)))),
      N = it(x);
    if (C.wheel)
      (C.mouse[0][0] !== N[0] || C.mouse[0][1] !== N[1]) && (C.mouse[1] = $.invert((C.mouse[0] = N))),
        clearTimeout(C.wheel);
    else {
      if ($.k === E) return;
      (C.mouse = [N, $.invert(N)]), xi(this), C.start();
    }
    Pr(x), (C.wheel = setTimeout(z, m)), C.zoom('mouse', n(p(y($, E), C.mouse[0], C.mouse[1]), C.extent, l));
    function z() {
      (C.wheel = null), C.end();
    }
  }
  function L(x, ...I) {
    if (c || !e.apply(this, arguments)) return;
    var C = x.currentTarget,
      $ = M(this, I, !0).event(x),
      E = je(x.view).on('mousemove.zoom', B, !0).on('mouseup.zoom', b, !0),
      N = it(x, C),
      z = x.clientX,
      A = x.clientY;
    zp(x.view), gs(x), ($.mouse = [N, this.__zoom.invert(N)]), xi(this), $.start();
    function B(U) {
      if ((Pr(U), !$.moved)) {
        var X = U.clientX - z,
          Y = U.clientY - A;
        $.moved = X * X + Y * Y > w;
      }
      $.event(U).zoom('mouse', n(p($.that.__zoom, ($.mouse[0] = it(U, C)), $.mouse[1]), $.extent, l));
    }
    function b(U) {
      E.on('mousemove.zoom mouseup.zoom', null), Rp(U.view, $.moved), Pr(U), $.event(U).end();
    }
  }
  function T(x, ...I) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom,
        $ = it(x.changedTouches ? x.changedTouches[0] : x, this),
        E = C.invert($),
        N = C.k * (x.shiftKey ? 0.5 : 2),
        z = n(p(y(C, N), $, E), t.apply(this, I), l);
      Pr(x), s > 0 ? je(this).transition().duration(s).call(k, z, $, x) : je(this).call(g.transform, z, $, x);
    }
  }
  function H(x, ...I) {
    if (e.apply(this, arguments)) {
      var C = x.touches,
        $ = C.length,
        E = M(this, I, x.changedTouches.length === $).event(x),
        N,
        z,
        A,
        B;
      for (gs(x), z = 0; z < $; ++z)
        (A = C[z]),
          (B = it(A, this)),
          (B = [B, this.__zoom.invert(B), A.identifier]),
          E.touch0
            ? !E.touch1 && E.touch0[2] !== B[2] && ((E.touch1 = B), (E.taps = 0))
            : ((E.touch0 = B), (N = !0), (E.taps = 1 + !!d));
      d && (d = clearTimeout(d)),
        N &&
          (E.taps < 2 &&
            ((f = B[0]),
            (d = setTimeout(function () {
              d = null;
            }, h))),
          xi(this),
          E.start());
    }
  }
  function F(x, ...I) {
    if (this.__zooming) {
      var C = M(this, I).event(x),
        $ = x.changedTouches,
        E = $.length,
        N,
        z,
        A,
        B;
      for (Pr(x), N = 0; N < E; ++N)
        (z = $[N]),
          (A = it(z, this)),
          C.touch0 && C.touch0[2] === z.identifier
            ? (C.touch0[0] = A)
            : C.touch1 && C.touch1[2] === z.identifier && (C.touch1[0] = A);
      if (((z = C.that.__zoom), C.touch1)) {
        var b = C.touch0[0],
          U = C.touch0[1],
          X = C.touch1[0],
          Y = C.touch1[1],
          j = (j = X[0] - b[0]) * j + (j = X[1] - b[1]) * j,
          G = (G = Y[0] - U[0]) * G + (G = Y[1] - U[1]) * G;
        (z = y(z, Math.sqrt(j / G))),
          (A = [(b[0] + X[0]) / 2, (b[1] + X[1]) / 2]),
          (B = [(U[0] + Y[0]) / 2, (U[1] + Y[1]) / 2]);
      } else if (C.touch0) (A = C.touch0[0]), (B = C.touch0[1]);
      else return;
      C.zoom('touch', n(p(z, A, B), C.extent, l));
    }
  }
  function O(x, ...I) {
    if (this.__zooming) {
      var C = M(this, I).event(x),
        $ = x.changedTouches,
        E = $.length,
        N,
        z;
      for (
        gs(x),
          c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, h),
          N = 0;
        N < E;
        ++N
      )
        (z = $[N]),
          C.touch0 && C.touch0[2] === z.identifier
            ? delete C.touch0
            : C.touch1 && C.touch1[2] === z.identifier && delete C.touch1;
      if ((C.touch1 && !C.touch0 && ((C.touch0 = C.touch1), delete C.touch1), C.touch0))
        C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if ((C.end(), C.taps === 2 && ((z = it(z, this)), Math.hypot(f[0] - z[0], f[1] - z[1]) < S))) {
        var A = je(this).on('dblclick.zoom');
        A && A.apply(this, arguments);
      }
    }
  }
  return (
    (g.wheelDelta = function (x) {
      return arguments.length ? ((r = typeof x == 'function' ? x : ei(+x)), g) : r;
    }),
    (g.filter = function (x) {
      return arguments.length ? ((e = typeof x == 'function' ? x : ei(!!x)), g) : e;
    }),
    (g.touchable = function (x) {
      return arguments.length ? ((o = typeof x == 'function' ? x : ei(!!x)), g) : o;
    }),
    (g.extent = function (x) {
      return arguments.length
        ? ((t =
            typeof x == 'function'
              ? x
              : ei([
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
  Gp = ['Enter', ' ', 'Escape'];
var lr;
(function (e) {
  (e.Strict = 'strict'), (e.Loose = 'loose');
})(lr || (lr = {}));
var vn;
(function (e) {
  (e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
})(vn || (vn = {}));
var yo;
(function (e) {
  (e.Partial = 'partial'), (e.Full = 'full');
})(yo || (yo = {}));
const Qp = {
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
var Zi;
(function (e) {
  (e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
})(Zi || (Zi = {}));
var K;
(function (e) {
  (e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom');
})(K || (K = {}));
const xf = {
  [K.Left]: K.Right,
  [K.Right]: K.Left,
  [K.Top]: K.Bottom,
  [K.Bottom]: K.Top,
};
function Zp(e) {
  return e === null ? null : e ? 'valid' : 'invalid';
}
const qp = (e) => 'id' in e && 'source' in e && 'target' in e,
  hS = (e) => 'id' in e && 'position' in e && !('source' in e) && !('target' in e),
  Ra = (e) => 'id' in e && 'internals' in e && !('source' in e) && !('target' in e),
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
  pS = (
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
        t.nodeLookup && (l = i ? t.nodeLookup.get(o) : Ra(o) ? o : t.nodeLookup.get(o.id));
        const s = l
          ? qi(l, t.nodeOrigin)
          : {
              x: 0,
              y: 0,
              x2: 0,
              y2: 0,
            };
        return _l(r, s);
      },
      {
        x: 1 / 0,
        y: 1 / 0,
        x2: -1 / 0,
        y2: -1 / 0,
      },
    );
    return kl(n);
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
          const o = qi(r);
          n = _l(n, o);
        }
      }),
      kl(n)
    );
  },
  Jp = (e, t, [n, r, o] = [0, 0, 1], i = !1, l = !1) => {
    const s = {
        ...Io(t, [n, r, o]),
        width: t.width / o,
        height: t.height / o,
      },
      u = [];
    for (const a of e.values()) {
      const { measured: d, selectable: f = !0, hidden: c = !1 } = a;
      if ((l && !f) || c) continue;
      const h = d.width ?? a.width ?? a.initialWidth ?? null,
        m = d.height ?? a.height ?? a.initialHeight ?? null,
        w = vo(s, ur(a)),
        S = (h ?? 0) * (m ?? 0),
        g = i && w > 0;
      (!a.internals.handleBounds || g || w >= S || a.dragging) && u.push(a);
    }
    return u;
  },
  gS = (e, t) => {
    const n = new Set();
    return (
      e.forEach((r) => {
        n.add(r.id);
      }),
      t.filter((r) => n.has(r.source) || n.has(r.target))
    );
  };
function _u(e, t) {
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
async function ku({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, l) {
  if (e.size === 0) return Promise.resolve(!1);
  const s = To(e),
    u = La(
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
function eg({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
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
      const h = s.measured.width,
        m = s.measured.height;
      h &&
        m &&
        (f = [
          [u, a],
          [u + h, a + m],
        ]);
    }
  else
    s &&
      ar(l.extent) &&
      (f = [
        [l.extent[0][0] + u, l.extent[0][1] + a],
        [l.extent[1][0] + u, l.extent[1][1] + a],
      ]);
  const c = ar(f) ? Cn(t, f, l.measured) : t;
  return {
    position: {
      x: c.x - u + l.measured.width * d[0],
      y: c.y - a + l.measured.height * d[1],
    },
    positionAbsolute: c,
  };
}
async function mS({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((c) => c.id)),
    l = [];
  for (const c of n) {
    if (c.deletable === !1) continue;
    const h = i.has(c.id),
      m = !h && c.parentId && l.find((w) => w.id === c.parentId);
    (h || m) && l.push(c);
  }
  const s = new Set(t.map((c) => c.id)),
    u = r.filter((c) => c.deletable !== !1),
    d = gS(l, u);
  for (const c of u) s.has(c.id) && !d.find((m) => m.id === c.id) && d.push(c);
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
const sr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
  Cn = (
    e = {
      x: 0,
      y: 0,
    },
    t,
    n,
  ) => ({
    x: sr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
    y: sr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
  });
function tg(e, t, n) {
  const { width: r, height: o } = Dt(n),
    { x: i, y: l } = n.internals.positionAbsolute;
  return Cn(
    e,
    [
      [i, l],
      [i + r, l + o],
    ],
    t,
  );
}
const Sf = (e, t, n) => (e < t ? sr(Math.abs(e - t), 1, t) / t : e > n ? -sr(Math.abs(e - n), 1, t) / t : 0),
  ng = (e, t, n = 15, r = 40) => {
    const o = Sf(e.x, r, t.width - r) * n,
      i = Sf(e.y, r, t.height - r) * n;
    return [o, i];
  },
  _l = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  Cu = ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    x2: e + n,
    y2: t + r,
  }),
  kl = ({ x: e, y: t, x2: n, y2: r }) => ({
    x: e,
    y: t,
    width: n - e,
    height: r - t,
  }),
  ur = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = Ra(e) ? e.internals.positionAbsolute : Po(e, t);
    return {
      x: n,
      y: r,
      width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
      height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0,
    };
  },
  qi = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = Ra(e) ? e.internals.positionAbsolute : Po(e, t);
    return {
      x: n,
      y: r,
      x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
      y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0),
    };
  },
  rg = (e, t) => kl(_l(Cu(e), Cu(t))),
  vo = (e, t) => {
    const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)),
      r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
    return Math.ceil(n * r);
  },
  Ef = (e) => ut(e.width) && ut(e.height) && ut(e.x) && ut(e.y),
  ut = (e) => !isNaN(e) && isFinite(e),
  yS = (e, t) => {},
  Cl = (e, t = [1, 1]) => ({
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1]),
  }),
  Io = ({ x: e, y: t }, [n, r, o], i = !1, l = [1, 1]) => {
    const s = {
      x: (e - n) / o,
      y: (t - r) / o,
    };
    return i ? Cl(s, l) : s;
  },
  og = ({ x: e, y: t }, [n, r, o]) => ({
    x: e * o + n,
    y: t * o + r,
  }),
  La = (e, t, n, r, o, i) => {
    const l = t / (e.width * (1 + i)),
      s = n / (e.height * (1 + i)),
      u = Math.min(l, s),
      a = sr(u, r, o),
      d = e.x + e.width / 2,
      f = e.y + e.height / 2,
      c = t / 2 - d * a,
      h = n / 2 - f * a;
    return {
      x: c,
      y: h,
      zoom: a,
    };
  },
  Ji = () => {
    var e;
    return (
      typeof navigator < 'u' &&
      ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf('Mac')) >= 0
    );
  };
function ar(e) {
  return e !== void 0 && e !== 'parent';
}
function Dt(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0,
  };
}
function ig(e) {
  var t, n;
  return (
    (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 &&
    (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0
  );
}
function lg(
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
function _f(e, t) {
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
    { x: u, y: a } = n ? Cl(s, t) : s;
  return {
    xSnapped: u,
    ySnapped: a,
    ...s,
  };
}
const Nl = (e) => ({
    width: e.offsetWidth,
    height: e.offsetHeight,
  }),
  sg = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
      (window == null ? void 0 : window.document)
    );
  },
  vS = ['INPUT', 'SELECT', 'TEXTAREA'];
function Nu(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1
    ? !1
    : vS.includes(t.nodeName) || t.hasAttribute('contenteditable') || !!t.closest('.nokey');
}
const ug = (e) => 'clientX' in e,
  Mt = (e, t) => {
    var i, l;
    const n = ug(e),
      r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX,
      o = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
    return {
      x: r - ((t == null ? void 0 : t.left) ?? 0),
      y: o - ((t == null ? void 0 : t.top) ?? 0),
    };
  },
  kf = (e, t, n, r, o) => {
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
            ...Nl(l),
          };
        });
  };
function ag({
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
function ti(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Cf({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case K.Left:
      return [t - ti(t - r, i), n];
    case K.Right:
      return [t + ti(r - t, i), n];
    case K.Top:
      return [t, n - ti(n - o, i)];
    case K.Bottom:
      return [t, n + ti(o - n, i)];
  }
}
function cg({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
  curvature: l = 0.25,
}) {
  const [s, u] = Cf({
      pos: n,
      x1: e,
      y1: t,
      x2: r,
      y2: o,
      c: l,
    }),
    [a, d] = Cf({
      pos: i,
      x1: r,
      y1: o,
      x2: e,
      y2: t,
      c: l,
    }),
    [f, c, h, m] = ag({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: s,
      sourceControlY: u,
      targetControlX: a,
      targetControlY: d,
    });
  return [`M${e},${t} C${s},${u} ${a},${d} ${r},${o}`, f, c, h, m];
}
function fg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2,
    i = n < e ? n + o : n - o,
    l = Math.abs(r - t) / 2,
    s = r < t ? r + l : r - l;
  return [i, s, o, l];
}
function wS({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o) return r;
  const i = n || t.selected || e.selected,
    l = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? l : 0);
}
function xS({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = _l(qi(e), qi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const l = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2],
  };
  return vo(l, kl(i)) > 0;
}
const SS = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ''}-${n}${r || ''}`,
  ES = (e, t) =>
    t.some(
      (n) =>
        n.source === e.source &&
        n.target === e.target &&
        (n.sourceHandle === e.sourceHandle || (!n.sourceHandle && !e.sourceHandle)) &&
        (n.targetHandle === e.targetHandle || (!n.targetHandle && !e.targetHandle)),
    ),
  dg = (e, t) => {
    if (!e.source || !e.target) return t;
    let n;
    return (
      qp(e)
        ? (n = {
            ...e,
          })
        : (n = {
            ...e,
            id: SS(e),
          }),
      ES(n, t)
        ? t
        : (n.sourceHandle === null && delete n.sourceHandle,
          n.targetHandle === null && delete n.targetHandle,
          t.concat(n))
    );
  };
function hg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, l, s] = fg({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, l, s];
}
const Nf = {
    [K.Left]: {
      x: -1,
      y: 0,
    },
    [K.Right]: {
      x: 1,
      y: 0,
    },
    [K.Top]: {
      x: 0,
      y: -1,
    },
    [K.Bottom]: {
      x: 0,
      y: 1,
    },
  },
  _S = ({ source: e, sourcePosition: t = K.Bottom, target: n }) =>
    t === K.Left || t === K.Right
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
  Mf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function kS({ source: e, sourcePosition: t = K.Bottom, target: n, targetPosition: r = K.Top, center: o, offset: i }) {
  const l = Nf[t],
    s = Nf[r],
    u = {
      x: e.x + l.x * i,
      y: e.y + l.y * i,
    },
    a = {
      x: n.x + s.x * i,
      y: n.y + s.y * i,
    },
    d = _S({
      source: u,
      sourcePosition: t,
      target: a,
    }),
    f = d.x !== 0 ? 'x' : 'y',
    c = d[f];
  let h = [],
    m,
    w;
  const S = {
      x: 0,
      y: 0,
    },
    g = {
      x: 0,
      y: 0,
    },
    [y, p, v, k] = fg({
      sourceX: e.x,
      sourceY: e.y,
      targetX: n.x,
      targetY: n.y,
    });
  if (l[f] * s[f] === -1) {
    (m = o.x ?? y), (w = o.y ?? p);
    const _ = [
        {
          x: m,
          y: u.y,
        },
        {
          x: m,
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
    l[f] === c ? (h = f === 'x' ? _ : P) : (h = f === 'x' ? P : _);
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
    if ((f === 'x' ? (h = l.x === c ? P : _) : (h = l.y === c ? _ : P), t === r)) {
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
        C = u[O] < a[O];
      ((l[f] === 1 && ((!x && I) || (x && C))) || (l[f] !== 1 && ((!x && C) || (x && I)))) && (h = f === 'x' ? _ : P);
    }
    const L = {
        x: u.x + S.x,
        y: u.y + S.y,
      },
      T = {
        x: a.x + g.x,
        y: a.y + g.y,
      },
      H = Math.max(Math.abs(L.x - h[0].x), Math.abs(T.x - h[0].x)),
      F = Math.max(Math.abs(L.y - h[0].y), Math.abs(T.y - h[0].y));
    H >= F ? ((m = (L.x + T.x) / 2), (w = h[0].y)) : ((m = h[0].x), (w = (L.y + T.y) / 2));
  }
  return [
    [
      e,
      {
        x: u.x + S.x,
        y: u.y + S.y,
      },
      ...h,
      {
        x: a.x + g.x,
        y: a.y + g.y,
      },
      n,
    ],
    m,
    w,
    v,
    k,
  ];
}
function CS(e, t, n, r) {
  const o = Math.min(Mf(e, t) / 2, Mf(t, n) / 2, r),
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
function Mu({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
  borderRadius: l = 5,
  centerX: s,
  centerY: u,
  offset: a = 20,
}) {
  const [d, f, c, h, m] = kS({
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
    d.reduce((S, g, y) => {
      let p = '';
      return (
        y > 0 && y < d.length - 1 ? (p = CS(d[y - 1], g, d[y + 1], l)) : (p = `${y === 0 ? 'M' : 'L'}${g.x} ${g.y}`),
        (S += p),
        S
      );
    }, ''),
    f,
    c,
    h,
    m,
  ];
}
function Pf(e) {
  var t;
  return (
    e &&
    !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function NS(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Pf(t) || !Pf(n)) return null;
  const r = t.internals.handleBounds || Tf(t.handles),
    o = n.internals.handleBounds || Tf(n.handles),
    i = If((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
    l = If(
      e.connectionMode === lr.Strict
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
  const s = (i == null ? void 0 : i.position) || K.Bottom,
    u = (l == null ? void 0 : l.position) || K.Top,
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
function Tf(e) {
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
function wo(e, t, n = K.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
    i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
    { width: l, height: s } = t ?? Dt(e);
  if (r)
    return {
      x: o + l / 2,
      y: i + s / 2,
    };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case K.Top:
      return {
        x: o + l / 2,
        y: i,
      };
    case K.Right:
      return {
        x: o + l,
        y: i + s / 2,
      };
    case K.Bottom:
      return {
        x: o + l / 2,
        y: i + s,
      };
    case K.Left:
      return {
        x: o,
        y: i + s / 2,
      };
  }
}
function If(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Pu(e, t) {
  return e
    ? typeof e == 'string'
      ? e
      : `${t ? `${t}__` : ''}${Object.keys(e)
          .sort()
          .map((r) => `${r}=${e[r]}`)
          .join('&')}`
    : '';
}
function MS(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = new Set();
  return e
    .reduce(
      (l, s) => (
        [s.markerStart || r, s.markerEnd || o].forEach((u) => {
          if (u && typeof u == 'object') {
            const a = Pu(u, t);
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
const $a = {
    nodeOrigin: [0, 0],
    nodeExtent: mo,
    elevateNodesOnSelect: !0,
    defaults: {},
  },
  PS = {
    ...$a,
    checkEquality: !0,
  };
function Da(e, t) {
  const n = {
    ...e,
  };
  for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function TS(e, t, n) {
  const r = Da($a, n);
  for (const o of e.values())
    if (o.parentId) Aa(o, e, t, r);
    else {
      const i = Po(o, r.nodeOrigin),
        l = ar(o.extent) ? o.extent : r.nodeExtent,
        s = Cn(i, l, Dt(o));
      o.internals.positionAbsolute = s;
    }
}
function Tu(e, t, n, r) {
  var s, u;
  const o = Da(PS, r),
    i = new Map(t),
    l = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const a of e) {
    let d = i.get(a.id);
    if (o.checkEquality && a === (d == null ? void 0 : d.internals.userNode)) t.set(a.id, d);
    else {
      const f = Po(a, o.nodeOrigin),
        c = ar(a.extent) ? a.extent : o.nodeExtent,
        h = Cn(f, c, Dt(a));
      (d = {
        ...o.defaults,
        ...a,
        measured: {
          width: (s = a.measured) == null ? void 0 : s.width,
          height: (u = a.measured) == null ? void 0 : u.height,
        },
        internals: {
          positionAbsolute: h,
          handleBounds: a.measured ? (d == null ? void 0 : d.internals.handleBounds) : void 0,
          z: pg(a, l),
          userNode: a,
        },
      }),
        t.set(a.id, d);
    }
    a.parentId && Aa(d, t, n, r);
  }
}
function IS(e, t) {
  if (!e.parentId) return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function Aa(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: l } = Da($a, r),
    s = e.parentId,
    u = t.get(s);
  if (!u) {
    console.warn(
      `Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  IS(e, n);
  const a = o ? 1e3 : 0,
    { x: d, y: f, z: c } = zS(e, u, i, l, a),
    { positionAbsolute: h } = e.internals,
    m = d !== h.x || f !== h.y;
  (m || c !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: m
          ? {
              x: d,
              y: f,
            }
          : h,
        z: c,
      },
    });
}
function pg(e, t) {
  return (ut(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function zS(e, t, n, r, o) {
  const { x: i, y: l } = t.internals.positionAbsolute,
    s = Dt(e),
    u = Po(e, n),
    a = ar(e.extent) ? Cn(u, e.extent, s) : u;
  let d = Cn(
    {
      x: i + a.x,
      y: l + a.y,
    },
    r,
    s,
  );
  e.extent === 'parent' && (d = tg(d, s, t));
  const f = pg(e, o),
    c = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: c > f ? c : f,
  };
}
function Oa(e, t, n, r = [0, 0]) {
  var l;
  const o = [],
    i = new Map();
  for (const s of e) {
    const u = t.get(s.parentId);
    if (!u) continue;
    const a = ((l = i.get(s.parentId)) == null ? void 0 : l.expandedRect) ?? ur(u),
      d = rg(a, s.rect);
    i.set(s.parentId, {
      expandedRect: d,
      parent: u,
    });
  }
  return (
    i.size > 0 &&
      i.forEach(({ expandedRect: s, parent: u }, a) => {
        var p;
        const d = u.internals.positionAbsolute,
          f = Dt(u),
          c = u.origin ?? r,
          h = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0,
          m = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0,
          w = Math.max(f.width, Math.round(s.width)),
          S = Math.max(f.height, Math.round(s.height)),
          g = (w - f.width) * c[0],
          y = (S - f.height) * c[1];
        (h > 0 || m > 0 || g || y) &&
          (o.push({
            id: a,
            type: 'position',
            position: {
              x: u.position.x - h + g,
              y: u.position.y - m + y,
            },
          }),
          (p = n.get(a)) == null ||
            p.forEach((v) => {
              e.some((k) => k.id === v.id) ||
                o.push({
                  id: v.id,
                  type: 'position',
                  position: {
                    x: v.position.x + h,
                    y: v.position.y + m,
                  },
                });
            })),
          (f.width < s.width || f.height < s.height || h || m) &&
            o.push({
              id: a,
              type: 'dimensions',
              setAttributes: !0,
              dimensions: {
                width: w + (h ? c[0] * h - g : 0),
                height: S + (m ? c[1] * m - y : 0),
              },
            });
      }),
    o
  );
}
function RS(e, t, n, r, o, i) {
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
    const h = t.get(c.id);
    if (!h) continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0,
        },
      }),
        (s = !0);
      continue;
    }
    const m = Nl(c.nodeElement),
      w = h.measured.width !== m.width || h.measured.height !== m.height;
    if (!!(m.width && m.height && (w || !h.internals.handleBounds || c.force))) {
      const g = c.nodeElement.getBoundingClientRect(),
        y = ar(h.extent) ? h.extent : i;
      let { positionAbsolute: p } = h.internals;
      h.parentId && h.extent === 'parent' ? (p = tg(p, m, t.get(h.parentId))) : y && (p = Cn(p, y, m));
      const v = {
        ...h,
        measured: m,
        internals: {
          ...h.internals,
          positionAbsolute: p,
          handleBounds: {
            source: kf('source', c.nodeElement, g, d, h.id),
            target: kf('target', c.nodeElement, g, d, h.id),
          },
        },
      };
      t.set(h.id, v),
        h.parentId &&
          Aa(v, t, n, {
            nodeOrigin: o,
          }),
        (s = !0),
        w &&
          (u.push({
            id: h.id,
            type: 'dimensions',
            dimensions: m,
          }),
          h.expandParent &&
            h.parentId &&
            f.push({
              id: h.id,
              parentId: h.parentId,
              rect: ur(v, o),
            }));
    }
  }
  if (f.length > 0) {
    const c = Oa(f, t, n, o);
    u.push(...c);
  }
  return {
    changes: u,
    updatedInternals: s,
  };
}
async function LS({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function zf(e, t, n, r, o, i) {
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
function gg(e, t, n) {
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
    zf('source', u, d, e, o, l), zf('target', u, a, e, i, s), t.set(r.id, r);
  }
}
function mg(e, t) {
  if (!e.parentId) return !1;
  const n = t.get(e.parentId);
  return n ? (n.selected ? !0 : mg(n, t)) : !1;
}
function Rf(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
    if (r === n) return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function $S(e, t, n, r) {
  const o = new Map();
  for (const [i, l] of e)
    if ((l.selected || l.id === r) && (!l.parentId || !mg(l, e)) && (l.draggable || (t && typeof l.draggable > 'u'))) {
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
function ms({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function DS({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
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
    h = !1;
  function m({
    noDragClassName: S,
    handleSelector: g,
    domNode: y,
    isSelectable: p,
    nodeId: v,
    nodeClickDistance: k = 0,
  }) {
    c = je(y);
    function M({ x: T, y: H }, F) {
      const {
        nodeLookup: O,
        nodeExtent: x,
        snapGrid: I,
        snapToGrid: C,
        nodeOrigin: $,
        onNodeDrag: E,
        onSelectionDrag: N,
        onError: z,
        updateNodePositions: A,
      } = t();
      i = {
        x: T,
        y: H,
      };
      let B = !1,
        b = {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
        };
      if (s.size > 1 && x) {
        const U = To(s);
        b = Cu(U);
      }
      for (const [U, X] of s) {
        if (!O.has(U)) continue;
        let Y = {
          x: T - X.distance.x,
          y: H - X.distance.y,
        };
        C && (Y = Cl(Y, I));
        let j = [
          [x[0][0], x[0][1]],
          [x[1][0], x[1][1]],
        ];
        if (s.size > 1 && x && !X.extent) {
          const { positionAbsolute: re } = X.internals,
            J = re.x - b.x + x[0][0],
            Q = re.x + X.measured.width - b.x2 + x[1][0],
            ne = re.y - b.y + x[0][1],
            le = re.y + X.measured.height - b.y2 + x[1][1];
          j = [
            [J, ne],
            [Q, le],
          ];
        }
        const { position: G, positionAbsolute: Z } = eg({
          nodeId: U,
          nextPosition: Y,
          nodeLookup: O,
          nodeExtent: j,
          nodeOrigin: $,
          onError: z,
        });
        (B = B || X.position.x !== G.x || X.position.y !== G.y), (X.position = G), (X.internals.positionAbsolute = Z);
      }
      if (B && (A(s, !0), F && (r || E || (!v && N)))) {
        const [U, X] = ms({
          nodeId: v,
          dragItems: s,
          nodeLookup: O,
        });
        r == null || r(F, s, U, X), E == null || E(F, U, X), v || N == null || N(F, X);
      }
    }
    async function _() {
      if (!d) return;
      const { transform: T, panBy: H, autoPanSpeed: F, autoPanOnNodeDrag: O } = t();
      if (!O) {
        (u = !1), cancelAnimationFrame(l);
        return;
      }
      const [x, I] = ng(a, d, F);
      (x !== 0 || I !== 0) &&
        ((i.x = (i.x ?? 0) - x / T[2]),
        (i.y = (i.y ?? 0) - I / T[2]),
        (await H({
          x,
          y: I,
        })) && M(i, null)),
        (l = requestAnimationFrame(_));
    }
    function P(T) {
      var B;
      const {
        nodeLookup: H,
        multiSelectionActive: F,
        nodesDraggable: O,
        transform: x,
        snapGrid: I,
        snapToGrid: C,
        selectNodesOnDrag: $,
        onNodeDragStart: E,
        onSelectionDragStart: N,
        unselectNodesAndEdges: z,
      } = t();
      (f = !0),
        (!$ || !p) && !F && v && (((B = H.get(v)) != null && B.selected) || z()),
        p && $ && v && (e == null || e(v));
      const A = Yr(T.sourceEvent, {
        transform: x,
        snapGrid: I,
        snapToGrid: C,
        containerBounds: d,
      });
      if (((i = A), (s = $S(H, O, A, v)), s.size > 0 && (n || E || (!v && N)))) {
        const [b, U] = ms({
          nodeId: v,
          dragItems: s,
          nodeLookup: H,
        });
        n == null || n(T.sourceEvent, s, b, U),
          E == null || E(T.sourceEvent, b, U),
          v || N == null || N(T.sourceEvent, U);
      }
    }
    const L = Lp()
      .clickDistance(k)
      .on('start', (T) => {
        const { domNode: H, nodeDragThreshold: F, transform: O, snapGrid: x, snapToGrid: I } = t();
        (d = (H == null ? void 0 : H.getBoundingClientRect()) || null),
          (h = !1),
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
            autoPanOnNodeDrag: H,
            transform: F,
            snapGrid: O,
            snapToGrid: x,
            nodeDragThreshold: I,
            nodeLookup: C,
          } = t(),
          $ = Yr(T.sourceEvent, {
            transform: F,
            snapGrid: O,
            snapToGrid: x,
            containerBounds: d,
          });
        if (
          (((T.sourceEvent.type === 'touchmove' && T.sourceEvent.touches.length > 1) || (v && !C.has(v))) && (h = !0),
          !h)
        ) {
          if ((!u && H && f && ((u = !0), _()), !f)) {
            const E = $.xSnapped - (i.x ?? 0),
              N = $.ySnapped - (i.y ?? 0);
            Math.sqrt(E * E + N * N) > I && P(T);
          }
          (i.x !== $.xSnapped || i.y !== $.ySnapped) && s && f && ((a = Mt(T.sourceEvent, d)), M($, T.sourceEvent));
        }
      })
      .on('end', (T) => {
        if (!(!f || h) && ((u = !1), (f = !1), cancelAnimationFrame(l), s.size > 0)) {
          const { nodeLookup: H, updateNodePositions: F, onNodeDragStop: O, onSelectionDragStop: x } = t();
          if ((F(s, !1), o || O || (!v && x))) {
            const [I, C] = ms({
              nodeId: v,
              dragItems: s,
              nodeLookup: H,
              dragging: !1,
            });
            o == null || o(T.sourceEvent, s, I, C),
              O == null || O(T.sourceEvent, I, C),
              v || x == null || x(T.sourceEvent, C);
          }
        }
      })
      .filter((T) => {
        const H = T.target;
        return !T.button && (!S || !Rf(H, `.${S}`, y)) && (!g || Rf(H, g, y));
      });
    c.call(L);
  }
  function w() {
    c == null || c.on('.drag', null);
  }
  return {
    update: m,
    destroy: w,
  };
}
function AS(e, t, n) {
  const r = [],
    o = {
      x: e.x - n,
      y: e.y - n,
      width: n * 2,
      height: n * 2,
    };
  for (const i of t.values()) vo(o, ur(i)) > 0 && r.push(i);
  return r;
}
const OS = 250;
function FS(e, t, n, r) {
  var s, u;
  let o = [],
    i = 1 / 0;
  const l = AS(e, n, t + OS);
  for (const a of l) {
    const d = [
      ...(((s = a.internals.handleBounds) == null ? void 0 : s.source) ?? []),
      ...(((u = a.internals.handleBounds) == null ? void 0 : u.target) ?? []),
    ];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id) continue;
      const { x: c, y: h } = wo(a, f, f.position, !0),
        m = Math.sqrt(Math.pow(c - e.x, 2) + Math.pow(h - e.y, 2));
      m > t ||
        (m < i
          ? ((o = [
              {
                ...f,
                x: c,
                y: h,
              },
            ]),
            (i = m))
          : m === i &&
            o.push({
              ...f,
              x: c,
              y: h,
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
function yg(e, t, n, r, o, i = !1) {
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
function vg(e, t) {
  return (
    e ||
    (t != null && t.classList.contains('target')
      ? 'target'
      : t != null && t.classList.contains('source')
        ? 'source'
        : null)
  );
}
function HS(e, t) {
  let n = null;
  return t ? (n = !0) : e && !t && (n = !1), n;
}
const wg = () => !0;
function VS(
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
    cancelConnection: h,
    onConnectStart: m,
    onConnect: w,
    onConnectEnd: S,
    isValidConnection: g = wg,
    onReconnectEnd: y,
    updateConnection: p,
    getTransform: v,
    getFromHandle: k,
    autoPanSpeed: M,
  },
) {
  const _ = sg(e.target);
  let P = 0,
    L;
  const { x: T, y: H } = Mt(e),
    F = _ == null ? void 0 : _.elementFromPoint(T, H),
    O = vg(i, F),
    x = s == null ? void 0 : s.getBoundingClientRect();
  if (!x || !O) return;
  const I = yg(o, O, r, u, t);
  if (!I) return;
  let C = Mt(e, x),
    $ = !1,
    E = null,
    N = !1,
    z = null;
  function A() {
    if (!d || !x) return;
    const [Z, re] = ng(C, x, M);
    c({
      x: Z,
      y: re,
    }),
      (P = requestAnimationFrame(A));
  }
  const B = {
      ...I,
      nodeId: o,
      type: O,
      position: I.position,
    },
    b = u.get(o),
    X = {
      inProgress: !0,
      isValid: null,
      from: wo(b, B, K.Left, !0),
      fromHandle: B,
      fromPosition: B.position,
      fromNode: b,
      to: C,
      toHandle: null,
      toPosition: xf[B.position],
      toNode: null,
    };
  p(X);
  let Y = X;
  m == null ||
    m(e, {
      nodeId: o,
      handleId: r,
      handleType: O,
    });
  function j(Z) {
    if (!k() || !B) {
      G(Z);
      return;
    }
    const re = v();
    (C = Mt(Z, x)), (L = FS(Io(C, re, !1, [1, 1]), n, u, B)), $ || (A(), ($ = !0));
    const J = xg(Z, {
      handle: L,
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
    (z = J.handleDomNode), (E = J.connection), (N = HS(!!L, J.isValid));
    const Q = {
      ...Y,
      isValid: N,
      to:
        L && N
          ? og(
              {
                x: L.x,
                y: L.y,
              },
              re,
            )
          : C,
      toHandle: J.toHandle,
      toPosition: N && J.toHandle ? J.toHandle.position : xf[B.position],
      toNode: J.toHandle ? u.get(J.toHandle.nodeId) : null,
    };
    (N &&
      L &&
      Y.toHandle &&
      Q.toHandle &&
      Y.toHandle.type === Q.toHandle.type &&
      Y.toHandle.nodeId === Q.toHandle.nodeId &&
      Y.toHandle.id === Q.toHandle.id &&
      Y.to.x === Q.to.x &&
      Y.to.y === Q.to.y) ||
      (p(Q), (Y = Q));
  }
  function G(Z) {
    (L || z) && E && N && (w == null || w(E));
    const { inProgress: re, ...J } = Y,
      Q = {
        ...J,
        toPosition: Y.toHandle ? Y.toPosition : null,
      };
    S == null || S(Z, Q),
      i && (y == null || y(Z, Q)),
      h(),
      cancelAnimationFrame(P),
      ($ = !1),
      (N = !1),
      (E = null),
      (z = null),
      _.removeEventListener('mousemove', j),
      _.removeEventListener('mouseup', G),
      _.removeEventListener('touchmove', j),
      _.removeEventListener('touchend', G);
  }
  _.addEventListener('mousemove', j),
    _.addEventListener('mouseup', G),
    _.addEventListener('touchmove', j),
    _.addEventListener('touchend', G);
}
function xg(
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
    isValidConnection: a = wg,
    nodeLookup: d,
  },
) {
  const f = i === 'target',
    c = t
      ? l.querySelector(
          `.${s}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
        )
      : null,
    { x: h, y: m } = Mt(e),
    w = l.elementFromPoint(h, m),
    S = w != null && w.classList.contains(`${s}-flow__handle`) ? w : c,
    g = {
      handleDomNode: S,
      isValid: !1,
      connection: null,
      toHandle: null,
    };
  if (S) {
    const y = vg(void 0, S),
      p = S.getAttribute('data-nodeid'),
      v = S.getAttribute('data-handleid'),
      k = S.classList.contains('connectable'),
      M = S.classList.contains('connectableend');
    if (!p || !y) return g;
    const _ = {
      source: f ? p : r,
      sourceHandle: f ? v : o,
      target: f ? r : p,
      targetHandle: f ? o : v,
    };
    g.connection = _;
    const L = k && M && (n === lr.Strict ? (f && y === 'source') || (!f && y === 'target') : p !== r || v !== o);
    (g.isValid = L && a(_)), (g.toHandle = yg(p, y, v, d, n, !1));
  }
  return g;
}
const Iu = {
  onPointerDown: VS,
  isValid: xg,
};
function BS({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = je(e);
  function i({
    translateExtent: s,
    width: u,
    height: a,
    zoomStep: d = 10,
    pannable: f = !0,
    zoomable: c = !0,
    inversePan: h = !1,
  }) {
    const m = (p) => {
      const v = n();
      if (p.sourceEvent.type !== 'wheel' || !t) return;
      const k =
          -p.sourceEvent.deltaY * (p.sourceEvent.deltaMode === 1 ? 0.05 : p.sourceEvent.deltaMode ? 1 : 0.002) * d,
        M = v[2] * Math.pow(2, k);
      t.scaleTo(M);
    };
    let w = [0, 0];
    const S = (p) => {
        (p.sourceEvent.type === 'mousedown' || p.sourceEvent.type === 'touchstart') &&
          (w = [
            p.sourceEvent.clientX ?? p.sourceEvent.touches[0].clientX,
            p.sourceEvent.clientY ?? p.sourceEvent.touches[0].clientY,
          ]);
      },
      g = (p) => {
        const v = n();
        if ((p.sourceEvent.type !== 'mousemove' && p.sourceEvent.type !== 'touchmove') || !t) return;
        const k = [
            p.sourceEvent.clientX ?? p.sourceEvent.touches[0].clientX,
            p.sourceEvent.clientY ?? p.sourceEvent.touches[0].clientY,
          ],
          M = [k[0] - w[0], k[1] - w[1]];
        w = k;
        const _ = r() * Math.max(v[2], Math.log(v[2])) * (h ? -1 : 1),
          P = {
            x: v[0] - M[0] * _,
            y: v[1] - M[1] * _,
          },
          L = [
            [0, 0],
            [u, a],
          ];
        t.setViewportConstrained(
          {
            x: P.x,
            y: P.y,
            zoom: v[2],
          },
          L,
          s,
        );
      },
      y = Kp()
        .on('start', S)
        .on('zoom', f ? g : null)
        .on('zoom.wheel', c ? m : null);
    o.call(y, {});
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
const jS = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
  Ml = (e) => ({
    x: e.x,
    y: e.y,
    zoom: e.k,
  }),
  ys = ({ x: e, y: t, zoom: n }) => El.translate(e, t).scale(n),
  Bn = (e, t) => e.target.closest(`.${t}`),
  Sg = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  vs = (e, t = 0, n = () => {}) => {
    const r = typeof t == 'number' && t > 0;
    return r || n(), r ? e.transition().duration(t).on('end', n) : e;
  },
  Eg = (e) => {
    const t = e.ctrlKey && Ji() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function US({
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
        g = Eg(d),
        y = f * Math.pow(2, g);
      r.scaleTo(n, y, S, d);
      return;
    }
    const c = d.deltaMode === 1 ? 20 : 1;
    let h = o === vn.Vertical ? 0 : d.deltaX * c,
      m = o === vn.Horizontal ? 0 : d.deltaY * c;
    !Ji() && d.shiftKey && o !== vn.Vertical && ((h = d.deltaY * c), (m = 0)),
      r.translateBy(n, -(h / f) * i, -(m / f) * i, {
        internal: !0,
      });
    const w = Ml(n.property('__zoom'));
    clearTimeout(e.panScrollTimeout),
      e.isPanScrolling || ((e.isPanScrolling = !0), s == null || s(d, w)),
      e.isPanScrolling &&
        (u == null || u(d, w),
        (e.panScrollTimeout = setTimeout(() => {
          a == null || a(d, w), (e.isPanScrolling = !1);
        }, 150)));
  };
}
function WS({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, o) {
    if ((!t && r.type === 'wheel' && !r.ctrlKey) || Bn(r, e)) return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function YS({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, l, s;
    if ((i = r.sourceEvent) != null && i.internal) return;
    const o = Ml(r.transform);
    (e.mouseButton = ((l = r.sourceEvent) == null ? void 0 : l.button) || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = o),
      ((s = r.sourceEvent) == null ? void 0 : s.type) === 'mousedown' && t(!0),
      n && (n == null || n(r.sourceEvent, o));
  };
}
function XS({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var l, s;
    (e.usedRightMouseButton = !!(n && Sg(t, e.mouseButton ?? 0))),
      ((l = i.sourceEvent) != null && l.sync) || r([i.transform.x, i.transform.y, i.transform.k]),
      o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, Ml(i.transform)));
  };
}
function bS({
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
      i && Sg(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && i(l.sourceEvent),
      (e.usedRightMouseButton = !1),
      r(!1),
      o && jS(e.prevViewport, l.transform))
    ) {
      const u = Ml(l.transform);
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
function KS({
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
    var m;
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
    if (!n && d.type === 'touchstart' && ((m = d.touches) == null ? void 0 : m.length) > 1)
      return d.preventDefault(), !1;
    if (
      (!f && !o && !c && d.type === 'wheel') ||
      (!r && (d.type === 'mousedown' || d.type === 'touchstart')) ||
      (Array.isArray(r) && !r.includes(d.button) && d.type === 'mousedown')
    )
      return !1;
    const h = (Array.isArray(r) && r.includes(d.button)) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === 'wheel') && h;
  };
}
function GS({
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
    c = Kp()
      .clickDistance(!ut(r) || r < 0 ? 0 : r)
      .scaleExtent([t, n])
      .translateExtent(o),
    h = je(e).call(c);
  p(
    {
      x: i.x,
      y: i.y,
      zoom: sr(i.zoom, t, n),
    },
    [
      [0, 0],
      [f.width, f.height],
    ],
    o,
  );
  const m = h.on('wheel.zoom'),
    w = h.on('dblclick.zoom');
  c.wheelDelta(Eg);
  function S(F, O) {
    return h
      ? new Promise((x) => {
          c == null ||
            c.transform(
              vs(h, O == null ? void 0 : O.duration, () => x(!0)),
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
    panOnScroll: C,
    panOnDrag: $,
    panOnScrollMode: E,
    panOnScrollSpeed: N,
    preventScrolling: z,
    zoomOnPinch: A,
    zoomOnScroll: B,
    zoomOnDoubleClick: b,
    zoomActivationKeyPressed: U,
    lib: X,
    onTransformChange: Y,
  }) {
    I && !d.isZoomingOrPanning && y();
    const G =
      C && !U && !I
        ? US({
            zoomPanValues: d,
            noWheelClassName: F,
            d3Selection: h,
            d3Zoom: c,
            panOnScrollMode: E,
            panOnScrollSpeed: N,
            zoomOnPinch: A,
            onPanZoomStart: s,
            onPanZoom: l,
            onPanZoomEnd: u,
          })
        : WS({
            noWheelClassName: F,
            preventScrolling: z,
            d3ZoomHandler: m,
          });
    if (
      (h.on('wheel.zoom', G, {
        passive: !1,
      }),
      !I)
    ) {
      const re = YS({
        zoomPanValues: d,
        onDraggingChange: a,
        onPanZoomStart: s,
      });
      c.on('start', re);
      const J = XS({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!x,
        onPanZoom: l,
        onTransformChange: Y,
      });
      c.on('zoom', J);
      const Q = bS({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: C,
        onPaneContextMenu: x,
        onPanZoomEnd: u,
        onDraggingChange: a,
      });
      c.on('end', Q);
    }
    const Z = KS({
      zoomActivationKeyPressed: U,
      panOnDrag: $,
      zoomOnScroll: B,
      panOnScroll: C,
      zoomOnDoubleClick: b,
      zoomOnPinch: A,
      userSelectionActive: I,
      noPanClassName: O,
      noWheelClassName: F,
      lib: X,
    });
    c.filter(Z), b ? h.on('dblclick.zoom', w) : h.on('dblclick.zoom', null);
  }
  function y() {
    c.on('zoom', null);
  }
  async function p(F, O, x) {
    const I = ys(F),
      C = c == null ? void 0 : c.constrain()(I, O, x);
    return C && (await S(C)), new Promise(($) => $(C));
  }
  async function v(F, O) {
    const x = ys(F);
    return await S(x, O), new Promise((I) => I(x));
  }
  function k(F) {
    if (h) {
      const O = ys(F),
        x = h.property('__zoom');
      (x.k !== F.zoom || x.x !== F.x || x.y !== F.y) &&
        (c == null ||
          c.transform(h, O, null, {
            sync: !0,
          }));
    }
  }
  function M() {
    const F = h
      ? bp(h.node())
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
    return h
      ? new Promise((x) => {
          c == null ||
            c.scaleTo(
              vs(h, O == null ? void 0 : O.duration, () => x(!0)),
              F,
            );
        })
      : Promise.resolve(!1);
  }
  function P(F, O) {
    return h
      ? new Promise((x) => {
          c == null ||
            c.scaleBy(
              vs(h, O == null ? void 0 : O.duration, () => x(!0)),
              F,
            );
        })
      : Promise.resolve(!1);
  }
  function L(F) {
    c == null || c.scaleExtent(F);
  }
  function T(F) {
    c == null || c.translateExtent(F);
  }
  function H(F) {
    const O = !ut(F) || F < 0 ? 0 : F;
    c == null || c.clickDistance(O);
  }
  return {
    update: g,
    destroy: y,
    setViewport: v,
    setViewportConstrained: p,
    getViewport: M,
    scaleTo: _,
    scaleBy: P,
    setScaleExtent: L,
    setTranslateExtent: T,
    syncViewport: k,
    setClickDistance: H,
  };
}
var Xr;
(function (e) {
  (e.Line = 'line'), (e.Handle = 'handle');
})(Xr || (Xr = {}));
function QS({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const l = e - t,
    s = n - r,
    u = [l > 0 ? 1 : l < 0 ? -1 : 0, s > 0 ? 1 : s < 0 ? -1 : 0];
  return l && o && (u[0] = u[0] * -1), s && i && (u[1] = u[1] * -1), u;
}
function ZS(e) {
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
function ni(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Lf(e, t) {
  return e ? !t : t;
}
function qS(e, t, n, r, o, i, l, s) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: d, isVertical: f } = t,
    c = d && f,
    { xSnapped: h, ySnapped: m } = n,
    { minWidth: w, maxWidth: S, minHeight: g, maxHeight: y } = r,
    { x: p, y: v, width: k, height: M, aspectRatio: _ } = e;
  let P = Math.floor(d ? h - e.pointerX : 0),
    L = Math.floor(f ? m - e.pointerY : 0);
  const T = k + (u ? -P : P),
    H = M + (a ? -L : L),
    F = -i[0] * k,
    O = -i[1] * M;
  let x = ni(T, w, S),
    I = ni(H, g, y);
  if (l) {
    let E = 0,
      N = 0;
    u && P < 0 ? (E = Ot(p + P + F, l[0][0])) : !u && P > 0 && (E = Ft(p + T + F, l[1][0])),
      a && L < 0 ? (N = Ot(v + L + O, l[0][1])) : !a && L > 0 && (N = Ft(v + H + O, l[1][1])),
      (x = Math.max(x, E)),
      (I = Math.max(I, N));
  }
  if (s) {
    let E = 0,
      N = 0;
    u && P > 0 ? (E = Ft(p + P, s[0][0])) : !u && P < 0 && (E = Ot(p + T, s[1][0])),
      a && L > 0 ? (N = Ft(v + L, s[0][1])) : !a && L < 0 && (N = Ot(v + H, s[1][1])),
      (x = Math.max(x, E)),
      (I = Math.max(I, N));
  }
  if (o) {
    if (d) {
      const E = ni(T / _, g, y) * _;
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
      const E = ni(H * _, w, S) / _;
      if (((I = Math.max(I, E)), l)) {
        let N = 0;
        (!u && !a) || (a && !u && c)
          ? (N = Ft(p + H * _ + F, l[1][0]) / _)
          : (N = Ot(p + (a ? L : -L) * _ + F, l[0][0]) / _),
          (I = Math.max(I, N));
      }
      if (s) {
        let N = 0;
        (!u && !a) || (a && !u && c) ? (N = Ot(p + H * _, s[1][0]) / _) : (N = Ft(p + (a ? L : -L) * _, s[0][0]) / _),
          (I = Math.max(I, N));
      }
    }
  }
  (L = L + (L < 0 ? I : -I)),
    (P = P + (P < 0 ? x : -x)),
    o &&
      (c
        ? T > H * _
          ? (L = (Lf(u, a) ? -P : P) / _)
          : (P = (Lf(u, a) ? -L : L) * _)
        : d
          ? ((L = P / _), (a = u))
          : ((P = L * _), (u = a)));
  const C = u ? p + P : p,
    $ = a ? v + L : v;
  return {
    width: k + (u ? -P : P),
    height: M + (a ? -L : L),
    x: i[0] * P * (u ? -1 : 1) + C,
    y: i[1] * L * (a ? -1 : 1) + $,
  };
}
const _g = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
  JS = {
    ..._g,
    pointerX: 0,
    pointerY: 0,
    aspectRatio: 1,
  };
function eE(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height],
  ];
}
function tE(e, t, n) {
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
function nE({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = je(e);
  function l({
    controlPosition: u,
    boundaries: a,
    keepAspectRatio: d,
    onResizeStart: f,
    onResize: c,
    onResizeEnd: h,
    shouldResize: m,
  }) {
    let w = {
        ..._g,
      },
      S = {
        ...JS,
      };
    const g = ZS(u);
    let y,
      p = null,
      v = [],
      k,
      M,
      _;
    const P = Lp()
      .on('start', (L) => {
        const { nodeLookup: T, transform: H, snapGrid: F, snapToGrid: O, nodeOrigin: x, paneDomNode: I } = n();
        if (((y = T.get(t)), !y)) return;
        p = (I == null ? void 0 : I.getBoundingClientRect()) ?? null;
        const { xSnapped: C, ySnapped: $ } = Yr(L.sourceEvent, {
          transform: H,
          snapGrid: F,
          snapToGrid: O,
          containerBounds: p,
        });
        (w = {
          width: y.measured.width ?? 0,
          height: y.measured.height ?? 0,
          x: y.position.x ?? 0,
          y: y.position.y ?? 0,
        }),
          (S = {
            ...w,
            pointerX: C,
            pointerY: $,
            aspectRatio: w.width / w.height,
          }),
          (k = void 0),
          y.parentId &&
            (y.extent === 'parent' || y.expandParent) &&
            ((k = T.get(y.parentId)), (M = k && y.extent === 'parent' ? eE(k) : void 0)),
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
            const z = tE(N, y, N.origin ?? x);
            _
              ? (_ = [
                  [Math.min(z[0][0], _[0][0]), Math.min(z[0][1], _[0][1])],
                  [Math.max(z[1][0], _[1][0]), Math.max(z[1][1], _[1][1])],
                ])
              : (_ = z);
          }
        f == null ||
          f(L, {
            ...w,
          });
      })
      .on('drag', (L) => {
        const { transform: T, snapGrid: H, snapToGrid: F, nodeOrigin: O } = n(),
          x = Yr(L.sourceEvent, {
            transform: T,
            snapGrid: H,
            snapToGrid: F,
            containerBounds: p,
          }),
          I = [];
        if (!y) return;
        const { x: C, y: $, width: E, height: N } = w,
          z = {},
          A = y.origin ?? O,
          { width: B, height: b, x: U, y: X } = qS(S, g, x, a, d, A, M, _),
          Y = B !== E,
          j = b !== N,
          G = U !== C && Y,
          Z = X !== $ && j;
        if (!G && !Z && !Y && !j) return;
        if (
          (G || Z || A[0] === 1 || A[1] === 1) &&
          ((z.x = G ? U : w.x), (z.y = Z ? X : w.y), (w.x = z.x), (w.y = z.y), v.length > 0)
        ) {
          const ne = U - C,
            le = X - $;
          for (const _e of v)
            (_e.position = {
              x: _e.position.x - ne + A[0] * (B - E),
              y: _e.position.y - le + A[1] * (b - N),
            }),
              I.push(_e);
        }
        if (
          ((Y || j) &&
            ((z.width = Y ? B : w.width), (z.height = j ? b : w.height), (w.width = z.width), (w.height = z.height)),
          k && y.expandParent)
        ) {
          const ne = A[0] * (z.width ?? 0);
          z.x && z.x < ne && ((w.x = ne), (S.x = S.x - (z.x - ne)));
          const le = A[1] * (z.height ?? 0);
          z.y && z.y < le && ((w.y = le), (S.y = S.y - (z.y - le)));
        }
        const re = QS({
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
        (m == null ? void 0 : m(L, J)) !== !1 && (c == null || c(L, J), r(z, I));
      })
      .on('end', (L) => {
        h == null ||
          h(L, {
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
var kg = {
    exports: {},
  },
  Cg = {},
  Ng = {
    exports: {},
  },
  Mg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr = D;
function rE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var oE = typeof Object.is == 'function' ? Object.is : rE,
  iE = cr.useState,
  lE = cr.useEffect,
  sE = cr.useLayoutEffect,
  uE = cr.useDebugValue;
function aE(e, t) {
  var n = t(),
    r = iE({
      inst: {
        value: n,
        getSnapshot: t,
      },
    }),
    o = r[0].inst,
    i = r[1];
  return (
    sE(
      function () {
        (o.value = n),
          (o.getSnapshot = t),
          ws(o) &&
            i({
              inst: o,
            });
      },
      [e, n, t],
    ),
    lE(
      function () {
        return (
          ws(o) &&
            i({
              inst: o,
            }),
          e(function () {
            ws(o) &&
              i({
                inst: o,
              });
          })
        );
      },
      [e],
    ),
    uE(n),
    n
  );
}
function ws(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !oE(e, n);
  } catch {
    return !0;
  }
}
function cE(e, t) {
  return t();
}
var fE = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? cE : aE;
Mg.useSyncExternalStore = cr.useSyncExternalStore !== void 0 ? cr.useSyncExternalStore : fE;
Ng.exports = Mg;
var dE = Ng.exports;

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl = D,
  hE = dE;
function pE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gE = typeof Object.is == 'function' ? Object.is : pE,
  mE = hE.useSyncExternalStore,
  yE = Pl.useRef,
  vE = Pl.useEffect,
  wE = Pl.useMemo,
  xE = Pl.useDebugValue;
Cg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = yE(null);
  if (i.current === null) {
    var l = {
      hasValue: !1,
      value: null,
    };
    i.current = l;
  } else l = i.current;
  i = wE(
    function () {
      function u(h) {
        if (!a) {
          if (((a = !0), (d = h), (h = r(h)), o !== void 0 && l.hasValue)) {
            var m = l.value;
            if (o(m, h)) return (f = m);
          }
          return (f = h);
        }
        if (((m = f), gE(d, h))) return m;
        var w = r(h);
        return o !== void 0 && o(m, w) ? m : ((d = h), (f = w));
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
  var s = mE(e, i[0], i[1]);
  return (
    vE(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s],
    ),
    xE(s),
    s
  );
};
kg.exports = Cg;
var SE = kg.exports;
const EE = id(SE),
  $f = (e) => {
    let t;
    const n = new Set(),
      r = (d, f) => {
        const c = typeof d == 'function' ? d(t) : d;
        if (!Object.is(c, t)) {
          const h = t;
          (t = (f ?? (typeof c != 'object' || c === null)) ? c : Object.assign({}, t, c)), n.forEach((m) => m(t, h));
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
  _E = (e) => (e ? $f(e) : $f),
  { useDebugValue: kE } = md,
  { useSyncExternalStoreWithSelector: CE } = EE,
  NE = (e) => e;
function Pg(e, t = NE, n) {
  const r = CE(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return kE(r), r;
}
const Df = (e, t) => {
    const n = _E(e),
      r = (o, i = t) => Pg(n, o, i);
    return Object.assign(r, n), r;
  },
  ME = (e, t) => (e ? Df(e, t) : Df);
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
const Tl = D.createContext(null),
  PE = Tl.Provider,
  Tg = $t.error001();
function ee(e, t) {
  const n = D.useContext(Tl);
  if (n === null) throw new Error(Tg);
  return Pg(n, e, t);
}
function ce() {
  const e = D.useContext(Tl);
  if (e === null) throw new Error(Tg);
  return D.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const Af = {
    display: 'none',
  },
  TE = {
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
  Ig = 'react-flow__node-desc',
  zg = 'react-flow__edge-desc',
  IE = 'react-flow__aria-live',
  zE = (e) => e.ariaLiveMessage;
function RE({ rfId: e }) {
  const t = ee(zE);
  return R.jsx('div', {
    id: `${IE}-${e}`,
    'aria-live': 'assertive',
    'aria-atomic': 'true',
    style: TE,
    children: t,
  });
}
function LE({ rfId: e, disableKeyboardA11y: t }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsxs('div', {
        id: `${Ig}-${e}`,
        style: Af,
        children: [
          'Press enter or space to select a node.',
          !t && 'You can then use the arrow keys to move the node around.',
          ' Press delete to remove it and escape to cancel.',
          ' ',
        ],
      }),
      R.jsx('div', {
        id: `${zg}-${e}`,
        style: Af,
        children: 'Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.',
      }),
      !t &&
        R.jsx(RE, {
          rfId: e,
        }),
    ],
  });
}
const $E = (e) => (e.userSelectionActive ? 'none' : 'all'),
  Il = D.forwardRef(({ position: e = 'top-left', children: t, className: n, style: r, ...o }, i) => {
    const l = ee($E),
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
Il.displayName = 'Panel';
function DE({ proOptions: e, position: t = 'bottom-right' }) {
  return e != null && e.hideAttribution
    ? null
    : R.jsx(Il, {
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
const AE = (e) => {
    const t = [],
      n = [];
    for (const [, r] of e.nodeLookup) r.selected && t.push(r.internals.userNode);
    for (const [, r] of e.edgeLookup) r.selected && n.push(r);
    return {
      selectedNodes: t,
      selectedEdges: n,
    };
  },
  ri = (e) => e.id;
function OE(e, t) {
  return ge(e.selectedNodes.map(ri), t.selectedNodes.map(ri)) && ge(e.selectedEdges.map(ri), t.selectedEdges.map(ri));
}
function FE({ onSelectionChange: e }) {
  const t = ce(),
    { selectedNodes: n, selectedEdges: r } = ee(AE, OE);
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
const HE = (e) => !!e.onSelectionChangeHandlers;
function VE({ onSelectionChange: e }) {
  const t = ee(HE);
  return e || t
    ? R.jsx(FE, {
        onSelectionChange: e,
      })
    : null;
}
const Rg = [0, 0],
  BE = {
    x: 0,
    y: 0,
    zoom: 1,
  },
  jE = [
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
  Of = [...jE, 'rfId'],
  UE = (e) => ({
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
  Ff = {
    translateExtent: mo,
    nodeOrigin: Rg,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: 'nopan',
    rfId: '1',
    paneClickDistance: 0,
  };
function WE(e) {
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
    } = ee(UE, ge),
    d = ce();
  D.useEffect(
    () => (
      u(e.defaultNodes, e.defaultEdges),
      () => {
        (f.current = Ff), s();
      }
    ),
    [],
  );
  const f = D.useRef(Ff);
  return (
    D.useEffect(
      () => {
        for (const c of Of) {
          const h = e[c],
            m = f.current[c];
          h !== m &&
            (typeof e[c] > 'u' ||
              (c === 'nodes'
                ? t(h)
                : c === 'edges'
                  ? n(h)
                  : c === 'minZoom'
                    ? r(h)
                    : c === 'maxZoom'
                      ? o(h)
                      : c === 'translateExtent'
                        ? i(h)
                        : c === 'nodeExtent'
                          ? l(h)
                          : c === 'paneClickDistance'
                            ? a(h)
                            : c === 'fitView'
                              ? d.setState({
                                  fitViewOnInit: h,
                                })
                              : c === 'fitViewOptions'
                                ? d.setState({
                                    fitViewOnInitOptions: h,
                                  })
                                : d.setState({
                                    [c]: h,
                                  })));
        }
        f.current = e;
      },
      Of.map((c) => e[c]),
    ),
    null
  );
}
function Hf() {
  return typeof window > 'u' || !window.matchMedia ? null : window.matchMedia('(prefers-color-scheme: dark)');
}
function YE(e) {
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
const Vf = typeof document < 'u' ? document : null;
function xo(
  e = null,
  t = {
    target: Vf,
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
      const u = (t == null ? void 0 : t.target) || Vf;
      if (e !== null) {
        const a = (c) => {
            if (
              ((o.current = c.ctrlKey || c.metaKey || c.shiftKey),
              (!o.current || (o.current && !t.actInsideInputWithModifier)) && Nu(c))
            )
              return !1;
            const m = jf(c.code, s);
            i.current.add(c[m]), Bf(l, i.current, !1) && (c.preventDefault(), r(!0));
          },
          d = (c) => {
            if ((!o.current || (o.current && !t.actInsideInputWithModifier)) && Nu(c)) return !1;
            const m = jf(c.code, s);
            Bf(l, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(c[m]),
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
function jf(e, t) {
  return t.includes(e) ? 'code' : 'key';
}
const XE = () => {
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
        const s = _u(n, t),
          { width: u, height: a } = Nl(l);
        return ku(
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
          u = La(t, r, o, i, l, (n == null ? void 0 : n.padding) ?? 0.1);
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
          l = og(t, n);
        return {
          x: l.x + o,
          y: l.y + i,
        };
      },
    }),
    [],
  );
};
function Lg(e, t) {
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
    for (const u of l) bE(u, s);
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
function bE(e, t) {
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
function $g(e, t) {
  return Lg(e, t);
}
function Dg(e, t) {
  return Lg(e, t);
}
function cn(e, t) {
  return {
    id: e,
    type: 'select',
    selected: t,
  };
}
function jn(e, t = new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const l = t.has(o);
    !(i.selected === void 0 && !l) && i.selected !== l && (n && (i.selected = l), r.push(cn(i.id, l)));
  }
  return r;
}
function Uf({ items: e = [], lookup: t }) {
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
function Wf(e) {
  return {
    id: e.id,
    type: 'remove',
  };
}
const Yf = (e) => hS(e),
  KE = (e) => qp(e);
function Ag(e) {
  return D.forwardRef(e);
}
const GE = typeof window < 'u' ? D.useLayoutEffect : D.useEffect;
function Xf(e) {
  const [t, n] = D.useState(BigInt(0)),
    [r] = D.useState(() => QE(() => n((o) => o + BigInt(1))));
  return (
    GE(() => {
      const o = r.get();
      o.length && (e(o), r.reset());
    }, [t]),
    r
  );
}
function QE(e) {
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
const Og = D.createContext(null);
function ZE({ children: e }) {
  const t = ce(),
    n = D.useCallback((s) => {
      const { nodes: u = [], setNodes: a, hasDefaultNodes: d, onNodesChange: f, nodeLookup: c } = t.getState();
      let h = u;
      for (const m of s) h = typeof m == 'function' ? m(h) : m;
      d
        ? a(h)
        : f &&
          f(
            Uf({
              items: h,
              lookup: c,
            }),
          );
    }, []),
    r = Xf(n),
    o = D.useCallback((s) => {
      const { edges: u = [], setEdges: a, hasDefaultEdges: d, onEdgesChange: f, edgeLookup: c } = t.getState();
      let h = u;
      for (const m of s) h = typeof m == 'function' ? m(h) : m;
      d
        ? a(h)
        : f &&
          f(
            Uf({
              items: h,
              lookup: c,
            }),
          );
    }, []),
    i = Xf(o),
    l = D.useMemo(
      () => ({
        nodeQueue: r,
        edgeQueue: i,
      }),
      [],
    );
  return R.jsx(Og.Provider, {
    value: l,
    children: e,
  });
}
function qE() {
  const e = D.useContext(Og);
  if (!e) throw new Error('useBatchContext must be used within a BatchProvider');
  return e;
}
const JE = (e) => !!e.panZoom;
function Fa() {
  const e = XE(),
    t = ce(),
    n = qE(),
    r = ee(JE),
    o = D.useMemo(() => {
      const i = (f) => t.getState().nodeLookup.get(f),
        l = (f) => {
          n.nodeQueue.push(f);
        },
        s = (f) => {
          n.edgeQueue.push(f);
        },
        u = (f) => {
          var g, y;
          const { nodeLookup: c, nodeOrigin: h } = t.getState(),
            m = Yf(f) ? f : c.get(f.id),
            w = m.parentId ? lg(m.position, m.measured, m.parentId, c, h) : m.position,
            S = {
              ...m,
              position: w,
              width: ((g = m.measured) == null ? void 0 : g.width) ?? m.width,
              height: ((y = m.measured) == null ? void 0 : y.height) ?? m.height,
            };
          return ur(S);
        },
        a = (
          f,
          c,
          h = {
            replace: !1,
          },
        ) => {
          l((m) =>
            m.map((w) => {
              if (w.id === f) {
                const S = typeof c == 'function' ? c(w) : c;
                return h.replace && Yf(S)
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
          h = {
            replace: !1,
          },
        ) => {
          s((m) =>
            m.map((w) => {
              if (w.id === f) {
                const S = typeof c == 'function' ? c(w) : c;
                return h.replace && KE(S)
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
          n.nodeQueue.push((h) => [...h, ...c]);
        },
        addEdges: (f) => {
          const c = Array.isArray(f) ? f : [f];
          n.edgeQueue.push((h) => [...h, ...c]);
        },
        toObject: () => {
          const { nodes: f = [], edges: c = [], transform: h } = t.getState(),
            [m, w, S] = h;
          return {
            nodes: f.map((g) => ({
              ...g,
            })),
            edges: c.map((g) => ({
              ...g,
            })),
            viewport: {
              x: m,
              y: w,
              zoom: S,
            },
          };
        },
        deleteElements: async ({ nodes: f = [], edges: c = [] }) => {
          const {
              nodes: h,
              edges: m,
              onNodesDelete: w,
              onEdgesDelete: S,
              triggerNodeChanges: g,
              triggerEdgeChanges: y,
              onDelete: p,
              onBeforeDelete: v,
            } = t.getState(),
            { nodes: k, edges: M } = await mS({
              nodesToRemove: f,
              edgesToRemove: c,
              nodes: h,
              edges: m,
              onBeforeDelete: v,
            }),
            _ = M.length > 0,
            P = k.length > 0;
          if (_) {
            const L = M.map(Wf);
            S == null || S(M), y(L);
          }
          if (P) {
            const L = k.map(Wf);
            w == null || w(k), g(L);
          }
          return (
            (P || _) &&
              (p == null ||
                p({
                  nodes: k,
                  edges: M,
                })),
            {
              deletedNodes: k,
              deletedEdges: M,
            }
          );
        },
        getIntersectingNodes: (f, c = !0, h) => {
          const m = Ef(f),
            w = m ? f : u(f),
            S = h !== void 0;
          return w
            ? (h || t.getState().nodes).filter((g) => {
                const y = t.getState().nodeLookup.get(g.id);
                if (y && !m && (g.id === f.id || !y.internals.positionAbsolute)) return !1;
                const p = ur(S ? g : y),
                  v = vo(p, w);
                return (c && v > 0) || v >= w.width * w.height;
              })
            : [];
        },
        isNodeIntersecting: (f, c, h = !0) => {
          const w = Ef(f) ? f : u(f);
          if (!w) return !1;
          const S = vo(w, c);
          return (h && S > 0) || S >= w.width * w.height;
        },
        updateNode: a,
        updateNodeData: (
          f,
          c,
          h = {
            replace: !1,
          },
        ) => {
          a(
            f,
            (m) => {
              const w = typeof c == 'function' ? c(m) : c;
              return h.replace
                ? {
                    ...m,
                    data: w,
                  }
                : {
                    ...m,
                    data: {
                      ...m.data,
                      ...w,
                    },
                  };
            },
            h,
          );
        },
        updateEdge: d,
        updateEdgeData: (
          f,
          c,
          h = {
            replace: !1,
          },
        ) => {
          d(
            f,
            (m) => {
              const w = typeof c == 'function' ? c(m) : c;
              return h.replace
                ? {
                    ...m,
                    data: w,
                  }
                : {
                    ...m,
                    data: {
                      ...m.data,
                      ...w,
                    },
                  };
            },
            h,
          );
        },
        getNodesBounds: (f) => {
          const { nodeLookup: c, nodeOrigin: h } = t.getState();
          return pS(f, {
            nodeLookup: c,
            nodeOrigin: h,
          });
        },
        getHandleConnections: ({ type: f, id: c, nodeId: h }) => {
          var m;
          return Array.from(
            ((m = t.getState().connectionLookup.get(`${h}-${f}${c ? `-${c}` : ''}`)) == null ? void 0 : m.values()) ??
              [],
          );
        },
        getNodeConnections: ({ type: f, handleId: c, nodeId: h }) => {
          var m;
          return Array.from(
            ((m = t.getState().connectionLookup.get(`${h}${f ? (c ? `-${f}-${c}` : `-${f}`) : ''}`)) == null
              ? void 0
              : m.values()) ?? [],
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
  e_ = {
    actInsideInputWithModifier: !1,
  },
  t_ = typeof window < 'u' ? window : void 0;
function n_({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = ce(),
    { deleteElements: r } = Fa(),
    o = xo(e, e_),
    i = xo(t, {
      target: t_,
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
function r_(e) {
  const t = ce();
  D.useEffect(() => {
    const n = () => {
      var o, i;
      if (!e.current) return !1;
      const r = Nl(e.current);
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
const zl = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  o_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
  });
function i_({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: n = !0,
  panOnScroll: r = !1,
  panOnScrollSpeed: o = 0.5,
  panOnScrollMode: i = vn.Free,
  zoomOnDoubleClick: l = !0,
  panOnDrag: s = !0,
  defaultViewport: u,
  translateExtent: a,
  minZoom: d,
  maxZoom: f,
  zoomActivationKeyCode: c,
  preventScrolling: h = !0,
  children: m,
  noWheelClassName: w,
  noPanClassName: S,
  onViewportChange: g,
  isControlledViewport: y,
  paneClickDistance: p,
}) {
  const v = ce(),
    k = D.useRef(null),
    { userSelectionActive: M, lib: _ } = ee(o_, ge),
    P = xo(c),
    L = D.useRef();
  r_(k);
  const T = D.useCallback(
    (H) => {
      g == null ||
        g({
          x: H[0],
          y: H[1],
          zoom: H[2],
        }),
        y ||
          v.setState({
            transform: H,
          });
    },
    [g, y],
  );
  return (
    D.useEffect(() => {
      if (k.current) {
        L.current = GS({
          domNode: k.current,
          minZoom: d,
          maxZoom: f,
          translateExtent: a,
          viewport: u,
          paneClickDistance: p,
          onDraggingChange: (x) =>
            v.setState({
              paneDragging: x,
            }),
          onPanZoomStart: (x, I) => {
            const { onViewportChangeStart: C, onMoveStart: $ } = v.getState();
            $ == null || $(x, I), C == null || C(I);
          },
          onPanZoom: (x, I) => {
            const { onViewportChange: C, onMove: $ } = v.getState();
            $ == null || $(x, I), C == null || C(I);
          },
          onPanZoomEnd: (x, I) => {
            const { onViewportChangeEnd: C, onMoveEnd: $ } = v.getState();
            $ == null || $(x, I), C == null || C(I);
          },
        });
        const { x: H, y: F, zoom: O } = L.current.getViewport();
        return (
          v.setState({
            panZoom: L.current,
            transform: [H, F, O],
            domNode: k.current.closest('.react-flow'),
          }),
          () => {
            var x;
            (x = L.current) == null || x.destroy();
          }
        );
      }
    }, []),
    D.useEffect(() => {
      var H;
      (H = L.current) == null ||
        H.update({
          onPaneContextMenu: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnScroll: r,
          panOnScrollSpeed: o,
          panOnScrollMode: i,
          zoomOnDoubleClick: l,
          panOnDrag: s,
          zoomActivationKeyPressed: P,
          preventScrolling: h,
          noPanClassName: S,
          userSelectionActive: M,
          noWheelClassName: w,
          lib: _,
          onTransformChange: T,
        });
    }, [e, t, n, r, o, i, l, s, P, h, S, M, w, _, T]),
    R.jsx('div', {
      className: 'react-flow__renderer',
      ref: k,
      style: zl,
      children: m,
    })
  );
}
const l_ = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function s_() {
  const { userSelectionActive: e, userSelectionRect: t } = ee(l_, ge);
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
const xs = (e, t) => (n) => {
    n.target === t.current && (e == null || e(n));
  },
  u_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging,
  });
function a_({
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
  children: h,
}) {
  const m = ce(),
    { userSelectionActive: w, elementsSelectable: S, dragging: g } = ee(u_, ge),
    y = S && (e || w),
    p = D.useRef(null),
    v = D.useRef(),
    k = D.useRef(new Set()),
    M = D.useRef(new Set()),
    _ = D.useRef(!1),
    P = D.useRef(!1),
    L = (C) => {
      if (_.current) {
        _.current = !1;
        return;
      }
      s == null || s(C),
        m.getState().resetSelectedElements(),
        m.setState({
          nodesSelectionActive: !1,
        });
    },
    T = (C) => {
      if (Array.isArray(r) && r != null && r.includes(2)) {
        C.preventDefault();
        return;
      }
      u == null || u(C);
    },
    H = a ? (C) => a(C) : void 0,
    F = (C) => {
      var A, B;
      const { resetSelectedElements: $, domNode: E } = m.getState();
      if (
        ((v.current = E == null ? void 0 : E.getBoundingClientRect()),
        !S || !e || C.button !== 0 || C.target !== p.current || !v.current)
      )
        return;
      (B = (A = C.target) == null ? void 0 : A.setPointerCapture) == null || B.call(A, C.pointerId),
        (P.current = !0),
        (_.current = !1);
      const { x: N, y: z } = Mt(C.nativeEvent, v.current);
      $(),
        m.setState({
          userSelectionRect: {
            width: 0,
            height: 0,
            startX: N,
            startY: z,
            x: N,
            y: z,
          },
        }),
        i == null || i(C);
    },
    O = (C) => {
      const {
        userSelectionRect: $,
        transform: E,
        nodeLookup: N,
        edgeLookup: z,
        connectionLookup: A,
        triggerNodeChanges: B,
        triggerEdgeChanges: b,
        defaultEdgeOptions: U,
      } = m.getState();
      if (!v.current || !$) return;
      _.current = !0;
      const { x: X, y: Y } = Mt(C.nativeEvent, v.current),
        { startX: j, startY: G } = $,
        Z = {
          startX: j,
          startY: G,
          x: X < j ? X : j,
          y: Y < G ? Y : G,
          width: Math.abs(X - j),
          height: Math.abs(Y - G),
        },
        re = k.current,
        J = M.current;
      (k.current = new Set(Jp(N, Z, E, n === yo.Partial, !0).map((ne) => ne.id))), (M.current = new Set());
      const Q = (U == null ? void 0 : U.selectable) ?? !0;
      for (const ne of k.current) {
        const le = A.get(ne);
        if (le)
          for (const { edgeId: _e } of le.values()) {
            const tt = z.get(_e);
            tt && (tt.selectable ?? Q) && M.current.add(_e);
          }
      }
      if (!_f(re, k.current)) {
        const ne = jn(N, k.current, !0);
        B(ne);
      }
      if (!_f(J, M.current)) {
        const ne = jn(z, M.current);
        b(ne);
      }
      m.setState({
        userSelectionRect: Z,
        userSelectionActive: !0,
        nodesSelectionActive: !1,
      });
    },
    x = (C) => {
      var E, N;
      if (C.button !== 0 || !P.current) return;
      (N = (E = C.target) == null ? void 0 : E.releasePointerCapture) == null || N.call(E, C.pointerId);
      const { userSelectionRect: $ } = m.getState();
      !w && $ && C.target === p.current && (L == null || L(C)),
        m.setState({
          userSelectionActive: !1,
          userSelectionRect: null,
          nodesSelectionActive: k.current.size > 0,
        }),
        l == null || l(C),
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
    onClick: y ? void 0 : xs(L, p),
    onContextMenu: xs(T, p),
    onWheel: xs(H, p),
    onPointerEnter: y ? void 0 : d,
    onPointerDown: y ? F : f,
    onPointerMove: y ? O : f,
    onPointerUp: y ? x : void 0,
    onPointerLeave: c,
    ref: p,
    style: zl,
    children: [h, R.jsx(s_, {})],
  });
}
function zu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
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
function Fg({
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
      d.current = DS({
        getStoreItems: () => s.getState(),
        onNodeMouseDown: (f) => {
          zu({
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
            var h;
            (h = d.current) == null || h.destroy();
          }
        );
    }, [n, r, t, i, e, o]),
    u
  );
}
const c_ = (e) => (t) => t.selected && (t.draggable || (e && typeof t.draggable > 'u'));
function Hg() {
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
      c = c_(l),
      h = o ? i[0] : 5,
      m = o ? i[1] : 5,
      w = n.direction.x * h * n.factor,
      S = n.direction.y * m * n.factor;
    for (const [, g] of a) {
      if (!c(g)) continue;
      let y = {
        x: g.internals.positionAbsolute.x + w,
        y: g.internals.positionAbsolute.y + S,
      };
      o && (y = Cl(y, i));
      const { position: p, positionAbsolute: v } = eg({
        nodeId: g.id,
        nextPosition: y,
        nodeLookup: a,
        nodeExtent: r,
        nodeOrigin: d,
        onError: s,
      });
      (g.position = p), (g.internals.positionAbsolute = v), f.set(g.id, g);
    }
    u(f);
  }, []);
}
const Ha = D.createContext(null),
  f_ = Ha.Provider;
Ha.Consumer;
const Vg = () => D.useContext(Ha),
  d_ = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  h_ = (e, t, n) => (r) => {
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
        i === lr.Strict
          ? (s == null ? void 0 : s.type) !== n
          : e !== (s == null ? void 0 : s.nodeId) || t !== (s == null ? void 0 : s.id),
      connectionInProcess: !!s,
      valid: d && a,
    };
  };
function p_(
  {
    type: e = 'source',
    position: t = K.Top,
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
  h,
) {
  var x, I;
  const m = l || null,
    w = e === 'target',
    S = ce(),
    g = Vg(),
    { connectOnClick: y, noPanClassName: p, rfId: v } = ee(d_, ge),
    {
      connectingFrom: k,
      connectingTo: M,
      clickConnecting: _,
      isPossibleEndHandle: P,
      connectionInProcess: L,
      valid: T,
    } = ee(h_(g, m, e), ge);
  g || (I = (x = S.getState()).onError) == null || I.call(x, '010', $t.error010());
  const H = (C) => {
      const { defaultEdgeOptions: $, onConnect: E, hasDefaultEdges: N } = S.getState(),
        z = {
          ...$,
          ...C,
        };
      if (N) {
        const { edges: A, setEdges: B } = S.getState();
        B(dg(z, A));
      }
      E == null || E(z), s == null || s(z);
    },
    F = (C) => {
      if (!g) return;
      const $ = ug(C.nativeEvent);
      if (o && (($ && C.button === 0) || !$)) {
        const E = S.getState();
        Iu.onPointerDown(C.nativeEvent, {
          autoPanOnConnect: E.autoPanOnConnect,
          connectionMode: E.connectionMode,
          connectionRadius: E.connectionRadius,
          domNode: E.domNode,
          nodeLookup: E.nodeLookup,
          lib: E.lib,
          isTarget: w,
          handleId: m,
          nodeId: g,
          flowId: E.rfId,
          panBy: E.panBy,
          cancelConnection: E.cancelConnection,
          onConnectStart: E.onConnectStart,
          onConnectEnd: E.onConnectEnd,
          updateConnection: E.updateConnection,
          onConnect: H,
          isValidConnection: n || E.isValidConnection,
          getTransform: () => S.getState().transform,
          getFromHandle: () => S.getState().connection.fromHandle,
          autoPanSpeed: E.autoPanSpeed,
        });
      }
      $ ? d == null || d(C) : f == null || f(C);
    },
    O = (C) => {
      const {
        onClickConnectStart: $,
        onClickConnectEnd: E,
        connectionClickStartHandle: N,
        connectionMode: z,
        isValidConnection: A,
        lib: B,
        rfId: b,
        nodeLookup: U,
        connection: X,
      } = S.getState();
      if (!g || (!N && !o)) return;
      if (!N) {
        $ == null ||
          $(C.nativeEvent, {
            nodeId: g,
            handleId: m,
            handleType: e,
          }),
          S.setState({
            connectionClickStartHandle: {
              nodeId: g,
              type: e,
              id: m,
            },
          });
        return;
      }
      const Y = sg(C.target),
        j = n || A,
        { connection: G, isValid: Z } = Iu.isValid(C.nativeEvent, {
          handle: {
            nodeId: g,
            id: m,
            type: e,
          },
          connectionMode: z,
          fromNodeId: N.nodeId,
          fromHandleId: N.id || null,
          fromType: N.type,
          isValidConnection: j,
          flowId: b,
          doc: Y,
          lib: B,
          nodeLookup: U,
        });
      Z && G && H(G);
      const re = structuredClone(X);
      delete re.inProgress,
        (re.toPosition = re.toHandle ? re.toHandle.position : null),
        E == null || E(C, re),
        S.setState({
          connectionClickStartHandle: null,
        });
    };
  return R.jsx('div', {
    'data-handleid': m,
    'data-nodeid': g,
    'data-handlepos': t,
    'data-id': `${v}-${g}-${m}-${e}`,
    className: ve([
      'react-flow__handle',
      `react-flow__handle-${t}`,
      'nodrag',
      p,
      a,
      {
        source: !w,
        target: w,
        connectable: r,
        connectablestart: o,
        connectableend: i,
        clickconnecting: _,
        connectingfrom: k,
        connectingto: M,
        valid: T,
        connectionindicator: r && (!L || P) && (L ? i : o),
      },
    ]),
    onMouseDown: F,
    onTouchStart: F,
    onClick: y ? O : void 0,
    ref: h,
    ...c,
    children: u,
  });
}
const el = D.memo(Ag(p_));
function g_({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
  return R.jsxs(R.Fragment, {
    children: [
      e == null ? void 0 : e.label,
      R.jsx(el, {
        type: 'source',
        position: n,
        isConnectable: t,
      }),
    ],
  });
}
function m_({ data: e, isConnectable: t, targetPosition: n = K.Top, sourcePosition: r = K.Bottom }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(el, {
        type: 'target',
        position: n,
        isConnectable: t,
      }),
      e == null ? void 0 : e.label,
      R.jsx(el, {
        type: 'source',
        position: r,
        isConnectable: t,
      }),
    ],
  });
}
function y_() {
  return null;
}
function v_({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx(el, {
        type: 'target',
        position: n,
        isConnectable: t,
      }),
      e == null ? void 0 : e.label,
    ],
  });
}
const tl = {
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
  Kf = {
    input: g_,
    default: m_,
    output: v_,
    group: y_,
  };
function w_(e) {
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
const x_ = (e) => {
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
function S_({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = ce(),
    { width: o, height: i, transformString: l, userSelectionActive: s } = ee(x_, ge),
    u = Hg(),
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
    Fg({
      nodeRef: a,
    }),
    s || !o || !i)
  )
    return null;
  const d = e
      ? (c) => {
          const h = r.getState().nodes.filter((m) => m.selected);
          e(c, h);
        }
      : void 0,
    f = (c) => {
      Object.prototype.hasOwnProperty.call(tl, c.key) &&
        (c.preventDefault(),
        u({
          direction: tl[c.key],
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
const Gf = typeof window < 'u' ? window : void 0,
  E_ = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function Bg({
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
  onSelectionEnd: h,
  multiSelectionKeyCode: m,
  panActivationKeyCode: w,
  zoomActivationKeyCode: S,
  elementsSelectable: g,
  zoomOnScroll: y,
  zoomOnPinch: p,
  panOnScroll: v,
  panOnScrollSpeed: k,
  panOnScrollMode: M,
  zoomOnDoubleClick: _,
  panOnDrag: P,
  defaultViewport: L,
  translateExtent: T,
  minZoom: H,
  maxZoom: F,
  preventScrolling: O,
  onSelectionContextMenu: x,
  noWheelClassName: I,
  noPanClassName: C,
  disableKeyboardA11y: $,
  onViewportChange: E,
  isControlledViewport: N,
}) {
  const { nodesSelectionActive: z, userSelectionActive: A } = ee(E_),
    B = xo(a, {
      target: Gf,
    }),
    b = xo(w, {
      target: Gf,
    }),
    U = b || P,
    X = b || v,
    Y = d && U !== !0,
    j = B || A || Y;
  return (
    n_({
      deleteKeyCode: u,
      multiSelectionKeyCode: m,
    }),
    R.jsx(i_, {
      onPaneContextMenu: i,
      elementsSelectable: g,
      zoomOnScroll: y,
      zoomOnPinch: p,
      panOnScroll: X,
      panOnScrollSpeed: k,
      panOnScrollMode: M,
      zoomOnDoubleClick: _,
      panOnDrag: !B && U,
      defaultViewport: L,
      translateExtent: T,
      minZoom: H,
      maxZoom: F,
      zoomActivationKeyCode: S,
      preventScrolling: O,
      noWheelClassName: I,
      noPanClassName: C,
      onViewportChange: E,
      isControlledViewport: N,
      paneClickDistance: s,
      children: R.jsxs(a_, {
        onSelectionStart: c,
        onSelectionEnd: h,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: o,
        onPaneContextMenu: i,
        onPaneScroll: l,
        panOnDrag: U,
        isSelecting: !!j,
        selectionMode: f,
        selectionKeyPressed: B,
        selectionOnDrag: Y,
        children: [
          e,
          z &&
            R.jsx(S_, {
              onSelectionContextMenu: x,
              noPanClassName: C,
              disableKeyboardA11y: $,
            }),
        ],
      }),
    })
  );
}
Bg.displayName = 'FlowRenderer';
const __ = D.memo(Bg),
  k_ = (e) => (t) =>
    e
      ? Jp(
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
function C_(e) {
  return ee(D.useCallback(k_(e), [e]), ge);
}
const N_ = (e) => e.updateNodeInternals;
function M_() {
  const e = ee(N_),
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
function P_({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
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
          h = u.current !== e.targetPosition;
        (f || c || h) &&
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
function T_({
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
  noPanClassName: h,
  disableKeyboardA11y: m,
  rfId: w,
  nodeTypes: S,
  nodeClickDistance: g,
  onError: y,
}) {
  const {
    node: p,
    internals: v,
    isParent: k,
  } = ee((j) => {
    const G = j.nodeLookup.get(e),
      Z = j.parentLookup.has(e);
    return {
      node: G,
      internals: G.internals,
      isParent: Z,
    };
  }, ge);
  let M = p.type || 'default',
    _ = (S == null ? void 0 : S[M]) || Kf[M];
  _ === void 0 && (y == null || y('003', $t.error003(M)), (M = 'default'), (_ = Kf.default));
  const P = !!(p.draggable || (s && typeof p.draggable > 'u')),
    L = !!(p.selectable || (u && typeof p.selectable > 'u')),
    T = !!(p.connectable || (a && typeof p.connectable > 'u')),
    H = !!(p.focusable || (d && typeof p.focusable > 'u')),
    F = ce(),
    O = ig(p),
    x = P_({
      node: p,
      nodeType: M,
      hasDimensions: O,
      resizeObserver: f,
    }),
    I = Fg({
      nodeRef: x,
      disabled: p.hidden || !P,
      noDragClassName: c,
      handleSelector: p.dragHandle,
      nodeId: e,
      isSelectable: L,
      nodeClickDistance: g,
    }),
    C = Hg();
  if (p.hidden) return null;
  const $ = Dt(p),
    E = w_(p),
    N = L || P || t || n || r || o,
    z = n
      ? (j) =>
          n(j, {
            ...v.userNode,
          })
      : void 0,
    A = r
      ? (j) =>
          r(j, {
            ...v.userNode,
          })
      : void 0,
    B = o
      ? (j) =>
          o(j, {
            ...v.userNode,
          })
      : void 0,
    b = i
      ? (j) =>
          i(j, {
            ...v.userNode,
          })
      : void 0,
    U = l
      ? (j) =>
          l(j, {
            ...v.userNode,
          })
      : void 0,
    X = (j) => {
      const { selectNodesOnDrag: G, nodeDragThreshold: Z } = F.getState();
      L &&
        (!G || !P || Z > 0) &&
        zu({
          id: e,
          store: F,
          nodeRef: x,
        }),
        t &&
          t(j, {
            ...v.userNode,
          });
    },
    Y = (j) => {
      if (!(Nu(j.nativeEvent) || m))
        if (Gp.includes(j.key) && L) {
          const G = j.key === 'Escape';
          zu({
            id: e,
            store: F,
            unselect: G,
            nodeRef: x,
          });
        } else
          P &&
            p.selected &&
            Object.prototype.hasOwnProperty.call(tl, j.key) &&
            (j.preventDefault(),
            F.setState({
              ariaLiveMessage: `Moved selected node ${j.key.replace('Arrow', '').toLowerCase()}. New position, x: ${~~v.positionAbsolute.x}, y: ${~~v.positionAbsolute.y}`,
            }),
            C({
              direction: tl[j.key],
              factor: j.shiftKey ? 4 : 1,
            }));
    };
  return R.jsx('div', {
    className: ve([
      'react-flow__node',
      `react-flow__node-${M}`,
      {
        [h]: P,
      },
      p.className,
      {
        selected: p.selected,
        selectable: L,
        parent: k,
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
      ...p.style,
      ...E,
    },
    'data-id': e,
    'data-testid': `rf__node-${e}`,
    onMouseEnter: z,
    onMouseMove: A,
    onMouseLeave: B,
    onContextMenu: b,
    onClick: X,
    onDoubleClick: U,
    onKeyDown: H ? Y : void 0,
    tabIndex: H ? 0 : void 0,
    role: H ? 'button' : void 0,
    'aria-describedby': m ? void 0 : `${Ig}-${w}`,
    'aria-label': p.ariaLabel,
    children: R.jsx(f_, {
      value: e,
      children: R.jsx(_, {
        id: e,
        data: p.data,
        type: M,
        positionAbsoluteX: v.positionAbsolute.x,
        positionAbsoluteY: v.positionAbsolute.y,
        selected: p.selected ?? !1,
        selectable: L,
        draggable: P,
        deletable: p.deletable ?? !0,
        isConnectable: T,
        sourcePosition: p.sourcePosition,
        targetPosition: p.targetPosition,
        dragging: I,
        dragHandle: p.dragHandle,
        zIndex: v.z,
        parentId: p.parentId,
        ...$,
      }),
    }),
  });
}
const I_ = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function jg(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = ee(I_, ge),
    l = C_(e.onlyRenderVisibleElements),
    s = M_();
  return R.jsx('div', {
    className: 'react-flow__nodes',
    style: zl,
    children: l.map((u) =>
      R.jsx(
        T_,
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
jg.displayName = 'NodeRenderer';
const z_ = D.memo(jg);
function R_(e) {
  return ee(
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
              xS({
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
const L_ = ({ color: e = 'none', strokeWidth: t = 1 }) =>
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
  $_ = ({ color: e = 'none', strokeWidth: t = 1 }) =>
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
  Qf = {
    [Zi.Arrow]: L_,
    [Zi.ArrowClosed]: $_,
  };
function D_(e) {
  const t = ce();
  return D.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Qf, e)
      ? Qf[e]
      : ((i = (o = t.getState()).onError) == null || i.call(o, '009', $t.error009(e)), null);
  }, [e]);
}
const A_ = ({
    id: e,
    type: t,
    color: n,
    width: r = 12.5,
    height: o = 12.5,
    markerUnits: i = 'strokeWidth',
    strokeWidth: l,
    orient: s = 'auto-start-reverse',
  }) => {
    const u = D_(t);
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
  Ug = ({ defaultColor: e, rfId: t }) => {
    const n = ee((i) => i.edges),
      r = ee((i) => i.defaultEdgeOptions),
      o = D.useMemo(
        () =>
          MS(n, {
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
                A_,
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
Ug.displayName = 'MarkerDefinitions';
var O_ = D.memo(Ug);
function Wg({
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
    h = ve(['react-flow__edge-textwrapper', a]),
    m = D.useRef(null);
  return (
    D.useEffect(() => {
      if (m.current) {
        const w = m.current.getBBox();
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
          className: h,
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
              ref: m,
              style: r,
              children: n,
            }),
            u,
          ],
        })
  );
}
Wg.displayName = 'EdgeText';
const F_ = D.memo(Wg);
function Rl({
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
        ? R.jsx(F_, {
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
function Zf({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === K.Left || e === K.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function Yg({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
}) {
  const [l, s] = Zf({
      pos: n,
      x1: e,
      y1: t,
      x2: r,
      y2: o,
    }),
    [u, a] = Zf({
      pos: i,
      x1: r,
      y1: o,
      x2: e,
      y2: t,
    }),
    [d, f, c, h] = ag({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: l,
      sourceControlY: s,
      targetControlX: u,
      targetControlY: a,
    });
  return [`M${e},${t} C${l},${s} ${u},${a} ${r},${o}`, d, f, c, h];
}
function Xg(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: l = K.Bottom,
      targetPosition: s = K.Top,
      label: u,
      labelStyle: a,
      labelShowBg: d,
      labelBgStyle: f,
      labelBgPadding: c,
      labelBgBorderRadius: h,
      style: m,
      markerEnd: w,
      markerStart: S,
      interactionWidth: g,
    }) => {
      const [y, p, v] = Yg({
          sourceX: n,
          sourceY: r,
          sourcePosition: l,
          targetX: o,
          targetY: i,
          targetPosition: s,
        }),
        k = e.isInternal ? void 0 : t;
      return R.jsx(Rl, {
        id: k,
        path: y,
        labelX: p,
        labelY: v,
        label: u,
        labelStyle: a,
        labelShowBg: d,
        labelBgStyle: f,
        labelBgPadding: c,
        labelBgBorderRadius: h,
        style: m,
        markerEnd: w,
        markerStart: S,
        interactionWidth: g,
      });
    },
  );
}
const H_ = Xg({
    isInternal: !1,
  }),
  bg = Xg({
    isInternal: !0,
  });
H_.displayName = 'SimpleBezierEdge';
bg.displayName = 'SimpleBezierEdgeInternal';
function Kg(e) {
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
      sourcePosition: h = K.Bottom,
      targetPosition: m = K.Top,
      markerEnd: w,
      markerStart: S,
      pathOptions: g,
      interactionWidth: y,
    }) => {
      const [p, v, k] = Mu({
          sourceX: n,
          sourceY: r,
          sourcePosition: h,
          targetX: o,
          targetY: i,
          targetPosition: m,
          borderRadius: g == null ? void 0 : g.borderRadius,
          offset: g == null ? void 0 : g.offset,
        }),
        M = e.isInternal ? void 0 : t;
      return R.jsx(Rl, {
        id: M,
        path: p,
        labelX: v,
        labelY: k,
        label: l,
        labelStyle: s,
        labelShowBg: u,
        labelBgStyle: a,
        labelBgPadding: d,
        labelBgBorderRadius: f,
        style: c,
        markerEnd: w,
        markerStart: S,
        interactionWidth: y,
      });
    },
  );
}
const Gg = Kg({
    isInternal: !1,
  }),
  Qg = Kg({
    isInternal: !0,
  });
Gg.displayName = 'SmoothStepEdge';
Qg.displayName = 'SmoothStepEdgeInternal';
function Zg(e) {
  return D.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return R.jsx(Gg, {
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
const V_ = Zg({
    isInternal: !1,
  }),
  qg = Zg({
    isInternal: !0,
  });
V_.displayName = 'StepEdge';
qg.displayName = 'StepEdgeInternal';
function Jg(e) {
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
      markerEnd: h,
      markerStart: m,
      interactionWidth: w,
    }) => {
      const [S, g, y] = hg({
          sourceX: n,
          sourceY: r,
          targetX: o,
          targetY: i,
        }),
        p = e.isInternal ? void 0 : t;
      return R.jsx(Rl, {
        id: p,
        path: S,
        labelX: g,
        labelY: y,
        label: l,
        labelStyle: s,
        labelShowBg: u,
        labelBgStyle: a,
        labelBgPadding: d,
        labelBgBorderRadius: f,
        style: c,
        markerEnd: h,
        markerStart: m,
        interactionWidth: w,
      });
    },
  );
}
const B_ = Jg({
    isInternal: !1,
  }),
  e0 = Jg({
    isInternal: !0,
  });
B_.displayName = 'StraightEdge';
e0.displayName = 'StraightEdgeInternal';
function t0(e) {
  return D.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: l = K.Bottom,
      targetPosition: s = K.Top,
      label: u,
      labelStyle: a,
      labelShowBg: d,
      labelBgStyle: f,
      labelBgPadding: c,
      labelBgBorderRadius: h,
      style: m,
      markerEnd: w,
      markerStart: S,
      pathOptions: g,
      interactionWidth: y,
    }) => {
      const [p, v, k] = cg({
          sourceX: n,
          sourceY: r,
          sourcePosition: l,
          targetX: o,
          targetY: i,
          targetPosition: s,
          curvature: g == null ? void 0 : g.curvature,
        }),
        M = e.isInternal ? void 0 : t;
      return R.jsx(Rl, {
        id: M,
        path: p,
        labelX: v,
        labelY: k,
        label: u,
        labelStyle: a,
        labelShowBg: d,
        labelBgStyle: f,
        labelBgPadding: c,
        labelBgBorderRadius: h,
        style: m,
        markerEnd: w,
        markerStart: S,
        interactionWidth: y,
      });
    },
  );
}
const j_ = t0({
    isInternal: !1,
  }),
  n0 = t0({
    isInternal: !0,
  });
j_.displayName = 'BezierEdge';
n0.displayName = 'BezierEdgeInternal';
const qf = {
    default: n0,
    straight: e0,
    step: qg,
    smoothstep: Qg,
    simplebezier: bg,
  },
  Jf = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
  },
  U_ = (e, t, n) => (n === K.Left ? e - t : n === K.Right ? e + t : e),
  W_ = (e, t, n) => (n === K.Top ? e - t : n === K.Bottom ? e + t : e),
  ed = 'react-flow__edgeupdater';
function td({
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
    className: ve([ed, `${ed}-${s}`]),
    cx: U_(t, r, e),
    cy: W_(n, r, e),
    r,
    stroke: 'transparent',
    fill: 'transparent',
  });
}
function Y_({
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
  setUpdateHover: h,
}) {
  const m = ce(),
    w = (v, k) => {
      if (v.button !== 0) return;
      const {
          autoPanOnConnect: M,
          domNode: _,
          isValidConnection: P,
          connectionMode: L,
          connectionRadius: T,
          lib: H,
          onConnectStart: F,
          onConnectEnd: O,
          cancelConnection: x,
          nodeLookup: I,
          rfId: C,
          panBy: $,
          updateConnection: E,
        } = m.getState(),
        N = k.type === 'target';
      c(!0), d == null || d(v, n, k.type);
      const z = (B, b) => {
          c(!1), f == null || f(B, n, k.type, b);
        },
        A = (B) => (a == null ? void 0 : a(n, B));
      Iu.onPointerDown(v.nativeEvent, {
        autoPanOnConnect: M,
        connectionMode: L,
        connectionRadius: T,
        domNode: _,
        handleId: k.id,
        nodeId: k.nodeId,
        nodeLookup: I,
        isTarget: N,
        edgeUpdaterType: k.type,
        lib: H,
        flowId: C,
        cancelConnection: x,
        panBy: $,
        isValidConnection: P,
        onConnect: A,
        onConnectStart: F,
        onConnectEnd: O,
        onReconnectEnd: z,
        updateConnection: E,
        getTransform: () => m.getState().transform,
        getFromHandle: () => m.getState().connection.fromHandle,
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
    y = () => h(!0),
    p = () => h(!1);
  return R.jsxs(R.Fragment, {
    children: [
      (e === !0 || e === 'source') &&
        R.jsx(td, {
          position: s,
          centerX: r,
          centerY: o,
          radius: t,
          onMouseDown: S,
          onMouseEnter: y,
          onMouseOut: p,
          type: 'source',
        }),
      (e === !0 || e === 'target') &&
        R.jsx(td, {
          position: u,
          centerX: i,
          centerY: l,
          radius: t,
          onMouseDown: g,
          onMouseEnter: y,
          onMouseOut: p,
          type: 'target',
        }),
    ],
  });
}
function X_({
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
  onReconnectEnd: h,
  rfId: m,
  edgeTypes: w,
  noPanClassName: S,
  onError: g,
  disableKeyboardA11y: y,
}) {
  let p = ee((Q) => Q.edgeLookup.get(e));
  const v = ee((Q) => Q.defaultEdgeOptions);
  p = v
    ? {
        ...v,
        ...p,
      }
    : p;
  let k = p.type || 'default',
    M = (w == null ? void 0 : w[k]) || qf[k];
  M === void 0 && (g == null || g('011', $t.error011(k)), (k = 'default'), (M = qf.default));
  const _ = !!(p.focusable || (t && typeof p.focusable > 'u')),
    P = typeof f < 'u' && (p.reconnectable || (n && typeof p.reconnectable > 'u')),
    L = !!(p.selectable || (r && typeof p.selectable > 'u')),
    T = D.useRef(null),
    [H, F] = D.useState(!1),
    [O, x] = D.useState(!1),
    I = ce(),
    {
      zIndex: C,
      sourceX: $,
      sourceY: E,
      targetX: N,
      targetY: z,
      sourcePosition: A,
      targetPosition: B,
    } = ee(
      D.useCallback(
        (Q) => {
          const ne = Q.nodeLookup.get(p.source),
            le = Q.nodeLookup.get(p.target);
          if (!ne || !le)
            return {
              zIndex: p.zIndex,
              ...Jf,
            };
          const _e = NS({
            id: e,
            sourceNode: ne,
            targetNode: le,
            sourceHandle: p.sourceHandle || null,
            targetHandle: p.targetHandle || null,
            connectionMode: Q.connectionMode,
            onError: g,
          });
          return {
            zIndex: wS({
              selected: p.selected,
              zIndex: p.zIndex,
              sourceNode: ne,
              targetNode: le,
              elevateOnSelect: Q.elevateEdgesOnSelect,
            }),
            ...(_e || Jf),
          };
        },
        [p.source, p.target, p.sourceHandle, p.targetHandle, p.selected, p.zIndex],
      ),
      ge,
    ),
    b = D.useMemo(() => (p.markerStart ? `url('#${Pu(p.markerStart, m)}')` : void 0), [p.markerStart, m]),
    U = D.useMemo(() => (p.markerEnd ? `url('#${Pu(p.markerEnd, m)}')` : void 0), [p.markerEnd, m]);
  if (p.hidden || $ === null || E === null || N === null || z === null) return null;
  const X = (Q) => {
      var tt;
      const { addSelectedEdges: ne, unselectNodesAndEdges: le, multiSelectionActive: _e } = I.getState();
      L &&
        (I.setState({
          nodesSelectionActive: !1,
        }),
        p.selected && _e
          ? (le({
              nodes: [],
              edges: [p],
            }),
            (tt = T.current) == null || tt.blur())
          : ne([e])),
        o && o(Q, p);
    },
    Y = i
      ? (Q) => {
          i(Q, {
            ...p,
          });
        }
      : void 0,
    j = l
      ? (Q) => {
          l(Q, {
            ...p,
          });
        }
      : void 0,
    G = s
      ? (Q) => {
          s(Q, {
            ...p,
          });
        }
      : void 0,
    Z = u
      ? (Q) => {
          u(Q, {
            ...p,
          });
        }
      : void 0,
    re = a
      ? (Q) => {
          a(Q, {
            ...p,
          });
        }
      : void 0,
    J = (Q) => {
      var ne;
      if (!y && Gp.includes(Q.key) && L) {
        const { unselectNodesAndEdges: le, addSelectedEdges: _e } = I.getState();
        Q.key === 'Escape'
          ? ((ne = T.current) == null || ne.blur(),
            le({
              edges: [p],
            }))
          : _e([e]);
      }
    };
  return R.jsx('svg', {
    style: {
      zIndex: C,
    },
    children: R.jsxs('g', {
      className: ve([
        'react-flow__edge',
        `react-flow__edge-${k}`,
        p.className,
        S,
        {
          selected: p.selected,
          animated: p.animated,
          inactive: !L && !o,
          updating: H,
          selectable: L,
        },
      ]),
      onClick: X,
      onDoubleClick: Y,
      onContextMenu: j,
      onMouseEnter: G,
      onMouseMove: Z,
      onMouseLeave: re,
      onKeyDown: _ ? J : void 0,
      tabIndex: _ ? 0 : void 0,
      role: _ ? 'button' : 'img',
      'data-id': e,
      'data-testid': `rf__edge-${e}`,
      'aria-label': p.ariaLabel === null ? void 0 : p.ariaLabel || `Edge from ${p.source} to ${p.target}`,
      'aria-describedby': _ ? `${zg}-${m}` : void 0,
      ref: T,
      children: [
        !O &&
          R.jsx(M, {
            id: e,
            source: p.source,
            target: p.target,
            type: p.type,
            selected: p.selected,
            animated: p.animated,
            selectable: L,
            deletable: p.deletable ?? !0,
            label: p.label,
            labelStyle: p.labelStyle,
            labelShowBg: p.labelShowBg,
            labelBgStyle: p.labelBgStyle,
            labelBgPadding: p.labelBgPadding,
            labelBgBorderRadius: p.labelBgBorderRadius,
            sourceX: $,
            sourceY: E,
            targetX: N,
            targetY: z,
            sourcePosition: A,
            targetPosition: B,
            data: p.data,
            style: p.style,
            sourceHandleId: p.sourceHandle,
            targetHandleId: p.targetHandle,
            markerStart: b,
            markerEnd: U,
            pathOptions: 'pathOptions' in p ? p.pathOptions : void 0,
            interactionWidth: p.interactionWidth,
          }),
        P &&
          R.jsx(Y_, {
            edge: p,
            isReconnectable: P,
            reconnectRadius: d,
            onReconnect: f,
            onReconnectStart: c,
            onReconnectEnd: h,
            sourceX: $,
            sourceY: E,
            targetX: N,
            targetY: z,
            sourcePosition: A,
            targetPosition: B,
            setUpdateHover: F,
            setReconnecting: x,
          }),
      ],
    }),
  });
}
const b_ = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function r0({
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
  onReconnectStart: h,
  onReconnectEnd: m,
  disableKeyboardA11y: w,
}) {
  const { edgesFocusable: S, edgesReconnectable: g, elementsSelectable: y, onError: p } = ee(b_, ge),
    v = R_(t);
  return R.jsxs('div', {
    className: 'react-flow__edges',
    children: [
      R.jsx(O_, {
        defaultColor: e,
        rfId: n,
      }),
      v.map((k) =>
        R.jsx(
          X_,
          {
            id: k,
            edgesFocusable: S,
            edgesReconnectable: g,
            elementsSelectable: y,
            noPanClassName: o,
            onReconnect: i,
            onContextMenu: l,
            onMouseEnter: s,
            onMouseMove: u,
            onMouseLeave: a,
            onClick: d,
            reconnectRadius: f,
            onDoubleClick: c,
            onReconnectStart: h,
            onReconnectEnd: m,
            rfId: n,
            onError: p,
            edgeTypes: r,
            disableKeyboardA11y: w,
          },
          k,
        ),
      ),
    ],
  });
}
r0.displayName = 'EdgeRenderer';
const K_ = D.memo(r0),
  G_ = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Q_({ children: e }) {
  const t = ee(G_);
  return R.jsx('div', {
    className: 'react-flow__viewport xyflow__viewport react-flow__container',
    style: {
      transform: t,
    },
    children: e,
  });
}
function Z_(e) {
  const t = Fa(),
    n = D.useRef(!1);
  D.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), (n.current = !0));
  }, [e, t.viewportInitialized]);
}
const q_ = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function J_(e) {
  const t = ee(q_),
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
function nd(e) {
  return e.connection.inProgress
    ? {
        ...e.connection,
        to: Io(e.connection.to, e.transform),
      }
    : {
        ...e.connection,
      };
}
function ek(e) {
  return e
    ? (n) => {
        const r = nd(n);
        return e(r);
      }
    : nd;
}
function tk(e) {
  const t = ek(e);
  return ee(t, ge);
}
const nk = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function rk({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: l, isValid: s, inProgress: u } = ee(nk, ge);
  return !(i && o && u)
    ? null
    : R.jsx('svg', {
        style: e,
        width: i,
        height: l,
        className: 'react-flow__connectionline react-flow__container',
        children: R.jsx('g', {
          className: ve(['react-flow__connection', Zp(s)]),
          children: R.jsx(o0, {
            style: t,
            type: n,
            CustomComponent: r,
            isValid: s,
          }),
        }),
      });
}
const o0 = ({ style: e, type: t = Wt.Bezier, CustomComponent: n, isValid: r }) => {
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
  } = tk();
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
      connectionStatus: Zp(r),
      toNode: d,
      toHandle: f,
    });
  let h = '';
  const m = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: u,
    targetX: a.x,
    targetY: a.y,
    targetPosition: c,
  };
  switch (t) {
    case Wt.Bezier:
      [h] = cg(m);
      break;
    case Wt.SimpleBezier:
      [h] = Yg(m);
      break;
    case Wt.Step:
      [h] = Mu({
        ...m,
        borderRadius: 0,
      });
      break;
    case Wt.SmoothStep:
      [h] = Mu(m);
      break;
    default:
      [h] = hg(m);
  }
  return R.jsx('path', {
    d: h,
    fill: 'none',
    className: 'react-flow__connection-path',
    style: e,
  });
};
o0.displayName = 'ConnectionLine';
const ok = {};
function rd(e = ok) {
  D.useRef(e), ce(), D.useEffect(() => {}, [e]);
}
function ik() {
  ce(), D.useRef(!1), D.useEffect(() => {}, []);
}
function i0({
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
  onSelectionEnd: h,
  connectionLineType: m,
  connectionLineStyle: w,
  connectionLineComponent: S,
  connectionLineContainerStyle: g,
  selectionKeyCode: y,
  selectionOnDrag: p,
  selectionMode: v,
  multiSelectionKeyCode: k,
  panActivationKeyCode: M,
  zoomActivationKeyCode: _,
  deleteKeyCode: P,
  onlyRenderVisibleElements: L,
  elementsSelectable: T,
  defaultViewport: H,
  translateExtent: F,
  minZoom: O,
  maxZoom: x,
  preventScrolling: I,
  defaultMarkerColor: C,
  zoomOnScroll: $,
  zoomOnPinch: E,
  panOnScroll: N,
  panOnScrollSpeed: z,
  panOnScrollMode: A,
  zoomOnDoubleClick: B,
  panOnDrag: b,
  onPaneClick: U,
  onPaneMouseEnter: X,
  onPaneMouseMove: Y,
  onPaneMouseLeave: j,
  onPaneScroll: G,
  onPaneContextMenu: Z,
  paneClickDistance: re,
  nodeClickDistance: J,
  onEdgeContextMenu: Q,
  onEdgeMouseEnter: ne,
  onEdgeMouseMove: le,
  onEdgeMouseLeave: _e,
  reconnectRadius: tt,
  onReconnect: Ll,
  onReconnectStart: $l,
  onReconnectEnd: Dl,
  noDragClassName: pr,
  noWheelClassName: Al,
  noPanClassName: gr,
  disableKeyboardA11y: mr,
  nodeExtent: Ol,
  rfId: yr,
  viewport: vr,
  onViewportChange: zo,
}) {
  return (
    rd(e),
    rd(t),
    ik(),
    Z_(n),
    J_(vr),
    R.jsx(__, {
      onPaneClick: U,
      onPaneMouseEnter: X,
      onPaneMouseMove: Y,
      onPaneMouseLeave: j,
      onPaneContextMenu: Z,
      onPaneScroll: G,
      paneClickDistance: re,
      deleteKeyCode: P,
      selectionKeyCode: y,
      selectionOnDrag: p,
      selectionMode: v,
      onSelectionStart: c,
      onSelectionEnd: h,
      multiSelectionKeyCode: k,
      panActivationKeyCode: M,
      zoomActivationKeyCode: _,
      elementsSelectable: T,
      zoomOnScroll: $,
      zoomOnPinch: E,
      zoomOnDoubleClick: B,
      panOnScroll: N,
      panOnScrollSpeed: z,
      panOnScrollMode: A,
      panOnDrag: b,
      defaultViewport: H,
      translateExtent: F,
      minZoom: O,
      maxZoom: x,
      onSelectionContextMenu: f,
      preventScrolling: I,
      noDragClassName: pr,
      noWheelClassName: Al,
      noPanClassName: gr,
      disableKeyboardA11y: mr,
      onViewportChange: zo,
      isControlledViewport: !!vr,
      children: R.jsxs(Q_, {
        children: [
          R.jsx(K_, {
            edgeTypes: t,
            onEdgeClick: o,
            onEdgeDoubleClick: l,
            onReconnect: Ll,
            onReconnectStart: $l,
            onReconnectEnd: Dl,
            onlyRenderVisibleElements: L,
            onEdgeContextMenu: Q,
            onEdgeMouseEnter: ne,
            onEdgeMouseMove: le,
            onEdgeMouseLeave: _e,
            reconnectRadius: tt,
            defaultMarkerColor: C,
            noPanClassName: gr,
            disableKeyboardA11y: mr,
            rfId: yr,
          }),
          R.jsx(rk, {
            style: w,
            type: m,
            component: S,
            containerStyle: g,
          }),
          R.jsx('div', {
            className: 'react-flow__edgelabel-renderer',
          }),
          R.jsx(z_, {
            nodeTypes: e,
            onNodeClick: r,
            onNodeDoubleClick: i,
            onNodeMouseEnter: s,
            onNodeMouseMove: u,
            onNodeMouseLeave: a,
            onNodeContextMenu: d,
            nodeClickDistance: J,
            onlyRenderVisibleElements: L,
            noPanClassName: gr,
            noDragClassName: pr,
            disableKeyboardA11y: mr,
            nodeExtent: Ol,
            rfId: yr,
          }),
          R.jsx('div', {
            className: 'react-flow__viewport-portal',
          }),
        ],
      }),
    })
  );
}
i0.displayName = 'GraphView';
const lk = D.memo(i0),
  od = ({
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
      h = r ?? t ?? [],
      m = n ?? e ?? [],
      w = s ?? [0, 0],
      S = u ?? mo;
    gg(f, c, h),
      Tu(m, a, d, {
        nodeOrigin: w,
        nodeExtent: S,
        elevateNodesOnSelect: !1,
      });
    let g = [0, 0, 1];
    if (l && o && i) {
      const y = To(a, {
          filter: (M) => !!((M.width || M.initialWidth) && (M.height || M.initialHeight)),
        }),
        { x: p, y: v, zoom: k } = La(y, o, i, 0.5, 2, 0.1);
      g = [p, v, k];
    }
    return {
      rfId: '1',
      width: 0,
      height: 0,
      transform: g,
      nodes: m,
      nodeLookup: a,
      parentLookup: d,
      edges: h,
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
      connectionMode: lr.Strict,
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
        ...Qp,
      },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: '',
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: yS,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: 'react',
      debug: !1,
    };
  },
  sk = ({
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
    ME(
      (a, d) => ({
        ...od({
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
          const { nodeLookup: c, parentLookup: h, nodeOrigin: m, elevateNodesOnSelect: w } = d();
          Tu(f, c, h, {
            nodeOrigin: m,
            nodeExtent: u,
            elevateNodesOnSelect: w,
            checkEquality: !0,
          }),
            a({
              nodes: f,
            });
        },
        setEdges: (f) => {
          const { connectionLookup: c, edgeLookup: h } = d();
          gg(c, h, f),
            a({
              edges: f,
            });
        },
        setDefaultNodesAndEdges: (f, c) => {
          if (f) {
            const { setNodes: h } = d();
            h(f),
              a({
                hasDefaultNodes: !0,
              });
          }
          if (c) {
            const { setEdges: h } = d();
            h(c),
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
              triggerNodeChanges: h,
              nodeLookup: m,
              parentLookup: w,
              fitViewOnInit: S,
              fitViewDone: g,
              fitViewOnInitOptions: y,
              domNode: p,
              nodeOrigin: v,
              nodeExtent: k,
              debug: M,
              fitViewSync: _,
            } = d(),
            { changes: P, updatedInternals: L } = RS(f, m, w, p, v, k);
          if (L) {
            if (
              (TS(m, w, {
                nodeOrigin: v,
                nodeExtent: k,
              }),
              c.triggerFitView)
            ) {
              let T = g;
              !g &&
                S &&
                (T = _({
                  ...y,
                  nodes: y == null ? void 0 : y.nodes,
                })),
                a({
                  fitViewDone: T,
                });
            } else a({});
            (P == null ? void 0 : P.length) > 0 &&
              (M && console.log('React Flow: trigger node changes', P), h == null || h(P));
          }
        },
        updateNodePositions: (f, c = !1) => {
          const h = [],
            m = [];
          for (const [w, S] of f) {
            const g = !!(S != null && S.expandParent && S != null && S.parentId && S != null && S.position),
              y = {
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
              h.push({
                id: w,
                parentId: S.parentId,
                rect: {
                  ...S.internals.positionAbsolute,
                  width: S.measured.width,
                  height: S.measured.height,
                },
              }),
              m.push(y);
          }
          if (h.length > 0) {
            const { nodeLookup: w, parentLookup: S, nodeOrigin: g } = d(),
              y = Oa(h, w, S, g);
            m.push(...y);
          }
          d().triggerNodeChanges(m);
        },
        triggerNodeChanges: (f) => {
          const { onNodesChange: c, setNodes: h, nodes: m, hasDefaultNodes: w, debug: S } = d();
          if (f != null && f.length) {
            if (w) {
              const g = $g(f, m);
              h(g);
            }
            S && console.log('React Flow: trigger node changes', f), c == null || c(f);
          }
        },
        triggerEdgeChanges: (f) => {
          const { onEdgesChange: c, setEdges: h, edges: m, hasDefaultEdges: w, debug: S } = d();
          if (f != null && f.length) {
            if (w) {
              const g = Dg(f, m);
              h(g);
            }
            S && console.log('React Flow: trigger edge changes', f), c == null || c(f);
          }
        },
        addSelectedNodes: (f) => {
          const {
            multiSelectionActive: c,
            edgeLookup: h,
            nodeLookup: m,
            triggerNodeChanges: w,
            triggerEdgeChanges: S,
          } = d();
          if (c) {
            const g = f.map((y) => cn(y, !0));
            w(g);
            return;
          }
          w(jn(m, new Set([...f]), !0)), S(jn(h));
        },
        addSelectedEdges: (f) => {
          const {
            multiSelectionActive: c,
            edgeLookup: h,
            nodeLookup: m,
            triggerNodeChanges: w,
            triggerEdgeChanges: S,
          } = d();
          if (c) {
            const g = f.map((y) => cn(y, !0));
            S(g);
            return;
          }
          S(jn(h, new Set([...f]))), w(jn(m, new Set(), !0));
        },
        unselectNodesAndEdges: ({ nodes: f, edges: c } = {}) => {
          const { edges: h, nodes: m, nodeLookup: w, triggerNodeChanges: S, triggerEdgeChanges: g } = d(),
            y = f || m,
            p = c || h,
            v = y.map((M) => {
              const _ = w.get(M.id);
              return _ && (_.selected = !1), cn(M.id, !1);
            }),
            k = p.map((M) => cn(M.id, !1));
          S(v), g(k);
        },
        setMinZoom: (f) => {
          const { panZoom: c, maxZoom: h } = d();
          c == null || c.setScaleExtent([f, h]),
            a({
              minZoom: f,
            });
        },
        setMaxZoom: (f) => {
          const { panZoom: c, minZoom: h } = d();
          c == null || c.setScaleExtent([h, f]),
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
          const { edges: f, nodes: c, triggerNodeChanges: h, triggerEdgeChanges: m } = d(),
            w = c.reduce((g, y) => (y.selected ? [...g, cn(y.id, !1)] : g), []),
            S = f.reduce((g, y) => (y.selected ? [...g, cn(y.id, !1)] : g), []);
          h(w), m(S);
        },
        setNodeExtent: (f) => {
          const {
            nodes: c,
            nodeLookup: h,
            parentLookup: m,
            nodeOrigin: w,
            elevateNodesOnSelect: S,
            nodeExtent: g,
          } = d();
          (f[0][0] === g[0][0] && f[0][1] === g[0][1] && f[1][0] === g[1][0] && f[1][1] === g[1][1]) ||
            (Tu(c, h, m, {
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
          const { transform: c, width: h, height: m, panZoom: w, translateExtent: S } = d();
          return LS({
            delta: f,
            panZoom: w,
            transform: c,
            translateExtent: S,
            width: h,
            height: m,
          });
        },
        fitView: (f) => {
          const { panZoom: c, width: h, height: m, minZoom: w, maxZoom: S, nodeLookup: g } = d();
          if (!c) return Promise.resolve(!1);
          const y = _u(g, f);
          return ku(
            {
              nodes: y,
              width: h,
              height: m,
              panZoom: c,
              minZoom: w,
              maxZoom: S,
            },
            f,
          );
        },
        fitViewSync: (f) => {
          const { panZoom: c, width: h, height: m, minZoom: w, maxZoom: S, nodeLookup: g } = d();
          if (!c) return !1;
          const y = _u(g, f);
          return (
            ku(
              {
                nodes: y,
                width: h,
                height: m,
                panZoom: c,
                minZoom: w,
                maxZoom: S,
              },
              f,
            ),
            y.size > 0
          );
        },
        cancelConnection: () => {
          a({
            connection: {
              ...Qp,
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
            ...od(),
          }),
      }),
      Object.is,
    );
function l0({
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
    sk({
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
  return R.jsx(PE, {
    value: d,
    children: R.jsx(ZE, {
      children: a,
    }),
  });
}
function uk({
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
  return D.useContext(Tl)
    ? R.jsx(R.Fragment, {
        children: e,
      })
    : R.jsx(l0, {
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
const ak = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 0,
};
function ck(
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
    onConnect: h,
    onConnectStart: m,
    onConnectEnd: w,
    onClickConnectStart: S,
    onClickConnectEnd: g,
    onNodeMouseEnter: y,
    onNodeMouseMove: p,
    onNodeMouseLeave: v,
    onNodeContextMenu: k,
    onNodeDoubleClick: M,
    onNodeDragStart: _,
    onNodeDrag: P,
    onNodeDragStop: L,
    onNodesDelete: T,
    onEdgesDelete: H,
    onDelete: F,
    onSelectionChange: O,
    onSelectionDragStart: x,
    onSelectionDrag: I,
    onSelectionDragStop: C,
    onSelectionContextMenu: $,
    onSelectionStart: E,
    onSelectionEnd: N,
    onBeforeDelete: z,
    connectionMode: A,
    connectionLineType: B = Wt.Bezier,
    connectionLineStyle: b,
    connectionLineComponent: U,
    connectionLineContainerStyle: X,
    deleteKeyCode: Y = 'Backspace',
    selectionKeyCode: j = 'Shift',
    selectionOnDrag: G = !1,
    selectionMode: Z = yo.Full,
    panActivationKeyCode: re = 'Space',
    multiSelectionKeyCode: J = Ji() ? 'Meta' : 'Control',
    zoomActivationKeyCode: Q = Ji() ? 'Meta' : 'Control',
    snapToGrid: ne,
    snapGrid: le,
    onlyRenderVisibleElements: _e = !1,
    selectNodesOnDrag: tt,
    nodesDraggable: Ll,
    nodesConnectable: $l,
    nodesFocusable: Dl,
    nodeOrigin: pr = Rg,
    edgesFocusable: Al,
    edgesReconnectable: gr,
    elementsSelectable: mr = !0,
    defaultViewport: Ol = BE,
    minZoom: yr = 0.5,
    maxZoom: vr = 2,
    translateExtent: zo = mo,
    preventScrolling: c0 = !0,
    nodeExtent: Fl,
    defaultMarkerColor: f0 = '#b1b1b7',
    zoomOnScroll: d0 = !0,
    zoomOnPinch: h0 = !0,
    panOnScroll: p0 = !1,
    panOnScrollSpeed: g0 = 0.5,
    panOnScrollMode: m0 = vn.Free,
    zoomOnDoubleClick: y0 = !0,
    panOnDrag: v0 = !0,
    onPaneClick: w0,
    onPaneMouseEnter: x0,
    onPaneMouseMove: S0,
    onPaneMouseLeave: E0,
    onPaneScroll: _0,
    onPaneContextMenu: k0,
    paneClickDistance: Va = 0,
    nodeClickDistance: C0 = 0,
    children: N0,
    onReconnect: M0,
    onReconnectStart: P0,
    onReconnectEnd: T0,
    onEdgeContextMenu: I0,
    onEdgeDoubleClick: z0,
    onEdgeMouseEnter: R0,
    onEdgeMouseMove: L0,
    onEdgeMouseLeave: $0,
    reconnectRadius: D0 = 10,
    onNodesChange: A0,
    onEdgesChange: O0,
    noDragClassName: F0 = 'nodrag',
    noWheelClassName: H0 = 'nowheel',
    noPanClassName: Ba = 'nopan',
    fitView: ja,
    fitViewOptions: V0,
    connectOnClick: B0,
    attributionPosition: j0,
    proOptions: U0,
    defaultEdgeOptions: W0,
    elevateNodesOnSelect: Y0,
    elevateEdgesOnSelect: X0,
    disableKeyboardA11y: Ua = !1,
    autoPanOnConnect: b0,
    autoPanOnNodeDrag: K0,
    autoPanSpeed: G0,
    connectionRadius: Q0,
    isValidConnection: Z0,
    onError: q0,
    style: J0,
    id: Wa,
    nodeDragThreshold: em,
    viewport: tm,
    onViewportChange: nm,
    width: rm,
    height: om,
    colorMode: im = 'light',
    debug: lm,
    onScroll: Ro,
    ...sm
  },
  um,
) {
  const Hl = Wa || '1',
    am = YE(im),
    cm = D.useCallback(
      (Ya) => {
        Ya.currentTarget.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        }),
          Ro == null || Ro(Ya);
      },
      [Ro],
    );
  return R.jsx('div', {
    'data-testid': 'rf__wrapper',
    ...sm,
    onScroll: cm,
    style: {
      ...J0,
      ...ak,
    },
    ref: um,
    className: ve(['react-flow', o, am]),
    id: Wa,
    children: R.jsxs(uk, {
      nodes: e,
      edges: t,
      width: rm,
      height: om,
      fitView: ja,
      nodeOrigin: pr,
      nodeExtent: Fl,
      children: [
        R.jsx(lk, {
          onInit: a,
          onNodeClick: s,
          onEdgeClick: u,
          onNodeMouseEnter: y,
          onNodeMouseMove: p,
          onNodeMouseLeave: v,
          onNodeContextMenu: k,
          onNodeDoubleClick: M,
          nodeTypes: i,
          edgeTypes: l,
          connectionLineType: B,
          connectionLineStyle: b,
          connectionLineComponent: U,
          connectionLineContainerStyle: X,
          selectionKeyCode: j,
          selectionOnDrag: G,
          selectionMode: Z,
          deleteKeyCode: Y,
          multiSelectionKeyCode: J,
          panActivationKeyCode: re,
          zoomActivationKeyCode: Q,
          onlyRenderVisibleElements: _e,
          defaultViewport: Ol,
          translateExtent: zo,
          minZoom: yr,
          maxZoom: vr,
          preventScrolling: c0,
          zoomOnScroll: d0,
          zoomOnPinch: h0,
          zoomOnDoubleClick: y0,
          panOnScroll: p0,
          panOnScrollSpeed: g0,
          panOnScrollMode: m0,
          panOnDrag: v0,
          onPaneClick: w0,
          onPaneMouseEnter: x0,
          onPaneMouseMove: S0,
          onPaneMouseLeave: E0,
          onPaneScroll: _0,
          onPaneContextMenu: k0,
          paneClickDistance: Va,
          nodeClickDistance: C0,
          onSelectionContextMenu: $,
          onSelectionStart: E,
          onSelectionEnd: N,
          onReconnect: M0,
          onReconnectStart: P0,
          onReconnectEnd: T0,
          onEdgeContextMenu: I0,
          onEdgeDoubleClick: z0,
          onEdgeMouseEnter: R0,
          onEdgeMouseMove: L0,
          onEdgeMouseLeave: $0,
          reconnectRadius: D0,
          defaultMarkerColor: f0,
          noDragClassName: F0,
          noWheelClassName: H0,
          noPanClassName: Ba,
          rfId: Hl,
          disableKeyboardA11y: Ua,
          nodeExtent: Fl,
          viewport: tm,
          onViewportChange: nm,
        }),
        R.jsx(WE, {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          onConnect: h,
          onConnectStart: m,
          onConnectEnd: w,
          onClickConnectStart: S,
          onClickConnectEnd: g,
          nodesDraggable: Ll,
          nodesConnectable: $l,
          nodesFocusable: Dl,
          edgesFocusable: Al,
          edgesReconnectable: gr,
          elementsSelectable: mr,
          elevateNodesOnSelect: Y0,
          elevateEdgesOnSelect: X0,
          minZoom: yr,
          maxZoom: vr,
          nodeExtent: Fl,
          onNodesChange: A0,
          onEdgesChange: O0,
          snapToGrid: ne,
          snapGrid: le,
          connectionMode: A,
          translateExtent: zo,
          connectOnClick: B0,
          defaultEdgeOptions: W0,
          fitView: ja,
          fitViewOptions: V0,
          onNodesDelete: T,
          onEdgesDelete: H,
          onDelete: F,
          onNodeDragStart: _,
          onNodeDrag: P,
          onNodeDragStop: L,
          onSelectionDrag: I,
          onSelectionDragStart: x,
          onSelectionDragStop: C,
          onMove: d,
          onMoveStart: f,
          onMoveEnd: c,
          noPanClassName: Ba,
          nodeOrigin: pr,
          rfId: Hl,
          autoPanOnConnect: b0,
          autoPanOnNodeDrag: K0,
          autoPanSpeed: G0,
          onError: q0,
          connectionRadius: Q0,
          isValidConnection: Z0,
          selectNodesOnDrag: tt,
          nodeDragThreshold: em,
          onBeforeDelete: z,
          paneClickDistance: Va,
          debug: lm,
        }),
        R.jsx(VE, {
          onSelectionChange: O,
        }),
        N0,
        R.jsx(DE, {
          proOptions: U0,
          position: j0,
        }),
        R.jsx(LE, {
          rfId: Hl,
          disableKeyboardA11y: Ua,
        }),
      ],
    }),
  });
}
var fk = Ag(ck);
function dk(e) {
  const [t, n] = D.useState(e),
    r = D.useCallback((o) => n((i) => Dg(o, i)), []);
  return [t, n, r];
}
function hk({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return R.jsx('path', {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: ve(['react-flow__background-pattern', n, r]),
  });
}
function pk({ radius: e, className: t }) {
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
const gk = {
    [tn.Dots]: 1,
    [tn.Lines]: 1,
    [tn.Cross]: 6,
  },
  mk = (e) => ({
    transform: e.transform,
    patternId: `pattern-${e.rfId}`,
  });
function s0({
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
    { transform: c, patternId: h } = ee(mk, ge),
    m = r || gk[t],
    w = t === tn.Dots,
    S = t === tn.Cross,
    g = Array.isArray(n) ? n : [n, n],
    y = [g[0] * c[2] || 1, g[1] * c[2] || 1],
    p = m * c[2],
    v = Array.isArray(i) ? i : [i, i],
    k = S ? [p, p] : y,
    M = [v[0] * c[2] || 1 + k[0] / 2, v[1] * c[2] || 1 + k[1] / 2],
    _ = `${h}${e || ''}`;
  return R.jsxs('svg', {
    className: ve(['react-flow__background', a]),
    style: {
      ...u,
      ...zl,
      '--xy-background-color-props': s,
      '--xy-background-pattern-color-props': l,
    },
    ref: f,
    'data-testid': 'rf__background',
    children: [
      R.jsx('pattern', {
        id: _,
        x: c[0] % y[0],
        y: c[1] % y[1],
        width: y[0],
        height: y[1],
        patternUnits: 'userSpaceOnUse',
        patternTransform: `translate(-${M[0]},-${M[1]})`,
        children: w
          ? R.jsx(pk, {
              radius: p / 2,
              className: d,
            })
          : R.jsx(hk, {
              dimensions: k,
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
s0.displayName = 'Background';
const yk = D.memo(s0);
function vk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    children: R.jsx('path', {
      d: 'M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z',
    }),
  });
}
function wk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 5',
    children: R.jsx('path', {
      d: 'M0 0h32v4.2H0z',
    }),
  });
}
function xk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 30',
    children: R.jsx('path', {
      d: 'M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z',
    }),
  });
}
function Sk() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 25 32',
    children: R.jsx('path', {
      d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z',
    }),
  });
}
function Ek() {
  return R.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 25 32',
    children: R.jsx('path', {
      d: 'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z',
    }),
  });
}
function oi({ children: e, className: t, ...n }) {
  return R.jsx('button', {
    type: 'button',
    className: ve(['react-flow__controls-button', t]),
    ...n,
    children: e,
  });
}
const _k = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
});
function u0({
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
  'aria-label': h = 'React Flow controls',
}) {
  const m = ce(),
    { isInteractive: w, minZoomReached: S, maxZoomReached: g } = ee(_k, ge),
    { zoomIn: y, zoomOut: p, fitView: v } = Fa(),
    k = () => {
      y(), i == null || i();
    },
    M = () => {
      p(), l == null || l();
    },
    _ = () => {
      v(o), s == null || s();
    },
    P = () => {
      m.setState({
        nodesDraggable: !w,
        nodesConnectable: !w,
        elementsSelectable: !w,
      }),
        u == null || u(!w);
    },
    L = c === 'horizontal' ? 'horizontal' : 'vertical';
  return R.jsxs(Il, {
    className: ve(['react-flow__controls', L, a]),
    position: f,
    style: e,
    'data-testid': 'rf__controls',
    'aria-label': h,
    children: [
      t &&
        R.jsxs(R.Fragment, {
          children: [
            R.jsx(oi, {
              onClick: k,
              className: 'react-flow__controls-zoomin',
              title: 'zoom in',
              'aria-label': 'zoom in',
              disabled: g,
              children: R.jsx(vk, {}),
            }),
            R.jsx(oi, {
              onClick: M,
              className: 'react-flow__controls-zoomout',
              title: 'zoom out',
              'aria-label': 'zoom out',
              disabled: S,
              children: R.jsx(wk, {}),
            }),
          ],
        }),
      n &&
        R.jsx(oi, {
          className: 'react-flow__controls-fitview',
          onClick: _,
          title: 'fit view',
          'aria-label': 'fit view',
          children: R.jsx(xk, {}),
        }),
      r &&
        R.jsx(oi, {
          className: 'react-flow__controls-interactive',
          onClick: P,
          title: 'toggle interactivity',
          'aria-label': 'toggle interactivity',
          children: w ? R.jsx(Ek, {}) : R.jsx(Sk, {}),
        }),
      d,
    ],
  });
}
u0.displayName = 'Controls';
const kk = D.memo(u0);
function Ck({
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
  onClick: h,
}) {
  const { background: m, backgroundColor: w } = i || {},
    S = l || m || w;
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
    onClick: h ? (g) => h(g, e) : void 0,
  });
}
const Nk = D.memo(Ck),
  Mk = (e) => e.nodes.map((t) => t.id),
  Ss = (e) => (e instanceof Function ? e : () => e);
function Pk({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = '',
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  nodeComponent: i = Nk,
  onClick: l,
}) {
  const s = ee(Mk, ge),
    u = Ss(t),
    a = Ss(e),
    d = Ss(n),
    f = typeof window > 'u' || window.chrome ? 'crispEdges' : 'geometricPrecision';
  return R.jsx(R.Fragment, {
    children: s.map((c) =>
      R.jsx(
        Ik,
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
function Tk({
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
    height: h,
  } = ee((m) => {
    const w = m.nodeLookup.get(e),
      { x: S, y: g } = w.internals.positionAbsolute,
      { width: y, height: p } = Dt(w);
    return {
      node: w,
      x: S,
      y: g,
      width: y,
      height: p,
    };
  }, ge);
  return !a || a.hidden || !ig(a)
    ? null
    : R.jsx(s, {
        x: d,
        y: f,
        width: c,
        height: h,
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
const Ik = D.memo(Tk);
var zk = D.memo(Pk);
const Rk = 200,
  Lk = 150,
  $k = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect: e.nodeLookup.size > 0 ? rg(To(e.nodeLookup), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
    };
  },
  Dk = 'react-flow__minimap-desc';
function a0({
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
  onClick: h,
  onNodeClick: m,
  pannable: w = !1,
  zoomable: S = !1,
  ariaLabel: g = 'React Flow mini map',
  inversePan: y,
  zoomStep: p = 10,
  offsetScale: v = 5,
}) {
  const k = ce(),
    M = D.useRef(null),
    { boundingRect: _, viewBB: P, rfId: L, panZoom: T, translateExtent: H, flowWidth: F, flowHeight: O } = ee($k, ge),
    x = (e == null ? void 0 : e.width) ?? Rk,
    I = (e == null ? void 0 : e.height) ?? Lk,
    C = _.width / x,
    $ = _.height / I,
    E = Math.max(C, $),
    N = E * x,
    z = E * I,
    A = v * E,
    B = _.x - (N - _.width) / 2 - A,
    b = _.y - (z - _.height) / 2 - A,
    U = N + A * 2,
    X = z + A * 2,
    Y = `${Dk}-${L}`,
    j = D.useRef(0),
    G = D.useRef();
  (j.current = E),
    D.useEffect(() => {
      if (M.current && T)
        return (
          (G.current = BS({
            domNode: M.current,
            panZoom: T,
            getTransform: () => k.getState().transform,
            getViewScale: () => j.current,
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
          translateExtent: H,
          width: F,
          height: O,
          inversePan: y,
          pannable: w,
          zoomStep: p,
          zoomable: S,
        });
    }, [w, S, y, p, H, F, O]);
  const Z = h
      ? (J) => {
          var le;
          const [Q, ne] = ((le = G.current) == null ? void 0 : le.pointer(J)) || [0, 0];
          h(J, {
            x: Q,
            y: ne,
          });
        }
      : void 0,
    re = m
      ? D.useCallback((J, Q) => {
          const ne = k.getState().nodeLookup.get(Q);
          m(J, ne);
        }, [])
      : void 0;
  return R.jsx(Il, {
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
      viewBox: `${B} ${b} ${U} ${X}`,
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
        R.jsx(zk, {
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
          d: `M${B - A},${b - A}h${U + A * 2}v${X + A * 2}h${-U - A * 2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,
          fillRule: 'evenodd',
          pointerEvents: 'none',
        }),
      ],
    }),
  });
}
a0.displayName = 'MiniMap';
D.memo(a0);
function Ak({
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
  onResizeStart: h,
  onResize: m,
  onResizeEnd: w,
}) {
  const S = Vg(),
    g = typeof e == 'string' ? e : S,
    y = ce(),
    p = D.useRef(null),
    v = n === Xr.Line ? 'right' : 'bottom-right',
    k = t ?? v,
    M = D.useRef(null);
  D.useEffect(() => {
    if (!(!p.current || !g))
      return (
        M.current ||
          (M.current = nE({
            domNode: p.current,
            nodeId: g,
            getStoreItems: () => {
              const {
                nodeLookup: T,
                transform: H,
                snapGrid: F,
                snapToGrid: O,
                nodeOrigin: x,
                domNode: I,
              } = y.getState();
              return {
                nodeLookup: T,
                transform: H,
                snapGrid: F,
                snapToGrid: O,
                nodeOrigin: x,
                paneDomNode: I,
              };
            },
            onChange: (T, H) => {
              const { triggerNodeChanges: F, nodeLookup: O, parentLookup: x, nodeOrigin: I } = y.getState(),
                C = [],
                $ = {
                  x: T.x,
                  y: T.y,
                },
                E = O.get(g);
              if (E && E.expandParent && E.parentId) {
                const N = E.origin ?? I,
                  z = T.width ?? E.measured.width,
                  A = T.height ?? E.measured.height,
                  B = {
                    id: E.id,
                    parentId: E.parentId,
                    rect: {
                      width: z,
                      height: A,
                      ...lg(
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
                  b = Oa([B], O, x, I);
                C.push(...b),
                  ($.x = T.x ? Math.max(N[0] * z, T.x) : void 0),
                  ($.y = T.y ? Math.max(N[1] * A, T.y) : void 0);
              }
              if ($.x !== void 0 && $.y !== void 0) {
                const N = {
                  id: g,
                  type: 'position',
                  position: {
                    ...$,
                  },
                };
                C.push(N);
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
                C.push(N);
              }
              for (const N of H) {
                const z = {
                  ...N,
                  type: 'position',
                };
                C.push(z);
              }
              F(C);
            },
            onEnd: () => {
              const T = {
                id: g,
                type: 'dimensions',
                resizing: !1,
              };
              y.getState().triggerNodeChanges([T]);
            },
          })),
        M.current.update({
          controlPosition: k,
          boundaries: {
            minWidth: s,
            minHeight: u,
            maxWidth: a,
            maxHeight: d,
          },
          keepAspectRatio: f,
          onResizeStart: h,
          onResize: m,
          onResizeEnd: w,
          shouldResize: c,
        }),
        () => {
          var T;
          (T = M.current) == null || T.destroy();
        }
      );
  }, [k, s, u, a, d, f, h, m, w, c]);
  const _ = k.split('-'),
    P = n === Xr.Line ? 'borderColor' : 'backgroundColor',
    L = l
      ? {
          ...o,
          [P]: l,
        }
      : o;
  return R.jsx('div', {
    className: ve(['react-flow__resize-control', 'nodrag', ..._, n, r]),
    ref: p,
    style: L,
    children: i,
  });
}
D.memo(Ak);
const Ok = '_node_5kk7k_1',
  Tr = {
    node: Ok,
  },
  Fk = [
    {
      id: '1',
      position: {
        x: 0,
        y: 0,
      },
      style: {
        width: 200,
        height: 100,
        backgroundColor: '#00d7ca',
      },
      data: {
        label: 'Move me around',
      },
      className: Tr.node,
    },
    {
      id: '2',
      position: {
        x: 320,
        y: 125,
      },
      style: {
        width: 220,
        height: 400,
        backgroundColor: '#6ede87',
      },
      data: {
        label: 'Move me around',
      },
      className: Tr.node,
    },
    {
      id: '3',
      position: {
        x: -55,
        y: 220,
      },
      style: {
        width: 125,
        height: 220,
        backgroundColor: '#ff6700',
      },
      data: {
        label: 'Move me around',
      },
      className: Tr.node,
    },
    {
      id: '4',
      position: {
        x: 250,
        y: -160,
      },
      style: {
        width: 180,
        height: 180,
        backgroundColor: '#ff0071',
      },
      data: {
        label: 'Move me around',
      },
      className: Tr.node,
    },
    {
      id: '5',
      position: {
        x: -120,
        y: 600,
      },
      style: {
        width: 300,
        height: 120,
        backgroundColor: '#784be8',
      },
      data: {
        label: 'Move me around',
      },
      className: Tr.node,
    },
  ],
  Hk = [];
function Vk(e, t, n = 5) {
  var u, a, d, f;
  const r = {
      horizontal: void 0,
      vertical: void 0,
      snapPosition: {
        x: void 0,
        y: void 0,
      },
    },
    o = t.find((c) => c.id === e.id);
  if (!o || !e.position) return r;
  const i = {
    left: e.position.x,
    right: e.position.x + (((u = o.measured) == null ? void 0 : u.width) ?? 0),
    top: e.position.y,
    bottom: e.position.y + (((a = o.measured) == null ? void 0 : a.height) ?? 0),
    width: ((d = o.measured) == null ? void 0 : d.width) ?? 0,
    height: ((f = o.measured) == null ? void 0 : f.height) ?? 0,
  };
  let l = n,
    s = n;
  return t
    .filter((c) => c.id !== o.id)
    .reduce((c, h) => {
      var _, P, L, T;
      const m = {
          left: h.position.x,
          right: h.position.x + (((_ = h.measured) == null ? void 0 : _.width) ?? 0),
          top: h.position.y,
          bottom: h.position.y + (((P = h.measured) == null ? void 0 : P.height) ?? 0),
          width: ((L = h.measured) == null ? void 0 : L.width) ?? 0,
          height: ((T = h.measured) == null ? void 0 : T.height) ?? 0,
        },
        w = Math.abs(i.left - m.left);
      w < s && ((c.snapPosition.x = m.left), (c.vertical = m.left), (s = w));
      const S = Math.abs(i.right - m.right);
      S < s && ((c.snapPosition.x = m.right - i.width), (c.vertical = m.right), (s = S));
      const g = Math.abs(i.left - m.right);
      g < s && ((c.snapPosition.x = m.right), (c.vertical = m.right), (s = g));
      const y = Math.abs(i.right - m.left);
      y < s && ((c.snapPosition.x = m.left - i.width), (c.vertical = m.left), (s = y));
      const p = Math.abs(i.top - m.top);
      p < l && ((c.snapPosition.y = m.top), (c.horizontal = m.top), (l = p));
      const v = Math.abs(i.bottom - m.top);
      v < l && ((c.snapPosition.y = m.top - i.height), (c.horizontal = m.top), (l = v));
      const k = Math.abs(i.bottom - m.bottom);
      k < l && ((c.snapPosition.y = m.bottom - i.height), (c.horizontal = m.bottom), (l = k));
      const M = Math.abs(i.top - m.bottom);
      return M < l && ((c.snapPosition.y = m.bottom), (c.horizontal = m.bottom), (l = M)), c;
    }, r);
}
const Bk = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    pointerEvents: 'none',
  },
  jk = (e) => ({
    width: e.width,
    height: e.height,
    transform: e.transform,
  });
function Uk({ horizontal: e, vertical: t }) {
  const { width: n, height: r, transform: o } = ee(jk),
    i = D.useRef(null);
  return (
    D.useEffect(() => {
      const l = i.current,
        s = l == null ? void 0 : l.getContext('2d');
      if (!s || !l) return;
      const u = window.devicePixelRatio;
      (l.width = n * u),
        (l.height = r * u),
        s.scale(u, u),
        s.clearRect(0, 0, n, r),
        (s.strokeStyle = '#0041d0'),
        typeof t == 'number' && (s.moveTo(t * o[2] + o[0], 0), s.lineTo(t * o[2] + o[0], r), s.stroke()),
        typeof e == 'number' && (s.moveTo(0, e * o[2] + o[1]), s.lineTo(n, e * o[2] + o[1]), s.stroke());
    }, [n, r, o, e, t]),
    R.jsx('canvas', {
      ref: i,
      className: 'react-flow__canvas',
      style: Bk,
    })
  );
}
const Wk = {
  account: 'paid-pro',
  hideAttribution: !0,
};
function Yk() {
  const [e, t] = D.useState(Fk),
    [n, r, o] = dk(Hk),
    [i, l] = D.useState(void 0),
    [s, u] = D.useState(void 0),
    a = D.useCallback(
      (c) => {
        r((h) => dg(c, h));
      },
      [r],
    ),
    d = D.useCallback((c, h) => {
      if ((l(void 0), u(void 0), c.length === 1 && c[0].type === 'position' && c[0].dragging && c[0].position)) {
        const m = Vk(c[0], h);
        (c[0].position.x = m.snapPosition.x ?? c[0].position.x),
          (c[0].position.y = m.snapPosition.y ?? c[0].position.y),
          l(m.horizontal),
          u(m.vertical);
      }
      return $g(c, h);
    }, []),
    f = D.useCallback(
      (c) => {
        t((h) => d(c, h));
      },
      [t, d],
    );
  return R.jsxs(fk, {
    nodes: e,
    edges: n,
    onNodesChange: f,
    onEdgesChange: o,
    proOptions: Wk,
    onConnect: a,
    fitView: !0,
    elevateEdgesOnSelect: !0,
    elevateNodesOnSelect: !0,
    children: [
      R.jsx(yk, {}),
      R.jsx(kk, {}),
      R.jsx(Uk, {
        horizontal: i,
        vertical: s,
      }),
    ],
  });
}
function Xk() {
  return R.jsx(l0, {
    children: R.jsx(Yk, {}),
  });
}
Es.createRoot(document.getElementById('root')).render(
  R.jsx(md.StrictMode, {
    children: R.jsx(Xk, {}),
  }),
);
