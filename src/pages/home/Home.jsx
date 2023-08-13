import React from 'react'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import "./style.scss";

function Home() {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
    </div>
  )
}

export default Home