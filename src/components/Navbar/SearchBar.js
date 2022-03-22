/* eslint-disable eqeqeq */
import React, { useState,useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {

  const [searchText, setSearchText] = useState('');
//  const navigate = useNavigate();

//  seEffect(() => {
//       setSeaurchText(search || '');
//   }, [search]);

//   useEffect(() => {
//       setSearchText(search);
//   }, [search]);

   const handleSubmit =(e) =>{
      e.preventDefault();
      console.log()
   }
  
    return (
      <form className="search" onSubmit={handleSubmit}>
          <div className= 'searchInput'>
              <input placeholder='Enter a citie...'  type='text' 
                      value={searchText} onChange={(e) => setSearchText(e.target.value)}>
              </input>
              <button className='searchIcon' type='submit'>
                  <SearchIcon/>
              </button>
          </div>
      </form>
    );
    
}

export default SearchBar;
