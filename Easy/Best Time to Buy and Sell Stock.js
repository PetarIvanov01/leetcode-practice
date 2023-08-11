let maxProfit = function (prices) {

    let leftBuy = 0;
    let rightSell = 1;
    let maxProfit = 0;

    while (rightSell < prices.length) {

        if (prices[leftBuy] < prices[rightSell]) {
            let profite = prices[rightSell] - prices[leftBuy];
            maxProfit = Math.max(profite, maxProfit);
        }
        else {
            leftBuy = rightSell;
        }
        rightSell++;
    }

    return maxProfit;

}


let result = maxProfit([6, 3, 5, 2, 8, 4]);
console.log(result);