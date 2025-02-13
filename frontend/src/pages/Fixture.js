import React from 'react';
import './Fixture.css';

const Fixture = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="hexagon-container">
                <div className="hexagon center"></div>
                <div className="hexagon top"></div>
                <div className="hexagon bottom"></div>
                <div className="hexagon left"></div>
                <div className="hexagon right"></div>
                <div className="hexagon top-left"></div>
                <div className="hexagon top-right"></div>
            </div>
        </div>
    );
};

export default Fixture;
