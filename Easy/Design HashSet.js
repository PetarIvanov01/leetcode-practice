const MyHashSet = function () {
    this.collection = []; // Use 'this.collection' to store the set elements
};

MyHashSet.prototype.add = function (key) {
    if (!this.contains(key)) {
        this.collection.push(key); // Use 'this.collection' to access the array
    }
};

MyHashSet.prototype.remove = function (key) {
    if (this.contains(key)) {
        const index = this.collection.indexOf(key);
        this.collection.splice(index, 1);
        return true;
    }
    return false;
};

MyHashSet.prototype.contains = function (key) {
    return this.collection.indexOf(key) !== -1;
};

const obj = new MyHashSet();
obj.add(1);
obj.add(2);
console.log(obj.contains(1)); // true
console.log(obj.contains(3)); // false
obj.add(2);
console.log(obj.contains(2)); // true
obj.remove(2);
console.log(obj.contains(2)); // false
