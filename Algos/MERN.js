

function intersectSortedArray(arr1,arr2){
  console.log("function started")
  // console.log(typeof arr1)
  if(arr1.length==0 || arr2.length==0){
    console.log("empty array")
    return null
  }
  else{
    var intersects = {}; // Dictionary to keep intersected values & ensure no duplicates
    var contains = [];  // array to keep intersected values
    for(i=0;i<arr1.length;i++){
      for(j=0;j<arr2.length;j++){
        console.log("arr1:  " + arr1[i] + "     arr2:  " + arr2[j])
        if(arr1[i]==arr2[j]){
          console.log("\narr1     ==  arr2")
          console.log("arr1:  " + arr1[i] + "     arr2:  " + arr2[j])
          if (!intersects["${arr1[i]}"]){
            intersects["${arr1[i]}"] = arr1[i]; // Not Working
            contains.push(arr1[i]);
          }
        }
      }
    }
  
    return contains;
  };
  

}
// var arr1 = [];



// let arr1 = [1,2,2,2,3,4,5,6,7];
// var arr2 = [2,2,2,7,8,9];



// console.log(intersectSortedArray(arr1,arr2));

// #1 - Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

// k = 0
// i = 0
// while k < n
// if k ==





// Find min & max
// Initialize min = 0
// Initilaze max = 0
// For loop through array
// if arr[i] < min then min = arr[i]
// if arr[i] > max then max = arr[i]

// for loop again i = 0 to max
// if 

var arr1 = [5, 2, 7, 8, 4, 9, 3, 0, 1]
function findMissingValue(arr){
  var missingNumber = 0;
  var keepLooping = true;
  var isMissing = false
  var end = arr.length
  var i = 0;
  while (keepLooping == true){
    console.log("Loop: ",i, "value: ",arr[i], "Missing Number: ", missingNumber)
    isMissing = true
    if(arr[i]==missingNumber){
      isMissing = false;
      missingNumber++;
    }
    i++
    if(i == end){
      if(isMissing == true){
        return missingNumber;
      }
      i = 0;
    }
  }
}

// console.log(findMissingValue(arr1))


// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of numbers that has first been sorted, then rotated by an unknown amount.
// Find and return the minimum value. Don't use any inbuilt Array functions.

//                       v here is out rotation point
//                       v
//                       v
// Given [9, 10, 11, 12, 1, 5, 6, 8]
// return 1

function minOfSortedRotated(arr){

}

// Check larger



// loop through each number in the array looking for the upper left number
// create loop to go through first square of original array
//   - Create a function to search a set of columns & rows
// Then move on to outer layer for each search

// Hardest Part: loop through matrix



// matrix search

// given two matrices, return true or false if the second matrix is contained within the first.
// a matrix is just an array of arrays
// we can assume our matrices are rectangular

function matrixLoop(matrix,start,layer,reference){
  console.log("Start:",start[0],start[1])
  console.log("Looking For: ",reference)
  for(j=0;j<=layer; j++){
    var val = matrix[j][layer];
    console.log("Found ",reference,"j: ",j, "val: ", val)
    if(val == reference){
      console.log("Matrix 1: ",j,layer)
      return true
    }
  }
  for(i=layer-1;i>=0;i--){
    var val = matrix[layer][i]
    console.log("i: ",i, "val: ", val)
    if(val == reference){
      console.log("Matrix 1: ",layer,i)
      return true
    }
  }
}

function matrixSearch(matrix1, matrix2) {
  var rows1 = matrix1.length
  var rows2 = matrix2.length;
  var columns1 = matrix1[0].length
  var columns2 = matrix2[0].length

  console.log("Rows 1: ",rows1, "Columns 1: ",columns1,"Rows 2:",rows2,"Columns 2:", columns2)
  if(rows1 <rows2 || columns1 < columns2){
    console.log("The second matrix is larger")
    return false
  }

  var layer = 0;
  var start = [0,0]
  var reference = matrix2[0][0];
  matrixLoop(matrix1,start,layer,reference)
}



x = [
    ['a', '1', 'c'], // 0
    ['3', '2', 'c'], // 1
    ['a', 'b', 'f'], // 2
    ['a', 'c', 'x']  // 3
] //  0    1    2

// the first element is the y axis
// the second element is the x axis
// console.log(x[0][0])

y = [
    ['a', 'c'],
    ['b', 'c']
]


z = [['a', 'c'], ['a', 'c']];

// i column
// j row



// matrixLoop(x,0)
// matrixSearch(x,y)

/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/
const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(string1) {
    const words = string1.split(" ")
    console.log(words)
    const len = words.length;
    console.log(len)
        // const wordsarr = []
    var newStr = ""
    for (i = len-1; i>=0; i--) {
      console.log("i: ",i,"i Word",words[i])
        newStr += " " + words[i];
    }
    console.log("This is the new String",newStr)
    return newStr
}

// reverseWordOrder(str1)
// wordsarr.push(words[i]);
// split by space
// loop through each word backwards pushing to a new string
// concat strings & print


/*
  #2
  Reverse Words
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const stra = "hello";
// const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWord(str) {
  var splitStr = str.split(" ")
  console.log(splitStr)
  for (i=0;i<=splitStr.length-1;i++){
    var revstr = "";
    for (var j = splitStr[i].length-1; j >= 0; j--) {
        revstr += splitStr[i].charAt(j);
        console.log("This is the rev String",revstr)
    }
    splitStr[i] = revstr;
    console.log("This is the reverse string",revstr)

  }
    // return revstr
}

reverseWord(str3)

function ReverseWord(str) {
  const revArray = [];
  const length = str.length - 1;

  for (let j = length; j >= 0; j--) {
      revArray.push(str[j]);
  }


  return revArray.join('')
}

// console.log(ReverseWord("hello this"))

// ReverseWord(stra)
