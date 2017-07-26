/*
write a function reverseWords() that takes a string message
and reverses the order of the words in place
*/

/* Ex of 2 functions that do the same thing. One is in-place
the other one is out of place. Generally, out-of-place Alg are
considered safer because they AVOID SIDE EFFECTS.*/

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


/*Let's start reversing all characters in the message */

function reverseCharacters(message){
    var messageArray = message.split('');

    // walk towards the middle from both sides
    for(var frontIndex = 0; frontIndex < messageArray.length/2; frontIndex++){
        var backIndex = messageArray.length - 1 - frontIndex;
        //swap the front char and back char
        var tempChar = messageArray[frontIndex];
        messageArray[frontIndex] = messageArray[backIndex];
        messageArray[backIndex]= tempChar;
    }

    return messageArray.join('');
}
