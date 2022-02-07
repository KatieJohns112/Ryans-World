import React, { useState } from "react";
import { useHistory } from "react-router"
import { addCategory } from "../../modules/categoryManager";

export const CategoryForm = () => {
    const [category, setCategory] = useState({
        name: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCategory[event.target.id] = selectedVal
        setCategory(newCategory)
    }

    const handleClickSaveCategory = (event) => {
        event.preventDefault()
        addCategory(category)
            .then(() => history.push("/category"))
    }

    return (
        <>
            <h3 className="NewTagHeader">Create a new Category</h3>
            <div className="MainTagForm">
                <form className="TagForm">
                    <fieldset className="NewTagName">
                        <div className="form_group">
                            <label htmlFor="name">Category name : </label>
                            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" value={category.name} />
                        </div>
                    </fieldset>
                </form>
                <button className="SaveTagButton"
                    onClick={handleClickSaveCategory}><p className="SaveNewTag">Save</p></button>
            </div>
        </>
    )
};

export default CategoryForm;
