import { component$ } from "@builder.io/qwik";
import { EducationItem } from "./partials/education-item";

export const Educations = component$(() => {
	let educations = [
		{
			name: "SMKN 1 Jenangan",
			major: "Software Engineering",
			from: "July 2019",
			to: "June 2022",
		},
		{
			name: "MTsN 2 Ponorogo",
			major: "",
			from: "July 2016",
			to: "June 2019",
		},
		{
			name: "SDN 1 Nglayang",
			major: "",
			from: "July 2010",
			to: "June 2016",
		},
	];
	return (
		<>
			<div class="max-w-lg mx-auto">
				<h2 class="my-10 text-center">Education Background.</h2>

				{educations.map((education) => {
					return <EducationItem {...education} />;
				})}
			</div>
		</>
	);
});