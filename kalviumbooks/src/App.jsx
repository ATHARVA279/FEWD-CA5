import React, { useState } from 'react';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

function App() {
  //Setting the state for the searched letters
  const [searchInput, setSearchInput] = useState('');
  //setting the value 
  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };

  return (
    <div>
      <Nav onSearchInputChange={handleSearchInputChange} />
      <Routes>
        <Route
          path='/'
          //passing the searched letter to the home component
          element={<Home searchInput={searchInput} />}
        />
        <Route path='/Form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
