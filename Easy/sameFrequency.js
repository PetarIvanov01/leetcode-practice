function sameFrequency(num1, num2) {

    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) {
        return false;
    }
    let objNum1 = {};

    for (let i = 0; i < num1.length; i++) {
        objNum1[num1[i]] = (objNum1[num1[i]] || 0) + 1;
    }
    for (let i = 0; i < num2.length; i++) {
        if (objNum1[num2[i]] === undefined) {
            return false
        }
        else {
            objNum1[num2[i]]--;
        }
    }
    return true

}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false