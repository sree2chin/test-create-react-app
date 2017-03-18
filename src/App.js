import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Sara" />;

class App extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        
        </p>
        <h1>
          Hello, {formatName(user)}!
        </h1>
        {element}
      </div>
    );
  }
}

export default App;
