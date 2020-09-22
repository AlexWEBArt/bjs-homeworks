class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    };

    fix() {
        return this.state *= 1.5;
    };

    set state(point) {
        if (point < 0) {
            this._state = 0;
        } else if (point > 100) {
            this._state = 100;
        } else {
            this._state = point;
        };
    };

    get state() {
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "detective";
    };
};

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let prop in this.books[i]) {
                if (prop == type && this.books[i][prop] == value) {
                    return this.books[i];
                };
            };
        };
        return null;
    };

    giveBookByName(bookName) {
        let box;
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name == bookName) {
            box = this.books[i];
            this.books.splice(i, 1);
          }
          return box;
        }
        return null;
    }
};

class StudentLog {
    constructor(name) {
        this.name = name;
        this.score = {};
    };

    getName() {
        return this.name;
    };

    addGrade(grade, subject) {
    
        if (grade <= 5 && grade >= 1) {
            if (this.score[subject] != undefined) {
                this.score[subject].push(grade);
            } else {
                this.score[subject] = [grade];
            };

            return this.score[subject].length;
        } else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${this.score[subject].length}`;
        };
    };

    getAverageBySubject(subject) {
        
        if (this.score[subject] != undefined) {
            let sum = 0, average = 0, total = this.score[subject].length;

            for (let i = 0; i < total; i++) {
            sum += this.score[subject][i];
            average = sum / total;
            };
      
            return average;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let totalAverage = 0, cont = 0, totalScore = 0;
          for (let prop in this.score) {
              cont ++;
              totalScore += this.getAverageBySubject(prop);
              totalAverage = totalScore / cont;;
          }
          return totalAverage
      }
}