import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getBook } from "../../modules/bookManager";
import { Button } from "reactstrap";

export const Book = () => {
    const history = useHistory();
    const [book, setBook] = useState([]);
    const [tags, setTags] = useState([]);

    const { id } = useParams();

    const getBooks = () => {
        getBook(id).then((book) => {
            setBook(book);
        });
    };

    useEffect(() => {
        getBooks();
    }, []);

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
                {tags != null
                    ? tags.map((t) => <li>{t.name}</li>)
                    : null}
            </ul>
            <Button
                className="ManageTags"
                onClick={() => history.push(`/manageTags/${id}`)}
            >Manage Tags
            </Button>
        </div>
    );
};

export default Book;