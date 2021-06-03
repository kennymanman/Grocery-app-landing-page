import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import papa from "./Imaged/papa.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import fapa from "./Imaged/fapa.jpg"
import { AiFillPhone } from "react-icons/ai";



export default function Contact() {
return (

<div>
      
< img  alt="loading"
className="contactbackground"
fluid src={fapa}  />


<Layout>
<ReactBootStrap.Row>
<ReactBootStrap.Col >

<h2 className="contactheader">
Contact<br/> Us
</h2>

<p className="contactminor">
Feel free to contact or visit us.
 Beside are provided details for 
 contacting us, we would love to hear
 from you.
</p>
</ReactBootStrap.Col>


<ReactBootStrap.Col >
<GrMail className="mailink" />
<a className="endone" href='mailto:jack@semantic-ui.com'>
Gardenapp@gmail.com
</a>
<AiFillPhone className="phoneink"/>
<p className="endtwo">+234 0000000098</p>
</ReactBootStrap.Col>


</ReactBootStrap.Row>
</Layout>

< img  alt="loading"
  className="endimage"
  fluid src={papa}  />

<Layout>

<ReactBootStrap.Row className="endrow ">

<ReactBootStrap.Col>
<h2 className="groundtext">Garden.</h2>
<GrInstagram className="groundicon" />
<GrTwitter className="groundicon" />
 <GrMail className="groundicon" />
 <p className="footer">© 2021 Garden <br/> Lagos, Nigeria</p>

</ReactBootStrap.Col>



<ReactBootStrap.Col>
<h3  className="groundtext"> About Us</h3>
<a className="groundtext"  href="/About">Our aim</a> <br/>
<a className="groundtext"  href="/About">Meet the founder</a>
</ReactBootStrap.Col>

<ReactBootStrap.Col>

<h3 className="groundtext" > Contact Us</h3>
<p className="groundtext" >Phone Number: +234 0000000098  

<br/>
<a  className="groundtext" href='mailto:jack@semantic-ui.com'>
Email Address: www.gardenapp.com</a>
<br/>
<p className="groundtext">Address: 92, Lanre Awolokun Gbagada phase 2<br/>Lagos, Nigeria.</p>
<br/>
</p>


</ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>


</div>

)

}