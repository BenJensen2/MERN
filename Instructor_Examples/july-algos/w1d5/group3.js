/**
David Carrillo, Fabian Gonzalez, Taichi
 */


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        // compare pivot (arr[start]) to arr[i]
        if (pivot > arr[i]) {
            // if pivot (arr[start]) is greater than arr[i], increment start by 1 and swap pivot (arr[start]) with arr[i]
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
PsuedoCode:
- Call the pivot helper on the array

- When the helper return the to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index

- Your base case occurs when you consider a subarray with then than 2 elements

*/

// default left and right values with start and end indexes of the array
function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
            // recursive function on left side of pivot
        quickSort(arr, left, pivotIndex - 1);
        // recursive function on right side of pivot
        quickSort(arr, pivotIndex + 1, right);

    }
    return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));