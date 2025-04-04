import React, { useState } from "react";


const Edit = () => {
	
	const [ isEditable, setIsEditable ] = useState(false);

	const handleEdit = () => {
		setIsEditable(!isEditable);
	};

	return (
	<button 
		className="edit"
		type="button"
		onClick={()=>handleEdit}
		>{isEditable ? 'Save Edits' : 'Edit'}
	</button>
	)
}

export default Edit;