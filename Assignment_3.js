class Book {
    #isbn;  
  
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.#isbn = isbn;
      this.available = true;
    }
  
    get isbn() {
      return this.#isbn;
    }
  
    borrowBook() {
      if (this.available) {
        this.available = false;
        console.log(`You have borrowed '${this.title}'.`);
      } else {
        console.log(`'${this.title}' is currently not available.`);
      }
    }
  
    returnBook() {
      this.available = true;
      console.log(`You have returned '${this.title}'.`);
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Added '${book.title}' to the library.`);
    }
  
    removeBook(isbn) {
      const index = this.books.findIndex(book => book.isbn === isbn);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Removed '${removedBook.title}' from the library.`);
      } else {
        console.log("Book with the given ISBN not found.");
      }
    }
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title) || null;
    }
  }
  
  class DigitalLibrary extends Library {
    downloadBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (book) {
        if (book.available) {
          console.log(`Downloading '${book.title}'...`);
        } else {
          console.log(`'${book.title}' is currently not available for download.`);
        }
      } else {
        console.log("Book with the given ISBN not found.");
      }
    }
  }
  
  // Example usage:
  const book1 = new Book("1886", "Katie Hamshire", "1253422727");
  const book2 = new Book("Finding Miss Right", "Harper Smith", "0972929773");
  
  const library = new DigitalLibrary();
  
  library.addBook(book1);
  library.addBook(book2);
  
  const foundBook = library.findBookByTitle("1886");
  if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author}`);
  }
  
  book1.borrowBook();
  book1.borrowBook(); 
  book1.returnBook();
  
  library.downloadBook("1253422727");
  
  library.removeBook("0972929773");
  