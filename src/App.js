import React, {Component} from 'react';
import Library from './Library';
import background from './background.jpg';
import './App.css';
import NavBar from './NavBar';
import Text from './Text';
import Song from './SongData';


const bgStyles = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    maxHeight: '100vh'

};

const App = () => (


    <div style={bgStyles}>


        <NavBar/>
        <div style={{display: 'flex'}}>
            <Text/>
            <Song/>

        </div>



    </div>

)
export default App;
