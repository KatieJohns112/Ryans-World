import React from "react";
import { useHistory } from "react-router-dom";
import "./Book.css"


export const BookCard = ({ book }) => {
    const history = useHistory();

    const handleDeleteBook = () => {
        history.push(`/deleteBook/${book.id}`)
    };

    const handleUpdateBook = () => {
        history.push(`/editBook/${book.id}`);
    };

    const handleDetailBook = () => {
        history.push(`/bookDetails/${book.id}`)
    }

    return (
        <div className="MainBookBox">
            <div className="BookBox">

                <img className="BookImage" src={book.imageLocation} alt="picture" />

                <div className="BookCard">
                    <p className="BookElement">Title : {book.title}</p>
                    <p className="BookElement">Author : {book.author}</p>
                    <p className="BookElement">When to read : {book.dayOfWeek}</p>
                    <p className="BookElement">Favorite Scale : {book.favoriteScale}</p>
                    <p className="BookElement">Category : {book.category.name}</p>
                    <ul className="BookButtons">
                        <li><button className="DetailBook"
                            type="button" onClick={() => handleDetailBook()}>
                            <p className="NameDetailBook">Book Details</p></button></li>
                        <li><button className="UpdateBook"
                            type="button" onClick={() => handleUpdateBook()}>
                            <p className="NameUpdateBook">Update Book</p></button></li>
                        <li><button className="DeleteBook"
                            type="button" onClick={() => handleDeleteBook()}>
                            <p className="NameDeleteBook">Delete Book</p></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default BookCard;