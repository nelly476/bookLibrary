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
      // console.log(item);
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const authorCell = document.createElement("td");

      const titleTextCell = document.createTextNode(item.title);
      const authorTextCell = document.createTextNode(item.author);
      titleCell.appendChild(titleTextCell);
      authorCell.appendChild(authorTextCell);
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      bookList.appendChild(row);
    });
  }
});
