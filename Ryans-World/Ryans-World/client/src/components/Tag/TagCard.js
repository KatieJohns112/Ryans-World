import React from "react";
import { useHistory } from "react-router-dom";
import './Tag.css'

export const TagCard = ({ tag }) => {
    const history = useHistory();

    const handleDeleteTag = () => {
        history.push(`/deleteTag/${tag.id}`)
    };

    const handleUpdateTag = () => {
        history.push(`/editTag/${tag.id}`);
    };

    return (
        <div classsName="TagBox">
            <div className="TagCard">
                <p>Name : {tag.name}</p>
                <button className="DeleteTag"
                    type="button" onClick={() => handleDeleteTag(tag.id)}>
                    Delete Tag</button>
                <button className="DeleteTag"
                    type="button" onClick={() => handleUpdateTag(tag.id)}>
                    Update</button>
            </div>
        </div>
    )
}
export default TagCard;