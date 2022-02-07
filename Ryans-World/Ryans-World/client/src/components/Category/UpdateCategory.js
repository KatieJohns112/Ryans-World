import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateCategory } from "../../modules/categoryManager";
import { getCategory } from "../../modules/categoryManager";

export const CategoryUpdateForm = () => {
    const [category, setCategory] = useState({ name: "" });

    const { id } = useParams();
    const history = useHistory();


    useEffect((event) => {
        getCategory(id).then((res) => {
            setCategory(res);
        });
    }, []);

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category };
        let selectedVal = event.target.value;

        newCategory[event.target.id] = selectedVal;
        // update state
        setCategory(newCategory);
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        updateCategory(category).then(() => history.push("/category"));
    };
    return (
        <>
            <h3 className="EditTagHeader">Edit Category</h3>
            <form className="UpdateTagForm">
                <div className="UpdateTagName">
                    <label className="EditTagName" htmlFor="name">Category name :</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="name"
                        value={category.name} />
                </div>
                <div className="UpdateButtons">
                    <div className="alignRight">
                        <button
                            type="EditTagButton"
                            onClick={handleConfirm}
                            className="submit_tag_button"
                        ><p className="saveUpdatedTag">Save</p></button>
                    </div>
                    <button
                        className="cancel_tag_button"
                        variant="secondary"
                        onClick={() => history.push("/category")}
                    >
                        <p className="cancelUpdatedTag">Cancel</p>
                    </button>
                </div>
            </form>
        </>
    );
}
export default CategoryUpdateForm;