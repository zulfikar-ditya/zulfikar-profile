import { component$ } from "@builder.io/qwik";
import { CourseItem } from "./partials/course-item";

export const Courses = component$(() => {
	const courses = [
		{
			title:
				"Build App Clones with ReactJS Clever Programmer - Clever Programmer",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "C++ Tutorial for Beginners - Full Course",
			place: "SMKN 1 Jenangan",
		},
		{
			title:
				"JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "Laravel 8 tutorial - Code Step by Step",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "Python Django Tutorial - Build a TODO List App for Beginners",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "Python Tutorial for Beginners - Full Course in 11 Hours [2020]",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]",
			place: "SMKN 1 Jenangan",
		},
		{
			title:
				"ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022] - Clever Programmer",
			place: "SMKN 1 Jenangan",
		},
		{
			title: "ASP.NET Core MVC 2022 .NET 6 - Teddy Smith",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title:
				"Build a Backend Web Server + RSS Aggregator | Full Golang Tutorial",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "C# Tutorial - Full Course for Beginners",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Go Programming – Golang Course with Bonus Projects",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Introduction to ASP.NET Core MVC (.NET 8) - DotNetMastery",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Learn Go Programming - Golang Tutorial for Beginners",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Become a Rapid Developer",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Build Your App Using a Template",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Building an Event App Usig Microflows",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Contrains Your Data Using XPath",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Create an App with Advanced Page Building",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Difference Between UX, Ui, and Frontend",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Expand Your Domai Modeling Skills",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Going Mobile",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Importing and Exporting Your Data",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Style your App using Sass",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Understand the Value of User Experience",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix Unlocking True Collaboration",
			place: "PT. Anomali Trans Teknologi",
		},
		{
			title: "Mendix crash course",
			place: "PT. Anomali Trans Teknologi",
		},
	];

	return (
		<div class="max-w-lg mx-auto">
			<h2 class="text-center my-10">Course</h2>
			{courses.map((course, coursesIndex) => {
				return (
					<CourseItem
						key={coursesIndex}
						title={course.title}
						place={course.place}
					/>
				);
			})}
		</div>
	);
});
