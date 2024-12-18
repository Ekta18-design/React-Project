import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Usermaster from './pages/Usermaster';
import Contentmaster from './pages/Contentmaster';
import SideBar from './components/SideBar';
import Setting from './pages/Setting';
const App =() => {
  return (
 <BrowserRouter>
 <SideBar>
 <Routes>
  <Route path="/" element={<Dashboard/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/usermaster" element={<Usermaster/>}></Route>
  <Route path="/contentmaster" element={<Contentmaster/>}></Route>
  <Route path="/setting" element={<Setting/>}></Route>
 </Routes>
 </SideBar>
 </BrowserRouter>
  )
    
}

export default App;
