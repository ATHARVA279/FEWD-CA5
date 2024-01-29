import React, { useState } from 'react';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (inputValue) => {
    setSearchInput(inputValue);
  };

  return (
    <div>
      <Nav onSearchInputChange={handleSearchInputChange} />
      <Routes>
        <Route
          path='/'
          element={<Home searchInput={searchInput} />}
        />
        <Route path='/Form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
