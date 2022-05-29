import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {Navigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { signup } from '../../actions'
import { useState } from 'react'

/**
* @author
* @function Signup
**/

export const Signup = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = useSelector(state => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            firstName,lastName,email,password
        }
        dispatch(signup(user));
    }
    
    if (auth.authenticate) {
        return <Navigate to={`/`} />
    }

    if (user.loading) {
        return <p>Loading...!</p>;
      }

    return (
        <Layout>
            <Container>
                { user.message }
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        Label='First Name'
                                        placeholder="First Name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        Label="Last Name"
                                        placeholder="Last Name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                Label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                Label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )

}

export default Signup