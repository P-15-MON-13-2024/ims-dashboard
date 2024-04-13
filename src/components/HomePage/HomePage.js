import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LongListItem from '../LongListItem/LongListItem';
import './HomePage.css';
import '../SmallBlock/SmallBlock';
import SmallBlock from '../SmallBlock/SmallBlock';
import RecentActivityBlock from '../RecentActivityBlock/RecentActivityBlock';
import { format } from 'date-fns';

function HomePage(){
  const [issuedData, setIssuedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/dashboard/issued-items/');
        const jsonData = await response.json();
        setIssuedData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return(
  <div className="HomePage">
    {/* <div className='LeftPage'> */}
      {/* <div className='recentSearchArea'>
        <h2>Recent Searches</h2>
        <div className='recentSearches'>
        <SmallBlock/><SmallBlock/><SmallBlock/><SmallBlock/><SmallBlock/>
        </div>
      </div> */}
      <div className='IssuedItemsArea'>
        <h2>Issued Items</h2>
        {
          issuedData.map((item, index)=>(
            <LongListItem imageUrl={""} flag={new Date(item['expected_return'])> new Date(item['issue_time'])?`${Math.round((new Date(item['expected_return']) - new Date())/(1000 * 60 * 60 * 24))} days left`:'Overdue'} flagColor={new Date(item['expected_return'])> new Date()?"#83ce75":"#ff5555"} flagTextColor="#fff">
              <h3 style={{'marginTop':'0', 'marginBottom':'0'}}>{item['item_name']}</h3>
              {item['item_serial_id']}<br/>
              <p>
                Issued By: {item['user_name']}<br/>
                Issued On: {format(new Date(item['issue_time']),'MMMM dd, yyyy hh:mm a')}
              </p>
            </LongListItem> 
          ))
        }
      </div>
    {/* </div> */}
    {/* <div className='RightPage'>
      <RecentActivityBlock/>
    </div> */}
  </div>
)};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
