// Jason Brady
// Dallas MArtinez
// Matthew Merrill
function bubbleSort(arr){
//iterate through arr, starting with i=1, compare arr[i] with arr[i-1]
// if arr[i-1]>arr[i], swap
//repeat,ignoring arr[arr.length-i]
let temp = 0;
for (let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length-i; j++){
        if (arr[j-1] > arr[j]){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
}
}
return arr;
}

// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr){
let min =arr[0];
// iterate through array, finding minimum value
}






// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// This visualizer is kind of wack
// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

// Try this one: https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/
