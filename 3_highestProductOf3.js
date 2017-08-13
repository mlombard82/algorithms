function highestProductOf3(arrayOfInts){
  if(arrayOfInts.length < 3){
    throw new Error('Less than 3 times!');
  }
  
  // we are going to start at the 3rd item(at index 2)
  // so pre-populate highests and lowest based on the first 2 items.
  
  var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  
  var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  
  //except this one, we pre-populate it for the first 3 items.
  // this means in our first pass it'll check against itself, that's ok.
  
  var highestProductOf3 = arrayOfInts[0]*arrayOfInts[1]*arrayOfInts[2];
  
  //walk through items starting at index 2
  
  for (var i = 2; i < arrayOfInts.length; i++){
    var current = arrayOfInts[i];
    
    // do we have a new highestProductOf3?
    // it's either the current highest,
    // or the current * highestProductOf2,
    // or current * lowestProductOf2
    
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );
    
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );
    
    lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
    );
    
    highest = Math.max(highest, current);
    
    lowest = Math.max(lowest, current);
  }
  
  return highestProductOf3;
}