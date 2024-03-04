import React from 'react';
import PropTypes from 'prop-types';
import './SideBarItem.css';

const SideBarItem = ({isPage,children}) => (
  <div className="SideBarItem" style={isPage?{'background':'#c1c1c1'}:{}}>
    <span className='ItemName'>
    {children}
    </span>
    <div className='highlight' style={isPage?{'display':'block'}:{'background':'none'}}>

    </div>
  </div>
);

SideBarItem.propTypes = {};

SideBarItem.defaultProps = {};

export default SideBarItem;
