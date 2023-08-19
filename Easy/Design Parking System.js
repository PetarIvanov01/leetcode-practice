const ParkingSystem = function (big, medium, small) {

    this.collection = {
        1: big,
        2: medium,
        3: small,
    }

};
ParkingSystem.prototype.addCar = function (carType) {

    if (this.collection[carType -1 ] === 0) {
        return false;
    }
    else {
        this.collection[carType]--;
        return true;
    }

};
const obj = new ParkingSystem(1, 1, 0);
console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
