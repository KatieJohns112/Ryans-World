import React, { useState } from "react";
import { useHistory } from "react-router"
import { addTag } from "../../modules/tagManager";

export const TagForm = () => {
    const [tag, setTag] = useState({
        name: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTag = { ...tag }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTag[event.target.id] = selectedVal
        setTag(newTag)
    }

    const handleClickSaveTag = (event) => {
        event.preventDefault()
        addTag(tag)
            .then(() => history.push("/tag"))
    }

    return (
        <>
            <h3 className="NewTagHeader">Create a new Tag</h3>
            <div className="MainTagForm">
                <form className="TagForm">
                    <fieldset className="NewTagName">
                        <div className="form_group">
                            <label htmlFor="name">Tag name : </label>
                            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" value={tag.name} />
                        </div>
                    </fieldset>
                </form>
                <button className="SaveTagButton"
                    onClick={handleClickSaveTag}><p className="SaveNewTag">Save</p></button>
            </div>
        </>
    )
};

export default TagForm;
