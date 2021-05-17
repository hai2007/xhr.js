export default function (method, url, async, data, callback) {

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4) {

            callback({

                // 状态码
                status: xmlhttp.status

            });

        }
    };

    xmlhttp.open(method, url, async);

    xmlhttp.send(data);

};
