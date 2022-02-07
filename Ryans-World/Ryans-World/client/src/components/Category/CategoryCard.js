import React from "react";
import { useHistory } from "react-router-dom";

export const CategoryCard = ({ category }) => {
    const history = useHistory();

    const handleUpdateCategory = () => {
        history.push(`/editCategory/${category.id}`);
    };

    const handleDeleteCategory = () => {
        history.push(`/deleteCategory/${category.id}`)
    };

    return (
        <div className="TagCard">
            <p className="TagName">Name : {category.name}<p className="Middle">|</p></p>
            <ul className="TagButtons">
                <li><button className="DeleteTag"
                    type="button" onClick={() => handleDeleteCategory(category.id)}>
                    <p className="NameDeleteTag">Delete </p></button></li>
                <li><button className="UpdateTag"
                    type="button" onClick={() => handleUpdateCategory(category.id)}>
                    <p className="NameUpdateTag">Update</p></button></li>
                <li><button className="DetailTag"
                    type="button" >
                    <p className="NameDetailsTag">Details</p></button></li>
            </ul>
        </div>
    )
}
export default CategoryCard;