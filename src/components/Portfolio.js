import React from 'react';
import Default from '../default.jpg';
import Infiniscroats from '../portfolio/infiniscroats.jpg';
import Workify from '../portfolio/workify.jpg';
import Omdb from '../portfolio/omdb.jpg';
import Lukescode from '../portfolio/lukescode.jpg';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className="title">
                    <h2 className="content"><strong>Portfolio</strong></h2>
                    <p className="sub-content">Swipe to see more</p>
                </div>
                <div className="card">
                    <div className="portfolio-card">
                        <img src={Workify} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Infiniscroats} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Omdb} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Lukescode} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Portfolio;
    