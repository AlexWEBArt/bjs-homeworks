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