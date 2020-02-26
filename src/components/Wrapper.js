import React from 'react';
import Hacker from '../hacker.svg';
import { Spring } from 'react-spring/renderprops';

class Wrapper extends React.Component {
    render () {
        return (
            <header>
                <Spring
                    from={{ opacity: 0, left: -250 }}
                    to={{ opacity: 1, left: 35 }}
                    >
                        {props => (
                            <React.Fragment>
                                <div className="wrapper-left">
                                    <div style={props} className="welcome">
                                        <p><span id="emoji" role="img" aria-label="emoji">🤟🏻</span>Hello, my name</p>
                                        <p>is <b>Luke</b>!</p>
                                        <a href="#footer"><button className="btn">Contact</button></a>
                                    </div>
                                </div>
                                <div className="wrapper-right">
                                    <img className="wrapper-img" src={Hacker} alt="coder"/>
                                </div>
                            </React.Fragment>
                        )}
                </Spring>
            </header>
        );
    }
}

export default Wrapper;