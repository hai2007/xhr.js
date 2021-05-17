
// 导入实际干事的方法
import get from './methods/get';
import post from './methods/post';

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
