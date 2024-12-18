
import Login from "./components/Login";
import Cobrand from "./pages/Cobrand";
import Contentmaster from "./pages/Contentmaster";
import Dashboard from "./pages/Dashboard";
import Mydownloads from "./pages/Mydownloads";
import Myprofile from "./pages/Myprofile";
import Partnerprofile from "./pages/Partnerprofile";
import Setting from "./pages/Setting";

import Usermaster from "./pages/Usermaster";

import React  from "react";
import { Routes , Route  } from "react-router-dom";
function App () {
 
  return (
    
    <div className="App">
      
      <Routes>
     
        <Route path="/" element={<Dashboard />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/mydownloads" element={<Mydownloads />} />
        <Route path="/contentmaster" element={<Contentmaster />} />
        <Route path="/usermaster" element={<Usermaster />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/cobrand" element={<Cobrand />} />
        <Route path="/partnerprofile" element={<Partnerprofile />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
     
       
      {/*<Myprofile></Myprofile>
      <Mydownloads></Mydownloads>
      <Contentmaster></Contentmaster>
      <Usermaster></Usermaster>
      <Dashboard></Dashboard>*/}

    </div>
   
    
  );
};

export default App;
