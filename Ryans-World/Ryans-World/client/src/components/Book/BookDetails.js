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
        <>
            <div className="MainBookDetail">
                <p className="BookDetailHeader"><p className="BookName">- Book Details -</p></p>
                <div className="BookOnly">
                    <img className="BookImageDetail" src={book.imageLocation} alt="picture" />
                    <div className="BookDetailProperties">
                        <p>Title : {book.title}</p>
                        <p>Author : {book.author}</p>
                        <p>When to read : {book.dayOfWeek}</p>
                        <p>Favorite Scale : {book.favoriteScale}</p>
                        <h2>Tags :</h2>
                        <ul className="TagsUL">
                            {bookTags != null
                                ? bookTags.map((t) => <li>☼ {t.tag.name}</li>)
                                : null}
                        </ul>
                    </div>
                    <ul className="BookDetailButtons">
                        <li><Button
                            className="DeleteBookTags"
                            onClick={() => history.push(`/deleteBookTags/${id}`)}
                        ><p className="DeleteTagsLink">Delete Tags</p></Button></li>
                        <li><Button
                            className="ManageTags"
                            onClick={() => history.push(`/manageTags/${id}`)}
                        ><p className="AddTags">Add Tags</p>
                        </Button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Book;