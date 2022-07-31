import * as React from "react";
// import "./bootstrap-grid.css";
import "./bootstrap.min.css";
import "./resume.css"
// import "./resumeData.ts";
// import './interfaceDefs';

export default function Resume() {

	// <> Define the data structures for the resume
	interface sectionContents {
		id: string,
		title: string,
		// subtitles: null | string[],
		type: "list" | "jobs-list" | "paragraph",
		content: React.ReactNode
	}

	interface employmentData {
		id: string,
		employer: string,
		positions: positionData[]
	}

	interface positionData {
		positionTitle: string,
		timePeriod: string,
		accomplishments: string[]
	}

	let personData = { name: "Vincent Basile", email: "vpbphone@gmail.com", phone: "724.984.4390", headline: `Proven Leadership, Complex Problem-solving, Client-Focused Relationship Building` };
	let sidebar: sectionContents[] = [
		{
			id: "001", title: "Certifications", type: "list", content: parseList(["Prelude", "Eligibility", "Grand Central", "MyChart", "ADT Clarity Data Model"
			])
		},
		{
			id: "002", title: "Epic Expertise", type: "list", content: parseList([
				"Benefit Filing",
				"Plan Mapping",
				"MyChart Estimate Queries",
				"Prelude-Resolute Integration",
				"Label Design",
				"Printing",
				"Bed Planning",
				"Capacity Management", "Transfer Center", "Technical Troubleshooting", "Ticketing Systems", "Technical Training & Mentoring", "Integrated Build", "Upgrades and Installs", "Data Imports", "Coding", "Dashboards & Reporting"
			])
		},
		{
			id: "003", title: "Epic Organizations", type: "list", content: parseList([
				"Kaiser Permanente",
				"UC Davis Health",
				`Lucile Packard Children's Hospital`,
				`Beaumont Health`,
				`Enloe Medical Center`,
				`Bryan Health`,
				`Providence Health`,
				`University of Utah Health`,
				`Conemaugh Health`,
				`The Christ Hospital`])
		},
	]
	let employmentList: employmentData[] = [
		{
			id: "004", employer: "Olive AI", positions: [{
				positionTitle: "Technical Project Manager", timePeriod: "02/2022-Present", accomplishments: [
					`Initiated a culture of documentation by creating the team's first Confluence wiki.`,
					`Led customers through the implementation of our Prior Authorization product by planning
					a technical implementation to meet the needs of operational stakeholders while
					representing the customers' needs to our engineering team. Bridged the knowledge gap
					between IT and operational teams by creating customer-facing presentation materials and
					scripts for each phase of the implementation process.`
				]
			}]
		},
		{
			id: "003", employer: "Epic Systems", positions: [
				{
					positionTitle: "Technical Solutions Engineer", timePeriod: "6.5 years", accomplishments: [`Built and sustained strong, long-term relationships, meeting with operational leadership, recommending best practices, and taking responsibility for customer success.`, `Utilized technical knowledge to troubleshoot and resolve technical issues in Epic applications for insurance eligibility verification, patient account assignment, and bed logistics.`, `Developed and taught classes for a little-understood functionality, including comprehensive documentation suited to engineers, clients, and executives.`, `Identified key issues leading to revenue loss and user dissatisfaction at Bryan Health. Guided client analysts through implementing preventative measures.`, `Met and exceeded Providence Health's needs through coding on-demand tools to translate
				data imports from third-party systems.`]
				},
				{ positionTitle: "Technical Coordinator", timePeriod: "3 years", accomplishments: [`Managed team of applications strategy and technical solutions staff to drive business continuity and system responsiveness. Facilitated strong inter-organizational communication, delegated workload, and gave regular personnel evaluations.`, `Built and sustained strong relationships with clinical, technical, and executive leadership to drive strong communication and critical decision making.`, `Successfully coordinated software upgrades and monthly install of custom code packages including on-site and remote support, troubleshooting of issues and concerns, and guidance on team bandwidth to build and maintain functionality.`, `Drove reporting to senior leadership on staff performance and customer service to streamline operations and keep communications fluid and relevant.`, `Worked directly with clinical leadership to evaluate enhancements based on needs and priorities`] },
			]
		},
	];
	let bodySections: sectionContents[] = [
		{
			id: "004", title: "", type: "list", content: [
				`Analytical, innovative, and motivated Technical Consultant with 6.5 years experience supporting
			software release cycles and twice that time spent as a creative collaborator in fast-paced and
			challenging environments. Diverse analytical and problem-solving skills, including experience in
			software development, data analysis, user experience support, and report design. Extensive
			experience optimizing workflow efficiencies and reducing costs. Strong client-focused
			relationship-building skills and a passion for knowledge sharing via well-written documentation.`
			]
		},
		{ id: "professional-experience", title: "Professional Experience", type: "list", content: employmentHistory() }
	]
	let footerSections: sectionContents[] = [
		{ id: "006", title: "Education", type: "list", content: educationHistory() }
	]

	function section(data: sectionContents) {
		// <> Render the section
		return (
			<div id={"section-" + data.id} className="section">
				{data.title && <h2>{data.title}</h2>}
				<div className={data.type}>
					{data.content}
				</div>
			</div>
		)
	}

	function parseList(list: string[]) { return (<ul>{list.map((item) => { return (<li>{item}</li>) })}</ul>) }

	function employmentHistory() {
		return (
			employmentList.map(eachEmployment => {
				return (<div className="employment">
					{eachEmployment.positions.map(eachPosition => {
						return (
							<div className="position" >
								<h3 className="list-collapse">{eachEmployment.employer} </h3>
								<h4>{eachPosition.positionTitle} ({eachPosition.timePeriod})</h4>
								{/* <h5> {eachPosition.timePeriod} </h5> */}
								<ul className="list-collapse">{eachPosition.accomplishments.map(eachAccomplishment => {
									return (<li>{eachAccomplishment} </li>)
								})}
								</ul>
							</div>)
					})
					}
				</div>)
			})
		)
	}

	function educationHistory() {
		return (<div id="educationDetail" className="row">
			<div className="">
				<h3>Master of Fine Arts in Theatre Design (Lighting and Sound)</h3>
				The University of Memphis
			</div>
			<div className="">
				<h3>Bachelor of Arts in Music Theory</h3>
				Youngstown State University
			</div>
		</div>)
	}

	// <> Render the function
	return (
		<div id="resume-whole" className="resume container">
			<div id="headerRow" className="row">
				<div className="col">
					<h1>{personData.name}</h1>
				</div>
				<div className="col-5 align-right">
					<h2 className="remove-borders">{personData.email}</h2>
					<h2 className="remove-borders">{personData.phone}</h2>
				</div>
				<div id="headline-div" className="col-12 text-center">
					<h2 id="headline">{personData.headline}</h2>
				</div>
			</div>
			<div id="middleRow" className="row">
				<div id='resume-sidebar' className='col-3'>
					{sidebar.map(eachSection => { return section(eachSection) })}
				</div>
				<div id='resume-body' className='col-9'>
					{bodySections.map(eachSection => { return section(eachSection) })}
				</div>
			</div>
			<div id="footerRow" className="row">
				{footerSections.map(eachSection => { return section(eachSection) })}
			</div>
		</div >
	)

}