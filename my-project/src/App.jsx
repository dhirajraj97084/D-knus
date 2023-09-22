import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './page/home/Home';
import About from './page/about/About';
import Signup from './page/signup/Signup';
import Login from './page/login/Login';
import Mystate from './context/data/Mystate';


function App() {
  return (
    <Mystate>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </Mystate>
  )
}

export default App
