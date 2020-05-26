import { isPureObj } from './util';

export default class MyMap {
    constructor(obj) {
        let map = new Map();
        if (!isPureObj(obj)) {
            throw new Error('请传入一个纯对象');
        }

        for (let key in obj) {
            map.set(key, obj[key]);
        }

        return map;
    }
}
