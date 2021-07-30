const UNREAD_BOOK = "incompleteBookshelfList";
const READ_BOOK = "completeBookshelfList";
const BOOK_ID = "bookId";

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
    addBookToUnread(event.target.parentElement.parentElement);
  });
  btn.innerHTML = "Belum selesai di Baca";

  return btn;
}

function createReadButton() {
  let btn = createButton("green", function (event) {
    addBookToRead(event.target.parentElement.parentElement);
  });
  btn.innerHTML = "Selesai di Baca";

  return btn;
}

function createDeleteButton() {
  let btn = createButton("red", function (event) {
    confirm("Yakin hapus data buku ?");
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
  const bookObject = composeBookObject(bookTitle, bookAuthor, bookYear, isCompletedBook);
  book[BOOK_ID] = bookObject.id;
  books.push(bookObject);

  if (isCompletedBook) {
    readBookList.append(book);
    updateData();
  } else {
    unreadBookList.append(book);
    updateData();
  }

  // console.log(bookTitle);
  // console.log(bookAuthor);
  // console.log(bookYear);
  // console.log(isCompletedBook);
}

function addBookToRead(bookElement) {
  const readBookList = document.getElementById(READ_BOOK);
  const bookTitle = bookElement.querySelector(".book_item > h3").innerText;
  const bookAuthor = bookElement.querySelector(".book_item > p").innerText.split(" ")[1];
  const bookYear = bookElement.querySelector(".book_item > p").nextElementSibling.innerText.split(" ")[1];

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, true);
  const book = findBook(bookElement[BOOK_ID]);
  book.isCompleted = true;
  newBook[BOOK_ID] = book.id;

  readBookList.append(newBook);

  bookElement.remove();

  updateData();
}

function addBookToUnread(bookElement) {
  const bookTitle = bookElement.querySelector(".book_item > h3").innerText;
  const bookAuthor = bookElement.querySelector(".book_item > p").innerText.split(" ")[1];
  const bookYear = bookElement.querySelector(".book_item > p").nextElementSibling.innerText.split(" ")[1];

  const newBook = makeBook(bookTitle, bookAuthor, bookYear, false);

  const unreadBookList = document.getElementById(UNREAD_BOOK);
  const book = findBook(bookElement[BOOK_ID]);
  book.isCompleted = false;
  newBook[BOOK_ID] = book.id;

  unreadBookList.append(newBook);

  bookElement.remove();

  updateData();
}

function deleteBook(bookElement) {
  const bookPosition = findBookIndex(bookElement[BOOK_ID]);
  books.splice(bookPosition, 1);

  bookElement.remove();
  updateData();
}

function refreshData() {
  const listUnread = document.getElementById(UNREAD_BOOK);
  const listRead = document.getElementById(READ_BOOK);

  for (book of books) {
    const newBook = makeBook(book.title, book.author, book.year, book.isCompleted);

    newBook[BOOK_ID] = book.id;

    if (book.isCompleted) {
      listRead.append(newBook);
    } else {
      listUnread.append(newBook);
    }
  }
}
