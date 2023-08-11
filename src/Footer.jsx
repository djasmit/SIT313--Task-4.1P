import React from 'react';
import './Footer.css';

import {Icon} from 'semantic-ui-react';

const Footer = () => {
    return (
        <div class="footer">
            <div class="title">
                <div class="row">
                    <div class="col"><h3>For Dev</h3></div>
                    <div class="col"><h3>For Clients</h3></div>
                    <div class="col"><h3>Stay Connected</h3></div>
                </div>
            </div>
            <div class="content">
                <div class="row">
                    <div class="col"><h4>How it works</h4></div>
                    <div class="col"><h4>How it works</h4></div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"><h4>How to create a profile</h4></div>
                    <div class="col"><h4>How to post a job</h4></div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"><h4>Find jobs</h4></div>
                    <div class="col"><h4>Find dev</h4></div>
                    <div class="col"></div>
                </div>
            </div>
            <div class="center-text">
                <div class="row">
                    <div class="col"><h2>DEVLink</h2></div>
                </div>
                <div class="row">
                    <div class="col"><h4>Privacy Policy</h4></div>
                    <div class="col"><h4>Terms</h4></div>
                    <div class="col"><h4>Code of Conduct</h4></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;