import React from 'react';
import Default from '../default.jpg';
import Infiniscroats from '../portfolio/infiniscroats.jpg';
import Workify from '../portfolio/workify.jpg';
import Omdb from '../portfolio/omdb.jpg';
import Lukescode from '../portfolio/lukescode.jpg';
import Todo from '../portfolio/todo.jpg';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="portfolio-card">
                        <a href="https://github.com/lukes-code/WorkSafe-Spotify" target="_blank">
                            <img src={Workify} alt="portfolio-img" className="portfolio-image" />
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/lukes-code/infinitescroats" target="_blank">
                            <img src={Infiniscroats} alt="portfolio-img" className="portfolio-image" />
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/lukes-code/imdbApi" target="_blank">
                            <img src={Omdb} alt="portfolio-img" className="portfolio-image" />
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="#">
                            <img src={Lukescode} alt="portfolio-img" className="portfolio-image" />
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/lukes-code/ReactToDo101" target="_blank">
                            <img src={Todo} alt="portfolio-img" className="portfolio-image" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
    