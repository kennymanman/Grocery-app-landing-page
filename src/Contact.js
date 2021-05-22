import React from 'react'
import parma from "./Imaged/parma.jpg"
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import sac from "./Imaged/sac.jpg"
import papa from "./Imaged/papa.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"



export default function Contact() {
return (

<div
style={{ 
    backgroundImage: "url("+parma+ ")",
    backgroundSize: "cover",
    height: "120vh"}}
    >



<Layout>

<h1 style={{paddingTop:120,
            color:"white",
            fontSize:55,
             paddingBottom:80}}>
            Contact</h1>



<ReactBootStrap.Row>



<ReactBootStrap.Col xs={6} md={0}>
<h5 style={{color:"white",
            fontSize:35}}>
            Contact Us</h5>

<h7 style={{color:"white", 
           fontSize:20}}>
Feel free to contact or visit us. Below are provided details for contacting us,
 we would love to hear from you.
</h7>


<p style={{color:"white",
            marginTop:30}}>
            Phone Number: +234 0000000098
  </p>


<a style={{color:"white"}} href='mailto:jack@semantic-ui.com'>Email Address: www.gardenapp.com</a>

<p style={{color:"white", marginTop:30}}  >Address: 92, Lanre Awolokun Gbagada phase 2<br/>Lagos, Nigeria.</p>

</ReactBootStrap.Col>




<ReactBootStrap.Col xs={6} md={0}>
<ReactBootStrap.Image style={{height:400,
                               width:600}} src={sac} fluid />

</ReactBootStrap.Col>

</ReactBootStrap.Row>

</Layout> 


<ReactBootStrap.Image src={papa} style={{marginTop:50,
                                         borderRadius:0,
                                         position:"absolute" ,
                                          width:1530,
                                          height:330}} fluid />
   

<Layout>
<ReactBootStrap.Row>
   
<ReactBootStrap.Col style={{paddingTop:150,
                           paddingLeft:40}}>

<h2 style={{position:"relative",
            color:"white"}}>Garden.</h2>

 <GrInstagram style={{color:"white",
                     fontSize:20}} />

 <GrTwitter   style={{color:"white",
                     fontSize:20,
                      marginLeft:18}}  />

 <GrMail     style={{color:"white",
                     fontSize:20,
                     marginLeft:18}} />


<p style={{color:"white",
           paddingTop:100}}>© 2021 Garden <br/> Lagos, Nigeria</p>
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
    )
}
