import Submit from "./submit";
import { useState } from "react";

const Form = () => {

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

const handleInputChange = (e) => {
	const { name, value } = e.target; 
	setFormData((prevData) => ({
		...prevData, 
		[name]: value
	}));
	};
;

return(
	<>
	<h1>General Information</h1>
	<div className="general">

		<input 
			type="text"
			placeholder="Name"
			name="nameInput"
			value={formData.nameInput}
			disabled={!isEditable}
			onChange={handleInputChange}
			/>
		<input 
			type="email"
			placeholder="Email"
			name="emailInput"
			value={formData.emailInput}
			disabled={!isEditable}
			onChange={handleInputChange}
			/>
		<input 
			type="phone"
			placeholder="Phone"
			name="phoneInput"
			value={formData.phoneInput}
			disabled={!isEditable}
			onChange={handleInputChange}
			/>
	</div>

	<h1>Educational Experience</h1>
		<div className="education">
	
			<input 
				type="text"
				placeholder="School Name"
				name="schoolInput"
				value={formData.schoolInput}
				disabled={!isEditable}
				onChange={handleInputChange}
				/>
			<input 
				type="text"
				placeholder="Title of Study"
				name="studyInput"
				value={formData.studyInput}
				disabled={!isEditable}
				onChange={handleInputChange}
				/>
		
			<input 
				type="date"
				placeholder="Date Started"
				name="studyDateInput"
				value={formData.studyDateInput}
				disabled={!isEditable}
				onChange={handleInputChange}
				/>

			<input 
				type="date"
				placeholder="Date of Graduation"
				name="graduationDateInput"
				value={formData.graduationDateInput}
				disabled={!isEditable}
				onChange={handleInputChange}
				/>

		</div>

		<h1>Practical Experience</h1>
			<div className="practical-experience">
				<input 
					type="text"
					placeholder="Company Name"
					name="companyInput"
					value={formData.companyInput}
					disabled={!isEditable}
					onChange={handleInputChange}
					/>
				<input 
					type="text"
					placeholder="Position Title"
					name="positionInput"
					value={formData.positionInput}
					disabled={!isEditable}
					onChange={handleInputChange}
					/>

				<input 
					type="text"
					placeholder="Main Responsibilities"
					name="responsibilitiesInput"
					value={formData.responsibilitiesInput}
					disabled={!isEditable}
					onChange={handleInputChange}
					/>
			
				<input 
					type="date"
					placeholder="Start Date"
					name="startDateInput"
					value={formData.startDateInput}
					disabled={!isEditable}
					onChange={handleInputChange}
					/>
				<input 
					type="date"
					placeholder="End Date"
					name="endDateInput"
					value={formData.endDateInput}
					disabled={!isEditable}
					onChange={handleInputChange}
					/>
			</div>
		</ >
)
}

export default Form;