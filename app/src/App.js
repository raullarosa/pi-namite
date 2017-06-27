import React, { Component } from 'react'
import './styles/App.css'
import fire from './fire'
import Header from './components/Header'
import Table from './components/Table'
import InventoryForm from './components/InventoryForm'

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
        <InventoryForm />
      </div>
    );
  }
}

export default App;
