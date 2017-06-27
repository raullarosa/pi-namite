import React, { Component } from 'react'
import '../styles/Table.css'

class Table extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<table className="striped responsive-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Item Name</th>
						<th>Item Price</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Table