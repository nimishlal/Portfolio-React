import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/SignUp";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
