import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Comphonents/Home/Home';
import Header from './Comphonents/Header/Header';
import Projects from './Comphonents/Projects/Projects';
import Contact from './Comphonents/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
