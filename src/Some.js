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


function Some() {



const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

const androidUrl =  'https://www.youtube.com/watch?v=oNu3fYMu28M';

return(



<div style ={{ 
    backgroundImage: "url("+poal+ ")",
    backgroundSize: "cover",
    height: "110vh",
}}>


<ReactBootStrap.Row>



<ReactBootStrap.Image  src={woal} style={{height:"98vh",  position:"relative"}} fluid/>



<h2 style={{position:"absolute",
            color:"black",
            fontSize:155,
            marginTop:89,
            marginLeft:65   }}>Garden<h7 style={{color:"orange"}}>.</h7></h2>



<h4 style={{position:"absolute",
           color:"black",
           fontSize:23 ,
           marginTop:400,
           paddingLeft:75}}>A New Way To Reach Quality Groceries Around You.</h4>




<p style={{position:"absolute",
           color:"black",
           fontsize:15,
           marginTop:459,
           paddingLeft:70}}>


Your favorite eco-friendly and affordable online grocery store app. We provide<br/>
convenience and a wide variety of your favorite & freshest grocery items from<br/>
various grocery vendors from all around your city delivered directly to your<br/>
doorstep with the click of a button.
</p>




<FaAppStoreIos style={{position:"absolute",
                       fontSize:50,
                        marginTop:630,
                         marginLeft:70}} />

<FaGooglePlay   style={{position:"absolute",
                        fontSize:40,
                         marginTop:635,
                          marginLeft:150}}/>

{/*
<MobileStoreButton
          
                  style={{position:"absolute", marginTop:636,height:200, width:200,  paddingLeft:70}}
                  store="ios"
                  url={iOSUrl}
                  linkProps={{ title: 'iOS Store Button' }}


/>
                  

<MobileStoreButton
                  style={{position:"absolute", marginTop:628, height:200, width:387, paddingLeft:250}}
                  store="android"
                  url={androidUrl}
                  linkProps={{ title: 'android Store Button' }}
                   
/>  */}           




<ReactBootStrap.Col >
<h3 style={{fontSize:35,
            position:"absolute",
            paddingTop:99,
            paddingLeft:620,
            color:"white"}}>Garden <h8 style={{color:"orange"}}>.</h8></h3> 
</ReactBootStrap.Col>



</ReactBootStrap.Row>



<ReactBootStrap.Image src={papa} style={{marginTop:82,
                                         borderRadius:0,
                                         position:"absolute" , 
                                         width:1530,
                                         height:329}} fluid />
   

<Layout>

<ReactBootStrap.Row>

<ReactBootStrap.Col style={{paddingTop:150,  paddingLeft:40}}>
   <h2 style={{position:"relative",  color:"white"}}>Garden.</h2>
   <GrInstagram style={{color:"white", fontSize:20}} />
   <GrTwitter  style={{color:"white", fontSize:20, marginLeft:18}}  />
   <GrMail     style={{color:"white", fontSize:20, marginLeft:18}} />
   <p style={{color:"white", paddingTop:100}}>© 2021 Garden <br/> Lagos, Nigeria</p>
</ReactBootStrap.Col>


<ReactBootStrap.Col style={{paddingTop:130}}>
    <h3 style={{color:"white"}}> About Us</h3>

  <a style={{color:"white"}} href="/About">Our aim</a>
    
    <br/>
    
    <a style={{color:"white"}} href="/About">Meet the founder</a>
    

</ReactBootStrap.Col>


<ReactBootStrap.Col style={{paddingTop:126}}>
<h3 style={{color:"white"}}> Contact Us</h3>
<p style={{color:"white"}}>Phone Number: +234 0000000098  

<br/>
<a style={{color:"white"}} href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>
<br/>
<p>Address: 92, Lanre Awolokun Gbagada phase 2<br/>Lagos, Nigeria.</p>
<br/>

</p>

</ReactBootStrap.Col>


   </ReactBootStrap.Row>

</Layout> 

</div>


);



}


export default Some;