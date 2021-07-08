import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"

export default function Form() {
    return (
        <div className="formdiv">

<Layout>

<ReactBootStrap.Row>
    <ReactBootStrap.Col>
    <h2 className="formtitle" >Be the first to<br/> know about our app<br/> and full accessibility<br/> launch.</h2>
</ReactBootStrap.Col>



<ReactBootStrap.Col className="formtop">




<div className="inputdiv">
<ReactBootStrap.Form name="notify" method="POST" data-netlify="true" >
<input type="hidden" name="form-name" value="notify"  />

<Layout>

<ReactBootStrap.Form.Group  controlId="formName">
<ReactBootStrap.Form.Label>Name</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control placeholder="First name" />
</ReactBootStrap.Form.Group>





<ReactBootStrap.Form.Group  controlId="formBasicEmail">
<ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control  type="email" placeholder="Enter email" />
<ReactBootStrap.Form.Text className="text-muted">
      We'll never share your email with anyone else.
</ReactBootStrap.Form.Text>
</ReactBootStrap.Form.Group>

  


<ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
<ReactBootStrap.Form.Label>What Feature Would You Like To See On Our App?</ReactBootStrap.Form.Label>
<ReactBootStrap.Form.Control as="textarea" rows={3} />



</ReactBootStrap.Form.Group>
<ReactBootStrap.Button variant="primary" type="submit">
    Submit
</ReactBootStrap.Button>
</Layout>
</ReactBootStrap.Form> 



</div>




{/*

<div className="inputdiv">
<form name="notify" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="notify" />
  <p>
    <label>First Name<input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>What Feature would You Love Our App To Have: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> 

</div>  */}


</ReactBootStrap.Col>


</ReactBootStrap.Row>


















{/*
<form name="notify" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="notify" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>What Feature would You Love Our App To Have: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> */}



 </Layout>    

        </div>
    )
}
