import React, { useState, useEffect } from 'react';
import './InventoryViewPage.css';
import LongListItem from '../LongListItem/LongListItem';
import PopUpBlock from '../PopUpBlock/PopUpBlock';

const inventoryFlagColor = "#CFB34F"

function InventoryViewPage() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bucketItems, setBucketItems] = useState([]);

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

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/get-bucket-items/${item.id}/`);
      const result = await response.json();
      setBucketItems(result); // Set bucketItems directly to the fetched result
    } catch (error) {
      console.error('Error fetching bucket items:', error);
    }
  };
  

  const handleClosePopup = () => {
    setSelectedItem(null);
    setBucketItems([]); // Reset bucketItems when closing the popup
  };

  return (
    <div className="InventoryViewPage">
      <h2 align='left'>Inventory</h2>
      {inventoryItems.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(item)}>
          <LongListItem imageUrl={''} flag={`Available: ${item['total_count'] - item['issued_count']}`} flagColor={(item['total_count'] - item['issued_count'])?inventoryFlagColor:"#ff5555"} flagTextColor="#fff">
            <h4 align="left" style={{'marginTop':'0', 'marginBottom':'0'}}>{item['bucket_name']}</h4>
            <p align="left">
              Total Count: {item['total_count']}<br />
              Issued: {item['issued_count']}
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
            <div>
              <h2 style={{'marginTop':'0', 'marginBottom':'0'}}>{selectedItem['bucket_name']}</h2>
              Total Count: {selectedItem['total_count']}
              <br/>Issued: {selectedItem['issued_count']}
            </div>
            </div>

            <h3>Items:</h3>
          

          </div>
          <div className='scrolling-items'>
            {bucketItems.map((item) => (
                        <LongListItem imageUrl={''} flagColor={(item['total_count'] - item['issued_count'])?inventoryFlagColor:"#ff5555"} flagTextColor="#fff">
                        <div align='left'>
                        <h3 style={{'marginTop':'0', 'marginBottom':'0'}}>{item.name}</h3>
                          {item.serial_id}<br/>
                          Issued: {item['issued_count']}
                        </div>
                        
                      </LongListItem>
            ))}</div>
        </PopUpBlock>
      )}
    </div>
  );
}

export default InventoryViewPage;
