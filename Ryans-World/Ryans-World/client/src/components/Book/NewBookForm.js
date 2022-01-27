import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addBook } from "../../modules/bookManager";
import { useEffect } from "react";
import { addTag } from "../../modules/tagManager";

export const BookForm = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        dayOfWeek: "",
        favoriteScale: "",
        imageLocation: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newBook = { ...book }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newBook[event.target.id] = selectedVal
        setBook(newBook)
    }

    const handleClickSaveBook = (event) => {
        event.preventDefault()
        addBook(book)
            .then(() => history.push("/book"))
    }

    return (
        <>
            <form className="BookForm">
                <h3 className="NewBookHeader">Create a new Book</h3>
                <fieldset className="NewBook">
                    <div className="form_group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title"
                            onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="Book name" value={book.title} />
                    </div>
                </fieldset>
                <fieldset className="NewBook">
                    <div className="form_group">
                        <label htmlFor="author">Author: </label>
                        <input type="text" id="author"
                            onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="Author name" value={book.author} />
                    </div>
                </fieldset>
                <fieldset className="NewBook">
                    <div className="form_group">
                        <label htmlFor="dayOfWeek">Day of week to read: </label>
                        <input type="text" id="dayOfWeek"
                            onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="What day are you reading this book" value={book.dayOfWeek} />
                    </div>
                </fieldset>
                <fieldset className="NewBook">
                    <div className="form_group">
                        <label htmlFor="favoriteScale">Favorite Scale (1 -10): </label>
                        <input type="text" id="favoriteScale"
                            onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="On a scale of 1 - 10 what number is this book" value={book.favoriteScale} />
                    </div>
                </fieldset>
                <fieldset className="NewBook">
                    <div className="form_group">
                        <label htmlFor="imageLocation">Url Image of book cover: </label>
                        <input type="text" id="imageLocation"
                            onChange={handleControlledInputChange} required autoFocus className="form-control"
                            placeholder="Tag name" value={book.imageLocation} />
                    </div>
                </fieldset>
                <button className="SaveBookButton"
                    onClick={handleClickSaveBook}>
                    Save
                </button>
            </form>
        </>
    )
}

export default BookForm;