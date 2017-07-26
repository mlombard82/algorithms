/*
write a function reverseWords() that takes a string message
and reverses the order of the words in place
*/

/* Ex of 2 functions that do the same thing. One is in-place
the other one is out of place*/

function squareArrayInPlace (intArray){
    intArray.forEach(function(int, index){
        intArray[index] = Math.pow(int, 2);
    });
    return intArray;
};


function squareArrayOutOfPlace(intArray){

    var squaredArray = [];

    intArray.forEach(function(int, index){
        squaredArray[index] = Math.pow(int, 2)
    });

    return squaredArray;
};