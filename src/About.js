import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import bop from "./Imaged/bop.jpg"
import paperone from "./Imaged/paperone.jpg"
import pase from "./Imaged/pase.jpg"
import {Icon,InlineIcon} from "@iconify/react"
import mastercardIcon from "@iconify-icons/logos/mastercard"
import visaIcon from '@iconify-icons/logos/visa';
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import MobileStoreButton from 'react-mobile-store-button'



export default function About() {



    const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

    const androidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';


return (

       
     
        
<div className="aboutpagediv">

  <Layout>
        
<h2 className="abouttitle">About Garden<h8 className="abouttitledot">.</h8></h2>

<hr style={{ borderColor:"black", backgroundColor:"white", height:3, marginTop:15}} /> 

<ReactBootStrap.Row>

<ReactBootStrap.Col  sm={7}>
<h2 className="aboutsubtitle">why we got <h8 className="gardenfixone">Garden</h8> started.</h2>

<h3 className="aboutmessage">
Our startup was founded in 2020 during the Covid pandemic.
Garden was created as a way to help people living in areas that 
are a distant from affordable groceries access them while
still creating awareness for the grocery sellers.
Garden connects respective grocery sellers, farm owners, food-vendors to customers
in their city. We at Garden saw the need to create this infrastructure
to connect and solve this problem.
</h3>
</ReactBootStrap.Col>    

       
<ReactBootStrap.Col>

        <img
         src={paperone}  
         alt="loading" 
         className="aboutfirstimage"
         fluid
         />
</ReactBootStrap.Col>   
</ReactBootStrap.Row> 
</Layout>


<hr style={{ borderColor:"white", backgroundColor:"white",  height:1, marginTop:121}} /> 


<h2 className="shoptext">Shop now with <h8 className="gardenfixtwo">Garden</h8><h9 className="gardenfixtwodot">.</h9></h2>

<p className="shopsubtext">Enjoy a wide and quality variety of groceries.</p>

<hr style={{ borderColor:"white", backgroundColor:"white", height:1, marginTop:50}} /> 

<div className="nextaboutdiv" >

<Layout>
<h3 className="founderhead">Meet our founder</h3>
<hr style={{ borderColor:"white", backgroundColor:"white", height:3, marginTop:15}} /> 
<ReactBootStrap.Row>

<ReactBootStrap.Col>

<img
alt="loading"
src={pase}
className="ceopic"
fluid
/>

</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h3 className="founderspeech">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>

<h4 className="foundername">Okafor Ekene .<h8 className="ceotitle"> C.E.O of Garden</h8></h4>
</ReactBootStrap.Col>




</ReactBootStrap.Row>
</Layout>

</div>









<div style={{backgroundColor:"#2e8b57" , height:300, marginTop:0}}>
<Layout>

<ReactBootStrap.Row className="bottomrow">

<ReactBootStrap.Col>

<h2 className="bottomheader">Garden.</h2>


<ReactBootStrap.Row>
< GrInstagram className="socialicons" />
< GrTwitter className="socialicons" />
 <GrMail className="socialicons" />
</ReactBootStrap.Row>



<Icon block className="paymenticons" icon={mastercardIcon} />
<Icon className="paymenticonstwo" icon={visaIcon} />






<p className="corporate">© 2021 Garden store. subsidiary of August.</p>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 className="bottomheader">info</h2>

<h5 className="bottomtext">Meet our founder</h5>
<h5 className="bottomtext">Contact us</h5>
    
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h3 className="gardenbottom">Garden. is dedicated to keeping the earth green & clean.</h3>

<div>
<MobileStoreButton
    
   width={145}
   height={54}

   store="ios"
   url={iOSUrl}
   linkProps={{ title: 'iOS Store Button' }}
                />


<MobileStoreButton 
   
    height={65}
    width={200}
    
    store="android"
    url={androidUrl}
    linkProps={{ title: 'android Store Button' }}
                />

</div>

</ReactBootStrap.Col>

</ReactBootStrap.Row>
</Layout>

</div>




</div>

    )
}
