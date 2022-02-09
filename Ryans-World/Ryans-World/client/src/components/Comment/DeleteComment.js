import React, { useState } from "react";
import { useHistory } from "react-router";
import { deleteComment } from "../../modules/commentManager";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";

const DeleteComment = () => {
    const { id } = useParams();

    const history = useHistory();

    const handleConfirm = (event) => {
        event.preventDefault();
        deleteComment(id).then(() => history.push("/comment"))
    };

    return (
        <>
            <form className="DeleteCommentForm">
                <p className="Text">Are you sure you want to delete this comment?</p>
                <ul className="DeleteCommentButtons">
                    <li><button
                        className="ConfirmDeleteComment"
                        onClick={handleConfirm}
                    >
                        Delete
                    </button></li>
                    <li><button
                        className="ConfirmCancelComment"
                        onClick={() => history.push("/comment")}
                    >
                        Cancel
                    </button></li>
                </ul>
            </form>
        </>
    );
};

export default DeleteComment;
