import React from "react";

// const Input = ()=>{
// 	return(
// 		<div style={{border:"1px solid green", width:"300px", margin:"16px"}}>
// 			<b>child component</b>
// 			<br></br>
// 			Name:<input type="text" style = {{margin:"32px 0 32px 0"}}></input>

// 		</div>
// 	)
// }
// export default Input
export default React.forwardRef( function Input(props,ref){
	return(
		<div style={{border:"1px solid green", width:"300px", margin:"16px"}}>
			<b>child component</b>
			<br></br>
			Name:<input type="text" style = {{margin:"32px 0 32px 0"}} ref={ref} ></input>

 		</div>
	)
})