import React from "react"
import './Footer.css';

const Footer = () => <footer className="page-footer bg-dark pt-4">
    <div className="container-lg text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Dayanic Diagnostic Center</h5>
                <p>This test measures the amount of acetaminophen in the blood. Acetaminophen is one of the most common medicines used in over-the-counter pain relievers and fever reducers.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">See More</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Services</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Know More</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Service</a></li>
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">Helps</a></li>
                    <li><a href="#!">Terms and Conditions</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="#!"> Dayanic Diagnostic Center</a>
    </div>

</footer>

export default Footer;