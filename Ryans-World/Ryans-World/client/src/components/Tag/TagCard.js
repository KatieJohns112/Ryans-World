import React from "react";

export const TagCard = ({ tag }) => {
    return (
        <div classsName="TagBox">
            <div className="TagCard">
                <p>Name : {tag.name}</p>
            </div>
        </div>
    )
}
export default TagCard;