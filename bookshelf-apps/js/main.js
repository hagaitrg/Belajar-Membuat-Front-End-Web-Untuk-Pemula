document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");

  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
    submitBook.reset();
    alert("Berhasil tambah buku!");
  });

  if (isStorageExist()) {
    loadData();
  }
});

document.addEventListener("ondataloaded", () => {
  refreshData();
});
