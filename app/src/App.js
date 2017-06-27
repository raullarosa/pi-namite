import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import fire from './js/fire'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

//get elements
const preObject = document.getElementById('items');

//create reference
const dfRefObject = fire.database().ref().child('items');

//sync object changes
dfRefObject.on('value', snap =>console.log(snap.val())); ///{preObject.innerText = JSON.stringify(snap.val(), 3)});


            


export default App;
