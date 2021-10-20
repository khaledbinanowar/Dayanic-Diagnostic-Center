import './Banner.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/SLIDE_01.jpeg';
import banner2 from '../../../images/SLIDE_05.jpeg';
import banner3 from '../../../images/SLIDE_03.jpeg';
import banner4 from '../../../images/SLIDE_04.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Diagnostic <span>Center</span></h3>
                        <p>This test measures the amount of acetaminophen in the blood. Acetaminophen is one of the most common medicines used in over-the-counter pain relievers and fever reducers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Medical <span>Laboratory</span></h3>
                        <p>Magnetic resonance imaging (MRI) is a medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of the organs and tissues in your body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Diagnostic <span>Center</span></h3>
                        <p>This test measures the amount of acetaminophen in the blood. Acetaminophen is one of the most common medicines used in over-the-counter pain relievers and fever reducers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Medical <span>Laboratory</span></h3>
                        <p>Magnetic resonance imaging (MRI) is a medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of the organs and tissues in your body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
};

export default Banner;