import React, { useState } from "react";

const Edit = () => {
const [ isEditable, setIsEditable ] = useState(true);
	const handleEdit = () => {
		setIsEditable(!isEditable);
	}
	return (
	<button 
		className="edit"
		type="button"
		disabled={!isEditable}
		onClick={()=>handleEdit}
		>Edit
	</button>
	)
}

export default Edit;