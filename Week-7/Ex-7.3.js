const arr = [0, 2, 1, 2, 0];
const n = 5;

function sort(arr, n) {
    let count0 = 0;
    let count1 = 1;
    let count2 = 2; 

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            count0++;
        }

        if (arr[i] === 1) {
            count1++;
        }

        if (arr[i] === 2){
            count2++;
        }
    }

    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }

    for (let i = count0; i < count0 + count1; i++) {
        arr[i] = 1;
    }

    for (let i = count0 + count1; i < n; i++) {
        arr[i] = 2;
    }
}

const result = sort(arr, n);
console.log(result);

/* 
    Time Complexity - O(N)
    Space Complexity - O(1)
*/
