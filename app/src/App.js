import React, { Component } from 'react'
import './styles/App.css'
import fire from './fire'
import Header from './components/Header'
import Table from './components/Table'
import InventoryForm from './components/InventoryForm'
import { Button } from 'react-materialize'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      itemsInventory: null
    }


    //create reference
    let itemsRef = fire.database().ref().child('items');

    //sync object changes
    itemsRef.on('value', snap => {
      this.state.itemsInventory = snap.val()
      console.log(this.state.itemsInventory)
    });

  }
  render() {
    if(this.state.itemsInventory !== null) {
      // TODO: Loading spinner
      return (<div></div>)
    }
    return (
      <div>
        <Header />
        <Table />
        <InventoryForm />
        <Button floating fab='vertical' icon='add' className='ne-green-bg' waves='light' large style={{bottom: '45px', right: '24px'}}></Button>
      </div>
    );
  }
}

export default App;
