import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getAllComments } from "../../modules/commentManager";
import { useParams, useHistory } from "react-router-dom";

export const CommentList = () => {
    const history = useHistory();
    const [comments, setComments] = useState([]);

    const getComments = () => {
        getAllComments().then(comments => setComments(comments));
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <div>
                <div className="NewComment">
                    <button type="button"
                        className="NewCommentButton"
                        onClick={() => { history.push("/comment/create"); }}>
                        <p className="CreateNewComment">Create a new Comment</p>
                    </button>
                </div>
                <div>{comments.map(comment =>
                    <CommentCard key={comment.id} comment={comment} />)}
                </div>
            </div>
        </>
    )
}

export default CommentList;