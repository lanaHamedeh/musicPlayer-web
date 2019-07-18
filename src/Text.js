import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import hitIt from "./hitIt.png";
import nl2br from 'react-newline-to-break';


class Text extends Component {
    render() {
        let myString = "AMP\nTHOSE DBS"
        return (
            <div style={{display: "block"}}>

                <Typography style={{
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'BebasNeue Bold',
                    marginLeft: 70,
                    marginTop: 110,
                    fontSize: 70
                }}>  {nl2br(myString)}</Typography>

                <Typography style={{
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'BebasNeue Book',
                    marginLeft: 70,
                    fontSize: 25
                }}>AKE MUSIC ON THE GO</Typography>
                <img src={hitIt} alt="Kitten" width="13%" style={{marginLeft: 50}}/>
                <Typography style={{
                    textAlign: 'left',
                    fontFamily: 'BebasNeue Bold',
                    marginLeft: 70,
                    marginTop: 180,
                    fontSize: 50
                }}>Get producing with musicdb</Typography>
                <Typography style={{
                    textAlign: 'left',
                    fontFamily: 'BebasNeue Bold',
                    marginLeft: 70,
                    fontSize: 22,
                    marginTop: 50
                }}>pick your prefred instrument</Typography>
                <Typography style={{textAlign: 'left', fontFamily: 'BebasNeue Regular', marginLeft: 70, fontSize: 22}}>pick
                    the instuments you need to compose your piec</Typography>
                <Typography style={{
                    color: 'red',
                    textAlign: 'left',
                    fontFamily: 'BebasNeue Regular',
                    marginLeft: 70,
                    marginTop: 40,
                    fontSize: 17
                }}>start composing</Typography>
            </div>
        );
    }
}

export default Text;