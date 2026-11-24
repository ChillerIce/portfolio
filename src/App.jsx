// App.js

import React from "react";
import { HashRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Work from "./pages/Work"
import Error from "./pages/Error";
import homeImage from "./assets/home.svg"
import "./App.css";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul className = "navBar">
                    <li>
                        <Link to="/home"><img src={homeImage} width={25}/></Link>
                    </li>
                    
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
};
export default App;