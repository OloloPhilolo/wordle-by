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
  function readFromLocalStorage(propertyName) {
	var jsonVariable = window.localStorage.getItem(propertyName) || JSON.stringify(train1or);
    return JSON.parse(jsonVariable);
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function done(rows) {
    var createdRows = readFromLocalStorage(STORAGE_KEY_GAME);
    !function(showThumb) {
      window.localStorage.setItem(STORAGE_KEY_GAME, JSON.stringify(showThumb));
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
   * @param {?} options
   * @return {undefined}
   */
  function draw(options) {
    var stdout = options.isWin;
    var includerReg = options.isStreak;
    var t = options.numGuesses;
    var data = readFromLocalStorage(STORAGE_KEY_STATISTICS);
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
      window.localStorage.setItem(STORAGE_KEY_STATISTICS, JSON.stringify(commitData));
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

  /** @type {!Element} */
  var conferenceGroupDetailsTemplate = document.createElement("template");
  /** @type {string} */
  conferenceGroupDetailsTemplate.innerHTML = htmlElements["tile"];
  var Class = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "_letter", ""), callback(set(self), "_state", "empty"), callback(set(self), "_animation", "idle"), callback(set(self), "_last", false), callback(set(self), "_reveal", false), self, self;
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
        this.appendChild(conferenceGroupDetailsTemplate.content.cloneNode(true));
        this.$tile = this.querySelector(".tile");
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
  parts.innerHTML = htmlElements["row"];
  var cls = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var data;
      return log(this, update), (data = api.call(this)), data._letters = "", data._evaluation = [], data._length, data;
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
        this.appendChild(parts.content.cloneNode(true));
        this.$row = this.querySelector(".row");
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
        this.$tiles = this.querySelectorAll("game-tile");
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
  var darkThemeFlag = "darkTheme";
  /** @type {string} */
  var colorBlindThemeFlag = "colorBlindTheme";
  var SorTable = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      log(this, update);
      callback(set(element = api.call(this)), "isDarkTheme", false);
      callback(set(element), "isColorBlindTheme", false);
      var a = JSON.parse(window.localStorage.getItem(darkThemeFlag));
      var oldMatches = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var addBtnElement = JSON.parse(window.localStorage.getItem(colorBlindThemeFlag));
      return true === a || false === a ? element.setDarkTheme(a) : oldMatches && element.setDarkTheme(true), true !== addBtnElement && false !== addBtnElement || element.setColorBlindTheme(addBtnElement), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "setDarkTheme",
      value : function(e) {
        var a = document.querySelector("body");
        if (e && !a.classList.contains("nightmode")) {
          a.classList.add("nightmode");
        } else {
          a.classList.remove("nightmode");
        }
        this.isDarkTheme = e;
        window.localStorage.setItem(darkThemeFlag, JSON.stringify(e));
      }
    }, {
      key : "setColorBlindTheme",
      value : function(e) {
        var a = document.querySelector("body");
        if (e && !a.classList.contains("colorblind")) {
          a.classList.add("colorblind");
        } else {
          a.classList.remove("colorblind");
        }
        this.isColorBlindTheme = e;
        window.localStorage.setItem(colorBlindThemeFlag, JSON.stringify(e));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var window_ = this;
        this.appendChild(tokens.content.cloneNode(true));
        this.addEventListener("game-setting-change", function(params) {
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
  var wndMain;
  window.dataLayer = window.dataLayer || [];
  check("js", new Date);
  var gameStatusDescription;
  /** @type {!Array} */
  var options = tasks;
  /** @type {!Array} */
  var updatedSet = guesses;
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
  var STORAGE_KEY_STATISTICS = "statistics";
  var STORAGE_KEY_GAME = "gameState";
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
  post.innerHTML = htmlElements["game-theme-manager"];
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
      log(this, init);
      callback(set(gameStatusDescription = request.call(this)), "tileIndex", 0);
      callback(set(gameStatusDescription), "rowIndex", 0);
      callback(set(gameStatusDescription), "solution", void 0);
      callback(set(gameStatusDescription), "boardState", void 0);
      callback(set(gameStatusDescription), "evaluations", void 0);
      callback(set(gameStatusDescription), "canInput", true);
      callback(set(gameStatusDescription), "gameStatus", exitCode);
      callback(set(gameStatusDescription), "letterEvaluations", {});
      callback(set(gameStatusDescription), "$board", void 0);
      callback(set(gameStatusDescription), "$keyboard", void 0);
      callback(set(gameStatusDescription), "$game", void 0);
      callback(set(gameStatusDescription), "today", void 0);
      callback(set(gameStatusDescription), "lastPlayedTs", void 0);
      callback(set(gameStatusDescription), "lastCompletedTs", void 0);
      callback(set(gameStatusDescription), "hardMode", void 0);
      callback(set(gameStatusDescription), "dayOffset", void 0);
      /** @type {!Date} */
      gameStatusDescription.today = new Date;
      var data = readFromLocalStorage(STORAGE_KEY_GAME);
      return gameStatusDescription.lastPlayedTs = data.lastPlayedTs, !gameStatusDescription.lastPlayedTs || cb(new Date(gameStatusDescription.lastPlayedTs), gameStatusDescription.today) >= 1 ? (gameStatusDescription.boardState = (new Array(6)).fill(""), gameStatusDescription.evaluations = (new Array(6)).fill(null), gameStatusDescription.solution = isDate(gameStatusDescription.today), gameStatusDescription.dayOffset = getTime(gameStatusDescription.today), gameStatusDescription.lastCompletedTs = data.lastCompletedTs, gameStatusDescription.hardMode = data.hardMode, gameStatusDescription.restoringFromLocalStorage = false, done({
        rowIndex : gameStatusDescription.rowIndex,
        boardState : gameStatusDescription.boardState,
        evaluations : gameStatusDescription.evaluations,
        solution : gameStatusDescription.solution,
        gameStatus : gameStatusDescription.gameStatus
      }), check("event", "level_start", {
        level_name : combine(gameStatusDescription.solution)
      })) : (gameStatusDescription.boardState = data.boardState, gameStatusDescription.evaluations = data.evaluations, gameStatusDescription.rowIndex = data.rowIndex, gameStatusDescription.solution = data.solution, gameStatusDescription.dayOffset = getTime(gameStatusDescription.today), gameStatusDescription.letterEvaluations = filter(gameStatusDescription.boardState, gameStatusDescription.evaluations), gameStatusDescription.gameStatus = data.gameStatus, gameStatusDescription.lastCompletedTs = data.lastCompletedTs, gameStatusDescription.hardMode = data.hardMode, gameStatusDescription.gameStatus !== exitCode && (gameStatusDescription.canInput = false), gameStatusDescription.restoringFromLocalStorage = true), gameStatusDescription;
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
            return brickInput.setAttribute("invalid", ""), void addToast("Гэтае слова мне невядома!");
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
              return brickInput.setAttribute("invalid", ""), void addToast(paramErrorMessage || "Нельга ў складаным варыянце!");
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
            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void addToast("Не хапае літар!");
          }
          this.evaluateRow();
        }
      }
    }, {
      key : "sizeBoard",
      value : function() {
        var scrollbar_handle = this.querySelector("#board-container");
        var x = Math.min(Math.floor(scrollbar_handle.clientHeight * (5 / 6)), 350);
        var predicted_answer = 6 * Math.floor(x / 5);
        this.$board.style.width = "".concat(x, "px");
        this.$board.style.height = "".concat(predicted_answer, "px");
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.appendChild(post.content.cloneNode(true));
        this.$game = this.querySelector("#game");
        this.$board = this.querySelector("#board");
        this.$keyboard = this.querySelector("game-keyboard");
        this.sizeBoard();
        if (!this.lastPlayedTs) {
          setTimeout(function() {
            return showHelloModal();
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
                showStatsModal();
              } else {
                if (self.gameStatus === CONNECTING) {
                  r.setAttribute("win", "");
                  addToast(pedalboards[self.rowIndex - 1], 2E3);
                }
                if (self.gameStatus === obj) {
                  addToast(self.solution.toUpperCase(), 1 / 0);
                }
                setTimeout(function() {
                  showStatsModal();
                }, 2500);
              }
            }
            /** @type {boolean} */
            self.restoringFromLocalStorage = false;
          }
        });
        this.addEventListener("game-setting-change", function(event) {
          var node = event.detail;
          var variableIdentifier = node.name;
          var connection = node.checked;
          var isDisabled = node.disabled;
          switch(variableIdentifier) {
            case "hard-mode":
              return void(isDisabled ? addToast("Hard mode can only be enabled at the start of a round", 1500, true) : (self.hardMode = connection, done({
                hardMode : connection
              })));
          }
        });
        this.ownerDocument.getElementById("settings-button").addEventListener("click", function(a) {
		  showSettingsModal();
        });
        this.ownerDocument.getElementById("help-button").addEventListener("click", function(a) {	
          showInstructionsModal();
        });
        this.ownerDocument.getElementById("statistics-button").addEventListener("click", function(a) {
          showStatsModal();
        });
		this.querySelectorAll("game-icon").forEach(function(iconButton) {
			addGameIcon(iconButton);
		});
        window.addEventListener("resize", this.sizeBoard.bind(this));
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
      }
    }]), init;
  }(register(HTMLElement));
  customElements.define("game-app", DialogElement);
  /** @type {!Element} */
  var fragment = document.createElement("template");
  /** @type {string} */
  fragment.innerHTML = htmlElements["keybord"];
  /** @type {!Element} */
  var templateNode = document.createElement("template");
  /** @type {string} */
  templateNode.innerHTML = htmlElements["button"];
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
      return log(this, update), callback(set(element = api.call(this)), "_letterEvaluations", {}), element, element;
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
        this.appendChild(fragment.content.cloneNode(true));
        this.$keyboard = this.ownerDocument.getElementById("keyboard");
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
				addGameIcon(t);
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
  
  /** @type {(Window|undefined)} */
  var _a = "undefined" == typeof window ? void 0 : window;
  /** @type {(Window|undefined)} */
  var state = (null == _a || _a.ClipboardItem, _a);
  /**
   * @return {undefined}
   */
  var e = function() {
    
    this.success = false;
  };
  
  function addSwitch(button) {
	button.innerHTML = htmlElements["game-switch"];
	button.querySelector(".container").addEventListener("click", function(event) {
      event.stopPropagation();
      if (button.hasAttribute("checked")) {
        button.removeAttribute("checked");
      } else {
        button.setAttribute("checked", "");
      }
      button.dispatchEvent(new CustomEvent("game-switch-change", {
        bubbles : true,
        composed : true,
        detail : {
          name : button.getAttribute("name"),
          checked : button.hasAttribute("checked"),
          disabled : button.hasAttribute("disabled")
        }
     }));
    });
  }
  
  var gameIcons = {
    help : "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings : "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace : "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share : "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics : "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  };
  
  function addGameIcon(button) {
	  button.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
      var index = button.getAttribute("icon");
      button.querySelector("path").setAttribute("d", gameIcons[index]);
      if ("backspace" === index) {
        button.querySelector("path").setAttribute("fill", "var(--color-tone-1)");
      }
      if ("share" === index) {
        button.querySelector("path").setAttribute("fill", "var(--white)");
      }
  }
    
  function addToast(reason, duration) {
	var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	var toast = document.createElement("game-toast");
	toast.innerHTML = '<div class="toast"></div>';
	var container = toast.querySelector(".toast");
	container.textContent = reason;
	duration = duration || 1E3;
	if ("Infinity" !== duration) {
	  setTimeout(function() {
		container.classList.add("fade");
	  }, duration);
	}
	container.addEventListener("transitionend", function(a) {
	  toast.parentNode.removeChild(toast);
	});
	if (s) {
	  document.getElementById("system-toaster").prepend(toast);
	} else {
	  document.getElementById("game-toaster").prepend(toast);
	}
  }
  
  function showInstructionsModal() {
	var page = document.querySelector("game-page");
	var instructions = document.createElement("game-help");
	instructions.innerHTML = htmlElements["instructions"];
	page.appendChild(instructions);
	page.setAttribute("open", "");
	instructions.querySelector("game-icon").addEventListener("click", function(a) {
          instructions.querySelector(".overlay-slot").classList.add("closing");
    });
	page.addEventListener("animationend", function(css) {
	  if ("SlideOut" === css.animationName) {
		page.querySelector(".overlay-slot").classList.remove("closing");
		Array.from(page.childNodes).forEach(function(a) {
		  page.removeChild(a);
		});
		page.removeAttribute("open");
	  }
	});
	instructions.querySelectorAll("game-icon").forEach(function(iconButton) {
	  addGameIcon(iconButton);
	});
  }
  
  function showHelloModal() {
	var modalWindow = document.querySelector("game-modal");
	var help = document.createElement("game-help");
	help.innerHTML = htmlElements["hello-window"];
	modalWindow.appendChild(help);
	modalWindow.setAttribute("open", "");
	help.addEventListener("click", function(a) {
	  this.querySelector(".content").classList.add("closing");
	});
	modalWindow.addEventListener("animationend", function(css) {
	  if ("SlideOut" === css.animationName) {
		this.querySelector(".content").classList.remove("closing");
		this.removeChild(this.firstChild);
		this.removeAttribute("open");
	  }
	});
	help.querySelectorAll("game-icon").forEach(function(iconButton) {
	  addGameIcon(iconButton);
	});
  }
  
  function showSettingsModal() {
	var page = document.querySelector("game-page");
	var settings = document.createElement("game-settings");
	settings.innerHTML = htmlElements["settings"];
	page.appendChild(settings);
	page.setAttribute("open", "");
	settings.querySelector("#puzzle-number").textContent = "#".concat(gameStatusDescription.dayOffset);
	settings.querySelector("game-icon").addEventListener("click", function(a) {
	  page.querySelector(".overlay-slot").classList.add("closing");
	});
	page.addEventListener("animationend", function(css) {
	  if ("SlideOut" === css.animationName) {
		page.querySelector(".overlay-slot").classList.remove("closing");
		Array.from(page.childNodes).forEach(function(a) {
		  page.removeChild(a);
		});
		page.removeAttribute("open");
	  }
	});
	settings.querySelectorAll("game-switch").forEach(function(switchButton) {
	  addSwitch(switchButton);
	});
	page.addEventListener("game-switch-change", function(event) {
	  event.stopPropagation();
	  var status = event.detail;
	  var t = status.name;
	  var isChecked = status.checked;
	  var isDisabled = status.disabled;
	  page.dispatchEvent(new CustomEvent("game-setting-change", {
		bubbles : true,
		composed : true,
		detail : {
		  name : t,
		  checked : isChecked,
		  disabled : isDisabled
		}
	  }));
	});
	var e = document.querySelector("body");
	if (e.classList.contains("nightmode")) {
	  page.querySelector("#dark-theme").setAttribute("checked", "");
	}
	if (e.classList.contains("colorblind")) {
	  page.querySelector("#color-blind-theme").setAttribute("checked", "");
	}
	var from = readFromLocalStorage(STORAGE_KEY_GAME);
	if (from.hardMode) {
	  page.querySelector("#hard-mode").setAttribute("checked", "");
	}
	if (!(from.hardMode || "IN_PROGRESS" !== from.gameStatus || 0 === from.rowIndex)) {
	  page.querySelector("#hard-mode").removeAttribute("checked");
	  page.querySelector("#hard-mode").setAttribute("disabled", "");
    }
	settings.querySelectorAll("game-icon").forEach(function(iconButton) {
	  addGameIcon(iconButton);
	});
  }
  
  function showStatsModal() {
	var modalWindow = document.querySelector("game-modal");
	modalWindow.innerHTML = '';
	var stats = document.createElement("game-stats");
	stats.innerHTML = htmlElements["statistics"];
	var tpl = document.createElement("template");
	tpl.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
	var container = document.createElement("template");
	container.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
	var cached = document.createElement("template");
	cached.innerHTML = '\n  <div class="countdown">\n    <h1>Наступны ЎОРДЛІ</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Захаваць вынік\n    </button>\n  </div>\n';
	var dragitemhomes = {
		currentStreak : "Бягучая серыя",
		maxStreak : "Найлепшая серыя",
		winPercentage : "% перамог",
		gamesPlayed : "Усяго гульняў",
		gamesWon : "Перамог",
		averageGuesses : "Сярэдняя колькасць спробаў"
	};
	var storedStatistics = readFromLocalStorage(STORAGE_KEY_STATISTICS);
	var storedGameState = readFromLocalStorage(STORAGE_KEY_GAME);
	modalWindow.appendChild(stats);
	var years = modalWindow.ownerDocument.getElementById("statistics");
	var overlay = modalWindow.ownerDocument.getElementById("guess-distribution");
	var total = Math.max.apply(Math, toArray(Object.values(storedStatistics.guesses)));
	if (Object.values(storedStatistics.guesses).every(function(canCreateDiscussions) {
	  return 0 === canCreateDiscussions;
	})) {
	  var cursor = document.createElement("div");
	  cursor.classList.add("no-data");
	  cursor.innerText = "Няма дадзеных!";
	  overlay.appendChild(cursor);
	} else {
	  var i = 1;
	  for (; i < Object.keys(storedStatistics.guesses).length; i++) {
		var funcCode = i;
		var v = storedStatistics.guesses[i];
		var fragment = container.content.cloneNode(true);
		var x = Math.max(7, Math.round(v / total * 100));

		fragment.querySelector(".guess").textContent = funcCode;
		var visualsElement = fragment.querySelector(".graph-bar");
		if (visualsElement.style.width = "".concat(x, "%"), "number" == typeof v) {
		  fragment.querySelector(".num-guesses").textContent = v;
		  if (v > 0) {
			visualsElement.classList.add("align-right");
		  }
		  if (gameStatusDescription.gameStatus === CONNECTING && gameStatusDescription.rowIndex <= 6) {
			var t = parseInt(gameStatusDescription.rowIndex, 10);
		  }
		  if (t && i === t) {
			visualsElement.classList.add("highlight");
		  }
		}
		overlay.appendChild(fragment);
	  }
	}
	if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function(x) {
	  var dragitemhome = dragitemhomes[x];
	  var subwiki = storedStatistics[x];
	  var span = tpl.content.cloneNode(true);
	  span.querySelector(".label").textContent = dragitemhome;
	  span.querySelector(".statistic").textContent = subwiki;
	  years.appendChild(span);
	}), storedGameState.gameStatus !== exitCode) {
	  var resultFooter = modalWindow.querySelector(".footer");
	  var tableDataCellElementOne = cached.content.cloneNode(true);
	  resultFooter.appendChild(tableDataCellElementOne);
	  var timerIntervalId = showTimer();
	  modalWindow.querySelector("button#share-button").addEventListener("click", function(event) {
		event.preventDefault();
		event.stopPropagation();
		shareResult(function(data) {
		  var evaluations = data.evaluations;
		  var datas = data.dayOffset;
		  var val = data.rowIndex;
		  var hardMode = data.isHardMode;
		  var success = data.isWin;
		  var darkTheme = JSON.parse(window.localStorage.getItem(darkThemeFlag));
		  var colorBlind = JSON.parse(window.localStorage.getItem(colorBlindThemeFlag));
		  var header = "Беларускі ЎОРДЛІ ".concat(datas);
		  header = header + " ".concat(success ? val : "X", "/").concat(6);
		  if (hardMode) {
			header = header + "*";
		  }
		  var body = "";
		  return evaluations.forEach(function(letters) {
			if (letters) {
			  letters.forEach(function(type) {
				if (type) {
				  /** @type {string} */
				  var p = "";
				  switch(type) {
					case correctLetter:
					  p = function(color) {
						return color ? String.fromCodePoint("0x1F7E7") : String.fromCodePoint("0x1F7E9");
					  }(colorBlind);
					  break;
					case c:
					  p = function(color) {
						return color ? String.fromCodePoint("0x1F7E6") : String.fromCodePoint("0x1F7E8");
					  }(colorBlind);
					  break;
					case bytes:
					  p = function(suppressDisabledCheck) {
						return suppressDisabledCheck ? String.fromCodePoint("0x2B1C") : String.fromCodePoint("0x2B1C");
					  }(darkTheme);
				  }
				  body = body + p;
				}
			  });
			  body = body + "\n";
			}
		  }), {
			text : "".concat(header, "\n\n").concat(body.trimEnd()).concat("\n\n#ўордлі\n\n").concat("https://ololophilolo.github.io/wordle-by/")
		  };
		}({
		  evaluations : gameStatusDescription.evaluations,
		  dayOffset : gameStatusDescription.dayOffset,
		  rowIndex : gameStatusDescription.rowIndex,
		  isHardMode : gameStatusDescription.hardMode,
		  isWin : gameStatusDescription.gameStatus === CONNECTING
		}), function() {
		  addToast("Вынік скапіраваны!", 2E3, true);
		}, function() {
		  addToast("Не атрымалася падзяліцца вынікам", 2E3, true);
		});
	  });
	}
	stats.querySelector("game-icon").addEventListener("click", function(a) {
	  if (timerIntervalId) {
		  clearInterval(timerIntervalId);
	  }
	  modalWindow.querySelector(".content").classList.add("closing");
	});
	stats.addEventListener("animationend", function(css) {
	  if ("SlideOut" === css.animationName) {
		modalWindow.querySelector(".content").classList.remove("closing");
		Array.from(modalWindow.childNodes).forEach(function(a) {
		  modalWindow.removeChild(a);
		});
		modalWindow.removeAttribute("open");
	  }
	});
	modalWindow.appendChild(stats);
	modalWindow.setAttribute("open", "");
	stats.querySelectorAll("game-icon").forEach(function(iconButton) {
	  addGameIcon(iconButton);
	});
  }
  
  var renderMachines = (null === (app = null == clipboard ? void 0 : clipboard.write) || void 0 === app || app.bind(clipboard), null === (comp = null == clipboard ? void 0 : clipboard.writeText) || void 0 === comp ? void 0 : comp.bind(clipboard));
  function shareResult(textValue, success, failure) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 
      4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(textValue)) {
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
        })(textValue.text).then(success, failure);
      } else {
        navigator.share(textValue);
      }
    } catch (e) {
      failure();
    }
    var t;
  }
  
  function start(data) {
    return __awaiter(this, void 0, void 0, function() {
      var textValue;
      return send(this, function(s) {
        if (textValue = "text/plain" in data, "undefined" == typeof ClipboardEvent && void 0 !== state.clipboardData && void 0 !== state.clipboardData.setData) {
          if (!textValue) {
            throw new Error("No `text/plain` value was specified.");
          }
          if (content = data["text/plain"], state.clipboardData.setData("Text", content)) {
            return [2, true];
          }
          throw new Error("Copying failed, possibly because the user rejected it.");
        }
        var content;
        return F(data) || navigator.userAgent.indexOf("Edge") > -1 || wrap(document.body, data) || function(parent) {
          var value = document.createElement("div");
          value.setAttribute("style", "-webkit-user-select: text !important");
          value.textContent = "temporary element";
          document.body.appendChild(value);
          var result = wrap(value, parent);
          return document.body.removeChild(value), result;
        }(data) || function(total) {
          var div = document.createElement("div");
          div.setAttribute("style", "-webkit-user-select: text !important");
          var a = div;
          var body = document.createElement("span");
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

  function wrap(props, obj) {
	var sel = document.getSelection();
    if (sel) {
      var range = document.createRange();
      range.selectNodeContents(props);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    var res = F(obj);
	var selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
    return res;
  }
  
  function paste(text, obj, event) {
    var key;
    for (key in text.success = true, obj) {
      var value = obj[key];
      var data = event.clipboardData;
      data.setData(key, value);
      if ("text/plain" === key && data.getData(key) !== value) {
        text.success = false;
      }
    }
    event.preventDefault();
  }
  
  function showTimer() {
	var timerElement = document.querySelector("countdown-timer");
	var restart = new Date;
	restart.setDate(restart.getDate() + 1)
	restart.setHours(0, 0, 0, 0)
	var newDay = restart.getTime(), self;
	var intervalId = setInterval(function() {
		updateTimer(newDay, timerElement);
	}, 200);
  }
  
    function updateTimer(targetEpochMS, $timer) {
        var timeAsString;
        var currentTime = (new Date).getTime();
        var ms = Math.floor(targetEpochMS - currentTime);
        if (ms <= 0) {
          timeAsString = "00:00:00";
        } else {
		  var msMinutes = 6E4;
          var msHours = 36E5;	
		  var msDays = 864E5;
          var hours = Math.floor(ms % msDays / msHours);
          var minutes = Math.floor(ms % msHours / msMinutes);
          var seconds = Math.floor(ms % msMinutes / 1E3);
          timeAsString = "".concat(padDigit(hours), ":").concat(padDigit(minutes), ":").concat(padDigit(seconds));
        }
        $timer.textContent = timeAsString;
    }
	
    function padDigit(number) {
        return number.toString().padStart(2, "0");
    }	
	  
  return exports.GameApp = DialogElement, exports.GameKeyboard = XDefined, exports.GameRow = cls, exports.GameThemeManager = SorTable, exports.GameTile = Class, 
  Object.defineProperty(exports, "__esModule", {
    value : true
  }), exports;
}({});
