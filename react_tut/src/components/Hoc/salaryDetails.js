import React from "react";
import { ApplicationContext } from "../../App";
export default function ShowEmployeeSalaryDetails(props){
	return(
		<div>
			<p>Employee Name:{props.name}</p>
			<p>Employee Salary{props.salary}</p>
			<p>Employee Bonus{props.bonus}</p>
			{/* <ApplicationContext.Consumer>
				{user=><h1>{user}</h1>}
			</ApplicationContext.Consumer> */}
		</div>
	)
}