/*!
 * xhr.js - General purpose HTTP / HTTPS client. Supports transparent gzip / deflate decoding.
 * git+https://github.com/hai2007/xhr.js.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.2
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Fri May 21 2021 10:10:06 GMT+0800 (GMT+08:00)
 */
(function () {
    'use strict';

    /**
     * 判断一个值是不是Object。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Object返回true，否则返回false
     */
    function _isObject (value) {
        var type = typeof value;
        return value != null && (type === 'object' || type === 'function');
    }

    var toString = Object.prototype.toString;

    /**
     * 获取一个值的类型字符串[object type]
     *
     * @param {*} value 需要返回类型的值
     * @returns {string} 返回类型字符串
     */
    function getType (value) {
        if (value == null) {
            return value === undefined ? '[object Undefined]' : '[object Null]';
        }
        return toString.call(value);
    }

    /**
     * 判断一个值是不是String。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是String返回true，否则返回false
     */
    function _isString (value) {
        var type = typeof value;
        return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
    }

    /**
     * 判断一个值是不是Function。
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是Function返回true，否则返回false
     */
    function _isFunction (value) {
        if (!_isObject(value)) {
            return false;
        }

        var type = getType(value);
        return type === '[object Function]' || type === '[object AsyncFunction]' ||
            type === '[object GeneratorFunction]' || type === '[object Proxy]';
    }

    /**
     * 判断一个值是不是一个朴素的'对象'
     * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
     *
     * @param {*} value 需要判断类型的值
     * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
     */

    function _isPlainObject (value) {
        if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
            return false;
        }

        // 如果原型为null
        if (Object.getPrototypeOf(value) === null) {
            return true;
        }

        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
    }

    // 基本类型
    var isUndefined = function (input) { return input === undefined };
    var isString = _isString;

    // 引用类型
    var isFunction = _isFunction;
    var isPlainObject = _isPlainObject;

    function toString$1 (data) {

        // 如果是字符串
        if (isString(data)) {
            return data;
        }

        // 如果是JSON数据
        else if (isPlainObject(data)) {
            return JSON.stringify(data);
        }

        // 如果为空
        else if (isUndefined(data)) {
            return "";
        }

        // 否则
        else {
            return data;
        }

    }

    var xhr = function (settings, callback, errorback) {

        var xmlhttp;

        // 如果外部定义了
        if (isFunction(settings.xhr)) {
            xmlhttp = settings.xhr();
        }

        // 否则就内部创建
        else {
            xmlhttp = new XMLHttpRequest();
        }

        // 请求完成回调
        xmlhttp.onload = function () {

            if (xmlhttp.readyState == 4) {

                callback({

                    // 状态码
                    status: xmlhttp.status,

                    // 数据
                    data: xmlhttp.responseText

                });

            }
        };

        // 请求超时回调
        xmlhttp.ontimeout = function () {
            errorback({
                status: xmlhttp.status,
                data: "请求超时了"
            });
        };

        // 请求错误回调
        xmlhttp.onerror = function () {
            errorback({
                status: xmlhttp.status,
                data: xmlhttp.responseText
            });
        };

        xmlhttp.open(settings.method, settings.url, true);

        // 设置请求头
        for (var key in settings.header) {
            xmlhttp.setRequestHeader(key, settings.header[key]);
        }

        // 设置超时时间
        xmlhttp.timeout = 'timeout' in settings ? settings.timeout : 6000;

        xmlhttp.send(toString$1(settings.data));

    };

    // 导出

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = xhr;

    } else {

        // 挂载对象到根
        window.xhr = xhr;

    }

}());
