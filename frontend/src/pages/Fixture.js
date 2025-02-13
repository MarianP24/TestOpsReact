import React from 'react';
import './FixtureHexagon.css';
import listFixtures from '../images/listFixtures.PNG';
import updateFixture from '../images/updateFixture.PNG';
import deleteFixture from '../images/deleteFixture.PNG';
import addFixtureToMachine from '../images/addFixturetoMachine.PNG';
import saveFixture from '../images/saveFixture.PNG';
import createMtReport from '../images/createMtReport.PNG';

const Fixture = () => {
    return (
        <div className="hexagon-container">
            <div className="hexagon hex1" style={{ backgroundImage: `url(${listFixtures})` }}>List Fixtures</div>
            <div className="hexagon hex2" style={{ backgroundImage: `url(${listFixtures})` }}>List Fixtures</div>
            <div className="hexagon hex3" style={{ backgroundImage: `url(${updateFixture})` }}>Update Fixture</div>
            <div className="hexagon hex4" style={{ backgroundImage: `url(${deleteFixture})` }}>Delete Fixture</div>
            <div className="hexagon hex5" style={{ backgroundImage: `url(${addFixtureToMachine})` }}>Add to Machine</div>
            <div className="hexagon hex6" style={{ backgroundImage: `url(${saveFixture})` }}>Save Fixture</div>
            <div className="hexagon hex7" style={{ backgroundImage: `url(${createMtReport})` }}>Create Report</div>
        </div>
    );
};

export default Fixture;
