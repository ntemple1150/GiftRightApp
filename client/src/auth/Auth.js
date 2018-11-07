import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col>
                    <Signup setToken={props.setToken} />
                </Col>
                <Col className="login-col">
                    <Login setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;
