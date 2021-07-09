import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import paperone from "./Imaged/paperone.jpg"
import pase from "./Imaged/pase.jpg"
import {Icon} from "@iconify/react"
import mastercardIcon from "@iconify-icons/logos/mastercard"
import visaIcon from '@iconify-icons/logos/visa';
import paypalIcon from '@iconify-icons/logos/paypal';
import { FaRecycle } from "react-icons/fa";







export default function About() {
return (



<div className="topaboutpagediv">

<Layout>

<h2 className="abouttitle">
About Garden<h8 className="abouttitledot">.</h8>
</h2>
        
        
        
<ReactBootStrap.Row>

        
<ReactBootStrap.Col  sm={7}>
<h2 className="aboutsubtitle">
why we got <h8 className="gardenfixone">Garden</h8> started.
</h2>

        
<p className="aboutmessage">
Our startup was founded in 2020 during the Covid pandemic.
Garden was created as a way to help people living in areas that 
are a distant from affordable groceries access them while
still creating awareness for the grocery sellers.
Garden connects respective grocery sellers, farm owners, food-vendors to customers
in their city. We at Garden saw the need to create this infrastructure
to connect and solve this problem.
</p>

</ReactBootStrap.Col>    


               
<ReactBootStrap.Col>
        
<img
style={{textAlign:"center"}}
src={paperone}  
alt="loading" 
className="aboutfirstimage"
fluid
/>

</ReactBootStrap.Col>
</ReactBootStrap.Row> 



<h2 className="commentone">"OUR DAILY GROCERY PLUG"</h2>
<h2 className="commenttwo">"LOVE THE WAY GARDEN HELPS LOCAL GROCERY SELLERS"</h2>
</Layout>



<div className="bottomaboutpagediv">
<Layout>
<h3 className="founderhead">Meet our founder</h3>


<ReactBootStrap.Row>
<ReactBootStrap.Col>

<img
style={{textAlign:"center"}}
alt="loading"
src={pase}
className="ceopic"
fluid
/>

</ReactBootStrap.Col>

<ReactBootStrap.Col>
<p className="founderspeech">
Welcome to the Garden grocery store official page, we help create a platform for grocery
sellers to reach customers nearby while providing affordable prices and discounts for our customers.
Download the app today and start enjoying a healthy and cost-friendly lifestyle.
 </p>

<h4 className="foundername">Okafor Ekene .
<h8 className="ceotitle"> C.E.O of Garden</h8></h4>
</ReactBootStrap.Col>

</ReactBootStrap.Row>
</Layout>






<div className="grounddiv">
<Layout>

<ReactBootStrap.Row className="bottomrow">
<ReactBootStrap.Col>

<h3 className="bottomtext">Instagram</h3>
<h3 className="bottomtext">Twitter</h3>
<h3 ><a className="bottomtext" href='mailto:gardenstoreapp@gmail.com'>gardenstore@contact.com</a></h3>
<Icon block className="paymenticons" icon={mastercardIcon} />
<Icon className="paymenticonstwo" icon={visaIcon} />
<Icon className="paymenticonsthree" icon={paypalIcon} />
<p className="corporate">© 2021 Garden store. subsidiary of August.</p>
</ReactBootStrap.Col>



<ReactBootStrap.Col>
<h4 className="bottominfo">Garden is dedicated to keeping the earth clean & green. <FaRecycle/> </h4>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

</Layout>

</div>
</div>
</div>

)
}
