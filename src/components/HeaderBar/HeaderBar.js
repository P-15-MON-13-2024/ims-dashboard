import React from 'react';
import './HeaderBar.css';
import SearchBar from '../SearchBar/SearchBar';
import SideBar from '../SideBar/SideBar';
function HeaderBar(){
  return(
  <>
  <div className='BlurLayer'></div>
  <div className="HeaderBar">
    <SideBar/>
    <div className='Content'>
      {/* <SearchBar/> */}
      <h2>Inventory Management System</h2>
      <div className = "profile">
        <div className='ProfileAvatar'></div>
      </div>
    </div>
  </div>

  </>
  
  
);
}
HeaderBar.propTypes = {};

HeaderBar.defaultProps = {};

export default HeaderBar;
