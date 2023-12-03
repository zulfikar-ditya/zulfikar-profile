import { component$ } from "@builder.io/qwik";
import { AwardsItem } from "./partials/award-item";

export const Awards = component$(() => {
	const awards = [
		{
			title: "2nd Position KKSI Smart School Field 2021",
			year: "2021",
			description:
				"Get position 2nd in KKSI Smart School Field 2021 with the theme of Smart School. Making web app using Laravel And Bootstrap, the app is about School management, it contains landing pages, student management, library management, etc",
		},
		{
			title: "3rd Position SAKKSI Smart School Field 2021",
			year: "2021",
			description:
				"Get position 3rd in SAKKSI Smart School Field 2021 with the theme of Smart School. we add some feature from KKSI app, and we make it more better, we add some feature like employee management, improving landing pages, todo app, etc.",
		},
		{
			title: "1st Position LKS Web Technology (Regional Level)",
			year: "2022",
			description:
				"Get 1st position in Competency Competition for Students (LKS) in the Field of Web Technology Working Area 4 East Java. I must make web app using Laravel and Bootstrap, the app is about Course Online, contains page for student, teacher, and admin.",
		},
		{
			title: "Rank 5 LKS Web Technology East Java (Province Level)",
			year: "2022",
			description:
				"Get rank 5ft in Competency Competition for Students (LKS) in the Field of Web Technology (Province of East Java). Make an App using laravel and React js, the app is about vaccination registration, contains page for user, user can booking ticket for vacination.",
		},
	];
	return (
		<>
			<div class="max-w-lg mx-auto">
				<h2 class="my-10 text-center">Awards.</h2>
				<ol class="relative border-l border-gray-200 dark:border-gray-700 ">
					{awards.map((award, awardIndex) => {
						return <AwardsItem key={awardIndex} {...award} />;
					})}
				</ol>
			</div>
		</>
	);
});
