import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import {GrPhone} from "react-icons/gr"

import {Icon,InlineIcon} from "@iconify/react"
import mastercardIcon from "@iconify-icons/logos/mastercard"
import visaIcon from '@iconify-icons/logos/visa';
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import MobileStoreButton from 'react-mobile-store-button'



export default function Contact() {


    const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

    const androidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

    return (
        <div className="contactdiv">

<Layout>
<h2 className="aboutusbigtitle">Contact us</h2>

<hr style={{ borderColor:"white", backgroundColor:"white", height:3, marginTop:15}} /> 

<ReactBootStrap.Row>

<ReactBootStrap.Col>
<h5 className="contacttext">
Email or visit us at our location,
we would love to hear from you.
</h5>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h4 className="lagostext">Lagos, Nigeria</h4>
<h6 className="lagosaddress">92, Lanre Awolokun Gbagada phase 2<br/> Lagos, Nigeria.</h6>


 < GrPhone className="phonelogo" /> <h7 className="textinfo">Phone number: +234 000000231</h7>  <br/> 
 < GrMail className="phonelogo" /> <a className="textinfo" href='mailto:jack@semantic-ui.com'>Email: gardenstoreapp@gmail.com</a>
</ReactBootStrap.Col>


</ReactBootStrap.Row>


</Layout>








    <div style={{backgroundColor:"#2e8b57" , height:300, marginTop:200}}>
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

<ReactBootStrap.Col className="inforow">
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
