import React from "react"
export default React.forwardRef(function Input(props,ref){
	return(
		<div>
			<input type="text"  ref={ref}></input>
		</div>
	)

})
