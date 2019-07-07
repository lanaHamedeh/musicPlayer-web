import React, {Component} from 'react';
import './css/Song.css'

class Song extends Component {

  render() {
    const props = this.props;
    return (
      <div className='Song'>
        <h2>{props.title}</h2>
        <h4>By: {props.artist}</h4>
        <h4>In: {props.album}</h4>
      </div>
    );
  }

}

export default Song;