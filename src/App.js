import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import {Banner} from './Components/Banner';
import { Skills } from './Components/Skills';
import {Projects} from './Components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
