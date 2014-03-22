//Ten Simple JavaScript Exercises
//Based on http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
//
//To see the this code run, visit the JSFiddle at http://jsfiddle.net/lisafrench/CmHH8/
//
//JavaScript Exercise 4:
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function checkConsonants(letterToCheck) {
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var isConsonant = false;

    for (i = 0; i < consonants.length; i++) {
        if (letterToCheck == consonants[i]) {
            isConsonant = true;
        }
    }
    return isConsonant;
}

function translate(funString, letterO) {

    console.log('The original string is: "' + funString + '"');
    console.log('The separator is: "' + letterO + '"');

    var newString = '';

    for (var i = 0; i < funString.length; i++) {
        if (checkConsonants(funString[i])) {
            newString += funString[i] + letterO + funString[i];
        } else {
            newString += funString[i];
        }
    }
    console.log('The "rövarspråket" result is: ' + '"' + newString + '"');
}

translate('this is fun', 'o');