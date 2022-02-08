import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addComment } from "../../modules/commentManager";
import { getAllBooks } from "../../modules/bookManager";
import { useEffect } from "react";

export const CommentForm = () => {
    const [comment, setComment] = useState({
        content: "",
        bookId: 1,
    });


    const [books, setBooks] = useState([]);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newComment = { ...comment }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newComment[event.target.id] = selectedVal
        setComment(newComment)
    }

    useEffect(() => {
        getAllBooks().then((book) => {
            setBooks(book);
        })
    }, []);

    const handleClickSaveComment = (event) => {
        event.preventDefault()
        addComment(comment)
            .then(() => history.push("/comment"))
    }

    return (
        <>
            <h3 className="NewTagHeader">Create a new Comment</h3>
            <div className="MainTagForm">
                <form className="TagForm">
                    <fieldset className="NewTagName">
                        <div className="form_group">
                            <label htmlFor="content">Content : </label>
                            <input type="text" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" value={comment.content} />
                        </div>
                    </fieldset>
                    <fieldset className="NewTagName">
                        <div className="form_group">
                            <label htmlFor="content">Book Name : </label>
                            <input type="book" id="book" onChange={handleControlledInputChange} required autoFocus className="form-control" value={comment.title} />
                        </div>
                    </fieldset>
                    <fieldset className="event_fieldset">
                        <div className="form-group">
                            <label htmlFor="location">What book is this comment about? </label>
                            <select value={books.bookId} name="bookId" id="bookId" onChange={handleControlledInputChange} className="form-control" >
                                <option value="0">Select a book</option>
                                {books.map(l => (
                                    <option key={l.id} value={l.id}>
                                        {l.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                </form>
                <button className="SaveTagButton"
                    onClick={handleClickSaveComment}><p className="SaveNewTag">Save</p></button>
            </div>
        </>
    )
}

export default CommentForm;

