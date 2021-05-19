import toString from './tool/toString';

var xhr = function (settings, callback, errorback) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4) {

            callback({

                // 状态码
                status: xmlhttp.status,

                // 数据
                data: xmlhttp.responseText

            });

        }
    };

    xmlhttp.open(settings.method, settings.url, true);

    // 设置请求头
    for (var key in settings.header) {
        xmlhttp.setRequestHeader(key, settings.header[key]);
    }

    xmlhttp.send(toString(settings.data));

};

// 导出

if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = xhr;

} else {

    // 挂载对象到根
    window.xhr = xhr;

}
