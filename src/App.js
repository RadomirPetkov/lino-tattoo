import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home"
import { Navbar } from './components/Navbar/Navbar';
import { Gallery } from './components/Gallery/Gallery';
import { About } from './components/About/About';

function App() {
  return (
    <div id="wrapper">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
