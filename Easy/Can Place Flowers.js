const canPlaceFlowers = function (flowerbed, n) {

    if (flowerbed.length === 1 && flowerbed[0] === 0 || n === 0) {
        return true
    }
    let newArr = [0, ...flowerbed, 0]

    for (let i = 1; i < newArr.length - 1; i++) {

        if (newArr[i] === 0 && newArr[i + 1] === 0 && newArr[i - 1] === 0) {
            newArr[i] = 1
            n--;
        }

        if (n === 0) {
            return true
        }

    }

    return false

};
const result = canPlaceFlowers([0, 0, 1, 0, 1], 1)