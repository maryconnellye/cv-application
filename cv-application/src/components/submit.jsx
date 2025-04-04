import React, { useState } from 'react';



const Submit = () => {
	
	const [inputValue, setInputValue] = useState("");


	const handleSubmit= (e) => {
		e.preventDefault();
		
			
		}

	
	return (
	<button
		type="submit"
		onClick={() => handleSubmit}
		>
	</ button>
	)
}

export default Submit;