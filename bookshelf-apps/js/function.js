const UNREAD_BOOK = "incompleteBookshelfList";
const READ_BOOK = "completeBookshelfList";

function makeBook(title, author, year, isCompleted) {
  const booktitle = document.createElement("<h3>");
  booktitle.innerText = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = author;

  const bookYear = document.createElement("p");
  bookYear.innerText = year;

  //   const buttonContainer = document.createElement("div");
  //   buttonContainer.classList.add("action");

  const bookArticle = document.createElement("article");
  bookArticle.classList.add("book_item");
  bookArticle.append(booktitle, bookAuthor, bookYear);

  //   if (isCompleted) {
  //     buttonContainer.append(unreadBookButton(), deleteBookButton());
  //   } else {
  //     buttonContainer.append(readBookButton(), deleteBookButton());
  //   }

  return bookArticle;
}

function addBook() {
  const bookTitle = document.getElementById("inputBookTitle");
  const bookAuthor = document.getElementById("inputBookAuthor");
  const bookYear = document.getElementById("inputBookYear");

  const book = makeBook(bookTitle, bookAuthor, bookYear);
}
