
// HTTP 服务器

const mimeType = require('./mime.types.js');
const { log } = require('@hai2007/nodejs');

require('http').createServer(function (request, response) {

    // todo

    response.writeHead(status, {

    });

    response.write("");

    response.end();

}).listen(20000);

log('HTTP Server running on port:20000');
