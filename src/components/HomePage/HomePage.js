import React from 'react';
import PropTypes from 'prop-types';
import LongListItem from '../LongListItem/LongListItem';
import './HomePage.css';
import '../SmallBlock/SmallBlock';
import SmallBlock from '../SmallBlock/SmallBlock';
import RecentActivityBlock from '../RecentActivityBlock/RecentActivityBlock';
const HomePage = () => (
  <div className="HomePage">
    <div className='LeftPage'>
      <div className='recentSearchArea'>
        <h2>Recent Searches</h2>
        <div className='recentSearches'>
        <SmallBlock/><SmallBlock/><SmallBlock/><SmallBlock/><SmallBlock/>
        </div>
      </div>
      <div className='IssuedItemsArea'>
        <h2>Issued Items</h2>
        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>        <LongListItem imageUrl={""}>
          <h3 style={{'margin-top':'0'}}>Header</h3>
          SomeText<br/>
          somemoretext
        </LongListItem>
      </div>
    </div>
    {/* <div className='RightPage'>
      <RecentActivityBlock/>
    </div> */}
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
