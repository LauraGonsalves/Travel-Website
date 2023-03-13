import React from 'react'
import "./main.css"
import {Data} from "../../data.js"

import { GoLocation } from "react-icons/go"
import { HiOutlineClipboardCheck } from "react-icons/hi"


const Main = (props) => {
  console.log(props.search)
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className='title'>
          most visited place
        </h3>
      </div>
      <div className='secContent grid'>
        {

          Data.filter((item)=>{
            return props.search === " "
            ? item 
            :item.destTitle.toLowerCase().includes(props.search);

          }).map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">

                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                  <h4 className='desTitle'>{destTitle}</h4>
                  <span className='contenent flex'>
                    <GoLocation className="icon" />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className="icon" /></button>

                </div>
              </div>)

          }
          )
        }
      </div>

    </section>
  )
}

export default Main