const arr = [-1, 2, 1, -4];

function sum(arr, target) {
    if (arr.length < 3) return 0;

    arr = arr.sort((a,b)=>a-b);

    let closest = 0;

    for(let i = 0; i < arr.length; i++) {
        let last = arr.length - 1;
        let left = i + 1;

        while (left < last) {
            let sum = arr[i] + arr[left] + arr[last];

            if (sum === target) 
                return target;

            if (Math.abs(sum - target) < Math.abs(closest - target)){
                closest = sum;
            }

            
            if (sum > target) {
                last--;
            } else {
                left++;
            }
        }
    }
    return closest;
}

console.log(sum(arr, 1));

/* Time Complexity = O(N)
    Space Complexity = O(1) */

