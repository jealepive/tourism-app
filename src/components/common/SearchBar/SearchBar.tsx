import { Box, IconButton, InputBase } from '@mui/material';
import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import './SearchBar.scss';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClick }) => {
  return (
    <Box className='search-bar'>
      <Box className='search-bar__container'>
        <InputBase value={value} onChange={onChange} inputProps={{ 'aria-label': 'search' }} />
        <IconButton aria-label='search' onClick={onClick}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
