import { component$ } from "@builder.io/qwik";

export const AboutMe = component$(() => {
	return (
		<>
			<div class="text-center">
				<h2 class="my-10">About Me</h2>
				<div class="text-slate-700 dark:text-navy-200 my-4">
					<p class="mt-4 text-base max-w-md mx-auto">
						Highly skilled Laravel Developer with a strong background in web
						application development and a passion for creating efficient and
						innovative solutions. Experienced in handling complex transaction
						algorithms and designing robust databases. Proven ability to work
						collaboratively in teams and deliver high-quality code. Committed to
						continuous learning and staying up-to-date with the latest
						technologies.
					</p>
				</div>
			</div>
		</>
	);
});
