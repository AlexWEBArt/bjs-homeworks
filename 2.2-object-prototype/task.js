"use strict"

String.prototype.isPalindrome;

new String("А роза упала на лапу Азора")

function isPalindrome(string) {
    this.str = string;
    let strReverse = str.toLowerCase().split('').reverse().join('').split(' ').join('');
    
    if (str.toLowerCase().split(' ').join('') === strReverse) {
        return true;
    }   else {
        return false;
    };
};


function getAverageMark(marks) {
    let averageMark = 0, average = 0, sum = 0, total = marks.length;

    for (let index = 0; index < total; index++) {
        sum += marks[index];
        average = sum / total;
    };

    return averageMark = Math.round(average);
};

function checkBirthday(birthday) {
    let date = new Date(), yearMs = 31536000000, verdict;
    
    let age = (+date - +birthday) / yearMs;

    
    if (age >= 18) {
        verdict = true;
    }   else {
        verdict = false;
    };

    return verdict;
};