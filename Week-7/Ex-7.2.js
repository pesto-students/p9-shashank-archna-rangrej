let arr = [[1,2,3],[4,5,6],[7,8,9]];

function spiralMatrix(arr) {
    let spiralArr = [];

    if(arr.length  === 0) {
        return spiralArr;
    }
    let rowStart = 0;
    let rowEnd = arr.length - 1;
    let colsStart = 0;
    let colsEnd = arr[0].length - 1;

    while (colsStart <= colsEnd && rowStart <= rowEnd) {
        for(let i = colsStart; i <= colsEnd; i++){
            spiralArr.push(arr[rowStart][i]);
        }
        rowStart++;
        for(let i = rowStart; i <= rowEnd; i++) {
            spiralArr.push(arr[i][colsEnd])
        }
        colsEnd--;
        if (rowStart <= rowEnd){
            for(let i = colsEnd; i>=colsStart; i--) {
                spiralArr.push(arr[rowEnd][i])
            }
        }
        rowEnd--;
        if (colsStart <= colsEnd) {
            for(let i = rowStart; i >= rowEnd; i--) {
                spiralArr.push(arr[i][colsStart])
            }
        }
        colsStart++;
    }

    return spiralArr;
}

const result = spiralMatrix(arr);

console.log(result);
/* 
    Time Complexity O(MN)
    space Complexity O(N)
*/