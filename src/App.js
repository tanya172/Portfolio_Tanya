import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import {Banner} from './Components/Banner';
import { Skills } from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    </div>
  );
}

export default App;
