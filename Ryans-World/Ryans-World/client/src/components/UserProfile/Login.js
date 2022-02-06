import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { login } from "../../modules/authManager";
import "./UserProfile.css"
import logo from "../../Images/Logo.png"

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => history.push("/"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <>
            <img className="LoginLogo" src={logo} alt="logo"></img>
            <h2 className="RyansWorld">Ryans World</h2>
            <div className="MainLoginForm">
                <div className="LoginForm">
                    <Form onSubmit={loginSubmit}>
                        <fieldset className="LoginFieldset">
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Button className="LoginButton">Login</Button>
                            </FormGroup>
                            <em className="RegisterNew">
                                Not registered? <Link to="register">Register</Link>
                            </em>
                        </fieldset>
                    </Form>
                </div>
            </div>
        </>
    );
}