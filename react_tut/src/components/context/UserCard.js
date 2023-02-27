import React from "react";
import { ApplicationContext } from "../../App";
const UserCard = ()=>{
	return(
		<div>
			<ApplicationContext.Consumer>
				{user=><h1>{user}</h1>}
			</ApplicationContext.Consumer>
		</div>
	)
}
export default UserCard