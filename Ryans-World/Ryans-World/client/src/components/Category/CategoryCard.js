import React from "react";
import { useHistory } from "react-router-dom";

export const CategoryCard = ({ category }) => {
    const history = useHistory();

    const handleUpdateCategory = () => {
        history.push(`/editCategory/${category.id}`);
    };

    return (
        <div className="TagCard">
            <p className="TagName">Name : {category.name}<p className="Middle">|</p></p>
            <ul className="TagButtons">
                <li><button className="UpdateTag"
                    type="button" onClick={() => handleUpdateCategory(category.id)}>
                    <p className="NameUpdateTag">Update</p></button></li>
            </ul>
        </div>
    )
}
export default CategoryCard;