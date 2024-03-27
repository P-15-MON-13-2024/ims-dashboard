import React from 'react';
import PropTypes from 'prop-types';
import './UserListPage.css';
import LongListItem from '../LongListItem/LongListItem';
import { useState, useEffect } from 'react';

function UserListPage () { 
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/dashboard/get-sapiens/');
      const result = await response.json();
      setUserList(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  return(
  <div className="UserListPage">
    {
      userList.map((item, index)=>(
        <LongListItem imageUrl={''} flag={item['allowed']?'Allowed':'Not Allowed'}>
          <h4 align='left'>{item['name'].trim()}</h4>
          <p align='left'>
          Institute ID: {item['insti_id']}<br/>
          Serial ID: {item['serial_id']}
          </p>

        </LongListItem>
      ))
    }

  </div>
);}

UserListPage.propTypes = {};

UserListPage.defaultProps = {};

export default UserListPage;
