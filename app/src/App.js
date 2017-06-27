import React, { Component } from 'react'
import './styles/App.css'
import fire from './fire'
import Header from './components/Header'
import Table from './components/Table'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
