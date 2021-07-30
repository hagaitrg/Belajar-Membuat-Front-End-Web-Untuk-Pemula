const KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageExist() {
  if (typeof Storage == undefined) {
    alert("Browser tidak mendukung local storage");
    return false;
  }

  return true;
}

function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(KEY, parsed);
  document.dispatchEvent(new Event("ondatasaved"));
}

function loadData() {
  const serialData = localStorage.getItem(KEY);

  let data = JSON.parse(serialData);

  if (data !== null) books = data;

  document.dispatchEvent(new Event("ondataloaded"));
}

function updateData() {
  if (isStorageExist()) {
    saveData();
  }
}

function composeBookObject(title, author, year, isCompleted) {
  return {
    id: Math.floor(Math.random() * 100),
    title,
    author,
    year,
    isCompleted,
  };
}

function findBook(bookId) {
  for (book of books) {
    if (book.id == bookId) {
      return book;
    }
  }

  return null;
}

function findBookIndex(bookId) {
  let index = 0;
  for (book of books) {
    if (book.id == bookId) return index;

    index++;
  }

  return -1;
}
