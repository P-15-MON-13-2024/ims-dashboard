import React, { useState, useEffect } from 'react';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
import PopUpBlock from '../PopUpBlock/PopUpBlock';
import { format } from 'date-fns';

const inventoryFlagColor = "#CFB34F"

function InventoryViewPage() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedBucket, setSelectedBucket] = useState(null);
  const [bucketItems, setBucketItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemActivity, setItemActivity] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/dashboard/get-buckets/');
      const result = await response.json();
      setInventoryItems(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBucketClick = async (item) => {
    setSelectedBucket(item);
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/get-bucket-items/${item.id}/`);
      const result = await response.json();
      setBucketItems(result); // Set bucketItems directly to the fetched result
    } catch (error) {
      console.error('Error fetching bucket items:', error);
    }
  };
  

  const handleCloseBucketPopup = () => {
    setSelectedBucket(null);
    setBucketItems([]); // Reset bucketItems when closing the popup
  };

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/item-activities/${item.serial_id}/`);
      const result = await response.json();
      setItemActivity(result); // Set activitie directly to the fetched result

    } catch (error) {
      console.error('Error fetching item activities:', error);
    }
  };

  const handleCloseItemPopup = () => {
    setSelectedItem(null);
    setItemActivity([]); // Reset bucketItems when closing the popup
  };


  return (
    <div className="InventoryViewPage">
      <h2 align='left'>Inventory</h2>
      {inventoryItems.map((item, index) => (
        <div key={index} onClick={() => handleBucketClick(item)}>
          <LongListItem imageUrl={''} flag={`Available: ${item['total_count'] - item['issued_count']}`} flagColor={(item['total_count'] - item['issued_count'])?inventoryFlagColor:"#ff5555"} flagTextColor="#fff">
            <h4 align="left" style={{'marginTop':'0', 'marginBottom':'0'}}>{item['bucket_name']}</h4>
            <p align="left">
              Total Count: {item['total_count']}<br />
              Issued: {item['issued_count']}
            </p>
          </LongListItem>
        </div>
      ))}
      {selectedBucket && (
        <PopUpBlock visibility={true} onClose={handleCloseBucketPopup}>
          <div className='Headings'>
            <div className='flex-box'>
            <div className='ItemImage'>
            <img src={''} alt="" height="110px" width="110px"/>
          </div>
            <div>
              <h2 style={{'marginTop':'0', 'marginBottom':'0'}}>{selectedBucket['bucket_name']}</h2>
              Total Count: {selectedBucket['total_count']}
              <br/>Issued: {selectedBucket['issued_count']}
            </div>
            </div>

            <h3>Items:</h3>
          

          </div>
          <div className='scrolling-items'>
            {bucketItems.map((item,index) => (
                      <div key={index} onClick={() => handleItemClick(item)}>

                        <LongListItem imageUrl={''} flag={item['is_available']?"Available":"Unavailable"} flagColor={item['is_available']?"#83ce75":"#ff5555"} flagTextColor="#fff">
                        <div align='left'>
                        <h3 style={{'marginTop':'0', 'marginBottom':'0'}}>{item.name}</h3>
                          {item.serial_id}<br/>
                          
                        </div>
                        
                      </LongListItem>
                      </div>
            ))}</div>
        </PopUpBlock>
      )}
           {selectedItem && (
        <PopUpBlock visibility={true} onClose={handleCloseItemPopup}>
          <div className='Headings'>
            <div className='flex-box'>
            <div className='ItemImage'>
            <img src={''} alt="" height="110px" width="110px"/>
          </div>
            <div>
              <h2 style={{'marginTop':'0', 'marginBottom':'0'}}>{selectedItem['name']}</h2>
              Serial ID: {selectedItem['serial_id']}
              <br/>{selectedItem['is_available']?'':'Not'} Available
            </div>
            </div>

            <h3 style={{'marginBottom':'-10px'}}>History:</h3>
          

          </div>
          <div className='HistoryItems'>
            {itemActivity.map((item) => (
                      <>
                      <div className='HistoryItem'>
                        <div style={{flex:1}}>
                          {item.user_details.name}<br/> ({item.user_details.insti_id})<br/>
                        </div>
                        <div style={{flex:2}}>
                        Issued On: {format(new Date(item.issue_time),'MMMM dd, yyyy hh:mm a')}<br/>
                        {item.is_returned?'':'Not'} Returned {item.is_returned?`on: ${format(new Date(item.return_time),'MMMM dd, yyyy hh:mm a')}`:'yet'} 

                        </div>

                      </div>
                      <hr/>

                      </>
            ))}</div>
        </PopUpBlock>
      )}
    </div>
  );
}

export default InventoryViewPage;
