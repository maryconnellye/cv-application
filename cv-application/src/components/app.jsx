import React, { useState } from "react"
import Form from "./form";
import Edit from "./edit";
import Submit from "./submit";

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

	/**
	 * You’ve got the right idea — conditionally rendering the form based on `editMode` is the right approach.
	 * 
	 * Suggestion: Instead of having the submit buttons as separate components,
	 * you could include them directly within the form. That way, the form itself
	 * can handle different submission logic depending on the mode.
	 * 
	 * For example:
	 *   - If `editMode` is true → use `handleUpdate`
	 *   - If `editMode` is false → use `handleSubmit`
	 *
	 * This keeps the form logic more centralized and easier to manage.
	 * 
	 * Also, it is good practice for your component file names to capitalized - i.e. Form.jsx instead of form.jsx
	 * 
	 * Here's how that might look.....
	 */

	{editMode ? (
		// <Form
		//   onSubmit={handleUpdate}
		//   formData={formData}
		//   onChange={handleInputChange}
		// />
	) : (
		// <Form
		//   onSubmit={handleSubmit}
		//   formData={formData}
		//   onChange={handleInputChange}
		// />
	)}
	
	// Optionally:
	// <Form
	//   onSubmit={editMode ? handleUpdate : handleSubmit}
	//   formData={formData}
	//   onChange={handleInputChange}
	// />
)
}
export default App; 

