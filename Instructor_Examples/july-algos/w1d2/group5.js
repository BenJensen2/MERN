//taichi,matthew merrill,fabian gonzalez
function insertionSort(arr) {
    let len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] < arr[j]);
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
};

function insertionSort(arr) {
    let len = arr.length;
    for(var i = 1; i < len; i++) {
        var j = i - 1;
        var temp = arr[i];
        while(arr[j] > temp) {
            if(j >= 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
        }
        arr[j + 1] = temp;
    }
    return arr;
};

let array = [5,2,7,3,9,1];
insertionSort(array);
console.log(array);

// destructuring
[a, b] = [1, 2, 3]
let a = 1;
let b = 2;
[a, b] = [b, a];
a; // => 2
b; // =>1


//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted


// this sort splits the array into two portions (conceptually, not literally)
//
// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// can shift or swap target element until it reaches desired position
// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

//   // swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// bonus challenge: use destructuring for your swap