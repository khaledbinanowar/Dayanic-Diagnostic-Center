import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { key, img, title, category, description, price } = service;
    return (
        <Col>
            <Card className="service">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Row xs={1} md={2}>
                        <Col>
                            <Card.Text><small>Price: ${price}</small></Card.Text>
                        </Col>
                        <Col>
                            <Card.Text><small>Category: {category}</small></Card.Text>
                        </Col>
                    </Row>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/Single/${key}`}>
                        <button className="btn btn-secondary">Show More</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;