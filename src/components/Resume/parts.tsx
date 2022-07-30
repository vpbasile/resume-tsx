import { type } from "@testing-library/user-event/dist/type";
import * as React from "react";
import { Fragment } from "react";

export function section(data: sectionContents) {
	// <> Render the section
	return (
		<div id={"section-" + data.id} className="section">
			<h2>{data.title}</h2>
			{subtitles(data.subtitles)}
			<div className={data.type}>
				{data.content}
			</div>
		</div>
	)
}

function subtitles(subtitleContents: null | string[]) {
	if (subtitleContents[0] === null) { return null }
	else { return <h2 className="subtitle-1">{subtitleContents}</h2>; }
	// return (<Fragment>
	// 	<h2 className="subtitle-1">{subtitleContents[0]}</h2><h3 className="subtitle-2">{subtitleContents[1]}</h3>
	// </Fragment>
	// )
}

export interface sectionContents {
	id: string,
	title: string,
	subtitles: null | string[],
	type: "list" | "paragraph",
	content: string[]
}

// Section

// function sidebar() {
// 	let sidebarContents = sidebarData.map((section) => {
// 		return (
// 			<div className="sidebar-section">
// 				<h2>{section.title}</h2>
// 				<ul>
// 					{section.items.map((item) => {
// 						return (
// 							<li>
// 								<a href={item.link}>{item.text}</a>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	})
// 	return sidebarContents;
// }

// function body() {
// 	let bodyContents = mainBody.map((section) => {
// 		return (
// 			<div className="body-section">
// 				<h2>{section.title}</h2>
// 				<p>{section.text}</p>
// 			</div>
// 		);
// 	})
// 	return bodyContents;
// }