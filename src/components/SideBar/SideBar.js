import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { useState } from 'react';
import SideBarItem from '../SideBarItem/SideBarItem';
import { useLocation } from 'react-router-dom';

function SideBar(){
  const [sideBarStatus, setSideBarStatus] = useState(false)
  const location = useLocation();
  
  return (
    <div>
    <FontAwesomeIcon className='menu' icon={sideBarStatus?faX:faBars} onClick={()=>{setSideBarStatus(!sideBarStatus)}}/>
    <div className={`SideBar sidebar-${sideBarStatus?"on":"off"}`} >
      <SideBarItem isPage={location.pathname == '/'} href='/' onClick={()=>{setSideBarStatus(!sideBarStatus)}}>Home</SideBarItem>
      <SideBarItem isPage={location.pathname == '/inventory'} href='/inventory' onClick={()=>{setSideBarStatus(!sideBarStatus)}}>Inventory</SideBarItem>
      <SideBarItem isPage={location.pathname == '/user-list'} href='/user-list' onClick={()=>{setSideBarStatus(!sideBarStatus)}}>User List</SideBarItem>
      <SideBarItem >Recent Activity</SideBarItem>

    </div>
    </div>

  );
}

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
