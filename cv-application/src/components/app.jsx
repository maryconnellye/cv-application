import React, { useState } from "react"
import Form from "./form";
import Edit from "./edit";

const App = () => {

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
	
	const [submitted, setSubmitted] = useState(false);	

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
		console.log(formData)
	} 

	return(
		<Form 
			submitted={submitted}
			formData={formData}
			handleSubmit={handleSubmit}
			handleInputChange={handleInputChange}/>
	)

}
export default App; 

