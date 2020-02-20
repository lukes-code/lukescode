import React from 'react';
import Default from '../default.jpg';

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
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                    <div className="portfolio-card">
                        <img src={Default} alt="portfolio-img" className="portfolio-image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
    