import React from 'react'
import icon from "./Imaged/icon.png"
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"






export default function Navigation() {
return (


<div>
<Layout>

<ReactBootStrap.Navbar expand="lg" fixed="top"
  style={{marginTop:0,
          backgroundColor:"#ffffff"}} >

<ReactBootStrap.Navbar.Brand style={{paddingLeft:20}}>
  <img
    alt=""
        src={icon}
    width="60"
    height="60"
    className="d-inline-block align-top"
  />
</ReactBootStrap.Navbar.Brand>



<LinkContainer to="/">
<ReactBootStrap.Nav.Link 
      style={{fontSize:30,
      textDecoration:"none"}}>
     <p style={{fontSize:29,
        color:"black"}}>
        Garden
      <h8 style={{color:"orange"}}>.</h8>
      </p></ReactBootStrap.Nav.Link>
</LinkContainer>

< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

<ReactBootStrap.Navbar.Collapse className="justify-content-end">


<LinkContainer to="/About">
<ReactBootStrap.Nav.Link style={{textDecoration:"none", color:"black"}}>
   <p style={{paddingTop:19, color:"black"}}>About Us </p>
 </ReactBootStrap.Nav.Link>
</LinkContainer>


<LinkContainer style={{marginLeft:90}} to="/Contact">
<ReactBootStrap.Nav.Link href="#home" style={{ textDecoration:"none"}}>
 <p style={{paddingTop:19, color:"black"}}>Contact</p>
 </ReactBootStrap.Nav.Link>
</LinkContainer>


</ReactBootStrap.Navbar.Collapse>


</ReactBootStrap.Navbar>


</Layout>


        </div>
    )
}
