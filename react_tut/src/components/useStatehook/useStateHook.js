import React, { useState } from "react";
const State = () =>{
	const[count,setCount]= useState(0)

	const handleClick = ()=>{
		setCount(count+1)
	}
	return(
		<>
		<h2>{count}</h2>
		<button onClick={handleClick}>counter</button>
		</>
	)
}
export default State