import React from 'react'
import { NavLink } from "react-router-dom"
import Marquee from "react-fast-marquee";

function Navbar() {
  return (
    <>
      <div className="container-fluid black_bg" id="navbar">
        <div className="row link_wrapper">
            <div className="col-3 navlinks"><NavLink to="/">HOME</NavLink></div>
            <div className="col-3 navlinks"><NavLink to="chart">CHART</NavLink></div>
            <div className="col-3 navlinks"><NavLink to="contact">CONTACT</NavLink></div>
            <div className="col-3 navlinks"><NavLink to="login">LOGIN</NavLink></div>
        </div>
        <div className="marquee_tag mt-5">
            <Marquee 
                style={{ color: 'rgb(255, 255, 255)' }}
                pauseOnHover={true}
                pauseOnClick={true}
                direction={'left'}
                speed={50}
            >
                <h1 className="m-0" style={{ fontSize:'14px', textAlign: 'center', }}>Welcome to satta website where all SATTA game
                    results are published real-time. satta is one fastest satta king result provider website Satta.game
                    </h1>
            </Marquee>
        </div>
    </div>  
    </>
  )
}

export default Navbar