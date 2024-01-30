import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './form.css'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        general: '',
    });

    const [registrationComplete, setRegistrationComplete] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        validateInput(name, value);
    };

    const validateInput = (name, value) => {
        if (value === '') {
            setValidationErrors({
                ...validationErrors,
                [name]: '',
            });
            return;
        }

        switch (name) {
            case 'name':
                if (value.length < 3) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Name should be at least 3 characters.',
                    });
                } else if (value.length > 30) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Name should be less than 30 characters.',
                    });
                } else {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: '',
                    });
                }
                break;
            case 'email':
                if (!/^\S+@\S+\.\S+$/.test(value)) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Invalid email format, should be eg - example@abc.com',
                    });
                } else {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: '',
                    });
                }
                break;
            case 'password':
                if (value.length < 10) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Password should be at least 10 characters.',
                    });
                } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Password should contain at least 1 special character.',
                    });
                } else {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: '',
                    });
                }
                break;
            case 'repeatPassword':
                if (value !== formData.password) {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: 'Passwords do not match.',
                    });
                } else {
                    setValidationErrors({
                        ...validationErrors,
                        [name]: '',
                    });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formData).some((value) => value === '')) {
            setValidationErrors({
                ...validationErrors,
                general: 'Please fill in all fields.',
            });
            return;
        }

        if (
            Object.values(validationErrors).every(
                (error) => error === '' || error === undefined
            )
        ) {
            setValidationErrors({
                ...validationErrors,
                general: '',
            });

            console.log('Form submitted:', formData);

            setRegistrationComplete(true);
        } else {
            console.log('Form has validation errors. Please correct them.');
        }
    };

    const handleRedirectToHomePage = () => {
        console.log('Redirecting to the home page...');
    };

    return (
        <div className='main1'>
            {registrationComplete ? (
                <div className='mainBox'>
                    <p className='done'>Registration is complete. Thank you!</p>
                    <Link to="/">
                        <button onClick={handleRedirectToHomePage} className='regBtn doneBtn'>Go to Home Page</button>
                    </Link>
                </div>
            ) : (
                <div className='mainBox'>
                    <form onSubmit={handleSubmit}>
                        <div className='formIn'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <p className="error-message">{validationErrors.name}</p>
                        </div>
                        <div className='formIn'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <p className="error-message">{validationErrors.email}</p>
                        </div>
                        <div className='formIn'>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <p className="error-message">{validationErrors.password}</p>
                        </div>
                        <div className='formIn'>
                            <label htmlFor="repeatPassword">Repeat Password:</label>
                            <input
                                type="password"
                                id="repeatPassword"
                                name="repeatPassword"
                                value={formData.repeatPassword}
                                onChange={handleChange}
                            />
                            <p className="error-message">{validationErrors.repeatPassword}</p>
                        </div>
                        <p className="error-message last">{validationErrors.general}</p>
                        <button type="submit" className='regBtn sub'>Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
