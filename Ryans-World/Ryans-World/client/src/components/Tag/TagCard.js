import React from "react";
import { useHistory } from "react-router-dom";

export const TagCard = ({ tag }) => {
    const history = useHistory();

    const handleDeleteTag = () => {
        history.push(`/deleteTag/${tag.id}`)
    };

    return (
        <div classsName="TagBox">
            <div className="TagCard">
                <p>Name : {tag.name}</p>
            </div>
            <button className="DeleteTag"
                type="button" onClick={() => handleDeleteTag(tag.id)}>
                Delete Tag</button>
        </div>
    )
}
export default TagCard;