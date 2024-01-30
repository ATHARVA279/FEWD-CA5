import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav({ onSearchInputChange }) {
  //Getting the letters and passing it into the function so that we get in the home page
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onSearchInputChange(inputValue);
  };

  return (
    <nav>
      <div>
        <Link to="/">
          <h1 className='logo'>Kalvium Books</h1>
        </Link>
      </div>

      <div className='input-box'>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search books..."
        />
      </div>
      <div className="register">
        <Link to="/Form">
          <button className='regBtn button-24' style={{fontSize:"30px"}}>Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
