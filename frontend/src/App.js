import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import './index.css';
import Fixture from './pages/Fixture';


const App = () => {
    return (
        <Router>
            <Navbar />  {}
            <Routes>
                <Route path="/" element={<Fixture />} />
                <Route path="/index" element={<Index />} />
            </Routes>
        </Router>
    );
}

export default App;
