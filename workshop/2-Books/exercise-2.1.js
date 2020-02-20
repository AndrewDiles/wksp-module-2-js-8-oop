// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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


console.log(book1, book2, book3, book4, book5);

