import React from 'react'
import NearbyRes from './nearbyRes';
import Categories from './categories';

var Home= ()=>{
  var desktopHome=<div className='container row desktop-home'>
                      <div className='col s3'><Categories/></div>
                      <div className='col s9'><NearbyRes /></div>
                  </div>
  var mobileHome=<div className='container  mobile-home'>
                    <div className=''><Categories/></div>
                    <div className=''><NearbyRes /></div>
                  </div>
    return (
      <div className="home">
          {desktopHome}
          {mobileHome}
      </div>
    );
  }
export default Home;