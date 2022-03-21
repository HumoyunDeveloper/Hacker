/* 
    Name: consoleJS
    Created by: Humoyun 
    Description: Style your console!
*/

(function (_o) {
    "use strict";
    const isSupported = typeof _o !== "undefined";
    const isArray = function (_param) {
        return /array/gi.test(_param.constructor.toString());
    };
    const checkAll = function (_param, _param2) {
        return isArray(_param) ? _param.every(function (_val) {
            return typeof _val === _param2;
        }) : typeof _param === _param2 ? true : false;
    };
    const isObject = function (_param) {
        return checkAll(_param, "object");
    };
    const isString = function (_param) {
        return checkAll(_param, "string");
    };
    const isNumber = function (_param) {
        return checkAll(_param, "number");
    };
    const doOpt = function () {
        const cjs = {
            log: function (_text) {
                const props = this.getProps(_text);
                if (props) {
                    console["log"](props.g_text, ...props.styles);
                } else {
                    console['error']("Syntax hatolik \nMisol: cjs.log(\'<1>Salom dunyo</1>\')");
                }
            },
            error: function (_text) {
                const props = this.getProps(_text);
                if (props) {
                    console["error"](props.g_text, ...props.styles);
                } else {
                    console['error']("Syntax hatolik \nMisol: cjs.error(\'<1>Salom dunyo</1>\')");
                }

            },
            info: function (_text) {
                const props = this.getProps(_text);
                if (props) {
                    console["info"](props.g_text, ...props.styles);
                } else {
                    console['error']("Syntax hatolik \nMisol: cjs.info(\'<1>Salom dunyo</1>\')");
                }
            },
            warn: function (_text) {
                const props = this.getProps(_text);
                if (props) {
                    console["warn"](props.g_text, ...props.styles);
                } else {
                    console['error']("Syntax hatolik \nMisol: cjs.warn(\'<1>Salom dunyo</1>\')");
                }
            },
            getProps: function (_text) {
                const regexp = /<(\d+)\s*(style=([\"\'])(.*?)\3)?>(.*?)<\/\1>/gi;
                var props = {
                    texts: [],
                    sizes: [],
                    styles: [],
                    g_text: ""
                };
                if (regexp.test(_text)) {
                    const infos = _text.match(regexp);
                    for (let index = 0; index < infos.length; index++) {
                        const innerRegx = /<(\d+)\s*(style=([\"\'])(.*?)\3)?>(.*?)<\/\1>/gi;
                        const element = infos[index];
                        const s_props = innerRegx.exec(element);
                        const size = s_props[1];
                        const text = s_props[5];
                        const style = s_props[4];
                        props.sizes.push(size);
                        props.texts.push(text);
                        props.styles.push(style ? "font-size:" + size + "px;" + style : "font-size:" + size + "px;");
                    }
                    for (let i = 0; i < props.texts.length; i++) {
                        const text = props.texts[i];
                        props.g_text += "%c" + text;
                    }
                } else {
                    props = null;
                }
                return props;
            }
        };
        window.cjs ? true : window.cjs = cjs;
    };
    const toString = Object.prototype.toString;
    if (isSupported) {
        doOpt();
    } else {
        /*DN*/
    }

})(console);

/*
    <(\d)\s*(style=([\"\'])(.*?)\3)?>(.*?)<\/\1>
    1 - number of size
    2 - NULL
    3 - NULL
    4 - STYLE
    5 - TEXT
*/