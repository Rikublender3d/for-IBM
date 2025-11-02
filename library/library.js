let library = [
  {
    id: 1,
    title: 'JavaScript入門',
    author: '山田太郎',
    category: '技術書',
    isAvailable: true,
    borrower: null
  },
  {
    id: 2,
    title: '竜馬がゆく',
    author: '司馬遼太郎',
    category: '小説',
    isAvailable: false,
    borrower: '佐藤花子'
  },
  {
    id: 3,
    title: '7つの習慣',
    author: 'スティーブン・コヴィー',
    category: 'ビジネス',
    isAvailable: true,
    borrower: null
  },
  {
    id: 4,
    title: 'ノルウェイの森',
    author: '村上春樹',
    category: '小説',
    isAvailable: true,
    borrower: null
  },
  {
    id: 5,
    title: 'Python実践入門',
    author: '鈴木一郎',
    category: '技術書',
    isAvailable: false,
    borrower: '田中次郎'
  }
];

console.log('図書館の本:', library);
console.log('蔵書数:', library.length);  // 5

function addBook(library,title,author,category) {
    const newId = library.length + 1
    const newBook = {
        id: newId,
        title: title,
        author:author,
        category: category,
        isAvailable: true,
        borrower: null
    };
    library.push(newBook);
    console.log(`${title}を追加しました。ID = ${newId}`);
}
function removeBook (library,bookId) {
    for (let i = 0;  i < library.length; i++) {
    if (library[i].id === bookId) {
        const removedBook = library[i];
        library.splice(i,1);
        console.log(`${removedBook.title}を削除しました`);
        return true;
    }
}
}
function findBookById(library, bookId) {
    const book = library.find(book => book.id === bookId);
    if (book) {
        console.log('みつかりました。');
        return book;
    } else {
        console.log('見つかりませんでした。')
    }
}