import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { getAllComments } from "../../modules/commentManager";
import { useParams, useHistory } from "react-router-dom";

export const CommentList = () => {
    const [comments, setComments] = useState([]);

    const history = useHistory();

    const getComments = () => {
        getAllComments().then(comments => setComments(comments));
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <div>
                <div>
                    <div>{comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}</div>
                </div>
            </div>
        </>
    )

}

export default CommentList;