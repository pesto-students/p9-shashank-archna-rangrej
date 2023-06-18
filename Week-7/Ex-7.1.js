function maxSumarray(arr) {
    if (arr.length > 0) {
        let maxSum = 0;
        let sum = 0;
        for (let i=0; i < arr.length; i++) {
            sum += arr[i];

            if (sum < 0) {
                sum = 0;
            } 

            if (sum > maxSum) {
                maxSum = sum;
            }
        }

        return maxSum;
    }

    return 0;
}

const arr = [1, 2, 3, 4, -10];
const result = maxSumarray(arr);
console.log(result);

/* 
    Time Complexity = O(N)
    Space Complexity = O(1)
*/