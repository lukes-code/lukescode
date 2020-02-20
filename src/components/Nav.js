import React from 'react';

class Nav extends React.Component {
    render() {
        return ( 
            <nav>
                <div id="brand"> lukescode</div>
                <a href="#footer"><button className="btn" id="nav-btn">Contact</button></a>
            </nav>
        );
    }
}

export default Nav;