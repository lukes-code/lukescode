import React from 'react';
import Hacker from '../hacker.svg';

class Wrapper extends React.Component {
    render () {
        return (
            <header>
                <div className="wrapper-left">
                    <p>Hello, my name</p>
                    <p>is Luke!</p>
                    <button className="btn">Contact</button>
                </div>
                <div className="wrapper-right">
                    <img className="wrapper-img" src={Hacker} alt="coder"/>
                </div>
            </header>
        );
    }
}

export default Wrapper;