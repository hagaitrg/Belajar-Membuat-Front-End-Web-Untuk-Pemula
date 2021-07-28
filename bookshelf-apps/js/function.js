const UNREAD_BOOK = "incompleteBookshelfList";
const READ_BOOK = "completeBookshelfList";

function makeBook(title, author, year, isCompleted) {
  const booktitle = document.createElement("h3");
  booktitle.innerText = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = "Author: " + author;

  const bookYear = document.createElement("p");
  bookYear.innerText = "Tahun: " + year;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action");

  const bookArticle = document.createElement("article");
  bookArticle.classList.add("book_item");
  bookArticle.append(booktitle, bookAuthor, bookYear, buttonContainer);

  if (isCompleted) {
    buttonContainer.append(createReadButton(), createDeleteButton());
  } else {
    buttonContainer.append(createUnreadButton(), createDeleteButton());
  }

  return bookArticle;
}

function createUnreadButton() {
  let btn = createButton("yellow", function (event) {});
  btn.innerHTML = "Belum selesai di Baca";

  return btn;
}

function createReadButton() {
  let btn = createButton("green", function (event) {});
  btn.innerHTML = "Selesai di Baca";

  return btn;
}

function createDeleteButton() {
  let btn = createButton("red", function (event) {});
  btn.innerHTML = "Hapus Buku";

  return btn;
}

function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  // button.addEventListener("click", function (event) {
  //   eventListener(event);
  // });

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
    unreadBookList.append(book);
  } else {
    readBookList.append(book);
  }

  // console.log(bookTitle);
  // console.log(bookAuthor);
  // console.log(bookYear);
  // console.log(isCompletedBook);
}
