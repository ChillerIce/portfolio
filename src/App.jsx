// App.js

import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "./App.css";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul className = "navBar">
                    <li>
                        <Link to="/home">■</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
};
export default App;