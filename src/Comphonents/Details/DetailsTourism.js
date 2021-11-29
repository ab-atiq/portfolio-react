import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const DetailsTourism = () => {
    return (
        <Container>
            <h1 className='py-3'>All Feature of Tourism Website</h1>
            <Row>
                <Col>
                    <a target="_blank" rel='noreferrer' href='https://i.ibb.co/PwKc2N6/tourism-home-1.png' className='p-2'>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/PwKc2N6/tourism-home-1.png'></Image>
                    </a>
                </Col>
                <Col>
                    <a target="_blank" rel='noreferrer' href='https://i.ibb.co/xzMRkWP/tourism-home-2.png' className='p-2'>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/xzMRkWP/tourism-home-2.png'></Image>
                    </a>
                </Col>
                <Col>
                    <a target="_blank" rel='noreferrer' href='https://i.ibb.co/TBrrTkF/tourism-home-3.png' className='p-2'>
                        <Image fluid style={{ height: '300px' }} src='https://i.ibb.co/TBrrTkF/tourism-home-3.png'></Image>
                    </a>
                </Col>
            </Row>
            <Row className='p-5'>
                <ol type='I' className='text-start'>
                    <li>Responsive MERN Stack app with firebase authentication, functionality for admin
                        and customer.</li>
                    <li>Customers can book service and be able to cancel their service.</li>
                    <li>Admin can add or remove services, orders, and also change order status.</li>
                    <li>Users can book any accommodation click book now button, a user has to give
                        personal information and the user can delete the booking.</li>
                    <li>All data is loaded from the database. When admin or users add something it will
                        update in the database.</li>
                </ol>
            </Row>
        </Container>
    );
};

export default DetailsTourism;