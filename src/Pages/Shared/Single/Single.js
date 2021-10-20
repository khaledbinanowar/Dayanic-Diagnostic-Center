import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Single = () => {
    const { serviceKey } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    const exectData = data.filter(singleData => singleData.key === serviceKey);
    return (
        <Container fluid="md">
            <Row xs={1} className="py-5 g-4">
                <Col>
                    <Card className="service">
                        <Card.Img variant="top" src={exectData[0]?.img} />
                        <Card.Body>
                            <Card.Title>{exectData[0]?.title}</Card.Title>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Card.Text><small>Price: ${exectData[0]?.price}</small></Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text><small>Category: {exectData[0]?.category}</small></Card.Text>
                                </Col>
                            </Row>
                            <Card.Text>{exectData[0]?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Single;