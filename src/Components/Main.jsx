import React from "react";
import {  useContext } from "react";
import { Data } from "../index";
import "./Main.css";

const Main = ({img , text}) => {
  const { data , Aqi} = useContext(Data);

  return (
    <>
      
        {data?.weather?.current? (
          <>
          <div className="container-parent">

            <div className="upper-container">
              <div className="info-section">
                
                <span id="name">{data?.location?.name}</span>
                 <span id="temp">{data?.weather?.current?.temperature_2m}°C</span>
                
              
                 <span id="condition">{text}</span>
                 <span id="min-max">{data?.weather?.current?.temperature_2m_max}°C / {data?.weather?.current?.temperature_2m_min}°C</span>
      
              </div>
              {/* info section div */}
             
               <div className="img-section">
                  <p id="main-img">{img}</p>
                  
                </div>
        
              </div>  {/* img section div */}
          
            {/* upper container div */}
            <div className="card-section">

              <div  id="cards" className="card-1">
                <p id="temp-img">🌡️</p>
                <span id="humidity">{data?.weather?.current?.relativehumidity_2m}%</span>
                <span>Humidity</span>

      
              </div>
              <div  id="cards" className="card-2">
                <p>
                  <svg
                    id="wind"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path>
                  </svg>
                </p>
                <span id="wind-speed">{data?.weather?.current?.windspeed_10m}kph</span>
                <span>wind-speed</span>
              </div>

              <div  id="cards" className="card-3">
                <p>
                  <svg
                    id="feels-like"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
	c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
	s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
	c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
	S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
	c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
	C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
	s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
	c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
	c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
	c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
	 M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
	c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
	c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
	c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
	c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
	l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
	"
                    ></path>
                  </svg>
                </p>
                <span id="precipitation">{data?.weather?.current?.apparent_temperature}%</span>
                <span>Feels like</span>
              </div>

              <div id="cards" className="card-4">
                <p>
                <svg id="mask" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7059 11.0442C23.8975 10.9853 24.1025 10.9853 24.2941 11.0442L37.2941 15.0442C37.7137 15.1733 38 15.561 38 16V17H39C41.7614 17 44 19.2386 44 22V26C44 28.7614 41.7614 31 39 31H36.5436C35.4212 32.7244 33.7136 34.0575 31.6468 34.6934L24.2941 36.9558C24.1025 37.0147 23.8975 37.0147 23.7059 36.9558L16.3532 34.6934C14.2864 34.0575 12.5788 32.7244 11.4564 31H9C6.23858 31 4 28.7614 4 26V22C4 19.2386 6.23858 17 9 17H10V16C10 15.561 10.2863 15.1733 10.7059 15.0442L23.7059 11.0442ZM10 19H9C7.34315 19 6 20.3431 6 22V26C6 27.6569 7.34315 29 9 29H10.4823C10.1684 28.0814 10 27.1015 10 26.0914V19ZM38 26.0914V19H39C40.6569 19 42 20.3431 42 22V26C42 27.6569 40.6569 29 39 29H37.5177C37.8316 28.0814 38 27.1015 38 26.0914ZM12 16.7386V26.0914C12 29.1644 14.0043 31.8781 16.9414 32.7819L24 34.9537L31.0586 32.7819C33.9957 31.8781 36 29.1644 36 26.0914V16.7386L24 13.0463L12 16.7386ZM18 21V19H30V21H18ZM18 27H30V25H18V27Z" fill="#ffffff"></path> </g></svg>
                </p>
                <span>{Aqi?.current?.us_aqi}</span>
                <span>Aqi</span>
              </div>
            </div>
          </div>
          </>
        
        ) : (
          <>
            <div className="empty-state">
            <svg
              id="default-img"
              viewBox="0 0 120 120"
              width="120"
              height="120"
              className="weather-svg"
            >
              <circle
                cx="60"
                cy="60"
                r="36"
                fill="rgba(30,60,100,0.5)"
                stroke="rgba(100,150,200,0.3)"
                strokeWidth="1.5"
              />
              <ellipse
                cx="60"
                cy="60"
                rx="36"
                ry="18"
                fill="none"
                stroke="rgba(100,150,200,0.2)"
                strokeWidth="1"
              />
              <line
                x1="24"
                y1="60"
                x2="96"
                y2="60"
                stroke="rgba(100,150,200,0.2)"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="24"
                x2="60"
                y2="96"
                stroke="rgba(100,150,200,0.2)"
                strokeWidth="1"
              />
              
              <ellipse
                cx="60"
                cy="60"
                rx="18"
                ry="36"
                fill="none"
                stroke="rgba(100,150,200,0.2)"
                strokeWidth="1"
              />
              <circle
                cx="60"
                cy="60"
                r="36"
                fill="none"
                stroke="rgba(100,150,200,0.25)"
                strokeWidth="1.5"
                className="globe-spin"
              />
            </svg>
            <p id="empty">Search for a city to get started</p>
            </div>
    
          </>
        )}
 
    </>
  );
};

export default Main;
