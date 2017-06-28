import React, { Component } from 'react'
import '../styles/Table.css'
import fire from '../fire'




class Table extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}


  /*  function1(){
        const preObject = document.getElementById('items')
        const dbRefObject= fire.database().ref().child('items')
        dbRefObject.on('value', snap => {preObject.innerText=JSON.stringify(snap.val(),null,3)})
    }*/
	render() {
        
        
		return (
			<table className="striped responsive-table">
				<thead>
					<tr>
						<th>SKU</th>
						<th>Description</th>
						<th>Category</th>
						<th>Buidling</th>            
						<th>Inventory</th>
						<th>Value</th>
						<th>Min Inventory</th>
						<th>Max Inventory</th>
						<th>Units per Pkg</th>
						<th>Unit Rate</th>
					</tr>
				</thead>

        
				<tbody id = 'tb'>
            
            
            
					{/*Building A*/}
                    
            
            
					<tr>
                            
						<td>375196</td>
						<td>CALCULATOR,FINANCIAL,HP12C</td>
						<td>Calculator</td>
						<td>A</td>
						<td>1</td>
						<td>$84.99</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$84.99</td>
					</tr>
					<tr>
						<td>364255</td>
						<td>DESKPAD,2017,MONTHLY,22X17</td>
						<td>Calendar</td>
						<td>A</td> 
						<td>8</td>
						<td>$79.92</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$9.99</td>
					</tr>
					<tr>
						<td>308957</td>
						<td>CLIP,BINDER,LARGE,2IN,12BX</td>
						<td>Clip</td>
						<td>A</td> 
						<td>8</td>
						<td>$51.04</td>
						<td>4</td>
						<td>10</td>
						<td>12</td>
						<td>$0.53</td>
					</tr>
					<tr>
						<td>207464</td>
						<td>FOLDER,FSTR,LGL,1/3CT,50BX,MNA</td>
						<td>Folder</td>
						<td>A</td> 
						<td>21</td>
						<td>$2,266.77</td>
						<td>10</td>
						<td>24</td>
						<td>3</td>
						<td>$35.98</td>
					</tr>
					<tr>
						<td>259251</td>
						<td>MARKER,CHISEL TIP,EXPO,DZ,BLK</td>
						<td>Marker</td>
						<td>A</td> 
						<td>7</td>
						<td>$212.89</td>
						<td>3</td>
						<td>10</td>
						<td>12</td>
						<td>$2.53</td>
					</tr>
					{/*Building B*/}
					<tr>
						<td>375196</td>
						<td>CALCULATOR,FINANCIAL,HP12C</td>
						<td>Calculator</td>
						<td>B</td>
						<td>1</td>
						<td>$84.99</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$84.99</td>
					</tr>
					<tr>
						<td>364255</td>
						<td>DESKPAD,2017,MONTHLY,22X17</td>
						<td>Calendar</td>
						<td>B</td> 
						<td>8</td>
						<td>$79.92</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$9.99</td>
					</tr>
					<tr>
						<td>308957</td>
						<td>CLIP,BINDER,LARGE,2IN,12BX</td>
						<td>Clip</td>
						<td>B</td> 
						<td>8</td>
						<td>$51.04</td>
						<td>4</td>
						<td>10</td>
						<td>12</td>
						<td>$0.53</td>
					</tr>
					<tr>
						<td>207464</td>
						<td>FOLDER,FSTR,LGL,1/3CT,50BX,MNA</td>
						<td>Folder</td>
						<td>B</td> 
						<td>21</td>
						<td>$2,266.77</td>
						<td>10</td>
						<td>24</td>
						<td>3</td>
						<td>$35.98</td>
					</tr>
					<tr>
						<td>259251</td>
						<td>MARKER,CHISEL TIP,EXPO,DZ,BLK</td>
						<td>Marker</td>
						<td>B</td> 
						<td>7</td>
						<td>$212.89</td>
						<td>3</td>
						<td>10</td>
						<td>12</td>
						<td>$2.53</td>
					</tr>
					{/*Building C*/}
					<tr>
						<td>375196</td>
						<td>CALCULATOR,FINANCIAL,HP12C</td>
						<td>Calculator</td>
						<td>C</td>
						<td>1</td>
						<td>$84.99</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$84.99</td>
					</tr>
					<tr>
						<td>364255</td>
						<td>DESKPAD,2017,MONTHLY,22X17</td>
						<td>Calendar</td>
						<td>C</td> 
						<td>8</td>
						<td>$79.92</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$9.99</td>
					</tr>
					<tr>
						<td>308957</td>
						<td>CLIP,BINDER,LARGE,2IN,12BX</td>
						<td>Clip</td>
						<td>C</td> 
						<td>8</td>
						<td>$51.04</td>
						<td>4</td>
						<td>10</td>
						<td>12</td>
						<td>$0.53</td>
					</tr>
					<tr>
						<td>207464</td>
						<td>FOLDER,FSTR,LGL,1/3CT,50BX,MNA</td>
						<td>Folder</td>
						<td>C</td> 
						<td>21</td>
						<td>$2,266.77</td>
						<td>10</td>
						<td>24</td>
						<td>3</td>
						<td>$35.98</td>
					</tr>
					<tr>
						<td>259251</td>
						<td>MARKER,CHISEL TIP,EXPO,DZ,BLK</td>
						<td>Marker</td>
						<td>C</td> 
						<td>7</td>
						<td>$212.89</td>
						<td>3</td>
						<td>10</td>
						<td>12</td>
						<td>$2.53</td>
					</tr>
					{/*Building D*/}
					<tr>
						<td>375196</td>
						<td>CALCULATOR,FINANCIAL,HP12C</td>
						<td>Calculator</td>
						<td>D</td>
						<td>1</td>
						<td>$84.99</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$84.99</td>
					</tr>
					<tr>
						<td>364255</td>
						<td>DESKPAD,2017,MONTHLY,22X17</td>
						<td>Calendar</td>
						<td>D</td> 
						<td>8</td>
						<td>$79.92</td>
						<td>1</td>
						<td>10</td>
						<td>1</td>
						<td>$9.99</td>
					</tr>
					<tr>
						<td>308957</td>
						<td>CLIP,BINDER,LARGE,2IN,12BX</td>
						<td>Clip</td>
						<td>D</td> 
						<td>8</td>
						<td>$51.04</td>
						<td>4</td>
						<td>10</td>
						<td>12</td>
						<td>$0.53</td>
					</tr>
					<tr>
						<td>207464</td>
						<td>FOLDER,FSTR,LGL,1/3CT,50BX,MNA</td>
						<td>Folder</td>
						<td>D</td> 
						<td>21</td>
						<td>$2,266.77</td>
						<td>10</td>
						<td>24</td>
						<td>3</td>
						<td>$35.98</td>
					</tr>
					<tr>
						<td>259251</td>
						<td>MARKER,CHISEL TIP,EXPO,DZ,BLK</td>
						<td>Marker</td>
						<td>D</td> 
						<td>7</td>
						<td>$212.89</td>
						<td>3</td>
						<td>10</td>
						<td>12</td>
						<td>$2.53</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Table