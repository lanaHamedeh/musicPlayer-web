import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import Library from './Library'
import gql from "graphql-tag";
import {Query} from "react-apollo";



const accent = red[900];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height: 500,
        width: 500,
        color: theme.palette.text.secondary,

    },
}));


class SongData extends Component {
    constructor(){
        super();
        this.getData=this.getData.bind(this);
        this.state = {
            button_status: false
        };
    }

    getData ()  {
        this.setState({button_status:!this.state.button_status})
    };

    render() {
        return (
            <div>
                <Query query={gql`
        {
             allSongs{
                title
             
                 album{
                   title
                 }
                 artist
                 {
                   name
                 }
           } 
           
        }
    `}
                >
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading ...</p>;
                        if (error) return <p>Error :(</p>;
                        console.log(data)
                        return (
                            <Grid >
                                <Paper style={{
                                    "height": 400,
                                    "width": 400,
                                    background:'#000',
                                }}>
                                    <Button  style={{ marginLeft :150 ,background:'#C11B17',color:'white'}} onClick={this.getData}> Get Songs </Button>


                                    {data.allSongs.map((song) => {

                                        if(this.state.button_status === true){
                                            return(
                                        <div key={song.id}>
                                        <p style={{color: 'white', fontFamily: 'BebasNeue Bold'}}>{song.artist.name}</p>
                                        <p style= {{
                                        color: 'white',
                                        fontFamily: 'BebasNeue Book'}}>
                                            {`${song.album.title} by ${song.artist.name}`}</p>

                                        </div>)
                                    }
                                    })}
                                </Paper>
                            </Grid>);

                    }}

                </Query>


            </div>
        );
    }
}

export default SongData;