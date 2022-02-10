import react, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { getCommentById } from "../../modules/commentManager";
import { updateComment } from "../../modules/commentManager";
import { getAllBooks } from "../../modules/bookManager";

export const UpdateComment = () => {
    const [comment, setComment] = useState([]);
    const [books, setBooks] = useState([]);

    const { id } = useParams();

    const history = useHistory();

    useEffect((event) => {
        getCommentById(id).then(setComment)
    }, []);

    useEffect(() => {
        getAllBooks().then(books => {
            setBooks(books);
        })
    })

    const handleControlledInputChange = (event) => {
        const newComment = { ...comment };
        let selectedVal = event.target.value;

        newComment[event.target.id] = selectedVal;
        setComment(newComment);
    };

    const handleClickSaveComment = (e) => {
        e.preventDefault();
        updateComment(comment).then(() => history.push('/comment'));
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        history.goBack()
    }


    return (
        <>
            <h3 className="EditCommentHeader">Edit Comment</h3>
            <form className="UpdateCommentForm">
                <div className="UpdateCommentName">
                    <label className="EditCommentNames" htmlFor="subject">Comment : </label>
                    <textarea
                        type="text"
                        id="content"
                        className="form-control"
                        onChange={handleControlledInputChange}
                        required
                        value={comment.content}
                    />
                </div>
                <div className="UpdateCommentName">
                    <label className="EditCommentName" htmlFor="bookId">What book is this comment about? </label>
                    <select value={books.bookId} name="bookId" id="bookId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a book</option>
                        {books.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="UpdateCommentButtons">
                    <button className="EditCommentButton"
                        onClick={handleClickSaveComment}
                        className="submit_comment_button">
                        Submit
                    </button>
                    <button
                        className="CancelEditComment"
                        onClick={handleGoBack}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    )
}

export default UpdateComment;
