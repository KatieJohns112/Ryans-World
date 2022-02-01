import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllTags, deleteTag } from "../../modules/tagManager";
import { useParams } from "react-router-dom";

export const DeleteTag = () => {
    const [tag, setTag] = useState({
        name: "",
    });

    const { id } = useParams();

    const history = useHistory();

    const handleConfirmDeleteTag = (event) => {
        event.preventDefault();

        deleteTag(id).then(() => history.push("/tag"));
    };

    return (
        <form className="DeleteTagForm">
            <p className="Text">Are you sure you want to delete this tag?</p>
            <ul className="DeleteTagButtons">
                <li><button className="ConfirmDeleteTag" onClick={handleConfirmDeleteTag}><p className="TagDelete">Delete</p></button></li>
                <li><button className="ConfirmCancelTag" onClick={() => history.push("/tag")}><p className="TagCancel">Cancel</p></button></li>
            </ul>
        </form>
    );
};

export default DeleteTag;