import React from 'react';
import Hacker from '../hacker.svg';

class Wrapper extends React.Component {
    render () {
        return (
            <header>
                <div className="wrapper-left">
                    <div className="welcome">
                        <p><span id="emoji">🤟🏻</span>Hello, my name</p>
                        <p>is <span id="bold">Luke</span>!</p>
                        <button className="btn">Contact</button>
                    </div>
                </div>
                <div className="wrapper-right">
                    <img className="wrapper-img" src={Hacker} alt="coder"/>
                </div>
            </header>
        );
    }
}

export default Wrapper;