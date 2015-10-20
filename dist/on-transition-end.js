(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["onTransitionEnd"] = factory();
	else
		root["onTransitionEnd"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Promise = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(66)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _prefixProperty = __webpack_require__(67);

	var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

	var defaultEventFailureGracePeriod = 100;

	exports['default'] = function (element, expectedDuration, callback, eventFailureGracePeriod) {
	  return new _Promise(function (resolve) {
	    var transitionend = getTransitionEndEvent();
	    var gracePeriod = eventFailureGracePeriod !== undefined ? eventFailureGracePeriod : defaultEventFailureGracePeriod;
	    var done = false;
	    var forceEnd = false;

	    element.addEventListener(transitionend, onTransitionEnd);

	    setTimeout(function () {
	      if (!done) {
	        // forcing onTransitionEnd callback...
	        forceEnd = true;
	        onTransitionEnd();
	      }
	    }, expectedDuration + gracePeriod);

	    function onTransitionEnd(e) {
	      if (forceEnd || e.target === element) {
	        done = true;
	        element.removeEventListener(transitionend, onTransitionEnd);
	        resolve(e);
	        if (callback) {
	          callback(e);
	        }
	      }
	    }
	  });
	};

	var getTransitionEndEvent = (function () {
	  var transitionEndEvent = null;
	  return function () {
	    return transitionEndEvent || (transitionEndEvent = ({
	      transition: 'transitionend',
	      OTransition: 'otransitionend',
	      MozTransition: 'transitionend',
	      WebkitTransition: 'webkitTransitionEnd'
	    })[(0, _prefixProperty2['default'])('transition')]);
	  };
	})();
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(27);
	__webpack_require__(34);
	module.exports = __webpack_require__(13).Promise;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(6)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(9)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	'use strict';

	var toInteger = __webpack_require__(7),
	    defined = __webpack_require__(8);
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	"use strict";

	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	"use strict";

	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(10),
	    $def = __webpack_require__(11),
	    $redef = __webpack_require__(14),
	    hide = __webpack_require__(15),
	    has = __webpack_require__(20),
	    SYMBOL_ITERATOR = __webpack_require__(21)('iterator'),
	    Iterators = __webpack_require__(24),
	    BUGGY = !([].keys && 'next' in [].keys()),
	    // Safari has buggy iterators w/o `next`
	FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	var returnThis = function returnThis() {
	  return this;
	};
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
	  __webpack_require__(25)(Constructor, NAME, next);
	  var createMethod = function createMethod(kind) {
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      proto = Base.prototype,
	      _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      _default = _native || createMethod(DEFAULT),
	      methods,
	      key;
	  // Fix native
	  if (_native) {
	    var IteratorPrototype = __webpack_require__(16).getProto(_default.call(new Base()));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(26)(IteratorPrototype, TAG, true);
	    // FF fix
	    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if (!LIBRARY || FORCE) hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      keys: IS_SET ? _default : createMethod(KEYS),
	      values: DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if (FORCE) for (key in methods) {
	      if (!(key in proto)) $redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(12),
	    core = __webpack_require__(13),
	    PROTOTYPE = 'prototype';
	var ctx = function ctx(fn, that) {
	  return function () {
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function $def(type, name, source) {
	  var key,
	      own,
	      out,
	      exp,
	      isGlobal = type & $def.G,
	      isProto = type & $def.P,
	      target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
	      exports = isGlobal ? core : core[name] || (core[name] = {});
	  if (isGlobal) source = name;
	  for (key in source) {
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if (isGlobal && typeof target[key] != 'function') exp = source[key];
	    // bind timers to global for call from export context
	    else if (type & $def.B && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & $def.W && target[key] == out) !(function (C) {
	          exp = function (param) {
	            return this instanceof C ? new C(param) : C(param);
	          };
	          exp[PROTOTYPE] = C[PROTOTYPE];
	        })(out);else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if (isProto) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1; // forced
	$def.G = 2; // global
	$def.S = 4; // static
	$def.P = 8; // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	'use strict';

	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '1.2.2' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(15);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(16),
	    createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(18) ? function (object, key, value) {
	  return $.setDesc(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: ({}).propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	'use strict';

	module.exports = !__webpack_require__(19)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = ({}).hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(22)('wks'),
	    Symbol = __webpack_require__(12).Symbol;
	module.exports = function (name) {
	  return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || __webpack_require__(23))('Symbol.' + name));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(12),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(16),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(21)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = $.create(IteratorPrototype, { next: __webpack_require__(17)(1, next) });
	  __webpack_require__(26)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(16).setDesc,
	    has = __webpack_require__(20),
	    TAG = __webpack_require__(21)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(28);
	var Iterators = __webpack_require__(24);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(29),
	    step = __webpack_require__(30),
	    Iterators = __webpack_require__(24),
	    toIObject = __webpack_require__(31);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(9)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {/* empty */};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	'use strict';

	var IObject = __webpack_require__(32),
	    defined = __webpack_require__(8);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	'use strict';

	var cof = __webpack_require__(33);
	module.exports = 0 in Object('z') ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	var toString = ({}).toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(16),
	    LIBRARY = __webpack_require__(10),
	    global = __webpack_require__(12),
	    ctx = __webpack_require__(35),
	    classof = __webpack_require__(37),
	    $def = __webpack_require__(11),
	    isObject = __webpack_require__(38),
	    anObject = __webpack_require__(39),
	    aFunction = __webpack_require__(36),
	    strictNew = __webpack_require__(40),
	    forOf = __webpack_require__(41),
	    setProto = __webpack_require__(46).set,
	    same = __webpack_require__(50),
	    species = __webpack_require__(54),
	    SPECIES = __webpack_require__(21)('species'),
	    RECORD = __webpack_require__(23)('record'),
	    asap = __webpack_require__(55),
	    PROMISE = 'Promise',
	    process = global.process,
	    isNode = classof(process) == 'process',
	    P = global[PROMISE],
	    Wrapper;

	var testResolve = function testResolve(sub) {
	  var test = new P(function () {});
	  if (sub) test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var useNative = (function () {
	  var works = false;
	  function P2(x) {
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
	    // actual Firefox has broken subclass support, test that
	    if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if (works && __webpack_require__(18)) {
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function get() {
	          thenableThenGotten = true;
	        }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch (e) {
	    works = false;
	  }
	  return works;
	})();

	// helpers
	var isPromise = function isPromise(it) {
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function sameConstructor(a, b) {
	  // library wrapper special case
	  if (LIBRARY && a === P && b === Wrapper) return true;
	  return same(a, b);
	};
	var getConstructor = function getConstructor(C) {
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function notify(record, isReject) {
	  if (record.n) return;
	  record.n = true;
	  var chain = record.c;
	  asap(function () {
	    var value = record.v,
	        ok = record.s == 1,
	        i = 0;
	    var run = function run(react) {
	      var cb = ok ? react.ok : react.fail,
	          ret,
	          then;
	      try {
	        if (cb) {
	          if (!ok) record.h = true;
	          ret = cb === true ? value : cb(value);
	          if (ret === react.P) {
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(ret)) {
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch (err) {
	        react.rej(err);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if (isReject) setTimeout(function () {
	      var promise = record.p,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      }record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  var record = promise[RECORD],
	      chain = record.a || record.c,
	      i = 0,
	      react;
	  if (record.h) return false;
	  while (chain.length > i) {
	    react = chain[i++];
	    if (react.fail || !isUnhandled(react.P)) return false;
	  }return true;
	};
	var $reject = function $reject(value) {
	  var record = this;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function $resolve(value) {
	  var record = this,
	      then;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if (then = isThenable(value)) {
	      asap(function () {
	        var wrapper = { r: record, d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch (e) {
	    $reject.call({ r: record, d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!useNative) {
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor) {
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE), // <- promise
	      c: [], // <- awaiting reactions
	      a: undefined, // <- checked in isUnhandled reactions
	      s: 0, // <- state
	      d: false, // <- done
	      v: undefined, // <- value
	      h: false, // <- handled rejection
	      n: false // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch (err) {
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(60)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok: typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function' ? onRejected : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function (res, rej) {
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if (record.a) record.a.push(react);
	      if (record.s) notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, { Promise: P });
	__webpack_require__(26)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(13)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    return new this(function (res, rej) {
	      rej(r);
	    });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function (res) {
	      res(x);
	    });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(61)(function (iter) {
	  P.all(iter)['catch'](function () {});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = getConstructor(this),
	        values = [];
	    return new C(function (res, rej) {
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length,
	          results = Array(remaining);
	      if (remaining) $.each.call(values, function (promise, index) {
	        C.resolve(promise).then(function (value) {
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = getConstructor(this);
	    return new C(function (res, rej) {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	'use strict';

	var aFunction = __webpack_require__(36);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	'use strict';

	var cof = __webpack_require__(33),
	    TAG = __webpack_require__(21)('toStringTag'),

	// ES3 wrong here
	ARG = cof((function () {
	  return arguments;
	})()) == 'Arguments';

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(38);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(35),
	    call = __webpack_require__(42),
	    isArrayIter = __webpack_require__(43),
	    anObject = __webpack_require__(39),
	    toLength = __webpack_require__(44),
	    getIterFn = __webpack_require__(45);
	module.exports = function (iterable, entries, fn, that) {
	  var iterFn = getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	'use strict';

	var anObject = __webpack_require__(39);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	'use strict';

	var Iterators = __webpack_require__(24),
	    ITERATOR = __webpack_require__(21)('iterator');
	module.exports = function (it) {
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	'use strict';

	var toInteger = __webpack_require__(7),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(37),
	    ITERATOR = __webpack_require__(21)('iterator'),
	    Iterators = __webpack_require__(24);
	module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	'use strict';

	var _Object$setPrototypeOf = __webpack_require__(47)['default'];

	var getDesc = __webpack_require__(16).getDesc,
	    isObject = __webpack_require__(38),
	    anObject = __webpack_require__(39);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: _Object$setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  (function (test, buggy, set) {
	    try {
	      set = __webpack_require__(35)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  })({}, false) : undefined),
	  check: check
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(49);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	'use strict';

	var $def = __webpack_require__(11);
	$def($def.S, 'Object', { setPrototypeOf: __webpack_require__(46).set });

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$is = __webpack_require__(51)["default"];

	module.exports = _Object$is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(53);
	module.exports = __webpack_require__(13).Object.is;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	'use strict';

	var $def = __webpack_require__(11);
	$def($def.S, 'Object', {
	  is: __webpack_require__(50)
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(16),
	    SPECIES = __webpack_require__(21)('species');
	module.exports = function (C) {
	  if (__webpack_require__(18) && !(SPECIES in C)) $.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(12),
	    macrotask = __webpack_require__(56).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    isNode = __webpack_require__(33)(process) == 'process',
	    head,
	    last,
	    notify;

	var flush = function flush() {
	  var parent, domain;
	  if (isNode && (parent = process.domain)) {
	    process.domain = null;
	    parent.exit();
	  }
	  while (head) {
	    domain = head.domain;
	    if (domain) domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if (domain) domain.exit();
	    head = head.next;
	  }last = undefined;
	  if (parent) parent.enter();
	};

	// Node.js
	if (isNode) {
	  notify = function () {
	    process.nextTick(flush);
	  };
	  // browsers with MutationObserver
	} else if (Observer) {
	    var toggle = 1,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = -toggle;
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	      notify = function () {
	        // strange IE + webpack dev server bug - use .call(global)
	        macrotask.call(global, flush);
	      };
	    }

	module.exports = function asap(fn) {
	  var task = { fn: fn, next: undefined, domain: isNode && process.domain };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  }last = task;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(35),
	    invoke = __webpack_require__(57),
	    html = __webpack_require__(58),
	    cel = __webpack_require__(59),
	    global = __webpack_require__(12),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function listner(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(33)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	        defer = function (id) {
	          global.postMessage(id + '', '*');
	        };
	        global.addEventListener('message', listner, false);
	        // IE8-
	      } else if (ONREADYSTATECHANGE in cel('script')) {
	          defer = function (id) {
	            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	              html.removeChild(this);
	              run.call(id);
	            };
	          };
	          // Rest old browsers
	        } else {
	            defer = function (id) {
	              setTimeout(ctx(run, id, 1), 0);
	            };
	          }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	"use strict";

	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(38),
	    document = __webpack_require__(12).document,

	// in old IE typeof document.createElement is 'object'
	is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $redef = __webpack_require__(14);
	module.exports = function (target, src) {
	  for (var key in src) $redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Array$from = __webpack_require__(62)['default'];

	var SYMBOL_ITERATOR = __webpack_require__(21)('iterator'),
	    SAFE_CLOSING = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  _Array$from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function () {
	      safe = true;
	    };
	    arr[SYMBOL_ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);
	__webpack_require__(64);
	module.exports = __webpack_require__(13).Array.from;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Array$from = __webpack_require__(62)['default'];

	var ctx = __webpack_require__(35),
	    $def = __webpack_require__(11),
	    toObject = __webpack_require__(65),
	    call = __webpack_require__(42),
	    isArrayIter = __webpack_require__(43),
	    toLength = __webpack_require__(44),
	    getIterFn = __webpack_require__(45);
	$def($def.S + $def.F * !__webpack_require__(61)(function (iter) {
	  _Array$from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        $$ = arguments,
	        $$len = $$.length,
	        mapfn = $$len > 1 ? $$[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	'use strict';

	var defined = __webpack_require__(8);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["prefixProperty"] = factory();else root["prefixProperty"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			function (module, exports) {

				'use strict';

				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				exports['default'] = prefixProperty;

				var styles = window.getComputedStyle(document.documentElement, '');
				var prefix = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
				var jsPrefix = 'Webkit|Moz|ms|O'.match(new RegExp('(' + prefix + ')', 'i'))[1];
				var cssPrefix = '-' + prefix + '-';
				var jsMemos = {};
				var cssMemos = {};

				function prefixProperty(property) {
					return jsProp(property);
				}
				prefixProperty.js = jsProp;
				prefixProperty.css = cssProp;
				prefixProperty.jsPrefix = jsPrefix;
				prefixProperty.cssPrefix = cssPrefix;

				function jsProp(property) {
					var memo = jsMemos[property];
					if (memo) {
						return memo;
					}
					var camelProp = camelCase(property);
					if (propExists(camelProp)) {
						return jsMemos[property] = camelProp;
					}
					var prefixed = jsPrefix + capitalize(camelProp);
					if (propExists(prefixed)) {
						return jsMemos[property] = prefixed;
					}

					return camelProp;
				}

				function cssProp(property) {
					var memo = cssMemos[property];
					if (memo) {
						return memo;
					}
					var kebabProp = kebabCase(property);
					if (propExists(kebabProp)) {
						return cssMemos[property] = kebabProp;
					}
					var prefixed = cssPrefix + kebabProp;
					if (propExists(prefixed)) {
						return cssMemos[property] = prefixed;
					}

					if (prefix === 'moz') {
						var prefixedJS = jsProp(property);
						var mozPrefixed = prefixedJS.lastIndexOf(jsPrefix, 0) === 0 ? '-' + kebabCase(prefixedJS) : kebabProp;
						return cssMemos[property] = mozPrefixed;
					}

					return kebabProp;
				}

				function propExists(property) {
					return styles[property] !== undefined;
				}

				function capitalize(str) {
					return str.charAt(0).toUpperCase() + str.slice(1);
				}

				function camelCase(str) {
					return str.replace(/-/g, ' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
						return (/\s+/.test(match) ? '' : index === 0 ? match.toLowerCase() : match.toUpperCase()
						);
					});
				}

				function kebabCase(str) {
					return str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase().replace(/[ _]/g, '-');
				}
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/***/ /***/

/***/ }
/******/ ])
});
;