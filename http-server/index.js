
// HTTP 服务器

const mimeTypes = require('./mime.types.js');
const { log, fullPath } = require('@hai2007/nodejs');
const fs = require('fs');
const responseFileList = require('./responseFileList.js');

let port = 20000;

require('http').createServer(function (request, response) {

    // 获取服务器文件更目录
    let basePath = fullPath('./', process.cwd());

    // 参数
    let options = {

        // 请求方法
        method: request.method,

        // 请求地址
        url: request.url

    };

    // 响应结果
    let result = {
        type: 'application/json',
        code: 200,
        data: "{}"
    };

    try {

        if (/^upload\.do/.test(options.url)) {

            console.log(options.url);

        }

        // 默认就作为普通的数据服务器
        else {

            // 请求的文件路径
            let filePath = fullPath(options.url == "/" ? "index.html" : "./" + options.url, basePath);

            // 文件后缀名称
            let dotName = /\./.test(filePath) ? filePath.match(/\.([^.]+)$/)[1] : "";

            // 文件类型
            if (dotName != "") result.type = mimeTypes[dotName];

            // 如果需要读取的文件存在
            if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
                result.data = fs.readFileSync(filePath);
            }

            // 如果不存在，就返回404并列举出当前目录内容
            else {

                result = {
                    type: "text/html",
                    code: 404,
                    data: require('./template404')(responseFileList(filePath))
                };

            }

        }

    }

    // 可能出错
    catch (e) {
        result = {
            type: "text/plain",
            code: 500,
            data: e + ""
        };
    }

    response.writeHead(result.code, {

        // 响应内容类型
        "Content-Type": result.type + ";charset=utf-8",

        // 标记服务器名称
        "X-Powered-By": "http-server for @hai2007/xhr"

    });

    response.write(result.data);

    response.end();

}).listen(port);

log('HTTP Server running on port:' + port);
