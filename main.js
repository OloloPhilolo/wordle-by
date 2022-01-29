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
    switch(number) {
      case 1:
        return "Першая";
      case 2:
        return "Другая";
      case 3:
        return "Трэцяя";
      case 4:
        return "Чацвёртая";
	  case 5:
        return "Пятая";
    }
	return number + "-я";
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
    return i = j * 26641 % options.length, options[i];
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
  nodes.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Складаны варыянт</div>\n          <div class="description">Кожная падказка павінна быць выкарыстана ў наступных спробах.</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Цёмная тэма</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Кантрасныя колеры</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Водгук</div>\n        </div>\n        <div class="control">\n          <a href="https://vk.com/ololo_philolo"  target="blank" title="vk: ololo_philolo">VK</a>\n          |\n          <a href="https://t.me/ololo_philolo_bot" target="blank" title="tg: @ololo_philolo_bot">Telegram</a>\n        </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <p>Аўтар арыгінальнай гульні: Джош Уордл. Згуляць на ангельскай мове можна <a href = "https://www.powerlanguage.co.uk/wordle/">па спасылцы</a>.<br>Перакладзена на беларускую мову з дапамогай слоўнікаў з <a href="http://www.slounik.org/">Энцыкляпедыі электроннай</a> і <a href="http://www.knihi.com/">Беларускай палічкі</a>.</p>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="puzzle-number"></div>\n </div>\n  </div>\n';
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
  var options = [
"абвеў",
"сетка",
"табун",
"пляга",
"опцыя",
"біном",
"пенал",
"сухар",
"слайд",
"ідэал",
"уздых",
"адлёт",
"рэзон",
"зачос",
"крыло",
"кірпа",
"поезд",
"хапун",
"вадыр",
"гонка",
"крэда",
"мудры",
"цынік",
"жрыца",
"далей",
"модны",
"узбоч",
"бойка",
"весні",
"сурок",
"бляск",
"воспа",
"змова",
"зжаць",
"мелкі",
"цэдра",
"груша",
"ігрэк",
"пыска",
"думка",
"кулеш",
"бірка",
"ягель",
"вобла",
"губан",
"выраз",
"дэнім",
"закід",
"рэшта",
"абсяг",
"цурка",
"зявок",
"позех",
"вушка",
"пазур",
"полюс",
"асявы",
"уежна",
"зусім",
"сочны",
"хмель",
"страз",
"задні",
"сумны",
"вілка",
"эгіда",
"уначы",
"лічба",
"аджын",
"ручай",
"чэпік",
"повар",
"слабы",
"арэлі",
"зіпун",
"аблоў",
"цыбур",
"сляпы",
"дзяжа",
"яміна",
"шытво",
"еўнух",
"мерны",
"добра",
"валок",
"брыль",
"опера",
"барыш",
"піўны",
"метро",
"буякі",
"сарыч",
"бісер",
"уюрок",
"горкі",
"цуглі",
"посуд",
"шланг",
"падол",
"рыхла",
"жытні",
"усмак",
"жоўць",
"набег",
"барон",
"подых",
"рубін",
"знаць",
"выбар",
"талія",
"гвалт",
"багер",
"нырок",
"гарэм",
"труба",
"нырка",
"трохі",
"равок",
"ледзь",
"сенат",
"горан",
"змога",
"вясна",
"стэйк",
"штрых",
"абдым",
"золка",
"пушча",
"рулет",
"вынік",
"цеста",
"уночы",
"шэраг",
"страх",
"дэфіс",
"верны",
"выгіб",
"драць",
"эскіз",
"шрыфт",
"глеба",
"позва",
"лямпа",
"проса",
"вудар",
"брусы",
"чэрап",
"пузан",
"бялей",
"сапёр",
"разок",
"малец",
"сукно",
"бутон",
"нарды",
"невад",
"строй",
"хатні",
"згары",
"намол",
"чутны",
"сшыць",
"вечка",
"бераг",
"святы",
"пляск",
"вышка",
"булка",
"рэйка",
"бусел",
"адрыў",
"рысак",
"ліяна",
"жухлы",
"ватны",
"повад",
"хлюст",
"топкі",
"козыр",
"зеніт",
"мазут",
"пухір",
"услых",
"злюка",
"выкід",
"затон",
"ярлык",
"сцэна",
"манеж",
"люцік",
"жывот",
"акцыя",
"уплыў",
"годзе",
"відны",
"барэц",
"земны",
"вейкі",
"чадны",
"брыда",
"поруч",
"дартс",
"бровы",
"альбо",
"горка",
"слова",
"пячны",
"ампір",
"мякіш",
"ліцэй",
"акіян",
"паіць",
"цяжкі",
"віхар",
"ладкі",
"дзеяч",
"яліна",
"мялка",
"мірны",
"сюжэт",
"лоўчы",
"сплін",
"багун",
"дзінь",
"мапед",
"баяць",
"скіба",
"зорка",
"покат",
"інгуш",
"абкос",
"букля",
"молат",
"солкі",
"парус",
"вопіс",
"выкас",
"пеўчы",
"цёска",
"лазня",
"курэц",
"ерась",
"утыль",
"набор",
"цытра",
"любоў",
"зорны",
"дымна",
"судны",
"стары",
"веяны",
"прэль",
"ганец",
"налік",
"кажух",
"густы",
"вотум",
"вазок",
"дазор",
"пірат",
"кобра",
"філон",
"форма",
"пойма",
"устой",
"зебра",
"купаж",
"вечны",
"вырак",
"гулкі",
"створ",
"хруст",
"замер",
"локан",
"нізка",
"порка",
"серыя",
"глыба",
"лежня",
"хуткі",
"курны",
"сачок",
"шпуля",
"вушкі",
"стаць",
"сенцы",
"фальш",
"зарок",
"паяць",
"вянец",
"уцеха",
"лёска",
"крыга",
"блюда",
"кап'ё",
"басяк",
"здоба",
"апеты",
"гумно",
"трупа",
"упіць",
"сядок",
"аерны",
"згуба",
"строі",
"рабін",
"валкі",
"зачэп",
"аргон",
"сябра",
"вальс",
"борны",
"гучна",
"засек",
"хобат",
"вуаль",
"плыць",
"санкі",
"скупы",
"немач",
"культ",
"кожны",
"нагул",
"бучны",
"аўдыт",
"лысун",
"вожык",
"рудны",
"воўна",
"лакей",
"кодла",
"вешчы",
"ртуць",
"трэск",
"парок",
"чахол",
"плоць",
"купля",
"кпіць",
"лепшы",
"увесь",
"сеяць",
"услед",
"клоўн",
"жывец",
"ляжка",
"адцёк",
"пужка",
"умець",
"медыя",
"дзюна",
"штыль",
"перці",
"амеці",
"домік",
"нахіл",
"глясэ",
"асець",
"наезд",
"магчы",
"сэтар",
"пошук",
"касір",
"слуга",
"вітка",
"асячы",
"трэль",
"кіслы",
"раяль",
"мерці",
"шабля",
"пляма",
"дуэль",
"шація",
"усход",
"устаў",
"смоль",
"хакей",
"подлы",
"гетры",
"пятка",
"савет",
"дасол",
"хеўра",
"музей",
"уціск",
"бурны",
"рукаў",
"возка",
"рваць",
"эхаць",
"накід",
"бягом",
"мылкі",
"калым",
"сіпка",
"набок",
"антык",
"намер",
"усцяж",
"пудла",
"затор",
"самец",
"жніва",
"дачны",
"жазло",
"нябыт",
"долар",
"лёкай",
"туман",
"кляча",
"невук",
"комін",
"гумка",
"спрут",
"надум",
"мінёр",
"сляза",
"звяно",
"кадэт",
"брыдж",
"пышна",
"благі",
"намул",
"жакет",
"хмуры",
"сквер",
"ручка",
"дзіра",
"парэй",
"голад",
"ломка",
"паток",
"вольт",
"напор",
"збіць",
"прэса",
"акуць",
"спіца",
"кучны",
"трумо",
"боршч",
"форум",
"вугал",
"зябкі",
"венгр",
"выдма",
"дасеў",
"глузд",
"морфа",
"грыль",
"чайны",
"адсек",
"пітны",
"салют",
"плець",
"штора",
"факір",
"езуіт",
"парог",
"кучма",
"узлёт",
"ходкі",
"бегла",
"патлы",
"рубка",
"адгон",
"цяжар",
"побач",
"з'ява",
"аплік",
"ветка",
"пурга",
"грошы",
"звіты",
"позні",
"млявы",
"вяхір",
"твань",
"апроч",
"сотка",
"пхаць",
"гліна",
"жоўты",
"хлыст",
"замок",
"перад",
"чырва",
"кашнэ",
"граць",
"конюх",
"сітны",
"меткі",
"румза",
"флірт",
"макет",
"бойня",
"манія",
"гарод",
"аселы",
"аніяк",
"змора",
"кудлы",
"вязкі",
"цесны",
"хцівы",
"цемра",
"ляпны",
"зыбкі",
"бівак",
"горад",
"касец",
"казёл",
"бедны",
"счуць",
"чэзлы",
"ігрок",
"буяны",
"тонік",
"юрскі",
"уклад",
"чэсць",
"гіблы",
"лямка",
"калье",
"цымус",
"кацёл",
"чхаць",
"спрат",
"данос",
"цясак",
"эпоха",
"астой",
"шэсце",
"юначы",
"тальк",
"выпат",
"горшы",
"якраз",
"тэзіс",
"тапор",
"лам'ё",
"бінга",
"сплаў",
"віраж",
"кухан",
"акцін",
"даіць",
"ілгун",
"кадзь",
"дзеля",
"нарэз",
"адкол",
"скотч",
"манер",
"посны",
"веяць",
"разня",
"засеў",
"слота",
"дзець",
"арышт",
"грант",
"масон",
"бегма",
"вызаў",
"чэмер",
"мажны",
"індус",
"задор",
"водны",
"бізон",
"іслам",
"лодка",
"зомбі",
"усяго",
"дошка",
"адбой",
"абрус",
"чарот",
"зыркі",
"часты",
"покер",
"ржаць",
"нерпа",
"стома",
"манто",
"шафер",
"ізгой",
"гіена",
"шынка",
"углыб",
"доўга",
"збіты",
"ікона",
"індык",
"вясло",
"буран",
"базіс",
"геном",
"доўгі",
"загон",
"волас",
"ярыца",
"сходы",
"чэрві",
"палон",
"яечны",
"аксід",
"галыш",
"плэер",
"хакер",
"узмах",
"замес",
"глуха",
"сінод",
"парык",
"акцёр",
"зёлкі",
"цётка",
"вохра",
"мысль",
"гарох",
"сумка",
"чуйны",
"апорт",
"яравы",
"анкер",
"пясец",
"квант",
"бювет",
"узвод",
"геній",
"пекла",
"піяла",
"пачын",
"крыць",
"проба",
"мяцеж",
"ужаць",
"ствол",
"лытка",
"горна",
"свіны",
"бітон",
"арэол",
"каліф",
"вопыт",
"галун",
"ядваб",
"тлець",
"гузка",
"экран",
"шторм",
"білет",
"губны",
"слаць",
"бядак",
"дзіка",
"лузан",
"адзол",
"асіны",
"дэкан",
"заход",
"лямец",
"мясны",
"судна",
"цягач",
"троль",
"бронь",
"склеп",
"семкі",
"сырок",
"ладны",
"марля",
"смуга",
"будан",
"світа",
"допыт",
"сверб",
"помач",
"унаём",
"бутыл",
"мэрыя",
"сафіт",
"пушка",
"вутка",
"лінза",
"фронт",
"вышук",
"бахур",
"гейша",
"канец",
"абуты",
"мазня",
"сошка",
"шатэн",
"біруч",
"церам",
"масіў",
"чапля",
"бурка",
"прэлы",
"накол",
"уверх",
"аплыў",
"тэмбр",
"выток",
"грузд",
"кузаў",
"мазок",
"вулей",
"дынга",
"налёт",
"тканы",
"сокат",
"турма",
"весць",
"трыко",
"зеўра",
"мідыя",
"абгон",
"ярына",
"брэйк",
"гусак",
"адвес",
"навек",
"шпень",
"забег",
"кефір",
"дымка",
"бялок",
"баявы",
"рыфма",
"пазёр",
"янтар",
"удалы",
"цяпер",
"вірус",
"пузач",
"болей",
"цёрка",
"морак",
"запыт",
"талон",
"лазер",
"кісць",
"склон",
"воцат",
"цэбар",
"зырка",
"адхон",
"група",
"лятун",
"авеню",
"фільм",
"яздок",
"адлоў",
"спіна",
"смелы",
"збруя",
"блыха",
"медзь",
"лавец",
"горды",
"абуць",
"пошта",
"кілер",
"буцік",
"лодар",
"лікёр",
"пілот",
"пірог",
"мочка",
"выхад",
"пісар",
"адток",
"арлец",
"абмін",
"павук",
"дынар",
"камея",
"таіць",
"нітка",
"бліск",
"выпар",
"бурат",
"бучна",
"напой",
"сыпкі",
"горда",
"бычок",
"амлет",
"круіз",
"маркі",
"сушня",
"урода",
"навес",
"зубны",
"жонка",
"збоку",
"аскет",
"адкос",
"пласт",
"жыхар",
"столь",
"дубка",
"дзель",
"козлы",
"лыжка",
"захоп",
"матня",
"секта",
"грэць",
"аспід",
"купал",
"гібон",
"ёршык",
"цыбук",
"сілок",
"выгар",
"аб'ём",
"гулец",
"венік",
"ручны",
"зброя",
"лішне",
"кесар",
"пышка",
"пульс",
"почка",
"пліта",
"бруха",
"солка",
"кагор",
"гусар",
"хтось",
"лішай",
"норма",
"штаны",
"закут",
"вузка",
"акцыз",
"меншы",
"горны",
"дзяга",
"слыць",
"лёгкі",
"уючны",
"масць",
"палец",
"муляр",
"вафля",
"можна",
"выдра",
"годна",
"умова",
"фужэр",
"мліва",
"пульт",
"свята",
"добры",
"сорак",
"арыец",
"бойкі",
"парны",
"лаяць",
"людны",
"буйны",
"аборт",
"мошка",
"рэліз",
"запеў",
"адсеў",
"маток",
"полаг",
"чапец",
"пугач",
"спірт",
"лекар",
"іжыца",
"нацыя",
"кумір",
"абрыс",
"юрыст",
"панты",
"сваяк",
"полба",
"зенкі",
"пінта",
"пожня",
"балея",
"рэпны",
"жарон",
"кроль",
"сцень",
"халоп",
"мучны",
"понаж",
"сумёт",
"выраб",
"пярун",
"сталь",
"шквал",
"нейкі",
"сявец",
"нырэц",
"змест",
"хадун",
"імпэт",
"капыт",
"плячо",
"затое",
"мыйка",
"ямскі",
"учора",
"метыс",
"труна",
"туфлі",
"зямны",
"жытло",
"здаць",
"горла",
"бекон",
"шпіён",
"злоты",
"абрэк",
"вынас",
"гумар",
"балід",
"выпад",
"трэба",
"веліч",
"спаць",
"паніч",
"нідзе",
"хамяк",
"унізе",
"спрэй",
"рвань",
"звеку",
"бажок",
"гольф",
"метан",
"гуслі",
"ацячы",
"хрушч",
"архіў",
"пухкі",
"вечар",
"лопат",
"скарб",
"бювар",
"гнілы",
"домна",
"цалік",
"відно",
"тэнар",
"муляж",
"памер",
"памор",
"вышаг",
"прынц",
"сопка",
"дакор",
"драбы",
"волак",
"сеяны",
"вечна",
"вымах",
"потны",
"хадня",
"скуць",
"лядны",
"куп'ё",
"больш",
"тупік",
"адбор",
"рупны",
"тэніс",
"нішто",
"лазун",
"пахкі",
"крона",
"плашч",
"буйна",
"боўць",
"шорах",
"ныцік",
"пасол",
"муфта",
"голуб",
"аброк",
"дбаць",
"звяць",
"грыва",
"утрох",
"засор",
"удаць",
"вёска",
"шолах",
"ампер",
"волкі",
"перон",
"буяць",
"вусна",
"ліхач",
"браня",
"галяк",
"аршын",
"пісец",
"намёк",
"раўня",
"сядло",
"угары",
"інакш",
"калій",
"рэчка",
"скоры",
"губач",
"косць",
"маляр",
"акунь",
"цёрты",
"шыфер",
"розны",
"шалік",
"бурда",
"шпрыц",
"пятак",
"дэбют",
"запой",
"галій",
"кольт",
"вішня",
"тонкі",
"лейка",
"мятны",
"дрэйф",
"адрэз",
"лаўры",
"метад",
"усюды",
"жучок",
"сякач",
"міска",
"ікаць",
"шумны",
"сахор",
"цёмны",
"вешка",
"уцёкі",
"стоўб",
"узвал",
"латны",
"ягуар",
"вабны",
"бялёк",
"допіс",
"горац",
"юдоль",
"выпіс",
"клінч",
"напеў",
"кулон",
"жакей",
"заліў",
"трэць",
"кірза",
"шруба",
"зверх",
"армяк",
"занос",
"дэман",
"фугас",
"факел",
"смаль",
"абрыў",
"эфект",
"услон",
"нутро",
"салон",
"дровы",
"дохлы",
"дэвіз",
"ганок",
"хітры",
"дамен",
"рынка",
"лясны",
"падкі",
"хапок",
"мароз",
"бардо",
"брыць",
"няўжо",
"верад",
"выезд",
"назло",
"смерч",
"мэбля",
"зысці",
"цюбік",
"копія",
"дабро",
"уцяты",
"мутны",
"гранд",
"бацян",
"павой",
"насок",
"тыпаж",
"фікус",
"буфер",
"зыход",
"звіць",
"печка",
"стоўп",
"піхта",
"чэсны",
"абмол",
"бекас",
"медны",
"мінор",
"восып",
"браць",
"гаіць",
"валун",
"цюфяк",
"дукат",
"лётны",
"журба",
"адвоз",
"цурок",
"вылет",
"роўня",
"соўка",
"рэзкі",
"уцячы",
"кісет",
"месны",
"спёка",
"плечы",
"гоман",
"цешча",
"атэль",
"сіроп",
"козыт",
"запіс",
"аргус",
"пасіў",
"акорд",
"пікта",
"пясць",
"батон",
"мусон",
"шамкі",
"нічый",
"фланг",
"шуляк",
"пявун",
"галоп",
"потым",
"унцыя",
"гучны",
"раўці",
"адпор",
"путны",
"секчы",
"метал",
"вулка",
"бонус",
"слоік",
"верна",
"эмаль",
"полаз",
"голас",
"змяць",
"лідар",
"мошчы",
"летні",
"лопух",
"узлом",
"пісчы",
"ялавы",
"завея",
"радок",
"схема",
"павет",
"юнкер",
"азімы",
"тэпці",
"шулер",
"пікет",
"доказ",
"цішэй",
"пітон",
"цвілы",
"выбух",
"сечка",
"буяна",
"хадок",
"прэць",
"пакля",
"мулат",
"чабор",
"капот",
"вушак",
"ясень",
"абмер",
"судак",
"княжы",
"рубец",
"рамны",
"дыета",
"вадкі",
"цёзка",
"аблет",
"стогн",
"полка",
"стрыж",
"нарыс",
"асвер",
"рваны",
"лепта",
"закуп",
"валет",
"штамп",
"сцяты",
"гнуты",
"тумба",
"гразь",
"жабры",
"несці",
"рудня",
"цяжба",
"пуфік",
"лухта",
"гнеды",
"каноэ",
"рачны",
"смоўж",
"ужыць",
"вылаз",
"торны",
"зліты",
"згода",
"сабор",
"рослы",
"цукар",
"міраж",
"асцюк",
"адгін",
"верас",
"сліна",
"кнехт",
"абсеў",
"сапло",
"носкі",
"вожаг",
"спець",
"краля",
"вусце",
"пудра",
"сушка",
"апячы",
"рыска",
"бугай",
"аплот",
"іскра",
"эклер",
"чэрнь",
"спіць",
"вочка",
"разны",
"футра",
"фінка",
"узрыў",
"ранец",
"букет",
"рацін",
"груба",
"матор",
"сокал",
"лісце",
"дэрбі",
"сліва",
"біржа",
"німфа",
"вылам",
"клець",
"стэла",
"матуз",
"паявы",
"сярод",
"дойка",
"луста",
"суткі",
"агрэх",
"ардэн",
"рубеж",
"гуска",
"круча",
"габой",
"удзел",
"дыван",
"авіць",
"жолуд",
"хітон",
"аблік",
"кухня",
"талер",
"мушка",
"бэйдж",
"фагот",
"груда",
"чахлы",
"раней",
"сітро",
"шпіль",
"пакос",
"біцюг",
"тыран",
"лыжня",
"кумыс",
"сойка",
"ляжак",
"бурак",
"загін",
"сувей",
"дзела",
"адзёр",
"сёмга",
"танец",
"вонкі",
"мокры",
"нетры",
"робат",
"рэгбі",
"кораб",
"адэпт",
"песня",
"айчым",
"дэкор",
"пушны",
"аковы",
"марны",
"вядро",
"месца",
"глухі",
"будзе",
"забор",
"бравы",
"бітка",
"радня",
"этнас",
"апець",
"мыйня",
"таргі",
"штука",
"філей",
"калун",
"дасье",
"млець",
"розга",
"пазлы",
"лотас",
"зуб'е",
"п'еса",
"абрэз",
"шыпун",
"тузін",
"норка",
"назоў",
"холад",
"яблык",
"здань",
"мутон",
"дылер",
"бочка",
"табло",
"даўні",
"пусты",
"круты",
"сталы",
"залік",
"посах",
"зычна",
"высеў",
"жураў",
"бізун",
"вузкі",
"абмен",
"чужое",
"шкляр",
"стрым",
"семіт",
"шатун",
"вусач",
"махры",
"госць",
"буфет",
"бугор",
"заміж",
"вакол",
"вылаў",
"цяглі",
"прамы",
"магія",
"велюр",
"сапці",
"блуза",
"залом",
"зграя",
"цэшка",
"закон",
"ніжэй",
"пасія",
"аблом",
"чытка",
"ніклы",
"расол",
"фокус",
"лубін",
"кафля",
"мышка",
"гнаць",
"пекар",
"праём",
"рокат",
"палёт",
"рэжым",
"булат",
"мулкі",
"торба",
"роіла",
"кювет",
"лішка",
"рэдкі",
"зацёк",
"пасля",
"агляд",
"вылік",
"афект",
"ніхто",
"таней",
"парэз",
"лузга",
"ажыць",
"дзіця",
"матыў",
"фіёрд",
"горыч",
"тапір",
"крыва",
"ляўша",
"бляха",
"мужык",
"луска",
"лірык",
"восць",
"лапік",
"лясун",
"адгул",
"орган",
"лепка",
"шчэпа",
"штраф",
"бодня",
"аркуш",
"дотык",
"дужка",
"пенка",
"хуста",
"змыць",
"мышца",
"маёвы",
"жораў",
"правы",
"вораг",
"домра",
"сонца",
"зжаты",
"гнуць",
"раўнд",
"рывок",
"венца",
"эліта",
"забой",
"пухлы",
"племя",
"надой",
"корба",
"паліў",
"тарыф",
"бланк",
"харчо",
"шпора",
"поўха",
"выспа",
"проза",
"важны",
"сцяна",
"гурба",
"сніць",
"паяны",
"авечы",
"тапёр",
"злева",
"кеш'ю",
"санет",
"гусці",
"мурза",
"жылец",
"кварц",
"грань",
"браны",
"трэці",
"былое",
"свішч",
"сохлы",
"порах",
"падзь",
"алімп",
"дэрма",
"конус",
"вабік",
"умелы",
"гідра",
"бачны",
"брыца",
"краты",
"язмін",
"мафія",
"келіх",
"колас",
"малыш",
"дзень",
"скейт",
"палын",
"тумак",
"калос",
"лагер",
"кволы",
"дуб'ё",
"труха",
"нацёк",
"горст",
"агент",
"лоўкі",
"плюшч",
"спорт",
"скрып",
"вырай",
"шырма",
"вочны",
"народ",
"нораў",
"газон",
"трусы",
"чушка",
"адзін",
"зубец",
"вузел",
"кашпо",
"кавун",
"памол",
"дэбош",
"ферзь",
"ніўка",
"выкус",
"пэўны",
"буялы",
"крысо",
"бохан",
"фасон",
"зачын",
"рупія",
"цягло",
"ломік",
"імгла",
"разец",
"душны",
"рухач",
"жадны",
"выкуп",
"серны",
"вокал",
"расці",
"астоя",
"рэшка",
"мажор",
"раіць",
"сілач",
"цупкі",
"пакет",
"задок",
"скура",
"ткаць",
"паром",
"многа",
"суфле",
"кухар",
"зефір",
"паміж",
"таўчы",
"гуляш",
"цяглы",
"тычка",
"цэпкі",
"мытня",
"метка",
"тукан",
"загіб",
"човен",
"фурыя",
"цугам",
"дымок",
"моцны",
"роўны",
"лішак",
"розум",
"малёк",
"медык",
"пясок",
"вярхі",
"варты",
"начос",
"пнуць",
"бутля",
"агонь",
"тнуць",
"клуня",
"рыбак",
"вушны",
"далеч",
"ступа",
"бурна",
"праць",
"перац",
"токар",
"узвар",
"альяс",
"дупло",
"манул",
"грубы",
"донца",
"страж",
"змена",
"усякі",
"сюіта",
"нумар",
"жатны",
"абвод",
"уздым",
"хваля",
"ашыек",
"налом",
"завуч",
"цотны",
"парыў",
"ролік",
"пасці",
"хвошч",
"ларок",
"дурны",
"важкі",
"кірха",
"плато",
"зліць",
"пагон",
"нізам",
"сацін",
"равун",
"кутні",
"адчэп",
"скула",
"кучна",
"кузня",
"рынак",
"паляк",
"рогат",
"паход",
"сябар",
"помеж",
"бухта",
"балет",
"шацёр",
"азіят",
"стэнд",
"пемза",
"заечы",
"куфар",
"цёплы",
"цэнтр",
"галец",
"відэа",
"чысло",
"мінус",
"кумач",
"сытна",
"фанты",
"вузей",
"клішэ",
"гушча",
"абход",
"галон",
"чорна",
"дрэва",
"абруч",
"лімон",
"зрост",
"актыў",
"калеж",
"крыху",
"асобы",
"поўны",
"хворы",
"пылок",
"павеў",
"цераз",
"цокат",
"косны",
"мерка",
"утома",
"адліў",
"лента",
"лютня",
"губка",
"мужны",
"цукат",
"ферма",
"будка",
"тунец",
"спора",
"догма",
"чорны",
"сіняк",
"колер",
"клешч",
"камін",
"багет",
"лірны",
"ушыць",
"беглы",
"балон",
"брэнд",
"латыш",
"файны",
"ордэн",
"жолаб",
"купец",
"гібка",
"закіс",
"ражон",
"радыё",
"другі",
"колба",
"склад",
"зброд",
"донар",
"чуткі",
"сэрца",
"фішка",
"стрэл",
"поўня",
"рулон",
"іерэй",
"п'еза",
"легчы",
"буліт",
"восем",
"солад",
"лівер",
"павек",
"алтын",
"сіплы",
"хамут",
"тапкі",
"опіум",
"выруб",
"хутар",
"логік",
"зваць",
"фірма",
"узнос",
"вазон",
"званы",
"накос",
"пузыр",
"космы",
"стыль",
"гвозд",
"дэбет",
"улева",
"дзіва",
"вагон",
"вымер",
"месяц",
"бягун",
"посул",
"зняць",
"выган",
"шэрыф",
"хібны",
"соевы",
"памін",
"вугор",
"пацук",
"плынь",
"бярно",
"штурм",
"залог",
"побыт",
"удвая",
"пасыл",
"жменя",
"алень",
"прыём",
"руіна",
"юніёр",
"армія",
"цвіль",
"смута",
"сцюжа",
"рычаг",
"воўчы",
"бомка",
"балык",
"сезон",
"герой",
"хорам",
"бегчы",
"цэгла",
"князь",
"дрыль",
"збыць",
"бетон",
"удоўж",
"аблёт",
"тайны",
"гелій",
"сочка",
"увысь",
"малое",
"шорты",
"змрок",
"годны",
"рацыя",
"куліч",
"ідыёт",
"пашыў",
"грунт",
"валуй",
"волат",
"букта",
"шафёр",
"банер",
"выпас",
"мятла",
"бітва",
"зыбун",
"лезці",
"прыма",
"набой",
"гончы",
"зжыць",
"уліць",
"школа",
"даўно",
"бачок",
"вусны",
"ложак",
"сотня",
"зімны",
"накіп",
"жаніх",
"кофта",
"бодзі",
"пакой",
"інжыр",
"вобад",
"таксі",
"гумор",
"цэзар",
"шавец",
"спелы",
"насып",
"оптык",
"здуць",
"фінал",
"росны",
"родны",
"чужак",
"нешта",
"тлушч",
"золак",
"дыбкі",
"курыя",
"адлік",
"сорам",
"бядро",
"затым",
"пілка",
"шчаня",
"гудок",
"ражок",
"тыраж",
"часць",
"пучок",
"сырэц",
"неруш",
"уесці",
"хурма",
"чмель",
"выгул",
"стынь",
"наліў",
"кельт",
"квота",
"фрукт",
"пахіл",
"вянок",
"пешка",
"цёрла",
"абвоз",
"рэбус",
"гузік",
"выгук",
"ізноў",
"увіць",
"хвост",
"густа",
"намыў",
"тарэц",
"дубец",
"струк",
"ставы",
"карэц",
"сатыр",
"ёгурт",
"гулка",
"завод",
"боскі",
"пункт",
"капры",
"франт",
"піток",
"вязка",
"гонар",
"нябож",
"віхор",
"булён",
"аміяк",
"везці",
"водар",
"капля",
"спрыт",
"дражэ",
"весці",
"віток",
"чыгун",
"ласун",
"флора",
"падуб",
"адпеў",
"узяць",
"навык",
"валік",
"стыць",
"умяць",
"вокіс",
"асетр",
"купон",
"трэфы",
"ратны",
"мураш",
"грыжа",
"сфера",
"вярба",
"цяпло",
"яловы",
"нехта",
"п'яны",
"шкода",
"пітво",
"першы",
"бедна",
"кніга",
"этыка",
"дзюба",
"свежы",
"няхай",
"нейчы"
];
  /** @type {!Array} */
  var updatedSet = ["аўгей",
"аўген",
"аўгіт",
"аўгур",
"аўдзі",
"аўдыт",
"аўдыё",
"аўлас",
"аўлос",
"аўрал",
"аўрам",
"аўран",
"аўрат",
"аўсей",
"аўсец",
"аўскі",
"аўсцы",
"аўсюг",
"аўсюк",
"аўтар",
"аўтол",
"аўтух",
"аўхім",
"аўчар",
"аазіс",
"ааліт",
"аарон",
"аахэн",
"аацыт",
"абава",
"абавы",
"абады",
"абазы",
"абака",
"абакі",
"абаты",
"абвал",
"абвеў",
"абвес",
"абвод",
"абвоз",
"абвэр",
"абгон",
"абдум",
"абдур",
"абдым",
"абегі",
"абеды",
"абжын",
"абзац",
"абзол",
"абзыў",
"абіты",
"абіць",
"абкам",
"абкат",
"абком",
"абкос",
"аблаў",
"аблам",
"аблет",
"абліз",
"аблік",
"аблоў",
"аблог",
"аблом",
"аблуд",
"аблыг",
"аблёт",
"абман",
"абмах",
"абмен",
"абмер",
"абмін",
"абмол",
"абмор",
"абмыл",
"абнім",
"абноч",
"абоды",
"абозы",
"аболы",
"абора",
"аборт",
"аборы",
"абпал",
"абрад",
"абраз",
"абрам",
"аброк",
"абруд",
"абрус",
"абруч",
"абрыў",
"абрыс",
"абрэз",
"абрэк",
"абсац",
"абсеў",
"абсяг",
"абток",
"абуза",
"абузы",
"абуты",
"абухі",
"абуць",
"абхаз",
"абход",
"абхоп",
"абцас",
"абцуг",
"абчэс",
"абшар",
"аб'ём",
"абыкі",
"абыяк",
"абэль",
"авалі",
"авалы",
"аваль",
"аванс",
"авары",
"авелі",
"авель",
"авены",
"авеню",
"аверс",
"авечы",
"авіза",
"авіты",
"авіць",
"авозы",
"авоід",
"авось",
"авыць",
"авэню",
"агава",
"агавы",
"агама",
"агамы",
"агапа",
"агары",
"агата",
"агаты",
"агачы",
"агенс",
"агент",
"агіба",
"агібы",
"агіда",
"агіды",
"агляд",
"агнат",
"агонь",
"аграф",
"агрэх",
"агуда",
"агуды",
"агулы",
"агынь",
"адамы",
"адась",
"адаты",
"адбіў",
"адбоі",
"адбой",
"адбор",
"адвал",
"адвар",
"адвес",
"адвод",
"адвоз",
"адгад",
"адгін",
"адгон",
"адгук",
"адгул",
"аддух",
"аддых",
"аджон",
"аджым",
"аджын",
"адзін",
"адзоў",
"адзол",
"адзёр",
"адказ",
"адкат",
"адкід",
"адкол",
"адкос",
"адліў",
"адлік",
"адлоў",
"адлог",
"адлом",
"адлуп",
"адлыг",
"адлёт",
"адмен",
"адмер",
"адмін",
"адмор",
"аднае",
"аднак",
"адное",
"аднос",
"адныя",
"аднэй",
"адоль",
"адоны",
"адпад",
"адпал",
"адпас",
"адпеў",
"адпіс",
"адпор",
"адрас",
"адрон",
"адрыў",
"адрыг",
"адрэз",
"адсеў",
"адсек",
"адток",
"адумы",
"адуры",
"адуся",
"адуты",
"адхіл",
"адхін",
"адход",
"адхон",
"адцін",
"адцяг",
"адцёк",
"адчай",
"адчал",
"адчэп",
"адылі",
"адыён",
"адэлі",
"адэля",
"адэнд",
"адэон",
"адэпт",
"адэса",
"адэсы",
"аевіт",
"аерны",
"ажагі",
"ажаны",
"ажуры",
"ажыка",
"ажыкі",
"ажылы",
"ажына",
"ажыны",
"ажыць",
"азард",
"азарт",
"азелы",
"азена",
"азены",
"азіды",
"азімы",
"азіны",
"азіят",
"азноб",
"азолы",
"азоны",
"азоры",
"азоты",
"азука",
"азуры",
"азуць",
"азяро",
"азяры",
"азёры",
"айвэз",
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
"акімы",
"акіра",
"акіян",
"аклад",
"аковы",
"аконы",
"акопы",
"акорд",
"акоты",
"акрай",
"акром",
"акрыл",
"акрым",
"аксід",
"аксіл",
"аксіс",
"аксон",
"аксыд",
"аксэс",
"аксён",
"актан",
"актод",
"актор",
"актыў",
"актэт",
"акула",
"акулы",
"акуні",
"акунь",
"акуты",
"акуць",
"акцін",
"акцыз",
"акцыі",
"акцыя",
"акцёр",
"акыны",
"аланы",
"алахі",
"алгол",
"алеат",
"алегі",
"алеін",
"алекс",
"алелі",
"алель",
"алена",
"алені",
"алены",
"алень",
"алесі",
"алесь",
"алеся",
"алеут",
"алеха",
"алжыр",
"аліўе",
"алібі",
"аліва",
"алівы",
"алікі",
"алімп",
"аліна",
"аліны",
"аліса",
"алісы",
"алкан",
"алкаш",
"алкен",
"алкіл",
"алкін",
"алмаз",
"алоды",
"алонж",
"алофі",
"алтаі",
"алтай",
"алтар",
"алтын",
"алтэі",
"алтэя",
"алунд",
"алфер",
"алыча",
"альбо",
"альпы",
"альты",
"альфа",
"альха",
"альяс",
"алюры",
"алёна",
"алёны",
"алёсы",
"амажы",
"амаль",
"амана",
"аманы",
"амапы",
"амары",
"амбіт",
"амбон",
"амбра",
"амбрэ",
"амега",
"амела",
"амеці",
"аміды",
"амілы",
"аміль",
"аміля",
"аміны",
"амінь",
"амічы",
"аміяк",
"амлет",
"амокі",
"ампер",
"ампір",
"амуры",
"амыты",
"амыць",
"амэба",
"амяга",
"амяла",
"амёба",
"амёбы",
"анагр",
"аналы",
"ананы",
"анань",
"анарэ",
"анась",
"анася",
"анаты",
"ангар",
"ангел",
"ангіл",
"ангоб",
"анелы",
"анеля",
"аніды",
"аніка",
"анілы",
"аніна",
"анісы",
"анісь",
"аніся",
"аніта",
"аніты",
"аніяк",
"аніён",
"анкер",
"аноды",
"анона",
"анонс",
"аноны",
"антон",
"антрэ",
"антук",
"антык",
"анусы",
"ануча",
"анучы",
"анфас",
"анціп",
"анцье",
"анчар",
"аншэф",
"анэля",
"аняго",
"анёлы",
"анёры",
"аорта",
"аорты",
"апады",
"апакі",
"апала",
"апалы",
"апачы",
"апашы",
"апека",
"апекс",
"апела",
"апелы",
"апеты",
"апець",
"апіеў",
"апіра",
"апіят",
"аплет",
"аплік",
"апліт",
"аплот",
"аплыў",
"апока",
"апокі",
"апона",
"апоны",
"апоня",
"апора",
"апорт",
"апоры",
"апроч",
"апрош",
"апрыч",
"апрэт",
"апсік",
"апука",
"апуха",
"апчхі",
"апшыт",
"апыты",
"апячы",
"апёкі",
"арабы",
"арава",
"аравы",
"аракі",
"арала",
"аралы",
"арама",
"арамы",
"араны",
"арапы",
"арары",
"араты",
"араць",
"арбат",
"аргал",
"арган",
"аргон",
"аргус",
"ардэн",
"аркан",
"аркоз",
"аркуш",
"арлан",
"арлец",
"арлоў",
"арлон",
"арляк",
"арман",
"арміі",
"армія",
"армэн",
"армюр",
"армяк",
"арнат",
"арсей",
"арсен",
"арсін",
"артур",
"артыт",
"аруба",
"арубы",
"аруды",
"арфэй",
"архар",
"архіў",
"архіп",
"архіт",
"арцім",
"арцём",
"арчак",
"аршад",
"аршын",
"арыды",
"арыец",
"арыкі",
"арылы",
"арына",
"арыны",
"арышт",
"арыён",
"арэал",
"арэлі",
"арэля",
"арэна",
"арэны",
"арэол",
"арэса",
"арэхі",
"асада",
"асады",
"асаед",
"асака",
"асвеі",
"асвер",
"асвея",
"асеін",
"аселы",
"асетр",
"асеці",
"асець",
"асіна",
"асіны",
"асіта",
"аскал",
"аскер",
"аскет",
"аслан",
"асляк",
"асман",
"асмол",
"аснач",
"асоба",
"асобы",
"асовы",
"асока",
"асокі",
"асоты",
"аспід",
"астап",
"астат",
"астма",
"астоі",
"астой",
"астоя",
"астра",
"астры",
"астыт",
"асуда",
"асуды",
"асцыт",
"асцюк",
"асцяк",
"аська",
"аські",
"асявы",
"асячы",
"атава",
"атавы",
"атака",
"атакі",
"атамы",
"атара",
"атары",
"аташэ",
"атлас",
"атлет",
"атлум",
"атлёт",
"атман",
"атолы",
"атоны",
"атора",
"атоса",
"атосы",
"атрад",
"атрый",
"атута",
"атыка",
"атыкі",
"атыла",
"атыты",
"атэла",
"атэлі",
"атэль",
"атэны",
"афган",
"афект",
"афеня",
"афера",
"аферы",
"афікс",
"афіны",
"афіты",
"афіша",
"афішы",
"афорт",
"афсет",
"афсэт",
"афтоз",
"афшор",
"афяра",
"афёра",
"афёры",
"ахаць",
"ахват",
"ахеец",
"ахмад",
"ахмат",
"ахмед",
"ахова",
"аховы",
"ахопы",
"ахочы",
"ахрэм",
"ацець",
"аціра",
"ацтэк",
"ацэна",
"ацэны",
"ацяты",
"ацяць",
"ацячы",
"ацёкі",
"ацёлы",
"ачагі",
"ачкур",
"ачолы",
"ачосы",
"ачэпы",
"ашава",
"ашкір",
"ашлап",
"ашрам",
"ашугі",
"ашука",
"ашчэр",
"ашыек",
"аэроб",
"аэрон",
"аэцыі",
"аэцый",
"баўар",
"баўер",
"баўка",
"баўкі",
"баўна",
"баўны",
"баўэр",
"бабак",
"бабах",
"бабід",
"бабін",
"бабіт",
"бабіч",
"бабка",
"бабкі",
"бабок",
"бабры",
"бабух",
"баб'ё",
"бабёр",
"бабёф",
"бавал",
"багаж",
"баган",
"багач",
"баггі",
"багер",
"багет",
"багна",
"багны",
"багоў",
"багон",
"багор",
"багра",
"багры",
"багун",
"бадай",
"бадак",
"бадан",
"бадун",
"бажан",
"бажба",
"бажкі",
"бажок",
"бажон",
"базар",
"базіс",
"базон",
"баіць",
"байда",
"байды",
"байка",
"байкі",
"байты",
"байцы",
"бакаж",
"бакал",
"бакан",
"бакас",
"бакен",
"баксы",
"балеі",
"балер",
"балет",
"балея",
"балід",
"балон",
"балты",
"балык",
"балюк",
"балён",
"бамжы",
"баміі",
"бамія",
"банан",
"бангі",
"банда",
"банды",
"банер",
"банка",
"банкі",
"банту",
"банты",
"банэр",
"бараж",
"барак",
"баран",
"барат",
"бараш",
"барбі",
"барва",
"барвы",
"бардо",
"барды",
"баржа",
"баржы",
"барка",
"баркі",
"бармы",
"барны",
"барон",
"барсы",
"барты",
"барцы",
"барыд",
"барый",
"барыл",
"барыс",
"барыт",
"барыш",
"барэж",
"барэй",
"барэт",
"барэц",
"басет",
"баска",
"баскі",
"басма",
"басмы",
"басок",
"басон",
"баста",
"бастр",
"басці",
"басяк",
"батан",
"батат",
"батва",
"батлы",
"батог",
"батон",
"батун",
"батут",
"батыі",
"батый",
"батык",
"батыр",
"баулы",
"бахар",
"бахур",
"бахус",
"бахча",
"бацік",
"бацян",
"бачка",
"бачкі",
"бачна",
"бачны",
"бачок",
"башка",
"баявы",
"баяны",
"баяры",
"баяць",
"бгаць",
"бебут",
"бегкі",
"бегла",
"беглы",
"бегма",
"бегчы",
"бедна",
"бедны",
"бейка",
"бейкі",
"бейты",
"бекар",
"бекас",
"бекер",
"бекет",
"бекон",
"белае",
"белаз",
"белая",
"беліз",
"белка",
"белкі",
"белле",
"беллі",
"белсэ",
"белыя",
"бельт",
"белэн",
"бенін",
"бенчы",
"бераг",
"бергі",
"берка",
"беркі",
"берма",
"бермы",
"берны",
"берты",
"берыл",
"берыя",
"берэт",
"бесты",
"бетол",
"бетон",
"бзікі",
"бзыкі",
"біўні",
"біакс",
"бібоп",
"бівак",
"бівіс",
"бігас",
"бідон",
"бізон",
"бізун",
"бійск",
"біксы",
"білды",
"білет",
"білон",
"бімсы",
"бінга",
"біном",
"бінты",
"біпак",
"біржа",
"біржы",
"бірка",
"біркі",
"бірук",
"біруч",
"бісау",
"бісер",
"бістр",
"бітае",
"бітар",
"бітая",
"бітва",
"бітвы",
"бітка",
"біткі",
"бітлз",
"бітлы",
"бітма",
"бітны",
"біток",
"бітон",
"бітум",
"бітун",
"біцік",
"біцца",
"біцці",
"біццё",
"біцюг",
"біёза",
"біёмы",
"біёнт",
"біёта",
"біёты",
"блага",
"благі",
"бланк",
"блаты",
"бледы",
"блеск",
"блефы",
"блізу",
"блікі",
"блінд",
"блінт",
"бліны",
"бліск",
"блісь",
"бліцы",
"блогі",
"блокі",
"блонь",
"блоты",
"блохі",
"блуды",
"блуза",
"блузы",
"блумс",
"блыха",
"блэйк",
"блюда",
"блюды",
"блюза",
"блюзы",
"блюмс",
"блюмы",
"блюшч",
"бляды",
"блянк",
"бляск",
"бляха",
"бляхі",
"боўты",
"боўць",
"бобік",
"бобка",
"бобкі",
"богаў",
"богуш",
"бодзі",
"бодка",
"бодкі",
"бодні",
"бодня",
"божае",
"божая",
"боінг",
"бойка",
"бойкі",
"бойні",
"бойны",
"бойня",
"бокам",
"боксы",
"болей",
"болка",
"болкі",
"больш",
"болюс",
"бомба",
"бомбы",
"бомка",
"бомкі",
"бонда",
"бонды",
"бонза",
"бонзы",
"бонка",
"бонна",
"бонны",
"бонус",
"бораў",
"борды",
"борзы",
"боркі",
"борны",
"борці",
"борць",
"боршч",
"босае",
"босая",
"боскі",
"боссю",
"бохан",
"бохат",
"боцік",
"бочка",
"бочкі",
"бочны",
"боязь",
"брава",
"бравы",
"брага",
"брады",
"бразь",
"бракі",
"брама",
"брамы",
"браны",
"браня",
"брасы",
"браты",
"браце",
"брацк",
"браць",
"браян",
"бровы",
"бромы",
"броні",
"бронь",
"броня",
"бруды",
"брукі",
"брусы",
"брута",
"бруха",
"брухі",
"бруёк",
"брыво",
"брыгі",
"брыда",
"брыдж",
"брыды",
"брыжы",
"брыза",
"брызы",
"брызь",
"брыка",
"брыла",
"брылі",
"брыль",
"брынк",
"брысь",
"брыты",
"брыфы",
"брыца",
"брыцы",
"брыць",
"брыёш",
"брэды",
"брэйк",
"брэкі",
"брэнд",
"брэст",
"брэхі",
"брэшы",
"бубал",
"бубен",
"бубка",
"бубкі",
"бубны",
"бубон",
"бубён",
"бугаі",
"бугай",
"бугор",
"бугры",
"будан",
"будзе",
"будка",
"будкі",
"будні",
"будны",
"будун",
"буеры",
"буйкі",
"буйла",
"буйна",
"буйны",
"букер",
"букет",
"букіш",
"букле",
"буклі",
"букля",
"букса",
"буксы",
"букта",
"букты",
"булат",
"булеў",
"буліт",
"булка",
"булкі",
"бульк",
"булён",
"бумер",
"бунды",
"бунін",
"бунты",
"бурае",
"бурак",
"буран",
"бурат",
"бурая",
"бургі",
"бурда",
"бурка",
"буркі",
"бурна",
"бурны",
"бурса",
"бурсы",
"бурты",
"бурун",
"буршы",
"бусак",
"бусел",
"буслй",
"буслы",
"бусяк",
"бутан",
"бутлі",
"бутлы",
"бутля",
"бутон",
"бутуз",
"бутык",
"бутыл",
"бутэн",
"буфер",
"буфет",
"буфон",
"буфэр",
"бухан",
"бухач",
"бухта",
"бухты",
"буцік",
"бучна",
"бучны",
"буякі",
"буялы",
"буяна",
"буяны",
"буяць",
"б'ефы",
"б'юік",
"быўшы",
"бывае",
"бывай",
"быдла",
"быдлы",
"быдля",
"быдлё",
"быкаў",
"былая",
"былле",
"быллё",
"былое",
"бытае",
"бытая",
"бытта",
"быхаў",
"быцца",
"быццё",
"бычкі",
"бычок",
"бэйдж",
"бэкет",
"бэлью",
"бэнэт",
"бэрнз",
"бювар",
"бювет",
"бюкса",
"бюксы",
"бюсты",
"бягом",
"бягою",
"бягун",
"бядак",
"бядро",
"бядун",
"бялей",
"бялкі",
"бялок",
"бялюк",
"бяляк",
"бяляш",
"бялёк",
"бярно",
"бярны",
"бёдры",
"бёміт",
"бёрда",
"бёрды",
"бёрны",
"ваўкі",
"вабік",
"вабка",
"вабкі",
"вабны",
"вагам",
"ваган",
"вагар",
"вагер",
"вагон",
"вагул",
"вадзі",
"вадка",
"вадкі",
"вадна",
"вадны",
"вадуц",
"вадыр",
"ваеры",
"важак",
"важка",
"важкі",
"важна",
"важны",
"важня",
"вазак",
"вазкі",
"вазок",
"вазон",
"вазюр",
"вайма",
"вайна",
"вакал",
"вакат",
"вакно",
"вакол",
"вакса",
"валак",
"валам",
"валан",
"валах",
"валей",
"валер",
"валет",
"валец",
"валік",
"валін",
"валія",
"валка",
"валкі",
"валлі",
"валлё",
"валок",
"валуі",
"валуй",
"валун",
"валух",
"вальс",
"валюм",
"валюх",
"валюш",
"валёр",
"ванад",
"ванда",
"ванін",
"ванна",
"ванны",
"ванта",
"ванты",
"вапар",
"вапна",
"вапны",
"вапёр",
"вараг",
"варан",
"варка",
"варкі",
"варлы",
"варна",
"варні",
"варны",
"варня",
"варта",
"варты",
"варух",
"варых",
"васал",
"ватар",
"ватні",
"ватны",
"ватэр",
"вафлі",
"вафля",
"вахля",
"вахта",
"вахты",
"вацін",
"вацяк",
"вашае",
"вашая",
"ваюны",
"ваяжы",
"ваяка",
"ваякі",
"ваяры",
"вееры",
"вежка",
"вежкі",
"везір",
"везці",
"вейка",
"вейкі",
"векша",
"векшы",
"велік",
"веліч",
"велум",
"вельс",
"велюр",
"венгр",
"венды",
"венед",
"венер",
"венік",
"венны",
"вента",
"венты",
"венца",
"венцы",
"вепры",
"вепсы",
"верад",
"верас",
"верая",
"вербы",
"вержэ",
"веркі",
"верна",
"верны",
"верпы",
"верфі",
"верць",
"верша",
"вершы",
"верын",
"весні",
"весты",
"весці",
"весць",
"ветах",
"ветка",
"веткі",
"ветла",
"ветлы",
"ветны",
"вехці",
"вецер",
"вецце",
"вецці",
"вечар",
"вечка",
"вечкі",
"вечна",
"вечны",
"вешка",
"вешкі",
"вешчы",
"веяны",
"веяць",
"віват",
"відзы",
"відкі",
"відмо",
"відмы",
"відно",
"відны",
"відок",
"відук",
"відэа",
"візаж",
"візгі",
"візір",
"візіт",
"візыт",
"вікар",
"вікця",
"віліі",
"віліс",
"вілія",
"вілка",
"вілкі",
"вілты",
"вінда",
"вінды",
"вінеі",
"вінен",
"вінея",
"вініл",
"вінна",
"вінны",
"вінол",
"вінты",
"вінцо",
"віраж",
"віркі",
"вірлы",
"вірны",
"вірок",
"вірун",
"вірус",
"віскі",
"вісла",
"віслы",
"вісок",
"вісон",
"вісты",
"вісус",
"вітаў",
"вітае",
"вітак",
"вітая",
"вітка",
"віткі",
"віток",
"віхар",
"віхор",
"віхры",
"віцца",
"віццё",
"віцюк",
"вішка",
"вішкі",
"вішні",
"вішня",
"вішшо",
"віёла",
"віёлы",
"віёля",
"влксм",
"воўна",
"воўча",
"воўчы",
"вобад",
"вобак",
"вобач",
"вобла",
"вобуў",
"вогер",
"вогкі",
"воглы",
"водар",
"водка",
"водкі",
"водле",
"водны",
"водыр",
"вожаг",
"вожка",
"вожкі",
"вожыг",
"вожык",
"возік",
"возка",
"возкі",
"воіны",
"войны",
"войты",
"войча",
"вокал",
"вокіс",
"вокны",
"волак",
"волас",
"волат",
"волах",
"волга",
"волгі",
"волік",
"волка",
"волкі",
"волле",
"воллі",
"волма",
"вольт",
"вонка",
"вонкі",
"вопіс",
"вопух",
"вопыт",
"вораг",
"ворак",
"воран",
"ворат",
"ворах",
"ворды",
"ворка",
"воркі",
"ворны",
"ворса",
"ворсы",
"ворша",
"восем",
"восіп",
"воскі",
"воспа",
"восце",
"восці",
"восць",
"восып",
"вотум",
"вохкі",
"вохны",
"вохра",
"вохці",
"воцат",
"вочап",
"вочка",
"вочкі",
"вочны",
"вуаль",
"вугал",
"вуглі",
"вуглы",
"вугор",
"вугры",
"вудар",
"вудка",
"вудкі",
"вудыр",
"вужок",
"вузей",
"вузел",
"вузка",
"вузкі",
"вузлы",
"вулеі",
"вулей",
"вулка",
"вулкі",
"вуллі",
"вуллё",
"вуніі",
"вунія",
"вупар",
"вусач",
"вусік",
"вусна",
"вусны",
"вуссе",
"вуссі",
"вусце",
"вусці",
"вусяк",
"вутка",
"вуткі",
"вутлы",
"вухан",
"вухар",
"вучні",
"вушак",
"вушка",
"вушкі",
"вушлы",
"вушны",
"вцспс",
"в'юер",
"выбаі",
"выбай",
"выбар",
"выбег",
"выбух",
"вывад",
"вываз",
"вывал",
"вывар",
"вывіх",
"выган",
"выгар",
"выгіб",
"выгін",
"выгук",
"выгул",
"выдма",
"выдмы",
"выдра",
"выдры",
"выдых",
"выезд",
"выеты",
"выжал",
"выжла",
"выжлы",
"выжым",
"вызаў",
"вызал",
"выйці",
"выказ",
"выкас",
"выкат",
"выкід",
"выкуп",
"выкус",
"вылаў",
"вылаз",
"вылам",
"вылет",
"выліў",
"вылік",
"вымак",
"вымал",
"вымах",
"вымер",
"вынас",
"вынік",
"вынос",
"выпад",
"выпал",
"выпар",
"выпас",
"выпат",
"выпек",
"выпіс",
"выпса",
"выпыт",
"выраб",
"вырад",
"выраз",
"выраі",
"вырай",
"вырак",
"вырод",
"вырок",
"выруб",
"вырый",
"вырыс",
"высеў",
"выспа",
"выспы",
"вытак",
"выток",
"выхад",
"выхап",
"выход",
"выцік",
"выцці",
"выццё",
"выцяг",
"вычын",
"вышаг",
"вышай",
"вышка",
"вышкі",
"вышлы",
"вышні",
"вышук",
"вышэй",
"выява",
"выявы",
"вэбер",
"вэк'ё",
"вэлем",
"вэлюм",
"вюрмы",
"вядро",
"вядры",
"вяззе",
"вязка",
"вязкі",
"вязні",
"вялае",
"вялая",
"вялес",
"вянец",
"вянкі",
"вянне",
"вянні",
"вянок",
"вянцы",
"вярба",
"вярбы",
"вярхі",
"вярчы",
"вярэі",
"вясло",
"вяслы",
"вясна",
"вясны",
"вятох",
"вятры",
"вяхір",
"вяцкі",
"вячка",
"вячор",
"вячык",
"вёдры",
"вёска",
"вёскі",
"вёслы",
"вёсны",
"гаўкі",
"гаўно",
"габоі",
"габой",
"габон",
"габра",
"гаваі",
"гавел",
"гавот",
"гавёс",
"гагат",
"гадка",
"гадкі",
"гадок",
"гаеры",
"газік",
"газны",
"газон",
"газыр",
"гаіці",
"гаіць",
"гайда",
"гайды",
"гайка",
"гайкі",
"гайно",
"гайны",
"гайнэ",
"гайня",
"галас",
"галат",
"галеі",
"галей",
"галец",
"галій",
"галіт",
"галка",
"галкі",
"галлё",
"галон",
"галоп",
"галош",
"галсы",
"галты",
"галун",
"галын",
"галыш",
"гальс",
"галэп",
"галяк",
"галяр",
"галяс",
"галёш",
"гамак",
"гамар",
"гамаш",
"гамер",
"гамоз",
"гамон",
"гамуз",
"гамэр",
"ганак",
"гангі",
"ганец",
"ганза",
"ганзы",
"ганіт",
"ганка",
"ганкі",
"ганна",
"ганны",
"гання",
"ганок",
"ганор",
"гансы",
"ганус",
"ганцы",
"ганыж",
"гапак",
"гапей",
"гапон",
"гараж",
"гарал",
"гарбы",
"гарды",
"гаркі",
"гарно",
"гарны",
"гарод",
"гарох",
"гарты",
"гарун",
"гарус",
"гарфа",
"гарцы",
"гарэм",
"гарэт",
"гарэх",
"гатка",
"гаткі",
"гатоў",
"гафрэ",
"гафты",
"гачка",
"гачкі",
"гашак",
"гашыш",
"гаюча",
"гаючы",
"гаялы",
"гаяна",
"гаяны",
"гаёвы",
"гбайт",
"гбаны",
"гбаць",
"гвалт",
"гвозд",
"гдулі",
"гдуля",
"гевеі",
"гевея",
"геена",
"геены",
"геймы",
"гейтс",
"гейты",
"гейша",
"гейшы",
"гекон",
"гелер",
"гелій",
"гемін",
"генез",
"геніі",
"геній",
"генны",
"геном",
"генуі",
"генуя",
"геоід",
"георг",
"гербы",
"герко",
"герма",
"гермы",
"героі",
"герой",
"герса",
"герцы",
"герык",
"герэй",
"гетра",
"гетры",
"гетэр",
"гзымс",
"гібка",
"гібкі",
"гіблы",
"гібон",
"гідка",
"гідкі",
"гідра",
"гідры",
"гіена",
"гіены",
"гілеі",
"гілея",
"гіляк",
"гіляр",
"гімік",
"гімны",
"гінеі",
"гінея",
"гінэс",
"гінэя",
"гіпсы",
"гіпюр",
"гірка",
"гіркі",
"гірса",
"гітаў",
"гітал",
"гітан",
"гіцлі",
"гічан",
"гічка",
"гічкі",
"глаўк",
"глава",
"главы",
"глайд",
"глеба",
"глебы",
"гліва",
"глівы",
"гліна",
"глінт",
"гліны",
"гліпт",
"гліст",
"гліца",
"гліцы",
"глокі",
"глоса",
"глосы",
"глузд",
"глумы",
"глуск",
"глуха",
"глухі",
"глыба",
"глыбы",
"глыжы",
"глыза",
"глызы",
"глыкі",
"глыты",
"глюга",
"глюгі",
"глюкі",
"глюма",
"глюон",
"глякі",
"глянс",
"глянь",
"глясэ",
"глёкі",
"глёты",
"гмахі",
"гміна",
"гміны",
"гмура",
"гнаны",
"гнаць",
"гнаёк",
"гневы",
"гнеды",
"гнейс",
"гніда",
"гніды",
"гнілы",
"гніль",
"гніць",
"гнома",
"гномы",
"гнулы",
"гнусы",
"гнуты",
"гнуць",
"гнюсы",
"гнявы",
"гняды",
"гнёты",
"гобсы",
"гогат",
"годзе",
"годзі",
"годна",
"годні",
"годны",
"гожае",
"гожая",
"гожшы",
"гойны",
"голаў",
"голад",
"голае",
"голас",
"голая",
"голем",
"голка",
"голле",
"голлі",
"голлю",
"голуб",
"голць",
"гольд",
"гольм",
"гольф",
"гоман",
"гомік",
"гонар",
"гонгі",
"гонка",
"гонкі",
"гонны",
"гонта",
"гонты",
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
"горлы",
"горна",
"горны",
"горст",
"горсы",
"горцы",
"горшы",
"горыч",
"госці",
"госць",
"госця",
"гофер",
"гофры",
"гоцкі",
"грабы",
"града",
"грады",
"граза",
"гразі",
"гразы",
"гразь",
"гракі",
"грамы",
"гранд",
"грані",
"грант",
"граны",
"грань",
"графа",
"графы",
"грахі",
"граць",
"грашы",
"грогі",
"грозы",
"гросы",
"гроты",
"грошы",
"груба",
"грубы",
"груда",
"груды",
"грузд",
"грузы",
"грукі",
"грумы",
"груні",
"грунт",
"груня",
"група",
"групы",
"грута",
"груты",
"груца",
"груцы",
"груша",
"грушы",
"грыбы",
"грыва",
"грывы",
"грыжа",
"грыжы",
"грыза",
"грызы",
"грызь",
"грыль",
"грымы",
"грынь",
"грыпы",
"грыфы",
"грэйд",
"грэкі",
"грэна",
"грэны",
"грэта",
"грэты",
"грэць",
"гуамы",
"гуана",
"губан",
"губач",
"губка",
"губкі",
"губны",
"гудкі",
"гудок",
"гужам",
"гузак",
"гузік",
"гузка",
"гузкі",
"гузна",
"гузны",
"гузок",
"гузыр",
"гулец",
"гулка",
"гулкі",
"гульк",
"гуляш",
"гумар",
"гуміт",
"гумка",
"гумкі",
"гумно",
"гумны",
"гумоз",
"гумор",
"гумус",
"гупат",
"гуран",
"гурба",
"гурбы",
"гурды",
"гурка",
"гуркі",
"гурма",
"гурмы",
"гурок",
"гурты",
"гурыі",
"гурыя",
"гурэй",
"гусак",
"гусар",
"гусіт",
"гуска",
"гускі",
"гуслі",
"густа",
"густы",
"гусці",
"гутны",
"гуцул",
"гучкі",
"гучна",
"гучны",
"гучок",
"гушкі",
"гушча",
"гыркі",
"гэблі",
"гэлап",
"гэнае",
"гэная",
"гэрад",
"гэтае",
"гэтак",
"гэтая",
"гэткі",
"гювеч",
"гюйсы",
"гюлеш",
"гюрза",
"гюрзы",
"гюрэш",
"гяуры",
"гётыт",
"гёхст",
"даўгі",
"даўжо",
"даўка",
"даўкі",
"даўні",
"даўно",
"даўны",
"дабор",
"дабро",
"дабёр",
"давай",
"давер",
"давід",
"давоз",
"давыд",
"дагон",
"дазор",
"даіць",
"дайка",
"дайкі",
"даймы",
"даказ",
"дакар",
"дакор",
"далае",
"далас",
"далая",
"далеў",
"далей",
"далеч",
"далоў",
"дальш",
"даляр",
"дамба",
"дамбы",
"дамен",
"дамер",
"дамес",
"дамка",
"дамкі",
"дамоў",
"дамок",
"дампы",
"данец",
"даніі",
"данік",
"данія",
"данне",
"данні",
"данос",
"дантэ",
"данцы",
"даныя",
"дарка",
"дарма",
"дармо",
"дартс",
"дарчы",
"дар'і",
"дар'я",
"дарыі",
"дарый",
"дасеў",
"дасеч",
"дасол",
"дасты",
"дасье",
"дасяг",
"датла",
"датны",
"дафін",
"даход",
"дацан",
"дацкі",
"дацца",
"дачка",
"дачкі",
"дачны",
"дачцэ",
"дашак",
"дашкі",
"даяры",
"дбала",
"дбалы",
"дбаць",
"двары",
"дваяк",
"джава",
"джазы",
"джайв",
"джала",
"джалы",
"джаса",
"джасы",
"джвых",
"джгір",
"джгут",
"джобс",
"джоні",
"джонс",
"джоны",
"джуба",
"джубы",
"джума",
"джумы",
"джуты",
"джыга",
"джымі",
"джымы",
"джыны",
"джыпы",
"джэбы",
"джэкі",
"джэмы",
"джэні",
"джэры",
"дзева",
"дзевы",
"дзежы",
"дзела",
"дзелі",
"дзелы",
"дзель",
"дзеля",
"дзень",
"дзесь",
"дзеці",
"дзець",
"дзеяч",
"дзіва",
"дзівы",
"дзіда",
"дзіды",
"дзіка",
"дзікі",
"дзіна",
"дзіны",
"дзінь",
"дзіра",
"дзіры",
"дзіця",
"дзіцё",
"дзоты",
"дзьве",
"дзьме",
"дзьму",
"дзэны",
"дзэта",
"дзэты",
"дзюба",
"дзюбы",
"дзюгі",
"дзюдо",
"дзюза",
"дзюйм",
"дзюкі",
"дзюма",
"дзюна",
"дзюны",
"дзюра",
"дзюры",
"дзяга",
"дзягі",
"дзяды",
"дзяжа",
"дзяжы",
"дзяка",
"дзякі",
"дзяку",
"дзяло",
"дзялы",
"дзёўб",
"дзёбы",
"дзёру",
"дзёры",
"длінь",
"дмаць",
"днепр",
"днець",
"дніна",
"дніны",
"дновы",
"днямі",
"доўга",
"доўгі",
"добра",
"добры",
"довад",
"довеч",
"догма",
"догмы",
"доены",
"дождж",
"дойка",
"дойкі",
"дойла",
"дойлы",
"дойль",
"дойна",
"дойны",
"доказ",
"докер",
"долам",
"долар",
"домік",
"домна",
"домны",
"домра",
"домры",
"донар",
"донгі",
"донка",
"донкі",
"донна",
"донне",
"донні",
"донны",
"доння",
"донум",
"донца",
"донцы",
"допіс",
"допыт",
"дораб",
"дорах",
"дораш",
"досуг",
"досць",
"дотык",
"дохлы",
"дохля",
"дочкі",
"дошка",
"дошкі",
"драба",
"драбы",
"драга",
"драгі",
"дражэ",
"драйв",
"драка",
"дракі",
"драла",
"драма",
"драмы",
"драны",
"драпы",
"драты",
"драфа",
"драфы",
"драць",
"драчы",
"дробы",
"дровы",
"дрозд",
"дроід",
"дронт",
"дроны",
"дрост",
"дросы",
"дрофы",
"другі",
"дружа",
"друза",
"друзы",
"друід",
"друка",
"друкі",
"друці",
"друцк",
"друць",
"дрыгі",
"дрыін",
"дрыкі",
"дрылі",
"дрылы",
"дрыль",
"дрыны",
"дрыса",
"дрэва",
"дрэвы",
"дрэды",
"дрэйф",
"дрэма",
"дрэмы",
"дрэна",
"дрэны",
"дрэнь",
"дуаен",
"дуант",
"дубаі",
"дубай",
"дубам",
"дубас",
"дубеі",
"дубец",
"дубка",
"дубкі",
"дублі",
"дубль",
"дубны",
"дубок",
"дубцы",
"дуб'ё",
"дувал",
"дуван",
"дугін",
"дугой",
"дудак",
"дудар",
"дудка",
"дудкі",
"дудук",
"дужае",
"дужая",
"дужка",
"дужкі",
"дужэй",
"дужэц",
"дуйка",
"дуйкі",
"дукат",
"дукер",
"дукты",
"дулеб",
"думец",
"думка",
"думкі",
"думна",
"думны",
"думцы",
"дунаі",
"дунай",
"дунін",
"дуніт",
"дупка",
"дупкі",
"дупло",
"дуплы",
"дуплё",
"дурні",
"дурны",
"дурра",
"дурус",
"дурык",
"дусен",
"дусты",
"дутае",
"дутар",
"дутая",
"дутыш",
"духам",
"духан",
"дуцік",
"дуцца",
"дучка",
"дучкі",
"душка",
"душкі",
"душна",
"душны",
"душок",
"дуэлі",
"дуэль",
"дуэты",
"дыаны",
"дыбам",
"дыбка",
"дыбкі",
"дыван",
"дыгер",
"дыезы",
"дыены",
"дыета",
"дыеты",
"дыжон",
"дылда",
"дылды",
"дылер",
"дымар",
"дымер",
"дымка",
"дымкі",
"дымна",
"дымны",
"дымок",
"дынар",
"дынас",
"дынга",
"дында",
"дынны",
"дынод",
"дыолы",
"дырда",
"дыскі",
"дыхты",
"дышлі",
"дыэзы",
"дыэта",
"дыэты",
"дыяна",
"дыяны",
"дыёды",
"дэбет",
"дэбіл",
"дэбіт",
"дэбош",
"дэбэт",
"дэбют",
"дэвід",
"дэвіз",
"дэвіс",
"дэвон",
"дэізм",
"дэіст",
"дэйлы",
"дэкан",
"дэкор",
"дэман",
"дэмас",
"дэмка",
"дэмкі",
"дэнім",
"дэнца",
"дэраш",
"дэрбі",
"дэрма",
"дэрык",
"дэфіс",
"дэшты",
"еўнух",
"еўскі",
"егеры",
"егова",
"едакі",
"едкае",
"едкая",
"еднае",
"едная",
"едуны",
"ежавы",
"ежджу",
"ежнае",
"ежная",
"ежыва",
"ежывы",
"езджы",
"ездка",
"ездкі",
"езуіт",
"ейнае",
"ейная",
"екаць",
"еліць",
"ельні",
"ельня",
"ельск",
"емены",
"еміна",
"еміны",
"ендза",
"енкат",
"енолы",
"ерасі",
"ерась",
"есаул",
"есьці",
"ехаць",
"ешчае",
"ешчая",
"жаўна",
"жаўны",
"жабін",
"жабіч",
"жабка",
"жабкі",
"жабра",
"жабры",
"жадны",
"жазло",
"жазлы",
"жакан",
"жакеі",
"жакей",
"жакет",
"жакоб",
"жакты",
"жаніх",
"жанкі",
"жанна",
"жанны",
"жанры",
"жарае",
"жарая",
"жаркі",
"жарны",
"жарон",
"жарты",
"жатае",
"жатая",
"жатны",
"жацца",
"жачка",
"жбаны",
"жбіца",
"жвава",
"жвавы",
"жвака",
"жваць",
"жвіры",
"жгуты",
"жданы",
"ждаць",
"жмакі",
"жмаць",
"жмені",
"жменя",
"жмоты",
"жмуты",
"жніва",
"жніво",
"жнівы",
"жняцы",
"жняяр",
"жоўны",
"жоўта",
"жоўты",
"жоўці",
"жоўць",
"жолаб",
"жолуд",
"жонды",
"жонка",
"жонкі",
"жораў",
"жоран",
"жорны",
"жрацы",
"жраць",
"жрыца",
"жрыцы",
"жрэла",
"жрэлы",
"жудзь",
"жудны",
"жужла",
"жужлі",
"жуіры",
"жуйка",
"жуйкі",
"жуйны",
"жукаў",
"жулан",
"жулік",
"жуллё",
"жупан",
"жупел",
"жураў",
"журба",
"журык",
"жутлы",
"жухлы",
"жучкі",
"жучок",
"жыўны",
"жыўцы",
"жыўчы",
"жывая",
"жывец",
"жывое",
"жывот",
"жыдкі",
"жыдок",
"жыжка",
"жыжкі",
"жылая",
"жылет",
"жылец",
"жылка",
"жылкі",
"жылле",
"жыллі",
"жыллё",
"жылое",
"жырат",
"жыраф",
"жырны",
"жытка",
"жыткі",
"жытло",
"жытні",
"жытны",
"жытцо",
"жыхар",
"жыціе",
"жыцік",
"жыцца",
"жыцці",
"жыццё",
"жычка",
"жычкі",
"жэзлы",
"жэода",
"жэоды",
"жэраб",
"жэрар",
"жэрах",
"жэрла",
"жэрлы",
"жэром",
"жэрці",
"жэсты",
"жэтон",
"забег",
"забел",
"забоі",
"забой",
"забор",
"завад",
"завал",
"завеі",
"завет",
"завея",
"завід",
"завод",
"завоз",
"завуч",
"загад",
"загар",
"загіб",
"загін",
"загон",
"загсы",
"загул",
"задам",
"задкі",
"задні",
"задок",
"задор",
"задум",
"задых",
"заезд",
"заечы",
"зажон",
"зажор",
"зажыў",
"зазоў",
"зазор",
"зазуб",
"заіка",
"заікі",
"заілы",
"зайка",
"зайкі",
"займя",
"зайцы",
"зайчы",
"заказ",
"закід",
"закіп",
"закіс",
"закол",
"закон",
"закор",
"закот",
"закуп",
"закут",
"залеж",
"заліў",
"залік",
"залог",
"залом",
"залпы",
"залёт",
"замак",
"замах",
"замеж",
"замер",
"замес",
"заміж",
"замін",
"замкі",
"замок",
"замор",
"замуж",
"замша",
"замшы",
"замёт",
"занач",
"зандр",
"занос",
"запал",
"запан",
"запар",
"запас",
"запеў",
"запек",
"запіл",
"запіс",
"запоі",
"запой",
"запор",
"запын",
"запыт",
"запых",
"зарад",
"зараз",
"зароб",
"зарок",
"заруб",
"зарын",
"зарэз",
"засаб",
"засад",
"засеў",
"засек",
"засеч",
"засім",
"засні",
"засня",
"засоў",
"засол",
"засор",
"засос",
"засуш",
"засып",
"затка",
"заткі",
"затое",
"затон",
"затор",
"затха",
"затым",
"захад",
"захар",
"захіл",
"захля",
"захоў",
"заход",
"захоп",
"зацін",
"заціш",
"зацны",
"зацяг",
"зацёк",
"зацён",
"зачос",
"зачур",
"зачым",
"зачын",
"зачэп",
"зашлы",
"за'чы",
"заява",
"заявы",
"заячы",
"збава",
"збавы",
"збаны",
"збегі",
"збіты",
"збіць",
"збоку",
"зборы",
"зброд",
"зброя",
"збруд",
"збруі",
"збруя",
"збыты",
"збыць",
"зваба",
"звабы",
"звада",
"звады",
"звалы",
"званы",
"зваць",
"звеку",
"зверх",
"зверы",
"звівы",
"звіты",
"звіхі",
"звіць",
"зводы",
"звозы",
"звыкі",
"звяга",
"звязы",
"звякі",
"звялы",
"звяно",
"звяны",
"звяры",
"звяць",
"звёны",
"згана",
"зганы",
"згары",
"згасы",
"згібы",
"згіна",
"згіны",
"згода",
"згоды",
"згоны",
"зграі",
"зграя",
"згуба",
"згубы",
"згукі",
"згэлк",
"здаля",
"здане",
"здані",
"здань",
"здаць",
"здача",
"здзек",
"здзіў",
"здоба",
"здобы",
"здолу",
"здоры",
"здрок",
"здрыг",
"здуру",
"здуты",
"здуць",
"здымы",
"зеўра",
"зеўры",
"зеўсы",
"зебра",
"зебры",
"зедан",
"зекры",
"зелле",
"зеллі",
"зелот",
"зельц",
"земец",
"земка",
"земкі",
"землі",
"земны",
"земцы",
"зеніт",
"зенка",
"зенкі",
"зеркі",
"зерне",
"зерні",
"зерня",
"зефір",
"зжаты",
"зжаць",
"зжыты",
"зжыць",
"ззаду",
"ззяць",
"зікры",
"зімка",
"зімкі",
"зімна",
"зімні",
"зімны",
"зімой",
"зімою",
"зіпун",
"зіркі",
"злаба",
"злады",
"злакі",
"злата",
"златы",
"злебы",
"злева",
"злець",
"злівы",
"зліты",
"зліць",
"злоба",
"злобы",
"зловы",
"зломы",
"злота",
"злоты",
"злуда",
"злуды",
"злука",
"злюбы",
"злюка",
"злюкі",
"злючы",
"злякі",
"злёты",
"змага",
"змаля",
"зманы",
"змаху",
"змееў",
"змена",
"змены",
"змест",
"зміры",
"змоўк",
"змова",
"змовы",
"змога",
"змора",
"зморы",
"змрок",
"змуст",
"змусы",
"змывы",
"змысл",
"змыты",
"змыць",
"змяжы",
"змяты",
"змяць",
"знава",
"знакі",
"знамы",
"знаны",
"знаць",
"зніба",
"знібы",
"знізу",
"знічы",
"знові",
"зносы",
"знуда",
"знуды",
"зныць",
"зняты",
"зняць",
"зобны",
"зодчы",
"золак",
"золка",
"золкі",
"зомбі",
"зонгі",
"зонды",
"зонны",
"зорка",
"зоркі",
"зорна",
"зорны",
"зошлы",
"зрада",
"зрады",
"зраза",
"зразу",
"зразы",
"зроду",
"зрокі",
"зрост",
"зрубы",
"зрукі",
"зрухі",
"зрывы",
"зрыты",
"зрыць",
"зрэзы",
"зуавы",
"зубар",
"зубец",
"зубік",
"зубкі",
"зубны",
"зубок",
"зубры",
"зубцы",
"зуб'е",
"зуб'і",
"зуйкі",
"зулус",
"зумер",
"зумкі",
"зумпф",
"зурна",
"зурны",
"зусім",
"з'езд",
"з'ява",
"з'явы",
"з'яды",
"зыбка",
"зыбкі",
"зыбун",
"зыдор",
"зызлы",
"зыноў",
"зырка",
"зыркі",
"зыскі",
"зысці",
"зыход",
"зычна",
"зычны",
"зышлы",
"зьбег",
"зьвер",
"зьвіх",
"зьвяз",
"зьезд",
"зьмяя",
"зьява",
"зэгар",
"зэдлі",
"зэчка",
"зэчкі",
"зюйды",
"зяўкі",
"зябер",
"зябка",
"зябкі",
"зяблы",
"зябры",
"зявак",
"зявок",
"зямец",
"зямля",
"зямны",
"зямцы",
"зянон",
"зяпла",
"зяплы",
"зяцеў",
"зяцёк",
"зёлка",
"зёлкі",
"зёмны",
"іўрыт",
"іаніт",
"іанол",
"іберы",
"ібісы",
"ібліс",
"іваны",
"івасі",
"івась",
"івона",
"івоны",
"ігары",
"іглак",
"ігнат",
"ігрок",
"ігрэк",
"ігрэц",
"ідалы",
"ідучы",
"ідыёт",
"ідэал",
"іерэі",
"іерэй",
"іжора",
"іжскі",
"іжыца",
"іжыцы",
"ізгоі",
"ізгой",
"ізноў",
"ізыда",
"ізюбр",
"ікабы",
"ікаць",
"ікона",
"іконы",
"іксіі",
"іксія",
"ілавы",
"ілгун",
"ілеус",
"ілона",
"ілоны",
"ілоты",
"ільвы",
"ільга",
"ільды",
"ільіч",
"ілька",
"ількі",
"ільля",
"ільма",
"ільмы",
"ільны",
"імамы",
"імаць",
"імбір",
"імгла",
"імідж",
"іміды",
"імпат",
"імпэт",
"імшал",
"імёны",
"інакш",
"інбер",
"інвар",
"інгуш",
"індол",
"індус",
"індыі",
"індый",
"індык",
"індыя",
"індэн",
"інець",
"інжыр",
"інося",
"інсіт",
"інтым",
"інтэл",
"інтэр",
"іншае",
"іншая",
"іншыя",
"інэню",
"інэса",
"інэсы",
"інэты",
"іоній",
"іонны",
"іосіф",
"іпаці",
"іпрыт",
"іпуці",
"іпуць",
"ірады",
"іракі",
"іраны",
"ірбіс",
"ірмас",
"іртыш",
"ірына",
"ірыны",
"ірысы",
"ірыты",
"ірэна",
"ірэны",
"ісакі",
"іскра",
"іскры",
"іслам",
"іслач",
"існае",
"існая",
"ісопы",
"іспод",
"іспыт",
"істае",
"істая",
"істцы",
"ісусы",
"ісцец",
"ісцік",
"ісыці",
"ісьці",
"ітака",
"ітакі",
"ітрый",
"іхнае",
"іхная",
"іхнія",
"іхняе",
"іхняя",
"іхрам",
"ішакі",
"ішачы",
"ішхан",
"ішыяс",
"іяган",
"іяніт",
"іённы",
"кўінз",
"каўка",
"каўкі",
"каўшы",
"каала",
"каалы",
"кабан",
"кабат",
"кабіл",
"кабол",
"кабуз",
"кабул",
"кабур",
"кабыз",
"кавал",
"кавун",
"кагал",
"каган",
"кагат",
"кагор",
"кадак",
"кадар",
"кадзі",
"кадзь",
"кадка",
"кадкі",
"кадны",
"кадон",
"кадры",
"кадуб",
"кадук",
"кадык",
"кадыш",
"кадэт",
"каена",
"каены",
"кажан",
"кажны",
"кажух",
"казак",
"казан",
"казах",
"казік",
"казка",
"казкі",
"казлы",
"казна",
"казус",
"казёл",
"каікі",
"каіны",
"каіры",
"кайло",
"кайлы",
"кайма",
"каймы",
"кайнэ",
"кайра",
"кайры",
"кайты",
"кайфы",
"какет",
"какос",
"калаж",
"калам",
"калан",
"калач",
"калаш",
"калеж",
"калеі",
"калет",
"калій",
"каліт",
"каліф",
"калкі",
"калок",
"калом",
"калон",
"калос",
"калот",
"калун",
"калуп",
"калым",
"калье",
"кальц",
"калюк",
"калюр",
"каляі",
"каляя",
"калёр",
"калёш",
"камаз",
"камар",
"камаш",
"камеі",
"камея",
"камін",
"камкі",
"камлі",
"камок",
"кампы",
"камса",
"камуз",
"камэя",
"камяк",
"канал",
"канат",
"канва",
"кандэ",
"канец",
"канін",
"канка",
"канкі",
"канна",
"канны",
"канон",
"каноэ",
"канты",
"канун",
"канцы",
"канюк",
"канюх",
"канёк",
"каоны",
"капал",
"капар",
"капач",
"капеж",
"капер",
"капец",
"капір",
"капка",
"капкі",
"каплі",
"капля",
"капок",
"капот",
"капры",
"капун",
"капут",
"капцы",
"кап'ё",
"капыл",
"капыт",
"капёр",
"караб",
"карае",
"карак",
"карал",
"каран",
"карат",
"карая",
"карга",
"каргі",
"карда",
"каржы",
"каркі",
"карлы",
"карля",
"карлё",
"карма",
"кармы",
"карны",
"карпы",
"карст",
"карта",
"карты",
"карук",
"карцы",
"карчы",
"карыі",
"карыя",
"карэі",
"карэл",
"карэц",
"карэя",
"касач",
"касая",
"касец",
"касіі",
"касік",
"касір",
"касія",
"каска",
"каскі",
"касны",
"касое",
"кассі",
"кассё",
"каста",
"касты",
"касцы",
"касяк",
"катаў",
"катар",
"катах",
"каткі",
"катлы",
"катні",
"катод",
"каток",
"катул",
"катух",
"катэр",
"катэт",
"кафка",
"кафлі",
"кафля",
"кахля",
"кацап",
"кацін",
"кацёл",
"качан",
"качар",
"качка",
"качкі",
"качур",
"кашар",
"кашка",
"кашкі",
"кашлі",
"кашма",
"кашмы",
"кашнэ",
"кашпо",
"кашуб",
"каюкі",
"каюры",
"каюта",
"каюты",
"каякі",
"каёты",
"квага",
"квагі",
"квадр",
"квант",
"кварк",
"кварц",
"квасы",
"квачы",
"кветы",
"квізы",
"квіта",
"квіты",
"квокі",
"квола",
"кволы",
"квота",
"квоты",
"квэст",
"кебаб",
"кевін",
"кевір",
"кеглі",
"кегля",
"кедры",
"кезік",
"кейсы",
"кексы",
"кекур",
"келар",
"келба",
"келбы",
"келіх",
"келлі",
"келля",
"кельт",
"кембр",
"кемка",
"кемкі",
"кемна",
"кемны",
"кенар",
"кенаф",
"кендо",
"кеніі",
"кенія",
"кепік",
"кепка",
"кепкі",
"кербы",
"керны",
"керчы",
"кесар",
"кеска",
"кескі",
"кесон",
"кетка",
"кеткі",
"кетоз",
"кетон",
"кетчы",
"кетэн",
"кефір",
"кецка",
"кецкі",
"кечуа",
"кеш'ю",
"кіўкі",
"кібер",
"кібуц",
"ківер",
"ківок",
"ківор",
"ківот",
"кідас",
"кідзь",
"кідка",
"кідкі",
"кідок",
"кіевы",
"кізіл",
"кізяк",
"кійкі",
"кіксы",
"кілер",
"кілік",
"кілім",
"кілты",
"кілун",
"кімбр",
"кінгі",
"кінік",
"кінін",
"кіпер",
"кіпкі",
"кіпны",
"кіпры",
"кіпці",
"кірза",
"кірка",
"кіркі",
"кірпа",
"кірпы",
"кірха",
"кірхі",
"кірыл",
"кірыс",
"кірэй",
"кісет",
"кіска",
"кіскі",
"кісла",
"кіслы",
"кісля",
"кіста",
"кісты",
"кісці",
"кісць",
"кісяя",
"кітаб",
"кітаі",
"кітай",
"кітка",
"кіткі",
"кіфоз",
"кіхну",
"кіцка",
"кіцкі",
"кічка",
"кічкі",
"кішка",
"кішкі",
"кішма",
"кіюга",
"кіянг",
"кіяхі",
"кіёвы",
"кіёск",
"клава",
"клавы",
"клады",
"клака",
"клакі",
"кланы",
"клапы",
"клара",
"кларк",
"клары",
"класы",
"клаус",
"клема",
"клемы",
"клерк",
"клеры",
"клефт",
"клеці",
"клецк",
"клець",
"клешч",
"кліба",
"клібы",
"кліка",
"клікі",
"клімы",
"клінч",
"кліны",
"кліпс",
"кліпы",
"кліры",
"кліфы",
"клічы",
"клішэ",
"клоўн",
"клоны",
"клопс",
"клоун",
"клубы",
"клумы",
"клуні",
"клуня",
"клупы",
"клыкі",
"клэбы",
"клюбы",
"клюзы",
"ключы",
"кляас",
"кляны",
"кляпы",
"кляса",
"кляск",
"клясь",
"кляты",
"кляцы",
"кляча",
"клячы",
"клёвы",
"клёкі",
"клёны",
"клёпы",
"кмены",
"кметы",
"кмеці",
"кмець",
"кнары",
"кнаты",
"кнехт",
"кніга",
"кнігі",
"кніца",
"кніцы",
"кнопы",
"кноты",
"кнура",
"кныры",
"кнэлі",
"кнэль",
"княжы",
"князі",
"князь",
"коўба",
"коўзь",
"коўка",
"коўкі",
"коўна",
"коўны",
"коўхі",
"коўчы",
"кобза",
"кобзы",
"кобра",
"кобры",
"кобыз",
"когіі",
"когія",
"кодаб",
"кодак",
"кодар",
"кодла",
"кодлы",
"кодэк",
"кодэр",
"кожны",
"кожын",
"козка",
"козкі",
"козлы",
"козыр",
"козыт",
"койка",
"койкі",
"коймы",
"койры",
"кокан",
"кокат",
"коксы",
"колам",
"колар",
"колас",
"колат",
"колба",
"колбы",
"колер",
"колік",
"колін",
"колка",
"колкі",
"колле",
"коллі",
"колты",
"колца",
"колцы",
"кольт",
"комік",
"комін",
"комля",
"конга",
"конік",
"конка",
"конкі",
"конна",
"конны",
"конта",
"конус",
"конха",
"конча",
"конюх",
"копаш",
"копіі",
"копія",
"копка",
"копкі",
"копра",
"копул",
"копша",
"коп'і",
"кораб",
"корак",
"кораш",
"корба",
"корбы",
"коргі",
"корда",
"корды",
"корка",
"коркі",
"кормы",
"корны",
"корты",
"корхі",
"корці",
"корць",
"косаў",
"косае",
"косая",
"коска",
"коскі",
"косма",
"космы",
"косна",
"косны",
"коссі",
"косці",
"косць",
"котка",
"коткі",
"котла",
"котлы",
"котра",
"кофры",
"кофта",
"кофты",
"кохта",
"кохты",
"коцік",
"коцык",
"кочат",
"кошар",
"кошка",
"кошкі",
"кошмы",
"кошты",
"кошык",
"кошэр",
"кпіны",
"кпіць",
"крабы",
"крага",
"крагі",
"краец",
"кража",
"кражы",
"кракі",
"кралі",
"краля",
"крама",
"крамы",
"крант",
"краны",
"крапы",
"краса",
"крата",
"краты",
"крахі",
"крашэ",
"краёк",
"кроза",
"крозы",
"крокі",
"кроль",
"крона",
"кроны",
"кропы",
"кросы",
"крота",
"кроты",
"кроху",
"кроць",
"круга",
"кругі",
"круіз",
"крукі",
"крупы",
"крута",
"круты",
"круць",
"круча",
"кручы",
"крыва",
"крывы",
"крыга",
"крыгі",
"крыжы",
"крыза",
"крызы",
"крыкі",
"крыло",
"крылы",
"крыль",
"крымы",
"крыпт",
"крысо",
"крысы",
"крыты",
"крыха",
"крыху",
"крыца",
"крыцы",
"крыць",
"крышы",
"крэўе",
"крэўі",
"крэда",
"крэзы",
"крэйг",
"крэкт",
"крэмы",
"крэны",
"крэол",
"крэпы",
"крэсы",
"крэхт",
"ксюша",
"ксюшы",
"кубак",
"кубан",
"кубар",
"кубел",
"кубік",
"кубіч",
"кубкі",
"кубла",
"кублы",
"кувез",
"кудла",
"кудлы",
"кудой",
"кудра",
"кудры",
"кужлі",
"кузаў",
"кузні",
"кузня",
"кузоб",
"кузэн",
"кукан",
"кукіш",
"кукла",
"куклы",
"кукса",
"куксы",
"кулаж",
"кулак",
"кулан",
"кулем",
"кулер",
"кулеш",
"кулік",
"куліч",
"кулон",
"кульм",
"культ",
"куляй",
"кулёк",
"кулём",
"кулён",
"кумач",
"кумжа",
"кумжы",
"кумір",
"кумка",
"кумкі",
"кумок",
"кумол",
"кумык",
"кумыс",
"кунак",
"купаж",
"купал",
"купец",
"купка",
"купкі",
"купля",
"купны",
"купон",
"купцы",
"купчы",
"куп'е",
"куп'і",
"куп'ё",
"кураж",
"кураі",
"курай",
"курак",
"курас",
"курач",
"курва",
"курвы",
"курды",
"курка",
"куркі",
"курна",
"курны",
"курок",
"курск",
"курсы",
"курта",
"курты",
"куруш",
"курцы",
"курча",
"курчы",
"курыі",
"курыя",
"курэц",
"кускі",
"кусок",
"кусты",
"кусце",
"кусці",
"кутае",
"кутас",
"кутая",
"куткі",
"кутні",
"кутня",
"куток",
"кутум",
"куфар",
"куфіі",
"куфія",
"куфлі",
"куфры",
"кухан",
"кухар",
"кухва",
"кухлі",
"кухні",
"кухня",
"куцае",
"куцая",
"куцка",
"куцкі",
"куцця",
"куцюм",
"куцюр",
"кучар",
"кучка",
"кучкі",
"кучма",
"кучмы",
"кучна",
"кучны",
"кхмер",
"кшэнь",
"к'яты",
"кызыл",
"кювет",
"кюлот",
"кюрыі",
"кюрый",
"кярыз",
"кёльн",
"лаўжы",
"лаўка",
"лаўкі",
"лаўны",
"лаўра",
"лаўры",
"лаўцы",
"лабаз",
"лабак",
"лабан",
"лабар",
"лабач",
"лабкі",
"лабок",
"лабяк",
"лаваш",
"лавец",
"лавіс",
"лавэр",
"лагво",
"лагер",
"лагін",
"ладам",
"ладан",
"ладка",
"ладкі",
"ладна",
"ладны",
"ладэн",
"лажкі",
"лажны",
"лажня",
"лажок",
"лазар",
"лазер",
"лазка",
"лазкі",
"лазні",
"лазны",
"лазня",
"лазун",
"лазур",
"лазэр",
"лайба",
"лайбы",
"лайка",
"лайкі",
"лаймы",
"лайно",
"лакеі",
"лакей",
"лакцы",
"ламер",
"ламок",
"ламут",
"лам'ё",
"ландо",
"ланды",
"ланін",
"ланка",
"ланкі",
"ланчы",
"лаосы",
"лапар",
"лапік",
"лапка",
"лапкі",
"лапны",
"лапта",
"лапты",
"лапун",
"лапух",
"лапці",
"ларва",
"ларвы",
"ларга",
"ларкі",
"ларок",
"ласае",
"ласая",
"ласік",
"ласка",
"ласкі",
"ласне",
"ласны",
"ласта",
"ласты",
"ласун",
"латак",
"латва",
"латвы",
"латка",
"латкі",
"латны",
"латок",
"латук",
"латыш",
"лафет",
"лафіт",
"лахва",
"лахта",
"лацін",
"лацно",
"лацыа",
"лацыё",
"лачка",
"лачкі",
"лашак",
"лаяны",
"лаяць",
"лаёвы",
"лгаць",
"лгуны",
"лгуха",
"лгухі",
"леўка",
"леўкі",
"левае",
"левая",
"левіт",
"легат",
"леглы",
"легма",
"легчы",
"ледзь",
"лееры",
"лежка",
"лежкі",
"лежма",
"лежні",
"лежня",
"лезці",
"лейбл",
"лейка",
"лейкі",
"лейцы",
"лекаж",
"лекар",
"лекіф",
"лемеш",
"лемны",
"лемур",
"ленае",
"ленан",
"леная",
"ленін",
"ленны",
"лента",
"ленты",
"ленчы",
"леоны",
"лепей",
"лепет",
"лепка",
"лепкі",
"лепра",
"лепта",
"лепты",
"лепшы",
"лерка",
"леркі",
"лерны",
"лесік",
"леска",
"лескі",
"лесны",
"летам",
"летка",
"летні",
"летны",
"лешка",
"лешкі",
"леэда",
"лжыва",
"лжывы",
"ліўні",
"ліўры",
"лібан",
"ліван",
"лівар",
"лівер",
"лівіі",
"лівія",
"лідар",
"лідэр",
"лізат",
"лізін",
"лізіс",
"лізол",
"лізун",
"лікам",
"лікод",
"лікёр",
"лілеі",
"лілея",
"ліліі",
"лілія",
"ліман",
"лімар",
"лімбы",
"лімес",
"ліміт",
"лімон",
"лімфа",
"лінда",
"лінды",
"лінеі",
"лінея",
"лінза",
"лінзы",
"лініі",
"лінія",
"лінкі",
"лінны",
"лінус",
"лінцы",
"лінчы",
"лінёк",
"ліпец",
"ліпід",
"ліпіі",
"ліпія",
"ліпка",
"ліпкі",
"ліпля",
"ліпсі",
"лірны",
"лірык",
"лісам",
"ліска",
"ліскі",
"лісты",
"лісце",
"лісці",
"лісцё",
"літае",
"літар",
"літая",
"літва",
"літвы",
"літка",
"літкі",
"літры",
"літый",
"літыя",
"ліфны",
"ліфты",
"ліхач",
"ліхая",
"ліхое",
"ліцер",
"ліцца",
"ліццё",
"ліцэі",
"ліцэй",
"лічба",
"лічбы",
"лішаі",
"лішай",
"лішак",
"лішка",
"лішкі",
"лішне",
"лішні",
"ліюць",
"ліяза",
"ліязы",
"ліяла",
"ліялы",
"ліяна",
"ліяны",
"ліяце",
"ліёны",
"лксмб",
"лоўка",
"лоўкі",
"лоўля",
"лоўчы",
"лобіі",
"лобік",
"лобія",
"лобны",
"логас",
"логва",
"логер",
"логік",
"лодар",
"лодзі",
"лодзь",
"лодка",
"лодкі",
"лоевы",
"ложак",
"ложка",
"ложкі",
"лозны",
"лойны",
"локан",
"локус",
"локці",
"ломік",
"ломка",
"ломкі",
"лонжа",
"лонжы",
"лонны",
"лопар",
"лопат",
"лопух",
"лорды",
"лоскі",
"лотак",
"лотар",
"лотас",
"лотра",
"лотры",
"лоцыі",
"лоцыя",
"луўры",
"луара",
"луары",
"лубін",
"лубка",
"лубкі",
"лубок",
"лудыт",
"лужкі",
"лужны",
"лужок",
"лузан",
"лузга",
"лузны",
"луісы",
"лукас",
"лукаш",
"лукін",
"лумпы",
"луніт",
"лунка",
"лункі",
"лупан",
"лупеж",
"лупка",
"лупкі",
"луска",
"луста",
"лусты",
"лутка",
"луткі",
"лухта",
"луцік",
"луцкі",
"луцце",
"луцці",
"луцэя",
"лучак",
"лучка",
"лучкі",
"лучны",
"лучок",
"лыжка",
"лыжкі",
"лыжні",
"лыжны",
"лыжня",
"лыкус",
"лынды",
"лысае",
"лысая",
"лысік",
"лыска",
"лысун",
"лысяк",
"лытка",
"лыткі",
"лычка",
"лычкі",
"лычык",
"львоў",
"льежы",
"льлем",
"льлеш",
"льюіс",
"льюкс",
"лэўты",
"лэдзі",
"лэйбл",
"люара",
"любае",
"любая",
"любей",
"любек",
"любка",
"любкі",
"любоў",
"любое",
"любуж",
"любча",
"любчы",
"лювэн",
"люгер",
"людзі",
"людна",
"людны",
"людцы",
"людчы",
"люісы",
"люксы",
"люмен",
"люнет",
"люпус",
"люсіі",
"люсія",
"люстр",
"лютае",
"лютак",
"лютар",
"лютая",
"лютва",
"лютвы",
"лютні",
"лютня",
"лютэр",
"люфты",
"люхта",
"люхты",
"люцік",
"люцыя",
"люшка",
"люэсы",
"ляўша",
"ляўшы",
"лявак",
"лявон",
"лягер",
"лядаш",
"лядны",
"лядок",
"лядыш",
"ляжак",
"ляжка",
"ляжкі",
"ляжня",
"лязгі",
"лякса",
"лялея",
"ляляк",
"лямец",
"лямеш",
"лямка",
"лямкі",
"лямпа",
"лямпы",
"лямус",
"лямці",
"лямця",
"ляная",
"ляное",
"лянок",
"ляпей",
"ляпіс",
"ляпны",
"лярва",
"лярды",
"ляска",
"ляскі",
"лясны",
"лясок",
"лясун",
"ляткі",
"ляток",
"лятун",
"ляшка",
"ляшкі",
"ляшчы",
"лёвэн",
"лёгка",
"лёгкі",
"лёдзя",
"лёжка",
"лёжкі",
"лёзна",
"лёзны",
"лёкаі",
"лёкай",
"лёкат",
"лёкса",
"лёнік",
"лёсае",
"лёсая",
"лёсік",
"лёска",
"лёскі",
"лёсны",
"лётам",
"лётка",
"лёткі",
"лётма",
"лётны",
"маўка",
"маўкі",
"маўра",
"маўры",
"маўсы",
"маары",
"маасы",
"магар",
"магда",
"магіі",
"магія",
"маглі",
"магма",
"магог",
"магот",
"магут",
"магчы",
"мадам",
"мадыі",
"мадыя",
"мадэм",
"маемы",
"мажны",
"мажор",
"мажся",
"мазгі",
"мазда",
"мазды",
"мазер",
"мазка",
"мазкі",
"мазня",
"мазок",
"мазур",
"мазут",
"мазыр",
"маісы",
"маіць",
"майка",
"майкі",
"майкл",
"майлз",
"майна",
"макаа",
"макао",
"макар",
"макей",
"макет",
"макіі",
"макія",
"маком",
"макош",
"максі",
"максы",
"малах",
"малая",
"малец",
"малка",
"малкі",
"мална",
"малое",
"малох",
"малпа",
"малпы",
"малыш",
"мальм",
"маляр",
"малёк",
"мамаі",
"мамай",
"мамін",
"мамка",
"мамкі",
"манап",
"манар",
"манах",
"манга",
"манеж",
"манер",
"маніі",
"маніт",
"манія",
"манка",
"манкі",
"манна",
"манны",
"маном",
"мансі",
"мансы",
"манто",
"манту",
"манул",
"маоры",
"мапед",
"марак",
"марал",
"марат",
"марац",
"маргі",
"маржа",
"маржы",
"марка",
"маркі",
"маркс",
"марля",
"марна",
"марны",
"мароз",
"марсы",
"марта",
"марты",
"марук",
"марфа",
"марфы",
"маршы",
"мар'я",
"марыі",
"марык",
"марыя",
"марыё",
"марэі",
"марэя",
"масаж",
"масей",
"масіў",
"маска",
"маскі",
"масла",
"маслы",
"маснэ",
"масон",
"масты",
"масці",
"масць",
"масье",
"матка",
"маткі",
"матні",
"матня",
"маток",
"матор",
"матуз",
"матчы",
"мат'е",
"мат'ё",
"матыў",
"мафет",
"мафіі",
"мафія",
"мафор",
"махам",
"махер",
"махір",
"махор",
"махра",
"махры",
"мацак",
"мацей",
"мацца",
"мацюк",
"мачта",
"мачты",
"машна",
"машны",
"машня",
"машок",
"маюць",
"маякі",
"маямі",
"маёвы",
"маёры",
"маёта",
"маёты",
"мбайт",
"мегом",
"медзь",
"медны",
"медык",
"медыя",
"межны",
"мезон",
"мелае",
"мелас",
"мелая",
"мелес",
"мелет",
"меліі",
"меліс",
"мелія",
"мелка",
"мелкі",
"меней",
"менка",
"менкі",
"менне",
"менні",
"менск",
"меншы",
"меозы",
"мерка",
"меркі",
"мерна",
"мерны",
"мерсі",
"мерсы",
"мерці",
"мерын",
"мерэі",
"мерэя",
"месер",
"месіі",
"месік",
"месір",
"месія",
"мескі",
"месны",
"места",
"месты",
"месца",
"месці",
"месцы",
"месяц",
"метад",
"метал",
"метан",
"метка",
"меткі",
"метны",
"метол",
"метоп",
"метро",
"метры",
"метыз",
"метыл",
"метыс",
"мецца",
"мечка",
"мечны",
"мечык",
"мжыць",
"мігам",
"мідзі",
"мідыі",
"мідыя",
"мізэр",
"мікаш",
"мікоз",
"мікст",
"мілае",
"мілан",
"мілаш",
"мілая",
"мілер",
"мілка",
"мілкі",
"мілок",
"мілон",
"мінай",
"мінеі",
"мінет",
"мінея",
"мінін",
"мінка",
"мінкі",
"мінны",
"мінор",
"мінск",
"мінус",
"мінёр",
"міраб",
"міраж",
"мірза",
"мірзы",
"мірна",
"мірны",
"мірон",
"мірра",
"мірты",
"мірук",
"місал",
"місіі",
"місіс",
"місія",
"міска",
"міскі",
"мітоз",
"мітра",
"мітры",
"мітух",
"міхал",
"міхед",
"міхей",
"міхна",
"мішка",
"мішкі",
"міёзы",
"міёма",
"міёмы",
"міёры",
"мкаць",
"млелы",
"млеты",
"млець",
"мліва",
"млівы",
"млыны",
"млява",
"млявы",
"млёны",
"мніхі",
"многа",
"многі",
"моўна",
"моўны",
"мобер",
"могул",
"модлы",
"модна",
"модны",
"модус",
"можна",
"можны",
"мозаг",
"мозак",
"мойва",
"мойра",
"мойры",
"мокік",
"мокра",
"мокры",
"мокша",
"молат",
"молем",
"молка",
"моляс",
"мопса",
"мопсы",
"морак",
"морва",
"моргі",
"морда",
"морды",
"морзе",
"морзы",
"морзэ",
"морсы",
"морфа",
"морфы",
"мосць",
"мотуз",
"моцна",
"моцны",
"мочка",
"мочкі",
"мошка",
"мошкі",
"мошчы",
"мрокі",
"муары",
"мугам",
"мудак",
"мудра",
"мудры",
"мудур",
"мужаў",
"мужна",
"мужні",
"мужны",
"мужык",
"музеі",
"музей",
"музэй",
"мулат",
"муліт",
"мулка",
"мулкі",
"мулле",
"муллі",
"мульт",
"муляж",
"муляр",
"муміі",
"мумія",
"муміё",
"муніт",
"мураш",
"мурза",
"мурзы",
"мурка",
"муркі",
"мурло",
"мурлы",
"мурог",
"мурцы",
"мурын",
"мурэі",
"мурэй",
"мусон",
"мусты",
"мутар",
"мутна",
"мутны",
"мутня",
"мутон",
"муфта",
"муфты",
"муцын",
"мучан",
"мучны",
"мушка",
"мушкі",
"мшаны",
"мшары",
"м'боў",
"мызны",
"мыйка",
"мыйкі",
"мыйні",
"мыйны",
"мыйня",
"мылец",
"мылкі",
"мымра",
"мымры",
"мысік",
"мыска",
"мыскі",
"мыслі",
"мысль",
"мысок",
"мытае",
"мытар",
"мытая",
"мытні",
"мытны",
"мытня",
"мыцка",
"мыцкі",
"мыцца",
"мыццё",
"мычка",
"мычкі",
"мышак",
"мышка",
"мышкі",
"мышца",
"мышцы",
"мэбля",
"мэдык",
"мэдыя",
"мэдэў",
"мэйер",
"мэлан",
"мэрам",
"мэрон",
"мэрфі",
"мэрыі",
"мэрыя",
"мэтал",
"мэтар",
"мэтро",
"мэтры",
"мэт'ю",
"мэтыс",
"мэцца",
"мюзет",
"мюіды",
"мюлер",
"мюоны",
"мюрыд",
"мюслі",
"мядок",
"мязга",
"мякаш",
"мякіш",
"мякка",
"мяккі",
"мякуш",
"мялга",
"мялет",
"мялка",
"мялкі",
"мялле",
"мяллі",
"мялён",
"мямлі",
"мямля",
"мянты",
"мянёк",
"мяска",
"мясны",
"мясці",
"мятае",
"мятая",
"мятка",
"мяткі",
"мятла",
"мятлы",
"мятны",
"мяфёд",
"мяхед",
"мяцеж",
"мяцца",
"мячык",
"мяшкі",
"мяшок",
"мяшэй",
"мёдны",
"мётлы",
"мётча",
"наўда",
"наўды",
"наўме",
"наўра",
"наасы",
"набак",
"набат",
"набег",
"набоб",
"набоі",
"набой",
"набок",
"набор",
"навак",
"навал",
"навар",
"нават",
"навеў",
"навек",
"навес",
"навет",
"навея",
"навод",
"навоі",
"навой",
"навум",
"навык",
"наган",
"нагар",
"нагін",
"нагла",
"наглы",
"нагон",
"нагул",
"надар",
"надзі",
"надзя",
"надоі",
"надой",
"надта",
"надты",
"надум",
"наеда",
"наезд",
"наеты",
"нажны",
"нажын",
"назад",
"назар",
"назва",
"назвы",
"назло",
"назоў",
"назор",
"наібы",
"наівы",
"наймы",
"наказ",
"накал",
"накат",
"накід",
"накіп",
"накол",
"накос",
"накуп",
"наліў",
"налік",
"налле",
"наллі",
"налог",
"налом",
"налёт",
"намад",
"намаз",
"намер",
"наміб",
"намоў",
"намол",
"намул",
"намыў",
"намёк",
"намёт",
"нанач",
"нанду",
"нанет",
"нанка",
"нанкі",
"нанос",
"напад",
"напал",
"напас",
"напеў",
"напіс",
"напоі",
"напой",
"напор",
"напса",
"нарад",
"нарап",
"нарач",
"нарва",
"нарвы",
"нарды",
"нарог",
"народ",
"нарок",
"нарта",
"нарты",
"нарыў",
"нарыс",
"нарыт",
"нарэз",
"насар",
"насау",
"насач",
"насіл",
"наскі",
"насоў",
"насок",
"насос",
"наспа",
"наста",
"насці",
"насця",
"насып",
"натан",
"натар",
"натры",
"натха",
"науру",
"нафта",
"нахіл",
"наход",
"націн",
"нацкі",
"нацыі",
"нацыя",
"нацёк",
"начны",
"начос",
"нашае",
"нашая",
"нашто",
"нашча",
"нашчы",
"наяве",
"наяву",
"наяда",
"наяды",
"наёны",
"неўда",
"небны",
"небыт",
"невад",
"невіс",
"невук",
"невус",
"негры",
"негус",
"недзе",
"нежын",
"незла",
"незлы",
"нейкі",
"нейлы",
"нейчы",
"некае",
"некая",
"нелад",
"нелюб",
"немае",
"немач",
"немая",
"немец",
"немка",
"немкі",
"немцы",
"ненец",
"неніі",
"ненія",
"ненка",
"ненкі",
"ненцы",
"неоны",
"непал",
"нераб",
"нерат",
"нервы",
"нерка",
"неркі",
"нерол",
"нерпа",
"нерпы",
"нерух",
"неруш",
"несіл",
"неслы",
"несці",
"нетра",
"нетры",
"нехта",
"нечае",
"нечая",
"нешта",
"неякі",
"ніўка",
"ніўкі",
"ніўны",
"ніўхі",
"нівоз",
"нігер",
"нідзе",
"ніжай",
"ніжні",
"ніжшы",
"ніжэй",
"нізам",
"нізка",
"нізкі",
"ніклы",
"нілот",
"німбы",
"німфа",
"німфы",
"нісан",
"нітка",
"ніткі",
"нітон",
"ніхто",
"ніцае",
"ніцам",
"ніцая",
"ніцкі",
"ніцма",
"ніцца",
"ніцшэ",
"нічые",
"нічый",
"нічыя",
"нічыё",
"нішто",
"ніякі",
"ннець",
"ноўшы",
"новае",
"новая",
"ногці",
"ноева",
"ножка",
"ножкі",
"ножны",
"ножык",
"нораў",
"норат",
"норды",
"норка",
"норкі",
"норма",
"нормы",
"норны",
"норты",
"норыі",
"норыя",
"носар",
"носік",
"носка",
"носкі",
"нотка",
"ноткі",
"нотны",
"нотыс",
"ночвы",
"ночка",
"ночкі",
"ночны",
"ноччу",
"ношка",
"ношкі",
"нубук",
"нудна",
"нудны",
"нулік",
"нумар",
"нумеа",
"нутка",
"нутро",
"нырка",
"ныркі",
"нырок",
"нырцы",
"нырэц",
"ныцік",
"ныццё",
"нычка",
"нычкі",
"ныючы",
"ньяса",
"нэдны",
"нэнсі",
"нэпал",
"нэрва",
"нэрвы",
"нэрпа",
"нэцке",
"нюанс",
"нюшок",
"няўго",
"няўжо",
"нябог",
"нябож",
"нябыт",
"нягож",
"нязлы",
"нялад",
"нямаш",
"нямая",
"нямкі",
"нямко",
"нямое",
"нярад",
"нясіл",
"нясун",
"няхай",
"няцца",
"нёман",
"нётэр",
"обалі",
"обаль",
"обдым",
"оберы",
"обскі",
"оганы",
"одумы",
"одэры",
"ойчыч",
"окаць",
"оксер",
"окскі",
"оланд",
"олеум",
"омскі",
"омулі",
"омуль",
"онікс",
"онімы",
"опелі",
"опель",
"опера",
"оперы",
"опіум",
"оптам",
"оптык",
"опусы",
"опцыі",
"опцыя",
"оракі",
"орачы",
"орган",
"оргіі",
"оргія",
"ордар",
"ордэн",
"ордэр",
"орскі",
"орфік",
"орыкс",
"оскар",
"осмас",
"осмій",
"отрак",
"офісы",
"охаць",
"ошскі",
"о'ніл",
"паўза",
"паўзы",
"паўла",
"паўлы",
"паўль",
"паўшы",
"паўэл",
"паўэр",
"паўют",
"пабел",
"пабоі",
"пабор",
"павал",
"павеў",
"павеі",
"павек",
"павел",
"павер",
"павет",
"павея",
"павоі",
"павой",
"павук",
"павыш",
"паган",
"пагон",
"падзь",
"падкі",
"падла",
"падлі",
"падлы",
"падол",
"падуб",
"паеды",
"пажар",
"пазем",
"пазлы",
"пазоў",
"пазор",
"пазур",
"пазыў",
"пазэр",
"пазёр",
"паіць",
"пайка",
"пайкі",
"пайці",
"паказ",
"пакат",
"пакер",
"пакет",
"пакля",
"пакоі",
"пакой",
"пакон",
"пакос",
"пакот",
"пакты",
"пакус",
"палаб",
"палас",
"палау",
"палац",
"палаш",
"палеі",
"палер",
"палет",
"палех",
"палец",
"палея",
"паліў",
"палік",
"паліп",
"палір",
"палка",
"палкі",
"палмы",
"палоў",
"палог",
"палой",
"палок",
"палом",
"палон",
"палын",
"палюк",
"паляк",
"паляя",
"палёт",
"памаз",
"памен",
"памер",
"паміж",
"памін",
"памір",
"памол",
"памор",
"пампа",
"пампы",
"памыі",
"памёт",
"панас",
"панда",
"панды",
"панер",
"паніч",
"панкі",
"панна",
"панны",
"панок",
"панос",
"панты",
"панур",
"панус",
"панюх",
"папар",
"папас",
"папая",
"папка",
"папкі",
"папоў",
"папса",
"парад",
"парам",
"параф",
"парка",
"паркі",
"парна",
"парны",
"парог",
"парок",
"паром",
"парою",
"парта",
"парты",
"паруб",
"парус",
"пархі",
"парча",
"парша",
"паршэ",
"парыў",
"парыж",
"парыі",
"парык",
"парыс",
"парыя",
"парэа",
"парэз",
"парэй",
"пасаг",
"пасад",
"пасаж",
"пасак",
"пасам",
"пасат",
"пасеў",
"пасіў",
"пасіі",
"пасія",
"паска",
"паскі",
"паслы",
"пасля",
"пасма",
"пасмы",
"пасол",
"паста",
"пасты",
"пасул",
"пасха",
"пасхі",
"пасці",
"пасыл",
"патап",
"патар",
"патас",
"паташ",
"патлы",
"паток",
"патоп",
"патчы",
"патэр",
"паулі",
"пауль",
"пафас",
"пахва",
"пахіл",
"пахкі",
"пахлы",
"пахно",
"пахны",
"пахоў",
"паход",
"пахоп",
"пацер",
"пацір",
"пацук",
"пацяг",
"пацёк",
"пачак",
"пачка",
"пачкі",
"пачым",
"пачын",
"пашны",
"пашча",
"пашчу",
"пашчы",
"пашыў",
"паэма",
"паэмы",
"паэты",
"паюсы",
"паявы",
"паязд",
"паяны",
"паясы",
"паяцы",
"паяць",
"паёвы",
"паёлы",
"пеўні",
"пеўчы",
"пеаны",
"пегас",
"педык",
"пекан",
"пекар",
"пекін",
"пекла",
"пеклы",
"пекна",
"пекны",
"пекур",
"пекчы",
"пеліі",
"пеліт",
"пелія",
"пемза",
"пенал",
"пенза",
"пензы",
"пеніс",
"пенка",
"пенкі",
"пенны",
"пенсы",
"пеоны",
"пепін",
"пепсі",
"перад",
"перак",
"перац",
"перлы",
"пермі",
"перон",
"персі",
"персы",
"перца",
"перці",
"перцы",
"першы",
"пер'е",
"пер'і",
"песак",
"песні",
"песня",
"песта",
"песты",
"петае",
"петая",
"петлі",
"петыт",
"пецік",
"пецца",
"печая",
"печка",
"печкі",
"печны",
"пешае",
"пешая",
"пешка",
"пешкі",
"пешні",
"пешня",
"пешшу",
"пеюны",
"піўко",
"піўны",
"піўцо",
"підар",
"піжма",
"піжон",
"пізда",
"пізды",
"пікап",
"пікар",
"пікет",
"пікта",
"пікты",
"пікша",
"пікшы",
"піліп",
"пілка",
"пілкі",
"пілон",
"пілот",
"пінгі",
"пінда",
"пінен",
"пініі",
"пінія",
"пінка",
"пінкі",
"пінск",
"пінта",
"пінты",
"піоны",
"піпка",
"піпкі",
"піраў",
"піран",
"пірат",
"пірке",
"пірог",
"пірол",
"пірон",
"піроп",
"пірсы",
"пірыт",
"пісаг",
"пісар",
"пісец",
"піскі",
"пісуг",
"пісцы",
"пісчы",
"пісяг",
"пітае",
"пітая",
"пітво",
"піткі",
"пітны",
"піток",
"пітон",
"піфас",
"піфіі",
"піфія",
"піхам",
"піхта",
"піхты",
"піцер",
"піцца",
"піццё",
"піяла",
"піялы",
"піяна",
"піяры",
"плавы",
"плады",
"плазы",
"плакі",
"планы",
"пласт",
"плата",
"плато",
"платы",
"плаха",
"плахі",
"плачы",
"плашч",
"плебс",
"плевы",
"пледы",
"племя",
"плесь",
"плехі",
"плеці",
"плець",
"плечы",
"плешы",
"плінт",
"пліса",
"плісы",
"плісь",
"плісэ",
"пліта",
"пліты",
"пліца",
"пліцы",
"пловы",
"плоцк",
"плоць",
"плугі",
"плывы",
"плыні",
"плынь",
"плыты",
"плыць",
"плэер",
"плюры",
"плюск",
"плюсы",
"плюсь",
"плюта",
"плюты",
"плюха",
"плюшч",
"плюшы",
"плява",
"плявы",
"пляга",
"пляжы",
"пляма",
"плямы",
"пляск",
"плясь",
"пляха",
"пляцы",
"плячо",
"плячы",
"плёвы",
"плёны",
"плёск",
"плёсы",
"плёсь",
"плёты",
"пнеўе",
"пнеўі",
"пнуць",
"пнёўе",
"пнёвы",
"поўна",
"поўны",
"поўня",
"поўха",
"поўхі",
"побач",
"побер",
"побыт",
"повад",
"повар",
"погуд",
"погук",
"подка",
"подкі",
"подла",
"подле",
"подлы",
"подум",
"подыі",
"подый",
"подых",
"поезд",
"поены",
"пожаг",
"пожар",
"пожня",
"пожыў",
"позва",
"позвы",
"позех",
"позна",
"позні",
"позны",
"позыў",
"поіва",
"поівы",
"пойла",
"пойлы",
"пойма",
"поймы",
"покае",
"покат",
"покер",
"покус",
"покут",
"полаг",
"полае",
"полаз",
"полак",
"полах",
"полая",
"полба",
"поліз",
"полік",
"поліс",
"полка",
"полкі",
"полуг",
"полым",
"полюс",
"помаз",
"помак",
"помач",
"помеж",
"поміж",
"помны",
"помпа",
"помпы",
"помут",
"понаж",
"понча",
"понюх",
"попад",
"попел",
"попік",
"попіс",
"попка",
"попкі",
"попыт",
"порах",
"порва",
"порка",
"поркі",
"порна",
"порск",
"порсь",
"порта",
"порту",
"порты",
"поруб",
"поруч",
"поршы",
"посах",
"посік",
"после",
"посны",
"посуд",
"посул",
"потай",
"потка",
"поткі",
"потны",
"потым",
"потых",
"потэр",
"похва",
"похвы",
"поцек",
"поцем",
"поцяг",
"почап",
"почат",
"почка",
"почкі",
"почуў",
"почут",
"пошар",
"пошла",
"пошлы",
"пошта",
"пошты",
"пошуг",
"пошук",
"пошум",
"поясы",
"права",
"правы",
"прага",
"прагі",
"прада",
"пража",
"прайд",
"прайс",
"пралі",
"праля",
"прама",
"прамы",
"прана",
"прант",
"праны",
"прасы",
"прахі",
"праца",
"працы",
"праць",
"праём",
"проба",
"пробы",
"прога",
"прогі",
"проза",
"прозы",
"проні",
"проня",
"проса",
"прост",
"прося",
"профі",
"проці",
"проць",
"проша",
"пруга",
"пругі",
"пруды",
"прусы",
"пруты",
"прыап",
"прыды",
"прызы",
"прыма",
"прымы",
"прынт",
"прынц",
"прыпы",
"прысы",
"прычт",
"прышч",
"прыём",
"прыёр",
"прэлы",
"прэль",
"прэнт",
"прэса",
"прэсы",
"прэць",
"псама",
"псамы",
"пселы",
"псець",
"псіна",
"псіны",
"псіхі",
"псіца",
"пскоў",
"псовы",
"псота",
"псоты",
"псута",
"псуты",
"псуць",
"псюкі",
"псяры",
"псёль",
"птаха",
"птахі",
"птахы",
"пташы",
"птозы",
"пуазы",
"пуант",
"пугач",
"пудка",
"пудкі",
"пудла",
"пудлы",
"пудра",
"пужка",
"пужкі",
"пузан",
"пузач",
"пузыр",
"пукае",
"пульс",
"пульт",
"пункт",
"пуншы",
"пупік",
"пупкі",
"пупны",
"пупок",
"пупсы",
"пурга",
"пурын",
"пускі",
"пуста",
"пусты",
"путны",
"путра",
"путчы",
"пуфік",
"пухір",
"пухкі",
"пухлы",
"пухно",
"пухці",
"пуцік",
"пуцін",
"пуцык",
"пучкі",
"пучок",
"пушка",
"пушкі",
"пушны",
"пушок",
"пушта",
"пушту",
"пушча",
"пушчы",
"пханы",
"пхаць",
"пцелы",
"пцець",
"пцічы",
"пчала",
"пчалы",
"пчолы",
"пшыкі",
"пшэкі",
"п'еза",
"п'езы",
"п'еро",
"п'еса",
"п'есы",
"п'ета",
"п'яны",
"пыжык",
"пылкі",
"пылок",
"пыпла",
"пыплы",
"пыпля",
"пырка",
"пыркі",
"пырсь",
"пысін",
"пыска",
"пыскі",
"пытлі",
"пыхкі",
"пыцік",
"пыцкі",
"пышка",
"пышкі",
"пышна",
"пышны",
"пэўна",
"пэўне",
"пэўны",
"пэвен",
"пэйдж",
"пэйса",
"пэйсы",
"пэкін",
"пэнге",
"пэрла",
"пэрлы",
"пявун",
"пядзі",
"пядзя",
"пялёх",
"пянне",
"пянні",
"пянёк",
"пярга",
"пярун",
"пясец",
"пяскі",
"пясок",
"пясці",
"пясцы",
"пясць",
"пятае",
"пятак",
"пятая",
"пятка",
"пяткі",
"пятлі",
"пятля",
"пятны",
"пяток",
"пятра",
"пятро",
"пятры",
"пятыя",
"пяцца",
"пячая",
"пячны",
"пяюха",
"пяюхі",
"пяяць",
"пёкма",
"пёрка",
"пёркі",
"пёрці",
"пётар",
"пётра",
"пётры",
"раўкі",
"раўнд",
"раўня",
"раўты",
"раўці",
"рабак",
"рабат",
"рабая",
"рабец",
"рабік",
"рабін",
"рабое",
"рабой",
"рабок",
"рабро",
"рабры",
"равок",
"равун",
"рагач",
"рагоз",
"радае",
"радак",
"радар",
"радая",
"раджа",
"раджы",
"радкі",
"радно",
"радны",
"радня",
"радок",
"радон",
"радца",
"радцы",
"радча",
"радый",
"радыё",
"радэа",
"радэо",
"раены",
"ражка",
"ражкі",
"ражны",
"ражок",
"ражон",
"разак",
"разам",
"разец",
"разік",
"разін",
"разкі",
"разны",
"разня",
"разок",
"разцы",
"раіна",
"раіса",
"раісы",
"раіты",
"раіць",
"райаа",
"райба",
"райкі",
"райфа",
"ракаў",
"ракам",
"ракіі",
"ракія",
"ракля",
"раксы",
"ралля",
"ральф",
"раман",
"раміз",
"рамка",
"рамкі",
"рамны",
"рамон",
"рампа",
"рампы",
"рамсы",
"рамэо",
"ранак",
"рангі",
"ранда",
"рандо",
"ранды",
"раней",
"ранет",
"ранец",
"ранка",
"ранкі",
"ранне",
"ранні",
"ранны",
"ранты",
"ранцы",
"ранча",
"ранчы",
"рапак",
"рапід",
"рапны",
"рапсы",
"рапты",
"расея",
"расіі",
"расія",
"раска",
"раскі",
"расол",
"растр",
"расты",
"расці",
"ратаі",
"ратай",
"раткі",
"ратны",
"раток",
"ратон",
"раулі",
"рауль",
"раунд",
"рауты",
"рафід",
"рафіі",
"рафік",
"рафія",
"рахіс",
"рахіт",
"рацін",
"рацыі",
"рацыя",
"рацэі",
"рацэя",
"рачкі",
"рачны",
"рачок",
"рашка",
"рашкі",
"раялі",
"раяль",
"раёвы",
"раёны",
"рваны",
"рвань",
"рваць",
"рвачы",
"рвота",
"рвоты",
"ржавы",
"ржаны",
"ржаць",
"ржэўе",
"ржэўі",
"рзаць",
"роўма",
"роўна",
"роўні",
"роўны",
"роўня",
"робат",
"робер",
"робін",
"робка",
"робкі",
"ровар",
"ровік",
"рогат",
"родас",
"родна",
"родны",
"родня",
"родый",
"роевы",
"розга",
"розгі",
"розка",
"розкі",
"розна",
"розны",
"розум",
"роіва",
"роівы",
"роіла",
"роілы",
"ройны",
"ройсы",
"рокат",
"рокер",
"ролер",
"ролік",
"ромбы",
"ромул",
"ронда",
"ронжа",
"ронжы",
"росіі",
"росія",
"роска",
"роскі",
"рослы",
"росна",
"росны",
"ростр",
"росты",
"росця",
"ротар",
"ротны",
"рохлі",
"рохля",
"роцік",
"рочны",
"рсдрп",
"ртуць",
"рубам",
"рубеж",
"рубец",
"рубін",
"рубка",
"рубкі",
"рублі",
"рубцы",
"руген",
"рудая",
"рудзі",
"рудка",
"рудні",
"рудны",
"рудня",
"рудое",
"ружжо",
"ружжы",
"руіна",
"руіны",
"рукаў",
"рулет",
"рулон",
"рулён",
"румба",
"румбы",
"румза",
"румзы",
"румін",
"румын",
"рунія",
"рунны",
"рупар",
"рупіі",
"рупія",
"рупна",
"рупны",
"рурка",
"рурык",
"русае",
"русак",
"русая",
"русін",
"русіч",
"рускі",
"русты",
"рутар",
"рутыл",
"руфус",
"рухач",
"руцін",
"ручае",
"ручаі",
"ручай",
"ручая",
"ручка",
"ручкі",
"ручны",
"рыўкі",
"рыалы",
"рыбак",
"рыбец",
"рыбін",
"рыбка",
"рыбкі",
"рыбны",
"рыбцы",
"рывок",
"рыгор",
"рыдар",
"рыдлі",
"рыдэр",
"рыека",
"рыекі",
"рыжае",
"рыжак",
"рыжая",
"рыжык",
"рыззё",
"рызка",
"рызкі",
"рызны",
"рыкша",
"рыкшы",
"рымар",
"рынак",
"рынат",
"рынгі",
"рында",
"рынды",
"рыніт",
"рынка",
"рынкі",
"рыпкі",
"рыпсы",
"рыпус",
"рысак",
"рысік",
"рыска",
"рыскі",
"рыссю",
"рытае",
"рытар",
"рытая",
"рытмы",
"рытон",
"рыфлі",
"рыфма",
"рыфмы",
"рыфны",
"рыфты",
"рыхла",
"рыхлы",
"рыхты",
"рыцар",
"рыцца",
"рыццё",
"рыцын",
"рычаг",
"рычыі",
"рычыя",
"рышты",
"рыялы",
"рэўза",
"рэўзы",
"рэалы",
"рэбек",
"рэбры",
"рэбус",
"рэгбі",
"рэдан",
"рэдзь",
"рэдка",
"рэдкі",
"рэдут",
"рэжым",
"рэзва",
"рэзвы",
"рэзіт",
"рэзка",
"рэзкі",
"рэзол",
"рэзон",
"рэзус",
"рэйва",
"рэйвы",
"рэйды",
"рэйка",
"рэйкі",
"рэйны",
"рэйсы",
"рэйты",
"рэйхі",
"рэкат",
"рэкет",
"рэксы",
"рэліз",
"рэлін",
"рэлон",
"рэмез",
"рэміз",
"рэмні",
"рэндж",
"рэній",
"рэнін",
"рэнта",
"рэнты",
"рэпер",
"рэпік",
"рэпка",
"рэпкі",
"рэпны",
"рэпсы",
"рэтра",
"рэтуш",
"рэхва",
"рэхвы",
"рэцін",
"рэчка",
"рэчкі",
"рэшка",
"рэшкі",
"рэшта",
"рэяць",
"сўінг",
"сўіфт",
"саўка",
"саўна",
"саўнд",
"саўны",
"саамы",
"сабан",
"сабеі",
"сабей",
"сабес",
"сабой",
"сабор",
"сабою",
"сабур",
"саван",
"сават",
"савет",
"савоі",
"савоя",
"саган",
"сагіб",
"садам",
"садка",
"садкі",
"садно",
"садок",
"садом",
"саета",
"саеты",
"сажні",
"сазан",
"сазон",
"саібы",
"саіды",
"сайга",
"сайгі",
"сайда",
"сайды",
"сайка",
"сайкі",
"сайот",
"сайра",
"сайры",
"сайты",
"сакас",
"саква",
"саквы",
"саклі",
"сакля",
"сакол",
"саксы",
"салат",
"салаш",
"салеп",
"салея",
"салол",
"салон",
"салоп",
"салуп",
"салют",
"саляр",
"салён",
"самае",
"саман",
"самар",
"самас",
"самая",
"самба",
"самец",
"саміт",
"самка",
"самкі",
"самоа",
"самон",
"самум",
"самцы",
"самыя",
"санар",
"санет",
"санкі",
"санны",
"сапка",
"сапкі",
"сапло",
"сапля",
"сапны",
"сапун",
"сапці",
"сапэр",
"сапёр",
"сарас",
"саржа",
"сарна",
"сарны",
"сартр",
"сарты",
"сар'я",
"сарыт",
"сарыч",
"саскі",
"сасна",
"сасны",
"сасок",
"сасуд",
"сатын",
"сатыр",
"сауна",
"сауны",
"сафіі",
"сафіт",
"сафія",
"сафой",
"сафра",
"сахач",
"сахем",
"сахон",
"сахор",
"сацін",
"сачкі",
"сачок",
"сашын",
"саюзы",
"саяны",
"сваны",
"свары",
"сваты",
"сваха",
"сваце",
"сваяк",
"сведа",
"сведы",
"свежа",
"свежы",
"сверб",
"светы",
"свіль",
"свінг",
"свіны",
"свіры",
"свіст",
"свісь",
"світа",
"світч",
"світы",
"свіфт",
"свішч",
"свомы",
"свята",
"святы",
"сеўны",
"сеўры",
"сеанс",
"седан",
"седас",
"седні",
"седня",
"седча",
"сезам",
"сезон",
"сеіды",
"сейва",
"сейвы",
"сеймы",
"сейфы",
"сейша",
"сейшы",
"секар",
"сексы",
"секта",
"секты",
"секчы",
"селен",
"селін",
"семіт",
"семка",
"семкі",
"семны",
"сем'і",
"сенат",
"сенны",
"сенцы",
"сепаж",
"сепіі",
"сепія",
"серан",
"сербы",
"сервы",
"сержы",
"серка",
"серкі",
"серны",
"сероз",
"серсо",
"серум",
"серыі",
"серын",
"серыя",
"сесіі",
"сесія",
"сесці",
"сетар",
"сетка",
"сеткі",
"сетэр",
"сеулы",
"сечка",
"сечкі",
"сечны",
"сечся",
"сеяны",
"сеяць",
"сіўка",
"сіўкі",
"сіўцы",
"сібір",
"сібсы",
"сівае",
"сівак",
"сівах",
"сівая",
"сівер",
"сівец",
"сівое",
"сівуч",
"сігма",
"сігмы",
"сідар",
"сідры",
"сіеля",
"сіена",
"сіены",
"сіетл",
"сізіф",
"сікоз",
"сікун",
"сікхі",
"сікша",
"сілай",
"сілал",
"сілас",
"сілач",
"сілаю",
"сілкі",
"сіллю",
"сілок",
"сілон",
"сілур",
"сільф",
"сінаі",
"сінай",
"сінап",
"сінгл",
"сіндх",
"сінец",
"сінод",
"сінус",
"сінцы",
"сіняе",
"сіняк",
"сіняя",
"сіпаі",
"сіпай",
"сіпка",
"сіпкі",
"сіпла",
"сіплы",
"сіроп",
"сірыі",
"сірын",
"сірыя",
"сірэн",
"сітал",
"сітар",
"сітка",
"сіткі",
"сітны",
"сітро",
"сітца",
"сітцы",
"сіфон",
"сіэтл",
"сіямы",
"сіёны",
"скаўт",
"скаба",
"скабы",
"скавы",
"сказа",
"сказы",
"скала",
"скалы",
"скаль",
"скань",
"скапа",
"скапы",
"скарб",
"скарн",
"скаты",
"сквап",
"сквар",
"сквер",
"сквіл",
"сквош",
"скейт",
"скелз",
"скена",
"скены",
"скетч",
"скіба",
"скібы",
"скіды",
"скіны",
"скіпы",
"скіты",
"скіфы",
"склад",
"склеп",
"склік",
"склон",
"склюд",
"склёп",
"скнар",
"скобы",
"сковы",
"скокі",
"сколы",
"скома",
"сконы",
"скопы",
"скора",
"скоры",
"скоса",
"скосы",
"скотч",
"скраб",
"скрай",
"скрап",
"скраю",
"скроб",
"скром",
"скруг",
"скрут",
"скрып",
"скрэб",
"скрэп",
"скула",
"скулы",
"скуль",
"скунс",
"скупа",
"скупы",
"скура",
"скурч",
"скуры",
"скуты",
"скуць",
"слаба",
"слабо",
"слабы",
"слава",
"славы",
"слагі",
"слайд",
"сланы",
"слата",
"слаць",
"слепа",
"сліва",
"слівы",
"слізь",
"сліна",
"сліны",
"сліпы",
"слова",
"словы",
"слоік",
"слонь",
"слота",
"слоты",
"слуга",
"слугі",
"слука",
"слупы",
"слуцк",
"слыць",
"слэнг",
"слэшы",
"слюда",
"слябы",
"сляды",
"сляза",
"слязы",
"сляпы",
"слёзы",
"смага",
"смайл",
"смакі",
"смала",
"смаль",
"смела",
"смелы",
"смерд",
"смерч",
"смехі",
"смець",
"сміты",
"смоўж",
"смогі",
"смокі",
"смолы",
"смоль",
"сморж",
"смуга",
"смута",
"смуты",
"смыкі",
"смыль",
"снапы",
"сніды",
"сніць",
"снобы",
"снягі",
"снёны",
"соўка",
"соўкі",
"соевы",
"сойка",
"сойкі",
"соймы",
"сокал",
"сокат",
"сокер",
"сокет",
"солад",
"солід",
"солка",
"солкі",
"сомаў",
"сомік",
"сонгі",
"сонна",
"сонны",
"сонца",
"сонцы",
"сопар",
"сопат",
"сопка",
"сопкі",
"сопла",
"соплі",
"соплы",
"сопля",
"сопці",
"сорак",
"сорам",
"сорга",
"сорус",
"соска",
"соскі",
"сосну",
"сосны",
"сотае",
"сотая",
"сотка",
"соткі",
"сотні",
"сотня",
"сотыя",
"соусы",
"софты",
"соф'і",
"соф'я",
"сохлы",
"соцкі",
"сочка",
"сочкі",
"сочна",
"сочны",
"сошка",
"сошкі",
"сошны",
"спады",
"спазм",
"спайк",
"спалы",
"спамы",
"спасы",
"спаць",
"спевы",
"спелы",
"спеты",
"спехі",
"спецы",
"спець",
"спілы",
"спіна",
"спіны",
"спірс",
"спірт",
"спісы",
"спіты",
"спіца",
"спіцы",
"спіць",
"спічы",
"сплаў",
"сплін",
"спліт",
"сплюх",
"сплёт",
"споды",
"спона",
"спонж",
"споны",
"спора",
"спорт",
"споры",
"спрат",
"спрут",
"спрыт",
"спрэд",
"спрэі",
"спрэй",
"спрэс",
"спуду",
"спуды",
"спурт",
"спуск",
"спыны",
"спяцы",
"спячы",
"спёка",
"срака",
"сракі",
"ссаць",
"ссекі",
"ссячы",
"ставы",
"стагі",
"стада",
"стады",
"стаер",
"стажы",
"стаза",
"стазы",
"стала",
"сталі",
"сталы",
"сталь",
"станс",
"станы",
"стапа",
"стапы",
"старт",
"стары",
"стасы",
"стась",
"стася",
"стаць",
"стаяк",
"стаян",
"ствол",
"створ",
"стоўб",
"стоўп",
"стогн",
"стоды",
"стоік",
"стокі",
"стокс",
"стола",
"столі",
"столы",
"столь",
"стома",
"стомы",
"стопы",
"сторч",
"стосы",
"стоць",
"страж",
"страз",
"страі",
"страх",
"строі",
"строй",
"строп",
"струб",
"струг",
"струк",
"струп",
"струс",
"струх",
"стрыж",
"стрый",
"стрым",
"стрэл",
"стрэс",
"стузы",
"стуіб",
"стука",
"стукі",
"стулы",
"стуль",
"ступа",
"ступы",
"стусы",
"стыкі",
"стылі",
"стыло",
"стылы",
"стыль",
"стынь",
"стыць",
"стэйк",
"стэка",
"стэкі",
"стэла",
"стэлы",
"стэля",
"стэнд",
"стэны",
"стэпа",
"стэпс",
"стэпы",
"стэрх",
"стэры",
"субар",
"сувеі",
"сувей",
"сувоі",
"сувой",
"сугон",
"сугук",
"судак",
"судан",
"судар",
"судкі",
"судна",
"судно",
"судны",
"судок",
"сузок",
"суіфт",
"сукам",
"сукін",
"сукні",
"сукно",
"сукны",
"сукня",
"сукол",
"сукрэ",
"сулад",
"сумах",
"сумер",
"сумка",
"сумкі",
"сумна",
"сумны",
"сумёт",
"суніт",
"сунна",
"супал",
"супар",
"супер",
"супін",
"супор",
"супын",
"сураж",
"суркі",
"сурма",
"сурмы",
"сурок",
"сурта",
"сурык",
"сусак",
"сусед",
"сусек",
"сусла",
"суслы",
"сутаж",
"суткі",
"сутны",
"сутык",
"суфле",
"сухар",
"сухая",
"сухое",
"сухцё",
"суцех",
"сучка",
"сучкі",
"сучок",
"сучча",
"суччы",
"сушка",
"сушкі",
"сушні",
"сушня",
"сушэй",
"сфагн",
"сфены",
"сфера",
"сферы",
"схема",
"схемы",
"схілы",
"схіма",
"схімы",
"схіны",
"схова",
"сховы",
"сходы",
"схоны",
"сцаць",
"сцені",
"сцены",
"сцень",
"сцерп",
"сціск",
"сціха",
"сцыла",
"сцылы",
"сцынк",
"сцэна",
"сцэны",
"сцюжа",
"сцяга",
"сцягі",
"сцяна",
"сцяны",
"сцяты",
"сцяць",
"сцячы",
"сцёбы",
"сцёкі",
"счуты",
"счуць",
"счэпы",
"счэсы",
"сшыты",
"сшыць",
"сыдар",
"сызыф",
"сымон",
"сынаў",
"сынгл",
"сынкі",
"сынні",
"сынод",
"сынок",
"сыпка",
"сыпкі",
"сыпны",
"сырая",
"сыркі",
"сырны",
"сырое",
"сырок",
"сыроп",
"сырты",
"сырцы",
"сырэй",
"сырэц",
"сыскі",
"сысой",
"сысок",
"сысун",
"сысце",
"сысці",
"сытае",
"сытая",
"сытка",
"сыткі",
"сытна",
"сытны",
"сыход",
"сычуг",
"сычык",
"сьвет",
"сьера",
"сьміт",
"сьнег",
"сьпеў",
"сьпех",
"сьпіж",
"сьпіс",
"сьцяг",
"сьцёб",
"сэдас",
"сэзон",
"сэмпл",
"сэнсы",
"сэпіі",
"сэпія",
"сэрвы",
"сэрум",
"сэрца",
"сэрцы",
"сэсан",
"сэсія",
"сэсэн",
"сэтар",
"сэтэр",
"сюдой",
"сюдою",
"сюдэю",
"сюжэт",
"сюіта",
"сюіты",
"сюрык",
"сяўба",
"сяўкі",
"сяўні",
"сяўня",
"сяўцы",
"сябар",
"сябра",
"сябры",
"сявак",
"сявец",
"сядак",
"сядло",
"сядлы",
"сядня",
"сядок",
"сядун",
"сяйво",
"сякач",
"сякая",
"сякое",
"сям'і",
"сям'я",
"сямён",
"сянаж",
"сянно",
"сянны",
"сянцо",
"сяроў",
"сярод",
"сярпы",
"сёгун",
"сёдлы",
"сёмае",
"сёмая",
"сёмга",
"сёмка",
"сёмкі",
"сёмыя",
"сёння",
"сёрбы",
"тўіст",
"таўро",
"таўры",
"таўчы",
"таўэр",
"табар",
"табес",
"табло",
"табой",
"табою",
"табун",
"тавар",
"тавот",
"тагал",
"таган",
"тагды",
"тагіл",
"тадуш",
"тадэй",
"тазік",
"таіці",
"таіць",
"тайга",
"тайка",
"тайкі",
"таймы",
"тайна",
"тайны",
"тайцы",
"такай",
"такая",
"такое",
"такса",
"таксі",
"таксы",
"такты",
"такыр",
"талае",
"талан",
"талас",
"талая",
"талер",
"таліб",
"таліі",
"талій",
"талін",
"талія",
"талом",
"талон",
"талус",
"талыш",
"тальк",
"тамат",
"тамаш",
"тамга",
"таміл",
"таміч",
"танаж",
"танга",
"таней",
"танец",
"танід",
"танін",
"танка",
"танкі",
"танна",
"танны",
"танцы",
"тапаз",
"тапак",
"тапір",
"тапка",
"тапкі",
"тапор",
"тапэр",
"тапёр",
"таран",
"тарас",
"тараф",
"таргі",
"тарка",
"таркі",
"тарны",
"тарос",
"тарпа",
"тарпы",
"тарту",
"тарты",
"тарцы",
"тарча",
"тарчы",
"тарыт",
"тарыф",
"тарэц",
"тасол",
"татаў",
"татка",
"таткі",
"татэм",
"тафта",
"таф'і",
"таф'я",
"тахта",
"тахты",
"тацкі",
"тацэт",
"тачка",
"тачкі",
"таяць",
"таёмы",
"таёны",
"таёта",
"таёты",
"твань",
"твары",
"твіст",
"творы",
"тканы",
"ткаха",
"ткахі",
"ткаць",
"ткачы",
"тлелы",
"тлены",
"тлень",
"тлець",
"тлумы",
"тлушч",
"тляга",
"тнуць",
"тоўла",
"тоўшч",
"тодар",
"тодэс",
"тоены",
"токар",
"токен",
"токіа",
"токіо",
"токіё",
"толас",
"толкі",
"томас",
"томаш",
"томік",
"томка",
"томкі",
"томны",
"томск",
"тонга",
"тонгі",
"тонда",
"тонер",
"тонік",
"тонка",
"тонкі",
"тонны",
"тонус",
"тонэр",
"топас",
"топік",
"топка",
"топкі",
"торба",
"торбы",
"торкі",
"торна",
"торны",
"торпы",
"торсы",
"торты",
"торфы",
"торый",
"тосты",
"точка",
"точкі",
"точна",
"трава",
"травы",
"тракі",
"тракт",
"тралы",
"трама",
"трамп",
"трамы",
"транс",
"транш",
"трапы",
"траса",
"траст",
"трасы",
"трата",
"траты",
"траха",
"трахі",
"траяк",
"траян",
"трест",
"трогі",
"трокі",
"тролі",
"троль",
"тромб",
"тромп",
"трона",
"троны",
"тропы",
"тросы",
"троты",
"трохі",
"троху",
"труба",
"трубы",
"труды",
"трукі",
"трумо",
"трумы",
"труна",
"труны",
"трупа",
"трупы",
"труск",
"трусы",
"труты",
"труха",
"трухі",
"труць",
"трыба",
"трыбы",
"трыер",
"трызм",
"трыко",
"трыпс",
"трыпы",
"трыяж",
"трыял",
"трыяс",
"трыёд",
"трэба",
"трэбы",
"трэйл",
"трэкі",
"трэлі",
"трэль",
"трэнд",
"трэны",
"трэск",
"трэст",
"трэсь",
"трэфа",
"трэфы",
"трэці",
"трэць",
"трэшы",
"туазы",
"туаль",
"тубаж",
"тубан",
"тубус",
"тугаі",
"тугай",
"тугая",
"тугое",
"тудой",
"тудою",
"тудэю",
"туевы",
"туеры",
"тужба",
"тужны",
"тужык",
"тужэй",
"тузін",
"тузла",
"тузлы",
"туізл",
"туйка",
"туйкі",
"тукан",
"тулам",
"туліі",
"тулій",
"тулка",
"тулкі",
"тулуп",
"туляг",
"тумак",
"туман",
"тумар",
"тумба",
"тумбы",
"тунгі",
"тунец",
"туніс",
"тунцы",
"тупаі",
"тупат",
"тупая",
"тупеі",
"тупей",
"тупік",
"тупкі",
"тупое",
"тураў",
"турак",
"турач",
"турка",
"туркі",
"турма",
"турмы",
"турнэ",
"турок",
"турын",
"тутар",
"туфлі",
"тухло",
"тухлы",
"туцкі",
"тушка",
"тушкі",
"тхары",
"тхаць",
"т'еры",
"тыбет",
"тыбры",
"тыбэт",
"тыглі",
"тыгра",
"тыгры",
"тыдні",
"тымін",
"тымол",
"тымор",
"тымус",
"тында",
"тынды",
"тынкі",
"тынок",
"тыолы",
"тыпаж",
"тыпус",
"тыраж",
"тыран",
"тырла",
"тырлы",
"тырса",
"тырсы",
"тытан",
"тытла",
"тытры",
"тытул",
"тытун",
"тытус",
"тыфон",
"тыфус",
"тычка",
"тычкі",
"тыяра",
"тыяры",
"тэатр",
"тэблі",
"тэдзі",
"тэзіс",
"тэізм",
"тэіны",
"тэіст",
"тэйпы",
"тэкля",
"тэкст",
"тэксы",
"тэлом",
"тэлур",
"тэмбр",
"тэмза",
"тэмзы",
"тэмпы",
"тэнар",
"тэніс",
"тэнты",
"тэпці",
"тэрмы",
"тэрор",
"тэсты",
"тэхас",
"тэчка",
"тэчкі",
"уўраж",
"уазік",
"уайты",
"убаку",
"убіты",
"убіць",
"убога",
"убогі",
"уборы",
"уброд",
"убылы",
"убыць",
"увага",
"увалы",
"увары",
"уверх",
"увесь",
"увіты",
"увіць",
"уводы",
"увозы",
"уволю",
"увысь",
"увязь",
"угару",
"угары",
"угіны",
"угліч",
"углыб",
"угода",
"угоды",
"угожы",
"угоны",
"угору",
"угрэў",
"удава",
"удавы",
"удака",
"удала",
"удалы",
"удары",
"удаць",
"удача",
"удачы",
"удвая",
"удвох",
"удвух",
"удзел",
"удоўж",
"удовы",
"удоды",
"удоль",
"удыхі",
"уедна",
"уедны",
"уежна",
"уежны",
"уезды",
"уесці",
"ужаты",
"ужаць",
"ужоны",
"ужылы",
"ужыты",
"ужыць",
"узайм",
"узачы",
"узбек",
"узбоч",
"узваг",
"узвал",
"узвар",
"узвеі",
"узвей",
"узвея",
"узвіў",
"узвод",
"узвоз",
"узгон",
"узгор",
"узгуз",
"уздым",
"уздых",
"узлом",
"узлёт",
"узмах",
"узмёт",
"узнос",
"узоры",
"узрок",
"узрыў",
"узрэх",
"узусы",
"узыск",
"узяты",
"узяць",
"уіпет",
"уітні",
"уйгур",
"указы",
"уклад",
"уклон",
"уколы",
"укосы",
"укруг",
"укрух",
"укупе",
"укусы",
"улада",
"улады",
"уланы",
"улары",
"улева",
"улевы",
"улікі",
"улісы",
"уліты",
"уліць",
"уловы",
"улусы",
"ульчы",
"улягі",
"уляна",
"улёкі",
"уманы",
"умбра",
"умбры",
"умела",
"умелы",
"умець",
"умова",
"умовы",
"умыты",
"умыць",
"умяты",
"умяць",
"унада",
"унады",
"уначы",
"унаём",
"унізе",
"уніят",
"уніён",
"уночы",
"унтэр",
"унукі",
"унутр",
"унцыі",
"унцыя",
"уныць",
"уняць",
"унёсы",
"упады",
"упалы",
"упару",
"упіка",
"упікі",
"упіры",
"упісы",
"упіты",
"упіць",
"уплаў",
"уплыў",
"упоры",
"упроч",
"упруг",
"упуды",
"упуск",
"упыны",
"упяты",
"упяць",
"упячы",
"упёкі",
"урагі",
"урады",
"ураза",
"уразы",
"уралы",
"ураты",
"урачы",
"урбан",
"урвас",
"урвіс",
"урода",
"уроды",
"урокі",
"уроны",
"урубы",
"уруга",
"урукі",
"урына",
"урыны",
"урыты",
"урыць",
"урэзы",
"урэма",
"урэмы",
"урэць",
"уседы",
"усекі",
"ускок",
"услед",
"услон",
"услых",
"усмак",
"усмал",
"усмех",
"уснеі",
"уснея",
"усолы",
"успол",
"успых",
"устаў",
"устоі",
"устой",
"уступ",
"усход",
"усхон",
"усцех",
"усцяж",
"усюды",
"усяго",
"усякі",
"усячы",
"утвор",
"утома",
"утомы",
"утора",
"уторы",
"утрая",
"утрох",
"утулы",
"утыль",
"ухаба",
"ухабы",
"ухват",
"ухілы",
"уховы",
"уходы",
"ухожы",
"уцекі",
"уцеха",
"уцехі",
"уціны",
"уціск",
"уцяты",
"уцяць",
"уцячы",
"уцёкі",
"уцёсы",
"учора",
"учосы",
"учуты",
"учуць",
"учына",
"учыны",
"ушачы",
"ушкуі",
"ушкуй",
"ушчук",
"ушыты",
"ушыць",
"уэбер",
"уэльс",
"уюркі",
"уюрок",
"уючны",
"уюшка",
"уюшкі",
"уяўны",
"уязны",
"ўітні",
"ўэйлз",
"фаўлз",
"фаўна",
"фаўны",
"фаўст",
"фабія",
"фабра",
"фавор",
"фавус",
"фагот",
"фаевы",
"фазан",
"фазіс",
"фазны",
"фаіна",
"файлы",
"файна",
"файны",
"факел",
"факір",
"факіх",
"факсы",
"факты",
"фалас",
"фалда",
"фалды",
"фалес",
"фальц",
"фальш",
"фамін",
"фанат",
"фангі",
"фанза",
"фанзы",
"фанон",
"фанта",
"фанты",
"фарба",
"фарбы",
"фарны",
"фарсі",
"фарсы",
"фарты",
"фаршы",
"фарэл",
"фасад",
"фасет",
"фаска",
"фаскі",
"фасны",
"фасон",
"фатам",
"фатон",
"фатум",
"фауна",
"фауны",
"фацыі",
"фацыя",
"фацэт",
"фаянс",
"федзі",
"федзя",
"фелах",
"фенек",
"феніл",
"фенол",
"феоды",
"ферат",
"ферзі",
"ферзь",
"ферма",
"фермы",
"ферты",
"ферыт",
"феска",
"фескі",
"фетры",
"фетыш",
"фібра",
"фібры",
"фіглі",
"фігня",
"фідар",
"фіджы",
"фідэр",
"фіжмы",
"фізіі",
"фізік",
"фізія",
"фізык",
"фікса",
"фіксы",
"фікус",
"фікхі",
"філей",
"філер",
"філіі",
"філін",
"філіп",
"філіт",
"філія",
"філом",
"філон",
"філум",
"фільм",
"фільц",
"філёр",
"фімоз",
"фінал",
"фінік",
"фініш",
"фінка",
"фінкі",
"фінна",
"фіноз",
"фінты",
"фірма",
"фірмы",
"фірны",
"фіскі",
"фітол",
"фітон",
"фіцін",
"фішка",
"фішкі",
"фішэр",
"фіякр",
"фіяла",
"фіялы",
"фіяты",
"фіёль",
"фіёрд",
"флагі",
"флаер",
"фланг",
"фланк",
"флаты",
"флейм",
"флейц",
"флецы",
"флешы",
"флінт",
"фліпы",
"флірт",
"флоўт",
"флора",
"флоры",
"флоты",
"флуер",
"флэшы",
"флюат",
"флюід",
"флюор",
"флюсы",
"флякі",
"флянс",
"флёкс",
"флёра",
"флёры",
"фобіі",
"фобія",
"фогты",
"фокус",
"фолас",
"фоліа",
"фоліо",
"фомка",
"фомкі",
"фонды",
"форбс",
"форды",
"форма",
"формы",
"форсы",
"форта",
"фортэ",
"форум",
"фоска",
"фоскі",
"фотка",
"фоткі",
"фотык",
"фофан",
"фоцік",
"фраер",
"фраза",
"фразы",
"фракі",
"франк",
"франт",
"франя",
"фрахт",
"фромы",
"фронт",
"фрося",
"фрукт",
"фрызы",
"фрыцы",
"фрэза",
"фрэзы",
"фрэйд",
"фрэйм",
"фрэнк",
"фрэнч",
"фрэон",
"фторы",
"фугас",
"фужэр",
"фузеі",
"фузея",
"фузіі",
"фузія",
"фуксы",
"фукус",
"фуляр",
"фунты",
"фураж",
"фуран",
"фурка",
"фуркі",
"фурма",
"фурмы",
"фурор",
"фурыі",
"фурыя",
"фусты",
"футар",
"футра",
"футры",
"фуэтэ",
"ф'южн",
"ф'ёрд",
"фэйсы",
"фэлаг",
"фэсты",
"фэтар",
"фюрар",
"фюрэр",
"фёдар",
"хаўер",
"хаана",
"хааны",
"хабал",
"хабар",
"хабёл",
"хадак",
"хаджы",
"хадня",
"хадок",
"хадот",
"хадун",
"хадыс",
"хазар",
"хайль",
"хайны",
"хайты",
"хайфа",
"хайфы",
"хакас",
"хакей",
"хакер",
"халат",
"халва",
"халін",
"халіф",
"халоп",
"халуі",
"халуй",
"хамаў",
"хаміт",
"хамка",
"хамкі",
"хамса",
"хамут",
"хам'ё",
"хамяк",
"ханжа",
"ханжы",
"ханоі",
"ханой",
"ханты",
"хаосы",
"хапкі",
"хапок",
"хапун",
"харал",
"харам",
"харкі",
"харты",
"харчо",
"харчы",
"харыс",
"харэі",
"харэй",
"харэя",
"хасід",
"хатка",
"хаткі",
"хатні",
"хатыб",
"хаузы",
"хаусы",
"хафіз",
"хахлы",
"хахол",
"хацін",
"хацкі",
"хвала",
"хвалі",
"хваля",
"хвары",
"хвась",
"хваты",
"хваць",
"хвіга",
"хвілі",
"хвіля",
"хвіць",
"хворы",
"хвост",
"хвось",
"хвошч",
"хеўра",
"хедар",
"хеджы",
"хедыў",
"хедэр",
"хейнц",
"хелат",
"херас",
"херня",
"хецкі",
"хібкі",
"хібны",
"хібок",
"хіжае",
"хіжак",
"хіжая",
"хілае",
"хілая",
"хілер",
"хілус",
"хіміі",
"хімік",
"хімія",
"хімкі",
"хімус",
"хінін",
"хінны",
"хінон",
"хірае",
"хірая",
"хірот",
"хісці",
"хісць",
"хітон",
"хітра",
"хітры",
"хіцін",
"хіязм",
"хламы",
"хліпы",
"хлісь",
"хлоры",
"хлуды",
"хлузы",
"хлупы",
"хлусы",
"хлыст",
"хлысь",
"хлюпа",
"хлюпы",
"хлюст",
"хляба",
"хлябы",
"хлявы",
"хлякі",
"хляпа",
"хляпы",
"хлясь",
"хлёбы",
"хмара",
"хмары",
"хмель",
"хмуры",
"хмызы",
"хоўка",
"хоўкі",
"хоўра",
"хобат",
"хобіт",
"ходар",
"ходас",
"ходка",
"ходкі",
"ходня",
"ходра",
"ходыр",
"холад",
"холка",
"холмс",
"хопер",
"хорам",
"хорар",
"хорда",
"хорды",
"хосты",
"хохма",
"хохмы",
"храмы",
"храпа",
"храпы",
"хрась",
"хромы",
"хропы",
"хрост",
"хрума",
"хрупы",
"хруст",
"хрусь",
"хрушч",
"хрыпы",
"хрэны",
"хрэст",
"хтось",
"хуаны",
"худак",
"худая",
"худое",
"хуліа",
"хуліё",
"хунта",
"хунты",
"хурал",
"хурма",
"хуста",
"хусты",
"хусце",
"хусці",
"хутар",
"хутка",
"хуткі",
"хціва",
"хцівы",
"хэлпы",
"хэнды",
"хэнці",
"хэнць",
"цаган",
"цалік",
"цалкі",
"цалок",
"цалол",
"цалып",
"цапкі",
"цапфа",
"цапфы",
"царкі",
"цароў",
"царок",
"царык",
"цахна",
"цахур",
"цацка",
"цацкі",
"цверы",
"цветы",
"цвікі",
"цвілы",
"цвіль",
"цвіны",
"цекчы",
"целеш",
"целік",
"цемра",
"цераз",
"церак",
"церам",
"церах",
"церне",
"церні",
"церці",
"цеслі",
"цеслы",
"цесля",
"цесна",
"цесны",
"цеста",
"цесты",
"цесці",
"цесць",
"цечка",
"цечкі",
"цешча",
"цешчы",
"цівун",
"цікун",
"цімон",
"цімох",
"цімош",
"цімур",
"цінка",
"цінны",
"ціпка",
"ціпкі",
"ціпун",
"ціскі",
"цітла",
"цітлы",
"цітоў",
"цітры",
"ціхае",
"ціхан",
"ціхая",
"ціхом",
"ціхон",
"ціцюн",
"цішка",
"цішук",
"цішшу",
"цішэй",
"цмены",
"цмокі",
"цмыга",
"цнота",
"цноты",
"цокат",
"цотны",
"цубкі",
"цугам",
"цуглі",
"цугля",
"цудам",
"цудны",
"цукар",
"цукат",
"цукер",
"цукры",
"цупка",
"цупкі",
"цурка",
"цуркі",
"цурок",
"цуцык",
"цыбік",
"цыблы",
"цыбук",
"цыбур",
"цыб'е",
"цыб'ё",
"цыган",
"цыклі",
"цыклы",
"цыкль",
"цыкля",
"цымол",
"цымус",
"цынга",
"цынеб",
"цыніі",
"цынік",
"цынія",
"цынка",
"цынкі",
"цыняк",
"цыпка",
"цыпкі",
"цырка",
"цыркі",
"цыроз",
"цырык",
"цыста",
"цысты",
"цытра",
"цытры",
"цыцар",
"цыцка",
"цыцкі",
"цыцэр",
"цыяны",
"цьвер",
"цьвік",
"цэўка",
"цэўкі",
"цэбар",
"цэбры",
"цэгла",
"цэдра",
"цэзар",
"цэзій",
"цэзкі",
"цэйсы",
"цэлае",
"цэлая",
"цэлік",
"цэліт",
"цэлка",
"цэлкі",
"цэлом",
"цэлон",
"цэнзы",
"цэнны",
"цэноз",
"цэнтр",
"цэнты",
"цэнур",
"цэпкі",
"цэрыі",
"цэрый",
"цэсар",
"цэсіі",
"цэсія",
"цэтан",
"цэхін",
"цэшка",
"цэшкі",
"цюбік",
"цювік",
"цюнер",
"цюнэр",
"цюпка",
"цюпкі",
"цюрбо",
"цюркі",
"цюрых",
"цюфяк",
"цюцік",
"цюцюн",
"цючкі",
"цючок",
"цягам",
"цягач",
"цяглі",
"цягло",
"цяглы",
"цягун",
"цяжар",
"цяжба",
"цяжбы",
"цяжка",
"цяжкі",
"цяжэй",
"цякун",
"цякчы",
"цялеж",
"цялец",
"цялеш",
"цялёп",
"цямкі",
"цямна",
"цямно",
"цямны",
"цямок",
"цямці",
"цямця",
"цянёк",
"цяпер",
"цяпло",
"цясак",
"цясла",
"цясло",
"цяслы",
"цясці",
"цёзка",
"цёзкі",
"цёклы",
"цёлка",
"цёлкі",
"цёмна",
"цёмны",
"цёпла",
"цёплы",
"цёрка",
"цёркі",
"цёрла",
"цёрлы",
"цёрны",
"цёрты",
"цёска",
"цёскі",
"цёслы",
"цётка",
"цёткі",
"цёшка",
"цёшкі",
"чаўны",
"чабан",
"чабор",
"чабох",
"чабух",
"чадна",
"чадны",
"чадра",
"чадры",
"чаіца",
"чаіцы",
"чайка",
"чайкі",
"чайны",
"чакан",
"чакра",
"чакры",
"чалае",
"чалая",
"чалец",
"чалма",
"чалмы",
"чамер",
"чангі",
"чапец",
"чаплі",
"чапля",
"чапцы",
"чарва",
"чарга",
"чаргі",
"чарка",
"чаркі",
"чарлі",
"чарод",
"чарон",
"чарот",
"чарты",
"чарэн",
"часам",
"часны",
"часок",
"часта",
"часты",
"часці",
"часць",
"чаушы",
"чахла",
"чахлы",
"чахол",
"чачня",
"чачок",
"чаявы",
"чвіры",
"чвыры",
"члены",
"чмары",
"чмель",
"чмокі",
"чмура",
"чмуры",
"чмута",
"чмуты",
"чмялі",
"чобат",
"човен",
"чокер",
"чолка",
"чолкі",
"чомга",
"чопік",
"чорна",
"чорны",
"чорты",
"чубак",
"чубан",
"чубка",
"чубкі",
"чубок",
"чувак",
"чуваш",
"чувяк",
"чудзь",
"чужак",
"чужая",
"чужка",
"чужкі",
"чужое",
"чужык",
"чуйка",
"чуйкі",
"чуйна",
"чуйны",
"чукча",
"чукчы",
"чулае",
"чулая",
"чумак",
"чумны",
"чурка",
"чуркі",
"чурэк",
"чутае",
"чутая",
"чутка",
"чуткі",
"чутна",
"чутно",
"чутны",
"чуцца",
"чуццё",
"чучка",
"чучкі",
"чушка",
"чушкі",
"чхаць",
"чыгір",
"чыгун",
"чыжоў",
"чыжык",
"чыйсь",
"чыйся",
"чылім",
"чымся",
"чынна",
"чынны",
"чыншы",
"чыпсы",
"чырва",
"чырвы",
"чырка",
"чыркі",
"чырок",
"чырык",
"чысло",
"чыслы",
"чыста",
"чысты",
"чытач",
"чытка",
"чыткі",
"чыфір",
"чыхір",
"чыясь",
"чыяся",
"чыёсь",
"чэзла",
"чэзлы",
"чэйны",
"чэкат",
"чэлес",
"чэлсі",
"чэляс",
"чэмер",
"чэпік",
"чэпкі",
"чэрап",
"чэрві",
"чэргі",
"чэрні",
"чэрнь",
"чэрці",
"чэсна",
"чэсны",
"чэсці",
"чэсць",
"чэхаў",
"чэхіі",
"чэхія",
"чэшка",
"чэшкі",
"шаўкі",
"шаўлі",
"шаўро",
"шаўцы",
"шабас",
"шабат",
"шабаш",
"шабер",
"шаблі",
"шабля",
"шабот",
"шавец",
"шавыр",
"шагам",
"шагід",
"шаіры",
"шайба",
"шайбы",
"шайка",
"шайкі",
"шайры",
"шакал",
"шалах",
"шалаш",
"шалік",
"шалом",
"шалых",
"шаман",
"шамая",
"шамкі",
"шамот",
"шанец",
"шансы",
"шанта",
"шанцы",
"шапік",
"шапка",
"шапкі",
"шапэн",
"шарае",
"шарак",
"шарах",
"шарая",
"шаржы",
"шарль",
"шармы",
"шарон",
"шарош",
"шарык",
"шарэш",
"шасты",
"шасць",
"шатан",
"шатлы",
"шатны",
"шатры",
"шатун",
"шатэн",
"шафер",
"шафір",
"шафка",
"шафкі",
"шафёр",
"шахід",
"шахта",
"шахты",
"шацак",
"шаціі",
"шація",
"шацкі",
"шацёр",
"шашка",
"шашкі",
"шашні",
"шашок",
"шашон",
"шашча",
"швабы",
"шванк",
"шварт",
"шведы",
"шверт",
"швіва",
"швівы",
"шкада",
"шкала",
"шкалы",
"шкант",
"шквал",
"шкелі",
"шківы",
"шклоў",
"шкляр",
"шкода",
"шкоды",
"школа",
"школы",
"шкоты",
"шкраб",
"шкрэд",
"шкура",
"шкуры",
"шкуты",
"шлагі",
"шлакі",
"шламы",
"шланг",
"шлейф",
"шлемы",
"шліры",
"шліфы",
"шліхі",
"шліцы",
"шлыкі",
"шлюбы",
"шлюзы",
"шлюпы",
"шлюсы",
"шлюха",
"шлюхі",
"шляга",
"шлягі",
"шлякі",
"шлянг",
"шляны",
"шляпа",
"шляпы",
"шляхі",
"шмата",
"шматы",
"шміты",
"шмоны",
"шморг",
"шмыга",
"шмэры",
"шнапс",
"шнары",
"шніпы",
"шнуры",
"шныра",
"шнэкі",
"шняга",
"шоўкі",
"шокер",
"шолам",
"шолах",
"шопка",
"шопкі",
"шорах",
"шорац",
"шорка",
"шоркі",
"шорны",
"шорты",
"шорцы",
"шосты",
"шофер",
"шофэр",
"шпага",
"шпагі",
"шпакі",
"шпала",
"шпалы",
"шпана",
"шпары",
"шпаты",
"шпегі",
"шпень",
"шпігі",
"шпікі",
"шпілі",
"шпіль",
"шпіцы",
"шпіён",
"шпона",
"шпоны",
"шпора",
"шпоры",
"шпрот",
"шпрыц",
"шпулі",
"шпуля",
"шпунт",
"шпуры",
"шпяні",
"шрамы",
"шроты",
"шруба",
"шрубы",
"шрыфт",
"штаба",
"штабы",
"штагі",
"штазі",
"штамб",
"штамп",
"штамы",
"штаны",
"штаты",
"штоўх",
"штокі",
"штора",
"шторм",
"шторы",
"штосы",
"штось",
"штофы",
"штраф",
"штрых",
"штрэк",
"штука",
"штукі",
"штурм",
"штурх",
"штуфы",
"штыбы",
"штыкі",
"штылі",
"штыль",
"штыры",
"штыфт",
"штыхі",
"штэйн",
"штэрт",
"шуаны",
"шубат",
"шубка",
"шубкі",
"шубны",
"шулер",
"шулле",
"шуллі",
"шуляк",
"шумкі",
"шумна",
"шумны",
"шумок",
"шунты",
"шупік",
"шупкі",
"шурка",
"шуркі",
"шурпа",
"шурфы",
"шурык",
"шусты",
"шусць",
"шутар",
"шутка",
"шуткі",
"шутэр",
"шуфлі",
"шхеры",
"шхуна",
"шхуны",
"шчаўе",
"шчаўі",
"шчака",
"шчакі",
"шчаня",
"шчанё",
"шчапа",
"шчоўк",
"шчокі",
"шчорс",
"шчупы",
"шчура",
"шчуры",
"шчыра",
"шчыры",
"шчыты",
"шчэнт",
"шчэпа",
"шчэпы",
"шчэць",
"шыўкі",
"шыўны",
"шыбер",
"шыбка",
"шыбкі",
"шывок",
"шыгал",
"шызае",
"шызак",
"шызая",
"шызік",
"шызлы",
"шыізм",
"шыіты",
"шыйка",
"шыйкі",
"шыйны",
"шылег",
"шылле",
"шыллі",
"шынка",
"шынкі",
"шынны",
"шынок",
"шыпун",
"шырай",
"шырак",
"шырма",
"шырмы",
"шыршы",
"шырэй",
"шытае",
"шытая",
"шытво",
"шытны",
"шыфер",
"шыфон",
"шыфры",
"шыхта",
"шыхты",
"шыцік",
"шыцца",
"шыццё",
"шышак",
"шышка",
"шышкі",
"шьццё",
"шэваж",
"шэвер",
"шэйкі",
"шэйны",
"шэйхі",
"шэлак",
"шэлег",
"шэлон",
"шэльф",
"шэпат",
"шэпты",
"шэраг",
"шэрае",
"шэрая",
"шэрлы",
"шэрпы",
"шэрыф",
"шэсце",
"шэсці",
"шэфаў",
"шэфен",
"эўбеі",
"эўбея",
"эўнух",
"эазін",
"эазой",
"эаліт",
"эацэн",
"эбены",
"эвенк",
"эвены",
"эгіда",
"эгіды",
"эгрэт",
"эдўін",
"эджар",
"эдыкт",
"эдылы",
"эзопы",
"эйдас",
"экаць",
"экеры",
"экзот",
"эклер",
"экран",
"эксод",
"экспо",
"экшэн",
"элада",
"элады",
"элана",
"эланы",
"элеат",
"элект",
"эліат",
"эліза",
"элізы",
"элінг",
"эліны",
"эліпс",
"эліта",
"эліты",
"элтан",
"эльба",
"эльбы",
"эльза",
"эльзы",
"эльфы",
"эмалі",
"эмаль",
"эманы",
"эмілі",
"эміль",
"эміры",
"эндзі",
"эндру",
"эндэм",
"энзім",
"энзым",
"эннае",
"энная",
"энскі",
"эолаў",
"эпарх",
"эпасы",
"эпіка",
"эпікі",
"эподы",
"эпонж",
"эпоха",
"эпохі",
"эпрон",
"эпюры",
"эрбій",
"эрзац",
"эркер",
"эрліх",
"эрыкі",
"эсдэк",
"эскер",
"эскіз",
"эскін",
"эстэт",
"эсхіл",
"эсхін",
"эсэкс",
"эсэры",
"этаны",
"этапы",
"этасы",
"этвеш",
"этміі",
"этмія",
"этнас",
"этрол",
"этыка",
"этылы",
"этыль",
"эфебы",
"эфект",
"эфесы",
"эфіоп",
"эфіры",
"эфіёп",
"эфоры",
"эхаць",
"эхіны",
"эцюды",
"югаля",
"югася",
"югеры",
"юдоль",
"юзеры",
"юзіст",
"юзэры",
"юзэфа",
"юзэфы",
"юкала",
"юкалы",
"юканы",
"юлісь",
"юліюс",
"юліян",
"юлёвы",
"юмізм",
"юнакі",
"юначы",
"юнець",
"юнікс",
"юніты",
"юніён",
"юніёр",
"юнкар",
"юнкер",
"юнкор",
"юннат",
"юнона",
"юрага",
"юрасі",
"юрась",
"юркае",
"юркая",
"юрнае",
"юрная",
"юроды",
"юрскі",
"юрусь",
"юруха",
"юрфак",
"юр'еў",
"юрыст",
"юрыць",
"юсавы",
"юстын",
"ютавы",
"юферс",
"юхнаў",
"юцкае",
"юцкая",
"юшыць",
"яўгей",
"яўген",
"яўгеш",
"яўмен",
"яўнае",
"яўная",
"яўндэ",
"яўнут",
"яўрэі",
"яўрэй",
"яўсеі",
"яўсей",
"яўтух",
"яўхім",
"яўціх",
"ябаць",
"яблык",
"явары",
"яверы",
"явіць",
"ягада",
"ягады",
"ягель",
"ягоны",
"ягоры",
"ягуар",
"ягурт",
"ядваб",
"ядкае",
"ядкая",
"ядкое",
"ядомы",
"ядуны",
"ядучы",
"ядыла",
"яечка",
"яечкі",
"яечні",
"яечны",
"яечня",
"яешні",
"яешня",
"яжовы",
"яздок",
"яздун",
"язмен",
"язмін",
"язовы",
"языкі",
"язькі",
"язёвы",
"якава",
"якавы",
"якары",
"якаты",
"якаць",
"якінф",
"якісь",
"якраз",
"якубы",
"якуня",
"якуты",
"якуцк",
"ялавы",
"ялдон",
"ялікі",
"яліна",
"яліны",
"яліць",
"ялкае",
"ялкая",
"яловы",
"яльцы",
"ямаец",
"ямалы",
"яміна",
"яміны",
"ямнае",
"ямная",
"ямскі",
"ямчэй",
"яндзы",
"яніна",
"яніны",
"яніты",
"яноты",
"янскі",
"янтар",
"януль",
"янусы",
"янусь",
"януся",
"янчук",
"япрук",
"яравы",
"ярара",
"ярарх",
"ярары",
"ярдан",
"яркае",
"яркая",
"ярлык",
"ярміл",
"ярмош",
"яроха",
"ярусы",
"яруха",
"ярчэй",
"ярыла",
"ярылы",
"ярына",
"ярыны",
"ярыца",
"ярэны",
"ясакі",
"ясаня",
"ясені",
"ясень",
"ясікі",
"яскае",
"яская",
"яснае",
"ясная",
"ясней",
"ястык",
"ясыкі",
"ясыры",
"яська",
"ясьлі",
"ясьце",
"ятвяг",
"ятоўе",
"ятоўі",
"яфімы",
"яфрэм",
"яхант",
"яхіда",
"яхіды",
"яхкат",
"яхтны",
"яцэкі",
"ячнае",
"ячная",
"яшчар",
"яшчур",
"ёгізм",
"ёгурт",
"ёдавы",
"ёдаты",
"ёдкае",
"ёдкая",
"ёдлер",
"ёднае",
"ёдная",
"ёдскі",
"ёдыды",
"ёдызм",
"ёзефы",
"ёкаты",
"ёкаць",
"ёлкае",
"ёлкая",
"ёлупы",
"ёмкае",
"ёмкая",
"ёнава",
"ёршык",
"ёсьць",
"ётавы",
];
  /** @type {string} */
  var c = "present";
  /** @type {string} */
  var correctLetter = "correct";
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
  var choices = "абвгдеёжзійклмнопрстуўфхцчш'ыьэюя";
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
                if (word[i] === correctLetter && x[i] !== obj[i]) {
                  return {
                    validGuess : false,
                    errorMessage : "".concat(ordinal(i + 1), " літара павінна быць ").concat(obj[i].toUpperCase())
                  };
                }
              }
              var o = {};
              /** @type {number} */
              var k = 0;
              for (; k < word.length; k++) {
                if ([correctLetter, c].includes(word[k])) {
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
                    errorMessage : "У слове павінна быць ".concat(f.toUpperCase())
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
                v[i] = correctLetter;
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
  var pipelets = [["ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "ў", "з", "х", "'"], ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"], ["↵", "я", "ч", "с", "м", "і", "т", "ь", "б", "ю", "←"]];
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
            if ((char >= "а" && char <= "я" && char != "и" && char != "щ") || "'" === char || "ё" === char || "і" === char || "ў" === char || "←" === char || "↵" === char) {
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
                span.textContent = "увод";
                span.classList.add("one-and-a-half");
              }
            } else {
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
  $template.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 12px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Статыстыка</h1>\n    <div id="statistics"></div>\n    <h1>Гісторыя гульняў</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
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
  cached.innerHTML = '\n  <div class="countdown">\n    <h1>Наступны ЎОРДЛІ</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Захаваць вынік\n    </button>\n  </div>\n';
  var dragitemhomes = {
    currentStreak : "Бягучая серыя",
    maxStreak : "Найлепшая серыя",
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
          cursor.innerText = "Няма дадзеных!";
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
                        case correctLetter:
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
                            return suppressDisabledCheck ? String.fromCodePoint("0x2B1B") : String.fromCodePoint("0x2B1C");
                          }(element);
                      }
                      url = url + p;
                    }
                  });
                  url = url + "\n";
                }
              }), {
                text : "".concat(level, "\n\n").concat(url.trimEnd()).concat("\n\n#ўордлі\n\n").concat("https://ololophilolo.github.io/wordle-by/")
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
  element.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Адгадайце <strong>ЎОРДЛІ</strong> за 6 спробаў.</p>\n      <p>Кожная спроба павінна змяшчаць існуючае слова з пяці літар. <strong>Дж</strong> і <strong>дз</strong> лічацца за дзве літары, апостраф — за адну. Націсніце кнопку «увод», каб пацвердзіць спробу.</p>\n <p>Загадана можа быць любая часціна мовы, але ў пачатковай форме, як у слоўніку: напрыклад, назоўны склон ці інфінітыў.</p>\n     <p>Пасля кожнай здагадкі колер пліткі зменіцца, каб паказаць, наколькі ваша здагадка была блізкай да слова.</p>\n      <div class="examples">\n        <p><strong>Прыклады</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="ч" evaluation="correct" reveal></game-tile>\n            <game-tile letter="а"></game-tile>\n            <game-tile letter="б"></game-tile>\n            <game-tile letter="о"></game-tile>\n            <game-tile letter="р"></game-tile>\n          </div>\n          <p>Літара <strong>Ч</strong> ёсць у слове і знаходзіцца на правільным месцы.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="к"></game-tile>\n            <game-tile letter="а" evaluation="present" reveal></game-tile>\n            <game-tile letter="в"></game-tile>\n            <game-tile letter="у"></game-tile>\n            <game-tile letter="н"></game-tile>\n          </div>\n          <p>Літара <strong>А</strong> ёсць у слове, але знаходзіцца на іншым месцы.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="л"></game-tile>\n            <game-tile letter="ю"></game-tile>\n            <game-tile letter="б"></game-tile>\n            <game-tile letter="о"></game-tile>\n            <game-tile letter="ў"  evaluation="absent" reveal></game-tile>\n          </div>\n          <p>Літары <strong>Ў</strong> зусім няма ў слове.</p>\n        </div>\n      </div>\n      <p><strong>Новы ЎОРДЛІ з’яўляецца кожны дзень!</strong></p>\n    </div>\n  </section>\n';
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
