import React, {Component} from 'react'
import TodoCard from './TodoCard'
import axios from 'axios'


class TodoList extends Component{
	constructor(props){
		super(props)
		this.state = {
			todos:[]
		}
	}

	componentDidMount(){
		axios.get('http://localhost/react-todo-list-api/index.php/TodoList/todo').then(response => {
			console.log(response.data)
			this.setState({
				todos: response.data
			})
		}).catch(error => {
			console.log(error)
		})
	}
	render(){
		return(
			<div className="todo-list">
				{this.state.todos.map((todo) => {
					return(
						<TodoCard key={todo.id} id={todo.id} tittle={todo.tittle} contents={todo.contents}/>
					)
				})}
			</div>
		)
	}
}

export default TodoList