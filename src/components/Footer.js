import React from 'react';
import Github from '../icons/github.svg';
import Instagram from '../icons/instagram.svg';
import Linkedin from '../icons/linkedin.svg';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <h1 className="content"><span className="thick">Contact</span></h1>
                    <p className="sub-content">Want a chat? Feel free to contact me.</p>
                    <p id="email">lukesterry@gmail.com</p>
                    <div id="icons">
                        <a href="https://github.com/lukes-code" target="_blank"><img className="icon" src={Github} alt="github" /></a>
                        <a href="https://instagram.com/lukes.code" target="_blank"><img className="icon" src={Instagram} alt="instagram" /></a>
                        <a href="https://uk.linkedin.com/in/luke-burton-sterry-50927417a" target="_blank"><img className="icon" src={Linkedin} alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;