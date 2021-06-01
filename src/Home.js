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
import phone from "./Imaged/papa.png"


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
  <ReactBootStrap.Row>
<ReactBootStrap.Col>

< img  alt="loading"
  className="phone"
  fluid src={phone}  />
</ReactBootStrap.Col>



  </ReactBootStrap.Row>
</Layout>


    </div>



    )

}

export default Home;