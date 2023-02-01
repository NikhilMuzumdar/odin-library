const myLibrary = [];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(someBook) {
  myLibrary.push(someBook);
}

Book.prototype.add = function () {
  addBookToLibrary(this);
};

function generateRandomBooks(n) {
  const titles = ["The Great Gatsby", "Pride and Prejudice", "To Kill a Mockingbird", "1984", "One Hundred Years of Solitude", "The Catcher in the Rye", "Moby-Dick", "The Odyssey", "The Iliad", "The Divine Comedy"];
  const authors = ["F. Scott Fitzgerald", "Jane Austen", "Harper Lee", "George Orwell", "Gabriel García Márquez", "J.D. Salinger", "Herman Melville", "Homer", "Homer", "Dante Alighieri"];
  const randomPages = [218, 279, 281, 328, 417, 277, 704, 325, 342, 100];
  const Read = [true, false, true, false, true, false, true, false, true, false];

  for (let i = 0; i < n; i += 1) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const pages = randomPages[Math.floor(Math.random() * randomPages.length)];
    const isRead = Read[Math.floor(Math.random() * Read.length)];
    const book = new Book(title, author, pages, isRead);
    book.add();
  }
}

generateRandomBooks(3);

// Render books as cards on webpage
function DisplayCard(book) {
  const bookTemplate = document.querySelector("#book-template").cloneNode(true);
  const body = document.querySelector("#book-list");
  bookTemplate.querySelector(".book-title").innerText = book.title;
  bookTemplate.querySelector(".book-author").innerText = `By ${book.author}`;
  bookTemplate.querySelector(".book-pages").innerText = `${book.pages} pages`;
  bookTemplate.querySelector(".book-isRead").innerText = book.isRead ? "Read it! 🤓" : "Did not read it! 🥹";

  const buttonMarkRead = bookTemplate.querySelector(".mark-read");
  const buttonDeleteBook = bookTemplate.querySelector(".delete-book");

  // Handling the delete button click
  buttonDeleteBook.addEventListener("click", () => {
    bookTemplate.style.display = "none"; // Remove book from page rendering
    myLibrary.splice(book, 1); // Delete the book from library.
  });

  // Handling the mark-read button click
  buttonMarkRead.addEventListener("click", () => {
    myLibrary[myLibrary.indexOf(book)].isRead = true; // Update the library
    bookTemplate.classList.add("read-it"); // Update the background color
    bookTemplate.querySelector(".book-isRead").innerText = "Read it! 🤓"; // Update text on page
    buttonMarkRead.style.display = "none"; // Remove the Mark-read button
  });

  if (book.isRead) {
    bookTemplate.classList.add("read-it"); // Update text as "Read it"
    buttonMarkRead.style.display = "none"; // Does not render MarkRed Button on webpage
  }
  bookTemplate.style.display = "block";
  body.appendChild(bookTemplate);
}

window.onload = function () {
  myLibrary.forEach((bookInArray) => {
    DisplayCard(bookInArray);
  });
};

// Add book popup
const addBookButton = document.getElementById("add-book-button");
const addBookPopup = document.getElementById("add-book-popup");
const bookForm = document.querySelector("form");

addBookButton.addEventListener("click", () => {
  addBookPopup.style.display = "block";
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBook = new Book();
  newBook.title = bookForm["book-title"].value;
  newBook.author = bookForm["book-author"].value;
  newBook.pages = Number(bookForm["book-pages"].value);
  newBook.isRead = bookForm["book-isRead"].checked;
  addBookPopup.style.display = "none";
  myLibrary.push(newBook); // Add the new book to the library
  DisplayCard(newBook); // Render the new book on the web-page
});

// Cancel the add book pop-up
const button = document.querySelector("button[type='cancel']");
button.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("add-book-popup").style.display = "none";
});
