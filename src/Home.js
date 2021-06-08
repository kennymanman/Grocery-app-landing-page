import React from 'react';
import * as ReactBootStrap from "react-bootstrap"
import papa from "./Imaged/papa.png"
import Layout from "./Layout"
import woal from "./Imaged/woal.jpg"
import poal from "./Imaged/poal.jpg"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import MobileStoreButton from 'react-mobile-store-button'
import { FaAppStoreIos } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa"
import final from "./Imaged/final.jpg"



function Home() {
  


const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
    
const androidUrl =  'https://www.youtube.com/watch?v=oNu3fYMu28M';
    
return(
    
<div>

< img  alt="loading"
  className="homebackground"
  fluid src={poal}  />


<ReactBootStrap.Image
className="nextimg"
src={woal}
alt="loading"
fluid
/>




<ReactBootStrap.Row >

<ReactBootStrap.Col xs={14} md={10} >
<h2 className="largetext">
 Garden
 <h7 className="dot">
   .
   </h7></h2>

<Layout>

  <h5 className="subtitle">
  A New Way To Reach Quality Groceries Around You.
  </h5>
  <p className="info">
  Your favorite eco-friendly and affordable online grocery store app. We provide<br/>
  convenience and a wide variety of your favorite & freshest grocery items from<br/>
  various grocery vendors from all around your city delivered directly to your<br/>
  doorstep with the click of a button.
  </p>

<ReactBootStrap.Row className="pagerow">
  <FaAppStoreIos className="iconone" />
  <FaGooglePlay className="icontwo" />
</ReactBootStrap.Row>

</Layout>


</ReactBootStrap.Col>

<ReactBootStrap.Col xs={4} md={2} >
<h3 className="sidetitle">
  Garden
  <h8 className="dottwo">
  .
  </h8></h3>
</ReactBootStrap.Col>
</ReactBootStrap.Row>


<Layout>
  <ReactBootStrap.Row className="phonerow">

<ReactBootStrap.Col xs={8} md={6}>

< img  alt="loading"
  className="phone"
  fluid src={final}  />
</ReactBootStrap.Col>

<ReactBootStrap.Col xs={10} md={6}>
  <p className="phoneinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
</ReactBootStrap.Col>


  </ReactBootStrap.Row>
</Layout>
 



  <h3 className="quote">"Garden helped me with my grocery shopping during the Covid-19 pandemic"</h3>
  <h5 className="line">- Stella</h5>

  < img  alt="loading"
  className="groundimage"
  fluid src={papa}  />

<Layout>

<ReactBootStrap.Row className="groundrow ">

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
<a  className="groundtext" href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>
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

export default Home;