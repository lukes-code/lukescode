import React from 'react';
import { workDays, getYears } from '../helpers'

class Bio extends React.Component{

    render () {

        const WorkingDays = workDays();
        const Years = getYears();

        return (
            <React.Fragment>
                <div className="bio-title">
                    <h2 className="bio-content"><strong>Who am I?</strong></h2>
                    <div className="bio-sub-content">
                        <p>I am Luke, a {Years} year old junior developer from the South Wales Valleys!</p>
                        <p>I started playing about with code in my late teens through studying in my free time, using free resources for HTML and CSS at codecademy. I worked as an IT Technician for two years and gained a level 3 NVQ in IT & Communications, but found myself spending late nights trying to learn more about frontend web development. I started to freelance on sites such as freelancer as well as making websites for friends and family.</p>
                        <p>I landed my first developer role {WorkingDays} days ago, when I joined Next Venture Technologies, here I get to gain professional experience and take on challenges everyday working to provide software solutions for the insurance sector.</p>
                        <p>Despite being employed I am constantly learning and building things in my free time, I wake up early and go to sleep late most nights trying to learn the latest technologies.</p>
                        <p>These technologies so far include:</p>
                        <p className="tech-name">JAVASCRIPT - REACT - CSS - SASS - HTML - PHP - MYSQL - GIT - GITHUB - SVN - FIREBASE - ADOBE XD - ADOBE PSD</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Bio;