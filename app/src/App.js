import React, { Component } from 'react'
import './styles/App.css'
import fire from './fire'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <Header />
    );
  }
}

export default App;
