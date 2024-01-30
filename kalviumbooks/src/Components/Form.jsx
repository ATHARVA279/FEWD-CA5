//Importing dependencies from React and other libraries
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; //Importing the useForm hook for forms
import { Link } from 'react-router-dom'; //Importing the Link component for navigation
import './form.css'; //Importing the CSS file


const Form = () => {
    //Destructuring the functions and variables from the useForm hook
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    //Checking if the form is completed
    const [registrationComplete, setRegistrationComplete] = useState(false);

    const onSubmit = (data) => {
        console.log(data); //Logging the form data to the console 
        setRegistrationComplete(true); //Updating the registrationComplete state to true to indicate that the form is submitted successfully 
    };


    return (
        <div className='main1'>
            {registrationComplete ? (
                //Rendering the completed status box when the form is submitted
                <div className='mainBox'>
                    <p className='done'>Registration is complete. Thank you!</p>

                    {/* Button for taking us to the main home page */}
                    <Link to="/">
                        <button className='regBtn doneBtn'>Go to Home Page</button>
                    </Link>
                </div>
            ) : (
                <div className='mainBox'>
                    {/* Form element with onSubmit handler */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Input field for user's name */}
                        {/* Container for the "Name" input field */}
                        <div className='formIn'>
                            {/* Label for the "Name" input field */}
                            <label htmlFor="name">Name:</label>
                            {/* Input field for the user's name */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                {...register('name', {
                                    required: 'Name is required', //Validation- Name is a required field
                                    minLength: {
                                        value: 3,
                                        message: 'Name should be at least 3 characters long', //Validation- Minimum length of 3 characters
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password should be at most 30 characters long', //Validation- Maximum length of 30 characters
                                    },
                                })}
                            />
                            {/* Displaying an error message if there are validation errors for the "Name" field */}
                            <p className="error-message">{errors.name?.message}</p>
                        </div>


                        {/* Input field for user's email */}
                        {/* Container for the "Email" input field */}
                        <div className='formIn'>
                            {/* Label for the "Email" input field */}
                            <label htmlFor="email">Email:</label>
                            {/* Input field for the user's email */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                {...register('email', {
                                    required: 'Email is required', //Validation- Email is a required field
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/, //Validatio- Using a regular expression for basic email format
                                        message: 'Invalid email format, should be example@abc.com',
                                    },
                                })}
                            />
                            {/* Displaying an error message if there are validation errors for the "Email" field */}
                            <p className="error-message">{errors.email?.message}</p>
                        </div>


                        {/* Input field for user's password */}
                        {/* Container for the "Password" input field */}
                        <div className='formIn'>
                            {/* Label for the "Password" input field */}
                            <label htmlFor="password">Password:</label>
                            {/* Input field for the user's password */}
                            <input
                                type="password"
                                id="password"
                                name="password"
                                {...register('password', {
                                    required: 'Password is required', //Validation- Password is a required field
                                    minLength: {
                                        value: 10,
                                        message: 'Password should be at least 10 characters long', //Validation- Minimum length of 10 characters
                                    },
                                    pattern: {
                                        value: /^(?=.*[!@#$%^&*(),.?":{}|<>])/, //Validation- Using a regular expression to check for at least one special character
                                        message: 'Password should contain at least 1 special character',
                                    },
                                })}
                            />

                            {/* Displaying an error message if there are validation errors for the "Password" field */}
                            <p className="error-message">{errors.password?.message}</p>
                        </div>


                        {/* Input field for repeating user's password */}
                        {/* Container for the "Repeat Password" input field */}
                        <div className='formIn'>
                            {/* Label for the "Repeat Password" input field */}
                            <label htmlFor="repeatPassword">Repeat Password:</label>
                            {/* Input field for repeating the user's password */}
                            <input
                                type="password"
                                id="repeatPassword"
                                name="repeatPassword"
                                {...register('repeatPassword', {
                                    required: 'Repeat Password is required', //Validation- Repeat Password is a required field
                                    validate: (value) =>
                                        value === getValues('password') || 'Passwords do not match', //Validation- Checking if the repeated password matches the original password
                                })}
                            />
                            {/* Displaying an error message if there are validation errors for the "Repeat Password" field */}
                            <p className="error-message">{errors.repeatPassword?.message}</p>
                        </div>
                        {/* Submit button for the form */}
                        <button type="submit" className='regBtn sub'>Sign Up</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Form;
