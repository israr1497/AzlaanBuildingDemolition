import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';

// components
import Header from "./common/Header";
import TopBar from "./common/Top-bar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./common/Footer";



 
const App = () => {
	return (
				<Router>
          <TopBar />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
          
          <Footer />
        </Router>
			
			
	);
};

export default App;