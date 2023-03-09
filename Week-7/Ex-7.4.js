const arr = [7, 1, 5, 3, 6, 4];

function stock(arr) {
    if (arr.length > 0) {
        let maxProfit = 0;
        let buy = arr[0];
        for (let i=1; i < arr.length; i++) {
            if (buy > arr[i]) {
                buy = arr[i];
            } else if (arr[i] - buy > maxProfit) {
                maxProfit = arr[i] - buy;
            }
        }
        return maxProfit;
    }
    return 0;
}

const result = stock(arr);
console.log(result);
/* 
    Time Complexity - O(N)
    Space Complexity - O(1)
*/