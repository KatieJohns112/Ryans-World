import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../modules/categoryManager";
import { useHistory } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    const getCategories = () => {
        return getAllCategories().then(categories => {
            setCategories(categories)
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <div>
                <div className="MainTag">
                    <div className="TagContent">
                        <div className="TagListName">Category List :</div>
                        <div className="TagList">
                            {categories.map(category => <CategoryCard key={category.id} category={category} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryList;