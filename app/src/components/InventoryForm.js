import React, { Component } from 'react'
import '../styles/InventoryForm.css'

class InventoryForm extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<div class="fixed-action-btn">
					<a class="btn-floating btn-large red" href="#inventory-form">
						<i class="large material-icons">mode_edit</i>
					</a>
				</div>
				<div id="inventory-form" class="modal bottom-sheet">
					<div class="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
					<div class="modal-footer">
						<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
					</div>
				</div>
			</div>
		)
	}
}

export default InventoryForm