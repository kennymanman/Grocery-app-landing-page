
import './App.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact"
import About from "./About"
import Navigation from "./Navigation"

function App() {
  return (
   

    <div>

<Router>
      
   <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        
      </Switch>
    </Router>

    </div>






  );
}

export default App;
