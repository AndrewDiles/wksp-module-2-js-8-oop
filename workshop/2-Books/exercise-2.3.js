// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2
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
        this.bookUnread = 0;
        this.books = [];
        this.last = null;
        this.current = null;
        this.next = null;
    }
    addbook = (object) => {
        this.books.push(object);
        object.read ? this.booksread ++ : this.booksread --;
    }

}

let homeLibrary = new BookList();
homeLibrary.addbook(book1);
homeLibrary.addbook(book3);
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

console.log(homeLibrary);
// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
