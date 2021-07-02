import React from 'react'
import icon from "./Imaged/icon.png"
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"






export default function Navigation() {
return (


<div>
<Layout>

<ReactBootStrap.Navbar variant="dark" className="navbar" expand="lg" fixed="top"
   >

<ReactBootStrap.Navbar.Brand className="navbrand">
  <img   
    alt=""
        src={icon}
    
    className="navimage"
  />
</ReactBootStrap.Navbar.Brand>



<LinkContainer to="/">
<ReactBootStrap.Nav.Link >
     <p className="gardenname">
        Garden
      <h8 className="gardendot">.</h8>
      </p></ReactBootStrap.Nav.Link>
</LinkContainer>

< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

<ReactBootStrap.Navbar.Collapse className="justify-content-end">


<LinkContainer to="/About">
<ReactBootStrap.Nav.Link >
   <p className="aboutus">About Us </p>
 </ReactBootStrap.Nav.Link>
</LinkContainer>


<LinkContainer  to="/Contact">
<ReactBootStrap.Nav.Link >
 <p className="contactus">Contact</p>
 </ReactBootStrap.Nav.Link>
</LinkContainer>


</ReactBootStrap.Navbar.Collapse>


</ReactBootStrap.Navbar>


</Layout>


        </div>
    )
}
