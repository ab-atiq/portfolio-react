import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Image src="https://i.ibb.co/3mS6Kmh/image.png" rounded fluid />
                </Col>
                <Col sm={6}>
                    <h1>Hi, I am Atiqur Rahman.</h1>
                    <p>
                        I'm a web developer from in Rajshahi, Bangladesh. I’m currently the react developer. In my spare time I like working with a few select clients and building my own products.
                        <br />
                        My most recent product is Airplane. It’s a simple service and commerse website.
                        <br />
                        You can usually find me on Twitter, but I'm occasionally on Product Hunt and Reddit as well.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;