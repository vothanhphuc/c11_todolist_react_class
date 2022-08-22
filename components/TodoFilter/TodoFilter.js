import React from 'react';

class TodoFilter extends React.Component {
	constructor(props) {
		super(props);
	}
	handlFilterTodos(todo) {
		const { todos, onTodoFilter } = this.props;
		if(typeof onTodoFilter === 'function'){
			onTodoFilter(todo)
		}
		console.log(todo);
        
	}
    // handlFilterTodoComplete(){
    //     const { todos, onTodoFilter2 } = this.props;
	// 	if (typeof onTodoFilter2 === 'function') {
	// 		onTodoFilter2(todos);
	// 		console.log(todos);
	// 	}
    // }
	// handlFilterTodoAll(){
    //     const { todos, onTodoFilter3 } = this.props;
	// 	if (typeof onTodoFilter3 === 'function') {
	// 		onTodoFilter3(todos);
    //         console.log(todos);
	// 	}
    // }

	render() {
		return (
			<>
				<div className="todo-filter-container">
					<div className="todo-filter-count">3 items left</div>
					<div className="todo-filter-status">
						<span className="active" onClick={() => this.handlFilterTodos('ALL')}>All</span>
						<span  onClick={() => this.handlFilterTodos('ACTIVE')}>Active</span>
						<span onClick={() => this.handlFilterTodos('COMPLETED')}>Complete</span>
					</div>
				</div>
			</>
		);
	}
}
export default TodoFilter;
