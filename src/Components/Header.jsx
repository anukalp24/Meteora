import React from 'react'
import { useContext , useState } from 'react';
import { Data } from '..';
import "./Header.css"
import { useNavigate } from 'react-router-dom';
const Header = ({handleChange , handleadd , error , loader , city , navigationLoader , navigationLoader2 , GetImg}) => {
  
  const {data} = useContext(Data);
const navigate = useNavigate()




  return (
    <div>
<div id="parent">
      
<div className="header">
        <div className="title-sec">
            <h1 id='title'>Meteora</h1>
  </div>    {/* title sec div */}

<div className="search-box">
        <input
          value={city}
          onChange={handleChange}
          id="input"
          type="text"
          placeholder="Search city..."
          />

<span id='search' onClick={handleadd}>🔍</span>
      </div>  {/* search box div */}

<div className="history-sec">
          <span className='history-icon' onClick={()=>navigate("/search")}>🕘</span>
          <span id='search-btn' onClick={()=>navigate("/search")} >🔍</span>
</div> {/* history sec div */}
        
       
      </div> {/* header div */}
      <div id="box">
            {error && (
              <div className="error-box">
                <div className="invalid-input">{error}</div>
              </div>
            )}

{loader &&(
  <div className="loader">
  <span id="loading">{loader}</span>
</div>
  )}

  {navigationLoader &&(
    <div className="navigation-loader-box">
      <span id='navigation-loader'>Detecting your location...</span>
    </div>
  )}
  {navigationLoader2 &&(
    <div className="navigation-loader-box">
      <span id='navigation-loader'>Requesting location access...</span>
    </div>
  )}

  </div>





      </div>

    </div>
  )
}

export default Header
