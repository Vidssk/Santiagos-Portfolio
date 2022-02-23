import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import CodingChallanges from './Components/pages/CodingChallenges';
import About from './Components/pages/About';
import ProjectCards from './Components/pages/ProjectCards';
import ToonTanks from './Components/pages/Projects/ToonTanks';
import SimpleShooter from './Components/pages/Projects/SimpleShooter';
import Renegades from './Components/pages/Projects/Renegades';
import ArchitectureExplorer from './Components/pages/Projects/ArchitectureExplorer';
import BuildingEscape from './Components/pages/Projects/BuildingEscape';
import BullCow from './Components/pages/Projects/BullCow';
import PaintingPicker from './Components/pages/Projects/PaintingPicker';
import PathFindingVisualizer from './Components/pages/Projects/PathFindingVisualizer';

function App() {
  return (
  <>
  <Router>
    <div>

    <Navbar />
    <Switch>
      <Route path= '/home' exact component={Home}/>
      <Route path= '/' exact component={Home}/>
      <Route path= '/contact' component={Contact}/>
      {/*<Route path= '/codingchallenges' component={CodingChallanges}/>*/}
      <Route path= '/about' component={About}/>
      <Route path= '/projects-page' component={ProjectCards}/>
      <Route path= '/toontanks' component={ToonTanks}/>
      <Route path= '/simpleshooter' component={SimpleShooter}/>
      <Route path= '/renegades' component={Renegades}/>
      <Route path= '/architectureexplorer' component={ArchitectureExplorer}/>
      {/*<Route path= '/buildingescape' component={BuildingEscape}/>*/}
      <Route path= '/bullcowgame' component={BullCow}/>
      <Route path= '/paintingpicker' component={PaintingPicker}/>
      <Route path='/pathfindingvisualizer' component={PathFindingVisualizer}/>


    </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;
