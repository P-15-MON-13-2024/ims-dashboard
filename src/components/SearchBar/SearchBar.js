import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => (
  <div className="SearchBar">
    <div className='SearchField'>
      <input className="SearchField SearchInput"  label="Search"></input>
    </div>
    <div className='SearchIcon'>
    <FontAwesomeIcon icon={faSearch}/>
    </div>
    
  </div>
);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
