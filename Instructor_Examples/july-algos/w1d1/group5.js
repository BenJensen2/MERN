// Names:
//1. Don Nguyen
//2. Bryce Alderete
//3. Zach Cowan

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr){
for( var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
        if( arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] =arr[j+1];
        arr[j+1] = temp;
        }
    }
}
return arr;
}
console.log(bubbleSort([1,4,5,2,7,6,9,8]));

// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr){
    for( var i = 0; i < arr.length; i++){
        var small = arr[i];
        for(var j = i +1; j < arr.length; j++){
            if(small > arr[j]){
                small = arr[j];
            }
            }
        }
}