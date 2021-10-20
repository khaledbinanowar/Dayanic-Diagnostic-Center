import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
    <div className="notfound">
        <div className="notfound-404">
            <h1>404 - Page Not Found!</h1>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    </div>
);

export default NotFound;