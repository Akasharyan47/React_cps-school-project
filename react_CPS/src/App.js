import React from 'react';
import Login from '../src/components/Login';
import About from "./About";
import Admission from "./Admission";
import Teacher from "./Teacher";
import Home from "./Home"; 
import Academics from "./Academics";
import StudentDetail from "./StudentDetails";
import StudentResult from "./StudentResult"
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";   
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
 

const App = () => { 
  const theme = { 
    fontSize:{
      headerfontSizeH:"1.8rem",
      headerfontSizeM:"1.4rem",
      headerfontSizeL:"1.2rem",
      headingfontSize:"2.3rem" 
    },
    colors:{ 
      heading: "rgb(24 24 29)",
      headerTextColor: "#262626d0",
      headerTextColorblack:"#202124",
      backgroundBlue: "#006599",
      backgroundYellow:"#FF9933",
      backgrountColorGray:"#f0f0f0e0", 

      footer_bg: "#0a1435",  
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      
      <GlobalStyle /> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Academics" element={<Academics />} />   
          <Route path="/Teacher"   element={<Teacher  name={'newest'} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/StudentDetails" element={<StudentDetail />} />
          <Route path="/StudentResult" element={<StudentResult />} />   
        </Routes>    
      </BrowserRouter> 
    </ThemeProvider> 
  )
}
export default App;
