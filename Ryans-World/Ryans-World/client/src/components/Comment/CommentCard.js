import React from "react";

export const CommentCard = ({ comment }) => {
    const getReadableDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    return (
        <>
            <div className="MainCommentBox">
                <div className="CommentBox">

                    <img className="ProfileImage" src={comment.userProfile.imageLocation} alt="picture" />

                    <div className="CommentCard">
                        <p className="CommentElement">Author : {comment.userProfile.displayName}</p>
                        <p className="CommentElement">Content : {comment.content}</p>
                        <p className="CommentElement">Creation Date : {getReadableDate(comment.createDateTime)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;