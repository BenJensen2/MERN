// David Carrillo, joseph, ivan

/*

Merge Sort PsuedoCode:

- create an empty array, take a look at the smallest values in each input array

- While there are still values we haven't looked at:

    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array

    - If the second value in the first array is larger than the value in the second array, push te value in the second array into our results and m ove on to the next value in the second array

    - Once we exhuast one array, push in all remaining values from the other array


    - Break up the array into halves until you have arrays taht are empty
    - once you have smaller sorted arrays, merge those arrays with other arrays until you back at the full length of the array you are back at the full length of the array
    - Once the array has been merged back together, return the merged (and sorted) array

*/



function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // check length
    let mid = Math.floor(arr.length / 2); // find mid point
    let left = mergeSort(arr.slice(0, mid)); // call mergersort on left
    let right = mergeSort(arr.slice(mid)); // call mergesort on right
    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));