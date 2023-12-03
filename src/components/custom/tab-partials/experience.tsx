import { component$ } from "@builder.io/qwik";
import { ExperienceItem } from "./partials/experience-item";

export const Experience = component$(() => {
	const experiences = [
		{
			title: "Backend Developer",
			company: "PT. Seje Digital Utama",
			start: "October 2023",
			end: "Present",
			description: [
				"Make and optimized api for web app.",
				"Integrate with hue huy api using laravel.",
				"Write and contribute to data manipulation in web app",
				"Coordinate with frontend developer to make a better api as requirement",
				"Write clean and readble code in php laravel.",
			],
		},
		{
			title: "Application developer officer",
			company: "PT. Anomali Trans Teknologi",
			start: "June 2023",
			end: "Present",
			description: [
				"Developed and optimized sales algorithms features to enhance decision-making.",
				"Designed and implemented efficient and scalable database schemas to support the web application's data requirements.",
				"Wrote complex SQL queries to filter, retrieve, create, and update data in PostgreSQL databases.",
				"Built responsive and user-friendly web applications using Laravel, Bootstrap, jQuery, Tailwindcss and other front-end technologies.",
				"Implemented CRUD operations and backend logic for data manipulation, ensuring data integrity and security.",
				"Conducted thorough testing and debugging to ensure the web application's functionality was error-free.",
				"Collaborated with cross-functional teams, including designers and product managers, to understand requirements and deliver effective solutions.",
				"Actively explored and learned about the Mendix low-code platform to broaden technical expertise.",
			],
		},
		{
			title: "Freelance Laravel Developer",
			company: "Intive Studio",
			start: "June 2023",
			end: "Present",
			description: [
				"work as Laravel Fullstack developer, work with teams as a support developer, developing web app like ERP system.",
				"Work as Fullstack Laravel developer, work as teams, develop custom EPR web app",
				"Design database and make database for ERP app",
				"Find, debug, analyze code. Make Some Feature or modules in ERP app",
				"help other teams developer solve some complex algorithm in ERP app",
				"Review, analyze, rewrite (fixing issue or bug¿ code from other developer for merging or combine code",
				"Handle Purchase, Sales, Delivery, Invoice, Warehouse, and Master data in ERP app, and help some of features in finance modules, Human Resources modules.",
			],
		},
		{
			title: "Web Application Developer",
			company: "Intive Studio",
			start: "July 2022",
			end: "June 2023",
			description: [
				"work as Laravel Fullstack developer, work with teams as a core or support developer, developing web app like ERP system. handling some transaction algorithm with multi currency,",
				"Work as Fullstack Laravel developer, work as teams, develop custom EPR web app from scratch ",
				"Design database and make database for ERP app",
				"Find, debug, analyze code. Make Some Feature or modules in ERP app",
				"help other teams developer solve some complex algorithm in ERP app",
				"Review, analyze, rewrite (fixing issue or bug¿ code from other developer for merging or combine code",
				"Handle Purchase, Sales, Delivery, Invoice, Warehouse, and Master data in ERP app, and help some of features in finance modules, Human Resources modules.",
			],
		},
		{
			title: "Backend Developer",
			company: "Seje Digital",
			start: "March 2022",
			end: "August 2022",
			description: [
				"Correct errors by making appropriate changes and rechecking the program to ensure that the desired results are produced.",
				"Conduct trial runs of programs and software applications to be sure they will produce the desired information and that the instructions are correct.",
				"Develop an API that consume from third party API using Larave",
				"Write, analyze, review, and rewrite programs, using workflow chart and diagram, and applying knowledge of computer capabilities, subject matter, and symbolic logic.",
				"Develop an frontend pages using Next.js and TailwindCss",
			],
		},
		{
			title: "Software Engineer Internship",
			company: "Pt. Promedia Citra Informatindo",
			start: "January 2021",
			end: "June 2021",
			description: [
				"Modify existing software to correct errors, or to upgrade interfaces and improve performance.",
				"Write or contribute to instructions or manuals to guide end users. Prepare detailed workflow charts and diagrams that describe input, output, and logical operation, and convert them into a series of instructions coded in a computer language.",
				"Make an android app using java",
				"Make an API for mobile app",
				"Make an web app using yii framework and Laravel",
			],
		},
	];

	return (
		<div class="max-w-lg mx-auto">
			<h2 class="text-center my-10">Professional Experiences</h2>
			{experiences.map((experience, experienceIndex) => {
				return (
					<ExperienceItem
						title={experience.title}
						company={experience.company}
						start={experience.start}
						end={experience.end}
						description={experience.description}
					/>
				);
			})}
		</div>
	);
});
