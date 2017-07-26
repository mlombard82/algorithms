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

//SOLUTION. We'll first write a helper function

function reverseWords(message){
    var messageArray = message.split('');

    //first we reverse all char in the entire messageArray
    reverseCharacters(messageArray, 0, messageArray.length - 1);
    
    // this gives us the right word order
    // but with each word backwards

    //now we'll make the words forward again
    //by reversing each word's characters

    //we hold the index of the *start* of the current word
    //as we look for the *end* of the current word
    var currentWordStartIndex = 0;
    for(var i = 0; i <= messageArray.length; i++){

        //found the end of the current word!
        if(i === messageArray.length || messageArray[i] === ' '){

            //if we haven't exhausted the string our next word's 
            //start is one character ahead
            reverseCharacters(messageArray, currentWordStartIndex, i - 1);
            currentWordStartIndex = i + 1;
        }
    }

    return messageArray.join('');
}

function reverseCharacters(messageArray, startIndex, endIndex){
    //walk towards the middle, from both sides
    while(startIndex < endIndex){
        //swap the front char and back char
        var temp = messageArray[startIndex];
        messageArray[startIndex] = messageArray[endIndex];
        messageArray[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
}

