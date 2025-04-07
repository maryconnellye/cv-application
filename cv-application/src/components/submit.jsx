import React from 'react';



const Submit = ({ handleSubmit }) => {

	return (
	<button
		type="submit"
		onClick={() => handleSubmit}
		>Submit	
	</ button>
	)
}

export default Submit;


