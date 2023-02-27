import React, { useContext } from "react";
import { ApplicationContext } from "../../App";
import UserCard from "./UserCard";

const Profile =()=>{
	const user = useContext(ApplicationContext);

	return(
		<div>
			<p>UserName:{user}</p>
			<UserCard></UserCard>
		</div>
	)
}
export default Profile