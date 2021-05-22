import React from 'react'
import tar from "./Imaged/tar.jpg"
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import pase from "./Imaged/pase.jpg"
import papa from "./Imaged/papa.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"




export default function About() {
    return (
    <div
    style={{ 
    backgroundImage: "url("+tar+ ")",
    backgroundSize: "cover",
    height: "212vh"}}
    >

    <Layout>

    <ReactBootStrap.Row>

      
    <ReactBootStrap.Col>
    <h1 style={{textAlign:"left",
                 color:"white",
                 paddingTop:110,
                 paddingLeft:0 }}>
                About Us</h1>

    </ReactBootStrap.Col>



    <ReactBootStrap.Col >
    <p style={{color:"white", paddingTop:170}}> 
    Our startup was founded in 2020 during the Co-vid pandemic.
    Garden was created as a way to help people living in areas that are a distance away
    from affordable groceries access them while still creating awareness for the grocery sellers.
    Garden connects respective grocery sellers, farm owners, food-vendors to customers in their city.
    We at Garden saw the need to create this infrastructure to connect and solve this problem.
    </p>
   </ReactBootStrap.Col>


    </ReactBootStrap.Row>



   <ReactBootStrap.Row>

      



<ReactBootStrap.Col >
 <p style={{color:"white",
            paddingTop:170}}>

The aim of Garden is creating a platform of awareness for various grocery sellers,
farm owners, food merchants in respective cities to connect to customers 
in the same city they reside in at affordable prices and rates.
Sign up today as a customer or groceries vendor and enjoy buying & selling of
groceries at affordable and beneficial rates at your convenience .Feel free to
contact us about any enquiry you may have regarding using our platform for buying or selling of groceries..
    </p>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
    <h1 style={{textAlign:"left",
                color:"white",
                paddingTop:123,
                paddingLeft:190 }}>
                Our Aim</h1>
</ReactBootStrap.Col>


</ReactBootStrap.Row>





<ReactBootStrap.Row>

      
<ReactBootStrap.Col md={6}>
<h1 style={{textAlign:"left",
            color:"white",
            paddingTop:110,
            paddingLeft:0 }}>
            Meet Our Founder
            </h1>

<p style={{color:"white",
           fontSize:19,
           marginTop:100, 
           paddingLeft:99}}>
            Okafor Ekene <br/>
        <p style={{fontSize:15}}>
            C.E.O of Garden</p>
        </p>

</ReactBootStrap.Col>



<ReactBootStrap.Col  >
<ReactBootStrap.Image style={{height:325,
                              marginTop:190,
                               width:350}}
                               src={pase} fluid />
      
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
