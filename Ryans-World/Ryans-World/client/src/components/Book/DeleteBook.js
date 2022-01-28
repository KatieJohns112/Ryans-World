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
        <div>
            <h2> Delete Book:</h2>
            <p>Are you sure you want to delete this book?</p>
            <button onClick={handleDeleteBook}>Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
        </div>
    )
}

export default DeleteBook;