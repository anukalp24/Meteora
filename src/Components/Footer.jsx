import React from "react";
import { useContext , } from "react";
import { Data } from "../index";
import "./Footer.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
const Footer = () => {
  const { data  , Aqi } = useContext(Data);
const currenthour = new Date().getHours()

  const times = data?.weather?.hourly?.time?.slice(currenthour, currenthour + 24)
  const temps = data?.weather?.hourly?.temperature_2m?.slice(currenthour, currenthour + 24);
  
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "6px 10px",
          borderRadius: "6px",
          color: "white",
          fontSize: "14px",
        }}
      >
        {payload[0].value}°
      </div>
    );
  }
  return null;
};


  const chartData =  times?.map((time  ,index)=>({
    time: time.split("T")[1],
    temp: temps[index] 
  }))

  return (
    
    <>
    {data?.weather?.current?(
    <div id="footer-parent">
      <div id="chart-parent">
<div className="intro">
  <span> 24-Hours Forecast</span>
</div>



<div style={{overflowX: "auto"}} id="chart-box">
       

     
        <LineChart id="graph"  width={1400} height={200} margin={{ top: 50, bottom: 30  , left: 20, right: 20   }}  data={chartData}>
          <XAxis  padding={{ left: 30, right: 30 }}     tick={{ fill: "white", fontSize: 12 }} dataKey="time" />
         
<Tooltip content={<CustomTooltip />} />
         <Line
  type="monotone"
  dataKey="temp"
  stroke="orange"
  strokeWidth={3}
  dot={{ r: 4 }}
>
  <LabelList
    dataKey="temp"
    position="top"
    formatter={(value) => `${value}°`}
    style={{ fill: "white", fontSize: 12 }}
  />
</Line>
        </LineChart>
           {/* chart wrapper */}
    
   
            </div>
    </div>

  


<div className="more-info">
<>
  <div id="info-card" className="card">
  <span id="footer-humidity">Humidity: {data?.weather?.current?.relativehumidity_2m}%</span>
<span className="seperation"></span>
   <span id="footer-feels-like">Feels-like: {data?.weather?.current?.apparent_temperature}°C </span>
   <span className="seperation"></span>
   <span id="footer-uv">Uv-index: {data?.weather?.current?.uv_index}</span>
   
</div>
 <div className="aqi-box">
  <span id="aqi">Aqi: {Aqi?.current?.us_aqi}</span>
  <div className="seperation"></div>
  <span id="precipitation">Precipitation: {data?.weather?.current?.precipitation}</span>
  </div>
</>

</div>{/* more-info div */}
      </div>
) : (<p></p>) }
          </>
    );
};
export default Footer;
