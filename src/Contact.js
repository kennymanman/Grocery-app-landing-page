import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import {GrPhone} from "react-icons/gr"




export default function Contact() {




return (

<div className="contactdiv">

<Layout>

<h2 className="getintouchbigtitle">Get in touch</h2>



<ReactBootStrap.Row>

<ReactBootStrap.Col>
<h5>Follow us</h5>
<h2>Instagram</h2>
<h2>Twitter</h2>

</ReactBootStrap.Col>


<ReactBootStrap.Col>

<h6 className="lagosaddress">92, Lanre Awolokun Gbagada phase 2<br/> Lagos, Nigeria.</h6>


 < GrPhone className="phonelogo" /> <h7 className="textinfo">Phone number: +234 000000231</h7>   
 
 <p style={{paddingTop:30}}>© 2021 Garden store.</p>
</ReactBootStrap.Col>


<ReactBootStrap.Col>

<p>For general questions,<br/>email us at <a className="textinfo" href='mailto:gardenstoreapp@gmail.com'>info@gardenstore.help</a></p>

<p><h8 className="textinfo">How does a cat stop a video from playing?</h8><br/>
The paws button.</p>

</ReactBootStrap.Col>
</ReactBootStrap.Row>


</Layout>








    


 
        </div>
    )
}
