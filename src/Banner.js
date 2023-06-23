import React from 'react'
import "./Banner.css"

export default function Banner() {
  return (
    <header className='Banner' style={{
        backgroundSize: "cover",
        backgroundImage : `url("https://whatchareading.com/wp-content/uploads/2015/04/Netflix-Marvels-Daredevil-Banner.jpg")`,
        objectFit:"content",
        backgroundPositon:"center center",
    }}>
      
    </header>
  )
}
