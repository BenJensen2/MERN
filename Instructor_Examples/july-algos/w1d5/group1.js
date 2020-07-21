//Jason Brady, Nema,Joseph Sunderland


// Array: Partition

// partition(arr, left, right){}
// partition(arr, left, right){}
// [99, 77, 66, 33, 22, 11 ...... 222, 111]
// arr, 0, 5
//

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value


// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

// function partition(arr, left = 0, right = arr.length - 1) {
//     let leftIdx = left;
//     let rightIdx = right;
//     let pivot = Math.floor((left + right) / 2);

//     while (arr[leftIdx] < arr[pivot]) {
//         leftIdx++;
//     }
//     while (arr[rightIdx] > arr[pivot]) {
//         rightIdx--;
//     }
//     [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];


// }

let swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

let PartitionLomuto = (arr, left, right) => {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, right);
    return i;
}


let quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (arr.length > 1) {
        let idx = PartitionLomuto(arr, left, right);
        if (left < idx - 1) {
            quickSort(arr, left, idx - 1)
        }
        if (right > idx) {
            quickSort(arr, idx, right)
        }
    }
    return arr;
}