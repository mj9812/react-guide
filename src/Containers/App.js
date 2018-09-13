import React, { Component } from 'react';
import './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import Ticker from '../Components/Cockpit/Ticker'
import Persons from '../Components/Persons/Persons'
import UserOutput from '../Components/Persons/Person/UserOutput'

class App extends Component {

  testVal = 'this ought to be a test...'; // Class Variable ES6

  state = {
    persons: [
      { name: 'Michigan', age: 44 }, { name: 'Arizona', age: 34 }, { name: 'Mexico', age: 21 },
      { name: 'Tenchan', age: 75 }, { name: 'Hawai', age: 82 }, { name: 'Guatimala', age: 38 }],
    userName: 'McLaren',
    timeval: new Date().toLocaleTimeString(),
    showPersons: true,
    startClock: false
  };

  render() {
    return (<div className="App">
      <Cockpit showPersons={this.state.showPersons} showPersonsHandler={this.showPersonsHandler}
        startClock={this.state.startClock} handleClock={this.handleClock} testVal={this.testVal} />
      <Ticker timeval={this.state.timeval} />
      <Persons showp={this.state.showPersons} persns={this.state.persons} delPersonHandler={this.delPersonHandler} />
      <UserOutput username={this.state.userName} changed={this.manipUser} />
    </div>);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ timeval: new Date().toLocaleTimeString() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClock = () => {
    const strtClock = this.state.startClock;
    if (strtClock) this.componentDidMount(); else this.componentWillUnmount();
    this.setState({ startClock: !strtClock });
  }

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); // event.target.textContent = doesShow ? 'Show Persons' : 'Hide Persons';
  }

  delPersonHandler = (perIndex) => {
    const perCopy = [...this.state.persons];
    perCopy.splice(perIndex, 1);
    this.setState({ persons: perCopy });
  }

  manipUser = (event) => {
    this.setState({ userName: event.target.value });
  }
}

export default App;
