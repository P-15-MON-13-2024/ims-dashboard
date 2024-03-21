import React from 'react';
import PropTypes from 'prop-types';
import './SideBarItem.css';
import { Link } from 'react-router-dom';

const SideBarItem = ({isPage, href,children}) => (
  <Link className="SideBarItem" style={isPage?{'background':'#c1c1c1'}:{}}  to={href}>  
    <span className='ItemName'>
    {children}
    </span>
    <div className='highlight' style={isPage?{'display':'block'}:{'background':'none'}}>
    </div>
  </Link>

);

SideBarItem.propTypes = {};

SideBarItem.defaultProps = {};

export default SideBarItem;
