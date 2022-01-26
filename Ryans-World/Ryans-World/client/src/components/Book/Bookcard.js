import React from "react";

export const BookCard = ({ book }) => {
    console.log(book)
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
            </div>
        </div>)
}
export default BookCard;