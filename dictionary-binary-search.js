import words from "./words.js";

function binarySearch(needle, haystack){
   
    let currentArrayEndPoint = haystack.length;
    let currentArrayStartPoint = 0;
    let currentArrayLength = currentArrayEndPoint - currentArrayStartPoint;
    let middleWord = Math.round((currentArrayEndPoint + currentArrayStartPoint) / 2);

    while(currentArrayLength > 1){
    

        if(needle == (haystack[middleWord])){
            return true;
        } else if(needle > haystack[middleWord]){
            currentArrayStartPoint = middleWord + 1;
            middleWord = Math.round((currentArrayEndPoint + currentArrayStartPoint) / 2);
        } else if(needle < haystack[middleWord]){
            currentArrayEndPoint = middleWord - 1;
            middleWord = Math.round((currentArrayEndPoint + currentArrayStartPoint) / 2);
        }
    currentArrayLength = currentArrayEndPoint - currentArrayStartPoint;
    }

    if(needle == haystack[currentArrayEndPoint] || needle == haystack[currentArrayStartPoint]) {
        return true;
    } else {

    return false;

    }
}

export default function(word){
    return binarySearch(word, words);
}