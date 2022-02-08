import React from "react";
import { useHistory } from "react-router-dom";

export const CommentCard = ({ comment }) => {
    const getReadableDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    const history = useHistory();

    const handleDeleteComment = () => {
        history.push(`/deleteComment/${comment.id}`)
    };

    return (
        <>
            <div className="MainCommentBox">
                <div className="CommentBox">

                    <img className="ProfileImage" src={comment.userProfile.imageLocation} alt="picture" />

                    <div className="CommentCard">
                        <p className="CommentElement">Author : {comment.userProfile.displayName}</p>
                        <p className="CommentElement">Content : {comment.content}</p>
                        <p className="CommentElement">Creation Date : {getReadableDate(comment.createDateTime)}</p>
                        <button className="DeleteTag"
                            type="button" onClick={() => handleDeleteComment()}>
                            <p className="NameDeleteComment">Delete </p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;