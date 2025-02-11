import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importă componenta Navbar
import Index from './pages/Index';  // Exemplu de pagină

const App = () => {
    return (
        <Router>
            <Navbar />  {/* Afișează navbar-ul pe toate paginile */}
            <Routes>
                <Route path="/" element={<Index />} />  {/* Ruta pentru pagina principală */}
                <Route path="/index" element={<Index />} />  {/* Ruta pentru /index */}
            </Routes>
        </Router>
    );
}

export default App;
