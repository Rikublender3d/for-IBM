let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('すべてのフィールドに正しく入力してください。');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>書籍番号: ${index + 1}</h1>
        <p><strong>書籍名: </strong>${book.name}</p>
        <p><strong>著者名:</strong> ${book.authorName}</p>
        <p><strong>書籍の説明:</strong> ${book.bookDescription}</p>
        <p><strong>ページ数:</strong> ${book.pagesNumber} ページ</p>
        <button onclick="editbook(${index})">編集</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    showbooks();    
}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}