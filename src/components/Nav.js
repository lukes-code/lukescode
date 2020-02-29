import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return ( 
            <nav>
                <div id="brand"> 
                    <Link to="/index.html">
                        lukescode   
                    </Link>
                </div>
                <a href="#footer"><button className="btn" id="nav-btn">Contact</button></a>
            </nav>
        );
    }
}

export default Nav;