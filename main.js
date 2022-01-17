/**
 * @license
 *****************************************************************************
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
*****************************************************************************/
'use strict';
this.wordle = this.wordle || {}, this.wordle.bundle = function(exports) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!AudioNode} b
   * @param {!Function} a
   * @return {undefined}
   */
  function log(b, a) {
    if (!(b instanceof a)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} a
   * @param {string} d
   * @return {undefined}
   */
  function t(a, d) {
    /** @type {number} */
    var i = 0;
    for (; i < d.length; i++) {
      var desc = d[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(a, desc.key, desc);
    }
  }
  /**
   * @param {!Function} e
   * @param {!Function} r
   * @param {!Function} n
   * @return {?}
   */
  function trigger(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  }
  /**
   * @param {!Object} object
   * @param {string} name
   * @param {string} id
   * @return {?}
   */
  function callback(object, name, id) {
    return name in object ? Object.defineProperty(object, name, {
      value : id,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = id, object;
  }
  /**
   * @param {string} message
   * @param {!Object} t
   * @return {undefined}
   */
  function on(message, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    message.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : message,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      fn(message, t);
    }
  }
  /**
   * @param {(!Function|string)} that
   * @return {?}
   */
  function wrapper(that) {
    return (wrapper = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    })(that);
  }
  /**
   * @param {string} type
   * @param {!Object} source
   * @return {?}
   */
  function fn(type, source) {
    return (fn = Object.setPrototypeOf || function(m, a) {
      return m.__proto__ = a, m;
    })(type, source);
  }
  /**
   * @return {?}
   */
  function defer() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {!Function} type
   * @param {!Array} a
   * @param {!Function} fn
   * @return {?}
   */
  function init(type, a, fn) {
    return (init = defer() ? Reflect.construct : function(type, ctorArgs, e) {
      /** @type {!Array} */
      var or_queue = [null];
      or_queue.push.apply(or_queue, ctorArgs);
      var t = new (Function.bind.apply(type, or_queue));
      return e && fn(t, e.prototype), t;
    }).apply(null, arguments);
  }
  /**
   * @param {string} ctor
   * @return {?}
   */
  function register(ctor) {
    /** @type {(Map|undefined)} */
    var ss = "function" == typeof Map ? new Map : void 0;
    return (register = function(value) {
      /**
       * @return {?}
       */
      function method() {
        return init(value, arguments, wrapper(this).constructor);
      }
      if (null === value || (s = value, -1 === Function.toString.call(s).indexOf("[native code]"))) {
        return value;
      }
      var s;
      if ("function" != typeof value) {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (void 0 !== ss) {
        if (ss.has(value)) {
          return ss.get(value);
        }
        ss.set(value, method);
      }
      return method.prototype = Object.create(value.prototype, {
        constructor : {
          value : method,
          enumerable : false,
          writable : true,
          configurable : true
        }
      }), fn(method, value);
    })(ctor);
  }
  /**
   * @param {number} name
   * @return {?}
   */
  function set(name) {
    if (void 0 === name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return name;
  }
  /**
   * @param {undefined} event
   * @param {string} a
   * @return {?}
   */
  function onChange(event, a) {
    return !a || "object" != typeof a && "function" != typeof a ? set(event) : a;
  }
  /**
   * @param {!Function} name
   * @return {?}
   */
  function makeRequest(name) {
    var deferred = defer();
    return function() {
      var val;
      var C = wrapper(name);
      if (deferred) {
        var ctor = wrapper(this).constructor;
        val = Reflect.construct(C, arguments, ctor);
      } else {
        val = C.apply(this, arguments);
      }
      return onChange(this, val);
    };
  }
  /**
   * @param {!Object} el
   * @param {number} target
   * @return {?}
   */
  function update(el, target) {
    return function(val) {
      if (Array.isArray(val)) {
        return val;
      }
    }(el) || function(s, a) {
      var g = null == s ? null : "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
      if (null == g) {
        return;
      }
      var info;
      var o;
      /** @type {!Array} */
      var m = [];
      /** @type {boolean} */
      var _n = true;
      /** @type {boolean} */
      var i = false;
      try {
        g = g.call(s);
        for (; !(_n = (info = g.next()).done) && (m.push(info.value), !a || m.length !== a); _n = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        i = true;
        o = tObj;
      } finally {
        try {
          if (!(_n || null == g.return)) {
            g.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return m;
    }(el, target) || validate(el, target) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} i
   * @return {?}
   */
  function toArray(i) {
    return function(e) {
      if (Array.isArray(e)) {
        return next(e);
      }
    }(i) || function(units) {
      if ("undefined" != typeof Symbol && null != units[Symbol.iterator] || null != units["@@iterator"]) {
        return Array.from(units);
      }
    }(i) || validate(i) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} e
   * @param {number} a
   * @return {?}
   */
  function validate(e, a) {
    if (e) {
      if ("string" == typeof e) {
        return next(e, a);
      }
      /** @type {string} */
      var k = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === k && e.constructor && (k = e.constructor.name), "Map" === k || "Set" === k ? Array.from(e) : "Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? next(e, a) : void 0;
    }
  }
  /**
   * @param {!Object} item
   * @param {number} i
   * @return {?}
   */
  function next(item, i) {
    if (null == i || i > item.length) {
      i = item.length;
    }
    /** @type {number} */
    var k = 0;
    /** @type {!Array} */
    var copy = new Array(i);
    for (; k < i; k++) {
      copy[k] = item[k];
    }
    return copy;
  }
  /**
   * @param {?} x
   * @param {?} y
   * @return {?}
   */
  function is(x, y) {
    return x === y || x != x && y != y;
  }
  /**
   * @param {!Array} keys
   * @param {!Object} key
   * @return {?}
   */
  function indexOfIdentical(keys, key) {
    var i = keys.length;
    for (; i--;) {
      if (is(keys[i][0], key)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function ListCache(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function stringify(value) {
    return null == value ? void 0 === value ? "[object Undefined]" : "[object Null]" : symToStringTag && symToStringTag in Object(value) ? function(e) {
      var t = func.call(e, x);
      var i = e[x];
      try {
        e[x] = void 0;
        /** @type {boolean} */
        var ba = true;
      } catch (e) {
      }
      var b = type.call(e);
      return ba && (t ? e[x] = i : delete e[x]), b;
    }(value) : function(obj) {
      return objToString.call(obj);
    }(value);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    var type = _typeof(obj);
    return null != obj && ("object" == type || "function" == type);
  }
  /**
   * @param {!Object} date
   * @return {?}
   */
  function toString(date) {
    if (!isArray(date)) {
      return false;
    }
    var value = stringify(date);
    return "[object Function]" == value || "[object GeneratorFunction]" == value || "[object AsyncFunction]" == value || "[object Proxy]" == value;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNative(value) {
    return !(!isArray(value) || (args = value, flagAlias && flagAlias in args)) && (toString(value) ? reIsNative : reIsHostCtor).test(function(value) {
      if (null != value) {
        try {
          return objectToString$2.call(value);
        } catch (e) {
        }
        try {
          return value + "";
        } catch (e) {
        }
      }
      return "";
    }(value));
    var args;
  }
  /**
   * @param {!Function} object
   * @param {string} key
   * @return {?}
   */
  function getNative(object, key) {
    var value = function(object, name) {
      return null == object ? void 0 : object[name];
    }(object, key);
    return isNative(value) ? value : void 0;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function Hash(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} s
   * @return {?}
   */
  function get(self, s) {
    var numrc;
    var type;
    var data = self.__data__;
    return ("string" == (type = _typeof(numrc = s)) || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== numrc : null === numrc) ? data["string" == typeof s ? "string" : "hash"] : data.map;
  }
  /**
   * @param {string} values
   * @return {undefined}
   */
  function MapCache(values) {
    /** @type {number} */
    var i = -1;
    var length = null == values ? 0 : values.length;
    this.clear();
    for (; ++i < length;) {
      var entry = values[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} entries
   * @return {undefined}
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  /**
   * @param {!Object} obj
   * @param {string} prop
   * @param {!Object} def
   * @return {undefined}
   */
  function extend(obj, prop, def) {
    if ("__proto__" == prop && defineProperty) {
      defineProperty(obj, prop, {
        configurable : true,
        enumerable : true,
        value : def,
        writable : true
      });
    } else {
      /** @type {!Object} */
      obj[prop] = def;
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} item
   * @param {?} value
   * @return {undefined}
   */
  function clone(obj, item, value) {
    if (void 0 !== value && !is(obj[item], value) || void 0 === value && !(item in obj)) {
      extend(obj, item, value);
    }
  }
  /**
   * @param {!Object} typedArray
   * @param {boolean} isDeep
   * @return {?}
   */
  function copy(typedArray, isDeep) {
    var arrayBuffer;
    var lump;
    var buffer = isDeep ? (arrayBuffer = typedArray.buffer, lump = new arrayBuffer.constructor(arrayBuffer.byteLength), (new Uint8Array(lump)).set(new Uint8Array(arrayBuffer)), lump) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  /**
   * @param {!Object} array
   * @return {?}
   */
  function require(array) {
    var obj = array && array.constructor;
    return array === ("function" == typeof obj && obj.prototype || objectProto$12);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null != obj && "object" == _typeof(obj);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function requiredValueValid(value) {
    return isObject(value) && "[object Arguments]" == stringify(value);
  }
  /**
   * @param {number} length
   * @return {?}
   */
  function isLength(length) {
    return "number" == typeof length && length > -1 && length % 1 == 0 && length <= 9007199254740991;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isString(value) {
    return null != value && isLength(value.length) && !toString(value);
  }
  /**
   * @param {!Object} value
   * @param {string} name
   * @return {?}
   */
  function isPlainObject(value, name) {
    if (("constructor" !== name || "function" != typeof value[name]) && "__proto__" != name) {
      return value[name];
    }
  }
  /**
   * @param {!Object} data
   * @param {string} key
   * @param {?} value
   * @return {undefined}
   */
  function split(data, key, value) {
    var options = data[key];
    if (!(has.call(data, key) && is(options, value) && (void 0 !== value || key in data))) {
      extend(data, key, value);
    }
  }
  /**
   * @param {?} val
   * @param {number} x
   * @return {?}
   */
  function push(val, x) {
    var type = _typeof(val);
    return !!(x = null == x ? 9007199254740991 : x) && ("number" == type || "symbol" != type && rNum.test(val)) && val > -1 && val % 1 == 0 && val < x;
  }
  /**
   * @param {!Array} value
   * @param {boolean} inherited
   * @return {?}
   */
  function arrayLikeKeys(value, inherited) {
    /** @type {boolean} */
    var isArr = _isArray(value);
    var isBuff = !isArr && isBuffer(value);
    var isTyped = !isArr && !isBuff && action(value);
    var isType = !isArr && !isBuff && !isTyped && isTypedArray(value);
    var skipIndexes = isArr || isBuff || isTyped || isType;
    var result = skipIndexes ? function(length, iteratee) {
      /** @type {number} */
      var i = -1;
      /** @type {!Array} */
      var result = Array(length);
      for (; ++i < length;) {
        /** @type {string} */
        result[i] = iteratee(i);
      }
      return result;
    }(value.length, String) : [];
    var actual = result.length;
    var key;
    for (key in value) {
      if (!(!inherited && !__hasProp.call(value, key) || skipIndexes && ("length" == key || isTyped && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || push(key, actual)))) {
        result.push(key);
      }
    }
    return result;
  }
  /**
   * @param {!Array} source
   * @return {?}
   */
  function translate(source) {
    if (!isArray(source)) {
      return function(object) {
        /** @type {!Array} */
        var arr = [];
        if (null != object) {
          var key;
          for (key in Object(object)) {
            arr.push(key);
          }
        }
        return arr;
      }(source);
    }
    var contents = require(source);
    /** @type {!Array} */
    var result = [];
    var prop;
    for (prop in source) {
      if ("constructor" != prop || !contents && safeHasOwnProperty.call(source, prop)) {
        result.push(prop);
      }
    }
    return result;
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function keys(data) {
    return isString(data) ? arrayLikeKeys(data, true) : translate(data);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function add(value) {
    return function(x, counter, data, fn) {
      /** @type {boolean} */
      var offer = !data;
      if (!data) {
        data = {};
      }
      /** @type {number} */
      var n = -1;
      var max = counter.length;
      for (; ++n < max;) {
        var i = counter[n];
        var value = fn ? fn(data[i], x[i], i, data, x) : void 0;
        if (void 0 === value) {
          value = x[i];
        }
        if (offer) {
          extend(data, i, value);
        } else {
          split(data, i, value);
        }
      }
      return data;
    }(value, keys(value));
  }
  /**
   * @param {!Object} x
   * @param {!Object} instance
   * @param {string} type
   * @param {number} fn
   * @param {!Function} map
   * @param {string} transform
   * @param {!Object} context
   * @return {undefined}
   */
  function test(x, instance, type, fn, map, transform, context) {
    var v = isPlainObject(x, type);
    var data = isPlainObject(instance, type);
    var result = context.get(data);
    if (result) {
      clone(x, type, result);
    } else {
      var val;
      var result = transform ? transform(v, data, type + "", x, instance, context) : void 0;
      /** @type {boolean} */
      var flag = void 0 === result;
      if (flag) {
        /** @type {boolean} */
        var h = _isArray(data);
        var d = !h && action(data);
        var w = !h && !d && isTypedArray(data);
        result = data;
        if (h || d || w) {
          if (_isArray(v)) {
            result = v;
          } else {
            if (isObject(val = v) && isString(val)) {
              result = function(params, result) {
                /** @type {number} */
                var p = -1;
                var q = params.length;
                if (!result) {
                  /** @type {!Array} */
                  result = Array(q);
                }
                for (; ++p < q;) {
                  result[p] = params[p];
                }
                return result;
              }(v);
            } else {
              if (d) {
                /** @type {boolean} */
                flag = false;
                result = function(o, zoomAware) {
                  if (zoomAware) {
                    return o.slice();
                  }
                  var s = o.length;
                  var date = create ? create(s) : new o.constructor(s);
                  return o.copy(date), date;
                }(data, true);
              } else {
                if (w) {
                  /** @type {boolean} */
                  flag = false;
                  result = copy(data, true);
                } else {
                  /** @type {!Array} */
                  result = [];
                }
              }
            }
          }
        } else {
          if (function(value) {
            if (!isObject(value) || "[object Object]" != stringify(value)) {
              return false;
            }
            var proto = $(value);
            if (null === proto) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }(data) || isBuffer(data)) {
            result = v;
            if (isBuffer(v)) {
              result = add(v);
            } else {
              if (!(isArray(v) && !toString(v))) {
                result = function(value) {
                  return "function" != typeof value.constructor || require(value) ? {} : resolve($(value));
                }(data);
              }
            }
          } else {
            /** @type {boolean} */
            flag = false;
          }
        }
      }
      if (flag) {
        context.set(data, result);
        map(result, data, fn, transform, context);
        context.delete(data);
      }
      clone(x, type, result);
    }
  }
  /**
   * @param {!Object} object
   * @param {!Object} source
   * @param {number} options
   * @param {string} customizer
   * @param {?} stack
   * @return {undefined}
   */
  function baseMerge(object, source, options, customizer, stack) {
    if (object !== source) {
      baseFor(source, function(srcValue, type) {
        if (stack || (stack = new Stack), isArray(srcValue)) {
          test(object, source, type, options, baseMerge, customizer, stack);
        } else {
          var result = customizer ? customizer(isPlainObject(object, type), srcValue, type + "", object, source, stack) : void 0;
          if (void 0 === result) {
            /** @type {!Object} */
            result = srcValue;
          }
          clone(object, type, result);
        }
      }, keys);
    }
  }
  /**
   * @param {!Array} keys
   * @return {?}
   */
  function key(keys) {
    return keys;
  }
  /**
   * @param {!Function} fn
   * @param {?} thisArg
   * @param {!Object} params
   * @return {?}
   */
  function applyQuick(fn, thisArg, params) {
    switch(params.length) {
      case 0:
        return fn.call(thisArg);
      case 1:
        return fn.call(thisArg, params[0]);
      case 2:
        return fn.call(thisArg, params[0], params[1]);
      case 3:
        return fn.call(thisArg, params[0], params[1], params[2]);
    }
    return fn.apply(thisArg, params);
  }
  /**
   * @param {string} id
   * @param {undefined} val
   * @return {?}
   */
  function exists(id, val) {
    return expect(function(e, i, value) {
      return i = max(void 0 === i ? e.length - 1 : i, 0), function() {
        /** @type {!Arguments} */
        var a = arguments;
        /** @type {number} */
        var j = -1;
        /** @type {number} */
        var m = max(a.length - i, 0);
        /** @type {!Array} */
        var x = Array(m);
        for (; ++j < m;) {
          x[j] = a[i + j];
        }
        /** @type {number} */
        j = -1;
        /** @type {!Array} */
        var params = Array(i + 1);
        for (; ++j < i;) {
          params[j] = a[j];
        }
        return params[i] = value(x), applyQuick(e, this, params);
      };
    }(id, val, key), id + "");
  }
  /**
   * @return {?}
   */
  function parse() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(url) || JSON.stringify(data);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function done(rows) {
    var createdRows = parse();
    !function(showThumb) {
      window.localStorage.setItem(url, JSON.stringify(showThumb));
    }(_afterCreateRow(createdRows, rows));
  }
  /**
   * @return {undefined}
   */
  function check() {
    dataLayer.push(arguments);
  }
  /**
   * @param {!Array} errors
   * @param {!NodeList} component
   * @return {?}
   */
  function filter(errors, component) {
    var tableSjis = {};
    return errors.forEach(function(inStyles, methodNameOrFunction) {
      if (component[methodNameOrFunction]) {
        /** @type {number} */
        var stylesLimit = 0;
        for (; stylesLimit < inStyles.length; stylesLimit++) {
          var sjis = inStyles[stylesLimit];
          var counter = component[methodNameOrFunction][stylesLimit];
          var id = tableSjis[sjis] || "unknown";
          if (settings[counter] > settings[id]) {
            tableSjis[sjis] = counter;
          }
        }
      }
    }), tableSjis;
  }
  /**
   * @param {number} number
   * @return {?}
   */
  function ordinal(number) {
    /** @type {!Array} */
    var suffixes = ["th", "st", "nd", "rd"];
    /** @type {number} */
    var a = number % 100;
    return number + (suffixes[(a - 20) % 10] || suffixes[a] || suffixes[0]);
  }
  /**
   * @param {!Date} obj
   * @param {!Date} val
   * @return {?}
   */
  function cb(obj, val) {
    /** @type {!Date} */
    var t = new Date(obj);
    /** @type {number} */
    var filmSteps = (new Date(val)).setHours(0, 0, 0, 0) - t.setHours(0, 0, 0, 0);
    return Math.round(filmSteps / 864E5);
  }
  /**
   * @param {!Date} a
   * @return {?}
   */
  function isDate(a) {
    var i;
    var j = getTime(a);
    return i = j * 22543 % options.length, options[i];
  }
  /**
   * @param {!Date} token
   * @return {?}
   */
  function getTime(token) {
    return cb(mutationsMap, token);
  }
  /**
   * @param {!NodeList} values
   * @return {?}
   */
  function combine(values) {
    /** @type {string} */
    var ret = "";
    /** @type {number} */
    var j = 0;
    for (; j < values.length; j++) {
      /** @type {number} */
      var braceIndex = choices.indexOf(values[j]);
      /** @type {string} */
      ret = ret + (braceIndex >= 0 ? braces[braceIndex] : "_");
    }
    return ret;
  }
  /**
   * @return {?}
   */
  function deepClone() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(STORAGE_KEY_MOCKSTORE) || JSON.stringify(train1or);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function draw(options) {
    var stdout = options.isWin;
    var includerReg = options.isStreak;
    var t = options.numGuesses;
    var data = deepClone();
    if (stdout) {
      data.guesses[t] += 1;
      if (includerReg) {
        data.currentStreak += 1;
      } else {
        /** @type {number} */
        data.currentStreak = 1;
      }
    } else {
      /** @type {number} */
      data.currentStreak = 0;
      data.guesses.fail += 1;
    }
    /** @type {number} */
    data.maxStreak = Math.max(data.currentStreak, data.maxStreak);
    data.gamesPlayed += 1;
    data.gamesWon += stdout ? 1 : 0;
    /** @type {number} */
    data.winPercentage = Math.round(data.gamesWon / data.gamesPlayed * 100);
    /** @type {number} */
    data.averageGuesses = Math.round(Object.entries(data.guesses).reduce(function(i, select) {
      var res = update(select, 2);
      var k = res[0];
      var width = res[1];
      return k !== undefined ? i = i + k * width : i;
    }, 0) / data.gamesWon);
    (function(commitData) {
      window.localStorage.setItem(STORAGE_KEY_MOCKSTORE, JSON.stringify(commitData));
    })(data);
  }
  /**
   * @param {?} thisArg
   * @param {number} _arguments
   * @param {!Function} P
   * @param {!Function} generator
   * @return {?}
   */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(expect, reject) {
      /**
       * @param {?} value
       * @return {undefined}
       */
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {?} value
       * @return {undefined}
       */
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {!Object} result
       * @return {undefined}
       */
      function step(result) {
        var x;
        if (result.done) {
          expect(result.value);
        } else {
          (x = result.value, x instanceof P ? x : new P(function(resolve) {
            resolve(x);
          })).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * @param {?} text
   * @param {!Function} a
   * @return {?}
   */
  function send(text, a) {
    /**
     * @param {number} data
     * @return {?}
     */
    function verb(data) {
      return function(i) {
        return function(op) {
          if (pp) {
            throw new TypeError("Generator is already executing.");
          }
          for (; _;) {
            try {
              if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                return t;
              }
              switch(c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  return _.label++, {
                    value : op[1],
                    done : false
                  };
                case 5:
                  _.label++;
                  c = op[1];
                  /** @type {!Array} */
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!((t = (t = _.trys).length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                    /** @type {number} */
                    _ = 0;
                    continue;
                  }
                  if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (6 === op[0] && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) {
                    _.ops.pop();
                  }
                  _.trys.pop();
                  continue;
              }
              op = a.call(text, _);
            } catch (e) {
              /** @type {!Array} */
              op = [6, e];
              /** @type {number} */
              c = 0;
            } finally {
              /** @type {number} */
              pp = t = 0;
            }
          }
          if (5 & op[0]) {
            throw op[1];
          }
          return {
            value : op[0] ? op[1] : void 0,
            done : true
          };
        }([data, i]);
      };
    }
    var pp;
    var c;
    var t;
    var g;
    var _ = {
      label : 0,
      sent : function() {
        if (1 & t[0]) {
          throw t[1];
        }
        return t[1];
      },
      trys : [],
      ops : []
    };
    return g = {
      next : verb(0),
      throw : verb(1),
      return : verb(2)
    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
      return this;
    }), g;
  }
  /**
   * @param {!Object} text
   * @param {!Object} obj
   * @param {!Event} event
   * @return {undefined}
   */
  function paste(text, obj, event) {
    var key;
    for (key in text.success = true, obj) {
      var value = obj[key];
      var data = event.clipboardData;
      data.setData(key, value);
      if ("text/plain" === key && data.getData(key) !== value) {
        /** @type {boolean} */
        text.success = false;
      }
    }
    event.preventDefault();
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function F(d) {
    var b = new e;
    var c = paste.bind(this, b, d);
    document.addEventListener("copy", c);
    try {
      document.execCommand("copy");
    } finally {
      document.removeEventListener("copy", c);
    }
    return b.success;
  }
  /**
   * @param {!Element} props
   * @param {!Object} obj
   * @return {?}
   */
  function wrap(props, obj) {
    select(props);
    var res = F(obj);
    return _moveCursorToEnd(), res;
  }
  /**
   * @param {(Node|Window)} target
   * @return {undefined}
   */
  function select(target) {
    var sel = document.getSelection();
    if (sel) {
      /** @type {(Range|null)} */
      var range = document.createRange();
      range.selectNodeContents(target);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  /**
   * @return {undefined}
   */
  function _moveCursorToEnd() {
    var selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function start(data) {
    return __awaiter(this, void 0, void 0, function() {
      var valid;
      return send(this, function(s) {
        if (valid = "text/plain" in data, "undefined" == typeof ClipboardEvent && void 0 !== state.clipboardData && void 0 !== state.clipboardData.setData) {
          if (!valid) {
            throw new Error("No `text/plain` value was specified.");
          }
          if (content = data["text/plain"], state.clipboardData.setData("Text", content)) {
            return [2, true];
          }
          throw new Error("Copying failed, possibly because the user rejected it.");
        }
        var content;
        return F(data) || navigator.userAgent.indexOf("Edge") > -1 || wrap(document.body, data) || function(parent) {
          /** @type {!Element} */
          var value = document.createElement("div");
          value.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {string} */
          value.textContent = "temporary element";
          document.body.appendChild(value);
          var result = wrap(value, parent);
          return document.body.removeChild(value), result;
        }(data) || function(total) {
          /** @type {!Element} */
          var div = document.createElement("div");
          div.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {!Element} */
          var a = div;
          if (div.attachShadow) {
            a = div.attachShadow({
              mode : "open"
            });
          }
          /** @type {!Element} */
          var body = document.createElement("span");
          /** @type {string} */
          body.innerText = total;
          a.appendChild(body);
          document.body.appendChild(div);
          select(body);
          var bubble = document.execCommand("copy");
          return _moveCursorToEnd(), document.body.removeChild(div), bubble;
        }(data["text/plain"]) ? [2, true] : [2, false];
      });
    });
  }
  /**
   * @param {!Object} time
   * @param {!Function} end
   * @param {!Function} range
   * @return {undefined}
   */
  function render(time, end, range) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 
      4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(time)) {
        (function(data) {
          return __awaiter(this, void 0, void 0, function() {
            return send(this, function(a) {
              if (renderMachines) {
                return [2, renderMachines(data)];
              }
              if (!start(function(cb) {
                var routes = {};
                return routes["text/plain"] = cb, routes;
              }(data))) {
                throw new Error("writeText() failed");
              }
              return [2];
            });
          });
        })(time.text).then(end, range);
      } else {
        navigator.share(time);
      }
    } catch (e) {
      range();
    }
    var t;
  }
  /** @type {!Element} */
  var conferenceGroupDetailsTemplate = document.createElement("template");
  /** @type {string} */
  conferenceGroupDetailsTemplate.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var Class = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "_letter", ""), callback(set(self), "_state", "empty"), callback(set(self), "_animation", "idle"), callback(set(self), "_last", false), callback(set(self), "_reveal", false), self.attachShadow({
        mode : "open"
      }), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "last",
      set : function(text) {
        /** @type {string} */
        this._last = text;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(conferenceGroupDetailsTemplate.content.cloneNode(true));
        this.$tile = this.shadowRoot.querySelector(".tile");
        this.$tile.addEventListener("animationend", function(css) {
          if ("PopIn" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
          }
          if ("FlipIn" === css.animationName) {
            self.$tile.dataset.state = self._state;
            /** @type {string} */
            self._animation = "flip-out";
          }
          if ("FlipOut" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
            if (self._last) {
              self.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                bubbles : true,
                composed : true
              }));
            }
          }
          self._render();
        });
        this._render();
      }
    }, {
      key : "attributeChangedCallback",
      value : function(matchPattern, test, value) {
        switch(matchPattern) {
          case "letter":
            if (value === test) {
              break;
            }
            var end = "null" === value ? "" : value;
            this._letter = end;
            /** @type {string} */
            this._state = end ? "tbd" : "empty";
            /** @type {string} */
            this._animation = end ? "pop" : "idle";
            break;
          case "evaluation":
            if (!value) {
              break;
            }
            /** @type {string} */
            this._state = value;
            break;
          case "reveal":
            /** @type {string} */
            this._animation = "flip-in";
            /** @type {boolean} */
            this._reveal = true;
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        if (this.$tile) {
          this.$tile.textContent = this._letter;
          if (["empty", "tbd"].includes(this._state)) {
            this.$tile.dataset.state = this._state;
          }
          if ((["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation) {
            this.$tile.dataset.animation = this._animation;
          }
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letter", "evaluation", "reveal"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-tile", Class);
  /** @type {!Element} */
  var parts = document.createElement("template");
  /** @type {string} */
  parts.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var cls = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var data;
      return log(this, update), (data = api.call(this)).attachShadow({
        mode : "open"
      }), data._letters = "", data._evaluation = [], data._length, data;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "evaluation",
      get : function() {
        return this._evaluation;
      },
      set : function(data) {
        var vroot = this;
        /** @type {!Object} */
        this._evaluation = data;
        if (this.$tiles) {
          this.$tiles.forEach(function(table, i) {
            table.setAttribute("evaluation", vroot._evaluation[i]);
            setTimeout(function() {
              table.setAttribute("reveal", "");
            }, 300 * i);
          });
        }
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var data = this;
        this.shadowRoot.appendChild(parts.content.cloneNode(true));
        this.$row = this.shadowRoot.querySelector(".row");
        /**
         * @param {number} index
         * @return {undefined}
         */
        var init = function(index) {
          /** @type {!Element} */
          var node = document.createElement("game-tile");
          var className = data._letters[index];
          if (className && node.setAttribute("letter", className), data._evaluation[index]) {
            node.setAttribute("evaluation", data._evaluation[index]);
            setTimeout(function() {
              node.setAttribute("reveal", "");
            }, 100 * index);
          }
          if (index === data._length - 1) {
            /** @type {boolean} */
            node.last = true;
          }
          data.$row.appendChild(node);
        };
        /** @type {number} */
        var i = 0;
        for (; i < this._length; i++) {
          init(i);
        }
        this.$tiles = this.shadowRoot.querySelectorAll("game-tile");
        this.addEventListener("animationend", function(css) {
          if ("Shake" === css.animationName) {
            data.removeAttribute("invalid");
          }
        });
      }
    }, {
      key : "attributeChangedCallback",
      value : function(name, a, start) {
        switch(name) {
          case "letters":
            this._letters = start || "";
            break;
          case "length":
            /** @type {number} */
            this._length = parseInt(start, 10);
            break;
          case "win":
            if (null === start) {
              this.$tiles.forEach(function(focusedObj) {
                focusedObj.classList.remove("win");
              });
              break;
            }
            this.$tiles.forEach(function(elem, scaleX) {
              elem.classList.add("win");
              /** @type {string} */
              elem.style.animationDelay = "".concat(100 * scaleX, "ms");
            });
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var data = this;
        if (this.$row) {
          this.$tiles.forEach(function(a, tag) {
            var group = data._letters[tag];
            if (group) {
              a.setAttribute("letter", group);
            } else {
              a.removeAttribute("letter");
            }
          });
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letters", "length", "invalid", "win"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-row", cls);
  /** @type {!Element} */
  var tokens = document.createElement("template");
  /** @type {string} */
  tokens.innerHTML = "\n  <slot></slot>\n";
  /** @type {string} */
  var shop_id = "darkTheme";
  /** @type {string} */
  var STORE_ID = "colorBlindTheme";
  var SorTable = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      log(this, update);
      callback(set(element = api.call(this)), "isDarkTheme", false);
      callback(set(element), "isColorBlindTheme", false);
      element.attachShadow({
        mode : "open"
      });
      /** @type {*} */
      var a = JSON.parse(window.localStorage.getItem(shop_id));
      /** @type {boolean} */
      var oldMatches = window.matchMedia("(prefers-color-scheme: dark)").matches;
      /** @type {*} */
      var addBtnElement = JSON.parse(window.localStorage.getItem(STORE_ID));
      return true === a || false === a ? element.setDarkTheme(a) : oldMatches && element.setDarkTheme(true), true !== addBtnElement && false !== addBtnElement || element.setColorBlindTheme(addBtnElement), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "setDarkTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("nightmode")) {
          a.classList.add("nightmode");
        } else {
          a.classList.remove("nightmode");
        }
        /** @type {boolean} */
        this.isDarkTheme = e;
        window.localStorage.setItem(shop_id, JSON.stringify(e));
      }
    }, {
      key : "setColorBlindTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("colorblind")) {
          a.classList.add("colorblind");
        } else {
          a.classList.remove("colorblind");
        }
        /** @type {boolean} */
        this.isColorBlindTheme = e;
        window.localStorage.setItem(STORE_ID, JSON.stringify(e));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var window_ = this;
        this.shadowRoot.appendChild(tokens.content.cloneNode(true));
        this.shadowRoot.addEventListener("game-setting-change", function(params) {
          var config = params.detail;
          var groupCellClass = config.name;
          var anim = config.checked;
          switch(groupCellClass) {
            case "dark-theme":
              return void window_.setDarkTheme(anim);
            case "color-blind-theme":
              return void window_.setColorBlindTheme(anim);
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-theme-manager", SorTable);
  /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
  var splice = Array.prototype.splice;
  /**
   * @return {undefined}
   */
  ListCache.prototype.clear = function() {
    /** @type {!Array} */
    this.__data__ = [];
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} key
   * @return {?}
   */
  ListCache.prototype.delete = function(key) {
    var data = this.__data__;
    var index = indexOfIdentical(data, key);
    return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), --this.size, true);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.get = function(key) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? void 0 : keys[index][1];
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.has = function(key) {
    return indexOfIdentical(this.__data__, key) > -1;
  };
  /**
   * @param {!Object} key
   * @param {(!Function|string)} item
   * @return {?}
   */
  ListCache.prototype.set = function(key, item) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? (++this.size, keys.push([key, item])) : keys[index][1] = item, this;
  };
  var freeGlobal = "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global;
  /** @type {(Window|boolean)} */
  var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var Symbol = root.Symbol;
  var prop = Object.prototype;
  var func = prop.hasOwnProperty;
  var type = prop.toString;
  var x = Symbol ? Symbol.toStringTag : void 0;
  /** @type {function(this:*): string} */
  var objToString = Object.prototype.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  var that;
  var coreJsData = root["__core-js_shared__"];
  /** @type {string} */
  var flagAlias = (that = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "")) ? "Symbol(src)_1." + that : "";
  /** @type {function(this:!Function): string} */
  var objectToString$2 = Function.prototype.toString;
  /** @type {!RegExp} */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var p = Function.prototype;
  var objectProto$4 = Object.prototype;
  /** @type {function(this:!Function): string} */
  var str = p.toString;
  var hasOwnProperty$2 = objectProto$4.hasOwnProperty;
  /** @type {!RegExp} */
  var reIsNative = RegExp("^" + str.call(hasOwnProperty$2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Map = getNative(root, "Map");
  var nativeCreate = getNative(Object, "create");
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
  /**
   * @return {undefined}
   */
  Hash.prototype.clear = function() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.delete = function(key) {
    var result = this.has(key) && delete this.__data__[key];
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} k
   * @return {?}
   */
  Hash.prototype.get = function(k) {
    var data = this.__data__;
    if (nativeCreate) {
      var val = data[k];
      return "__lodash_hash_undefined__" === val ? void 0 : val;
    }
    return hasOwn.call(data, k) ? data[k] : void 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.has = function(key) {
    var data = this.__data__;
    return nativeCreate ? void 0 !== data[key] : hasOwnProperty$3.call(data, key);
  };
  /**
   * @param {!Object} type
   * @param {?} value
   * @return {?}
   */
  Hash.prototype.set = function(type, value) {
    var data = this.__data__;
    return this.size += this.has(type) ? 0 : 1, data[type] = nativeCreate && void 0 === value ? "__lodash_hash_undefined__" : value, this;
  };
  /**
   * @return {undefined}
   */
  MapCache.prototype.clear = function() {
    /** @type {number} */
    this.size = 0;
    this.__data__ = {
      hash : new Hash,
      map : new (Map || ListCache),
      string : new Hash
    };
  };
  /**
   * @param {(Object|string)} id
   * @return {?}
   */
  MapCache.prototype.delete = function(id) {
    var result = get(this, id).delete(id);
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  MapCache.prototype.get = function(e) {
    return get(this, e).get(e);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  MapCache.prototype.has = function(key) {
    return get(this, key).has(key);
  };
  /**
   * @param {(Object|string)} data
   * @param {!Array} a
   * @return {?}
   */
  MapCache.prototype.set = function(data, a) {
    var x = get(this, data);
    var n = x.size;
    return x.set(data, a), this.size += x.size == n ? 0 : 1, this;
  };
  /**
   * @return {undefined}
   */
  Stack.prototype.clear = function() {
    this.__data__ = new ListCache;
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} e
   * @return {?}
   */
  Stack.prototype.delete = function(e) {
    var data = this.__data__;
    var this_area = data.delete(e);
    return this.size = data.size, this_area;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  Stack.prototype.get = function(value) {
    return this.__data__.get(value);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Stack.prototype.has = function(key) {
    return this.__data__.has(key);
  };
  /**
   * @param {(Object|string)} value
   * @param {!Array} item
   * @return {?}
   */
  Stack.prototype.set = function(value, item) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < 199) {
        return pairs.push([value, item]), this.size = ++cache.size, this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    return cache.set(value, item), this.size = cache.size, this;
  };
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      return func({}, "", {}), func;
    } catch (e) {
    }
  }();
  var fromRight;
  /**
   * @param {!Object} object
   * @param {!Function} cb
   * @param {!Function} keysFunc
   * @return {?}
   */
  var baseFor = function(object, cb, keysFunc) {
    /** @type {number} */
    var index = -1;
    /** @type {!Object} */
    var o = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    for (; length--;) {
      var p = props[fromRight ? length : ++index];
      if (false === cb(o[p], p, o)) {
        break;
      }
    }
    return object;
  };
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var uri = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var widget = uri && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var Buffer = widget && widget.exports === uri ? root.Buffer : void 0;
  var create = Buffer ? Buffer.allocUnsafe : void 0;
  var Uint8Array = root.Uint8Array;
  /** @type {function((Object|null), (Object|null)=): !Object} */
  var _create = Object.create;
  var resolve = function() {
    /**
     * @return {undefined}
     */
    function e() {
    }
    return function(obj) {
      if (!isArray(obj)) {
        return {};
      }
      if (_create) {
        return _create(obj);
      }
      /** @type {!Object} */
      e.prototype = obj;
      var b = new e;
      return e.prototype = void 0, b;
    };
  }();
  var getPrototypeOf;
  var ret;
  /** @type {function(!Object): ?} */
  var $ = (getPrototypeOf = Object.getPrototypeOf, ret = Object, function(name) {
    return getPrototypeOf(ret(name));
  });
  var objectProto$12 = Object.prototype;
  var objectProto = Object.prototype;
  var isProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  /** @type {function(!Array): ?} */
  var isBuffer = requiredValueValid(function() {
    return arguments;
  }()) ? requiredValueValid : function(value) {
    return isObject(value) && isProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  /** @type {function(*): boolean} */
  var _isArray = Array.isArray;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var freeExports = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var freeModule = freeExports && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var file = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
  var action = (file ? file.isBuffer : void 0) || function() {
    return false;
  };
  var funcProto = Function.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:!Function): string} */
  var funcToString = funcProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {string} */
  var objectCtorString = funcToString.call(Object);
  var primaryReplicas = {};
  /** @type {boolean} */
  primaryReplicas["[object Float32Array]"] = primaryReplicas["[object Float64Array]"] = primaryReplicas["[object Int8Array]"] = primaryReplicas["[object Int16Array]"] = primaryReplicas["[object Int32Array]"] = primaryReplicas["[object Uint8Array]"] = primaryReplicas["[object Uint8ClampedArray]"] = primaryReplicas["[object Uint16Array]"] = primaryReplicas["[object Uint32Array]"] = true;
  /** @type {boolean} */
  primaryReplicas["[object Arguments]"] = primaryReplicas["[object Array]"] = primaryReplicas["[object ArrayBuffer]"] = primaryReplicas["[object Boolean]"] = primaryReplicas["[object DataView]"] = primaryReplicas["[object Date]"] = primaryReplicas["[object Error]"] = primaryReplicas["[object Function]"] = primaryReplicas["[object Map]"] = primaryReplicas["[object Number]"] = primaryReplicas["[object Object]"] = primaryReplicas["[object RegExp]"] = primaryReplicas["[object Set]"] = primaryReplicas["[object String]"] = 
  primaryReplicas["[object WeakMap]"] = false;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var a = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var parent = a && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var freeProcess = parent && parent.exports === a && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var e = parent && parent.require && parent.require("util").types;
      return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? function(func) {
    return function(ldata) {
      return func(ldata);
    };
  }(nodeIsTypedArray) : function(value) {
    return isObject(value) && isLength(value.length) && !!primaryReplicas[stringify(value)];
  };
  /** @type {function(this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {!RegExp} */
  var rNum = /^(?:0|[1-9]\d*)$/;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var safeHasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {function(...?): number} */
  var max = Math.max;
  /** @type {!Function} */
  var id = defineProperty ? function(resourceClass, a) {
    return defineProperty(resourceClass, "toString", {
      configurable : true,
      enumerable : false,
      value : (_x$2 = a, function() {
        return _x$2;
      }),
      writable : true
    });
    var _x$2;
  } : key;
  /** @type {function(): number} */
  var d = Date.now;
  var expect = function(CropAreaRectangle) {
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var concurency = 0;
    return function() {
      /** @type {number} */
      var connectNumber = d();
      /** @type {number} */
      var first = 16 - (connectNumber - concurency);
      if (concurency = connectNumber, first > 0) {
        if (++a >= 800) {
          return arguments[0];
        }
      } else {
        /** @type {number} */
        a = 0;
      }
      return CropAreaRectangle.apply(void 0, arguments);
    };
  }(id);
  var merge;
  var _afterCreateRow = (merge = function(object, source, callback) {
    baseMerge(object, source, callback);
  }, exists(function(obj, array) {
    /** @type {number} */
    var i = -1;
    var length = array.length;
    var customizer = length > 1 ? array[length - 1] : void 0;
    var el_l = length > 2 ? array[2] : void 0;
    /** @type {(!Function|undefined)} */
    customizer = merge.length > 3 && "function" == typeof customizer ? (length--, customizer) : void 0;
    if (el_l && function(undefined, y, pos) {
      if (!isArray(pos)) {
        return false;
      }
      var type = _typeof(y);
      return !!("number" == type ? isString(pos) && push(y, pos.length) : "string" == type && y in pos) && is(pos[y], undefined);
    }(array[0], array[1], el_l)) {
      /** @type {(!Function|undefined)} */
      customizer = length < 3 ? void 0 : customizer;
      /** @type {number} */
      length = 1;
    }
    /** @type {!Object} */
    obj = Object(obj);
    for (; ++i < length;) {
      var item = array[i];
      if (item) {
        merge(obj, item, i, customizer);
      }
    }
    return obj;
  }));
  /** @type {string} */
  var url = "gameState";
  var data = {
    boardState : null,
    evaluations : null,
    rowIndex : null,
    solution : null,
    gameStatus : null,
    lastPlayedTs : null,
    lastCompletedTs : null,
    restoringFromLocalStorage : null,
    hardMode : false
  };
  /** @type {!Element} */
  var nodes = document.createElement("template");
  /** @type {string} */
  nodes.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Складаны варыянт</div>\n          <div class="description">Кожная падказка павінна быць выкарыстана ў наступных спробах.</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Цёмная тэма</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Кантрасныя колеры</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Водгук</div>\n        </div>\n        <div class="control">\n          <a href="https://vk.com/ololo_philolo"  target="blank" title="vk: ololo_philolo">VK</a>\n          |\n          <a href="https://t.me/ololo_philolo_bot" target="blank" title="tg: @ololo_philolo_bot">Telegram</a>\n        </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <p>Аўтар арыгінальнай гульні: Джош Уордл. Згуляць на ангельскай мове можно <a href = "https://www.powerlanguage.co.uk/wordle/">па спасылцы</a>.<br>Перакладзена на беларускую мову з дапамогай <a href="http://www.slounik.org/sbm/">Слоўніка беларускай мовы</a>.</p>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="puzzle-number"></div>\n </div>\n  </div>\n';
  var XelDemoElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "gameApp", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var e;
        var modal = this;
        this.shadowRoot.appendChild(nodes.content.cloneNode(true));
        /** @type {string} */
        this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset);
        this.shadowRoot.addEventListener("game-switch-change", function(event) {
          event.stopPropagation();
          var node = event.detail;
          var t = node.name;
          var value = node.checked;
          var isDisabled = node.disabled;
          modal.dispatchEvent(new CustomEvent("game-setting-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : t,
              checked : value,
              disabled : isDisabled
            }
          }));
          modal.render();
        });
        this.render();
      }
    }, {
      key : "render",
      value : function() {
        /** @type {(Element|null)} */
        var e = document.querySelector("body");
        if (e.classList.contains("nightmode")) {
          this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", "");
        }
        if (e.classList.contains("colorblind")) {
          this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
        }
        var from = parse();
        if (from.hardMode) {
          this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", "");
        }
        if (!(from.hardMode || "IN_PROGRESS" !== from.gameStatus || 0 === from.rowIndex)) {
          this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked");
          this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", "");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-settings", XelDemoElement);
  /** @type {!Element} */
  var content = document.createElement("template");
  /** @type {string} */
  content.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var wndMain;
  var ActionSheetButtonElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_duration", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var gobel = this;
        this.shadowRoot.appendChild(content.content.cloneNode(true));
        var e = this.shadowRoot.querySelector(".toast");
        e.textContent = this.getAttribute("text");
        this._duration = this.getAttribute("duration") || 1E3;
        if ("Infinity" !== this._duration) {
          setTimeout(function() {
            e.classList.add("fade");
          }, this._duration);
        }
        e.addEventListener("transitionend", function(a) {
          gobel.parentNode.removeChild(gobel);
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-toast", ActionSheetButtonElement);
  window.dataLayer = window.dataLayer || [];
  check("js", new Date);
  /** @type {!Array} */
  var options = ["абвеў",
"абвод",
"абвоз",
"абгон",
"абдым",
"аб'ём",
"абкос",
"аблет",
"аблёт",
"аблік",
"аблом",
"аблоў",
"абмен",
"абмер",
"абмін",
"абмол",
"аборт",
"аброк",
"абрус",
"абруч",
"абрыс",
"абрыў",
"абрэз",
"абрэк",
"абсеў",
"абсяг",
"абуты",
"абуць",
"абход",
"авеню",
"авечы",
"авіць",
"авоід",
"агент",
"агляд",
"агонь",
"агрэх",
"адбой",
"адбор",
"адвес",
"адвоз",
"адгін",
"адгон",
"адгул",
"аджын",
"адзёр",
"адзін",
"адзол",
"адкол",
"адкос",
"адлік",
"адлёт",
"адліў",
"адлоў",
"адпеў",
"адпор",
"адрыў",
"адрэз",
"адсек",
"адсеў",
"адток",
"адхон",
"адцёк",
"адчэп",
"адэпт",
"аерны",
"ажыць",
"азімы",
"азіят",
"айрол",
"айрот",
"айсор",
"айчым",
"акіян",
"аковы",
"акорд",
"аксід",
"аксон",
"актыў",
"акунь",
"акуць",
"акцёр",
"акцін",
"акцыз",
"акцыя",
"алеін",
"алень",
"алеут",
"алімп",
"алтын",
"альбо",
"альяс",
"амбон",
"амеці",
"аміны",
"аміяк",
"амлет",
"ампер",
"ампір",
"ангоб",
"аніяк",
"анкер",
"антрэ",
"антык",
"апеты",
"апець",
"аплік",
"аплот",
"аплыў",
"апорт",
"апроч",
"апрош",
"апячы",
"аргон",
"аргус",
"ардэн",
"аркуш",
"арлец",
"арлон",
"арляк",
"армія",
"армяк",
"архіў",
"аршын",
"арышт",
"арэлі",
"арэол",
"арыец",
"асвер",
"асеін",
"аселы",
"асетр",
"асець",
"асіны",
"аскет",
"асляк",
"асмол",
"асобы",
"аспід",
"астой",
"астоя",
"асцыт",
"асцюк",
"асцяк",
"асявы",
"асячы",
"атэль",
"аўгур",
"аўдыт",
"аўсюк",
"аўтол",
"афект",
"афеня",
"афікс",
"афсет",
"афшор",
"афорт",
"ацячы",
"ашыек",
"багер",
"багет",
"багор",
"багун",
"бажок",
"базіс",
"балет",
"балея",
"балід",
"балон",
"балты",
"балык",
"банер",
"бардо",
"бармы",
"барон",
"барыд",
"барый",
"барыт",
"барыш",
"барэй",
"барэт",
"барэц",
"басок",
"басон",
"бастр",
"басці",
"басяк",
"батлы",
"батог",
"батон",
"батыр",
"бахур",
"бацян",
"бачны",
"бачок",
"баявы",
"баяць",
"бегла",
"беглы",
"бегма",
"бегчы",
"бедна",
"бедны",
"бейка",
"бекар",
"бекас",
"бекон",
"белыя",
"бераг",
"берма",
"берыл",
"берэт",
"бетон",
"бёрда",
"бівак",
"бігас",
"бізон",
"бізун",
"білет",
"білон",
"бімсы",
"бінга",
"біном",
"біржа",
"бірка",
"біруч",
"бісер",
"бітва",
"бітка",
"бітон",
"біцюг",
"благі",
"бланк",
"блінт",
"бліск",
"блісь",
"блуза",
"блыха",
"блюда",
"бляск",
"бляха",
"богаў",
"бодзі",
"бодня",
"бойка",
"бойкі",
"бойня",
"бокам",
"болей",
"больш",
"бомка",
"бонза",
"бонус",
"борны",
"борць",
"боршч",
"боскі",
"боўць",
"бохан",
"бочка",
"бравы",
"бразь",
"браны",
"браня",
"браць",
"бровы",
"бронь",
"брусы",
"брута",
"бруха",
"брыда",
"брыдж",
"брыль",
"брыца",
"брыць",
"брэйк",
"брэнд",
"бугай",
"бугор",
"будан",
"будзе",
"будка",
"буйна",
"буйны",
"букер",
"букет",
"букле",
"букля",
"букта",
"булат",
"булён",
"буліт",
"булка",
"бурак",
"буран",
"бурат",
"бурда",
"бурка",
"буркі",
"бурна",
"бурны",
"бурса",
"бусел",
"бутан",
"бутля",
"бутон",
"бутыл",
"буфер",
"буфет",
"буфон",
"бухта",
"буцік",
"бучна",
"бучны",
"буякі",
"буялы",
"буяна",
"буяны",
"буяць",
"былое",
"бычок",
"бэйдж",
"бювар",
"бювет",
"бягом",
"бягун",
"бядак",
"бядро",
"бялей",
"бялёк",
"бялок",
"бярно",
"вабік",
"вабны",
"вагон",
"вагул",
"вадкі",
"вадыр",
"важкі",
"важны",
"вазок",
"вазон",
"вакол",
"валет",
"валёр",
"валік",
"валкі",
"валок",
"валуй",
"валун",
"вальс",
"валюш",
"ванты",
"варкі",
"варты",
"ватны",
"вафля",
"вацін",
"вацяк",
"вежка",
"везці",
"вейкі",
"веліч",
"велюр",
"венгр",
"венды",
"венік",
"венца",
"верад",
"верас",
"верая",
"вержэ",
"веркі",
"верна",
"верны",
"верць",
"верша",
"вечка",
"вечна",
"вечны",
"вешка",
"вешчы",
"вечар",
"весні",
"весці",
"весць",
"ветах",
"ветка",
"веяны",
"веяць",
"вёска",
"відно",
"відны",
"відок",
"відук",
"відэа",
"візаж",
"віёла",
"вілка",
"вінда",
"віраж",
"вірок",
"вірус",
"віслы",
"вітка",
"віток",
"віхар",
"віхор",
"вішня",
"вобад",
"вобла",
"водар",
"водны",
"вожаг",
"вожык",
"возка",
"вокал",
"вокіс",
"вокны",
"волак",
"волас",
"волат",
"волка",
"волкі",
"вольт",
"вонкі",
"вопіс",
"вопыт",
"вораг",
"ворка",
"ворны",
"восем",
"воспа",
"восці",
"восць",
"восып",
"вотум",
"воўна",
"воўчы",
"вохкі",
"вохра",
"вохці",
"воцат",
"вочап",
"вочка",
"вочны",
"вуаль",
"вугал",
"вугор",
"вудар",
"вузей",
"вузел",
"вузка",
"вузкі",
"вулей",
"вулка",
"вусач",
"вусна",
"вусны",
"вусце",
"вутка",
"вушак",
"вушка",
"вушкі",
"вушны",
"выбар",
"выбух",
"выган",
"выгар",
"выгіб",
"выгук",
"выгул",
"выдма",
"выдра",
"выезд",
"выжал",
"выжла",
"вызаў",
"выкас",
"выкід",
"выкуп",
"выкус",
"вылаз",
"вылам",
"вылаў",
"вылет",
"вылік",
"вымах",
"вымер",
"вынас",
"вынік",
"выпад",
"выпар",
"выпас",
"выпат",
"выпіс",
"выраб",
"выраз",
"вырай",
"вырак",
"вырод",
"выруб",
"высеў",
"выспа",
"выток",
"выхад",
"вышаг",
"вышай",
"вышка",
"вышкі",
"вышук",
"вышэй",
"вэлюм",
"вядро",
"вязка",
"вязкі",
"вянец",
"вянок",
"вярба",
"вярхі",
"вясло",
"вясна",
"вятох",
"вяхір",
"габой",
"гавот",
"гадкі",
"гадок",
"газік",
"газон",
"газыр",
"гаіць",
"гайды",
"гайня",
"галец",
"галій",
"галон",
"галоп",
"галун",
"галын",
"галыш",
"галяк",
"гамоз",
"ганец",
"ганок",
"гарох",
"гарус",
"гарод",
"гарэм",
"гафрэ",
"гаючы",
"гвозд",
"гвалт",
"гейша",
"гелій",
"геній",
"геном",
"герма",
"герой",
"гетры",
"гібка",
"гіблы",
"гібон",
"гідка",
"гідра",
"гіена",
"гіляк",
"гінея",
"гіпюр",
"гірка",
"гірса",
"гітан",
"гічка",
"глаўк",
"глеба",
"гліна",
"гліпт",
"гліст",
"глоса",
"глузд",
"глуха",
"глухі",
"глыба",
"глясэ",
"гміна",
"гнаёк",
"гнаць",
"гнеды",
"гнейс",
"гніда",
"гнілы",
"гніль",
"гнома",
"гнуты",
"гнуць",
"годзе",
"годна",
"годны",
"голад",
"голас",
"голуб",
"гольд",
"гольф",
"гоман",
"гонар",
"гонка",
"гонкі",
"гонта",
"гончы",
"гопля",
"горад",
"горай",
"горан",
"горац",
"горда",
"горды",
"горка",
"горкі",
"горла",
"горна",
"горны",
"горст",
"горшы",
"горыч",
"госць",
"госця",
"гоцкі",
"гразі",
"гразь",
"гранд",
"грант",
"грань",
"граць",
"грошы",
"груба",
"грубы",
"груда",
"грузд",
"грунт",
"група",
"груца",
"груша",
"грыва",
"грыжа",
"грыль",
"грэна",
"грэць",
"губан",
"губач",
"губка",
"губны",
"гудок",
"гужам",
"гузік",
"гузка",
"гузыр",
"гулец",
"гулка",
"гулкі",
"гуляш",
"гумар",
"гуміт",
"гумка",
"гумно",
"гумоз",
"гумор",
"гупат",
"гурба",
"гурок",
"гурыя",
"гусак",
"гусар",
"гуска",
"гуслі",
"густа",
"густы",
"гусці",
"гучна",
"гучны",
"гучок",
"гушча",
"дабро",
"дазор",
"даіць",
"дакор",
"далей",
"далеч",
"далоў",
"дамен",
"дамок",
"дамоў",
"данец",
"данос",
"даныя",
"дармо",
"дартс",
"дарчы",
"дасеў",
"дасол",
"дасье",
"даўгі",
"даўкі",
"даўні",
"даўно",
"дафін",
"дацкі",
"дачны",
"дбаць",
"джыга",
"дзела",
"дзель",
"дзеля",
"дзень",
"дзець",
"дзеяч",
"дзіва",
"дзіка",
"дзінь",
"дзіра",
"дзіця",
"дзюба",
"дзюна",
"дзяга",
"дзяжа",
"днець",
"днямі",
"добра",
"добры",
"догма",
"доены",
"дойка",
"дойна",
"дойны",
"доказ",
"докер",
"долам",
"долар",
"домік",
"домна",
"домра",
"донар",
"донка",
"донца",
"допіс",
"допыт",
"дотык",
"доўга",
"доўгі",
"дохлы",
"дошка",
"драбы",
"дражэ",
"драйв",
"драны",
"драць",
"дровы",
"другі",
"друза",
"дрыль",
"дрэва",
"дрэйф",
"дрэма",
"дрэна",
"дрэнь",
"дуаен",
"дубам",
"дубец",
"дуб'ё",
"дубка",
"дубль",
"дубок",
"дугой",
"дужка",
"дужэй",
"дукат",
"дулеб",
"думец",
"думка",
"думны",
"дупло",
"дурны",
"дутар",
"дутыш",
"духан",
"душна",
"душны",
"душок",
"дуэль",
"дыбам",
"дыбка",
"дыбкі",
"дыван",
"дыгер",
"дыета",
"дылер",
"дымар",
"дымка",
"дымна",
"дымок",
"дынар",
"дынас",
"дынга",
"дэбет",
"дэбіл",
"дэбіт",
"дэбош",
"дэбют",
"дэвіз",
"дэвон",
"дэізм",
"дэіст",
"дэкан",
"дэкор",
"дэман",
"дэмас",
"дэнім",
"дэраш",
"дэрбі",
"дэрма",
"дэфіс",
"ерась",
"езуіт",
"екаць",
"еўнух",
"ёгурт",
"ёдызм",
"ёкаць",
"ёршык",
"жабін",
"жабры",
"жадны",
"жазло",
"жакей",
"жакет",
"жакоб",
"жаніх",
"жанкі",
"жарон",
"жатны",
"жмакі",
"жменя",
"жніва",
"жолаб",
"жолуд",
"жонка",
"жораў",
"жулан",
"жулік",
"жорны",
"жоўты",
"жоўць",
"жрыца",
"жупан",
"жупел",
"жураў",
"журба",
"жухлы",
"жучок",
"жывец",
"жывот",
"жылец",
"жылка",
"жытка",
"жытло",
"жытні",
"жытцо",
"жыхар",
"жыціе",
"жыцік",
"жычка",
"жэрах",
"забег",
"забой",
"забор",
"завея",
"завод",
"завуч",
"загіб",
"загін",
"загон",
"задні",
"задок",
"задор",
"заечы",
"закід",
"закіс",
"закон",
"закот",
"закуп",
"закут",
"залік",
"заліў",
"залог",
"залом",
"замер",
"замес",
"заміж",
"замок",
"замор",
"замуж",
"занос",
"запек",
"запеў",
"запіс",
"запой",
"запор",
"запыт",
"зароб",
"зарок",
"засек",
"засеў",
"засор",
"затое",
"затон",
"затор",
"затым",
"заход",
"захоп",
"зацёк",
"зачос",
"зачын",
"зачэп",
"збіты",
"збіць",
"збоку",
"зборы",
"зброд",
"зброя",
"збруя",
"збыць",
"званы",
"зваць",
"звеку",
"зверх",
"звіты",
"звіць",
"зводы",
"звяга",
"звялы",
"звяно",
"звяць",
"згары",
"згода",
"зграя",
"згуба",
"здаля",
"здань",
"здаць",
"здоба",
"здрок",
"здуць",
"зебра",
"зельц",
"земны",
"зеніт",
"зенкі",
"зеўра",
"зефір",
"зёлкі",
"зжаты",
"зжаць",
"зжыць",
"зімка",
"зімна",
"зімны",
"зімой",
"зіпун",
"злакі",
"злева",
"злець",
"зліты",
"зліць",
"злоты",
"злюка",
"змена",
"змест",
"змова",
"змога",
"змаху",
"змора",
"змрок",
"змыць",
"змяты",
"змяць",
"знаць",
"зныць",
"зняты",
"зняць",
"золак",
"золка",
"золкі",
"зомбі",
"зорка",
"зоркі",
"зорна",
"зорны",
"зроду",
"зрост",
"зрукі",
"зрыць",
"зуб'е",
"зубец",
"зыбка",
"зыбкі",
"зыбун",
"зумер",
"зурна",
"зусім",
"зубны",
"зубок",
"зыркі",
"зысці",
"зыход",
"зычна",
"зырка",
"зябер",
"зябка",
"зябкі",
"іберы",
"зяблы",
"з'ява",
"зявок",
"зямны",
"ігрок",
"ігрэк",
"ідэал",
"ідыёт",
"іерэй",
"ізгой",
"ізноў",
"ізюбр",
"іжыца",
"ікаць",
"ікона",
"ільга",
"ілька",
"ільма",
"ілоты",
"ілгун",
"імгла",
"імпэт",
"інакш",
"інвар",
"інгуш",
"індый",
"індык",
"індол",
"індус",
"інець",
"інжыр",
"інтым",
"іншае",
"іншая",
"іншыя",
"іпрыт",
"ірмас",
"іскра",
"іслам",
"ітрый",
"іхняе",
"кабул",
"кабыз",
"кавун",
"кагор",
"кадзь",
"кадры",
"кадэт",
"кажух",
"казёл",
"казус",
"кайло",
"кайнэ",
"калеж",
"калет",
"калій",
"каліт",
"каліф",
"калон",
"калос",
"калун",
"калым",
"калье",
"камея",
"камін",
"канец",
"каноэ",
"капеж",
"капер",
"капец",
"кап'ё",
"капёр",
"капля",
"капот",
"капры",
"капун",
"капут",
"капыл",
"капыт",
"карны",
"карст",
"карэц",
"касец",
"касір",
"касія",
"катод",
"катух",
"кафля",
"кацёл",
"кашнэ",
"кашпо",
"кашуб",
"квант",
"кварц",
"квіта",
"квіты",
"квола",
"кволы",
"квота",
"кеглі",
"келар",
"келіх",
"кельт",
"кенар",
"кенаф",
"кендо",
"кесар",
"кесон",
"кетон",
"кефір",
"кеш'ю",
"ківер",
"ківот",
"кілер",
"кірза",
"кірпа",
"кірха",
"кісет",
"кісла",
"кіслы",
"кісля",
"кіста",
"кісць",
"кітаб",
"кішма",
"клады",
"класы",
"клема",
"клець",
"клешч",
"клінч",
"клішэ",
"клоўн",
"клуня",
"кляты",
"кляча",
"кнехт",
"кніга",
"кніца",
"кнэлі",
"княжы",
"князь",
"кобза",
"кобра",
"кобыз",
"кодла",
"кожны",
"козлы",
"козыр",
"козыт",
"колас",
"колба",
"колер",
"колца",
"кольт",
"комін",
"конта",
"конус",
"конюх",
"копія",
"копра",
"копша",
"кораб",
"корба",
"корда",
"космы",
"косна",
"косны",
"косць",
"коўзь",
"кофта",
"кошар",
"кпіць",
"крагі",
"краля",
"краты",
"крашэ",
"кроза",
"кроль",
"крона",
"круіз",
"крупы",
"крута",
"круты",
"круць",
"круча",
"крыва",
"крыга",
"крыло",
"крысо",
"крыха",
"крыху",
"крыца",
"крыць",
"крэда",
"крэол",
"кубел",
"кудла",
"кудлы",
"кузаў",
"кузня",
"кулан",
"кулеш",
"кулём",
"куліч",
"кулон",
"культ",
"кумач",
"кумжа",
"кумір",
"купаж",
"купал",
"кумыс",
"купец",
"куп'ё",
"купля",
"купон",
"курна",
"курны",
"курта",
"курыя",
"курэц",
"кутас",
"кутні",
"куфар",
"кухан",
"кухар",
"кухня",
"куцюр",
"кучма",
"кучна",
"лабок",
"кучны",
"кхмер",
"кювет",
"лавец",
"лагер",
"ладкі",
"ладны",
"лажны",
"лажок",
"лазер",
"лазня",
"лазун",
"лакей",
"лам'ё",
"ландо",
"ланды",
"лапці",
"лапік",
"ларок",
"ласун",
"латны",
"латок",
"латук",
"латыш",
"лаўры",
"лафет",
"лафіт",
"лаяць",
"лгаць",
"легат",
"легчы",
"ледзь",
"лежма",
"лежня",
"лезці",
"лейка",
"лейцы",
"лекар",
"лента",
"лепка",
"лепра",
"лепта",
"лепшы",
"лерка",
"лескі",
"летам",
"лёгка",
"лёгкі",
"лёжка",
"лёкай",
"летні",
"лёска",
"лётам",
"лётка",
"лётны",
"лжыва",
"лівер",
"лідар",
"лізат",
"лізун",
"лікёр",
"ліман",
"лімон",
"лімфа",
"лінёк",
"лінза",
"ліпец",
"ліпка",
"лірны",
"лірык",
"ліска",
"лісце",
"літар",
"літка",
"літый",
"літыя",
"ліхач",
"ліцэй",
"лічба",
"лішай",
"лішак",
"лішка",
"лішне",
"ліяна",
"лобны",
"логік",
"лодар",
"лодка",
"лоевы",
"ложак",
"локан",
"ломік",
"ломка",
"ломкі",
"лонжа",
"лопат",
"лопух",
"лотас",
"лоўкі",
"лоўчы",
"лоцыя",
"лубін",
"лубок",
"лужок",
"лузан",
"лузга",
"луніт",
"лунка",
"лупка",
"луска",
"луста",
"лухта",
"лучок",
"лыжка",
"лыжня",
"лысун",
"лытка",
"лычкі",
"лэдзі",
"любая",
"любка",
"любоў",
"люгер",
"людзі",
"людна",
"людны",
"людцы",
"люмен",
"люнет",
"люпус",
"лютня",
"люцік",
"лявак",
"лядны",
"лядок",
"лядыш",
"ляжак",
"ляжка",
"лямец",
"лямеш",
"лямка",
"лямпа",
"лянок",
"ляпіс",
"ляпны",
"ляска",
"лясны",
"лясок",
"лясун",
"ляток",
"лятун",
"ляўша",
"магія",
"магот",
"магчы",
"маёвы",
"мажны",
"мажор",
"мазгі",
"мазер",
"мазкі",
"мазня",
"мазок",
"мазур",
"мазут",
"макет",
"максі",
"малец",
"малёк",
"малое",
"малох",
"малыш",
"маляр",
"манеж",
"манер",
"манія",
"мансі",
"манто",
"манул",
"мапед",
"маркі",
"марля",
"марны",
"мароз",
"масіў",
"масон",
"масць",
"матня",
"маток",
"матор",
"матуз",
"матыў",
"мафія",
"махры",
"махер",
"машок",
"медны",
"медык",
"медыя",
"медзь",
"мезон",
"мелас",
"мелка",
"мелкі",
"меншы",
"мерка",
"мерна",
"мерны",
"мерці",
"месны",
"месца",
"месці",
"месяц",
"метад",
"метал",
"метан",
"метка",
"меткі",
"метол",
"метоп",
"метро",
"метыл",
"метыс",
"мідыя",
"мікст",
"мілая",
"мінея",
"мінёр",
"мінор",
"мінус",
"міраж",
"мірза",
"мірна",
"мірны",
"мірон",
"міска",
"мітоз",
"мітра",
"млець",
"мліва",
"млява",
"млявы",
"многа",
"могул",
"модлы",
"модна",
"модны",
"модус",
"можна",
"мойва",
"мокра",
"мокры",
"молат",
"морак",
"морда",
"морфа",
"моўны",
"моцна",
"моцны",
"мочка",
"мошка",
"мошчы",
"мужаў",
"мужна",
"мужны",
"мужык",
"музей",
"мулат",
"муліт",
"мулка",
"мулкі",
"мудра",
"мудры",
"муляж",
"муляр",
"мураш",
"мурза",
"мурло",
"мурог",
"мусон",
"мутна",
"мутны",
"мутон",
"муфта",
"мучан",
"мучны",
"мушка",
"мыйка",
"мыйня",
"мылец",
"мылкі",
"мыска",
"мысль",
"мысок",
"мытар",
"мытня",
"мышка",
"мышца",
"мэбля",
"мэрыя",
"мюрыд",
"мюслі",
"мядок",
"мязга",
"мякіш",
"мялка",
"мянёк",
"мясны",
"мятла",
"мятны",
"мяцеж",
"мячык",
"набег",
"набой",
"набок",
"набор",
"навек",
"навес",
"навой",
"навык",
"нагул",
"надой",
"надум",
"наезд",
"назло",
"назоў",
"накід",
"накіп",
"накол",
"накос",
"налёт",
"налік",
"наліў",
"налом",
"намер",
"намёк",
"намол",
"намул",
"намыў",
"напеў",
"напой",
"напор",
"нарды",
"нарты",
"нарог",
"народ",
"нарыс",
"нарыў",
"нарэз",
"наскі",
"насок",
"насып",
"наўме",
"нахіл",
"нацёк",
"нацыя",
"начос",
"нашто",
"наяве",
"небыт",
"невад",
"невук",
"нейкі",
"нейчы",
"немач",
"немка",
"нерат",
"нерка",
"нерол",
"нерпа",
"неруш",
"несці",
"нетры",
"нехта",
"нешта",
"нідзе",
"ніжэй",
"нізам",
"нізка",
"ніклы",
"німфа",
"нітка",
"ніўка",
"ніхто",
"ніцма",
"нічыё",
"нічый",
"нічыя",
"нішто",
"нораў",
"норка",
"норма",
"норыя",
"носік",
"носка",
"носкі",
"ножка",
"ножык",
"нумар",
"нотка",
"ночвы",
"ночка",
"ношка",
"нутро",
"нырка",
"нырок",
"нырэц",
"ныцік",
"нэцке",
"нябож",
"нябыт",
"нямко",
"няўжо",
"окаць",
"няхай",
"омуль",
"онікс",
"опера",
"опіум",
"оптам",
"оптык",
"опцыя",
"орган",
"оргія",
"ордэн",
"осмій",
"пабоі",
"павек",
"павет",
"павеў",
"павой",
"павук",
"пагон",
"падзь",
"падкі",
"падол",
"падуб",
"пазёр",
"пазлы",
"пазур",
"паіць",
"пакет",
"пакля",
"пакой",
"пакос",
"палец",
"палёт",
"паліў",
"палкі",
"палок",
"палом",
"палон",
"палын",
"паляк",
"памер",
"памёт",
"паміж",
"памін",
"памол",
"памор",
"памыі",
"паніч",
"панок",
"панос",
"панты",
"панур",
"панус",
"панюх",
"парны",
"парог",
"парок",
"паром",
"парою",
"парус",
"парык",
"парыў",
"парэз",
"парэй",
"пасіў",
"пасія",
"пасля",
"пасол",
"пасці",
"пасыл",
"патлы",
"паток",
"паўшы",
"пахіл",
"пахкі",
"паход",
"пацір",
"пацук",
"пачым",
"пачын",
"пашыў",
"паявы",
"паяны",
"паяць",
"п'еза",
"пекан",
"пекар",
"пекла",
"пеліт",
"пемза",
"пенал",
"пенка",
"перад",
"перац",
"перлы",
"п'еро",
"перон",
"персі",
"перці",
"першы",
"п'еса",
"песня",
"песта",
"песты",
"пеўчы",
"печая",
"печка",
"пешка",
"пешня",
"пёрка",
"піжма",
"піжон",
"пікет",
"пікта",
"пікша",
"пілка",
"пілон",
"пілот",
"пінта",
"пірат",
"пірке",
"пірог",
"пірол",
"пірыт",
"пісар",
"пісец",
"пісчы",
"пісяг",
"пітво",
"пітны",
"піток",
"пітон",
"піўны",
"піўцо",
"піхта",
"піяла",
"піяна",
"пласт",
"плато",
"плебс",
"племя",
"плець",
"плечы",
"плашч",
"плісэ",
"пліта",
"пліца",
"плоць",
"плынь",
"плыць",
"плэер",
"плюшч",
"плява",
"пляга",
"пляма",
"пляск",
"плячо",
"пнуць",
"побач",
"побыт",
"повад",
"повар",
"подла",
"подлы",
"позна",
"позні",
"позыў",
"пойла",
"пойма",
"покат",
"покер",
"подый",
"подых",
"поезд",
"поены",
"пожаг",
"пожня",
"позва",
"позех",
"полаг",
"полаз",
"полба",
"поліс",
"полка",
"полюс",
"помач",
"помеж",
"понаж",
"порах",
"порка",
"порск",
"порта",
"поруч",
"понча",
"посах",
"посны",
"посуд",
"посул",
"потны",
"потым",
"поўна",
"поўны",
"поўня",
"поўха",
"похва",
"почка",
"пошла",
"пошлы",
"пошта",
"пошук",
"пошум",
"правы",
"праём",
"прамы",
"праць",
"проба",
"проза",
"проса",
"прост",
"проці",
"прыём",
"прыма",
"прынт",
"прынц",
"прычт",
"прышч",
"прэлы",
"прэль",
"прэнт",
"прэса",
"прэць",
"псіна",
"псіны",
"псовы",
"псуць",
"пугач",
"пудка",
"пудкі",
"пудла",
"пудра",
"пужка",
"пузан",
"пузач",
"пузыр",
"пульс",
"пульт",
"пункт",
"пурга",
"пурын",
"пуста",
"пусты",
"путны",
"пуфік",
"пухір",
"пухкі",
"пухлы",
"пучок",
"пушка",
"пушны",
"пушок",
"пушта",
"пушча",
"пхаць",
"пылок",
"пыска",
"пышка",
"пышна",
"пэйсы",
"пэўна",
"пэўны",
"пявун",
"п'яны",
"пярга",
"пярун",
"пясец",
"пяскі",
"пясок",
"пясць",
"пятак",
"пятка",
"пяток",
"пячны",
"пяюха",
"рабін",
"равок",
"равун",
"рагоз",
"радно",
"радня",
"радок",
"радон",
"радыё",
"радый",
"ражкі",
"ражок",
"ражон",
"разец",
"разны",
"разня",
"разок",
"раіць",
"ракія",
"ракля",
"раміз",
"рамны",
"рамон",
"рандо",
"раней",
"ранет",
"ранец",
"рапны",
"расол",
"расці",
"ратны",
"ратон",
"раўнд",
"раўня",
"раўці",
"рафія",
"рахіт",
"рацін",
"рацыя",
"рачны",
"рачок",
"раяль",
"рваны",
"рвань",
"рваць",
"рвота",
"ржавы",
"ржаць",
"робат",
"рогат",
"родна",
"родны",
"родый",
"роевы",
"розга",
"розна",
"розны",
"розум",
"роіла",
"ройны",
"рокат",
"ролік",
"ронда",
"ронжа",
"рослы",
"росна",
"росны",
"ротны",
"роўма",
"роўна",
"роўны",
"роўня",
"роцік",
"ртуць",
"рубам",
"рубеж",
"рубец",
"рубін",
"рубка",
"рудны",
"рудня",
"руіна",
"рукаў",
"рулет",
"рулон",
"румба",
"румза",
"румын",
"рупія",
"рупна",
"рупны",
"русак",
"русін",
"рускі",
"рутыл",
"рухач",
"руцін",
"ручай",
"ручка",
"ручны",
"рыбак",
"рыбец",
"рыбін",
"рыбка",
"рывок",
"рыжак",
"рыкша",
"рынак",
"рында",
"рыніт",
"рынка",
"рысак",
"рыска",
"рыфлі",
"рыфма",
"рыхла",
"рычаг",
"рэбус",
"рэгбі",
"рэдзь",
"рэдка",
"рэдкі",
"рэдут",
"рэжым",
"рэзка",
"рэзкі",
"рэзон",
"рэзус",
"рэйка",
"рэкет",
"рэліз",
"рэлін",
"рэмез",
"рэній",
"рэнта",
"рэпка",
"рэпны",
"рэтуш",
"рэхва",
"рэцін",
"рэчка",
"рэшка",
"рэшта",
"сабор",
"сабур",
"савет",
"сагіб",
"садкі",
"садок",
"садом",
"сакля",
"салеп",
"салея",
"салон",
"салют",
"самец",
"саміт",
"санет",
"санкі",
"сапёр",
"сапло",
"сапны",
"сапун",
"сапці",
"сарыт",
"сарыч",
"сатыр",
"сафіт",
"сафой",
"сахор",
"сацін",
"сачок",
"сваяк",
"свежа",
"свежы",
"сверб",
"свіль",
"свіны",
"світа",
"свішч",
"свята",
"святы",
"седан",
"седня",
"сезам",
"сезон",
"сейва",
"сейша",
"секта",
"секчы",
"селін",
"семіт",
"семкі",
"сенат",
"сенцы",
"сепія",
"серка",
"серны",
"серум",
"серыя",
"сетка",
"сечка",
"сеяны",
"сеяць",
"сёмга",
"сівак",
"сівер",
"сівец",
"сівуч",
"сігма",
"сіена",
"сікоз",
"сілай",
"сілач",
"сілок",
"сілур",
"сільф",
"сінап",
"сінгл",
"сінец",
"сінод",
"сіняк",
"сіпай",
"сіпка",
"сіпла",
"сіплы",
"сіроп",
"сірын",
"сітар",
"сітка",
"сітны",
"сітро",
"сітца",
"сіўка",
"сіфон",
"скарб",
"скарн",
"скаўт",
"сквер",
"сквош",
"скейт",
"скетч",
"скіба",
"склад",
"склеп",
"склёп",
"склон",
"склюд",
"скора",
"скоры",
"скотч",
"скраб",
"скрап",
"скрут",
"скрып",
"скула",
"скуль",
"скупа",
"скупы",
"скура",
"скурч",
"скуты",
"скуць",
"слабы",
"слайд",
"сланы",
"слаць",
"слепа",
"сліва",
"слёзы",
"слізь",
"сліна",
"слоік",
"слота",
"слуга",
"слова",
"слюда",
"сляза",
"слыць",
"слэнг",
"сляпы",
"смела",
"смаль",
"смелы",
"смерд",
"смерч",
"смець",
"смоль",
"сморж",
"смоўж",
"смуга",
"смута",
"соевы",
"сойка",
"сокал",
"сокат",
"солад",
"сніць",
"солка",
"солкі",
"сомаў",
"сонца",
"сопка",
"сопкі",
"соплі",
"сорак",
"сорам",
"сорга",
"сотка",
"сотня",
"соўка",
"сохлы",
"соцкі",
"сочка",
"сочна",
"сочны",
"сошка",
"сошны",
"спаць",
"спелы",
"спеты",
"спевы",
"спіна",
"спець",
"спёка",
"спіты",
"спірт",
"спора",
"спорт",
"сплін",
"спонж",
"сплаў",
"спіца",
"спіць",
"спрат",
"спрут",
"спрыт",
"спрэй",
"спурт",
"спячы",
"ставы",
"стаер",
"сталы",
"сталь",
"стары",
"стаць",
"стаяк",
"ствол",
"створ",
"стогн",
"стоік",
"столь",
"стома",
"страж",
"страз",
"стоўб",
"стоўп",
"страх",
"строі",
"строй",
"строп",
"струг",
"струк",
"струп",
"стрыж",
"стрым",
"стрэл",
"стуль",
"ступа",
"стыло",
"стыль",
"стынь",
"стыць",
"стэйк",
"стэка",
"стэла",
"стэнд",
"стэрх",
"сувей",
"сувой",
"судак",
"судна",
"судок",
"судны",
"сукно",
"сукня",
"сумах",
"сумёт",
"сумка",
"сумна",
"сумны",
"суніт",
"супін",
"супын",
"сурма",
"сурок",
"сурык",
"суткі",
"суфле",
"сухар",
"сучок",
"сушка",
"сушня",
"сушэй",
"сфера",
"схема",
"схіма",
"сходы",
"сцень",
"сціха",
"сцэна",
"сцюжа",
"сцяна",
"сцяты",
"сцячы",
"счуты",
"счуць",
"сшыць",
"сынаў",
"сыпка",
"сыпкі",
"сырок",
"сырэц",
"сытна",
"сычуг",
"сьера",
"сэрум",
"сэрца",
"сэтар",
"сюдой",
"сюжэт",
"сюіта",
"сядло",
"сядок",
"сядун",
"сякач",
"сявак",
"сявец",
"сябар",
"сябра",
"сярод",
"сянаж",
"табес",
"табло",
"табун",
"тазік",
"таіць",
"тайны",
"таксі",
"талер",
"таліб",
"такыр",
"талій",
"талія",
"талон",
"тальк",
"таней",
"танец",
"танід",
"тапёр",
"тапір",
"тапкі",
"тапор",
"таргі",
"тарны",
"тарос",
"тарыф",
"тарэц",
"таўро",
"таўчы",
"таф'я",
"твань",
"тканы",
"ткаць",
"тлець",
"тлушч",
"тнуць",
"токар",
"томік",
"тонер",
"тонік",
"тонка",
"тонкі",
"тонус",
"топка",
"топкі",
"торба",
"торны",
"торый",
"транс",
"транш",
"траяк",
"троль",
"тромб",
"трохі",
"труба",
"трумо",
"труна",
"трупа",
"трусы",
"труха",
"трыба",
"трыёд",
"трызм",
"трыко",
"трыял",
"трыяс",
"трэба",
"трэль",
"трэск",
"трэфы",
"трэці",
"трэць",
"туаль",
"тугай",
"туевы",
"тужэй",
"тузін",
"тукан",
"тулій",
"тумак",
"туман",
"тумба",
"тунец",
"тупік",
"тупкі",
"турак",
"турач",
"турма",
"турнэ",
"туфлі",
"тухлы",
"тушка",
"тымол",
"тымус",
"тыпаж",
"тыраж",
"тыран",
"тырса",
"тыфон",
"тыфус",
"тычка",
"тыяра",
"тэзіс",
"тэізм",
"тэлур",
"тэмбр",
"тэнар",
"тэніс",
"тэпці",
"тэрмы",
"убіты",
"убіць",
"убога",
"убогі",
"уброд",
"убыць",
"уверх",
"увесь",
"увіты",
"увіць",
"уволю",
"увысь",
"угары",
"углыб",
"угрэў",
"удалы",
"удаць",
"удвая",
"удзел",
"удовы",
"удоўж",
"уежна",
"уесці",
"ужаты",
"ужаць",
"ужыць",
"узбек",
"узбоч",
"узвал",
"узвар",
"узвод",
"уздым",
"уздых",
"узлёт",
"узлом",
"узмах",
"узнос",
"узрыў",
"узяты",
"узяць",
"уклад",
"улева",
"уліты",
"уліць",
"умбра",
"умела",
"умелы",
"умець",
"умова",
"умовы",
"умыць",
"умяты",
"умяць",
"унаём",
"уначы",
"унізе",
"уніят",
"уночы",
"унтэр",
"унцыя",
"упалы",
"упіты",
"упіць",
"уплаў",
"уплыў",
"упроч",
"упяць",
"упячы",
"урачы",
"урвіс",
"урода",
"урокі",
"урына",
"услед",
"услон",
"услых",
"усмак",
"усмал",
"устаў",
"устоі",
"устой",
"усход",
"усцяж",
"усюды",
"усяго",
"усякі",
"усячы",
"утома",
"утора",
"утрая",
"утрох",
"утыль",
"уцеха",
"уцёкі",
"уціск",
"уцяты",
"уцячы",
"учора",
"ушыць",
"уюрок",
"уючны",
"фавор",
"фагот",
"фазіс",
"фазны",
"файны",
"факел",
"факір",
"фальц",
"фальш",
"фанты",
"фасет",
"фасон",
"фатон",
"фатум",
"фацыя",
"фацэт",
"фаянс",
"фелах",
"ферат",
"ферзь",
"ферма",
"ферыт",
"феска",
"фетыш",
"феніл",
"фенол",
"фібра",
"фібры",
"фідар",
"фіёрд",
"фіжмы",
"філей",
"філёр",
"філон",
"фікус",
"фільм",
"фімоз",
"фінал",
"фінка",
"фіноз",
"фірма",
"фішка",
"фіякр",
"фланг",
"фланк",
"флейц",
"флёкс",
"флірт",
"флора",
"флюід",
"флякі",
"флянс",
"фобія",
"фокус",
"фоліа",
"форма",
"фортэ",
"форум",
"франт",
"фрахт",
"фронт",
"фрукт",
"фрэза",
"фрэнч",
"фрэон",
"фугас",
"фужэр",
"фузія",
"фуляр",
"фураж",
"фурка",
"фурма",
"фурыя",
"футра",
"хадня",
"хадок",
"хадун",
"хакей",
"хакер",
"халіф",
"халоп",
"халуй",
"хамут",
"хамяк",
"ханты",
"хапок",
"хапун",
"харкі",
"харчо",
"харэй",
"харэя",
"хатні",
"хваля",
"хворы",
"хвост",
"хвошч",
"хедар",
"херас",
"хеўра",
"хібны",
"хітон",
"хітра",
"хітры",
"хіязм",
"хлыст",
"хлюст",
"хмель",
"хмуры",
"хобат",
"ходка",
"ходкі",
"холад",
"хорам",
"хорда",
"хрась",
"хруст",
"хрушч",
"хтось",
"хунта",
"хурал",
"хурма",
"хуста",
"хутар",
"хутка",
"хуткі",
"хціва",
"хцівы",
"цалік",
"цалок",
"царок",
"цароў",
"цвілы",
"цвіль",
"цемра",
"цераз",
"церам",
"церні",
"цесля",
"цесна",
"цесны",
"цеста",
"цечка",
"цешча",
"цёзка",
"цёлка",
"цёмна",
"цёмны",
"цёпла",
"цёплы",
"цёрка",
"цёрла",
"цёрты",
"цёска",
"цётка",
"цёшка",
"цівун",
"ціпун",
"цітла",
"цішэй",
"цнота",
"цокат",
"цотны",
"цугам",
"цуглі",
"цудам",
"цукар",
"цукат",
"цупкі",
"цурка",
"цурок",
"цыбук",
"цыбур",
"цыкля",
"цыган",
"цымус",
"цынга",
"цынік",
"цынія",
"цыпка",
"цыроз",
"цыста",
"цытра",
"цэбар",
"цэгла",
"цэдра",
"цэзар",
"цэзій",
"цэлае",
"цэлік",
"цэліт",
"цэноз",
"цэнтр",
"цэпкі",
"цэрый",
"цэсар",
"цэўка",
"цэхін",
"цэшка",
"цюбік",
"цюнер",
"цюпка",
"цюрбо",
"цюфяк",
"цягач",
"цяглі",
"цягло",
"цяглы",
"цяжар",
"цяжба",
"цяжка",
"цяжкі",
"цяжэй",
"цялеж",
"цямкі",
"цямны",
"цянёк",
"цяпер",
"цяпло",
"цясак",
"цясла",
"чабор",
"чадны",
"чайны",
"чапец",
"чапля",
"чарон",
"чарот",
"часты",
"часць",
"чахлы",
"чахол",
"чмель",
"човен",
"чорна",
"чорны",
"чубок",
"чужак",
"чужое",
"чуйна",
"чуйны",
"чумак",
"чумны",
"чурэк",
"чутка",
"чуткі",
"чутна",
"чутны",
"чушка",
"чхаць",
"чыгір",
"чыгун",
"чылім",
"чымся",
"чырва",
"чырок",
"чысло",
"чыста",
"чытка",
"чэзлы",
"чэмер",
"чэпік",
"чэрап",
"чэрві",
"чэрнь",
"чэсна",
"чэсны",
"чэсць",
"чэшка",
"чэшкі",
"шабер",
"шаблі",
"шабля",
"шабот",
"шавец",
"шалік",
"шалом",
"шамкі",
"шамот",
"шарон",
"шарык",
"шатун",
"шатэн",
"шаўро",
"шафер",
"шафёр",
"шахід",
"шацёр",
"шація",
"шквал",
"шкляр",
"шкода",
"школа",
"шкура",
"шланг",
"шлейф",
"шляга",
"шморг",
"шолах",
"шорах",
"шорты",
"шосты",
"шпень",
"шпіён",
"шпіль",
"шпона",
"шпора",
"шпрыц",
"шпуля",
"шпунт",
"шруба",
"шрыфт",
"штамб",
"штамп",
"штаны",
"штора",
"шторм",
"штраф",
"штрых",
"штрэк",
"штука",
"штурм",
"штурх",
"штыль",
"штэйн",
"шубка",
"шубны",
"шулер",
"шуляк",
"шумна",
"шумны",
"шумок",
"шурка",
"шутка",
"шхеры",
"шхуна",
"шчаня",
"шчаўе",
"шчоўк",
"шчыра",
"шчэпа",
"шыбер",
"шыбка",
"шывок",
"шыізм",
"шыйка",
"шынка",
"шынок",
"шыпун",
"шырай",
"шырма",
"шытво",
"шыфер",
"шыфон",
"шыхта",
"шыцік",
"шэлак",
"шэлег",
"шэльф",
"шэраг",
"шэрыф",
"шэсце",
"эаліт",
"эвенк",
"эгіда",
"эдыкт",
"экзот",
"эклер",
"экран",
"элінг",
"эліпс",
"эліта",
"эмаль",
"энзім",
"энскі",
"эпіка",
"эпонж",
"эпоха",
"эрбій",
"эрзац",
"эскіз",
"этнас",
"этрол",
"этыка",
"эфект",
"эхаць",
"юдоль",
"юзіст",
"юначы",
"юнець",
"юніёр",
"юнкар",
"юнкер",
"юр'еў",
"юрыст",
"юрыць",
"юсавы",
"ютавы",
"юферс",
"яблык",
"юрскі",
"ягель",
"ягоны",
"ягуар",
"ядваб",
"ядомы",
"ядучы",
"яечка",
"яечны",
"яздок",
"язёвы",
"язмін",
"якавы",
"якаць",
"якраз",
"ялавы",
"яліна",
"яловы",
"яміна",
"ямскі",
"ямчэй",
"янтар",
"япрук",
"яравы",
"ярлык",
"ярчэй",
"ярына",
"ярыца",
"ясень",
"ястык",
"ятоўе",
"яўрэй",
"яхант",
"яхіда",
];
  /** @type {!Array} */
  var updatedSet = ["аазіс",
"ааліт",
"абады",
"абвал",
"абвеў",
"абвод",
"абвоз",
"абгон",
"абдым",
"аб'ём",
"абзац",
"абкам",
"абкат",
"абкос",
"аблет",
"аблёт",
"аблік",
"аблом",
"аблоў",
"абман",
"абмен",
"абмер",
"абмін",
"абмол",
"абора",
"аборт",
"абпал",
"абрад",
"абраз",
"аброк",
"абрус",
"абруч",
"абрыс",
"абрыў",
"абрэз",
"абрэк",
"абсеў",
"абсяг",
"абуза",
"абуты",
"абуць",
"абхаз",
"абход",
"абцас",
"абшар",
"аванс",
"авеню",
"авечы",
"авіза",
"авіць",
"авоід",
"агава",
"агент",
"агіда",
"агляд",
"агонь",
"аграф",
"агрэх",
"адбой",
"адбор",
"адвал",
"адвар",
"адвес",
"адвод",
"адвоз",
"адгін",
"адгон",
"адгул",
"аджын",
"адзёр",
"адзін",
"адзол",
"адказ",
"адкат",
"адкол",
"адкос",
"адлік",
"адлёт",
"адліў",
"адлоў",
"аднак",
"адпал",
"адпас",
"адпеў",
"адпор",
"адрас",
"адрыў",
"адрэз",
"адсек",
"адсеў",
"адток",
"адход",
"адхон",
"адцёк",
"адчай",
"адчал",
"адчэп",
"адэпт",
"аерны",
"ажагі",
"ажыка",
"ажына",
"ажыны",
"ажыць",
"азарт",
"азена",
"азёры",
"азімы",
"азіят",
"аймак",
"айран",
"айрол",
"айрот",
"айсор",
"айцец",
"айчым",
"акант",
"акапі",
"акаць",
"акіян",
"аклад",
"аковы",
"акорд",
"акрай",
"аксід",
"аксон",
"актан",
"актыў",
"актэт",
"акула",
"акунь",
"акуты",
"акуць",
"акцёр",
"акцін",
"акцыз",
"акцыя",
"аланы",
"алгол",
"алеат",
"алеін",
"алень",
"алеут",
"алібі",
"аліва",
"алімп",
"алмаз",
"алтар",
"алтын",
"алыча",
"альбо",
"альфа",
"альяс",
"амаль",
"амбон",
"амбра",
"амега",
"амеці",
"амёба",
"аміны",
"аміяк",
"амлет",
"ампер",
"ампір",
"амяла",
"анагр",
"аналы",
"анаты",
"ангар",
"ангоб",
"аніён",
"аніяк",
"анкер",
"анонс",
"антон",
"антрэ",
"антык",
"ануча",
"анфас",
"анчар",
"аорта",
"апала",
"апалы",
"апека",
"апеты",
"апець",
"аплік",
"аплот",
"аплыў",
"апока",
"апона",
"апора",
"апорт",
"апроч",
"апрош",
"апуха",
"апука",
"апячы",
"арала",
"араны",
"араты",
"араць",
"арган",
"аргон",
"аргус",
"ардэн",
"аркан",
"аркуш",
"арлан",
"арлец",
"арлон",
"арляк",
"арман",
"армія",
"армяк",
"артыт",
"архіў",
"аршын",
"архар",
"арышт",
"арэал",
"арэлі",
"арэна",
"арэол",
"арыец",
"асада",
"асаед",
"асака",
"асвер",
"асеін",
"аселы",
"асетр",
"асець",
"асіна",
"асіны",
"аскал",
"аскет",
"асляк",
"асман",
"асмол",
"аснач",
"асоба",
"асобы",
"аспід",
"астма",
"астой",
"астоя",
"астра",
"астыт",
"асцыт",
"асцюк",
"асцяк",
"асявы",
"асячы",
"атава",
"атака",
"атара",
"аташэ",
"атлас",
"атлет",
"атлёт",
"атоса",
"атрад",
"атэль",
"аўгур",
"аўдыт",
"аўрал",
"аўсюк",
"аўтар",
"аўтол",
"аўчар",
"афект",
"афеня",
"афера",
"афікс",
"афіша",
"афсет",
"афшор",
"ахаць",
"афорт",
"ахова",
"ацячы",
"ашука",
"ашыек",
"бабах",
"бабёр",
"бабін",
"бабіт",
"бабка",
"бабкі",
"бабок",
"бабух",
"багаж",
"багач",
"багер",
"багет",
"багна",
"багор",
"багра",
"багун",
"бадай",
"бадан",
"бажба",
"бажок",
"базар",
"базіс",
"байда",
"байка",
"бакал",
"бакан",
"бакас",
"балет",
"балея",
"балід",
"балон",
"балты",
"балык",
"банан",
"банда",
"банка",
"бараж",
"барак",
"баран",
"банер",
"барва",
"бардо",
"баржа",
"барка",
"бармы",
"барон",
"барыд",
"барый",
"барыт",
"барыш",
"барэй",
"барэт",
"барэц",
"баска",
"басма",
"басок",
"басон",
"бастр",
"басці",
"басяк",
"батлы",
"батог",
"батон",
"батут",
"батыр",
"баўар",
"баўка",
"батан",
"батат",
"бахур",
"бахча",
"бацян",
"бачна",
"бачны",
"бачок",
"баявы",
"баяць",
"бегла",
"беглы",
"бегма",
"бегчы",
"бедна",
"бедны",
"бейка",
"бекар",
"бекас",
"бекон",
"белле",
"белыя",
"бераг",
"берма",
"берыл",
"берэт",
"бетон",
"бёрда",
"бівак",
"бігас",
"бізон",
"бізун",
"білет",
"білон",
"бімсы",
"бінга",
"біном",
"біржа",
"бірка",
"біруч",
"бісер",
"бітва",
"бітка",
"біткі",
"бітон",
"біўні",
"біцца",
"біццё",
"біцюг",
"блага",
"благі",
"бланк",
"блінт",
"бліск",
"блісь",
"блуза",
"блыха",
"блюда",
"бляск",
"бляха",
"бобік",
"бобка",
"богаў",
"бодзі",
"бодня",
"бойка",
"бойкі",
"бойня",
"бокам",
"болей",
"больш",
"бомба",
"бомка",
"бонза",
"бонна",
"бонус",
"борны",
"борць",
"боршч",
"боскі",
"боўць",
"бохан",
"бочка",
"брава",
"бравы",
"брага",
"бразь",
"брама",
"браны",
"браня",
"браць",
"бровы",
"бронь",
"брусы",
"брута",
"бруха",
"брыда",
"брыдж",
"брыжы",
"брыль",
"брыты",
"брыца",
"брыць",
"брэйк",
"брэнд",
"бубал",
"бубен",
"бубка",
"бубон",
"бугай",
"бугор",
"будан",
"будзе",
"будка",
"буйна",
"буйны",
"букер",
"букет",
"букле",
"букля",
"букта",
"булат",
"булён",
"буліт",
"булка",
"бурак",
"буран",
"бурат",
"бурда",
"бурка",
"буркі",
"бурна",
"бурны",
"бурса",
"бурун",
"бусел",
"бутан",
"бутля",
"бутон",
"бутуз",
"бутыл",
"буфер",
"буфет",
"буфон",
"бухта",
"буцік",
"бучна",
"бучны",
"буякі",
"буялы",
"буяна",
"буяны",
"буяць",
"быллё",
"былое",
"быццё",
"бычок",
"бэйдж",
"бювар",
"бювет",
"бягом",
"бягун",
"бядак",
"бядро",
"бялей",
"бялёк",
"бялок",
"бяляк",
"бяляш",
"бярно",
"вабік",
"вабны",
"вагар",
"вагон",
"вагул",
"вадка",
"вадкі",
"вадыр",
"важак",
"важка",
"важкі",
"важна",
"важны",
"вазак",
"вазок",
"вазон",
"вайна",
"вакол",
"вакса",
"вакал",
"валам",
"валан",
"валах",
"валет",
"валёр",
"валік",
"валка",
"валкі",
"валлё",
"валок",
"валуй",
"валун",
"вальс",
"валюш",
"ванна",
"ванны",
"ванта",
"ванты",
"вапна",
"вараг",
"варка",
"варкі",
"варан",
"варта",
"варты",
"васал",
"ватар",
"ватны",
"вафля",
"вахта",
"вацін",
"вацяк",
"ваяка",
"вежка",
"везці",
"вейкі",
"веліч",
"велюр",
"венгр",
"венды",
"венік",
"венца",
"верад",
"верас",
"верая",
"вержэ",
"веркі",
"верна",
"верны",
"верць",
"верша",
"вечка",
"вечна",
"вечны",
"вешка",
"вешчы",
"вецер",
"вецце",
"вечар",
"весні",
"весці",
"весць",
"ветах",
"ветка",
"веяны",
"веяць",
"вёска",
"віват",
"відно",
"відны",
"відок",
"відук",
"відэа",
"візаж",
"візір",
"візіт",
"віёла",
"вілка",
"вілкі",
"вінда",
"вінен",
"вініл",
"вінны",
"віраж",
"вірок",
"вірус",
"віскі",
"віслы",
"вісус",
"вітка",
"віток",
"віхар",
"віхор",
"віцца",
"віццё",
"вішня",
"вобад",
"вобла",
"водар",
"водны",
"вожаг",
"вожык",
"возка",
"вокал",
"вокіс",
"вокны",
"волак",
"волас",
"волат",
"волка",
"волкі",
"вольт",
"вонкі",
"вопіс",
"вопыт",
"вораг",
"ворка",
"ворны",
"восем",
"воспа",
"восці",
"восць",
"восып",
"вотум",
"воўна",
"воўчы",
"вохкі",
"вохра",
"вохці",
"воцат",
"вочап",
"вочка",
"вочны",
"вуаль",
"вугал",
"вугор",
"вудар",
"вузей",
"вузел",
"вузка",
"вузкі",
"вулей",
"вулка",
"вусач",
"вусна",
"вусны",
"вусце",
"вутка",
"вушак",
"вушка",
"вушкі",
"вушны",
"выбар",
"выбух",
"вывад",
"вываз",
"вывіх",
"выган",
"выгар",
"выгіб",
"выгук",
"выгул",
"выдма",
"выдра",
"выдых",
"выезд",
"выжал",
"выжла",
"выжым",
"вызаў",
"выкас",
"выкід",
"выкуп",
"выкус",
"вылаз",
"вылам",
"вылаў",
"вылет",
"вылік",
"вымах",
"вымер",
"вынас",
"вынік",
"выпад",
"выпар",
"выпас",
"выпат",
"выпіс",
"выраб",
"выраз",
"вырай",
"вырак",
"вырод",
"выруб",
"вырыс",
"высеў",
"выспа",
"выток",
"выхад",
"выццё",
"вышаг",
"вышай",
"вышка",
"вышкі",
"вышук",
"вышэй",
"выява",
"вэлюм",
"вядро",
"вязка",
"вязкі",
"вянец",
"вянок",
"вярба",
"вярхі",
"вясло",
"вясна",
"вятох",
"вяхір",
"габой",
"габра",
"гавот",
"гагат",
"гадка",
"гадкі",
"гадок",
"газік",
"газон",
"газыр",
"гаіць",
"гайда",
"гайды",
"гайка",
"гайня",
"галас",
"галец",
"галій",
"галка",
"галлё",
"галон",
"галоп",
"галун",
"галын",
"галыш",
"галяк",
"гамак",
"гамоз",
"ганак",
"гапак",
"ганец",
"ганка",
"гання",
"ганок",
"гараж",
"гарал",
"гарох",
"гарус",
"гарод",
"гарэм",
"гафрэ",
"гашыш",
"гаюча",
"гаючы",
"гвозд",
"гвалт",
"геена",
"гейша",
"гелій",
"геній",
"генны",
"геном",
"герма",
"герой",
"гетры",
"гібка",
"гібкі",
"гіблы",
"гібон",
"гідка",
"гідкі",
"гідра",
"гіена",
"гіляк",
"гінея",
"гіпюр",
"гірка",
"гірса",
"гітан",
"гічка",
"глава",
"глаўк",
"глеба",
"гліна",
"гліпт",
"гліст",
"глоса",
"глузд",
"глуха",
"глухі",
"глыба",
"глюга",
"глясэ",
"гміна",
"гнаёк",
"гнаны",
"гнаць",
"гнеды",
"гнейс",
"гніда",
"гнілы",
"гніль",
"гнома",
"гнуты",
"гнуць",
"гогат",
"годзе",
"годна",
"годны",
"голад",
"голас",
"голуб",
"гольд",
"гольф",
"гоман",
"гонар",
"гонка",
"гонкі",
"гонта",
"гончы",
"гопля",
"горад",
"горай",
"горан",
"горац",
"горда",
"горды",
"горка",
"горкі",
"горла",
"горна",
"горны",
"горст",
"горшы",
"горыч",
"госць",
"госця",
"гоцкі",
"града",
"гразі",
"гразь",
"гранд",
"грант",
"грань",
"графа",
"граць",
"грошы",
"груба",
"грубы",
"груда",
"грузд",
"грунт",
"група",
"груца",
"груша",
"грыва",
"грыжа",
"грыль",
"грэна",
"грэць",
"гуана",
"губан",
"губач",
"губка",
"губны",
"гудок",
"гужам",
"гузік",
"гузка",
"гузыр",
"гулец",
"гулка",
"гулкі",
"гуляш",
"гумар",
"гуміт",
"гумка",
"гумно",
"гумоз",
"гумор",
"гумус",
"гупат",
"гурба",
"гурок",
"гурыя",
"гусак",
"гусар",
"гуска",
"гуслі",
"густа",
"густы",
"гусці",
"гуцул",
"гучна",
"гучны",
"гучок",
"гушча",
"дабро",
"давай",
"дазор",
"даіць",
"дакор",
"далей",
"далеч",
"далоў",
"дамба",
"дамен",
"дамка",
"дамок",
"дамоў",
"данец",
"данос",
"даныя",
"дарма",
"дармо",
"дартс",
"дарчы",
"дасеў",
"дасол",
"дасье",
"датла",
"даўгі",
"даўка",
"даўкі",
"даўні",
"даўно",
"дафін",
"даход",
"дацкі",
"дацца",
"дачка",
"дачны",
"дашак",
"дбаць",
"джала",
"джыга",
"дзела",
"дзель",
"дзеля",
"дзень",
"дзець",
"дзеяч",
"дзіва",
"дзіда",
"дзіка",
"дзікі",
"дзінь",
"дзіра",
"дзіця",
"дзюба",
"дзюдо",
"дзюна",
"дзяга",
"дзяды",
"дзяжа",
"днець",
"днямі",
"добра",
"добры",
"довад",
"догма",
"доены",
"дождж",
"дойка",
"дойна",
"дойны",
"доказ",
"докер",
"долам",
"долар",
"домік",
"домна",
"домра",
"донар",
"донка",
"донна",
"донны",
"донца",
"допіс",
"допыт",
"дотык",
"доўга",
"доўгі",
"дохлы",
"дошка",
"драбы",
"драга",
"дражэ",
"драйв",
"драка",
"драла",
"драма",
"драны",
"драфа",
"драць",
"дровы",
"дрозд",
"другі",
"друза",
"друід",
"дрыль",
"дрэва",
"дрэды",
"дрэйф",
"дрэма",
"дрэна",
"дрэнь",
"дуаен",
"дубам",
"дубец",
"дуб'ё",
"дубка",
"дубль",
"дубок",
"дугой",
"дудар",
"дудка",
"дудкі",
"дудук",
"дужка",
"дужэй",
"дукат",
"дулеб",
"думец",
"думка",
"думны",
"дупло",
"дурны",
"дурра",
"дутар",
"дутыш",
"духан",
"дуцца",
"душна",
"душны",
"душок",
"дуэль",
"дыбам",
"дыбка",
"дыбкі",
"дыван",
"дыгер",
"дыета",
"дылер",
"дымар",
"дымка",
"дымна",
"дымны",
"дымок",
"дынар",
"дынас",
"дынга",
"дынны",
"дэбет",
"дэбіл",
"дэбіт",
"дэбош",
"дэбют",
"дэвіз",
"дэвон",
"дэізм",
"дэіст",
"дэкан",
"дэкор",
"дэман",
"дэмас",
"дэнім",
"дэраш",
"дэрбі",
"дэрма",
"дэфіс",
"ерась",
"езуіт",
"екаць",
"еўнух",
"ёгурт",
"ёдызм",
"ёкаць",
"ёршык",
"жабін",
"жабка",
"жабры",
"жадны",
"жазло",
"жакан",
"жакей",
"жакет",
"жакоб",
"жаніх",
"жанкі",
"жарон",
"жатны",
"жаўна",
"жацца",
"жвава",
"жвавы",
"жмакі",
"жменя",
"жніва",
"жняяр",
"жолаб",
"жолуд",
"жонка",
"жораў",
"жулан",
"жулік",
"жуллё",
"жорны",
"жоўты",
"жоўць",
"жрыца",
"жупан",
"жупел",
"жураў",
"журба",
"жухлы",
"жучок",
"жывец",
"жывот",
"жыжка",
"жылец",
"жылка",
"жылле",
"жыллё",
"жытка",
"жытло",
"жытні",
"жытны",
"жытцо",
"жыхар",
"жыціе",
"жыцік",
"жыцца",
"жыццё",
"жычка",
"жэрах",
"забег",
"забой",
"забор",
"завад",
"завал",
"завея",
"завод",
"завоз",
"завуч",
"загад",
"загар",
"загіб",
"загін",
"загон",
"задам",
"задні",
"задок",
"задор",
"заезд",
"заечы",
"зазор",
"заіка",
"заказ",
"закід",
"закіс",
"закон",
"закот",
"закуп",
"закут",
"залік",
"заліў",
"залог",
"залом",
"замак",
"замах",
"замер",
"замес",
"заміж",
"замок",
"замор",
"замуж",
"замша",
"занач",
"занос",
"запал",
"запар",
"запас",
"запек",
"запеў",
"запіс",
"запой",
"запор",
"запыт",
"зарад",
"зараз",
"зароб",
"зарок",
"зарэз",
"засек",
"засеў",
"засаб",
"засор",
"затое",
"затон",
"затор",
"затым",
"захад",
"заход",
"захоп",
"зацёк",
"зачос",
"зачын",
"зачэп",
"заява",
"збіты",
"збіць",
"збоку",
"зборы",
"зброд",
"зброя",
"збруя",
"збыць",
"звада",
"званы",
"зваць",
"звеку",
"зверх",
"звіты",
"звіць",
"зводы",
"звяга",
"звялы",
"звяно",
"звяць",
"згары",
"згода",
"зграя",
"згуба",
"здаля",
"здань",
"здаць",
"здача",
"здзек",
"здзіў",
"здоба",
"здрок",
"здуру",
"здуць",
"зебра",
"з'езд",
"зелле",
"зельц",
"земец",
"земны",
"зеніт",
"зенкі",
"зерне",
"зеўра",
"зефір",
"зёлкі",
"зжаты",
"зжаць",
"зжыты",
"зжыць",
"ззаду",
"ззяць",
"зімка",
"зімна",
"зімны",
"зімой",
"зіпун",
"злакі",
"злева",
"злець",
"зліты",
"зліць",
"злоты",
"злюка",
"змена",
"змест",
"змова",
"змога",
"змаху",
"змееў",
"змора",
"змрок",
"змыты",
"змыць",
"змяты",
"змяць",
"знаны",
"знаць",
"знізу",
"зныць",
"зняты",
"зняць",
"золак",
"золка",
"золкі",
"зомбі",
"зонны",
"зорка",
"зоркі",
"зорна",
"зорны",
"зразу",
"зразы",
"зроду",
"зрост",
"зрукі",
"зрыты",
"зрыць",
"зуб'е",
"зубец",
"зыбка",
"зыбкі",
"зыбун",
"зулус",
"зумер",
"зурна",
"зусім",
"зубны",
"зубок",
"зыркі",
"зысці",
"зыход",
"зычна",
"зычны",
"зырка",
"зябер",
"зябка",
"зябкі",
"іаніт",
"іберы",
"зяблы",
"з'ява",
"зявок",
"івасі",
"зямля",
"зямны",
"ігрок",
"ігрэк",
"ідэал",
"ідыёт",
"іерэй",
"ізгой",
"ізноў",
"ізюбр",
"іжыца",
"ікаць",
"ікона",
"ільга",
"ілька",
"ільма",
"ілоты",
"ілгун",
"імбір",
"імгла",
"імідж",
"імпэт",
"інакш",
"інвар",
"інгуш",
"індый",
"індык",
"індол",
"індус",
"інець",
"інжыр",
"інсіт",
"інтым",
"іншае",
"іншая",
"іншыя",
"іоній",
"іонны",
"іпрыт",
"ірбіс",
"ірмас",
"іскра",
"іслам",
"ісцец",
"ітрый",
"іхнія",
"іхняе",
"іхняя",
"каала",
"кабан",
"кабат",
"кабул",
"кабыз",
"кавал",
"кавун",
"кагал",
"каган",
"кагат",
"кагор",
"кадзь",
"кадка",
"кадры",
"кадык",
"кадэт",
"кажан",
"кажух",
"казак",
"казан",
"казах",
"казёл",
"казка",
"казна",
"казус",
"кайло",
"кайнэ",
"кайра",
"какос",
"калаж",
"калан",
"калач",
"калеж",
"калет",
"калій",
"каліт",
"каліф",
"калок",
"калон",
"калос",
"калун",
"калым",
"калье",
"каляя",
"камар",
"камея",
"камін",
"камок",
"камса",
"камяк",
"канал",
"канат",
"канва",
"канец",
"канёк",
"канна",
"канон",
"каноэ",
"канюк",
"капал",
"капар",
"капач",
"капеж",
"капер",
"капец",
"кап'ё",
"капёр",
"капка",
"капля",
"капок",
"капот",
"капры",
"капун",
"капут",
"капыл",
"капыт",
"карак",
"карал",
"карат",
"карга",
"карда",
"каркі",
"карма",
"карны",
"карст",
"карта",
"карэц",
"касач",
"касец",
"касір",
"касія",
"каска",
"кассё",
"каста",
"касяк",
"катар",
"катаў",
"катах",
"катод",
"каток",
"катух",
"катэт",
"кафля",
"кацап",
"кацёл",
"качан",
"качар",
"качка",
"кашар",
"кашка",
"кашма",
"кашнэ",
"кашпо",
"кашуб",
"каюта",
"квага",
"квант",
"кварк",
"кварц",
"квіта",
"квіты",
"квола",
"кволы",
"квота",
"кеглі",
"келар",
"келіх",
"келля",
"кельт",
"кенар",
"кенаф",
"кендо",
"кепка",
"кесар",
"кесон",
"кетон",
"кефір",
"кеш'ю",
"ківер",
"ківок",
"ківот",
"кідка",
"кідкі",
"кідок",
"кіёск",
"кізіл",
"кізяк",
"кілер",
"кілім",
"кінік",
"кірза",
"кірка",
"кірпа",
"кірха",
"кісет",
"кісла",
"кіслы",
"кісля",
"кіста",
"кісць",
"кісяя",
"кітаб",
"кічка",
"кішка",
"кішма",
"клады",
"клака",
"класы",
"клема",
"клерк",
"клець",
"клешч",
"кліка",
"клінч",
"клішэ",
"клоўн",
"клуня",
"кляты",
"кляча",
"кнехт",
"кніга",
"кніца",
"кнэлі",
"княжы",
"князь",
"кобза",
"кобра",
"кобыз",
"кодла",
"кожны",
"козлы",
"козыр",
"козыт",
"кокан",
"колас",
"колба",
"колер",
"колік",
"колка",
"колкі",
"колле",
"колца",
"кольт",
"комік",
"комін",
"конік",
"конка",
"конна",
"конны",
"конта",
"конус",
"конюх",
"копія",
"копка",
"копра",
"копша",
"кораб",
"корак",
"корба",
"корда",
"корка",
"коска",
"космы",
"косна",
"косны",
"косць",
"котка",
"коўзь",
"коўка",
"коўкі",
"кофта",
"коцік",
"кошар",
"кошка",
"кошык",
"кпіць",
"крагі",
"краёк",
"кража",
"кракі",
"краля",
"крама",
"краса",
"краты",
"крашэ",
"кроза",
"кроль",
"крона",
"круіз",
"крупы",
"крута",
"круты",
"круць",
"круча",
"крыва",
"крывы",
"крыга",
"крыло",
"крысо",
"крыты",
"крыха",
"крыху",
"крыца",
"крыць",
"крэда",
"крэкт",
"крэол",
"кубак",
"кубел",
"кубік",
"кудла",
"кудлы",
"кузаў",
"кузня",
"кукан",
"кукіш",
"кукла",
"кукса",
"кулак",
"кулан",
"кулеш",
"кулёк",
"кулём",
"кулік",
"куліч",
"кулон",
"культ",
"кумач",
"кумжа",
"кумір",
"кумка",
"кумок",
"купаж",
"купал",
"кумык",
"кумыс",
"кунак",
"купец",
"куп'ё",
"купка",
"купля",
"купон",
"курка",
"курна",
"курны",
"курок",
"курта",
"курыя",
"курэц",
"кусок",
"кутас",
"кутні",
"куток",
"кутум",
"куфар",
"кухан",
"кухар",
"кухня",
"куцця",
"куцюр",
"кучка",
"кучма",
"кучна",
"лабаз",
"лабан",
"лабач",
"лабок",
"кучны",
"кхмер",
"кювет",
"лаваш",
"лавец",
"лагер",
"ладам",
"ладан",
"ладкі",
"ладна",
"ладны",
"лажны",
"лажок",
"лазер",
"лазня",
"лазун",
"лайба",
"лайка",
"лакей",
"лам'ё",
"ландо",
"ланды",
"лапта",
"лапці",
"ларга",
"лапік",
"лапка",
"ларок",
"ласка",
"ласун",
"латак",
"латва",
"латка",
"латны",
"латок",
"латук",
"латыш",
"лаўка",
"лаўра",
"лаўры",
"лафет",
"лафіт",
"лачка",
"лашак",
"лаяць",
"лгаць",
"легат",
"легчы",
"ледзь",
"лежма",
"лежня",
"лезці",
"лейка",
"лейцы",
"лекар",
"лента",
"лепей",
"лепет",
"лепка",
"лепра",
"лепта",
"лепшы",
"лерка",
"лескі",
"летам",
"лёгка",
"лёгкі",
"лёжка",
"лёкай",
"летні",
"лёска",
"лётам",
"лётка",
"лётны",
"лжыва",
"лжывы",
"лівер",
"лідар",
"лізат",
"лізін",
"лізіс",
"лізол",
"лізун",
"лікёр",
"лілея",
"лілія",
"ліман",
"ліміт",
"лімон",
"лімфа",
"лінёк",
"лінза",
"лінія",
"ліпец",
"ліпка",
"ліпкі",
"ліпсі",
"лірны",
"лірык",
"ліска",
"лісце",
"літар",
"літка",
"літый",
"літыя",
"ліхач",
"ліцца",
"ліццё",
"ліцэй",
"лічба",
"лішай",
"лішак",
"лішка",
"лішне",
"лішні",
"ліяна",
"лобны",
"логік",
"лодар",
"лодка",
"лоевы",
"ложак",
"локан",
"ломік",
"ломка",
"ломкі",
"лонжа",
"лонны",
"лопат",
"лопух",
"лотас",
"лоўкі",
"лоўля",
"лоўчы",
"лоцыя",
"лубін",
"лубок",
"лужок",
"лузан",
"лузга",
"луніт",
"лунка",
"лупка",
"луска",
"луста",
"лухта",
"луцце",
"лучок",
"лыжка",
"лыжны",
"лыжня",
"лынды",
"лысун",
"лытка",
"лычкі",
"лычык",
"лэдзі",
"лэйбл",
"любая",
"любка",
"любоў",
"люгер",
"людзі",
"людна",
"людны",
"людцы",
"люмен",
"люнет",
"люпус",
"лютня",
"люцік",
"лявак",
"лядны",
"лядок",
"лядыш",
"ляжак",
"ляжка",
"ляжня",
"ляляк",
"лямец",
"лямеш",
"лямка",
"лямпа",
"лянок",
"ляпіс",
"ляпны",
"ляска",
"лясны",
"лясок",
"лясун",
"ляток",
"лятун",
"ляўша",
"магія",
"магма",
"магар",
"магот",
"магчы",
"мадам",
"мадэм",
"маёвы",
"мажны",
"мажор",
"мазгі",
"мазер",
"мазка",
"мазкі",
"мазня",
"мазок",
"мазур",
"мазут",
"майка",
"майна",
"макет",
"максі",
"малая",
"малец",
"малёк",
"малое",
"малох",
"малпа",
"малыш",
"маляр",
"мамін",
"мамка",
"манах",
"манга",
"манеж",
"манер",
"манія",
"манна",
"манны",
"маном",
"мансі",
"манто",
"манул",
"мапед",
"марак",
"марал",
"марка",
"маркі",
"марля",
"марна",
"марны",
"мароз",
"масаж",
"масіў",
"маска",
"масла",
"масон",
"масць",
"матка",
"матня",
"маток",
"матор",
"матуз",
"матыў",
"мафія",
"махам",
"махры",
"махер",
"мацак",
"мачта",
"машна",
"машок",
"мегом",
"медны",
"медык",
"медыя",
"медзь",
"мезон",
"мелас",
"мелка",
"мелкі",
"меней",
"меншы",
"мерка",
"мерна",
"мерны",
"мерці",
"месны",
"месца",
"месці",
"месяц",
"метад",
"метал",
"метан",
"метка",
"меткі",
"метол",
"метоп",
"метро",
"метыл",
"метыс",
"мецца",
"мігам",
"мідзі",
"мідыя",
"міёма",
"мікст",
"мілая",
"мінея",
"мінёр",
"мінны",
"мінор",
"мінус",
"міраж",
"мірза",
"мірна",
"мірны",
"мірон",
"місіс",
"місія",
"міска",
"мітоз",
"мітра",
"млець",
"мліва",
"млява",
"млявы",
"многа",
"могул",
"модлы",
"модна",
"модны",
"модус",
"можна",
"мойва",
"мокра",
"мокры",
"молат",
"молем",
"морак",
"морда",
"морфа",
"моўны",
"моцна",
"моцны",
"мочка",
"мошка",
"мошчы",
"мужаў",
"мужна",
"мужны",
"мужык",
"музей",
"мулат",
"муліт",
"мулка",
"мулкі",
"мудра",
"мудры",
"муляж",
"муляр",
"муміё",
"мумія",
"мураш",
"мурза",
"мурло",
"мурог",
"мусон",
"мутна",
"мутны",
"мутон",
"муфта",
"мучан",
"мучны",
"мушка",
"мыйка",
"мыйня",
"мылец",
"мылкі",
"мымра",
"мыска",
"мысль",
"мысок",
"мытар",
"мытны",
"мытня",
"мыцца",
"мыццё",
"мышка",
"мышца",
"мэбля",
"мэрыя",
"мюрыд",
"мюслі",
"мядок",
"мязга",
"мякіш",
"мякка",
"мяккі",
"мялка",
"мямля",
"мянёк",
"мясны",
"мятла",
"мятны",
"мяцеж",
"мяцца",
"мячык",
"набак",
"набат",
"набег",
"набоб",
"набой",
"набок",
"набор",
"навал",
"навар",
"нават",
"навек",
"навес",
"навой",
"навык",
"наган",
"нагар",
"нагон",
"нагул",
"надой",
"надта",
"надум",
"наезд",
"нажны",
"нажын",
"назад",
"назва",
"назло",
"назоў",
"наказ",
"накат",
"накід",
"накіп",
"накол",
"накос",
"налёт",
"налік",
"наліў",
"налом",
"намаз",
"намер",
"намёк",
"намол",
"намул",
"намыў",
"нанач",
"нанду",
"нанет",
"нанка",
"нанос",
"напад",
"напал",
"напас",
"напеў",
"напой",
"напор",
"нарад",
"нарды",
"нарты",
"нарог",
"народ",
"нарыс",
"нарыў",
"нарэз",
"насар",
"насач",
"наскі",
"насок",
"насос",
"насып",
"наўме",
"нафта",
"нахіл",
"нацёк",
"нацыя",
"начны",
"начос",
"нашто",
"нашча",
"наяве",
"наяда",
"небыт",
"невад",
"невук",
"недзе",
"нейкі",
"нейчы",
"немач",
"немец",
"немка",
"ненец",
"ненка",
"нерат",
"нерка",
"нерол",
"нерпа",
"неруш",
"несці",
"нетры",
"нехта",
"нешта",
"нідзе",
"ніжні",
"ніжэй",
"нізам",
"нізка",
"нізкі",
"ніклы",
"німфа",
"нітка",
"нітон",
"ніўка",
"ніхто",
"ніцкі",
"ніцма",
"нічыё",
"нічый",
"нічыя",
"нішто",
"ніякі",
"нораў",
"норка",
"норма",
"норыя",
"носік",
"носка",
"носкі",
"ножка",
"ножны",
"ножык",
"нумар",
"нудна",
"нудны",
"нотка",
"нотны",
"ночвы",
"ночка",
"ноччу",
"ношка",
"нутро",
"нырка",
"нырок",
"нырэц",
"ныцік",
"ныццё",
"ныючы",
"нэцке",
"нюанс",
"нябож",
"нябыт",
"нямая",
"нямко",
"няўжо",
"окаць",
"няхай",
"омуль",
"онікс",
"опера",
"опіум",
"оптам",
"оптык",
"опцыя",
"орган",
"оргія",
"ордар",
"ордэн",
"осмас",
"осмій",
"пабоі",
"павал",
"павек",
"павет",
"павеў",
"павой",
"павук",
"пагон",
"падзь",
"падкі",
"падла",
"падол",
"падуб",
"пажар",
"пазёр",
"пазлы",
"пазур",
"паіць",
"пайка",
"паказ",
"пакат",
"пакет",
"пакля",
"пакой",
"пакос",
"палаб",
"палас",
"палац",
"палаш",
"палец",
"палёт",
"паліп",
"паліў",
"палка",
"палкі",
"палок",
"палом",
"палон",
"палын",
"паляк",
"паляя",
"памер",
"памёт",
"паміж",
"памін",
"памол",
"памор",
"памыі",
"паніч",
"панна",
"панок",
"панос",
"панты",
"панур",
"панус",
"панюх",
"папар",
"папас",
"папка",
"папоў",
"парад",
"парка",
"парна",
"парны",
"парог",
"парок",
"паром",
"парою",
"парта",
"парус",
"парча",
"парша",
"парык",
"парыў",
"парэа",
"парэз",
"парэй",
"пасаг",
"пасад",
"пасаж",
"пасак",
"пасат",
"пасіў",
"пасія",
"пасля",
"пасма",
"пасол",
"паста",
"пасха",
"пасці",
"пасыл",
"патар",
"паташ",
"патлы",
"паток",
"патоп",
"паўза",
"паўшы",
"пафас",
"пахіл",
"пахкі",
"паход",
"пацір",
"пацук",
"пачак",
"пачка",
"пачым",
"пачын",
"пашча",
"пашыў",
"паэма",
"паявы",
"паяны",
"паяць",
"п'еза",
"пекан",
"пекар",
"пекла",
"пеліт",
"пемза",
"пенал",
"пенка",
"пепін",
"перад",
"перац",
"пер'е",
"перлы",
"п'еро",
"перон",
"персі",
"перці",
"першы",
"п'еса",
"песня",
"песта",
"песты",
"петыт",
"пеўчы",
"пецца",
"печая",
"печка",
"пешка",
"пешня",
"пешшу",
"пёрка",
"піжма",
"піжон",
"пікап",
"пікет",
"пікта",
"пікша",
"пілка",
"пілон",
"пілот",
"пінія",
"пінта",
"пірат",
"пірке",
"пірог",
"пірол",
"піроп",
"пірыт",
"пісар",
"пісец",
"пісчы",
"пісяг",
"пітво",
"піткі",
"пітны",
"піток",
"пітон",
"піўны",
"піўцо",
"піхта",
"піцца",
"піццё",
"піяла",
"піяна",
"пласт",
"плата",
"плато",
"плебс",
"племя",
"плаха",
"плець",
"плечы",
"плашч",
"плісэ",
"пліта",
"пліца",
"плоць",
"плынь",
"плыць",
"плэер",
"плюшч",
"плява",
"пляга",
"пляма",
"пляск",
"плячо",
"пнеўе",
"пнуць",
"побач",
"побыт",
"повад",
"повар",
"подла",
"подлы",
"позна",
"позні",
"позыў",
"пойла",
"пойма",
"покат",
"покер",
"подый",
"подых",
"поезд",
"поены",
"пожаг",
"пожня",
"позва",
"позех",
"полаг",
"полаз",
"полба",
"поліс",
"полка",
"полюс",
"помач",
"помеж",
"помпа",
"понаж",
"попыт",
"порах",
"порка",
"порск",
"порта",
"поруч",
"понча",
"попел",
"посах",
"посны",
"посуд",
"посул",
"потны",
"потым",
"поўна",
"поўны",
"поўня",
"поўха",
"похва",
"почка",
"пошла",
"пошлы",
"пошта",
"пошук",
"пошум",
"права",
"правы",
"прага",
"праём",
"пража",
"прама",
"прамы",
"праца",
"праць",
"проба",
"проза",
"проса",
"прост",
"проці",
"прыём",
"прыёр",
"прыма",
"прымы",
"прынт",
"прынц",
"прычт",
"прышч",
"прэлы",
"прэль",
"прэнт",
"прэса",
"прэць",
"псіна",
"псіны",
"псовы",
"псуць",
"птаха",
"пугач",
"пудка",
"пудкі",
"пудла",
"пудра",
"пужка",
"пузан",
"пузач",
"пузыр",
"пульс",
"пульт",
"пункт",
"пупок",
"пурга",
"пурын",
"пуста",
"пусты",
"путны",
"пуфік",
"пухір",
"пухкі",
"пухлы",
"пучок",
"пушка",
"пушны",
"пушок",
"пушта",
"пушту",
"пушча",
"пхаць",
"пчала",
"пыжык",
"пылок",
"пыска",
"пышка",
"пышна",
"пышны",
"пэйсы",
"пэўна",
"пэўны",
"пявун",
"пядзя",
"п'яны",
"пярга",
"пярун",
"пясец",
"пяскі",
"пясок",
"пясць",
"пятак",
"пятка",
"пятля",
"пяток",
"пяцца",
"пячны",
"пяюха",
"рабак",
"рабая",
"рабін",
"рабро",
"равок",
"равун",
"рагач",
"рагоз",
"радар",
"раджа",
"радно",
"радня",
"радок",
"радон",
"радца",
"радыё",
"радый",
"ражка",
"ражкі",
"ражок",
"ражон",
"разак",
"разам",
"разец",
"разны",
"разня",
"разок",
"раіць",
"райфа",
"ракам",
"ракія",
"ракля",
"ралля",
"раман",
"раміз",
"рамка",
"рамны",
"рамон",
"рампа",
"ранак",
"рандо",
"раней",
"ранет",
"ранец",
"ранка",
"ранне",
"ранні",
"ранча",
"рапак",
"рапны",
"раска",
"расол",
"растр",
"расці",
"ратай",
"ратны",
"ратон",
"раўнд",
"раўня",
"раўці",
"рафія",
"рахіт",
"рацін",
"рацыя",
"рачны",
"рачок",
"раяль",
"рваны",
"рвань",
"рваць",
"рвота",
"ржавы",
"ржаць",
"робат",
"робер",
"ровар",
"рогат",
"родна",
"родны",
"родый",
"роевы",
"розга",
"розна",
"розны",
"розум",
"роіла",
"ройны",
"рокат",
"рокер",
"ролер",
"ролік",
"ронда",
"ронжа",
"рослы",
"росна",
"росны",
"ростр",
"ротар",
"ротны",
"роўма",
"роўна",
"роўны",
"роўня",
"роцік",
"ртуць",
"рубам",
"рубеж",
"рубец",
"рубін",
"рубка",
"рудны",
"рудня",
"ружжо",
"руіна",
"рукаў",
"рулет",
"рулон",
"румба",
"румза",
"румын",
"рупар",
"рупія",
"рупна",
"рупны",
"русак",
"русін",
"рускі",
"рутар",
"рутыл",
"рухач",
"руцін",
"ручай",
"ручка",
"ручны",
"рыбак",
"рыбец",
"рыбін",
"рыбка",
"рыбны",
"рывок",
"рыжак",
"рыжык",
"рыззё",
"рыкша",
"рымар",
"рынак",
"рында",
"рыніт",
"рынка",
"рысак",
"рыска",
"рыссю",
"рытар",
"рыфлі",
"рыфма",
"рыхла",
"рыхлы",
"рыцар",
"рыцца",
"рыццё",
"рычаг",
"рэбус",
"рэгбі",
"рэдзь",
"рэдка",
"рэдкі",
"рэдут",
"рэжым",
"рэзка",
"рэзкі",
"рэзон",
"рэзус",
"рэйка",
"рэкет",
"рэліз",
"рэлін",
"рэмез",
"рэній",
"рэнін",
"рэнта",
"рэпер",
"рэпка",
"рэпны",
"рэтра",
"рэтуш",
"рэхва",
"рэцін",
"рэчка",
"рэшка",
"рэшта",
"сабес",
"сабор",
"сабур",
"саван",
"сават",
"савет",
"саган",
"сагіб",
"садка",
"садкі",
"садок",
"садом",
"саета",
"сазан",
"сайга",
"сайда",
"сайка",
"сайра",
"сакас",
"саква",
"сакля",
"салат",
"салеп",
"салея",
"салол",
"салон",
"салют",
"самае",
"саман",
"самая",
"самба",
"самец",
"саміт",
"самка",
"самум",
"санет",
"санкі",
"санны",
"сапёр",
"сапло",
"сапны",
"сапун",
"сапці",
"саржа",
"сарна",
"сарыт",
"сарыч",
"сасна",
"сасок",
"сасуд",
"сатыр",
"саўна",
"сафіт",
"сафой",
"сахач",
"сахор",
"сацін",
"сачок",
"сваяк",
"свежа",
"свежы",
"сверб",
"свіль",
"свіны",
"свіст",
"світа",
"свішч",
"свята",
"святы",
"сеанс",
"седан",
"седня",
"сезам",
"сезон",
"сейва",
"сейша",
"секта",
"секчы",
"селен",
"селін",
"семіт",
"семкі",
"сенат",
"сенны",
"сенцы",
"сепія",
"серка",
"серны",
"серсо",
"серум",
"серыя",
"сесія",
"сесці",
"сетка",
"сечка",
"сеяны",
"сеяць",
"сёмга",
"сёння",
"сівак",
"сівер",
"сівец",
"сівуч",
"сігма",
"сіена",
"сікоз",
"сілай",
"сілас",
"сілач",
"сілок",
"сілур",
"сільф",
"сінап",
"сінгл",
"сінец",
"сінод",
"сінус",
"сіняк",
"сіпай",
"сіпка",
"сіпла",
"сіплы",
"сіроп",
"сірын",
"сітар",
"сітка",
"сітны",
"сітро",
"сітца",
"сіўка",
"сіфон",
"скаба",
"скала",
"скапа",
"скарб",
"скарн",
"скаўт",
"сквер",
"сквош",
"скейт",
"скетч",
"скіба",
"склад",
"склеп",
"склёп",
"склон",
"склюд",
"скокі",
"скора",
"скоры",
"скоса",
"скосы",
"скотч",
"скраб",
"скрап",
"скрут",
"скрып",
"скула",
"скуль",
"скунс",
"скупа",
"скупы",
"скура",
"скурч",
"скуты",
"скуць",
"слаба",
"слабы",
"слава",
"слайд",
"сланы",
"слаць",
"слепа",
"сліва",
"слёзы",
"слізь",
"сліна",
"слоік",
"слота",
"слуга",
"слова",
"слюда",
"сляза",
"слыць",
"слэнг",
"сляпы",
"смага",
"смала",
"смела",
"смаль",
"смелы",
"смерд",
"смерч",
"смець",
"смоль",
"сморж",
"смоўж",
"смуга",
"смута",
"соевы",
"сойка",
"сокал",
"сокат",
"солад",
"сніць",
"солка",
"солкі",
"сомаў",
"сонна",
"сонны",
"сонца",
"сопка",
"сопкі",
"соплі",
"сорак",
"сорам",
"сорга",
"сорус",
"соска",
"сотка",
"сотня",
"соўка",
"сохлы",
"соцкі",
"сочка",
"сочна",
"сочны",
"сошка",
"сошны",
"спаць",
"спелы",
"спеты",
"спевы",
"спіна",
"спець",
"спёка",
"спіты",
"спірт",
"спора",
"спорт",
"сплін",
"спонж",
"сплаў",
"спіца",
"спіць",
"спрат",
"спрут",
"спрыт",
"спрэй",
"спрэс",
"спуду",
"спурт",
"спуск",
"ссаць",
"спячы",
"стала",
"ссячы",
"ставы",
"стаер",
"стаза",
"сталы",
"сталь",
"станс",
"стапа",
"старт",
"стары",
"стаць",
"стаяк",
"ствол",
"створ",
"стогн",
"стоік",
"столь",
"стома",
"страж",
"страз",
"стоўб",
"стоўп",
"страх",
"строі",
"строй",
"строп",
"струг",
"струк",
"струп",
"стрыж",
"стрым",
"стрэл",
"стрэс",
"стуль",
"ступа",
"стыло",
"стылы",
"стыль",
"стынь",
"стыць",
"стэйк",
"стэка",
"стэла",
"стэнд",
"стэпс",
"стэрх",
"сувей",
"сувой",
"судак",
"судна",
"судок",
"судны",
"сукно",
"сукня",
"сумах",
"сумёт",
"сумка",
"сумна",
"сумны",
"суніт",
"супін",
"супын",
"сусак",
"сусед",
"сусла",
"сурма",
"сурок",
"сурык",
"суткі",
"суфле",
"сухар",
"сучок",
"сучча",
"сушка",
"сушня",
"сушэй",
"сфера",
"схема",
"схіма",
"сходы",
"сцень",
"сціск",
"сціха",
"сцэна",
"сцюжа",
"сцяна",
"сцяты",
"сцяць",
"сцячы",
"счуты",
"счуць",
"сшыты",
"сшыць",
"сынаў",
"сыпка",
"сыпкі",
"сыпны",
"сырны",
"сырок",
"сырэц",
"сысок",
"сысун",
"сысці",
"сытна",
"сытны",
"сычуг",
"сьера",
"сэрум",
"сэрца",
"сэтар",
"сюдой",
"сюжэт",
"сюіта",
"сядло",
"сядня",
"сядок",
"сядун",
"сякач",
"сявак",
"сявец",
"сябар",
"сябра",
"сярод",
"сям'я",
"сянаж",
"сянны",
"табар",
"табес",
"табло",
"табун",
"тавар",
"тавот",
"таган",
"тазік",
"таіць",
"тайга",
"тайна",
"тайны",
"такай",
"такса",
"таксі",
"талер",
"таліб",
"такыр",
"талій",
"талія",
"талон",
"тальк",
"тамат",
"тамга",
"танаж",
"танга",
"таней",
"танец",
"танід",
"танін",
"тапаз",
"танна",
"танны",
"тапёр",
"тапір",
"тапкі",
"тапор",
"таргі",
"тарка",
"тарны",
"таран",
"тарос",
"тарпа",
"тарыт",
"тарыф",
"тарэц",
"татаў",
"татка",
"татэм",
"таўро",
"таўчы",
"тафта",
"таф'я",
"тахта",
"тачка",
"твань",
"твіст",
"тканы",
"ткаха",
"ткаць",
"тлець",
"тлушч",
"тнуць",
"токар",
"томік",
"тонер",
"тонік",
"тонка",
"тонкі",
"тонус",
"топка",
"топкі",
"торба",
"торны",
"торый",
"трава",
"тракт",
"трама",
"транс",
"транш",
"траса",
"траст",
"трата",
"траха",
"траяк",
"троль",
"тромб",
"трохі",
"труба",
"трумо",
"труна",
"трупа",
"трусы",
"труха",
"трыба",
"трыер",
"трыёд",
"трызм",
"трыко",
"трыял",
"трыяс",
"трэба",
"трэль",
"трэск",
"трэст",
"трэфы",
"трэці",
"трэць",
"туаль",
"тубус",
"тугай",
"туевы",
"тужэй",
"тузін",
"тукан",
"тулій",
"тумак",
"туман",
"тупат",
"тумба",
"тунец",
"тупік",
"тупкі",
"турак",
"турач",
"турма",
"турнэ",
"туфлі",
"тухлы",
"тушка",
"тымол",
"тымус",
"тыпаж",
"тыраж",
"тыран",
"тырса",
"тытан",
"тытул",
"тыфон",
"тыфус",
"тычка",
"тыяра",
"тэатр",
"тэзіс",
"тэізм",
"тэіст",
"тэкст",
"тэлур",
"тэмбр",
"тэнар",
"тэніс",
"тэпці",
"тэрмы",
"тэрор",
"убаку",
"убіты",
"убіць",
"убога",
"убогі",
"уброд",
"убыць",
"увага",
"уверх",
"увесь",
"увіты",
"увіць",
"уволю",
"увысь",
"угару",
"угары",
"углыб",
"угрэў",
"удава",
"удала",
"удалы",
"удаць",
"удача",
"удвая",
"удвух",
"удзел",
"удовы",
"удоўж",
"уежна",
"уесці",
"ужаты",
"ужаць",
"ужыты",
"ужыць",
"узбек",
"узбоч",
"узвал",
"узвар",
"узвод",
"узвоз",
"уздым",
"уздых",
"узлёт",
"узлом",
"узмах",
"узнос",
"узрыў",
"узяты",
"узяць",
"уклад",
"укруг",
"улада",
"улева",
"уліты",
"уліць",
"умбра",
"умела",
"умелы",
"умець",
"умова",
"умовы",
"умыты",
"умыць",
"умяты",
"умяць",
"унаём",
"уначы",
"унізе",
"уніят",
"уночы",
"унтэр",
"унутр",
"унцыя",
"упалы",
"упікі",
"упіты",
"упіць",
"уплаў",
"уплыў",
"упроч",
"упуск",
"упяць",
"упячы",
"урачы",
"урвіс",
"урода",
"урокі",
"урына",
"услед",
"услон",
"услых",
"усмак",
"усмал",
"устаў",
"устоі",
"устой",
"уступ",
"усход",
"усцяж",
"усюды",
"усяго",
"усякі",
"усячы",
"утома",
"утора",
"утрая",
"утрох",
"утыль",
"ухаба",
"уцеха",
"уцёкі",
"уціск",
"уцяты",
"уцяць",
"уцячы",
"учора",
"учуты",
"учуць",
"ушкуй",
"ушыты",
"ушыць",
"уюрок",
"уючны",
"фавор",
"фагот",
"фазан",
"фазіс",
"фазны",
"файна",
"файны",
"факел",
"факір",
"фалас",
"фалда",
"фальц",
"фальш",
"фанат",
"фанты",
"фарба",
"фасад",
"фасет",
"фаска",
"фасон",
"фатон",
"фатум",
"фаўна",
"фацыя",
"фацэт",
"фаянс",
"фелах",
"ферат",
"ферзь",
"ферма",
"ферыт",
"феска",
"фетыш",
"феніл",
"фенол",
"фібра",
"фібры",
"фідар",
"фіёрд",
"фіжмы",
"фізік",
"філей",
"філёр",
"філін",
"філіт",
"філія",
"філон",
"фікус",
"фільм",
"фімоз",
"фінал",
"фінік",
"фініш",
"фінка",
"фіноз",
"фірма",
"фіцін",
"фішка",
"фіякр",
"фланг",
"фланк",
"флейц",
"флёкс",
"флірт",
"флора",
"флюід",
"флякі",
"флянс",
"фобія",
"фокус",
"фоліа",
"форма",
"фортэ",
"форум",
"фофан",
"фраза",
"франт",
"фрахт",
"фронт",
"фрукт",
"фрэза",
"фрэнч",
"фрэон",
"фугас",
"фужэр",
"фузія",
"фуляр",
"фураж",
"фурка",
"фурма",
"фурор",
"фурыя",
"футра",
"фуэтэ",
"хаана",
"хабар",
"хадня",
"хадок",
"хадун",
"хазар",
"хакей",
"хакер",
"халат",
"халва",
"халіф",
"халоп",
"халуй",
"хамка",
"хамса",
"хамут",
"хамяк",
"ханжа",
"ханты",
"хапок",
"хапун",
"харал",
"харкі",
"харчо",
"харэй",
"харэя",
"хатка",
"хатні",
"хвала",
"хваля",
"хворы",
"хвост",
"хвошч",
"хедар",
"херас",
"хеўра",
"хібны",
"хімік",
"хімія",
"хінін",
"хінны",
"хінон",
"хітон",
"хітра",
"хітры",
"хіцін",
"хіязм",
"хлыст",
"хлюст",
"хмара",
"хмель",
"хмуры",
"хобат",
"ходка",
"ходкі",
"холад",
"хорам",
"хорда",
"хохма",
"храпа",
"хрась",
"хруст",
"хрушч",
"хтось",
"хунта",
"хурал",
"хурма",
"хуста",
"хутар",
"хутка",
"хуткі",
"хціва",
"хцівы",
"цалік",
"цалок",
"цапфа",
"царок",
"цароў",
"цацка",
"цвілы",
"цвіль",
"цемра",
"цераз",
"церам",
"церні",
"церці",
"цесля",
"цесна",
"цесны",
"цеста",
"цесць",
"цечка",
"цешча",
"цёзка",
"цёлка",
"цёмна",
"цёмны",
"цёпла",
"цёплы",
"цёрка",
"цёрла",
"цёрты",
"цёска",
"цётка",
"цёшка",
"цівун",
"ціпун",
"ціскі",
"цітла",
"цішэй",
"цнота",
"цокат",
"цотны",
"цугам",
"цуглі",
"цудам",
"цукар",
"цукат",
"цупкі",
"цурка",
"цурок",
"цыбук",
"цыбур",
"цыкля",
"цыган",
"цымус",
"цынга",
"цынік",
"цынія",
"цыпка",
"цыроз",
"цыста",
"цытра",
"цыцар",
"цыцкі",
"цэбар",
"цэгла",
"цэдра",
"цэзар",
"цэзій",
"цэлае",
"цэлік",
"цэліт",
"цэнны",
"цэноз",
"цэнтр",
"цэпкі",
"цэрый",
"цэсар",
"цэўка",
"цэхін",
"цэшка",
"цюбік",
"цюнер",
"цюпка",
"цюрбо",
"цюфяк",
"цягач",
"цяглі",
"цягло",
"цяглы",
"цяжар",
"цяжба",
"цяжка",
"цяжкі",
"цяжэй",
"цялеж",
"цямкі",
"цямны",
"цямця",
"цянёк",
"цяпер",
"цяпло",
"цясак",
"цясла",
"чабан",
"чабор",
"чадна",
"чадны",
"чадра",
"чайка",
"чайны",
"чакан",
"чакра",
"чалма",
"чапец",
"чапля",
"чарва",
"чарга",
"чарка",
"чарон",
"чарот",
"часта",
"часты",
"часам",
"часць",
"чахла",
"чахлы",
"чахол",
"чмель",
"човен",
"чорна",
"чорны",
"чубок",
"чужак",
"чужое",
"чуйна",
"чуйны",
"чумак",
"чумны",
"чурэк",
"чутка",
"чуткі",
"чутна",
"чутны",
"чуцца",
"чуццё",
"чучка",
"чушка",
"чхаць",
"чыгір",
"чыгун",
"чыжык",
"чылім",
"чымся",
"чынны",
"чыпсы",
"чырва",
"чырок",
"чысло",
"чыста",
"чысты",
"чытач",
"чытка",
"чэзлы",
"чэмер",
"чэпік",
"чэрап",
"чэрві",
"чэрнь",
"чэсна",
"чэсны",
"чэсць",
"чэшка",
"чэшкі",
"шабат",
"шабаш",
"шабер",
"шаблі",
"шабля",
"шабот",
"шавец",
"шагам",
"шайба",
"шайка",
"шакал",
"шалаш",
"шалік",
"шалом",
"шаман",
"шамая",
"шамкі",
"шамот",
"шапка",
"шарак",
"шарон",
"шарош",
"шарык",
"шатан",
"шатун",
"шатэн",
"шаўро",
"шафер",
"шафёр",
"шафка",
"шахід",
"шахта",
"шацёр",
"шація",
"шашка",
"шашкі",
"шашні",
"шашок",
"швіва",
"шкада",
"шкала",
"шквал",
"шкляр",
"шкода",
"школа",
"шкура",
"шланг",
"шлейф",
"шляга",
"шморг",
"шолах",
"шорах",
"шорты",
"шосты",
"шпага",
"шпала",
"шпень",
"шпіён",
"шпіль",
"шпона",
"шпора",
"шпрыц",
"шпуля",
"шпунт",
"шруба",
"шрыфт",
"штаба",
"штамб",
"штамп",
"штаны",
"штора",
"шторм",
"штраф",
"штрых",
"штрэк",
"штука",
"штурм",
"штурх",
"штыль",
"штыфт",
"штэйн",
"шубка",
"шубны",
"шулер",
"шуляк",
"шумна",
"шумны",
"шумок",
"шурка",
"шутка",
"шхеры",
"шхуна",
"шчака",
"шчаня",
"шчапа",
"шчаўе",
"шчоўк",
"шчыра",
"шчыры",
"шчэпа",
"шыбер",
"шыбка",
"шывок",
"шыізм",
"шыйка",
"шыйны",
"шынка",
"шынны",
"шынок",
"шыпун",
"шырай",
"шырма",
"шыршы",
"шытво",
"шыўны",
"шыфер",
"шыфон",
"шыхта",
"шыцік",
"шыцца",
"шыццё",
"шышак",
"шышка",
"шэлак",
"шэлег",
"шэльф",
"шэраг",
"шэрыф",
"шэсце",
"эаліт",
"эацэн",
"эвенк",
"эгіда",
"эгрэт",
"эдыкт",
"экзот",
"эклер",
"экран",
"элінг",
"эліпс",
"эліта",
"эмаль",
"энзім",
"энскі",
"эпіка",
"эпонж",
"эпоха",
"эрбій",
"эрзац",
"эркер",
"эскіз",
"эстэт",
"этнас",
"этрол",
"этыка",
"эфект",
"эхаць",
"юдоль",
"юзіст",
"юкала",
"юначы",
"юнець",
"юніёр",
"юнкар",
"юнкер",
"юннат",
"юрага",
"юр'еў",
"юрыст",
"юрыць",
"юсавы",
"ютавы",
"юферс",
"яблык",
"ягада",
"юрскі",
"ягель",
"ягоны",
"ягуар",
"ядваб",
"ядомы",
"ядучы",
"яечка",
"яечны",
"яечня",
"яздок",
"язёвы",
"язмін",
"якавы",
"якаць",
"якраз",
"ялавы",
"яліна",
"яловы",
"яміна",
"ямскі",
"ямчэй",
"янтар",
"япрук",
"яравы",
"ярара",
"ярлык",
"ярчэй",
"ярына",
"ярыца",
"ясень",
"ястык",
"ятоўе",
"яўрэй",
"яхант",
"яхіда",
];
  /** @type {string} */
  var c = "present";
  /** @type {string} */
  var o = "correct";
  /** @type {string} */
  var bytes = "absent";
  var settings = {
    unknown : 0,
    absent : 1,
    present : 2,
    correct : 3
  };
  /** @type {!Date} */
  var mutationsMap = new Date(2022, 0, 16, 0, 0, 0, 0);
  /** @type {string} */
  var choices = "абвгдеёжзійклмнопрстуўфхцчш’ыьэюя";
  /** @type {!Array<?>} */
  var braces = [].concat(toArray(choices.split("").slice(13)), toArray(choices.split("").slice(0, 13)));
  /** @type {string} */
  var STORAGE_KEY_MOCKSTORE = "statistics";
  /** @type {string} */
  var undefined = "fail";
  var train1or = {
    currentStreak : 0,
    maxStreak : 0,
    guesses : callback({
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0
    }, undefined, 0),
    winPercentage : 0,
    gamesPlayed : 0,
    gamesWon : 0,
    averageGuesses : 0
  };
  /** @type {!Element} */
  var post = document.createElement("template");
  /** @type {string} */
  post.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1E3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4E3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         ЎОРДЛІ\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  /** @type {!Element} */
  var form = document.createElement("template");
  /** @type {string} */
  form.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  /** @type {string} */
  var exitCode = "IN_PROGRESS";
  /** @type {string} */
  var CONNECTING = "WIN";
  /** @type {string} */
  var obj = "FAIL";
  /** @type {!Array} */
  var pedalboards = ["Неверагодна", "Цудоўна", "Выдатна", "Годна", "Добра", "Уф!"];
  var DialogElement = function(e) {
    /**
     * @return {?}
     */
    function init() {
      var self;
      log(this, init);
      callback(set(self = request.call(this)), "tileIndex", 0);
      callback(set(self), "rowIndex", 0);
      callback(set(self), "solution", void 0);
      callback(set(self), "boardState", void 0);
      callback(set(self), "evaluations", void 0);
      callback(set(self), "canInput", true);
      callback(set(self), "gameStatus", exitCode);
      callback(set(self), "letterEvaluations", {});
      callback(set(self), "$board", void 0);
      callback(set(self), "$keyboard", void 0);
      callback(set(self), "$game", void 0);
      callback(set(self), "today", void 0);
      callback(set(self), "lastPlayedTs", void 0);
      callback(set(self), "lastCompletedTs", void 0);
      callback(set(self), "hardMode", void 0);
      callback(set(self), "dayOffset", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      self.today = new Date;
      var data = parse();
      return self.lastPlayedTs = data.lastPlayedTs, !self.lastPlayedTs || cb(new Date(self.lastPlayedTs), self.today) >= 1 ? (self.boardState = (new Array(6)).fill(""), self.evaluations = (new Array(6)).fill(null), self.solution = isDate(self.today), self.dayOffset = getTime(self.today), self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.restoringFromLocalStorage = false, done({
        rowIndex : self.rowIndex,
        boardState : self.boardState,
        evaluations : self.evaluations,
        solution : self.solution,
        gameStatus : self.gameStatus
      }), check("event", "level_start", {
        level_name : combine(self.solution)
      })) : (self.boardState = data.boardState, self.evaluations = data.evaluations, self.rowIndex = data.rowIndex, self.solution = data.solution, self.dayOffset = getTime(self.today), self.letterEvaluations = filter(self.boardState, self.evaluations), self.gameStatus = data.gameStatus, self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.gameStatus !== exitCode && (self.canInput = false), self.restoringFromLocalStorage = true), self;
    }
    on(init, e);
    var request = makeRequest(init);
    return trigger(init, [{
      key : "evaluateRow",
      value : function() {
        if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
          var value;
          var brickInput = this.$board.querySelectorAll("game-row")[this.rowIndex];
          var integer = this.boardState[this.rowIndex];
          if (value = integer, !updatedSet.includes(value) && !options.includes(value)) {
            return brickInput.setAttribute("invalid", ""), void this.addToast("Гэтае слова мне невядома!");
          }
          if (this.hardMode) {
            var that = function(x, obj, word) {
              if (!x || !obj || !word) {
                return {
                  validGuess : true
                };
              }
              /** @type {number} */
              var i = 0;
              for (; i < word.length; i++) {
                if (word[i] === o && x[i] !== obj[i]) {
                  return {
                    validGuess : false,
                    errorMessage : "".concat(ordinal(i + 1), " letter must be ").concat(obj[i].toUpperCase())
                  };
                }
              }
              var o = {};
              /** @type {number} */
              var k = 0;
              for (; k < word.length; k++) {
                if ([o, c].includes(word[k])) {
                  if (o[obj[k]]) {
                    o[obj[k]] += 1;
                  } else {
                    /** @type {number} */
                    o[obj[k]] = 1;
                  }
                }
              }
              var newValuesArr = x.split("").reduce(function(eventsDict, event) {
                return eventsDict[event] ? eventsDict[event] += 1 : eventsDict[event] = 1, eventsDict;
              }, {});
              var f;
              for (f in o) {
                if ((newValuesArr[f] || 0) < o[f]) {
                  return {
                    validGuess : false,
                    errorMessage : "Guess must contain ".concat(f.toUpperCase())
                  };
                }
              }
              return {
                validGuess : true
              };
            }(integer, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]);
            var malakh = that.validGuess;
            var paramErrorMessage = that.errorMessage;
            if (!malakh) {
              return brickInput.setAttribute("invalid", ""), void this.addToast(paramErrorMessage || "Not valid in hard mode");
            }
          }
          var that = function(p, s) {
            /** @type {!IArrayLike<?>} */
            var v = Array(s.length).fill(bytes);
            /** @type {!IArrayLike<?>} */
            var eccBuffer = Array(s.length).fill(true);
            /** @type {!IArrayLike<?>} */
            var fdcache = Array(s.length).fill(true);
            /** @type {number} */
            var i = 0;
            for (; i < p.length; i++) {
              if (p[i] === s[i] && fdcache[i]) {
                /** @type {string} */
                v[i] = o;
                /** @type {boolean} */
                eccBuffer[i] = false;
                /** @type {boolean} */
                fdcache[i] = false;
              }
            }
            /** @type {number} */
            var t = 0;
            for (; t < p.length; t++) {
              var type = p[t];
              if (eccBuffer[t]) {
                /** @type {number} */
                var i = 0;
                for (; i < s.length; i++) {
                  var n = s[i];
                  if (fdcache[i] && type === n) {
                    /** @type {string} */
                    v[t] = c;
                    /** @type {boolean} */
                    fdcache[i] = false;
                    break;
                  }
                }
              }
            }
            return v;
          }(integer, this.solution);
          this.evaluations[this.rowIndex] = that;
          this.letterEvaluations = filter(this.boardState, this.evaluations);
          brickInput.evaluation = this.evaluations[this.rowIndex];
          this.rowIndex += 1;
          /** @type {boolean} */
          var eventName = this.rowIndex >= 6;
          var propertyName = that.every(function(guess) {
            return "correct" === guess;
          });
          if (eventName || propertyName) {
            draw({
              isWin : propertyName,
              isStreak : !!this.lastCompletedTs && 1 === cb(new Date(this.lastCompletedTs), new Date),
              numGuesses : this.rowIndex
            });
            done({
              lastCompletedTs : Date.now()
            });
            /** @type {string} */
            this.gameStatus = propertyName ? CONNECTING : obj;
            check("event", "level_end", {
              level_name : combine(this.solution),
              num_guesses : this.rowIndex,
              success : propertyName
            });
          }
          /** @type {number} */
          this.tileIndex = 0;
          /** @type {boolean} */
          this.canInput = false;
          done({
            rowIndex : this.rowIndex,
            boardState : this.boardState,
            evaluations : this.evaluations,
            solution : this.solution,
            gameStatus : this.gameStatus,
            lastPlayedTs : Date.now()
          });
        }
      }
    }, {
      key : "addLetter",
      value : function(recB) {
        if (this.gameStatus === exitCode) {
          if (this.canInput) {
            if (!(this.tileIndex >= 5)) {
              this.boardState[this.rowIndex] += recB;
              this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]);
              this.tileIndex += 1;
            }
          }
        }
      }
    }, {
      key : "removeLetter",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput && !(this.tileIndex <= 0)) {
          this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
          var _ = this.$board.querySelectorAll("game-row")[this.rowIndex];
          if (this.boardState[this.rowIndex]) {
            _.setAttribute("letters", this.boardState[this.rowIndex]);
          } else {
            _.removeAttribute("letters");
          }
          _.removeAttribute("invalid");
          this.tileIndex -= 1;
        }
      }
    }, {
      key : "submitGuess",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput) {
          if (5 !== this.tileIndex) {
            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Не хапае літар!");
          }
          this.evaluateRow();
        }
      }
    }, {
      key : "addToast",
      value : function(reason, label) {
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        /** @type {!Element} */
        var t = document.createElement("game-toast");
        t.setAttribute("text", reason);
        if (label) {
          t.setAttribute("duration", label);
        }
        if (s) {
          this.shadowRoot.querySelector("#system-toaster").prepend(t);
        } else {
          this.shadowRoot.querySelector("#game-toaster").prepend(t);
        }
      }
    }, {
      key : "sizeBoard",
      value : function() {
        var scrollbar_handle = this.shadowRoot.querySelector("#board-container");
        /** @type {number} */
        var x = Math.min(Math.floor(scrollbar_handle.clientHeight * (5 / 6)), 350);
        /** @type {number} */
        var predicted_answer = 6 * Math.floor(x / 5);
        /** @type {string} */
        this.$board.style.width = "".concat(x, "px");
        /** @type {string} */
        this.$board.style.height = "".concat(predicted_answer, "px");
      }
    }, {
      key : "showStatsModal",
      value : function() {
        var span = this.$game.querySelector("game-modal");
        /** @type {!Element} */
        var edit = document.createElement("game-stats");
        if (this.gameStatus === CONNECTING && this.rowIndex <= 6) {
          edit.setAttribute("highlight-guess", this.rowIndex);
        }
        edit.gameApp = this;
        span.appendChild(edit);
        span.setAttribute("open", "");
      }
    }, {
      key : "showHelpModal",
      value : function() {
        var e = this.$game.querySelector("game-modal");
        e.appendChild(document.createElement("game-help"));
        e.setAttribute("open", "");
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(post.content.cloneNode(true));
        this.$game = this.shadowRoot.querySelector("#game");
        this.$board = this.shadowRoot.querySelector("#board");
        this.$keyboard = this.shadowRoot.querySelector("game-keyboard");
        this.sizeBoard();
        if (!this.lastPlayedTs) {
          setTimeout(function() {
            return self.showHelpModal();
          }, 100);
        }
        /** @type {number} */
        var prop = 0;
        for (; prop < 6; prop++) {
          /** @type {!Element} */
          var model = document.createElement("game-row");
          model.setAttribute("letters", this.boardState[prop]);
          model.setAttribute("length", 5);
          if (this.evaluations[prop]) {
            model.evaluation = this.evaluations[prop];
          }
          this.$board.appendChild(model);
        }
        this.$game.addEventListener("game-key-press", function(sender) {
          var s = sender.detail.key;
          if ("←" === s || "Backspace" === s) {
            self.removeLetter();
          } else {
            if ("↵" === s || "Enter" === s) {
              self.submitGuess();
            } else {
              if (choices.includes(s.toLowerCase())) {
                self.addLetter(s.toLowerCase());
              }
            }
          }
        });
        this.$game.addEventListener("game-last-tile-revealed-in-row", function(event) {
          self.$keyboard.letterEvaluations = self.letterEvaluations;
          if (self.rowIndex < 6) {
            /** @type {boolean} */
            self.canInput = true;
          }
          var r = self.$board.querySelectorAll("game-row")[self.rowIndex - 1];
          if ((event.path || event.composedPath && event.composedPath()).includes(r)) {
            if ([CONNECTING, obj].includes(self.gameStatus)) {
              if (self.restoringFromLocalStorage) {
                self.showStatsModal();
              } else {
                if (self.gameStatus === CONNECTING) {
                  r.setAttribute("win", "");
                  self.addToast(pedalboards[self.rowIndex - 1], 2E3);
                }
                if (self.gameStatus === obj) {
                  self.addToast(self.solution.toUpperCase(), 1 / 0);
                }
                setTimeout(function() {
                  self.showStatsModal();
                }, 2500);
              }
            }
            /** @type {boolean} */
            self.restoringFromLocalStorage = false;
          }
        });
        this.shadowRoot.addEventListener("game-setting-change", function(event) {
          var node = event.detail;
          var variableIdentifier = node.name;
          var connection = node.checked;
          var isDisabled = node.disabled;
          switch(variableIdentifier) {
            case "hard-mode":
              return void(isDisabled ? self.addToast("Hard mode can only be enabled at the start of a round", 1500, true) : (self.hardMode = connection, done({
                hardMode : connection
              })));
          }
        });
        this.shadowRoot.getElementById("settings-button").addEventListener("click", function(a) {
          var body = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var debug = document.createTextNode("Наладкі");
          body.appendChild(debug);
          /** @type {!Element} */
          var node = document.createElement("game-settings");
          node.setAttribute("slot", "content");
          node.gameApp = self;
          body.appendChild(node);
          body.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("help-button").addEventListener("click", function(a) {
          var s = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var t = document.createTextNode("Як гуляць");
          s.appendChild(t);
          /** @type {!Element} */
          var container = document.createElement("game-help");
          container.setAttribute("page", "");
          container.setAttribute("slot", "content");
          s.appendChild(container);
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("statistics-button").addEventListener("click", function(a) {
          self.showStatsModal();
        });
        window.addEventListener("resize", this.sizeBoard.bind(this));
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
      }
    }, {
      key : "debugTools",
      value : function() {
        var i = this;
        this.shadowRoot.getElementById("debug-tools").appendChild(form.content.cloneNode(true));
        this.shadowRoot.getElementById("toast").addEventListener("click", function(a) {
          i.addToast("hello world");
        });
        this.shadowRoot.getElementById("modal").addEventListener("click", function(a) {
          var s = i.$game.querySelector("game-modal");
          /** @type {string} */
          s.textContent = "hello plz";
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("reveal").addEventListener("click", function() {
          i.evaluateRow();
        });
        this.shadowRoot.getElementById("shake").addEventListener("click", function() {
          i.$board.querySelectorAll("game-row")[i.rowIndex].setAttribute("invalid", "");
        });
        this.shadowRoot.getElementById("bounce").addEventListener("click", function() {
          var context = i.$board.querySelectorAll("game-row")[i.rowIndex - 1];
          if ("" === context.getAttribute("win")) {
            context.removeAttribute("win");
          } else {
            context.setAttribute("win", "");
          }
        });
      }
    }]), init;
  }(register(HTMLElement));
  customElements.define("game-app", DialogElement);
  /** @type {!Element} */
  var tabs = document.createElement("template");
  /** @type {string} */
  tabs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var XBabel2 = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(tabs.content.cloneNode(true));
        this.addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".content").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".content").classList.remove("closing");
            menu.removeChild(menu.firstChild);
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-modal", XBabel2);
  /** @type {!Element} */
  var fragment = document.createElement("template");
  /** @type {string} */
  fragment.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  /** @type {!Element} */
  var templateNode = document.createElement("template");
  /** @type {string} */
  templateNode.innerHTML = "\n  <button>key</button>\n";
  /** @type {!Element} */
  var _temp = document.createElement("template");
  /** @type {string} */
  _temp.innerHTML = '\n  <div></div>\n';
  /** @type {!Array} */
  var pipelets = [["ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "ў", "з", "х", "’"], ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"], ["↵", "я", "ч", "с", "м", "і", "т", "ь", "б", "ю", "←"]];
  var XDefined = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_letterEvaluations", {}), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "letterEvaluations",
      set : function(data) {
        /** @type {!Object} */
        this._letterEvaluations = data;
        this._render();
      }
    }, {
      key : "dispatchKeyPressEvent",
      value : function(e) {
        this.dispatchEvent(new CustomEvent("game-key-press", {
          bubbles : true,
          composed : true,
          detail : {
            key : e
          }
        }));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var base = this;
        this.shadowRoot.appendChild(fragment.content.cloneNode(true));
        this.$keyboard = this.shadowRoot.getElementById("keyboard");
        this.$keyboard.addEventListener("click", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            base.dispatchKeyPressEvent(el.dataset.key);
          }
        });
        window.addEventListener("keydown", function(event) {
          if (true !== event.repeat) {
            var s = event.key;
            /** @type {boolean} */
            var meta = event.metaKey;
            /** @type {boolean} */
            var ctrlPressed = event.ctrlKey;
            if (!(meta || ctrlPressed)) {
              if (choices.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) {
                base.dispatchKeyPressEvent(s);
              }
            }
          }
        });
        this.$keyboard.addEventListener("transitionend", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            el.classList.remove("fade");
          }
        });
        pipelets.forEach(function(wrappersTemplates) {
          /** @type {!Element} */
          var s = document.createElement("div");
          s.classList.add("row");
          wrappersTemplates.forEach(function(char) {
            var span;
            if ((char >= "а" && char <= "я" && char != "и" && char != "щ") || "’" === char || "ё" === char || "і" === char || "ў" === char || "←" === char || "↵" === char) {
              if ((span = templateNode.content.cloneNode(true).firstElementChild).dataset.key = char, span.textContent = char, "←" === char) {
                /** @type {!Element} */
                var t = document.createElement("game-icon");
                t.setAttribute("icon", "backspace");
                /** @type {string} */
                span.textContent = "";
                span.appendChild(t);
                span.classList.add("one-and-a-half");
              }
              if ("↵" == char) {
                /** @type {string} */
                span.textContent = "enter";
                span.classList.add("one-and-a-half");
              }
            } else {
			  alert(char);	
              (span = _temp.content.cloneNode(true).firstElementChild).classList.add(1 === char.length ? "half" : "one");
            }
            s.appendChild(span);
          });
          base.$keyboard.appendChild(s);
        });
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var i;
        for (i in this._letterEvaluations) {
          var objectDiv = this.$keyboard.querySelector('[data-key="'.concat(i, '"]'));
          objectDiv.dataset.state = this._letterEvaluations[i];
          objectDiv.classList.add("fade");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-keyboard", XDefined);
  (function() {
    (console.warn || console.log).apply(console, arguments);
  }).bind("[clipboard-polyfill]");
  var dom;
  var list;
  var app;
  var comp;
  /** @type {(Navigator|undefined)} */
  var target = "undefined" == typeof navigator ? void 0 : navigator;
  var clipboard = null == target ? void 0 : target.clipboard;
  if (!(null === (dom = null == clipboard ? void 0 : clipboard.read) || void 0 === dom)) {
    dom.bind(clipboard);
  }
  if (!(null === (list = null == clipboard ? void 0 : clipboard.readText) || void 0 === list)) {
    list.bind(clipboard);
  }
  var renderMachines = (null === (app = null == clipboard ? void 0 : clipboard.write) || void 0 === app || app.bind(clipboard), null === (comp = null == clipboard ? void 0 : clipboard.writeText) || void 0 === comp ? void 0 : comp.bind(clipboard));
  /** @type {(Window|undefined)} */
  var _a = "undefined" == typeof window ? void 0 : window;
  /** @type {(Window|undefined)} */
  var state = (null == _a || _a.ClipboardItem, _a);
  /**
   * @return {undefined}
   */
  var e = function() {
    /** @type {boolean} */
    this.success = false;
  };
  /** @type {!Element} */
  var $template = document.createElement("template");
  /** @type {string} */
  $template.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Статыстыка</h1>\n    <div id="statistics"></div>\n    <h1>Гісторыя гульняў</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  /** @type {!Element} */
  var tpl = document.createElement("template");
  /** @type {string} */
  tpl.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  /** @type {!Element} */
  var container = document.createElement("template");
  /** @type {string} */
  container.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  /** @type {!Element} */
  var cached = document.createElement("template");
  /** @type {string} */
  cached.innerHTML = '\n  <div class="countdown">\n    <h1>Наступны ЎОРДЛІ</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Падзяліцца <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
  var dragitemhomes = {
    currentStreak : "Бягучая сэрыя",
    maxStreak : "Лепшая сэрыя",
    winPercentage : "% перамог",
    gamesPlayed : "Усяго гульняў",
    gamesWon : "Перамог",
    averageGuesses : "Сярэдняя колькасць спробаў"
  };
  var XProgressbarElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "stats", {}), callback(set(self), "gameApp", void 0), self.attachShadow({
        mode : "open"
      }), self.stats = deepClone(), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        var years = this.shadowRoot.getElementById("statistics");
        var overlay = this.shadowRoot.getElementById("guess-distribution");
        /** @type {number} */
        var total = Math.max.apply(Math, toArray(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every(function(canCreateDiscussions) {
          return 0 === canCreateDiscussions;
        })) {
          /** @type {!Element} */
          var cursor = document.createElement("div");
          cursor.classList.add("no-data");
          /** @type {string} */
          cursor.innerText = "No Data";
          overlay.appendChild(cursor);
        } else {
          /** @type {number} */
          var i = 1;
          for (; i < Object.keys(this.stats.guesses).length; i++) {
            /** @type {number} */
            var funcCode = i;
            var v = this.stats.guesses[i];
            var fragment = container.content.cloneNode(true);
            /** @type {number} */
            var x = Math.max(7, Math.round(v / total * 100));
            /** @type {number} */
            fragment.querySelector(".guess").textContent = funcCode;
            var visualsElement = fragment.querySelector(".graph-bar");
            if (visualsElement.style.width = "".concat(x, "%"), "number" == typeof v) {
              fragment.querySelector(".num-guesses").textContent = v;
              if (v > 0) {
                visualsElement.classList.add("align-right");
              }
              /** @type {number} */
              var t = parseInt(this.getAttribute("highlight-guess"), 10);
              if (t && i === t) {
                visualsElement.classList.add("highlight");
              }
            }
            overlay.appendChild(fragment);
          }
        }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function(x) {
          var dragitemhome = dragitemhomes[x];
          var subwiki = self.stats[x];
          var span = tpl.content.cloneNode(true);
          span.querySelector(".label").textContent = dragitemhome;
          span.querySelector(".statistic").textContent = subwiki;
          years.appendChild(span);
        }), this.gameApp.gameStatus !== exitCode) {
          var tableRowElementOne = this.shadowRoot.querySelector(".footer");
          var tableDataCellElementOne = cached.content.cloneNode(true);
          tableRowElementOne.appendChild(tableDataCellElementOne);
          this.shadowRoot.querySelector("button#share-button").addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            render(function(data) {
              var a = data.evaluations;
              var datas = data.dayOffset;
              var val = data.rowIndex;
              var currentAnime = data.isHardMode;
              /** @type {boolean} */
              var active = data.isWin;
              /** @type {*} */
              var element = JSON.parse(window.localStorage.getItem(shop_id));
              /** @type {*} */
              var i = JSON.parse(window.localStorage.getItem(STORE_ID));
              /** @type {string} */
              var level = "Беларускі ЎОРДЛІ ".concat(datas);
              /** @type {string} */
              level = level + " ".concat(active ? val : "X", "/").concat(6);
              if (currentAnime) {
                /** @type {string} */
                level = level + "*";
              }
              /** @type {string} */
              var url = "";
              return a.forEach(function(wrappersTemplates) {
                if (wrappersTemplates) {
                  wrappersTemplates.forEach(function(type) {
                    if (type) {
                      /** @type {string} */
                      var p = "";
                      switch(type) {
                        case o:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E7") : String.fromCodePoint("0x1F7E9");
                          }(i);
                          break;
                        case c:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E6") : String.fromCodePoint("0x1F7E8");
                          }(i);
                          break;
                        case bytes:
                          p = function(suppressDisabledCheck) {
                            return suppressDisabledCheck ? String.fromCodePoint("0x2B1C") : String.fromCodePoint("0x2B1C");
                          }(element);
                      }
                      url = url + p;
                    }
                  });
                  url = url + "\n";
                }
              }), {
                text : "".concat(level, "\n\n").concat(url.trimEnd()).concat("\n").concat("https://ololophilolo.github.io/wordle-by/")
              };
            }({
              evaluations : self.gameApp.evaluations,
              dayOffset : self.gameApp.dayOffset,
              rowIndex : self.gameApp.rowIndex,
              isHardMode : self.gameApp.hardMode,
              isWin : self.gameApp.gameStatus === CONNECTING
            }), function() {
              self.gameApp.addToast("Вынік скапіраваны!", 2E3, true);
            }, function() {
              self.gameApp.addToast("Не атрымалася падзяліцца вынікам", 2E3, true);
            });
          });
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-stats", XProgressbarElement);
  /** @type {!Element} */
  var result = document.createElement("template");
  /** @type {string} */
  result.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var XBabel = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var checkbox = this;
        this.shadowRoot.appendChild(result.content.cloneNode(true));
        this.shadowRoot.querySelector(".container").addEventListener("click", function(event) {
          event.stopPropagation();
          if (checkbox.hasAttribute("checked")) {
            checkbox.removeAttribute("checked");
          } else {
            checkbox.setAttribute("checked", "");
          }
          checkbox.dispatchEvent(new CustomEvent("game-switch-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : checkbox.getAttribute("name"),
              checked : checkbox.hasAttribute("checked"),
              disabled : checkbox.hasAttribute("disabled")
            }
          }));
        });
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["checked"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-switch", XBabel);
  /** @type {!Element} */
  var element = document.createElement("template");
  /** @type {string} */
  element.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Адгадайце <strong>ЎОРДЛІ</strong> за 6 спробаў.</p>\n      <p>Кожная спроба павінна змяшчаць існуючае слова з пяці літар. <strong>Дж</strong> і <strong>дз</strong> лічацца за дзьве літары, апостраф — за адну. Націсніце кнопку enter каб пацвердзіць спробу.</p>\n <p>Загадана можа быць любая часціна мовы, але ў пачатковай форме, як у слоўніку: напрыклад, назоўны склон ці інфінітыў.</p>\n     <p>Пасля кожнай здагадкі колер плітцы зменіцца, каб паказаць, наколькі ваша здагадка была блізкай да слова.</p>\n      <div class="examples">\n        <p><strong>Прыклады</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="ч" evaluation="correct" reveal></game-tile>\n            <game-tile letter="а"></game-tile>\n            <game-tile letter="б"></game-tile>\n            <game-tile letter="о"></game-tile>\n            <game-tile letter="р"></game-tile>\n          </div>\n          <p>Літара <strong>Ч</strong> ёсць у слове і знаходзіцца на правільным месцы.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="к"></game-tile>\n            <game-tile letter="а" evaluation="present" reveal></game-tile>\n            <game-tile letter="в"></game-tile>\n            <game-tile letter="у"></game-tile>\n            <game-tile letter="н"></game-tile>\n          </div>\n          <p>Літара <strong>О</strong> ёсць у слове, але знаходзіцца на іншым месцы.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="л"></game-tile>\n            <game-tile letter="ю"></game-tile>\n            <game-tile letter="б"></game-tile>\n            <game-tile letter="о"></game-tile>\n            <game-tile letter="ў"  evaluation="absent" reveal></game-tile>\n          </div>\n          <p>Літары <strong>Ў</strong> зусім няма ў слове.</p>\n        </div>\n      </div>\n      <p><strong>Новае ЎОРДЛІ з’яўляецца кожны дзень!</strong></p>\n    </div>\n  </section>\n';
  var XDrawerElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(element.content.cloneNode(true));
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-help", XDrawerElement);
  /** @type {!Element} */
  var template = document.createElement("template");
  /** @type {string} */
  template.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var XCheckboxElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("game-icon").addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".overlay").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".overlay").classList.remove("closing");
            Array.from(menu.childNodes).forEach(function(a) {
              menu.removeChild(a);
            });
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-page", XCheckboxElement);
  /** @type {!Element} */
  var templateElement = document.createElement("template");
  /** @type {string} */
  templateElement.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var opts = {
    help : "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings : "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace : "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share : "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics : "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  };
  var XThrobberElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
        var index = this.getAttribute("icon");
        this.shadowRoot.querySelector("path").setAttribute("d", opts[index]);
        if ("backspace" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)");
        }
        if ("share" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-icon", XThrobberElement);
  /** @type {!Element} */
  var s = document.createElement("template");
  /** @type {string} */
  s.innerHTML = '\n  <div id="timer"></div>\n';
  /** @type {number} */
  var msDay = 6E4;
  /** @type {number} */
  var msMonth = 36E5;
  var XIconElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      log(this, update);
      callback(set(self = config.call(this)), "targetEpochMS", void 0);
      callback(set(self), "intervalId", void 0);
      callback(set(self), "$timer", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      var restart = new Date;
      return restart.setDate(restart.getDate() + 1), restart.setHours(0, 0, 0, 0), self.targetEpochMS = restart.getTime(), self;
    }
    on(update, e);
    var config = makeRequest(update);
    return trigger(update, [{
      key : "padDigit",
      value : function(funcToEval) {
        return funcToEval.toString().padStart(2, "0");
      }
    }, {
      key : "updateTimer",
      value : function() {
        var funcCode;
        /** @type {number} */
        var lastKeyWidth = (new Date).getTime();
        /** @type {number} */
        var ms = Math.floor(this.targetEpochMS - lastKeyWidth);
        if (ms <= 0) {
          /** @type {string} */
          funcCode = "00:00:00";
        } else {
          /** @type {number} */
          var activeTicketIds = Math.floor(ms % 864E5 / msMonth);
          /** @type {number} */
          var objectsExpand = Math.floor(ms % msMonth / msDay);
          /** @type {number} */
          var subVariant = Math.floor(ms % msDay / 1E3);
          /** @type {string} */
          funcCode = "".concat(this.padDigit(activeTicketIds), ":").concat(this.padDigit(objectsExpand), ":").concat(this.padDigit(subVariant));
        }
        /** @type {string} */
        this.$timer.textContent = funcCode;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(s.content.cloneNode(true));
        this.$timer = this.shadowRoot.querySelector("#timer");
        /** @type {number} */
        this.intervalId = setInterval(function() {
          self.updateTimer();
        }, 200);
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
        clearInterval(this.intervalId);
      }
    }]), update;
  }(register(HTMLElement));
  return customElements.define("countdown-timer", XIconElement), exports.CountdownTimer = XIconElement, exports.GameApp = DialogElement, exports.GameHelp = XDrawerElement, exports.GameIcon = XThrobberElement, exports.GameKeyboard = XDefined, exports.GameModal = XBabel2, exports.GamePage = XCheckboxElement, exports.GameRow = cls, exports.GameSettings = XelDemoElement, exports.GameStats = XProgressbarElement, exports.GameSwitch = XBabel, exports.GameThemeManager = SorTable, exports.GameTile = Class, 
  exports.GameToast = ActionSheetButtonElement, Object.defineProperty(exports, "__esModule", {
    value : true
  }), exports;
}({});
