import React from "react";
import Edit from "./edit";

const Preview = () => {
	return(
<>
	<div className="generalPreview">
	<h1>General Information</h1>
		<p>Name: {FormData.nameInput}</p>
		<p>Email: {FormData.emailInput}</p>
		<p>Phone: {FormData.phoneInput}</p>
	</div>
	<div className="educationPreview">
	<h1>Educational Experience</h1>
		<p>School Name: {FormData.schoolInput}</p>
		<p>Title of Study: {FormData.studyInput}</p>
		<p>Date Started: {FormData.studyDateInput}</p>
		<p>Date of Graduation: {FormData.graduationDateInput}</p>
	</div>
	<div className="practiceExperiencePreview">
	<h1>Educational Experience</h1>
		<p>Company Name: {FormData.companyInput}</p>
		<p>Position Title: {FormData.positionInput}</p>
		<p>Main Responsibilities: {FormData.responsibilitiesInput}</p>
		<p>Date Started: {FormData.startDateInput}</p>
		<p>Date of Graduation: {FormData.endDateInput}</p>
	</div>
<Edit />
</>

 )
}

export default Preview;