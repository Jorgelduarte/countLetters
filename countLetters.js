function countLetters(string) {
    var lettersCountObj = {};
    for(var x = 0; x < string.length; x++) {
        var l = string[x];
        if (l !== " ") {
            if (lettersCountObj[l] === undefined){
            lettersCountObj[l] = 0;
            }
        lettersCountObj[l] += 1
        }
    }
 return lettersCountObj;
}
console.log(countLetters("lighthouse in the house"));