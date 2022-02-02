import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getBookTagsByBookId } from "../../modules/bookTagManager";
import { addTag, getAllTags } from "../../modules/tagManager";
import { getBook } from "../../modules/bookManager";
import Book from "../Book/BookDetails";
import { addBookTag } from "../../modules/bookTagManager";

export const BookTagForm = () => {
    const [bookTags, setBookTags] = useState([]);
    const [tags, setTags] = useState([]);
    const [book, setBook] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [checked, setChecked] = useState(false);

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        getAllTags().then(setTags);
        getBookTagsByBookId(id).then(setBookTags);
        getBook(id).then(setBook);
    }, []);

    const handleChange = (event) => {
        console.log(event.target.value);
        const newTagList = [...selectedTags]
        newTagList.push(event.target.value)
        console.log(newTagList);
        setSelectedTags(newTagList);
    };

    const handleClickSaveBookTag = (event) => {
        event.preventDefault();

        selectedTags.map(t => {
            var BookTag = {
                BookId: book.id,
                TagId: t
            }
            addBookTag(BookTag)
        })
        history.push("/book")
    }

    if (!book) {
        return null;
    }

    return (
        <>
            <div className="multiselector">
                <div className="selectfield">
                    <label htmlFor="tags">Please select Tag(s)</label>
                    {tags.map(t => (
                        <>
                            <input type="checkbox" onChange={handleChange} key={t.id} value={t.id} />
                            <p>{t.name}</p>
                        </>
                    ))}
                </div>
                <button className="save-booktag-button"
                    onClick={handleClickSaveBookTag}>
                    Save Tags
                </button>
            </div>
        </>
    )
}

export default BookTagForm;