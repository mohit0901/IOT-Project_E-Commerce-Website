import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

export const Home = (props) => {
    return (
        <Layout sidebar>
            
            {/* <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <ul>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/products'}>Products</NavLink></li>
                            <li><NavLink to={'/orders'}>Orders</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={10} style={{marginLeft: 'auto'}}>container</Col>
                </Row>
            </Container> */}

            {/* <div class="container-fluid bg-light text-dark p-5" style={{margin:'5rem'}} className='text-center'>
                <div class="container bg-light p-5">
                    <h1 class="display-4 fw-bold">Welcome to Admin Dashboard</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
                </div>
            </div> */}
        </Layout>
    )

}

export default Home