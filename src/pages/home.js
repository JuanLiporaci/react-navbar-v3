import React from 'react';
import SearchBar from "../components/Navbar/SearchBar";


const Home = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <SearchBar placeholder="Enter a citie..." />
      </div>
    </>
  );
};

export default Home;
