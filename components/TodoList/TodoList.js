import React from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component{
    constructor(props) {
		super(props)
        
    }
    render(){
        const {todos, onTodoToggle, onTodoDelete, onTodoUpdate} = this.props

        return(
            <div className="todo-list-container">
                {todos.map(todo => (<TodoItem key={todo.id} todo={todo} onTodoToggle={onTodoToggle} onTodoDelete={onTodoDelete} onTodoUpdate={onTodoUpdate} />))}
            </div>
        )
    }
}
export default TodoList;