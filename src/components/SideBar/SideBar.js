import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { useState } from 'react';
import SideBarItem from '../SideBarItem/SideBarItem';
function SideBar(){
  const [sideBarStatus, setSideBarStatus] = useState(false)

  return (
    <div>
    <FontAwesomeIcon className='menu' icon={sideBarStatus?faX:faBars} onClick={()=>{setSideBarStatus(!sideBarStatus)}}/>

    <div className={`SideBar sidebar-${sideBarStatus?"on":"off"}`}>
      <SideBarItem isPage={true} >Home</SideBarItem>
      <SideBarItem >Inventory</SideBarItem>
      <SideBarItem >User List</SideBarItem>
      <SideBarItem >Recent Activity</SideBarItem>

    </div>
    </div>

  );
}

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
