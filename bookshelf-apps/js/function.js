const UNREAD_BOOK = "incompleteBookshelfList";
const READ_BOOK = "completeBookshelfList";

function makeBook(title, author, year, isCompleted) {
  const booktitle = document.createElement("h3");
  booktitle.innerText = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = "Penulis: " + author;

  const bookYear = document.createElement("p");
  bookYear.innerText = "Tahun: " + year;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action");

  const bookArticle = document.createElement("article");
  bookArticle.classList.add("book_item");
  bookArticle.append(booktitle, bookAuthor, bookYear, buttonContainer);

  if (isCompleted) {
    buttonContainer.append(createUnreadButton(), createDeleteButton());
  } else {
    buttonContainer.append(createReadButton(), createDeleteButton());
  }

  return bookArticle;
}

function createUnreadButton() {
  let btn = createButton("yellow", function (event) {
    unreadBookList(event.target.parentElement.parentElement);
  });
  btn.innerHTML = "Belum selesai di Baca";

  return btn;
}

function createReadButton() {
  let btn = createButton("green", function (event) {
    readBookList(event.target.parentElement.parentElement);
  });
  btn.innerHTML = "Selesai di Baca";

  return btn;
}

function createDeleteButton() {
  let btn = createButton("red", function (event) {
    deleteBook(event.target.parentElement.parentElement);
  });
  btn.innerHTML = "Hapus Buku";

  return btn;
}

function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });

  return button;
}

function addBook() {
  const unreadBookList = document.getElementById(UNREAD_BOOK);
  const readBookList = document.getElementById(READ_BOOK);
  const bookTitle = document.getElementById("inputBookTitle").value;
  const bookAuthor = document.getElementById("inputBookAuthor").value;
  const bookYear = document.getElementById("inputBookYear").value;
  const isCompletedBook = document.querySelector("#inputBookIsComplete").checked;

  const book = makeBook(bookTitle, bookAuthor, bookYear, isCompletedBook);

  if (isCompletedBook) {
    readBookList.append(book);
  } else {
    unreadBookList.append(book);
  }

  // console.log(bookTitle);
  // console.log(bookAuthor);
  // console.log(bookYear);
  // console.log(isCompletedBook);
}

function addBookToRead(bookElement) {
  const bookTitle = document.getElementById("inputBookTitle").innerText;
  const bookAuthor = document.getElementById("inputBookAuthor").innerText;
  const bookYear = document.getElementById("inputBookYear").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, true);

  const readBookList = document.getElementById(READ_BOOK);

  readBookList.append(newBook);

  bookElement.remove();
}

function addBookToUnread(bookElement) {
  const bookTitle = document.getElementById("inputBookTitle").innerText;
  const bookAuthor = document.getElementById("inputBookAuthor").innerText;
  const bookYear = document.getElementById("inputBookYear").innerText;

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);

  const unreadBookList = document.getElementById(UNREAD_BOOK);

  unreadBookList.append(newBook);

  bookElement.remove();
}

function deleteBook(bookElement) {
  bookElement.remove();
}
