import React from 'react';
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import {GiOrangeSlice} from "react-icons/gi";
import {FiTruck} from "react-icons/fi";
import {FiShoppingBag} from "react-icons/fi";
import {Icon} from "@iconify/react"
import mastercardIcon from "@iconify-icons/logos/mastercard"
import visaIcon from '@iconify-icons/logos/visa';
import paypalIcon from '@iconify-icons/logos/paypal';
import { FaRecycle } from "react-icons/fa";
import {LinkContainer} from 'react-router-bootstrap'
import app from "./Imaged/app.png"
import playstore from "./Imaged/playstore.png"







export default function Home() {


//const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

//const androidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';


return (

<div className="topdiv">


<Layout>
<h2 className="biggardentext">Garden<h8 className="gardenbigdot">.</h8></h2>
<h2 className="smallgardentext">A new way to reach<br/> quality groceries around<br/>you.</h2>
<h3 className="nextgardentext">Grocery shopping made easier.</h3>
</Layout>

<div className="followingdiv">


<Layout>
<h2 className="downloadtext">Download the app<br/> and get started.</h2>
{/*
<MobileStoreButton
    
    width={145}
    height={54}

   
   store="ios"
   url={iOSUrl}
   linkProps={{ title: 'iOS Store Button' }}
/> */}



<div style={{textAlign:"center"}}>

<LinkContainer to="/Form">
<img
alt="loading button"
src={app}
className="applebutton"
/>
</LinkContainer>



<LinkContainer to="/Form">
<img
alt="loading button"
src={playstore}
className="applebutton"
/>
</LinkContainer>


</div>





{/*
<MobileStoreButton 
   
   
    height={65}
    width={200}
    
    store="android"
    url={androidUrl}
    linkProps={{ title: 'android Store Button' }}
/> */}



<h2 className="easiertext">We Make<br/> Life Easier For<br/>Everyone.</h2>



<ReactBootStrap.Row className="featurerow">

<div className="hackone"> 
<ReactBootStrap.Col>
<div className="hackone"> 
<ReactBootStrap.Jumbotron fluid className="jumbotronone">
<h3 className="listedtitles">Quality products at the push of a button.</h3>
</ReactBootStrap.Jumbotron>
</div>
</ReactBootStrap.Col>
</div>


<ReactBootStrap.Col>
<div className="hackone"> 
<ReactBootStrap.Jumbotron className="jumbotrontwo">
<h3 className="listedtitles">Order groceries for your next meal.</h3>
</ReactBootStrap.Jumbotron>
</div>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<div className="hackone"> 
<ReactBootStrap.Jumbotron className="jumbotronthree">
<h3 className="listedtitles">We bring the market to your doorstep. </h3>
</ReactBootStrap.Jumbotron>
</div>
</ReactBootStrap.Col>



</ReactBootStrap.Row>


<h3 className="tastetext">
We Connect You To Local Grocery Sellers.
</h3>

</Layout>



<div className="lasthomediv">

<Layout>
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


<h2 className="selltext">Just want to sell your groceries instead?</h2>
<p className="sellminor">Experience the best from reaching customers to making sales  selling with garden.</p>


<div style={{textAlign:"center"}}>
<ReactBootStrap.Button href="http://www.gardenstorevendor.com" target= "blank" size={"md"} variant="success">
Start selling
</ReactBootStrap.Button>
</div>

</Layout>





<div className="grounddiv">
<Layout>
<ReactBootStrap.Row className="bottomrow">

<ReactBootStrap.Col>
<h3 className="bottomtext">Instagram</h3>
<h3 className="bottomtext">Twitter</h3>
<h3 ><a  className="bottomtext"href='mailto:gardenstoreapp@gmail.com'>gardenstore@contact.com</a></h3>
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
</div>



)
}
