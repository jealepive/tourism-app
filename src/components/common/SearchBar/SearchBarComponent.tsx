import { IconButton, InputBase } from '@mui/material'
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import './SearchBarComponent.css'

interface SearchBarProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

const SearchBarComponent: React.FC<SearchBarProps> = ({ value, onChange, onClick }) => {
  return (
    <div className='search-bar'>
      <InputBase value={value} onChange={onChange} inputProps={{ 'aria-label': 'search' }} />
      <IconButton aria-label='search' onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

export default SearchBarComponent
