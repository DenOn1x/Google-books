import React from 'react';

const BookCard = ({book}) => {
    return (
        <div>
            { book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="" /> }
            <div>
                <h2>{book.volumeInfo.title}</h2>
                <h3>{book.volumeInfo.authors}</h3>
                <p>{book.volumeInfo.publishedDate}</p>
            </div>

        </div>
    );
};

export default BookCard;