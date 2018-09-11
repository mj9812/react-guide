import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './Person/UserInput'
import UserOutput from './Person/UserOutput'
import Ticker from './Person/Ticker'

class App extends Component {
  state = {
    persons: [
      {name: 'Michigan', age: 24},
      {name: 'Philadel', age: 34},
      {name: 'Galadel', age: 41}
    ], 
    userName: 'McLaren',
    timeval: new Date().toLocaleTimeString()
  }

  render() {
    const styler = {
      height: '40px',
      width: '140px',
      margin: '0 10px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React New App...</h1>
        <Ticker timeval={this.state.timeval} />
        <button style={styler} onClick={this.switchNameHandler.bind(this, 'New York')}>Switch Name</button>
        <button style={styler} onClick={this.componentWillUnmount.bind(this)}>Stop Clock</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
        clicker={this.switchNameHandler.bind(this, 'Washington')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Dancing, Racing...</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <UserInput username={this.state.userName} changed={this.manipUser}/>
        <UserOutput username={this.state.userName}/>
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTicker(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTicker = () => {
    this.setState({timeval: new Date().toLocaleTimeString()})
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [{name: newName, age: 35},{name: 'Philadel', age: 34},{name: 'Galadel', age: 41}]
    })
  }

  manipUser = (event) => {
    this.setState({userName: event.target.value})
  }
}

export default App;
