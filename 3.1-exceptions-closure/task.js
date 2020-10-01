const num = document.getElementById("count");
function parseCount(num) {
    let parse = Number.parseInt(num);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    };
    return parse;
};

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(e) {
        return e;
    };
};


class Triangle {
    constructor(a, b, c) {
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        };

        this.a = a;
        this.b = b;
        this.c = c;
    };

    getPerimeter() {
        try {
            return Number(this.a + this.b + this.c)
        } catch(e) {
            return 'Ошибка! Треугольник не существует';
        };
    };

    getArea() {
        try {
            const halfmeter = this.getPerimeter() / 2;
            return Number(Math.sqrt(halfmeter * (halfmeter - this.a) * (halfmeter - this.b) * (halfmeter - this.c)).toFixed(3));
        } catch(e) {
            return 'Ошибка! Треугольник не существует';
        };
        
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return Triangle.getPerimeter().getArea();
    };
};