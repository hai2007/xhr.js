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
 * Date:Mon May 17 2021 17:44:24 GMT+0800 (GMT+08:00)
 */
(function () {
    'use strict';

    var xhr = function (settings, callback, errorback) {

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4) {

                callback({

                    // 状态码
                    status: xmlhttp.status,

                    // 数据
                    data:xmlhttp.responseText

                });

            }
        };

        xmlhttp.open(settings.method, settings.url, true);

        // 设置请求头
        for (var key in settings.header) {
            xmlhttp.setRequestHeader(key, settings.header);
        }

        xmlhttp.send(settings.data);

    };

    // 导出

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = xhr;

    } else {

        // 挂载对象到根
        window.xhr = xhr;

    }

}());
