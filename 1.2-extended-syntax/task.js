"use strict"

function getResult(a,b,c) {
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        x[0] = (-b + Math.sqrt(discriminant, 2)) / 2 * a;
        x[1] = (-b - Math.sqrt(discriminant, 2)) / 2 * a;
    } else if (discriminant == 0) {
        x[0] = -b / 2 * a;
    } else {
        x = [];
    };

    return x;
};

function getAverageMark(marks) {

    let total = marks.slice(0, 5).length;
    let sum = 0;
    let averageMark;

    for (let i=0; i < total; i++) { 
        sum += marks[i];
    };
    
    if (total == 0) {
        averageMark = 0;
    } else {
        averageMark = sum / total;
    };

    return averageMark;
};

function askDrink(name,dateOfBirthday) {
    
    let today = new Date();
    let yearToday = today.getFullYear();
    let yearBirthday = dateOfBirthday.getFullYear();
    let age = yearToday - yearBirthday;
    let result;

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };

    return result;
};