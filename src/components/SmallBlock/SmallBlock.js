import React from 'react';
import PropTypes from 'prop-types';
import './SmallBlock.css';

function SmallBlock () {

  return(
  <div className="SmallBlock">
    <div className='cover'></div>
    <div className='body'>Item Name</div>
  </div>
  )
};

SmallBlock.propTypes = {};

SmallBlock.defaultProps = {};

export default SmallBlock;
