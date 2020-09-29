const num = document.getElementById("count");
function parseCount(num) {
    let parse = Number.parseInt(num);
    if (isNaN(parse) === isNaN(NaN)) {
        throw new Error("Невалидное значение");
    };
    return parse;
};

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(e) {
        return "Невалидное значение";
    };
};


class Triangle {
    constructor(a, b, c) {
        if ((a + b) <= c && (a + c) <= b && (b + c) <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        };
    };

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
        return Math.sqrt(this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.a) * (this.getPerimeter() / 2 - this.b) * (this.getPerimeter() / 2 - this.c)).toFixed(3);
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch(e) {
        new Triangle(a, b, c).getPerimeter().getArea();
        return "Ошибка! Треугольник не существует";
    };
    
}