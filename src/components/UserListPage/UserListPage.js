import React from 'react';
import PropTypes from 'prop-types';
import './UserListPage.css';
import LongListItem from '../LongListItem/LongListItem';
import { useState, useEffect } from 'react';
import PopUpBlock from '../PopUpBlock/PopUpBlock';
function UserListPage () { 
  const [userList, setUserList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/dashboard/get-sapiens/');
      const result = await response.json();
      setUserList(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleItemClick = (sapien) => {
    setSelectedItem((prevSelectedItem) => {
      // If the clicked item is already selected, deselect it
      if (prevSelectedItem && prevSelectedItem['insti_id'] === sapien['insti_id']) {
        return null;
      }
      // Otherwise, select the clicked item
      return sapien;
    });
  };
  
  
    const handleClosePopup = () => {
      setSelectedItem(null);
    };
  
  return(
  <div className="UserListPage">
    {userList.map((sapien, index)=>(
        <div key={index} onClick={() => handleItemClick(sapien)}>
          <LongListItem imageUrl={''} flag={sapien['allowed']?'Allowed':'Not Allowed'} flagColor={sapien['allowed']?"#83ce75":"#ff5555"} flagTextColor="#fff">
            <h4 align='left'>{sapien['name'].trim()}</h4>
            <p align='left'>
            Institute ID: {sapien['insti_id']}<br/>
            Serial ID: {sapien['serial_id']}
            </p>

          </LongListItem>
        </div>
      ))}
          {selectedItem && (
        <PopUpBlock visibility={true} onClose={handleClosePopup}>
          {/* Content to show in the popup */}
          <h2>{selectedItem['name']}</h2>
          <p>Insti ID: {selectedItem['insti_id']}</p>
          <p>Serial ID: {selectedItem['serial_id']}</p>
          <p>{selectedItem['allowed']?'Allowed':'Not Allowed'}</p>
        </PopUpBlock>
      )}

  </div>
);}

UserListPage.propTypes = {};

UserListPage.defaultProps = {};

export default UserListPage;
