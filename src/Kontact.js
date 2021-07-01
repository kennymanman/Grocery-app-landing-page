import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import papa from "./Imaged/papa.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import hpi from "./Imaged/hpi.jpg"
import {GrPhone} from "react-icons/gr"


export default function Kontact() {
  return (



<div>

<div style={{backgroundColor:"#009e60", height:721}}>


<Layout>
<ReactBootStrap.Row className="contactrow">

<ReactBootStrap.Col>
<h4 className="contactheader">
Contact<br/> Us
</h4>


<h6 className="contactsubtitle">
Email or visit us<br/>at our location,<br/>
we would love to hear from you.
</h6>

</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h4 className="lagos">Lagos, Nigeria</h4>
<p>92, Lanre Awolokun Gbagada Phase 2<br/>Lagos, Nigeria.</p>
<GrPhone className="finalfix"  />  <h7> Phone Number: +234 0000000098 </h7><br/>
<GrMail  className="finalfix"  /> <a  className="finalfix"  href='mailto:jack@semantic-ui.com'> Email Address: www.gardenapp@gmail.com</a>
</ReactBootStrap.Col>

</ReactBootStrap.Row>
</Layout>

</div>





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