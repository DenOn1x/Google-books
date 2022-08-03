import React from 'react';
import BookCard from "./BookCard";

const BookList = ({books}) => {
    return (
        <div className="book-container">
            {
                books.map((book, i) => {
                    return <BookCard
                        key={i}
                        book={book}
                    />
                })
            }

        </div>
    );
};

export default BookList;