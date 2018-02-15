import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {tweets: []}

  componentDidMount() {
    fetch('/tweets')
      .then(res => res.json())
      .then(tweets => this.setState({ tweets }));
  }

  render() {
    return (
      <div className="App">
        <h1>Tweets</h1>
        {this.state.tweets.map(tweet =>
          <div key={tweet.id}>{tweet.text}</div>
        )}
      </div>
    );
  }
}

export default App;
