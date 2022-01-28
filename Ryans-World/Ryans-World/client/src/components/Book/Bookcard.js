import React from "react";
import { useHistory } from "react-router-dom";


export const BookCard = ({ book }) => {
    const history = useHistory();

    const handleDeleteBook = () => {
        history.push(`/deleteBook/${book.id}`)
    };

    const handleUpdateBook = () => {
        history.push(`/editBook/${book.id}`);
    };

    return (
        <div className="BookBox">
            <div className="BookImage">
                <img src={book.imageLocation} alt="picture" />
            </div>
            <div className="BookCard">
                <p>Title : {book.title}</p>
                <p>Author : {book.author}</p>
                <p>When to read : {book.dayOfWeek}</p>
                <p>Favorite Scale : {book.favoriteScale}</p>
                <p>Category : {book.category.name}</p>
                <ul className="BookButtons">
                    <li><button className="DeleteBook"
                        type="button" onClick={() => handleDeleteBook(book.id)}>
                        <p className="NameDeleteBook">Delete Book</p></button></li>
                    <li><button className="UpdateBook"
                        type="button" onClick={() => handleUpdateBook(book.id)}>
                        <p className="NameUpdateBook">Update</p></button></li>
                </ul>
            </div>
        </div>
    )
}
export default BookCard;