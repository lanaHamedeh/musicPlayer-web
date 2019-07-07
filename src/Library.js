import React, {Component} from 'react';
import axios from 'axios'

import './css/Library.css'
import Artist from "./Artist";
import Album from "./Album";
import Song from "./Song";

class Library extends Component {

  baseUrl = 'http://127.0.0.1:8000/';
  artistsUrl = this.baseUrl + 'artists/';
  albumsUrl = this.baseUrl + 'albums/';
  songsUrl = this.baseUrl + 'songs/';

  state = {
    artists: [],
    albums: [],
    songs: [],
    albums_disabled: true,
    songs_disabled: true
  };

  getArtists = () => {
    axios.get(this.artistsUrl)
      .then(response => this.setState({artists: response.data, albums_disabled: false}));
  };

  getAlbums = () => {
    axios.get(this.albumsUrl)
      .then(response => this.setState({albums: response.data, songs_disabled: false}));
  };

  getSongs = () => {
    axios.get(this.songsUrl)
      .then(response => this.setState({songs: response.data}));
  };

  getArtistName = (id) => {
    const result = this.state.artists.filter(ar => ar.id === id);
    return result ? result[0].name : null;
  };

  getAlbumTitle = (id) => {
    const result = this.state.albums.filter(al => al.id === id);
    return result ? result[0].title : null;
  };

  filterSongs = albumId => this.state.songs.filter(s => s.album === albumId)
  filterAlbums = artistId => this.state.albums.filter(al => al.artist === artistId)

  render() {
    const state = this.state;
    const artistsList = state.artists.map(ar => <Artist name={ar.name} id={ar.id} key={ar.id}
                                                        remove={this.removeArtist}
                                                        albums={this.filterAlbums(ar.id)}/>);

    const albumsList = state.albums.map(al => <Album id={al.id} key={al.id} title={al.title}
                                                     artist={this.getArtistName(al.artist)}
                                                     songs={this.filterSongs(al.id)}/>);

    const songsList = state.songs.map(s => <Song id={s.id} key={s.id} title={s.title}
                                                 album={this.getAlbumTitle(s.album)}
                                                 artist={this.getArtistName(s.artist)}/>);

    return (
      <div className='Library'>
        <button onClick={this.getArtists}>Get Artists</button>
        <button disabled={state.albums_disabled} onClick={this.getAlbums}>Get Albums</button>
        <button disabled={state.songs_disabled} onClick={this.getSongs}>Get Songs</button>

        <h1>Artists</h1>
        {artistsList}
        <hr/>

        <h1>Albums</h1>
        {albumsList}
        <hr/>

        <h1>Songs</h1>
        {songsList}
      </div>
    );
  }
}

export default Library;