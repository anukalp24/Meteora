import React from 'react'
import { Data } from "../index"
import { useContext } from 'react'
import "./Forecast.css"
const Forecast = () => {
  const {data   ,Getforecastimg} = useContext(Data)


return(
<>
{data?.weather?.current &&(
  <div className="forecast-parent">

  <div className="forecast-container">
    <div className="heading">
      5 days forecast
    </div>

  {data?.weather?.daily?.time.map((day, index) => {
    const code = data?.weather?.daily.weathercode[index];
    let [icon , text] = Getforecastimg(code)
    const dayName = new Date(day).toLocaleDateString("en-US", {
  weekday: "short"
});
    return (
      
    <div key={index} className="box">
      
   
      <div id='forecast-info'>
        <div className="section-1">
        <span id='day'>{dayName}</span>
        <span id='icon'>{icon}</span>
        <span id='text'>{text}</span>
        </div>  {/* section 1 div */}
       <div className="section-2">
        <span id='daily-temp'>{data.weather.daily.temperature_2m_max[index]}°/{data.weather.daily.temperature_2m_min[index]}° </span>
        
       </div>
    
      </div>
      
      </div>
      
    );
  })}

  </div>
    </div>
 
  )}
  </>
)}
  
 
export default Forecast
