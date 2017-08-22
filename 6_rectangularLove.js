function findRangeOverlap(point1, length1, point2, length2){

    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    if(highestStartPoint >= lowestEndPoint){
        return {startPoint: null, overlapLength: null};
    }

    //compute the overlap length 
    var overlapLength = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

function findRectangularOverlap(rect1, rect2){

    //get the x and y overlap points and lengths
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    //return null if there is no overlap 
    if(!xOverlap.overlapLength || !yOverlap.overlapLength){
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}

//running a test

var a = {
    leftX: 2,
    bottomY:2,
    width:5,
    height:5,
}

var b = {
    leftX: 3,
    bottomY:3,
    width:5,
    height:1,
}

findRectangularOverlap(a, b);

