import React, {Component} from 'react'
import './todocard.css'

class TodoCard extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div className="todo-card">				
				<p>
					Id: {this.props.id}
				</p>
				<p>
					Tittle: {this.props.tittle}
				</p>
				<p>
					Contents: {this.props.contents}
				</p>
			</div>
		)
	}
}


export default TodoCard