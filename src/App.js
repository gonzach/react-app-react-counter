import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  render() {
    return (
      <div className="App">
          <button onClick={() => 
          { this.setState({number: 1})}}>
            +
          </button >
          <p>number: {this.state.number}</p>
      </div>
    );
  }
}

export default App;
