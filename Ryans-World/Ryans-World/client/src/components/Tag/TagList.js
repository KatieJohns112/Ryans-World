import React, { useEffect, useState } from "react";
import { TagCard } from "./TagCard"
import { getAllTags } from "../../modules/tagManager";
import { useHistory } from "react-router-dom";
import './Tag.css'

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
            <div className="NewTag">
                <button type="button"
                    className="NewTagButton"
                    onClick={() => { history.push("/tag/create"); }}>
                    <p className="CreateNewTag">Create new Tag</p>
                </button>
            </div>
            <div>
                <div className="MainTag">
                    <div className="TagContent">
                        <div className="TagListName">Tag List :</div>
                        <div className="TagList">
                            {tags.map(tag => <TagCard key={tag.id} tag={tag} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TagList;