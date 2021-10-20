import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Cover.css';

const Cover = () => {
    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col>
                    <div className="cover">
                        <div className="cover-cotent">
                            <h1 className="text-white">Learn Games Development</h1>
                            <p className="text-white">Any successful career starts with good education. Together with us you will have deeper knowledge of the subjects that will be especially useful for you when climbing the career ladder.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cover;