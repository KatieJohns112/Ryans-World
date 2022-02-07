import React from "react";
import { useHistory } from "react-router-dom";

export const CategoryCard = ({ category }) => {
    const history = useHistory();

    return (
        <div className="TagCard">
            <p className="TagName">Name : {category.name}<p className="Middle">|</p></p>
        </div>
    )
}
export default CategoryCard;