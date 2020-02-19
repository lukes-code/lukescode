import React from 'react';

class Nav extends React.Component {
    render() {
        return ( 
            <nav>
                <div id="brand">lukescode</div>
                <button className="btn" id="nav-btn">Contact</button>
            </nav>
        );
    }
}

export default Nav;