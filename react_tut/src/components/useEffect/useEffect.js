import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import '../useEffect/useEffect.css'
function EffectsDemoNoDependency(){
	const[title,setTitle] = useState('default title')
	const titleRef = useRef()
	const[darkMode,setDarkMode] = useState(false)
	useEffect(()=>{
		console.log("use effect")
	})

	const handleClick=()=>{
		setTitle(titleRef.current.value)
		console.log('render')
		
	}
	const handleCheckBoxChange =()=>{
		setDarkMode((prev)=>!prev)
	}
	return(
		<div className={darkMode?"viewdark-mode":"view"}>
			<h1>{title}</h1>
			<input name="darkmode" type="checkbox" checked={darkMode} onChange={handleCheckBoxChange} ></input>:Dark mode
			<Input ref={titleRef}></Input>
			<button onClick={handleClick} >Change Title</button>
		</div>
	)
}
export default EffectsDemoNoDependency