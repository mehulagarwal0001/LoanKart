
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Navbar from './components/navbar';

import Home from './components/home';
import Login from './components/login'

import Signup from './components/signup';
import Profile from './components/profile';

import { useEffect } from 'react';
import Generate from './components/generate';
import GenrateScore from './components/genratescore';
import Panel from './components/panel';
import Request from './components/request';
import ModifyLoan from './components/modifiedreq';
import PreviousCredit from './components/previouscredit';
import PreviousDebt from './components/previousdept';
import Modify from './components/modify';


function App() {
  useEffect(()=>{
    // console.log(localStorage.getItem('token'));
},[])


  return (
    <div className="App">
      
        <Router>
        <Navbar   />
       
        <Routes>
          <Route  path="/" element={<Home />} />
         { !localStorage.getItem('token') && <Route path="/login" element={<Login/>} />}
        { !localStorage.getItem('token') && <Route path="/signup" element={<Signup/>} />}
         
        { localStorage.getItem('token') && <Route path="/profile" element={<Profile />} />}

        {localStorage.getItem('token') &&  <Route path="/panel" element={<Panel />} /> }
        {localStorage.getItem('token') &&  <Route path="/genrate" element={<Generate />} />}
        {localStorage.getItem('token') &&   <Route path ='/genrate-score' element={<GenrateScore />} />}
        {localStorage.getItem('token') &&  <Route path ='/request' element={<Request />} />}
        {localStorage.getItem('token') && <Route path='/modifyloan' element={<ModifyLoan />} />}
        {localStorage.getItem('token') && <Route path='/previouscredit' element={< PreviousCredit />} />}
        {localStorage.getItem('token') && <Route path='/previousdebt' element={< PreviousDebt />} />}
          {
            !localStorage.getItem('auth-token') && <Route path="*" element={<Login />} />
          }
          <Route path="*" element={<Home />} />
        </Routes>
        
     </Router>
     
    </div>
  );
}

export default App;
