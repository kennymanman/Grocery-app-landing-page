import React from 'react';
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import MobileStoreButton from 'react-mobile-store-button'
import {GiOrangeSlice} from "react-icons/gi";
import {FiTruck} from "react-icons/fi";
import {FiShoppingBag} from "react-icons/fi";
import {RiRecycleFill} from "react-icons/ri";
import {Icon,InlineIcon} from "@iconify/react"
import mastercardIcon from "@iconify-icons/logos/mastercard"
import visaIcon from '@iconify-icons/logos/visa';
import sill from "./Imaged/sill.jpg"
import bave from "./Imaged/bave.jpg"
import cop from "./Imaged/cop.jpg"







export default function Home() {

const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

const androidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';



return (

<div className="homepagediv">




<div className="bigsection">


<ReactBootStrap.Row>

<ReactBootStrap.Col>
<h2 className="biggardentext">Garden<h8 className="gardenbigdot">.</h8></h2>

<Layout>
<p className="smallgardentext">A new way to reach quality groceries around you.</p>

<div className="downloadrow">

<MobileStoreButton
    
    width={145}
    height={54}

   className="storeiconone"
   store="ios"
   url={iOSUrl}
   linkProps={{ title: 'iOS Store Button' }}
                />


<MobileStoreButton 
   
   className="storeicontwo"
    height={65}
    width={210}
    
    store="android"
    url={androidUrl}
    linkProps={{ title: 'android Store Button' }}
                />


<RiRecycleFill className="recycleicon" />
</div>

</Layout>

</ReactBootStrap.Col>

</ReactBootStrap.Row>
</div>


<hr style={{ borderColor:"white", backgroundColor:"white", height:2, marginTop:70}} />

<div style={{textAlign:"center"}}>

<img 
alt="loading"
src={cop}
className="invisibleimage"
/>
</div>

<h2 className="madeeasytext">Grocery shopping made easy.</h2>



<ReactBootStrap.Row className="largeiconrow">

<ReactBootStrap.Col className="largeiconcol">
<GiOrangeSlice className="largeicon" />
<h4 className="largeicontext">Quality Groceries</h4>
</ReactBootStrap.Col>


<ReactBootStrap.Col className="largeiconcol">
<FiTruck className="largeicon" />
<h4 className="largeicontext">Quick Delivery</h4>
</ReactBootStrap.Col>


<ReactBootStrap.Col className="largeiconcol">
<FiShoppingBag className="largeicon" />
<h4 className="largeicontext">Easy Shopping</h4>
</ReactBootStrap.Col>


</ReactBootStrap.Row>

<hr style={{ borderColor:"white", backgroundColor:"white", height:2, marginTop:70}} />

<h2 className="selltext">Just want to sell your groceries instead?</h2>
<p className="sellminor">Experience the best from reaching customers to making sales  selling with garden.</p>
<div style={{textAlign:"center"}}>
<ReactBootStrap.Button href="http://www.gardenstorevendor.com" target= "blank" size={"lg"} variant="success">Start selling</ReactBootStrap.Button>
</div>







<div style={{backgroundColor:"#2e8b57" , height:300, marginTop:100}}>
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



<ReactBootStrap.Col className="inforow" >
<h2 className="bottomheader">info</h2>

<h5 className="bottomtext">Meet our founder</h5>
<h5 className="bottomtext">Contact us</h5>
    
</ReactBootStrap.Col>


<ReactBootStrap.Col >
<h3 className="gardenbottom">Garden. is dedicated to keeping the earth green.</h3>

<div>
<MobileStoreButton
    
   width={120}
   height={54}

   store="ios"
   url={iOSUrl}
   linkProps={{ title: 'iOS Store Button' }}
                />


<MobileStoreButton 
   
    height={60}
    width={140}
    
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
