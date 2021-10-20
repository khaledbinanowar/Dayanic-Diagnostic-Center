import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <Container fluid="md">
                <h2 className="pt-5">Our All Services</h2>
                <Row xs={1} md={3} className="py-5 g-4">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;