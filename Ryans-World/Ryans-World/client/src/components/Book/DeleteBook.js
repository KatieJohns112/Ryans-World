import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteBook } from "../../modules/bookManager";

const DeleteBook = ({ }) => {
    const history = useHistory();
    const { id } = useParams();

    const handleCancelDelete = () => {
        history.push("/book")
    }
    const handleDeleteBook = (event) => {
        event.preventDefault();
        deleteBook(id).then(() => history.push("/book"));
    };

    return (
        <div className="DeleteBookForm">
            <p className="TextBook">- Are you sure you want to delete this book? -</p>
            <ul className="DeleteBookButtons">
                <li><button className="ConfirmDeleteBook" onClick={handleDeleteBook}><p className="BookDelete">Delete</p></button></li>
                <li><button className="ConfirmCancelBook" onClick={handleCancelDelete}><p className="BookCancel">Cancel</p></button></li>
            </ul>
        </div>
    )
}

export default DeleteBook;