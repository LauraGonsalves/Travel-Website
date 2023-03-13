import React, { useState } from 'react'
import "./home.css"
import video from "../../Assets/video.mp4"
import { GrLocation } from "react-icons/gr"
import { HiFilter } from "react-icons/hi"

const Home = (props) => {
  const [search,setSearch]=useState('')
  const[value,setValue]=useState(0)
 
function handleEvent(e){
  setSearch(e.target.value)
  props.gD(search)
}

  
  return (
    
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>


      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>
            Our packages
          </span>
          <h1 className='homeTitle'>
            search your holiday
          </h1>

        </div>


        <div className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>search your destination</label>


            <div className='input flex ' >
              <input type="text" placeholder='enter name here' onChange={handleEvent}></input>
              <GrLocation className="icon" />
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor='date'>select your date</label>
            <div className='input flex ' >
              <input type="date"></input>
            </div>
          </div>


          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>max price</label>
              <h3 className='total'>${value}</h3>

            </div>
            <div className='input flex ' >
              <input type="range" max="10000" min="1000" value={value} onChange={(e)=>setValue(e.target.valueAsNumber)}></input>
            </div>


          </div>


          <div className='searchOptions flex'>
            <HiFilter className="icon" / >
            <span>
              more filters
            </span>
          </div>
        </div>

         

      </div>

    </section>





  )
}

export default Home