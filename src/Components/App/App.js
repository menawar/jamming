import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id:'1', 
          name:'Getting Jiggy With it', 
          artist:'Will Smith', 
          album:'Be Jiggy'
        },
        {
          id:'2', 
          name:'Lady In Red', 
          artist:'Chris De Burgh', 
          album:'Greatest Hits'
        }
      ],
      playlistName: 'My playlist',
      playlistTracks: [
        {
          id:'1', 
          name:'Getting Jiggy With it', 
          artist:'Will Smith', 
          album:'Be Jiggy'
        },
        {
          id:'2', 
          name:'Lady In Red', 
          artist:'Chris De Burgh', 
          album:'Greatest Hits'
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* Add a SearchBar component  */}
        <SearchBar />
        <div className="App-playlist">
          {/* Add a SearchResults component */}
          <SearchResults searchResults={this.state.searchResults}  onAdd={this.addTrack}
              isRemoval={false} />
          {/* Add a Playlist component  */}
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}  onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
    );
  }
    
}

export default App;


