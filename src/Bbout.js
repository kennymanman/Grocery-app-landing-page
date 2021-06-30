import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import pase from "./Imaged/pase.jpg"
import papa from "./Imaged/papa.png"
import { GrInstagram } from "react-icons/gr"
import { GrTwitter } from "react-icons/gr"
import { GrMail } from "react-icons/gr"
import fapa from "./Imaged/fapa.jpg"
import hpi from "./Imaged/hpi.jpg"



export default function Bbout() {
    return (


        <div>

< img  alt="loading"
  className="aboutbackground"
  fluid src={hpi}  />

<Layout>
<h2 className="aboutheader">About Garden<h7 className="dotdot">.</h7></h2>

<p className="abouttext">
Our startup was founded in 2020 during the Covid pandemic.<br/>
Garden was created as a way to help people living in areas that<br/> 
are a distance away from affordable groceries access them while<br/>
still creating awareness for the grocery sellers.
Garden connects<br/> respective grocery sellers, farm owners, food-vendors to customers<br/>
in their city.
We at Garden saw the need to create this infrastructure<br/>
to connect and solve this problem.
</p>


</Layout>

< img  alt="loading"
  className="nextbackground"
  fluid src={fapa}  />



  

  <Layout>
<ReactBootStrap.Row className="ceorow">
    <ReactBootStrap.Col>
<h2 className="founderheader">Meet Our Founder</h2>

<p className="name">Okafor Ekene</p>
<p className="ceo">C.E.O of Garden</p>
    </ReactBootStrap.Col>


<ReactBootStrap.Col>
< img alt="loading"
   className="ceoimage"
src={pase}  />

</ReactBootStrap.Col>


</ReactBootStrap.Row>
  </Layout>

  




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


