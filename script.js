const bookForm = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const status = document.getElementById("status");
const bookList = document.getElementById("book-list");
let booksFromStorage = JSON.parse(localStorage.getItem("allBooks"));

let myLibrary = [];
// localStorage.clear();

if (booksFromStorage) {
  booksFromStorage.forEach((item) => {
    // console.log(item);
    displayBooks(item);
  });
  myLibrary = booksFromStorage;
}

const bookFactory = (title, author, status) => {
  let isRead = false;
  if (status === "Read") {
    isRead = true;
  }
  return { title, author, isRead };
};

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = bookFactory(title.value, author.value, status.value);
  // console.log(newBook);
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";

  localStorage.setItem("allBooks", JSON.stringify(myLibrary));
  displayBooks(newBook);
});

function displayBooks(newBook) {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const select = document.createElement("select");
  const option = document.createElement("option");
  const optionTwo = document.createElement("option");

  if (newBook.isRead) {
    option.value = option.textContent = "Read";
    optionTwo.value = optionTwo.textContent = "Not read";
  } else {
    option.value = option.textContent = "Not read";
    optionTwo.value = optionTwo.textContent = "Read";
  }

  const titleTextCell = document.createTextNode(newBook.title);
  const authorTextCell = document.createTextNode(newBook.author);
  titleCell.appendChild(titleTextCell);
  authorCell.appendChild(authorTextCell);
  select.appendChild(option);
  select.appendChild(optionTwo);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(select);
  bookList.appendChild(row);
}
