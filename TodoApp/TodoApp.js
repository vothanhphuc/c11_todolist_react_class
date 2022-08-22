import React from 'react';
import Header from '../components/Header/Header';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoFilter from '../components/TodoFilter/TodoFilter';
import TodoList from '../components/TodoList/TodoList';
import todoServices from '../services/todoServices';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
// const todos = [
// 	{
// 		id: 1,
// 		title: 'An Banh Mi',
// 		isCompleted: true
// 	},
// 	{
// 		id: 2,
// 		title: 'Hoc Lap Trinh',
// 		isCompleted: false
// 	},
// 	{
// 		id: 3,
// 		title: 'Di Quy NHon',
// 		isCompleted: true
// 	},
// 	{
// 		id: 4,
// 		title: 'Di lam',
// 		isCompleted: false
// 	}
// ];

const filterTodos =(todos = [],status = '') => {
	switch(status){
		case 'ACTIVE' : {
			return todos.filter(todo => !todo.isCompleted)
		}
		case 'COMPLETED' : {
			return todos.filter(todo => todo.isCompleted)
		}
		default:
			return todos
	}
}
class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			editTodo: null,
			status: 'ALL'
		};
	}
	componentDidMount() {
		const handleGetTodos = async () => {
			const { todos } = await todoServices.getTodos();
			this.setState({
				todos: todos.map((todo) => ({ ...todo, title: todo.content }))
			});
		};
		handleGetTodos();
	}
	handleTodoToggle(todo) {
		const { todos } = this.state;
		this.setState({
			todos: todos.map((element) =>
				element.id === todo.id
					? { ...element, isCompleted: !element.isCompleted }
					: element
			)
		});
		const handleUpdateTodo = async () => {
			await todoServices.updateTodos(todo.id, {
				isCompleted: !todo.isCompleted
			});
		};
		handleUpdateTodo();
	}
	handleTodoDelete(todo) {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter((element) => element.id !== todo.id)
		});
		const handleTodoDelete = async () => {
			await todoServices.deleteTodos(todo.id);
		};
		handleTodoDelete();
	}

	
	// handleTodoFilter3(todo) {
	// 	const { todos } = this.state;
	// 	this.setState({
	// 		todos: todo
	// 	});
	// }

	// handleTodoFilter(todo) {
	// 	const { todos } = this.state;
	// 	console.log(todos);
	// 	this.setState({
	// 		todos: todo.filter(e => e.isCompleted === false)
	// 	})
	// 	console.log(todo);
	// }
	// handleTodoFilter2(todo) {
	// 	const { todos } = this.state;
	// 	console.log(todos);
	// 	this.setState({
	// 		todos: todo.filter(e => e.isCompleted === true)
	// 	})
	// }
	

	handleTodoForm(value) {
		let newList;
		if (value.id) {
			newList = this.state.todos.map((todo) =>
				todo.id === value.id ? value : todo
			);
			console.log('edit');
		} else {
			newList = [...this.state.todos];
			newList.push({ id: uuidv4(), title: value.title, isCompleted: false });
		}
		this.setState({ todos: newList, editTodo: null });
	}
	handleTodoUpdate(todo) {
		this.setState({
			editTodo: todo
		});
	}
	handleSetStatus(e){
		this.setState({
			status : e
		})
		console.log(e);
	}
	componentDidUpdate() {}

	render() {
		const { todos, editTodo, status } = this.state;

		return (
			<div id="todo-app">
				<Header />
				<div className="todo-container-wrapper">
					<div className="todo-container">
						<TodoForm
							todo={todos}
							onTodoForm={(value) => this.handleTodoForm(value)}
							editTodo={editTodo}
						/>
						<TodoFilter
							todos={todos}
							onTodoFilter={(e) => this.handleSetStatus(e)}
							// onTodoFilter2={(todo) => this.handleTodoFilter2(todo)}
							// onTodoFilter3={(todo) => this.handleTodoFilter3(todo)}
						/>
						<TodoList
							todos={filterTodos(todos,status)}
							onTodoToggle={(todo) => this.handleTodoToggle(todo)}
							onTodoDelete={(todo) => this.handleTodoDelete(todo)}
							onTodoUpdate={(todo) => this.handleTodoUpdate(todo)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default TodoApp;
