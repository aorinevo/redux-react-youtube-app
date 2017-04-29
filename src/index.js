import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAi4WA4SjxmJwv8-T0kcdkEWWp3GHqkikY';

const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}

ReactDOM.render(<App/>, document.querySelector('.container'));