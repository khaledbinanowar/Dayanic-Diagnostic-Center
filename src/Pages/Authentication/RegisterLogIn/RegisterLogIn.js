import './RegisterLogIn.css'
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const RegisterLogIn = () => {

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [error, setError] = useState(' ');
    const [isLogIn, setIsLogIn] = useState(false);
    const [name, setName] = useState('');

    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();

    const handleEmailChange = e => {

        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    const handleReistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be contain at least 6 charector")
            return;
        }
        if (!/((?=.*[A-Z].*[A-Z]))/.test(password)) {
            setError("Ensure your password has two uppercase letters.");
            return;
        }

        isLogIn ? processLOgIn(email, password) : createNewUser(email, password);

    }

    const handleUserName = e => {
        setName(e.target.value);
    }
    const processLOgIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }
    const toggleLogIn = e => {
        setIsLogIn(e.target.checked);
    }
    return (
        <div className="form register-login m-4 p-5">
            <form className="w-75 mx-auto" onSubmit={handleReistration}>
                <h3 className="fw-bold text-4xl mb-4">Please {isLogIn ? 'Log In' : 'Register Now'} </h3>

                {!isLogIn &&
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleUserName} className="form-control" id="name" placeholder="Your Name" />
                        </div>
                    </div>
                }

                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>

                    </div>
                </div>
                <div className="row mb-3 text-danger">
                    <h5>{error}</h5>
                </div>
                <button type="submit" className="btn btn-secondary mb-4">{isLogIn ? 'Log In' : 'Register Now'}</button>
                <br />
                <button onClick={signInUsingGoogle} className="btn btn-secondary">Google Sign In</button>
            </form>
        </div>
    );
};

export default RegisterLogIn;