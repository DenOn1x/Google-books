import React from 'react';

const SearchArea = (props) => {
    return (

        <div className="search-area">
            <div className="stage">

                <h1 className="header__title">Searching Books</h1>
                <form
                    className="header__form"
                    action="#"
                    onSubmit={props.searchBooks}
                >
                        <input id="input-demo"
                               onChange={props.handleSearch}
                               type="text"
                               className="header__input"
                               placeholder="Enter text to search"
                        />
                    <div className="header__select-block">
                        <label className="sort">
                            Sorting by
                        </label> <select className="mySelect" defaultValue="Sort" onChange={props.handleSort}>
                        {/*<option disabled value="Sort">Sort</option>*/}
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select>

                        <label className="category">
                            Categories
                        </label>
                        <select
                            id="category_select" className="mySelect" defaultValue="all"
                            onChange={props.handleCategories}>
                            <option value="all">all</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </div>
                    <button className="btn" type="submit">Refresh categories</button>
                </form>
                <div className="sun"></div>
                <div className="grass"></div>
                <div className="square"></div>
                <div className="round"></div>
            </div>
            <div className="count_of_book">
                <span className="count_of_book__text">Found </span>
                <span className="count_of_book__result">0</span>
                <span className="count_of_book__text"> results</span>
            </div>

        </div>
    );
};

export default SearchArea;