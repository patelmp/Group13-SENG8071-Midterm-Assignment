import { BookStore } from './books';
import pool from './OnlineBookstoreSystemConnection';

async function main() {
  const bookStore = new BookStore();

  // Create a new book
  const newBook: OnlineBookstoreSystem = {
    bookId: 1,
    title: 'My Life My Rules',
    bookLanguage: 'Hindi',
    authId: 1,
    publisherId: 1,
    genre: 3,
    publicationDate: '2000-01-01',
    price: 79.99,
    pageCount: 777,
    isbn: '9780000000000',
    bookDescription: 'Updated description text.',
    created: new Date(),
    updated: new Date(),
    format: 'Hardcover'
  };

  const createdBook = await bookStore.create(newBook);
  console.log('Created a new Book:', createdBook);

  const readBook = await bookStore.read(createdBook.bookId);
  console.log('Reading a Book:', readBook);

  const updatedBook = await bookStore.update(createdBook.bookId, { price: 79.99 });
  console.log('Updated a Book:', updatedBook);

  const deletedBook = await bookStore.delete(createdBook.bookId);
  console.log('Deleted a Book:', deletedBook);
}

main().catch(console.error);