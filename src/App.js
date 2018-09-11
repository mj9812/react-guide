import React, { Component } from 'react';
import Radium from 'radium'
import './App.css';
import Person from './Person/Person'
import UserInput from './Person/UserInput'
import UserOutput from './Person/UserOutput'
import Ticker from './Person/Ticker'

class App extends Component {
  state = {
    persons: [
      { name: 'Michigan', age: 24 },
      { name: 'Philadel', age: 34 },
      { name: 'Galadel', age: 41 }
    ],
    userName: 'McLaren',
    timeval: new Date().toLocaleTimeString(),
    showPersons: false
  }

  render() {
    const styler = {
      height: '40px',
      width: '140px',
      margin: '0 10px'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (per,index) => <Person key={index} name={per.name} age={per.age} /> ) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React New App...</h1>
        <Ticker timeval={this.state.timeval} />
        <button style={styler} onClick={this.showPersonsHandler}>Show Persons</button>
        <button style={styler} onClick={this.componentWillUnmount.bind(this)}>Stop Clock</button>
        {persons}
        <UserInput username={this.state.userName} changed={this.manipUser} />
        <UserOutput username={this.state.userName} />
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
    this.setState({ timeval: new Date().toLocaleTimeString() })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 35 }, { name: 'Philadel', age: 34 }, { name: 'Galadel', age: 41 }]
    })
  }

  showPersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    event.target.textContent = doesShow ? 'Show Persons' : 'Hide Persons';
  }

  manipUser = (event) => {
    this.setState({ userName: event.target.value })
  }
}

export default Radium(App);
