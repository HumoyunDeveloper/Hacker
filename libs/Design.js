/* 
  DesignJS
  Created by Humoyun (MisterJavaScript)
  Date: 2019/13/02
*/
(function (_o1, _o2) {
  const isArray = function (_param) {
    return /array/gi.test(_param.constructor.toString());
  };
  const checkAll = function (_param, _param2) {
    return isArray(_param) ? _param.every(function (_val) { return typeof _val === _param2; }) : typeof _param === _param2 ? true : false;
  };
  const isObject = function (_param) {
    return checkAll(_param, "object");
  };
  const isString = function (_param) {
    return checkAll(_param, "string");
  };
  const isNumber = function (_param) {
    return checkAll(_param, "number");
  }
  const toString = Object.prototype.toString;
  const toNumber = function (_param) {
    return Number ? Number : +_param;
  };
  if (isObject([_o1, _o2])) { doOpt(); }

  function doOpt() {
    const libName = "Design";
    const checkEl = function (_el) { return document.querySelector(_el) ? true : false; };
    const designAll = function (_els, _obj, _prop) {
      if (isArray(_els)) {
        const filtered = _els.filter(function (_val) { return isObject(_val) ? true : isString(_val) ? checkEl(_val) ? true : false : false; });
        if (isObject(_obj)) {
          const keys = Object.keys(_obj);
          if (keys) {
            keys.forEach(function (_key) {
              const prop = _obj[_key];
              filtered.forEach(function (elem) {
                if (isString(elem)) {
                  var elements = document.querySelectorAll(elem);
                  elements.forEach(function (el) { el.style[_key] = prop; });
                } else {
                  elem.style[_key] = prop;
                }
              });
            });
          }
        } else if (isString([_obj, _prop])) {
          const filtered = _els.filter(function (_val) { return isObject(_val) ? true : isString(_val) ? checkEl(_val) ? true : false : false; });
          filtered.forEach(function (el) {
            if (isString(el)) {
              var elements = document.querySelectorAll(el);
              elements.forEach(function (el) { el.style[_obj] = _prop; });
            } else {
              elem.style[_obj] = _prop;
            }
          });
        } else {
          throw new Error(libName + ": Invalid parameter - " + _els);
        }
      } else if (isObject(_els)) {
        if (isObject(_obj)) {
          const keys = Object.keys(_obj);
          keys.forEach(function (key) {
            const prop = _obj[key];
            _els.style[key] = prop;
          });
        } else if (isString([_obj, _prop])) {
          _els.style[_obj] = _prop;
        } else {
          throw new Error(libName + ": Invalid Parameters " + _obj + ", " + _prop);
        }
      } else if (isString(_els)) {
        if (isObject(_obj) && checkEl(_els)) {
          const keys = Object.keys(_obj);
          keys.forEach(function (key) {
            const prop = _obj[key];
            var elements = document.querySelectorAll(_els);
            elements.forEach(function (el) { el.style[key] = prop; });
          });
        } else if (checkEl(_els) && isString([_obj, _prop])) {
          var elements = document.querySelectorAll(_els);
          elements.forEach(function (el) { el.style[_obj] = _prop; });
        }
        else {
          throw new Error(libName + ": Invalid parameter - " + _els);
        }
      }
    }
    const designOne = function (_els, _obj, _prop) {
      if (isArray(_els)) {
        const filtered = _els.filter(function (_val) { return isObject(_val) ? _val : isString(_val) ? document.querySelector(_val) ? true : false : false; });
        if (isObject(_obj)) {
          const keys = Object.keys(_obj);
          if (keys) {
            keys.forEach(function (_key) {
              const prop = _obj[_key];
              _els.forEach(function (el) {
                if (isString(el) && checkEl(el)) {
                  document.querySelector(_el).style[_key] = _prop;
                } else {
                  el.style[_key] = prop;
                }
              });
            });
          }
        }
      } else if (isObject(_els)) {
        if (isObject(_obj)) {
          const keys = Object.keys(_obj);
          keys.forEach(function (key) {
            const prop = _obj[key];
            _els.style[key] = prop;
          });
        } else if (isString([_obj, _prop])) {
          _els.style[_obj] = _prop;
        } else {
          throw new Error(libName + ": Invalid Parameters " + _obj + ", " + _prop);
        }
      } else if (isString(_els)) {
        if (isObject(_obj) && checkEl(_els)) {
          const keys = Object.keys(_obj);
          keys.forEach(function (key) {
            const prop = _obj[key];
            document.querySelector(_els).style[key] = prop;
          });
        } else if (checkEl(_els) && isString([_obj, _prop])) {
          document.querySelector(_els).style[_obj] = _prop;
        } else {
          throw new Error(libName + ": Invalid parameter - " + _els);
        }
      }
    }
    const design = function (_obj, _val) {
      var now = this;
      if (isObject(_obj)) {
        const keys = Object.keys(_obj);
        keys.forEach(function (key) {
          const value = _obj[key];
          now.style[key] = value;
        });
      } else if (isString([_obj, _val])) {
        now.style[_obj] = _val;
      } else {
        throw new Error(libName + ": Invalid parameter - " + _obj);
      }
    }
    Element.prototype.design = design;
    _o1.design = designAll;
    _o1.designOne = designOne;
  }
})(window, document);