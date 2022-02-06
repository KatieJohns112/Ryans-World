import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getBookTagsByBookId } from "../../modules/bookTagManager";
import { getAllTags } from "../../modules/tagManager";
import { getBook } from "../../modules/bookManager";
import { removeBookTag } from "../../modules/bookTagManager";

export const RemoveBookTagForm = () => {
    const [bookTags, setBookTags] = useState([]);
    const [book, setBook] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        getBookTagsByBookId(id).then(setBookTags);
        getBook(id).then(setBook);
    }, []);

    const handleChange = (event) => {
        const newTagList = [...selectedTags]
        if (event.target.checked) {
            newTagList.push(event.target.value)
        } else {
            newTagList = newTagList.filter(t => t != event.target.value);
        }
        setSelectedTags(newTagList);
    };

    const handleClickRemoveBookTag = (event) => {
        event.preventDefault();

        selectedTags.forEach(t => {
            removeBookTag(t)
        })
        history.push("/book")
    };

    return (
        <>
            <h2 className="SelectTags">Remove Book Tag(s)</h2>
            <div className="multiselector">
                <div className="selectfield">
                    {bookTags.map(t => (
                        <>
                            <input type="checkbox" onChange={handleChange} key={t.id} value={t.id} />
                            <p className="BookTagName">{t.tag.name}</p>
                        </>
                    ))}
                </div>
                <button className="remove-booktag-button"
                    onClick={handleClickRemoveBookTag}>
                    <p className="SaveTagsButton">Remove Tags</p>
                </button>
            </div>
        </>
    )
}

export default RemoveBookTagForm;