import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycles from './lifecycles.component';

class App extends React.Component {
  state = {
    meaningOfLife: 47,

    showChild: true,
    text: ''
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
          <h2>Updating State</h2>
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Update State
          </button>

          <h2>Lifecycle Method</h2>
          <div className="lifecycle-container">
            <button
              onClick={() => 
                this.setState(state => ({
                  // switch boolean
                  showChild: !state.showChild
                }))
              }
            >
              Toggle Lifecycles
            </button>
            <button
              onClick={() => 
                this.setState(state => ({
                  text: state.text + '_hello'
                }))
              }
            >
              Update Text
            </button>
            {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
            <p>Toggle lifecycle switch componentWillUnmount() and render the text.</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
