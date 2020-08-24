"use strict"
function getResult(a,b,c) {
    let coefa = a, coefb = b, coefc = c, x = [];
    let discriminant = Math.pow(coefb, 2) - 4 * coefa * coefc;

    if (discriminant > 0) {
        x[0] = (-coefb + Math.sqrt(discriminant, 2)) / 2 * coefa;
        x[1] = (-coefb - Math.sqrt(discriminant, 2)) / 2 * coefa;
    } else if (discriminant == 0) {
        x[0] = -coefb / 2 * coefa;
    } else {
        x = [];
    };

    return x;
};


function getAverageMark(marks) {

    let array = marks;
    let total = array.slice(0, 5).length;
    let sum = 0;
    let averageMark;

    for (let i=0; i < total; i++) { 
        sum += array[i];
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
    let result

    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };

    return result;
};