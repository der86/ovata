// import { Route, Routes } from "react-router-dom";

import React from "react";
import './App.css';
import HomeComponent from "./Components/HomeComponent";
import NavbarComponent from "./Components/NavbarComponent";
import ServiceComponent from "./Components/ServiceComponent";
import ProjectsComponent from "./Components/ProjectsComponent";
import FooterComponent from "./Components/FooterComponent";
import ModulesComponent from "./Components/ModulesComponent";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./Components/LoginForm/LoginForm";
// import LoginPage from './components/LoginPage/LoginPage';


function App() {
  return (  
    <Router>
    <NavbarComponent />
{/* 
     <Routes>
      <Route path="/" element={<HomeComponent/>} />
      <Route path="/service" element={<ServiceComponent/>} />
      <Route path="/ProjectsComponent" element={<ProjectsComponent/>} />
    </Routes>
    <FooterComponent />
    </> */}
   

    
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/Modules" element={<ModulesComponent/>} />
        <Route path="/service" element={<ServiceComponent/>} />
        <Route path="/projects" element={<ProjectsComponent/>} />
        {/* <Route path="./Login" element={<LoginForm/>}/> */}
        <Route path="/login" element={<LoginForm />} />
     
      </Routes>

        {/* <ServiceComponent />
        <ProjectsComponent />
        <ModulesComponent /> */}
        <FooterComponent />
      </Router>




  );
}

export default App;

