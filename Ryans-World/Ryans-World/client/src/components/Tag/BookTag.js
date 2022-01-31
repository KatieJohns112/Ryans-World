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
    const [activeTagIds, setActiveTagIds] = useState([]);

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        getAllTags().then(setTags);
        getBookTagsByBookId(id).then(setBookTags);
        getBook(id).then(setBook);
    }, []);

    const handleSelectedTags = (event) => {
        event.preventDefault();
        const newId = parseInt(event.target.id.split("--")[1]);

        const activeTagIdCopy = [...activeTagIds];

        if (activeTagIdCopy.includes(newId)) {
            setActiveTagIds([
                ...activeTagIdCopy.filter((tag) => tag != newId),
            ]);
        } else {
            activeTagIdCopy.push(newId);
            setActiveTagIds(activeTagIdCopy);
        }
    }
    if (!book) {
        return null;
    }
    return (
        <>
            {/* <form className="AddTagToBook">
                <fieldset className="BookTagFieldset">
                    <div className="form-group">
                        <label htmlFor="tag">What tags would you like to add to this book?</label>
                        <select value={book.bookTag.name} name="tagId" id="tagId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0">Select tags</option>
                            {tags.map(l => (
                                <option key={l.id} value={l.id}>
                                    {l.name}

                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <button className="SaveBookTagButton"
                    onClick={handleClickSaveBookTag}>
                    Save
                </button>
            </form> */}
            <p>{book.title}</p>
            {bookTags.map(t => <p>{t.name}</p>)}
            {tags.map(t => <p>{t.name}</p>)}

        </>
    )
}

export default BookTagForm;