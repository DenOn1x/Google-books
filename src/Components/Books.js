import React, {useState} from 'react';
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";


const Books = (props) => {
    const [searchPattern, setSearchPattern ] = useState('');
    const [books, setBooks] = useState([])

    const searchBooks = async (e) => {
        e.preventDefault();

        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchPattern}`)
        setBooks(res.data.items)
        console.log(books)

    }
    const handleSearch = (e) => {
        setSearchPattern(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div>
            <SearchArea searchBooks={searchBooks} handleSearch={handleSearch} />
            <BookList books={books} />
        </div>
    );
};

export default Books;