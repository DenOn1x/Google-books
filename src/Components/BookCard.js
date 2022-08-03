import React from 'react';

const BookCard = ({book}) => {
    const openCard = (e) => {
        window.open(e.volumeInfo.infoLink, '_blank');
    }
    const volume = book.volumeInfo;
    return (
        <div className="book-card" onClick={() => openCard(book)}>
            {volume.imageLinks &&
                <img className="book-image" src={volume.imageLinks.thumbnail} alt="Picture didn't load"/>}
                <p className="book-category">{(volume?.categories || 'Not category')}</p>
                <p className="book-title">{volume.title}</p>
                <p className="book-author"><b>Author:</b> {volume.authors}</p>
                <p className="book-date-published">
                    <b>Published Date:</b> {volume.publishedDate === '0000' ? 'Not available' :
                    volume.publishedDate.substring(0, 4)}
                </p>
        </div>
    );
};

export default BookCard;