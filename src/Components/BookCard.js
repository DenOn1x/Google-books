import React from 'react';

const BookCard = (props) => {
    return (
        <div>
            <img
                src={props.image}
                alt=""
            />
            <div>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.publishedData}</p>
            </div>

        </div>
    );
};

export default BookCard;