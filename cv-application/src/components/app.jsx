import React, { useState } from "react"
import Form from "./form";
import Edit from "./edit";
import Submit from "./submit";

const App = () => {
	
	const [submitted, setSubmitted] = useState(false);	
	const [isEditable, setIsEditable ] = useState(true);
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
		isEditable: "",
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
		setIsEditable(false);
		console.log(formData)
	}

		
	const handleEdit = () => {
			setIsEditable(true);
		}
		
	return(
	<>
		<Form 
			isEditable={isEditable}
			submitted={submitted}
			formData={formData}
			handleSubmit={handleSubmit}
			handleInputChange={handleInputChange}
			handleEdit={handleEdit}
			/>

			{isEditable ? <Submit /> : <Edit />}
	</ >
)
}
export default App; 

