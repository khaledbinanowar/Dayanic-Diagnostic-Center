import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import img1 from '../../images/SLIDE_01.jpeg';
import img2 from '../../images/SLIDE_01.jpeg';
import img3 from '../../images/SLIDE_01.jpeg';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row className="align-items-center">
                    <Col>
                        <div className="about">
                            <div className="about-cotent">
                                <h2 className="p-5">About Us</h2>
                                <h1>We Try To Provide Our Best</h1>
                                <p>This test measures the amount of uric acid in your blood or urine. Uric acid is a normal waste product that's made when the body breaks down chemicals called purines.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5" fluid="md">
                <h2 className="p-5">Patients About Us</h2>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Alexis Khouri</Card.Title>
                            <Card.Text>
                                I personally think The Rookies is better than other sites, because it exposes you to the level of artists that you're competing against.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">CEO of FlippedNormals</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Pavani Boddapati</Card.Title>
                            <Card.Text>
                                I personally think The Rookies is better than other sites, because it exposes you to the level of artists that you're competing against.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">CEO of FlippedNormals</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Jake Burstein</Card.Title>
                            <Card.Text>
                                I personally think The Rookies is better than other sites, because it exposes you to the level of artists that you're competing against.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">CEO of FlippedNormals</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default About;
