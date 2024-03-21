import React from 'react';
import PropTypes from 'prop-types';
import './SmallBlock.css';

function SmallBlock ({itemName="Item Name"}) {

  return(
  <div className="SmallBlock">
    <div className='cover'></div>
    <div className='body'>{itemName}</div>
  </div>
  )
};

SmallBlock.propTypes = {};

SmallBlock.defaultProps = {};

export default SmallBlock;
