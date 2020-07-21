// Ben Jensen
//David Carrillo
//Joseph Sunderland
//Taichi Koga

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr){
    for(var i = 0; i < arr.length-1; i++) {
        for(var j = 0; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

}


/*

function bubbleSort(arr){
var noSwaps;
for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j+1]) {
    var temp = arr[j];
    arr[j] =arr[j+1];
    arr[j+1] =temp;

    noSwaps = false;
    }
  }
if(noSwaps) break;
 }
return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

*/


// Selection Sort


// Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list.
// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr){
var min = arr[0];
    for (i = 0; i < arr.length-1; i++){
        if(arr[i] < min){
        min = arr[i];
        }
    }
}

function selectionSort(arr){
    for(i = 0; i < arr.length; i++){
        var min = arr[i];
        for(j = i+1; j < arr.length-1; j++){
            if(arr[j] < min){
                min = arr[j];
            }
        }

    }
}

/*

store the first element as the lowest value

compare this item to the next item in the array until smaller val is found

if lower val is found, designate new min, continue to end fo array

if min is not the value you initially began, swap values

repeat until array is sorted.


function selectionSort(arr){
    for(var i = 0; i < arr.length, i++) {
    var lowest = i;

for(var j = i + 1, j < arr.length; j++) {

        if (arr[j] < arr[lowest]) {
        lowest =j;
            }
        }
            if (i !== lowest)  {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] =temp;
            }

        }
        return arr;
    }

*/