import React,{useEffect, useState} from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {isUserLoggedIn, login} from '../../actions';
import {Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

/**
* @author
* @function Signin
**/

export const Signin = (props) => {

    const auth = useSelector(state=>state.auth);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    //const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(()=> {
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
    })
    

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email,password
        }
        //login(user);
        dispatch(login(user));
        // replace Redirect with Navigate
    }

    if(auth.authenticate){
        return <Navigate to={`/`} />
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
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

export default Signin