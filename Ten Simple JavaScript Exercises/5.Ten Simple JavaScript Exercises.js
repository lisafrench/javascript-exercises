//Ten Simple JavaScript Exercises
//Based on http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
//
//To see the this code run, visit the JSFiddle at http://jsfiddle.net/lisafrench/xrQUD/
//
//JavaScript Exercise 5:
//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var numbers = [1, 2, 3, 4];

function sum() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function multiply() {
    //Setting total to one, since multiplying by zero will yeild zero
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = total * numbers[i];
    }
    return total;
}
console.log('The summed result of ' + numbers + ' is: ' + '"' + sum() + '"');
console.log('The multiplied result of ' + numbers + ' is: ' + '"' + multiply() + '"');