import React, { useState } from "react";
const AddTodo =(props)=>{
		const[AddTodo,setAddTodo] = useState('')
	

	const handleSubmit =(event)=>{
		event.preventDefault()
		
		props.setTodos(prevTodos=>[...prevTodos,AddTodo])
		
	}	
	return(
		<div>
		<h1>AddTodo</h1>
		<form onSubmit={handleSubmit}>
			<input type="text" id="todo" onChange ={(e=>{setAddTodo(e.target.value)})} value = {AddTodo} ></input>
			<button type="submit">Add Todo</button>
		</form>
		</div>
	)
}
export default AddTodo