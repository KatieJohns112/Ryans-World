import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getBook } from "../../modules/bookManager";
import { Button } from "reactstrap";
import { getTag } from "../../modules/tagManager";
import { getBookTagsByBookId } from "../../modules/bookTagManager";

export const Book = () => {
    const history = useHistory();
    const [book, setBook] = useState([]);
    const [tags, setTags] = useState([]);
    const [bookTags, setBookTags] = useState([]);

    const { id } = useParams();

    const getBooks = () => {
        getBook(id).then((book) => {
            setBook(book);
        });
    };

    const getTagsByBookId = () => {
        getBookTagsByBookId(id).then((tags) => {
            setBookTags(tags);
        })
    }

    useEffect(() => {
        getBooks();
        getTagsByBookId();
    }, []);
    console.log(bookTags);


    return (
        <div>
            {book.imageLocation ? (
                <div className="BookDetailsImage">
                    <img src={book.imageLocation} alt="bookimage"></img>
                </div>
            ) : (
                <></>
            )}
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.dayOfWeek}</p>
            <p>{book.favoriteScale}</p>
            <h4>Tags</h4>
            <ul>
                {bookTags != null
                    ? bookTags.map((t) => <li>{t.tag.name}</li>)
                    : null}
            </ul>
            <Button
                className="DeleteBookTags"
                onClick={() => history.push(`/deleteBookTags/${id}`)}
            >Delete Tags</Button>
            <Button
                className="ManageTags"
                onClick={() => history.push(`/manageTags/${id}`)}
            >Manage Tags
            </Button>
        </div>
    );
};

export default Book;