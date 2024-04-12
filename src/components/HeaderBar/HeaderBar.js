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
      <SearchBar/>
      <div className = "profile">
        <div className='ProfileAvatar'></div>Admin
      </div>
    </div>
  </div>

  </>
  
  
);
}
HeaderBar.propTypes = {};

HeaderBar.defaultProps = {};

export default HeaderBar;
