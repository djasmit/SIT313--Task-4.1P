import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-sm bg-light">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">Devlink Marketplace</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Find DEV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Find Jobs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Create Acount</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <div class="banner">
                <img src="https://picsum.photos/id/237/1280/512"/>
            </div>
        </div>
    );
};

export default Header;