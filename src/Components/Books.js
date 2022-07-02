import React, {Component, useState} from 'react';
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";


const Books = (props) => {
    const [searchPattern, setSearchPattern ] = useState('');
    const [books, setBooks] = useState([])

    const searchBooks = async (e) => {
        e.preventDefault();

        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${setSearchPattern}`)

            // .then((data)=>{
            //     setSearchPattern(({books: data.items}))
            //
            // }).then(console.log())

            // .then(res=>setSearchPattern({books: res.data.items}))
            // .then(console.log(books))
            // .catch(err => console.log(err));
        console.log(res.data)
    }
    const handleSearch = (e) => {
        setSearchPattern(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div>
            <SearchArea searchBooks={searchBooks} handleSearch={handleSearch} />
            <BookList books={books} />  {/*прокинуть state*/}
        </div>
    );
};

export default Books;