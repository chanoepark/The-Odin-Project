let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString = this.read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('#read:checked') ? true : false;
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    const content = document.getElementById('content');
    let bookList = document.querySelector('#bookList');
    if (!bookList)
        bookList = document.createElement('ul');
    const bookEntry = document.createElement('li');
    bookEntry.className = 'book-entry';

    myLibrary.forEach(book => {
        bookEntry.textContent = book.info();
        bookList.appendChild(bookEntry);
    });

    content.appendChild(bookList);
}

const button = document.querySelector('button');
button.addEventListener('click', addBookToLibrary);