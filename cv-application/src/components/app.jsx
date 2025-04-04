import React, { useState } from "react"
import Form from "./form";
import Edit from "./edit";
import Submit from "./submit";

const App = () => {

	const [formData, setFormData] = useState({
		nameInput: "",
		emailInput: "", 
		phoneInput: "", 
		schoolInput: "",
		studyInput: "", 
		studyDateInput: "", 
		graduationDateInput: "", 
		companyInput: "", 
		positionInput: "", 
		responsibilitiesInput: "",
		startDateInput: "", 
		endDateInput: "", 
		isEditable: "",
		handleInputChange: ""
	});

	const [ isEditable, setIsEditable ] = useState(true);	

	const handleInputChange = (e) => {
		const { name, value } = e.target; 
		setFormData((prevData) => ({
			...prevData, 
			[name]: value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
	} 

	const handleEdit = () => {
		setIsEditable(!isEditable);
};
return(
<>
	<Form 
		formData={formData}
		handleInputChange={handleInputChange}
		isEditable={isEditable}
		/>
	<Edit 
		isEditable={isEditable}
		handleEdit={handleEdit}
		/>
	<Submit 
		isEditable={isEditable}
		handleSubmit={handleSubmit}
		/>
</ >
)}

export default App; 


