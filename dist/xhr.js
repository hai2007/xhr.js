/*!
 * xhr.js - General purpose HTTP / HTTPS client for node.js. Supports transparent gzip / deflate decoding.
 * git+https://github.com/hai2007/xhr.js.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Mon May 17 2021 09:11:32 GMT+0800 (GMT+08:00)
 */
(function () {
    'use strict';

    function get(){

    }

    function post(){

    }

    let xhr = function (settings) {

    };

    // 挂载方法
    xhr.get = get;
    xhr.post = post;

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = xhr;

    } else {

        // 挂载对象到根
        window.xhr = xhr;

    }

}());
