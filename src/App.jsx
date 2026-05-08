import { useState , useEffect } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Forecast from './Components/Forecast'
import Footer from './Components/Footer'
import Search from './Components/Search'
import { Data } from './index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  // localStorage.clear()
  const [error, seterror] = useState("");
  const [city, setcity] = useState("");
  const [loader, setloader] = useState(false)
  const [navigationLoader, setnavigationLoader] = useState(false)
  const [navigationLoader2, setnavigationLoader2] = useState(false)
  
 const [history, sethistory] = useState(()=>{
    let saved = localStorage.getItem("history")
    if(saved){
      return JSON.parse(saved)
    }

    else{
      return []
    }
  })

 useEffect(() => {
    localStorage.setItem("history" , JSON.stringify(history))
    }, [history])





  const [Aqi, setAqi] = useState(()=>{
  let saved = localStorage.getItem("aqi")
  if(saved){
    return JSON.parse(saved)
  }
    else{
      return null
    }
})

 const [data, setdata] = useState(()=>{
  let saved = localStorage.getItem("data")
  if(saved){
    return JSON.parse(saved)
  }

  else{
    return null
  }
 })


 useEffect(() => {
   localStorage.setItem("data" , JSON.stringify(data))
  }, [data])
  

useEffect(() => {
localStorage.setItem("aqi" ,JSON.stringify(Aqi) )
}, [Aqi])

 
useEffect(() => {
  
  const lastcity = localStorage.getItem("city")
  if(lastcity){
    weatherdata(lastcity)
  }
  else{
    getuserlocation()
  }
},[])
  

  



const getuserlocation = ()=>{
  setnavigationLoader2(true)
  navigator.geolocation.getCurrentPosition(
    async(position) =>{
      try{
        setnavigationLoader2(false)
        setnavigationLoader(true)
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        await weatherdatabycoords(lat , lon)
      }

      catch(error){
      seterror("unable to fetch weather data")
      }

      finally{
        setnavigationLoader(false)
      }

    },
    (error)=>{
      console.log(error)
      if(error.code === 1){
            setnavigationLoader2(false)
        seterror("Location permission denied")
      }
    }

  )
}


async function weatherdatabycoords(lat , lon) {
  const LiveApi =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
`&current=temperature_2m,weathercode,apparent_temperature,uv_index,windspeed_10m,relativehumidity_2m,precipitation,temperature_2m_max,temperature_2m_min` +
`&hourly=temperature_2m,weathercode,windspeed_10m,precipitation,precipitation_probability` +
`&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,precipitation_probability_max` +
`&forecast_days=5&timezone=auto`) 
  const res = await LiveApi.json()
  aqifunc(lat , lon)
  setdata({
    location: {name: "your location"},
    weather: res
  })
}

  async function aqifunc(lat,lon) {
    let airApi = await fetch(
  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi`
)
let airData = await airApi.json()
setAqi(airData)
}







  async function weatherdata(city) {
    try {
      let api = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      
      let result = await api.json();

      if (!result.results || result.results.length === 0) {
        seterror("Location not found. Try again!");
        return;
      } 
        
      let lat = result.results[0].latitude
      let lon = result.results[0].longitude
aqifunc(lat,lon)
seterror("");
      localStorage.setItem("city" , city)

let secondapi =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
`&current=temperature_2m,weathercode,apparent_temperature,uv_index,windspeed_10m,relativehumidity_2m,precipitation,temperature_2m_max,temperature_2m_min` +
`&hourly=temperature_2m,weathercode,windspeed_10m,precipitation,precipitation_probability` +
`&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,precipitation_probability_max` +
`&forecast_days=5&timezone=auto`)
let secondresult = await secondapi.json()

const final = {
  location: result.results[0],
  weather: secondresult
}

setdata(final)


return final;

    } catch (error) {
      seterror("Unable to fetch data. check ur internet connection!");
      setloader("")
    }
  }// function over


  
  const handleChange = (e) => {
    localStorage.removeItem("city")
    setdata(null);
    seterror("");
    let city = e.target.value;
    setcity(city);
    
  };

 async function handleadd() {
   if (city === "") {
     seterror("Please enter a city name!");
     return;
    } 
    
    else {
      setloader(true)
     let result = await weatherdata(city);
     sethistory([... history , result])
      setloader(false)
      setcity("");
    }
  }


 function Getforecastimg(code){
   if (code === 0) return ["☀️", "Clear sky"];

  if ([1, 2].includes(code)) return ["🌤️", " Partly cloudy"];

  if (code === 3) return ["☁️", "Overcast"];

  if ([45, 48].includes(code)) return ["🌫️", "Fog"];

  if ([51, 52, 53].includes(code)) return ["🌦️", "Drizzle"];

  if ([54, 55].includes(code)) return ["🌦️", "Dense drizzle"];

  if ([56, 57].includes(code)) return ["🌧️", "Freezing drizzle"];

  if ([61, 63].includes(code)) return ["🌧️", "Rain"  , ""];

  if (code === 65) return ["🌧️", "Heavy rain"];

  if ([66, 67].includes(code)) return ["🌧️", "Freezing rain"];

  if ([71, 73].includes(code)) return ["❄️", "Snowfall"];

  if (code === 75) return ["❄️", "Heavy snowfall"];

  if (code === 77) return ["🌨️", "Snow grains"];

  if ([80, 81].includes(code)) return ["🌧️", "Rain showers"];

  if (code === 82) return ["🌧️", "Violent rain showers"];

  if ([85].includes(code)) return ["❄️", "Snow showers"];

  if ([86].includes(code)) return ["❄️", "Heavy snow showers"];

  if (code === 95) return ["⛈️", "Thunderstorm"];

  if ([96].includes(code)) return ["⛈️", "Thunderstorm with hail"];

  if ([99].includes(code)) return ["⛈️", "Heavy thunderstorm with hail"];
  }


 function GetImg(code){
     if (code === 0) return ["☀️", "Clear sky" , "linear-gradient(180deg, #1955aa 0%, #35527a 100%)" ];

  if ([1, 2].includes(code)) return ["🌤️",  "Partly cloudy" , "linear-gradient(180deg, #4f7dbf 0%, #7d8da1 50%, #6a717e 100%)"];

  if (code === 3) return ["☁️", "Overcast" , "linear-gradient(180deg, #71777a 0%, #2c3e50 100%)"];

  if ([45, 48].includes(code)) return ["🌫️", "Fog" , "linear-gradient(180deg, #40484e 0%, #283e51 100%)"];

  if ([51, 52, 53].includes(code)) return ["🌦️", "Drizzle", "linear-gradient(180deg, #4b5c66 0%, #6c7a89 100%)"];

  if ([54, 55].includes(code)) return ["🌦️", "Dense drizzle" , "linear-gradient(180deg, #38464f 0%, #55646d 100%)"];

  if ([56, 57].includes(code)) return ["🌧️", "Freezing drizzle" ,"linear-gradient(180deg, #2f3e46 0%, #6b7f8d 100%)" ];

  if ([61, 63].includes(code)) return ["🌧️", "Rain" ,"linear-gradient(180deg, #3a4a52 0%, #5a6b73 100%)" ];

  if (code === 65) return ["🌧️", "Heavy rain" , "linear-gradient(180deg, #232526 0%, #414345 100%)"];

  if ([66, 67].includes(code)) return ["🌧️", "Freezing rain" ,"linear-gradient(180deg, #40484e 0%, #283e51 100%)" ];

  if ([71, 73].includes(code)) return ["❄️", "Snowfall" ,  "linear-gradient(180deg, #9facb9 0%, #747e83 100%)"];

  if (code === 75) return ["❄️", "Heavy snowfall" , "linear-gradient(180deg, #8c9aa6 0%, #5f6b72 100%)"];

  if (code === 77) return ["🌨️", "Snow grains" ,  "linear-gradient(180deg, #b7c3cd 0%, #8d979c 100%)"];

  if ([80, 81].includes(code)) return ["🌧️", "Rain showers" ,"linear-gradient(180deg, #4a5a63 0%, #6b7c85 100%)" ];

  if (code === 82) return ["🌧️", "Violent rain showers" ,"linear-gradient(180deg, #1c1f21 0%, #2f3438 100%)" ];

  if ([85].includes(code)) return ["❄️", "Snow showers" , "linear-gradient(180deg, #aab7c2 0%, #7a858c 100%)"];

  if ([86].includes(code)) return ["❄️", "Heavy snow showers"  , "linear-gradient(180deg, #7e8c97 0%, #4f5a61 100%)"];

  if (code === 95) return ["⛈️", "Thunderstorm" , "linear-gradient(180deg, #2c2f38 0%, #1a1d24 100%)"];

  if ([96].includes(code)) return ["⛈️", "Thunderstorm with hail" , "linear-gradient(180deg, #2a3142 0%, #161b26 100%)"];

  if ([99].includes(code)) return ["⛈️", "Heavy thunderstorm with hail"  ,"linear-gradient(180deg, #1a1c22 0%, #0f1116 100%)" ];
  }

  let img
  let text
  let gradient=  data?.weather?.current?.weathercode 
data?.weather?.current &&(
  [img , text , gradient]  = GetImg(gradient)
) 


  
  return (
        <div style={{background: gradient}} className="wrapper">
          
  <div className="stars">
    {Array.from({ length: 8 }).map((_, i) => (
      <span key={i}></span>
    ))}
  </div>
    <>
<BrowserRouter>
    <Data.Provider value={{data , setdata ,Getforecastimg , aqifunc , Aqi , weatherdata ,  GetImg }}>



<Routes>

<Route path='/' element={
  <>
  <Header navigationLoader2={navigationLoader2} handleadd={handleadd} city={city} error = {error} seterror={seterror} loader = {loader} handleChange={handleChange} navigationLoader={navigationLoader} GetImg={GetImg}/>
  <div className="parent">
    <Main img={img} text={text}/>
      <Forecast/>
    </div> 
      <Footer/>
</>
    }/>
    <Route path='/search' element={<Search history={history} sethistory={sethistory} error={error}/>}/>
    </Routes>



    
    </Data.Provider>
</BrowserRouter>
    </>
</div>
  )
}

export default App