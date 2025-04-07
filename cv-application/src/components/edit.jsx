import React from "react";

const Edit = ({ handleEdit }) => {
;
	return (
	<button 
		className="edit"
		type="button"
		onClick={() => handleEdit}
		>Edit
	</button>
	)
}

export default Edit;