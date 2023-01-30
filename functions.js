let myLibrary = [];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = function () {
    if (isRead) {return "Read it! 😆" }
    return ("Did not read it! 🥹");
  };
}

function addBookToLibrary(someBook) {
  myLibrary.push(someBook);
}

Book.prototype.add = function () {
  addBookToLibrary(this);
};

function generateRandomBooks() {
  const titles = ["The Great Gatsby", "Pride and Prejudice", "To Kill a Mockingbird", "1984", "One Hundred Years of Solitude", "The Catcher in the Rye", "Moby-Dick", "The Odyssey", "The Iliad", "The Divine Comedy"];
  const authors = ["F. Scott Fitzgerald", "Jane Austen", "Harper Lee", "George Orwell", "Gabriel García Márquez", "J.D. Salinger", "Herman Melville", "Homer", "Homer", "Dante Alighieri"];
  const randomPages = [218, 279, 281, 328, 417, 277, 704, 325, 342, 100];
  const Read = [true, false, true, false, true, false, true, false, true, false];

  for (let i = 0; i < 10; i += 1) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const pages = randomPages[Math.floor(Math.random() * randomPages.length)];
    const isRead = Read[Math.floor(Math.random() * Read.length)];
    const book = new Book(title, author, pages, isRead);
    book.add();
  }
}

generateRandomBooks();

// Website Rendering
window.onload = function () {
  const body = document.querySelector("#book-list");
  myLibrary.forEach((book) => {
    const bookTemplate = document.querySelector("#book-template").cloneNode(true);
    bookTemplate.querySelector(".book-title").innerText = book.title;
    bookTemplate.querySelector(".book-author").innerText = book.author;
    bookTemplate.querySelector(".book-pages").innerText = book.pages + ' pages';
    bookTemplate.querySelector(".book-isRead").innerText = book.isRead();
    bookTemplate.style.display = "block";
    body.appendChild(bookTemplate);
  });
};