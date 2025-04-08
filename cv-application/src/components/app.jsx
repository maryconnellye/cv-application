import React, { useState } from "react"
import Form from "./Form";

const App = () => {
	
	const [submitted, setSubmitted] = useState(false);	
	const [editMode, setEditMode ] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "", 
		phone: "", 
		school: "",
		study: "", 
		studyStart: "", 
		graduation: "", 
		company: "", 
		position: "", 
		responsibilities: "",
		start: "", 
		end: "", 
		editMode: "",
		handleInputChange: ""
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target; 
		setFormData((prevData) => ({
			...prevData, 
			[name]: value,
		}))
	}
 
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setEditMode(false);
		console.log(formData)
	}

		
	const handleEdit = () => {
			setEditMode(true);
		}
		
	return(
	
	<Form
	  onSubmit={editMode ? handleUpdate : handleSubmit}
	  formData={formData}
	  onChange={handleInputChange}
	/>
)
}
export default App; 

