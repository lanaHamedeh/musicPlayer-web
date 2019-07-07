import React, {Component} from 'react';
import './css/Album.css'

class Album extends Component {

  static defaultProps = {
    songs: []
  };

  render() {
    const props = this.props;

    const songs = props.songs.length > 0
      ? props.songs.map(s => <li key={s.id}>{s.title}</li>)
      : <p>Fetch songs to show!</p>;

    return (
      <div className='Album'>
        <h2>{props.title}</h2>
        <h3>By: {props.artist}</h3>

        <h4>Songs: </h4>
        <ul>{songs}</ul>
      </div>
    );
  }

}

export default Album;