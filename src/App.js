
import './App.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact"
import About from "./About"
import Navigation from "./Navigation"
import Form from "./Form"


function App() {
  return (
   

    <div>

<Router>
      
   <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Form"   component={Form} />
      </Switch>
    </Router>

    </div>






  );
}

export default App;
