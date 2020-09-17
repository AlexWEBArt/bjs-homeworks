class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    };

    fix() {
        this.state *= 1,5;
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
        super(name, releaseDate, pagesCount, state = 100);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.author = author;
        this.type = "book";
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.author = author;
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.author = author;
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
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
          } else {
            box = null
          }
        }
        return box;
    }
};