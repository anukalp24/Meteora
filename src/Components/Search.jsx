import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Search.css"
import { useState , useContext} from 'react'


import { Data } from '..'
const Search = ({history , sethistory , error}) => {

  const {weatherdata , data , GetImg} = useContext(Data)
  const [city, setcity] = useState("")
  const [error2, seterror2] = useState("")
  const [loader, setloader] = useState(false)
  const navigate = useNavigate()

  const handlechange = (e)=>{
    seterror2("")
    setcity(e.target.value)
  }

  const handleadd =  async ()=>{
    if(city.trim() === ""){
      seterror2("Please enter a city name!");
      return
    }
    setloader(true)
 let result = await weatherdata(city)
 sethistory([...history , result])
      setcity("")
      setloader(false)
      await navigate("/")
    
  }




  const handleDelete = (deleteindex)=>{
    const newitem = history.filter((value , index)=>(
    index !== deleteindex
    ))

    sethistory(newitem)
  }
  return (
    <div id='parent-2'>
      <div className="content-box">
        <svg  onClick={()=> navigate("/")} id='return-svg' width="64px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#696464"></path> </g></svg>
      </div>
     <span id='intro-2'>Manage your history</span>
      <div id='box-2'>
     <div  id='search-box-2'>
      <input placeholder='search city...' value={city} onChange={handlechange} id='input-2' type="text" />
<span id='search-2' onClick={handleadd}>🔍</span>
      </div>


      {error2 && (
        <div className="error-box-2">
                <div className="invalid-input">{error2}</div>
    
              </div>
            )}
     </div>

{error &&(
   <div className="error-box-2">
                <div className="invalid-input">{error}</div>

              </div>
)}

            {loader &&(
              <div className="loader-state">
                    <div className="loader">{loader} </div>
                  </div>
                  )}

{history &&(
  <>
  

    <div className="container-parent-2">
  {history?.map((value , index)=>{
    let [icon , text , gradient] = GetImg(value?.weather?.current?.weathercode)
    return(
      <div style={{background: gradient}} key={index} className="container">
      <div className="sec-1">
        <div className="sec-1-child">

<span id='name-2'>{value?.location.name}</span>
<span id='icon-2'>{icon}</span>
        </div>
<div className="temp">
<span id='max'>{value?.weather.current.temperature_2m_max}°C/{value?.weather.current.temperature_2m_min}°C</span>

      </div>


</div>
      <div className="sec-2">
        <span id='temp-2'>{value?.weather.current.temperature_2m}°C</span>
        <svg
                      id="delete-btn"
                      onClick={() => handleDelete(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>

      </div>
    </div>
    )
  })}
     </div>



  </>
)}
    </div>

  )
}
export default Search
