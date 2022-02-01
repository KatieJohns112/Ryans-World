import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateTag, getTag, addTag } from "../../modules/tagManager";
import { getTagById } from "../../modules/tagManager";


export const TagUpdateForm = () => {
    const [tag, setTag] = useState({ name: "" });

    const { id } = useParams();
    const history = useHistory();


    useEffect((event) => {
        getTag(id).then((res) => {
            setTag(res);
        });
    }, []);

    const handleControlledInputChange = (event) => {
        const newTag = { ...tag };
        let selectedVal = event.target.value;

        newTag[event.target.id] = selectedVal;
        // update state
        setTag(newTag);
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        updateTag(tag).then(() => history.push("/tag"));
    };
    return (
        <>
            <h3 className="EditTagHeader">Edit Tag</h3>
            <form className="UpdateTagForm">
                <div className="UpdateTagName">
                    <label className="EditTagName" htmlFor="name">Tag name :</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="name"
                        value={tag.name} />
                </div>
                <div className="alignRight">
                    <button
                        type="EditTagButton"
                        onClick={handleConfirm}
                        className="submit_tag_button"
                    >Save</button>
                </div>
                <button
                    className="EditTagButton"
                    variant="secondary"
                    onClick={() => history.push("/tag")}
                >
                    Cancel
                </button>
            </form>
        </>
    );
}
export default TagUpdateForm;