import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	handleOnChangeTodo(e) {
		e.preventDefault();
		let formValue;
		const { onTodoForm, editTodo } = this.props;
		const { value } = this.state;
		console.log(editTodo);
		if( editTodo  ){
			formValue = {
				...editTodo, title : value
			}
			console.log(formValue);
		}
		else {
			console.log("them moi");
			formValue = {
				title : value
			}
		}
		onTodoForm(formValue)
		this.setState({
			value: ''
		})		
	}
	handleValueChange(e) {
		e.preventDefault();
		// console.log(this.state.value);
		this.setState({ value: e.target.value });
	}
	componentDidUpdate(prevProps){
		  if(this.props.editTodo){
			if (prevProps.editTodo?.title !== this.props.editTodo?.title){
				this.setState({
					value: this.props.editTodo.title
				  });
			}
		  }  
	}
	render() {
		// const { todo } = this.props;
		const { value } = this.state;
		return (
			<>
				<div className="todo-form-container">
					<form
						onSubmit={(e) => {
							this.handleOnChangeTodo(e);
						}}
					>
						<input
							value={value}
							type="text"
							placeholder="What need to be done?"
							onChange={(e) => this.handleValueChange(e)}
						/>
					</form>
				</div>
			</>
		);
	}
}
export default TodoForm;
