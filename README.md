## Headers
# **Group13-SENG8071-Midterm-Assignment**
Hi This all about our 
# Online bookstore system


# This is a Heading h1
Here are duties assigned to an individual in our team member.
- Designing database schema and defining tables - Mahendra Patel is responsible for making sure the design of database schema and helps teams communicate with one another.
- Database Architect: - Mahendra Patel is responsible for designing the database schema and ensuring data integrity.
- DDL/DML: -Swati Implemented the SQL queries and CRUD operations.
- Data Analyst: - Yamani Ravikumar analyzes user data to generate insights like most popular genres, loyal customers.
+ Quality Assurance Engineer: - Swati is the QA engineer, tests the system to make sure it satisfies the specifications and is error-free.

## This is a Heading h2
User Roles
- Customers: Look through books, buy them, write reviews.
- Writers: Take care or manage their books.
- Book listings are managed by publishers.
- Data to Collect
- Details about a book, including its title, author, genre, price, cover image, and format (physical, e-book, or audio) .
- Name, email address, and past purchases made by the customer.
- The author details their name, and area of expertise in the genre.
- Publisher details: name, number of contacts.
- Online Bookstore System Design

### This is a Heading h3
- In heading 3rd we are going to be design our database Schema.
- Here are the tables and Data Types
# Customers Table
# Attribute	        Type        	Description
- custId	        SERIAL          Primary Key
- fName	            VARCHAR (50)	First Name
- lName	            VARCHAR (50)	Last Name
- emailId	        VARCHAR (100)	Email Address
- cellNumb	        VARCHAR (20)	Phone Number
- custAddress	    VARCHAR (500)	Customer address
- created	        TIMESTAMP	    DTTM
- updated	        TIMESTAMP	    DTTM

# Authors Table
# Attribute	        Type        	Description
- authId	        SERIAL	        Author ID
- fName            	VARCHAR (50)	First Name
- lName            	VARCHAR (50)	Last Name
- biography	        TEXT	        Details about author's 
- birthDate	        DATE	        Date of birthday
- nationality	    VARCHAR (50)	Its citizen status 
- created	        TIMESTAMP	    DTTM
- updated	        TIMESTAMP	    DTTM

# Publishers Table
# Attribute	        Type        	Description
- publisherId	    SERIAL	        Unique identifier for the publisher
- name	            VARCHAR (100)	Publisher name
- publisherAddress	VARCHAR (500)	Publisher address
- websiteUrl	    VARCHAR (100)	If any website URL
- created	        TIMESTAMP	    DTTM
- updated	        TIMESTAMP	    DTTM

* Books Table
# Attribute	        Type        	Description
- bookId	        SERIAL	        Unique identifier for the book
- title            	VARCHAR (100)	Book title
- bookLanguage	    VARCHAR (20)	Foreign key referencing the Authors table
- authId	        INTEGER	Book    Genre
- publisherId	    INTEGER	Book    Publication date
- genre 	        VARCHAR (50)	It’s about book generation
- publicationDate	VARCHAR (50)	Book published date 
- price	            DECIMAL (10, 2)	Retails price on book
- pageCount	        INTEGER	Total   Page number
- isbn 	            VARCHAR (20)	Specific ISBN number for book
- bookDescription	TEXT	        Details about book
- created	        TIMESTAMP	    DTTM
- updated	        TIMESTAMP	    DTTM
- format 	VARCHAR (50)	Physical books, E-books, and Audiobooks


# Reviews Table
# Attribute	        Type        	Description
- reviewId	    SERIAL	            Unique identifier for the review
- custId	    INTEGER	            Foreign key referencing the Books table
- bookId	    INTEGER	            Foreign key referencing the Customers table
- rating	    SMALLINT	        Review rating (1-5)
- reviewText	TEXT	            Review text
- created	    TIMESTAMP	        DTTM
- updated	    TIMESTAMP	        DTTM

# Purchases Table
# Attribute	        Type        	Description
- purchaseId	    SERIAL	        Unique identifier for the review
- custId	        INTEGER	        Foreign key referencing the Books table
- bookId	        INTEGER	        Foreign key referencing the Customers table
- purchaseDate	    DATE	        Review rating (1-5)
- totalPrice	    DECIMAL (10, 2)	Review text
- paymentMethod	    VARCHAR (50)	Its about Credit or debit card
- created	        TIMESTAMP	    DTTM
- updated	        TIMESTAMP	    DTTM


#### This is a Heading h4
```` SQL
... your SQL code here ...
- Here we are writing our Create Read, Update and Delete SQL queries
-- Creating table for Customers: -

CREATE TABLE Customers (
  custId SERIAL PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  emailId VARCHAR(100) NOT NULL UNIQUE,
  cellNumb VARCHAR(20),
  custAddress VARCHAR(500),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

Creating table for Authors: -

CREATE TABLE Authors (
  authId SERIAL PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  biography TEXT,
  birthDate DATE,
  nationality VARCHAR(50),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

Creating table for Publishers: -

CREATE TABLE Publishers (
  publisherId SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  publisherAddress VARCHAR(500),
  websiteUrl VARCHAR(100),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

Creating table for Books: -

CREATE TABLE Books (
  bookId SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  bookLanguage VARCHAR (20) NOT NULL,
  authId INTEGER NOT NULL REFERENCES Authors(authId),
  publisherId INTEGER NOT NULL REFERENCES Publishers(publisherId),
  genre VARCHAR(50) NOT NULL,
  publicationDate DATE NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  pageCount INTEGER,
  isbn VARCHAR(20),
  bookDescription TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  format VARCHAR(50)
);

Creating table for Reviews: -

CREATE TABLE Reviews (
  reviewId SERIAL PRIMARY KEY,
  custId INTEGER NOT NULL REFERENCES Customers(custId),
  bookId INTEGER NOT NULL REFERENCES Books(bookId),
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  reviewText TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

Creating table for Purchases: -

CREATE TABLE Purchases (
  purchaseId SERIAL PRIMARY KEY,
  custId INTEGER NOT NULL REFERENCES Customers(custId),
  bookId INTEGER NOT NULL REFERENCES Books(bookId),
  purchaseDate DATE NOT NULL,
  totalPrice DECIMAL(10, 2) NOT NULL,
  paymentMethod VARCHAR(50),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

````
###### This is a Heading h6

## Emphasis

Unordered
Customers can search, buy, and review books
Publishers and authors can manage their book listings
Customers can write reviews
Ordered
Customers can search, buy, and review books
Publishers and authors can manage their book listings
Customers can write reviews
Publishers can manage their book listings
Authors can manage their book listings
Images
Online Bookstore System.

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists


### Unordered

* Item 1
* CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT,
    genre VARCHAR(50),
    price DECIMAL(10, 2),
    cover_image VARCHAR(255)
    -- Other relevant attributes
);

* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](/image/sample.webp "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.
