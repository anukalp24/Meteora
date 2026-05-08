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
      
{/* <svg id="search" onClick={handleadd} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> */}
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
      </div>

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
  )
}

export default Header
