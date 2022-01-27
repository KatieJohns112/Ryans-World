import React, { useEffect, useState } from "react";
import { TagCard } from "./TagCard"
import { getAllTags } from "../../modules/tagManager";
import { useHistory } from "react-router-dom";

export const TagList = () => {
    const [tags, setTags] = useState([]);

    const history = useHistory();

    const getTags = () => {
        return getAllTags().then(tags => {
            setTags(tags)
        });
    };

    useEffect(() => {
        getTags();
    }, []);

    return (
        <>
            <div>
                <div className="TagContent">
                    <div className="TagList">
                        {tags.map(tag => <TagCard key={tag.id} tag={tag} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TagList;