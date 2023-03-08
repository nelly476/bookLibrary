const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isRead = document.getElementById("status");
const bookList = document.getElementById("book-list");

let myLibrary = [];

const bookFactory = (title, author, isRead) => {
  return { title, author, isRead };
};

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = bookFactory(title.value, author.value, isRead.value);
  myLibrary.push(newBook);

  if (myLibrary.length > 0) {
    myLibrary.map((item) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      const cellText = document.createTextNode(newBook.title);
      cell.appendChild(cellText);
      row.appendChild(cell);
      row.appendChild(cell);
      bookList.appendChild(row);
    });
  }
});
