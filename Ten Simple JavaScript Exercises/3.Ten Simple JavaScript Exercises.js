//Ten Simple JavaScript Exercises
//Based on http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
//
//To see the this code run, visit the JSFiddle at http://jsfiddle.net/lisafrench/3YBWV/
//
//JavaScript Exercise 3:
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var testChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

for (var i = 0; i < testChars.length; i++) {
    var vowel = 'false (' + testChars[i] + ' is not a vowel)';
    for (var j = 0; j < vowels.length; j++) {
        if (testChars[i] === vowels[j]) {
            vowel = 'true (' + testChars[i] + ' is a vowel)';
        }
    }
    console.log(vowel);
}