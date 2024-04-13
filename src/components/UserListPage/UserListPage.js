import React from 'react';
import PropTypes from 'prop-types';
import './UserListPage.css';
import LongListItem from '../LongListItem/LongListItem';
import { useState, useEffect } from 'react';
import PopUpBlock from '../PopUpBlock/PopUpBlock';
import { format } from 'date-fns';

function UserListPage () { 
  const [userList, setUserList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activityItems, setActivityItems] = useState([]);

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

  const handleItemClick = async (sapien) => {
    setSelectedItem( sapien);
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/sapien-activities/${sapien.serial_id}/`);
      const result = await response.json();
      setActivityItems(result); // Set bucketItems directly to the fetched result
    } catch (error) {
      console.error('Error fetching bucket items:', error);
    }
  };
  
  
    const handleClosePopup = () => {
      setSelectedItem(null);
    };
  
  return(
  <div className="UserListPage">
    <h2 align='left'>User List</h2>
    {userList.map((sapien, index)=>(
        <div key={index} onClick={() => handleItemClick(sapien)}>
          <LongListItem imageUrl={''} flag={sapien['allowed']?'Allowed':'Not Allowed'} flagColor={sapien['allowed']?"#83ce75":"#ff5555"} flagTextColor="#fff">
            <h4 align='left' style={{'marginTop':'0', 'marginBottom':'0'}}>{sapien['name'].trim()}</h4>
            <p align='left'>
            Institute ID: {sapien['insti_id']}<br/>
            Serial ID: {sapien['serial_id']}
            </p>

          </LongListItem>
        </div>
      ))}
          {selectedItem && (
        <PopUpBlock visibility={true} onClose={handleClosePopup}>
        <div className='Headings'>
          <div className='flex-box'>
            <div className='ItemImage'>
              <img src={''} alt="" height="110px" width="110px"/>
            </div>
            <div className='text'>
                <h2 style={{'marginTop':'0', 'marginBottom':'0'}}>{selectedItem['name']}</h2>
                Insti ID: {selectedItem['insti_id']}<br/>
                Serial ID: {selectedItem['serial_id']}
            </div>
          </div>
        </div>
          
        <div className='HistoryItems'>
          <h3 style={{'marginTop':'0', 'marginBottom':'0'}}>History:</h3>
            {activityItems.length?activityItems.map((item) => (
                      //   <LongListItem imageUrl={''} flagColor={(item['total_count'] - item['issued_count'])?inventoryFlagColor:"#ff5555"} flagTextColor="#fff">
                      //   <div align='left'>
                      //   <h3 style={{'marginTop':'0', 'marginBottom':'0'}}>{item.name}</h3>
                      //     {item.serial_id}<br/>
                      //     Issued: {item['issued_count']}
                      //   </div>
                        
                      // </LongListItem>
                      <>
                      <div className='HistoryItem'>
                        <div style={{flex:1}}>
                          {item.item_name}<br/> ({item.item_serial_id})<br/>
                        </div>
                        <div style={{flex:2}}>
                        Issued On: {format(new Date(item.issue_time),'MMMM dd, yyyy hh:mm a')}<br/>
                        {item.is_returned?'':'Not'} Returned {item.is_returned?`on: ${format(new Date(item.return_time),'MMMM dd, yyyy hh:mm a')}`:'yet'} 

                        </div>

                      </div>                        <hr/>

                      </>

            )):'No Activity Found'}                      
        </div>
        

        </PopUpBlock>
      )}

  </div>
);}

UserListPage.propTypes = {};

UserListPage.defaultProps = {};

export default UserListPage;
