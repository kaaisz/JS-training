import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // meaningOfLife: 47 + 1 (which is defined in index.js)
  //     meaningOfLife: 47 + this.props.increment
  //   }
  // }
  
  // now you can shorten if you only have state initially
  state = {
    meaningOfLife: 47
  }

  handleClick = () => {
    // this is asyncronous setState
    this.setState((prevState, prevProps) => {
      // return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
      return {meaningOfLife: prevState.meaningOfLife + 1}
    }, 
      // callback - this makes console log below sync
      () => console.log(this.state.meaningOfLife)
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }
}

export default App;
