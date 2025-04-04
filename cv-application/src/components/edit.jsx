import React from "react";

const Edit = ({ isEditable, handleEdit}) => {
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