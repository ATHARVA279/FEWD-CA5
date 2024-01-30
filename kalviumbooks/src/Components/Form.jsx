import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './form.css';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [registrationComplete, setRegistrationComplete] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setRegistrationComplete(true);
    };

    return (
        <div className='main1'>
            {registrationComplete ? (
                <div className='mainBox'>
                    <p className='done'>Registration is complete. Thank you!</p>
                    <Link to="/">
                        <button className='regBtn doneBtn'>Go to Home Page</button>
                    </Link>
                </div>
            ) : (
                <div className='mainBox'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='formIn'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name should be at least 3 characters long',
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password should be at most 30 characters long',
                                    },
                                })}
                            />
                            <p className="error-message">{errors.name?.message}</p>
                        </div>
                        <div className='formIn'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Invalid email format, should be example@abc.com',
                                    },
                                })}
                            />
                            <p className="error-message">{errors.email?.message}</p>
                        </div>
                        <div className='formIn'>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Password should be at least 10 characters long',
                                    },
                                    pattern: {
                                        value: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,  
                                        message: 'Password should contain at least 1 special character',
                                    },
                                })}
                            />
                            <p className="error-message">{errors.password?.message}</p>
                        </div>

                        <div className='formIn'>
                            <label htmlFor="repeatPassword">Repeat Password:</label>
                            <input
                                type="password"
                                id="repeatPassword"
                                name="repeatPassword"
                                {...register('repeatPassword', {
                                    required: 'Repeat Password is required',
                                    validate: (value) =>
                                        value === getValues('password') || 'Passwords do not match',
                                })}
                            />
                            <p className="error-message">{errors.repeatPassword?.message}</p>
                        </div>
                        <p className="error-message last">{errors.general?.message}</p>
                        <button type="submit" className='regBtn sub'>Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Form;
