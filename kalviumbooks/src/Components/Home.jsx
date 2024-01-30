import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import '../App.css';

function Home({ searchInput }) {
  //Setting the data 
  const [data, setData] = useState([]);
  //Getting the filtered Data
  const [filteredData, setFilteredData] = useState([]);

  //Getting the Data from the API
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //Geting the filtered books by the searched letter
  useEffect(() => {
    const filteredBooks = data.filter(book =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredData(filteredBooks);
  }, [data, searchInput]);

  return (
    <div className='main'>
      {/* Mapping the data of the books based on the searched letter */}
      {filteredData.map((ele, i) => (
        <div key={i} className='book'>
          <div className="image">
            <img src={ele.imageLinks.smallThumbnail} alt={ele.title} />
          </div>
          <div className="title">
            <h1>{ele.title}</h1>
          </div>
          <div className='stars'>
            <h3 className='rate'>☆ {ele.averageRating ? ele.averageRating : 'NA'}</h3>
            <h2 style={{ color: "green" }}>FREE</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
