import React from 'react';



const Submit = ({ isEditable, handleSubmit }) => {
	return (
	<button
		type="submit"
		disabled={!isEditable}
		onClick={() => handleSubmit}
		>
	</ button>
	)
}

export default Submit;


