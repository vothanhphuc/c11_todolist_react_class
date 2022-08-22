import React from 'react';
import { clsx } from 'clsx';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleTodoToggle() {
		const { todo, onTodoToggle } = this.props;
		if (typeof onTodoToggle === 'function') {
			onTodoToggle(todo);
		}
	}
	handleTodoDelete() {
		const { todo, onTodoDelete } = this.props;
		if (typeof onTodoDelete === 'function') {
			onTodoDelete(todo);
		}
	}
	handleTodoUpdate(){
		const { todo, onTodoUpdate } = this.props;
		if (typeof onTodoUpdate === 'function') {
			onTodoUpdate(todo);
			console.log(todo);
		}
	}
	render() {
		const { todo } = this.props;

		return (
			<div className="todo-item-container">
				<span className="todo-item-toggle">
					{todo.isCompleted ? (
						<img
							src="../img/complete-tick.svg"
							alt="tick"
							onClick={() => this.handleTodoToggle()}
						/>
					) : (
						<img
							src="../img/active-tick.svg"
							alt="tick"
							onClick={() => this.handleTodoToggle()}
						/>
					)}
				</span>
				<div
					className={clsx('todo-item-content', { completed: todo.isCompleted })}
				>
					{todo.title}
				</div>
				<div className="todo-item-options">
					<span className="icon-btn" >
						<img src="../img/edit.svg" alt="edit" onClick={() => this.handleTodoUpdate()}/>
					</span>
					<span className="icon-btn">
						<img
							src="../img/delete.svg"
							alt="close"
							onClick={() => this.handleTodoDelete()}
						/>
					</span>
				</div>
			</div>
		);
	}
}
export default TodoItem;
