import { component$ } from "@builder.io/qwik";
import { ExperienceItem } from "./partials/experience-item";

export const Experience = component$(() => {
	const experiences = [
		{
			title: "Backend Developer",
			company: "SUPERFUTUREKOMPANY",
			start: "September 2024",
			end: "Present",
			description: [
				"Designed and implemented RESTful APIs using Laravel and NestJS frameworks to power various frontend applications.",
				"Utilized industry-standard practices like HTTP methods, status codes, and JSON data formats to ensure API consistency and efficiency.",
				"Implemented robust authentication and authorization mechanisms to secure API endpoints and protect sensitive user data.",
				"Collaborated with the database team to design efficient database schemas and optimize query performance.",
				"Leveraged SQL and ORM techniques to effectively interact with databases and retrieve data. Implemented caching strategies and indexing techniques to improve application response times and scalability.",
				"Integrated HTML, CSS, and JavaScript components into Laravel Blade templates to create dynamic and responsive user interfaces.",
				"Collaborated closely with frontend developers to ensure seamless integration and smooth data transfer between frontend and backend components.",
				"Utilized Laravel's Http and Guzzle libraries to integrate with various third-party APIs, including. Microsoft, WhatsApp, Google",
				"Implemented error handling and retry mechanisms to ensure reliable and resilient API integrations.",
				"Adhered to coding standards and best practices to write clean, maintainable, and efficient code.",
				"Conducted thorough code reviews and unit testing to identify and fix bugs early in the development process.",
				"Implemented robust logging and monitoring systems to track application performance and troubleshoot issues.",
			],
		},
		{
			title: "Freelance Web Developer",
			company: "Self Employed",
			start: "May 2024",
			end: "Present",
			description: [
				"Planning & Requirements: Actively listen to client goals, target audience, functionalities, and success metrics. Document everything. Define project scope: core features, potential enhancements, external dependencies. Design wireframes/prototypes for UI/UX, incorporating iterative client feedback.",
				"Database Design: Use an RDBMS (MySQL/PostgreSQL) with database normalization principles. Create an ERD to visualize table relationships. Implement migrations and seeders.",
				"Code Pattern & Structure: Leverage Laravel's MVC architecture for code organization and Eloquent for database interactions. Manage dependencies (Laravel, packages) effectively with Composer. Write unit tests using PHPUnit to ensure code quality. Design RESTful APIs if needed for integration",
				"Frontend Development (Optional): Employ Tailwind CSS for rapid, responsive UIs. Consider Alpine.js for lightweight interactivity. Utilize Livewire (optional) for complex dynamic UIs and server-side rendering. Use advanced JavaScript frameworks (React, Vue.js, Angular) for intricate interactions. Implement code splitting and bundling for optimized performance.",
				"Team Management & Workflow: Utilize Git version control for code collaboration, conflict resolution, and change tracking. Leverage project management tools (Trello, Jira, Asana) for tasks, assigning roles, tracking progress, and managing milestones. Consider employing Agile methodologies (Scrum, Kanban) for iterative development.",
				"Security Considerations: Implement robust authentication and authorization using Laravel features. Validate and sanitize user input rigorously to prevent vulnerabilities. Apply appropriate security headers to mitigate common web application risks.",
				"Deployment & Testing: Establish separate development, staging, and production environments. Consider integrating CI/CD pipelines for automated testing and deployment.",
			],
		},
		{
			title: "Mendix Developer",
			company: "PT. Anomali Trans Teknologi",
			start: "Sept 2023",
			end: "Sept 2024",
			description: [
				"Work as Mendix developer",
				"Bulding app for PT KAI Indonesia",
				"Working as core developer for mendix project"
			],
		},
		{
			title: "Application developer officer",
			company: "PT. Anomali Trans Teknologi",
			start: "June 2023",
			end: "August 2024",
			description: [
				"Full-Stack Web Development Expertise: Building Scalable and User-Centric Applications",
				"Database Architect & Data Master: Designed scalable database schemas using PostgreSQL, ensuring efficient data storage and retrieval for growing web applications. Aced writing complex SQL queries for seamless data manipulation, empowering various functionalities.",
				"Building Responsive Web Apps with Laravel: Leveraged Laravel's MVC architecture and built-in features to construct responsive and user-friendly web applications. This ensured clean code organization, efficient data interactions using Eloquent ORM, and robust security measures.",
				"Full-Stack Development Prowess: Implemented CRUD operations and meticulously crafted backend logic using Laravel. This focus on data integrity and security safeguards sensitive information across the application.",
				"Cross-Functional Collaboration: Thrived in collaborative environments, working closely with designers and product managers to translate user needs into technical requirements. This teamwork ensured a user-centric experience that met all stakeholders' objectives.",
				"Continuous Learning: Actively explored the Mendix low-code platform and Asp.NET framework, expanding my knowledge base and adaptability to evolving technologies. Further solidified my understanding by developing a functional web application with ASP.NET.",
			],
		},
		{
			title: "Backend Developer",
			company: "PT. Seje Digital Utama",
			start: "October 2023",
			end: "May 2023",
			description: [
				"Backend Development & Integration Mastermind: Craft secure and optimized APIs for seamless data exchange between web apps and external services like Hue Huy & Aku Hadir APIs. Utilize Laravel's HTTP clients and data mapping to ensure efficient interaction and data integrity.",
				"Laravel Integration Champion: Leverage Laravel's power for flawless third-party API integrations. Implement robust error handling and security measures to safeguard against failures and breaches.",
				"Data Manipulation Maestro: Write clean, maintainable code using Laravel's Eloquent ORM for efficient CRUD operations and business logic implementation. Prioritize data validation and sanitization to prevent vulnerabilities.",
				"Collaborative API Architect: Partner with front-end developers to design user-friendly APIs. Create comprehensive API documentation, employ versioning for smooth updates, and conduct collaborative testing with feedback loops to optimize API usability.",
				"Clean & Readable Code Advocate: Champion clear, well-commented, and maintainable PHP and Laravel code. This fosters collaboration, minimizes errors, and ensures long-term application stability.",
			],
		},
		{
			title: "Freelance Laravel Developer",
			company: "Intive Studio",
			start: "June 2023",
			end: "March 2024",
			description: [
				"ERP Systems Architect with Laravel: Played a pivotal role as a core developer in building custom ERP web applications using Laravel. This involved designing efficient database structures, implementing complex business logic, and crafting user-friendly interfaces.",
				"Master of Multi-Currency Transactions: Developed robust algorithms for handling multi-currency transactions within the ERP system, ensuring accurate and reliable financial data management.",
				"Collaborative Full-Stack Expertise: Thrived in team environments, working seamlessly with front-end developers to deliver a cohesive user experience. Contributed to all aspects of the development lifecycle, from initial planning to deployment.",
				"Problem-Solving Champion: Possess exceptional debugging and code analysis skills, effectively identifying and resolving complex issues within the ERP application.",
				"Collaborative Code Guru: Actively assisted other developers by tackling intricate algorithms and contributing innovative solutions to optimize the ERP system.",
				"Code Review and Refinement Leader: Championed code quality through rigorous code reviews. Reviewed, analyzed, and refactored code from other developers, ensuring maintainability and adherence to best practices.",
				"ERP Module Expert: Successfully handled core ERP functionalities like Purchase, Sales, Delivery, Invoice, Warehouse, and Master Data. Additionally, provided support for Finance and Human Resources modules, demonstrating a comprehensive understanding of ERP systems.",
				"Continuous Improvement: Committed to staying abreast of the latest Laravel advancements and best practices, continuously seeking new ways to enhance my development skills and contribute effectively to future web application projects.",
			],
		},
		{
			title: "Web Application Developer",
			company: "Intive Studio",
			start: "July 2022",
			end: "June 2023",
			description: [
				"ERP Systems Architect with Laravel: Played a pivotal role as a core developer in building custom ERP web applications using Laravel. This involved designing efficient database structures, implementing complex business logic, and crafting user-friendly interfaces.",
				"Master of Multi-Currency Transactions: Developed robust algorithms for handling multi-currency transactions within the ERP system, ensuring accurate and reliable financial data management.",
				"Collaborative Full-Stack Expertise: Thrived in team environments, working seamlessly with front-end developers to deliver a cohesive user experience. Contributed to all aspects of the development lifecycle, from initial planning to deployment.",
				"Problem-Solving Champion: Possess exceptional debugging and code analysis skills, effectively identifying and resolving complex issues within the ERP application.",
				"Collaborative Code Guru: Actively assisted other developers by tackling intricate algorithms and contributing innovative solutions to optimize the ERP system.",
				"Code Review and Refinement Leader: Championed code quality through rigorous code reviews. Reviewed, analyzed, and refactored code from other developers, ensuring maintainability and adherence to best practices.",
				"ERP Module Expert: Successfully handled core ERP functionalities like Purchase, Sales, Delivery, Invoice, Warehouse, and Master Data. Additionally, provided support for Finance and Human Resources modules, demonstrating a comprehensive understanding of ERP systems.",
				"Continuous Improvement: Committed to staying abreast of the latest Laravel advancements and best practices, continuously seeking new ways to enhance my development skills and contribute effectively to future web application projects.",
			],
		},
		{
			title: "Backend Developer",
			company: "Seje Digital",
			start: "March 2022",
			end: "August 2022",
			description: [
				"Quality Assurance Champion: Possess a meticulous eye for detail, adept at identifying and correcting errors in code. Meticulously recheck programs after making changes to ensure desired results and application stability.",
				"Testing & Validation Expert: Conduct thorough test runs for programs and applications to verify they produce accurate information and adhere to defined instructions. This proactive approach minimizes potential issues in production environments.",
				"Third-Party API Integration Maestro: Leverage Laravel's capabilities to develop APIs that seamlessly consume data from external sources. This fosters efficient data exchange and expands application functionality.",
				"Logic & Workflow Architect: Utilize workflow charts and diagrams to meticulously plan, analyze, review, and rewrite programs. This structured approach combines knowledge of computer capabilities, subject matter expertise, and symbolic logic to ensure clear, efficient, and maintainable code.",
				"Next.js & Tailwind CSS Master: Construct visually stunning and highly responsive user interfaces (UIs) by combining the power of Next.js, a modern React framework, and Tailwind CSS, a utility-first CSS framework. This approach delivers exceptional user experiences.",
				"Continuous Improvement: Actively stay informed about the latest advancements in web development frameworks and technologies. This commitment to lifelong learning ensures the delivery of cutting-edge web applications.",
			],
		},
		{
			title: "Software Engineer Internship",
			company: "Pt. Promedia Citra Informatindo",
			start: "January 2021",
			end: "June 2021",
			description: [
				"Software Refinement Expert: Possess a knack for identifying and correcting errors in existing software. Contribute to interface upgrades and performance improvements, ensuring user satisfaction and optimal system operation.",
				"Technical Documentation Champion: Clearly communicate complex technical concepts by writing or contributing to user manuals and guides. This dedication to user-friendliness empowers end-users to efficiently leverage software applications.",
				"Workflow Architect: Meticulously translate detailed workflow charts and diagrams, which define input, output, and logical operations, into well-structured, maintainable code. This meticulous approach ensures smooth program execution.",
				"Cross-Platform Development Powerhouse: Adept in building Android applications using Java, catering to the mobile device market. Additionally, proficient in creating APIs specifically tailored for mobile app integration.",
				"Framework-Agnostic Developer: Possess a versatile skillset, capable of building web applications using both Laravel and Yii frameworks. This adaptability allows me to select the most suitable framework based on project requirements.",
				"Continuous Expansion: Remain dedicated to expanding my knowledge base by actively learning and exploring new technologies. This commitment ensures continual skill development and adaptability to evolving project needs.",
			],
		},
	];

	return (
		<div class="max-w-lg mx-auto">
			<h2 class="text-center my-10">Professional Experiences</h2>
			{experiences.map((experience, experienceIndex) => {
				return (
					<ExperienceItem
						key={experienceIndex}
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
