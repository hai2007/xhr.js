import { isPlainObject, isString, isUndefined } from '@hai2007/tool/type';

export default function (data) {

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

};
