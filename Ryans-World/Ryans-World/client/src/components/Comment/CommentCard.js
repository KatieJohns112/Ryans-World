import React from "react";
import { useHistory } from "react-router-dom";
import "./Comment.css"

export const CommentCard = ({ comment }) => {
    const getReadableDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    const history = useHistory();

    const handleDeleteComment = () => {
        history.push(`/deleteComment/${comment.id}`)
    };

    const handleUpdateComment = () => {
        history.push(`/editComment/${comment.id}`);
    };

    return (
        <>
            <div className="MainCommentBox">
                <div className="CommentBox">

                    <img className="ProfileImage" src={comment.userProfile.imageLocation} alt="picture" />

                    <div className="CommentCard">
                        <p className="CommentElement">Author : {comment.userProfile.displayName}</p>
                        <p className="CommentElement">Comment on : {comment.book.title}</p>
                        <p className="CommentElement"> {comment.content}</p>
                        <p className="CommentElement">Submitted on : {getReadableDate(comment.createDateTime)}</p>
                        <ul className="CommentButtons">
                            <li><button className="DeleteComment"
                                type="button" onClick={() => handleDeleteComment()}>
                                <p className="NameDeleteComment">Delete </p></button></li>
                            <button className="UpdateComment"
                                type="button" onClick={() => handleUpdateComment(comment.id)}>
                                <p className="NameUpdateComment">Update</p></button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;