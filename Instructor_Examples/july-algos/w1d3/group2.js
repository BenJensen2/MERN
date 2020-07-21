//Jason Brady, Fabian Gonzalez, Bryce


// Merge Sort
// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - arr.concat(array2, array3, ..., arrayX)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals
//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// while loop
// left and right arrays
// leftIndex and rightIndex
// while leftIndex < leftArr.length and rightIndex < rightArr.length
//compare leftArr[leftIndex] with rightArr rightIndex
//whichever is lower, push to newArr, increment index
//statement to push any remaining elements in either array to newArr
// return newArr

function mergeArr(leftArr, rightArr) {
    let newArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            newArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            newArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    if (leftIndex < leftArr.length) {
        newArr = newArr.concat(leftArr.slice(leftIndex))
    }
    if (rightIndex < rightArr.length) {
        newArr = newArr.concat(rightArr.slice(rightIndex))
    }
    return newArr;
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return mergeArr(mergeSort(left), mergeSort(right));
}