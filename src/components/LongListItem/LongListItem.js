import React from 'react';
import PropTypes from 'prop-types';
import './LongListItem.css';

const LongListItem = ({imageUrl,flag, children}) => (
  <>
    {(flag)?<div className='Flag'>{flag}</div>:""}
      <div className="LongListItem">
    <div className='Image'>
      <img src={imageUrl} alt="" height="110px" width="110px"/>
    </div>
    <div className='Content'>
      {children}
    </div>
  </div>
  </>

);

LongListItem.propTypes = {};

LongListItem.defaultProps = {};

export default LongListItem;
