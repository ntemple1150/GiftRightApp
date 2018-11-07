import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email:'',
            groupID: ['']
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/create", {
            method: 'POST',
            body:JSON.stringify({user:this.state}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then ((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>New to GiftRight?</h1>
                <h6>You can create your account below, just fill in the form and boom you are all set. Not part of a group? Don't worry, you can join a group after you are all signed up!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="groupID">Group ID</Label>
                        <Input id="groupID" type="groupID" name="groupID" placeholder="enter Group ID" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup;