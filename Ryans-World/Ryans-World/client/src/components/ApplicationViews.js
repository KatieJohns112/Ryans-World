import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./UserProfile/Login";
import Register from "./UserProfile/Register";
import BookList from "./Book/BookList";
import TagList from "./Tag/TagList";
import TagForm from "./Tag/NewTagForm";

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
                <Route path="/tag" exact>
                    {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/tag/create">
                    {isLoggedIn ? <TagForm /> : <Redirect to="/login" />}
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
