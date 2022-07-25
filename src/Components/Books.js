import React, {useState} from 'react';
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";
import noImage from "../img/no-image.jpg"


let startIndex = 0;

const Books = (props) => {
    const [searchPattern, setSearchPattern] = useState('');
    const [books, setBooks] = useState([]);
    const [sort, setSort] = useState('');
    const [categories, setCategories] = useState('');
    const maxResult = 30;


    const searchBooks = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchPattern}&startIndex=${startIndex}&maxResults=${maxResult}`)
        const resCount = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchPattern}`)
        const category = document.getElementById('category_select').value;
        const countOfBookElement = document.getElementsByClassName('count_of_book__result')
        let resultBook = getBooksByCategory(res, category)
        if(resultBook.length === 0){
            alert('Categories of books not found');
        }else{
            countOfBookElement[0].textContent  = resCount.data.totalItems;
            const handleData = handleDataRes(resultBook)
            setBooks(handleData)
        }
        startIndex += maxResult;
    }

    const getBooksByCategory = (res, category) => {
        return res.data.items.filter(book => {
            let bookCategory = book.volumeInfo?.categories;
            if (!(category === 'all')) {
                return !!bookCategory ? [bookCategory[0].toLowerCase()].includes(category) : false
            } else {
                return true;
            }
        })
    }

    const handleSearch = (e) => {
        setSearchPattern(e.target.value)
        // console.log(e.target.value)
    }
    const handleSort = (e) => {
        setSort(e.target.value)
        // console.log(e.target.value)

    }

    const handleCategories = (e) => {
        setCategories(e.target.value)
        console.log(e.target.value)
    }
    const handleDataRes = (res) => {
        const handleData = res.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = {
                    smallThumbnail:
                    noImage,
                    thumbnail: noImage
                }
            }
            return book;
        })
        return handleData;
    }
    const sortedBooks = books.sort((a, b) => {
        if (sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        } else if (sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        }
    })


    return (
            <div>
                <SearchArea searchBooks={searchBooks} handleSearch={handleSearch} handleSort={handleSort}
                            handleCategories={handleCategories}/>
                <BookList books={sortedBooks}/>

            </div>
    );
};

export default Books;