import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav({ onSearchInputChange }) {
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
          <button className='regBtn button-24'>Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
