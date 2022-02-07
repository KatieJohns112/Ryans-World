import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";
import "./UserProfile.css"

export default function Register() {
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { FirstName: firstName, LastName: lastName, DisplayName: displayName, ImageLocation: imageLocation, Email: email };
            debugger;
            register(userProfile, password)
                .then((profile) => {
                    localStorage.setItem("myUser", profile.id);
                    history.push("/home")
                });
        }
    };

    return (
        <>
            <div className="MainRegisterForm">
                <div className="RegisterForm">
                    <Form onSubmit={registerClick}>
                        <fieldset className="RegisterFieldset">
                            <FormGroup className="RegisterProp">
                                <Label htmlFor="firstName">First Name : </Label>
                                <Input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label htmlFor="lastName">Last Name : </Label>
                                <Input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label htmlFor="displayName">Display Name : </Label>
                                <Input id="displayName" type="text" onChange={e => setDisplayName(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label for="email">Email : </Label>
                                <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label htmlFor="imageLocation">Profile Image URL : </Label>
                                <Input id="imageLocation" type="text" onChange={e => setImageLocation(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label for="password">Password : </Label>
                                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="RegisterProp">
                                <Label for="confirmPassword">Confirm Password : </Label>
                                <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Button className="RegisterNewButton">Register</Button>
                            </FormGroup>
                        </fieldset>
                    </Form>
                </div>
            </div>
        </>
    );
}
