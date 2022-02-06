import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getBookTagsByBookId } from "../../modules/bookTagManager";
import { addTag, getAllTags } from "../../modules/tagManager";
import { getBook } from "../../modules/bookManager";
import Book from "../Book/BookDetails";
import { addBookTag } from "../../modules/bookTagManager";
import "./Tag.css"

export const BookTagForm = () => {
    const [tags, setTags] = useState([]);
    const [book, setBook] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        Promise.all([getAllTags(), getBookTagsByBookId(id), getBook(id)]).then(([tags, bookTags, book]) => {
            setBook(book);
            const availableTags = tags.filter(t => {
                return !bookTags.find(bt => bt.tagId === t.id)
            })
            setTags(availableTags);
        });
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
            <h2 className="SelectTags">Select new Book Tag(s)</h2>
            <div className="multiselector">
                <div className="selectfield">
                    {tags.map(t => (
                        <>
                            <input type="checkbox" onChange={handleChange} key={t.id} value={t.id} />
                            <p className="BookTagName">{t.name}</p>
                        </>
                    ))}
                </div>
                <button className="save-booktag-button"
                    onClick={handleClickSaveBookTag}>
                    <p className="SaveTagsButton"> Save Tags</p>
                </button>
            </div>
        </>
    )
}

export default BookTagForm;