import React from 'react'
export default function ShowEmployeeBasicDetails(props){
	return(
		<div>
			<p>Employee Name:{props.name}</p>
			<p>Employee Age:{props.age}</p>
			<p>Employee Designation:{props.designation}</p>
		</div>
	)
}