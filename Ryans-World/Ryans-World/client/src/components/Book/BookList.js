import React, { useEffect, useState } from "react";
import BookCard from "./Bookcard";
import { getAllBooks, getAllBooksByUserId } from "../../modules/bookManager";
import { useHistory } from "react-router-dom";
import './Book.css'

export const BookList = () => {
    const [books, setBooks] = useState([]);

    const history = useHistory();

    const getBooks = () => {
        return getAllBooksByUserId(localStorage.getItem("myUser")).then(res =>
            setBooks(res)
        );
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <div >
                <button type="button" className="NewBookButton"
                    onClick={() => { history.push("/createBook"); }}>
                    <p className="CreateNewBook"> Create new Book</p>
                </button>
            </div>
            <div>
                <div className="BookContent">
                    <div className="BookList">
                        {books.map(book => <BookCard key={book.id} book={book} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookList;