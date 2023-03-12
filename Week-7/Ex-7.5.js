const arr = [-10, 20];
const input = 30;

function findDifference(arr, val) {

    if (arr.length > 1) {
        let length = arr.length - 1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr [length]) {
                if (arr[i] - arr[length] === val) {
                    return 1;
                };
            }
            if (arr[i] < arr[length]) {
                if (arr[length] - arr[i] === val) {
                    return 1;
                }
            }

        }
    }

    return 0;
}

const result = findDifference(arr, input);

console.log(result);

/* 
    Time Complexity - O(N)
    Space Complexity - O(1)
*/
