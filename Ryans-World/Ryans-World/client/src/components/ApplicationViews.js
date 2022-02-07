import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./UserProfile/Login";
import Register from "./UserProfile/Register";
import BookList from "./Book/BookList";
import TagList from "./Tag/TagList";
import TagForm from "./Tag/NewTagForm";
import DeleteTag from "./Tag/DeleteTag";
import TagUpdateForm from "./Tag/EditTag";
import BookForm from "./Book/NewBookForm";
import DeleteBook from "./Book/DeleteBook";
import BookUpdateForm from "./Book/EditBook";
import Book from "./Book/BookDetails"
import BookTagForm from "./Tag/BookTag";
import RemoveBookTagForm from "./Tag/RemoveBookTag";
import CategoryList from "./Category/CategoryList";
import { CategoryForm } from "./Category/AddCategory";


export default function ApplicationViews({ isLoggedIn }) {

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/book" exact>
                    {isLoggedIn ? <BookList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/createBook">
                    {isLoggedIn ? <BookForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/deleteBook/:id">
                    {isLoggedIn ? <DeleteBook userparams /> : <Redirect to="/login" />}
                </Route>
                <Route path="/editBook/:id">
                    {isLoggedIn ? <BookUpdateForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/bookDetails/:id">
                    {isLoggedIn ? <Book /> : <Redirect to="/login" />}
                </Route>
                <Route path="/manageTags/:id">
                    {isLoggedIn ? <BookTagForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/deleteBookTags/:id">
                    {isLoggedIn ? <RemoveBookTagForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/tag" exact>
                    {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/tag/create">
                    {isLoggedIn ? <TagForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/deleteTag/:id">
                    {isLoggedIn ? <DeleteTag userparams /> : <Redirect to="/login" />}
                </Route>
                <Route path="/editTag/:id">
                    {isLoggedIn ? <TagUpdateForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/category" exact>
                    {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/category/create">
                    {isLoggedIn ? <CategoryForm /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};
