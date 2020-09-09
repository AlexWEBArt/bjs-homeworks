"use strict"

String.prototype.isPalindrome = function() {
    let strReverse = this.toLowerCase().split('').reverse().join('').split(' ').join('');
    
    if (this.toLowerCase().split(' ').join('') === strReverse) {
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
    let date = new Date(), verdict;
    let diff = (date.getTime() - new Date(birthday)) / (60 * 60 * 24 * 1000);
    let age = diff / 365.242;
    
    if (age >= 18) {
        verdict = true;
    }   else {
        verdict = false;
    };

    return verdict;
};