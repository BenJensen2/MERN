// MERN Algos Week 1 - Sorting Algorithms


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr){
    var len = arr.length;
        // 1        // 2    // 4
    for(var i = 0; i < len; i++){
        // 3
        for(var j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// len = 4
// arr = [ 55, 99, 88, 122 ]
//             i
//              j j+1





// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.bigocheatsheet.com/
// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr){
    var len = arr.length;
    // 0 1 2
    for(var i = 0; i < len; i++){
        var min = i;
        for(var j = i + 1; j < len; j++){
            if(arr[min] > arr[j]){
                min = j
            }
            if(min !== i) {
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    return arr;
}

// [1, 4, 9]

// min = 2
// len = 3
//





// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// This visualizer is kind of not great
// https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

// Try this one: https://www.programmingsimplified.com/images/c/selection-sort.png
// https://www.geeksforgeeks.org/selection-sort/
