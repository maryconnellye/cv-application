import React from "react";


const Form = ({ formData, handleInputChange, handleSubmit }) => {

return(
	<form onSubmit={handleSubmit}>
		<h1>General Information</h1>
			<div className="general">
				<label htmlFor="name">Name:</label> 
					<input  
						id="name"
						type="text"
						name="name"
						defaultValue={formData.name}
						onChange={handleInputChange}
		
					/>
				<label htmlFor="email">Email:</label>
					<input 
						id="email"
						type="email"
						placeholder="example@gmail.com"
						name="email"
						defaultValue={formData.email}
						onChange={handleInputChange}
					/>
				<label htmlFor="phone">Phone:</label>
					<input 
						id="phone"
						type="phone"
						placeholder="XXX-XXX-XXXX"
						name="phone"
						defaultValue={formData.phone}
						onChange={handleInputChange}
					/>
			</div>

	<h1>Educational Experience</h1>
		<div className="education">
			<label htmlFor="school">School Name:</label>
				<input 
					id="school"
					type="text"
					name="school"
					defaultValue={formData.school}
					onChange={handleInputChange}
				/>
			<label htmlFor="study">Title of Study:</label>
				<input 
					id="study"
					type="text"
					name="study"
					defaultValue={formData.study}
					onChange={handleInputChange}
				/>
			<label htmlFor="studyStart">Date Started:</label>
				<input 
					id="studyStart"
					type="date"
					name="studyStart"
					defaultValue={formData.studyStart}
					onChange={handleInputChange}
				/>
			<label>Date of Graduation:</label>
				<input 
					id="graduation"
					type="date"
					name="graduation"
					defaultValue={formData.graduation}
					onChange={handleInputChange}
				/>

		</div>

	<h1>Practical Experience</h1>
		<div className="practicalExperience">
			<label htmlFor="company">Company Name:</label>
				<input 
					id="company"
					type="text"
					name="company"
					defaultValue={formData.company}
					onChange={handleInputChange}
				/>
			<label htmlFor="position">Position Title: </label>
				<input 
					id="position"
					type="text"
					name="position"
					defaultValue={formData.position}
					onChange={handleInputChange}
					/>
			<label htmlFor="responsibilities">Main Responsibilities:</label>
				<input 
					id="responsibilities"
					type="text"
					name="responsibilities"
					defaultValue={formData.responsibilities}
					onChange={handleInputChange}
					/>
			<label htmlFor="start">Date Started:</label>
				<input 
					id="start"
					type="date"
					name="start"
					defaultValue={formData.start}
					onChange={handleInputChange}
					/>
			<label htmlFor="end">End Date:</label>
				<input 
					id="end"
					type="date"
					name="end"
					defaultValue={formData.end}
					onChange={handleInputChange}
					/>
			</div>
		</form>
)
}

export default Form;