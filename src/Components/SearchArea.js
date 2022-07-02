import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form
                action="#"
                onSubmit={props.searchBooks}
            >
                <input
                    onChange={props.handleSearch}
                    type="text"
                    placeholder="Enter text to search"
                />
                <button type="submit">Search</button>
            </form>
            
        </div>
    );
};

export default SearchArea;