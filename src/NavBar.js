import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logo.png'
import profile from './profile.png'
import {Typography} from "@material-ui/core";

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="white" title={<img src="https://unsplash.it/40/40"/>}>
                    <Toolbar rtitle="TITLE">
                        <img src={logo} alt="Kitten" width="10%"/>

                        <img src={profile} alt="Kitten" width="5%" style={{marginLeft: '1100px'}}/>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;