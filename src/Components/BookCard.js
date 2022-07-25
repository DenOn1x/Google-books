import React from 'react';

const BookCard = ({book}) => {
    const openCard = (e) => {
        window.open(e.volumeInfo.infoLink, '_blank');
    }
    return (
        <div className="book-card" onClick={() => openCard(book)}>
            {book.volumeInfo.imageLinks &&
                <img className="book-image" src={book.volumeInfo.imageLinks.thumbnail} alt="Picture didn't load"/>}
                <p className="book-category">{(book.volumeInfo?.categories || 'Not category')}</p>
                <p className="book-title">{book.volumeInfo.title}</p>
                <p className="book-author"><b>Author:</b> {book.volumeInfo.authors}</p>
                <p className="book-date-published">
                    <b>Published Date:</b> {book.volumeInfo.publishedDate === '0000' ? 'Not available' :
                    book.volumeInfo.publishedDate.substring(0, 4)}
                </p>
        </div>
    );
};

export default BookCard;