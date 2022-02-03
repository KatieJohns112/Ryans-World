import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import { updateBook, getBook, } from "../../modules/bookManager";

export const BookUpdateForm = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        imageLocation: "",
        favoriteScale: "",
        dayOfWeek: "",
    });

    const { id } = useParams();

    const history = useHistory();

    useEffect((event) => {
        getBook(id).then((res) => {
            setBook(res);
        });
    }, []);

    const handleControlledInputChange = (event) => {
        const newBook = { ...book };
        let selectedVal = event.target.value;

        newBook[event.target.id] = selectedVal;
        setBook(newBook);
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        const bookToSave = { ...book }
        delete bookToSave.userProfile

        updateBook(bookToSave).then(() => history.push("/book"));
    };

    return (
        <>
            <h3 className="EditBookHeader">Edit Book</h3>
            <form className="EditBookForm">
                <div className="MainUpdateBook">
                    <div className="UpdateBookCharacter">
                        <label className="BookAttribute" htmlFor="title">Title :</label> <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleControlledInputChange}
                            id="title"
                            value={book.title} />
                    </div>
                    <div className="UpdateBookCharacter">
                        <label className="BookAttribute" htmlFor="author">Author :</label> <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleControlledInputChange}
                            id="author"
                            value={book.author} />
                    </div>
                    <div className="UpdateBookCharacter">
                        <label className="BookAttribute" htmlFor="imageLocation">Image :</label> <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleControlledInputChange}
                            id="imageLocation"
                            value={book.imageLocation} />
                    </div>
                    <div className="UpdateBookCharacter">
                        <label className="BookAttribute" htmlFor="favoriteScale">FavoriteScale :</label> <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleControlledInputChange}
                            id="favoriteScale"
                            value={book.favoriteScale} />
                    </div>
                    <div className="UpdateBookCharacter">
                        <label className="BookAttribute" htmlFor="dayOfWeek">When to read :</label> <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleControlledInputChange}
                            id="dayOfWeek"
                            value={book.dayOfWeek} />
                    </div>
                    <div className="UpdateBookButtons">
                        <div className="SaveEditedBook">
                            <button
                                type="EditBookButton"
                                onClick={handleConfirm}
                                className="submit_book_button"
                            ><p className="SaveEditBook">Save</p></button>
                        </div>
                        <button
                            className="CancelEditBook"
                            variant="secondary"
                            onClick={() => history.push("/book")}
                        ><p className="CancelEditedBook">Cancel</p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default BookUpdateForm;