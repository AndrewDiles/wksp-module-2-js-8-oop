// From 2.3
// Copy over all of the code from 2.3...

class Book {
    constructor(title, genre, author, read, start, finish) {
        this.title = title || '';
        this.genre = genre || '';
        this.author = author || '';
        this.read = read || '';
        this.startReadDate = start || '';
        this.endReadDate = finish || '';
    }
}

book1 = new Book('The Lord of the Rings', 'High-Fantasy', 'J.R.R.Tolkien', true, '2005', '2005');
book2 = new Book('Legacy of Blood', 'Fantasy', 'Richard A. Knaak', true, '2003', '2003');
book3 = new Book('The Fionavar Tapestry', 'High-Fantasy', 'Guy Gavriel Kay', true, '2005', '2005');
book4 = new Book('The Bible', 'Religious', 'various', false);
book5 = new Book('Buried Within', 'High-Fantasy', 'Andrew Diles', false, '2016', '2023');


class BookList {
    constructor() {
        this.booksread = 0;
        this.booksUnread = 0;
        this.books = [];
        this.last = null;
        this.current = null;
        this.next = null;
    }
    addbook = (object) => {
        this.books.push(object);
        object.read ? this.booksread ++ : this.booksUnread ++;
    }
    startReading = (title) => {
        if (this.current != null) {
            this.last = this.current;
            // this.booksread ++;  I realized maybe you picked up another book without finishing the last one
        }
        this.current = title;
        const book = this.books.find(book => book.title === title);  //do something if book is not in library?  //added
        book.startReadDate = new Date(Date.now())
    }
    finishReading = (title) => {
        this.lastRead = title;
        const book = this.books.find(book => book.title === title);
        book.endReadDate = new Date(Date.now())
        book.read = true;
        this.booksUnread --;
        this.booksread ++;
    }

}

let homeLibrary = new BookList();
homeLibrary.addbook(book1);
homeLibrary.addbook(book2);
homeLibrary.addbook(book3);

console.log(homeLibrary);

homeLibrary.addbook(book4);
homeLibrary.addbook(book5);
console.log(homeLibrary);

homeLibrary.startReading('The Bible');
homeLibrary.startReading('Buried Within');
console.log(homeLibrary);

homeLibrary.finishReading('The Bible');
console.log(homeLibrary);


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
