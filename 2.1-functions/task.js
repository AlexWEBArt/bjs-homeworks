"use strict"

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

function getSolutions(a, b, c) {
    let x1, x2,
    D= Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
        return {D: D, roots: []};
    } else if (D == 0) {
        x1 = -b / 2 * a;
        return {D: D, roots: [x1]};
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D, 2)) / 2 * a;
        x2 = (-b - Math.sqrt(D, 2)) / 2 * a;
        return {D: D, roots: [x1, x2]};
    };
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    }   else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }   else if (result.Dt > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
};

getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3,4],
    chemistry: [2],
    french: [4, 4]
});

function getAverageScore(data) {
    let averageData = {}, average = 0, cont = 0, sum = 0;
      
        
    for (let prop in data) {
        
        let marks = data[prop];
        cont ++;
        averageData[prop] = getAverageMark(marks);
        sum = sum + averageData[prop];
    };

    if (sum == 0 || null || undefined || NaN) {
        averageData.average = 0;
    } else {
        averageData.average = sum / cont;
    };
    
    return averageData
};
  
function getAverageMark(marks) {
    let sum = 0, average = 0, total = marks.length;

    for (let index = 0; index < total; index++) {
        sum += marks[index];
        average = sum / total;
    };
      
    return average
};

getPersonData({aaa: 0, bbb: 0});
getPersonData({aaa: 0, bbb: 1});
getPersonData({aaa: 1, bbb: 1});
getPersonData({aaa: 1, bbb: 0});

function getPersonData(secretData) {
    return { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) };
};

function getDecodedValue(secret) {
    if (secret == 1) {
        return "Эмильо";
    } else if (secret == 0) {
        return "Родриго";
    };
};