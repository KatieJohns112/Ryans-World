import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteCategory } from "../../modules/categoryManager";

export const DeleteCategory = () => {
    const [category, setCategory] = useState({
        name: "",
    });

    const { id } = useParams();

    const history = useHistory();

    const handleConfirmDeleteCategory = (event) => {
        event.preventDefault();

        deleteCategory(id).then(() => history.push("/category"));
    };

    return (
        <form className="DeleteTagForm">
            <p className="Text"> - Are you sure you want to delete this tag? -</p>
            <ul className="DeleteTagButtons">
                <li><button className="ConfirmDeleteTag" onClick={handleConfirmDeleteCategory}><p className="TagDelete">Delete</p></button></li>
                <li><button className="ConfirmCancelTag" onClick={() => history.push("/category")}><p className="TagCancel">Cancel</p></button></li>
            </ul>
        </form>
    );
};

export default DeleteCategory;