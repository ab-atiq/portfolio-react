import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <div>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/Mhymcpq/airplane-home.png'></Image>
                    </div>
                    <br />
                    <a href='https://i.ibb.co/Mhymcpq/airplane-home.png'>
                        <Button>View Full</Button>
                    </a>
                    <br />
                </Col>
                <Col sm={6}>
                    <h1>Airplane Website : (Service and E-commerce Based Website)</h1>
                    <a href='https://ph-assignment-12.firebaseapp.com/'>Live site</a>
                    <br />
                    <a href='https://github.com/ab-atiq/airplane-client-side'>Client-side code</a>
                    <br />
                    <a href='https://github.com/ab-atiq/airplane-server-side'>Server-side code</a>
                    <br />
                    <ol type='I'>
                        <li>A Fully responsive MERN Stack app with multiple authentication systems.</li>
                        <li>Dashboard Functionality for Admin and Customers separately.</li>
                        <li>After login customers will be able to place orders, see my orders, add reviews, and
                            see all reviews.</li>
                        <li>Admin Will be able to manage all orders, add or remove any services and add a
                            user as admin.</li>
                        <li>All data is loaded from the database. When admin or users add something it will
                            update in the database.</li>
                    </ol>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={6}>
                    <div>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/XpG8tk9/tourism-home.png'></Image>
                    </div>
                    <br />
                    <a href='https://i.ibb.co/Mhymcpq/airplane-home.png'>
                        <Button>View Full</Button>
                    </a>
                    <br />
                </Col>
                <Col sm={6}>
                    <h1>Tourism : (Best Place in Bangladesh)</h1>
                    <a href='https://tourism-assignment-11-75efb.firebaseapp.com/'>Live site</a>
                    <br />
                    <a href='https://github.com/ab-atiq/tourism-client-side'>Client-side code</a>
                    <br />
                    <a href='https://github.com/ab-atiq/tourism-server-side'>Server-side code</a>
                    <br />
                    <ol type='I'>
                        <li>Responsive MERN Stack app with firebase authentication, functionality for admin
                            and customer.</li>
                        <li>Customers can book service and be able to cancel their service.</li>
                        <li>Admin can add or remove services, orders, and also change order status.</li>
                        <li>Users can book any accommodation click book now button, a user has to give
                            personal information and the user can delete the booking.</li>
                        <li>All data is loaded from the database. When admin or users add something it will
                            update in the database.</li>
                    </ol>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={6}>
                    <div>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/NtC7K48/doctor-home.png'></Image>
                    </div>
                    <br />
                    <a href='https://i.ibb.co/NtC7K48/doctor-home.png'>
                        <Button>View Full</Button>
                    </a>
                    <br />
                </Col>
                <Col sm={6}>
                    <a href='https://i.ibb.co/XpG8tk9/tourism-home.png'>Live site</a>
                    <br />
                    <a href='https://github.com/ab-atiq/Healthcare-Website'>Server code</a>
                    <br />
                    <ol type='I'>
                        <li>Fully responsive app with Firebase Authentication, React Router, React Bootstrap.</li>
                        <li>Users can see all details information by clicking the see details button.</li>
                        <li>Users can log in with email, password, and google authentication. Users can not
                            see services without a login.</li>
                        <li>Here does not use a database. All data are fake.</li>
                    </ol>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;