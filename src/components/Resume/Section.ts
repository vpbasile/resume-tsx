import * as React from "react";
// import interfaceDefs from './interfaceDefs';

export default function section(props: 
	{ id: string; title: any; type: any; content: any; }): { sectionID: string; } {
	// <> Load the props
	const sectionID = "section-" + props.id;
	const sectionTitle = props.title;
	const sectionType = props.type;
	const sectionContent = props.content;

	// <> Render the section
	return (
		<div id= { sectionID } className = "section" >
			<h2>{ sectionTitle } < /h2>
	{/* {subtitles(data.subtitles)} */ }
	<div className={ sectionType }>
		{ sectionContent }
		< /div>
		< /div>
	)
}