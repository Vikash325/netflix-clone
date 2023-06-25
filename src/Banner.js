import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://whatchareading.com/wp-content/uploads/2015/04/Netflix-Marvels-Daredevil-Banner.jpg")`,   
        objectFit:"contain"
    }}>
        <div className='banner__contents'>

        <h1 className='banner__title'>movie</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>my list</button>
        </div>
        <div className='banner__description'>
            my description
        </div>
        </div>
       <div className='banner--fadeBottom'/>
      
    </header>
  )
}

export default Banner
