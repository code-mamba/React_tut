import React from "react";
import ShowEmployeeBasicDetails from "./employeeDetails";
import ShowEmployeeSalaryDetails from "./salaryDetails";


var HigherOrderComponent = function(WrappedComponent){
	return class EmployeeDetailComponents extends React.Component{
		constructor(){
			super();
			this.state = getEmployeeData()
		}
		render(){
			return(
				<WrappedComponent {...this.state} ></WrappedComponent>
			)
		}
	}

}
function getEmployeeData(){
	return{
		name:"Dhanush",
		age:22,
		designation:"Developer",
		salary:30000,
		bonus:2000
	}
}
export var EmployeeDetails = HigherOrderComponent(ShowEmployeeBasicDetails)
export var EmployeeSalaryDetails = HigherOrderComponent(ShowEmployeeSalaryDetails)
