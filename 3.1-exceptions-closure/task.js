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
        return Number(this.a + this.b + this.c)
    };

    getArea() {
        const halfmeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfmeter * (halfmeter - this.a) * (halfmeter - this.b) * (halfmeter - this.c)).toFixed(3));
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        let errorTriangle = {
            
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
        return errorTriangle;
    };
};