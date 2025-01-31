 
 
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

function App() { 
  return (
    <div className="App">
 
    <Headers></Headers>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/Notification" element={<Notification />} /> 
        <Route path="/profile" element={<Requireauth><Profile /></Requireauth> } /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/login" element={<Login/> } /> 
        <Route path="/signup" element={<SignUp/> } /> 
        <Route path="/null" element={<Null />} /> 





        {/* for dashboard */}

        {/* <Route path="/dashboard" element={<Dashboard />}> 
          <Route index element={<DashboardProfile/>}></Route>
          <Route path="/dashboard/addsr" element={<Sales2></Sales2>}></Route>
          <Route path="/dashboard/qr" element={<Qr></Qr>} />
          <Route path="/dashboard/barcode" element={<BarCode></BarCode>} />
          <Route path="/dashboard/rpt" element={<Recept></Recept>} />
          <Route path="/dashboard/avatar" element={<Avatar></Avatar>} />
          <Route path="/dashboard/srlist" element={<Requireauth><Srlist></Srlist></Requireauth>} />
        </Route> */}
    </Routes>





          

    <Toaster position='top-right' reverseOrder={true} />
    </div>
  );
}

export default App;
