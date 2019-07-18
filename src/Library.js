import React from 'react'
import {Query} from "react-apollo";
import gql from 'graphql-tag';

const Library = () => (


    <div style={{height:'100vh'}}>

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

            return data.allSongs.map(song => (



                <div key={song.id}>

                    <p style={{color:'white',fontFamily:'BebasNeue Bold'}}>{song. artist.name}</p>
                    <p style= {{color:'white',fontFamily:'BebasNeue Book'}}>{`${song.album.title} by ${song. artist.name}`}</p>



                 </div>
           ));
           
        }}
        
    </Query>
        </div>
);

export default Library;
