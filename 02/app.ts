type Book = {
    title: string;
    author: string;
    isbn: string;
  };
  
  const lectures: Book[] = [
    { title: 'Hobbit', author: 'Tolkien', isbn: '978-83-246-6049-1' },
    { title: 'Potop', author: 'Sienkiewicz', isbn: '788-83-546-7849-1' },
  ];

  const foreignLiterature: Book[] = [
    { title: 'rok 1984', author: 'Orwell', isbn: '569-75-242-3059-2' },
    { title: 'Hrabia Monte Christo', author: 'Dumas', isbn: '788-83-546-7849-1' },
  ];
  
  function findBooksBy(
    books: Book[],
    propName: keyof Book,
    value: string
  ): Book[] | null {
    const result = books.filter(book => book[propName].toLowerCase() === value.toLowerCase());
    return result.length > 0 ? result : null;
  }

  const foundBooks = findBooksBy(lectures, 'title', 'Hobbit');
  const foundBooks2 = findBooksBy(foreignLiterature, 'isbn', '788-83-546-7849-1');
  const foundBooks3 = findBooksBy(foreignLiterature, 'author', 'Orwell');
  const foundBooks4 = findBooksBy(foreignLiterature, 'author', 'Hrabia');

  console.log(foundBooks)
  console.log(foundBooks2);
  console.log(foundBooks3);
  console.log(foundBooks4);