## Headers
# Group13-SENG8071-Midterm-Assignment
Hi This all about our 
# Online bookstore system



# This is a Heading h1
Welcome
## This is a Heading h2
Welcome
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
