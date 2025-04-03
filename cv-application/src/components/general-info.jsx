import React from "react"


const GeneralInfo = () => {

return(
<>
	<h1>General Information</h1>
	<div
		className="general"
	>

	<input 
		type="text"
		placeholder="Name"
	/>
	<input 
		type="email"
		placeholder="Email"
	/>

	<input 
		type="phone"
		placeholder="Phone"
	/>
	</div>
</>
)
}

export default GeneralInfo;