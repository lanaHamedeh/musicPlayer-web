import React from 'react'
import {Query} from "react-apollo";
import gql from 'graphql-tag';

const Library = () => (
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
                    <p>{song.title}</p>
                 </div>
           ));
           
        }}
        
    </Query>
);

export default Library;
