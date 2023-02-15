
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchMovie) {
      navigate(`/search/${searchMovie}`);

      setSearchMovie('');
    }
  };

  return (
    <>
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        style={{border:"none"}}
        className='search-bar'
        placeholder='Search...'
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '8px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  
    </>
  );
};

export default SearchBar;