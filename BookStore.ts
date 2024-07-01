import { Pool, QueryResult } from 'pg';
import pool from './OnlineBookstoreSystemConnection';
import { OnlineBookstoreSystem } from './OnlineBookstoreSystemInterface';

// File Name = BookStore.ts

export interface Books {
  create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem>;
  read(bookId: number): Promise<OnlineBookstoreSystem | null>;
  update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null>;
  delete(bookId: number): Promise<boolean>;
}

export class BookStore implements Books {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem> {
    const query = `
      INSERT INTO books (bookId, title, bookLanguage, authId, publisherId, genre, publicationDate, price, pageCount, isbn, bookDescription, created, updated, format)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`;
    const values = [
      book.bookId, book.title, book.bookLanguage, book.authId, book.publisherId,
      book.genre, book.publicationDate, book.price, book.pageCount, book.isbn,
      book.bookDescription, book.created, book.updated, book.format
    ];

    const result: QueryResult = await this.pool.query(query, values);
    return result.rows[0];
  }

  async read(bookId: number): Promise<OnlineBookstoreSystem | null> {
    const query = 'SELECT * FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rows[0] || null;
  }

  async update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null> {
    const fields = Object.keys(book).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = Object.values(book);
    const query = `
      UPDATE books SET ${fields}
      WHERE bookId = $1
      RETURNING *`;
    const result: QueryResult = await this.pool.query(query, [bookId, ...values]);
    return result.rows[0] || null;
  }

  async delete(bookId: number): Promise<boolean> {
    const query = 'DELETE FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rowCount > 0;
  }
}
