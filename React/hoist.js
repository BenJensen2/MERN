// #1
// console.log(hello);                                   
// var hello = 'world';
//  var hello
//  console.log(hello): undefined
//  hello = 'world';
//  OUTPUT: undefined

// #2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
//  var needle
//  needle = 'haystack'
//  test() : undefined
//  var needle
//  needle = 'magnet'
//  console.log('magnet')
//  OUTPUT: magnet

// // #3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//  var brendan
//  brendan = 'super cool'
//  brendan = 'only okay'
//  OUTPUT: 'only okay'  WRONGGGG Function never called
//  OUTPUT: super cool



// // #4
// var food = 'chicken';
// console.log(food);
// eat(); // : undefined
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//  var food
//  food = 'chicken'
//  OUTPUT: chicken
//  OUTPUT: undefined   WRONGGGG WHY?
//  var food = 'half-chicken'
//  OUTPUT: half-chicken
//  var food
//  var food = 'gone'

// // #5
// mean(); // : undefined
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//  OUTPUT: undefined
//  OUTPUT: undefined
//  

// #6
// console.log(genre);
// var genre = "disco";
// rewind(); // : undefined ??
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// #7
// dojo = "san jose";
// console.log(dojo);
// learn(); // : undefined
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // can't assign string to dictionary
    }
    return dojo;
}

// OUTPUT: None.  RETURN: dojo = {name: "Chicago", students: 65, hiring: true}
// OUTPUT: None.  RETURN: "closed for now"