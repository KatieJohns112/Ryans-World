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
                <p>Name : {tag.name} <p className="Middle">|</p> </p>
                <ul className="TagButtons">
                    <li><button className="DeleteTag"
                        type="button" onClick={() => handleDeleteTag(tag.id)}>
                        <p className="NameDeleteTag">Delete Tag</p></button></li>
                    <li><button className="UpdateTag"
                        type="button" onClick={() => handleUpdateTag(tag.id)}>
                        <p className="NameUpdateTag">Update</p></button></li>
                </ul>
            </div>
        </div>
    )
}
export default TagCard;