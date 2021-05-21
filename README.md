# xhr.js - 前端 XMLHttpRequest 请求

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@hai2007/xhr"><img src="https://img.shields.io/npm/dm/@hai2007/xhr.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=@hai2007/xhr"><img src="https://packagephobia.now.sh/badge?p=@hai2007/xhr" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/@hai2007/xhr"><img src="https://data.jsdelivr.com/v1/package/npm/@hai2007/xhr/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/@hai2007/xhr"><img src="https://img.shields.io/npm/v/@hai2007/xhr.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/xhr.js/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@hai2007/xhr.svg" alt="License"></a>
  <a href="https://github.com/hai2007/xhr.js" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/xhr.js?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/xhr.js/issues)，欢迎参与维护！

## How to use?
首先你需要通过命令行安装：

```bash
npm install --save @hai2007/xhr
```

安装好了以后，然后引入后就可以使用了：

```js
import xhr from '@hai2007/xhr';

xhr({

    method:string,// 请求方法
    url:string,// 请求地址
    data:any,// 请求数据，可选
    header:json,// 请求头，可选
    timeout:6000,// 请求超时时间，可选
    xhr:function,// 自定义xhr对象，可选

},function(data){

    // 成功回调

}, function(error){

    // 错误回调

});
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/xhr.js/blob/master/LICENSE)

Copyright (c) 2021-present [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
