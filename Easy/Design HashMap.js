var MyHashMap = function () {
    this.map = new Map();
};


MyHashMap.prototype.put = function (key, value) {
    this.map.set(key, value);
    return null;
};


MyHashMap.prototype.get = function (key) {
    const val = this.map.get(key);
    return val !== undefined ? val : -1;
};

MyHashMap.prototype.remove = function (key) {
    this.map.delete(key);
};

const obj = new MyHashMap()
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
console.log(obj.get(3));
obj.put(2, 1);
console.log(obj.get(2));
obj.remove(2);
console.log(obj.get(2));
console.log(obj);