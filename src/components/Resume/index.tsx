import "./bootstrap-grid.css";
import * as React from "react";
import "./resume.css"

export default function Resume() {

	let fakeVar = parseList(["Bryan Health", "Enloe Health", "Kaiser Permanente"]);

	let personData = { name: "James Namington", email: "james.namington@email.com", phone: "234.345.3455" }
	// let sampleSection: sectionContents = 
	let sidebar: sectionContents[] = [
		{ id: "001", title: "Certifications", type: "list", content: parseList(["Bryan Health", "Enloe Health", "Kaiser Permanente"]) },
		{ id: "002", title: "Epic Expertise", type: "list", content: [] },
		{ id: "003", title: "Epic Organizations", type: "list", content: parseList(["Bryan Health", "Enloe Health", "Kaiser Permanente"]) },
	]
	let employmentList: employmentData[] = [
		{ id: "004", employer: "Olive AI", positions: [{ positionTitle: "Technical Project Manager", timePeriod: "02/2022-Present", accomplishments: ["Created the company's first documentation.", "Created the company's first documentation."] }] },
		{ id: "003", employer: "Epic Systems", positions: [{ positionTitle: "Technical Coordinator", timePeriod: "02/2016-01/2019", accomplishments: ["Guided the customer organization through three years of upgrades.", "Kept them happy."] }] },
	];
	let resumeSections: sectionContents[] = [
		{ id: "004", title: "Professional Experience", type: "list", content: employmentHistory() },
		{ id: "005", title: "Education", type: "list", content: (<h2>Incomplete</h2>) },
	]

	return (
		<div id="resume-whole" className="resume container">
			<div id="headerRow" className="row">
				<div className="col-8">
					<h1>{personData.name}</h1>
				</div>
				<div className="col-4">
					<h2>{personData.email}</h2>
					<h2>{personData.phone}</h2>
				</div>
			</div>
			<div id="middleRow" className="row">
				<div id='resume-sidebar' className='col-3'>
					{sidebar.map(eachSection => { return section(eachSection) })}
				</div>
				<div id='resume-body' className='col-8'>
					{resumeSections.map(eachSection => { return section(eachSection) })}
				</div>
			</div>
			<div id="footerRow" className="row"></div>
		</div >
	)

	function section(data: sectionContents) {
		// <> Render the section
		return (
			<div id={"section-" + data.id} className="section">
				<h2>{data.title}</h2>
				{/* {subtitles(data.subtitles)} */}
				<div className={data.type}>
					{data.content}
				</div>
			</div>
		)
	}

	function parseList(list: string[]) {
		return (<ul>{list.map((item) => { return (<li>{item}</li>) })}</ul>)
	}

	function subtitles(subtitleContents: null | string[]) {
		if (subtitleContents === null) { return null }
		else { return <h2 className="subtitle-1">{subtitleContents}</h2>; }
	}

	function employmentHistory() {
		return (
			employmentList.map(eachEmployment => {
				return (<div className="job">
					<h3>{eachEmployment.employer}</h3>
					{eachEmployment.positions.map(eachPosition => {
						return (<div className="position">
							<h4>{eachPosition.positionTitle}</h4>
							<h5>{eachPosition.timePeriod}</h5>
							<ul>
								{eachPosition.accomplishments.map(
									eachAccomplishment => { return (<li>{eachAccomplishment}</li>) })}
							</ul>
						</div>)
					})}
				</div>)
			})
		)
	}

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

}