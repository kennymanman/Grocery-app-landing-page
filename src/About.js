import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import hop from "./Imaged/hop.jpg"
import dofi from "./Imaged/dofi.jpg"
import pase from "./Imaged/pase.jpg"

export default function About() {
    return (

       
     
        
    <div className="aboutpagediv">

  <Layout>
        
        <h2 className="abouttitle">About Garden<h8 className="abouttitledot">.</h8></h2>

        <hr style={{ borderColor:"black", backgroundColor:"black", height:3, marginTop:15}} /> 

        <ReactBootStrap.Row>

     



        <ReactBootStrap.Col>
<h2>why we got Garden started.</h2>

        <h3 className="aboutmessage">
       Our startup was founded in 2020 during the Covid pandemic.
Garden was created as a way to help people living in areas that 
are a distant from affordable groceries access them while
still creating awareness for the grocery sellers.
Garden connects respective grocery sellers, farm owners, food-vendors to customers
in their city.
We at Garden saw the need to create this infrastructure
to connect and solve this problem.


      </h3>
        </ReactBootStrap.Col>    

       



        <ReactBootStrap.Col>

        <ReactBootStrap.Image
         src={hop}  
         alt="loading" 
         className="aboutfirstimage"
         fluid
         />
</ReactBootStrap.Col>   
            
            
        </ReactBootStrap.Row> 
  
   
   </Layout>
   <hr style={{ borderColor:"black", backgroundColor:"black", height:1, marginTop:40}} /> 


<div className="nextaboutdiv" >

<ReactBootStrap.Row>

<Layout>
<ReactBootStrap.Col>
<img
alt="loading"
src={pase}
className="ceopic"
fluid
/>

</ReactBootStrap.Col>


<ReactBootStrap.Col>


    
</ReactBootStrap.Col>

</Layout>

</ReactBootStrap.Row>

</div>







</div>

    )
}
