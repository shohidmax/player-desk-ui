 
 
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Headers from './Component/Pages/Headers';
import Null from './Component/Pages/Null';
import Notification from './Component/Pages/Notification';
import Profile from './Component/Profile/Profile';
import Settings from './Component/Profile/Settings'; 
import Requireauth from './Component/Authorization/Shaired/Requireauth';
import Login from './Component/Authorization/Login/Login';
import SignUp from './Component/Authorization/Signup/SignUp';
import Dashboard from './Component/Pages/Dashboard';
import Turnament from './Component/Pages/Turnament';

function App() { 
  return (
    <div className="App w-11/12 mx-auto">
 
    <Headers></Headers>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/Notification" element={<Notification />} /> 
        <Route path="/profile" element={<Requireauth><Profile /></Requireauth> } /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/login" element={<Login/> } /> 
        <Route path="/turnament" element={<Turnament/> } /> 
        <Route path="/signup" element={<SignUp/> } /> 
        <Route path="/null" element={<Null />} /> 





        {/* for dashboard */}

        <Route path="/dashboard" element={<Dashboard />}> 
          <Route index element={<Dashboard />}/>
          <Route path="/dashboard/addsr" element={ <Dashboard />}/>
          <Route path="/dashboard/qr" element={<Dashboard />} />
          <Route path="/dashboard/barcode" element={<Dashboard />} />
          <Route path="/dashboard/rpt" element={<Dashboard />} />
          <Route path="/dashboard/avatar" element={<Dashboard />} />
          <Route path="/dashboard/srlist" element={<Dashboard />} />
        </Route>
    </Routes>





          

    <Toaster position='top-right' reverseOrder={true} />
    </div>
  );
}

export default App;
