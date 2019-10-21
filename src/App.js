import React from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Number numberApi={this.state}/>
        </header>
      </div>
    );
  }
}

export default App;
