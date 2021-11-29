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
import Blogs from './Comphonents/Blogs/Blogs';
import About from './Comphonents/About/About';
import DetailsAirplane from './Comphonents/Details/DetailsAirplane';
import DetailsTourism from './Comphonents/Details/DetailsTourism';
import DetailsMedical from './Comphonents/Details/DetailsMedical';

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
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/airplane'>
            <DetailsAirplane></DetailsAirplane>
          </Route>
          <Route path='/tourism'>
            <DetailsTourism></DetailsTourism>
          </Route>
          <Route path='/medical'>
            <DetailsMedical></DetailsMedical>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
