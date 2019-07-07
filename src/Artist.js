import React, {Component} from 'react';
import './css/Artist.css'

class Artist extends Component {

  render() {
    const props = this.props;

    const albums = props.albums.length > 0
      ? props.albums.map(a => <li key={a.id}>{a.title}</li>)
      : <p>Fetch albums to show!</p>;
    return (
      <div className='Artist'>
        <h2>{props.name}</h2>

        <h3>Albums:</h3>
        <ul>{albums}</ul>
        {/*<button onClick={this.handleDelete}>Delete</button>*/}
      </div>
    );
  }

  // handleDelete = () => this.props.remove(this.props.id, this.props.name);
}

export default Artist;