const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring

// const book = getBook(1);
// book;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

// console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation)

// // Rest/Spread operator
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, 'epic fantasy'];

// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   // Adding new property
//   moviePublicationDate: '2001-12-19',
//   // Overwriting existing property
//   // pages: 1210
// };
// updatedBook;

// // Template literals

// const summary = `${title}, a ${pages}-page long book,author ${author}, published in ${publicationDate.split('-')[0]}. The book has been ${hasMovieAdaptation ? '' : 'not'} adapted as a movie`;
// summary;

// // Ternary operators

// const pagesRange = pages > 1000 ? 'over a thosand' : 'less than 1000';
// pagesRange;
// console.log(`The book has ${pagesRange} pages.`)

// // Arrow functions

// //fn declaration
// // function getYear(str) {
// //   return str.split('-')[0]
// // }

// //fn expression
// const getYear = (str) => str.split('-')[0];
// console.log(getYear(publicationDate));

// //short circuiting & logical operators
// console.log(hasMovieAdaptation && "This book has a movie!");

// const spanishTranslation = book.translations.spanish || "Not Translated";

// // nullish coalescing
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);

// //Optional chaining
// function getTotalReviews(book) {
//   const goodreads = book?.reviews?.goodreads?.reviewsCount;
//   const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// console.log(getTotalReviews(book));

// //Array map method returns a new array 
// const books = getBooks();

// //demo map
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// console.log(titles);

// function getTotalReviews(book) {
//   const goodreads = book?.reviews?.goodreads?.reviewsCount;
//   const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//     reviewsCount: getTotalReviews(book),
//   }
// })

// console.log(essentialData);

// //Array filter method also returns a new array does not mutate 
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooks);

// const adventureBooks = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);
// console.log(adventureBooks);

// //Array reduce method 
// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// console.log(pagesAllBooks);

// //Array sort method (sort mutates)
// const arr = [3, 7, 1, 123, 2];
// //slice creates a shallow copy so we do not mutate the original array 
// const sorted = arr.slice().sort((a, b) => a - b);
// console.log(sorted);
// console.log(arr);

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedByPages);

// //Working with immutable arrays 

// //1) add book object to array 

// const newBook = {
//   id: 6,
//   title: "Harry Potter and the chamber of secrets",
//   author: "J.K.Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

// //2)delete book object from array 

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// console.log(booksAfterDelete);

// //3) update book array 
// const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? { ...book, pages: 1 } : book);
// console.log(booksAfterUpdate);

// //Promises
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))

//Async/await
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
//returns a promise which is pending
console.log(todos);
//console log gets executed first 
console.log("blabla");