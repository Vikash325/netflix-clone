import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false)
    const transitionNavbar =()=>{
      console.log(window.pageYOffset)
      let postionY = window.pageYOffset
        if(postionY > 100){
        setShow(true)
        }else{
            setShow(false)
        }
    }
  
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
       return()=> window.removeEventListener("scroll",transitionNavbar);
    },[])
       

  return (
    <div className= {`nav ${ show && "nav__black" }`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
