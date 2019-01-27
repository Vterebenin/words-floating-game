import React, { Component } from 'react';
import './App.css';
import Word from './components/word/word'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    const words = {
      first: 'First',
      second: 'Second',
      third: 'Third',
    }

    return (
      <div className="App">
        {Object.keys(words).map(function (key) {
          return <Word word={words[key]} />;
        })}
      </div>
    );
  }
}

export default App;
