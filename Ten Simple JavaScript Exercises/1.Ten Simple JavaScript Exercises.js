//Ten Simple JavaScript Exercises
//Based on http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
//
//To see the this code run, visit the JSFiddle at http://jsfiddle.net/lisafrench/Tjwug/
//
//JavaScript Exercise 1:
//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

var numberOne = 2;
var numberTwo = 9999;

function max() {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}

max(numberOne, numberTwo);