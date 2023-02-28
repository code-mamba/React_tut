import React from "react";
const TodoList =(props)=>{
	const todos = props.todos
	return(
	
		<ul>
			{todos.map((todo)=>(
				<li key={todo}>{todo}</li>
				))}
		</ul>
		
		
	)
}
export default TodoList