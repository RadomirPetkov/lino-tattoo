import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from "./components/Home/Home"
import { Navbar } from './components/Navbar/Navbar';
import { Gallery } from './components/Gallery/Gallery';
import { About } from './components/About/About';
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
    <div id="wrapper">

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
    </div>
    </Wrapper>
  );
}

export default App;
