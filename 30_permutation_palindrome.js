/*Our approach is to check that each character appears an even number of times, allowing for only one characters to appear
 an odd number of times (a middle character). This is enough to determine if a permutation of the input string is a palindrome. the function will be called
 hasPalindromePermutation and will return true/false */

 function hasPalindromePermutation (theString){
    var unpairedCharacters = new Set();

    for(var i = 0; i < theString.length; i++){
        var char = theString[i];
        
        if(unpairedCharacters.has(char)){
            unpairedCharacters.delete(char);
        } else (
            unpairedCharacters.add(char)
        )
    }

    return unpairedCharacters.size <= 1;
 }