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
        <form>
            <h3>Edit Book</h3>
            <div>
                <label className="BookAttribute" htmlFor="title">Title :</label> <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleControlledInputChange}
                    id="title"
                    value={book.title} />
            </div>
            <div>
                <label className="BookAttribute" htmlFor="author">Author :</label> <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleControlledInputChange}
                    id="author"
                    value={book.author} />
            </div>
            <div>
                <label className="BookAttribute" htmlFor="imageLocation">Image :</label> <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleControlledInputChange}
                    id="imageLocation"
                    value={book.imageLocation} />
            </div>
            <div>
                <label className="BookAttribute" htmlFor="favoriteScale">FavoriteScale :</label> <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleControlledInputChange}
                    id="favoriteScale"
                    value={book.favoriteScale} />
            </div>
            <div>
                <label className="BookAttribute" htmlFor="dayOfWeek">When to read :</label> <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleControlledInputChange}
                    id="dayOfWeek"
                    value={book.dayOfWeek} />
            </div>
            <div className="alignRight">
                <button
                    type="EditBookButton"
                    onClick={handleConfirm}
                    className="submit_book_button"
                >Save</button>
            </div>
            <button
                className="EditBookButton"
                variant="secondary"
                onClick={() => history.push("/book")}
            >Cancel
            </button>
        </form>
    )
}

export default BookUpdateForm;