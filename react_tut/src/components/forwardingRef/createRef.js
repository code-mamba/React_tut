// parent component
import React from "react";
import Input from "./Input";

const CreateRefApiExample = () =>{
	let inputRef = React.createRef()

	const handleClick = ()=>{
		inputRef.current.focus()
	}
	return(
		<div style={{border:"1px solid red", width:"400px"}}>
			<b>ParentComponent</b>
			<br></br>
			<Input ref = {inputRef}></Input>
			<button style={{margin:"8px"}} onClick={handleClick} >Click!</button>

		</div>
	)
}
export default CreateRefApiExample