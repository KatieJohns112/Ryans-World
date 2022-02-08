import react, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { getCommentById } from "../../modules/commentManager";
import { updateComment } from "../../modules/commentManager";

export const UpdateComment = () => {
    const [comment, setComment] = useState([])

    const { id } = useParams();

    const history = useHistory();

    useEffect((event) => {
        getCommentById(id).then(setComment)
    }, []);

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
            <form className="main-content">
                <h2 className="_title">Edit Comment:</h2>
                <fieldset className="fieldset">
                    <div className="form-group">
                        <label htmlFor="subject">Comment :</label>
                        <textarea
                            type="text"
                            id="content"
                            onChange={handleControlledInputChange}
                            required
                            autoFocus
                            rows="6"
                            className="form-control"
                            value={comment.content}
                        />
                    </div>
                </fieldset>
                {/* <fieldset className="event_fieldset">
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
                </fieldset> */}
                <button className="btn-add-save" onClick={handleClickSaveComment}>
                    Submit
                </button>
                <button
                    className="btn-add-edit"
                    onClick={handleGoBack}
                >
                    Cancel
                </button>
            </form>
        </>
    )
}

export default UpdateComment;
