import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ThemeToggle, getCookie } from "../components/custom/dark-mode-toggle";
import { Hero } from "~/components/custom/hero";
import { AboutMe } from "~/components/custom/tab-partials/about-me";
import { Experience } from "~/components/custom/tab-partials/experience";
import { Weapons } from "~/components/custom/tab-partials/weapons";
import { Educations } from "~/components/custom/tab-partials/education";
import { Awards } from "~/components/custom/tab-partials/Award";

export default component$(() => {
	useVisibleTask$(async () => {
		const themeModeValue = await getCookie();
		document.documentElement.classList.add(`${themeModeValue}`);
	});

	return (
		<>
			<ThemeToggle />

			<div class="mb-10">
				<Hero />
			</div>

			<div class="bg-slate-200 dark:bg-slate-700 pb-10 pt-5 px-8 md:px-0">
				<AboutMe />
			</div>

			<div class="px-8 md:px-0">
				<Experience />
			</div>

			<div class="bg-slate-200 dark:bg-slate-700 pt-5 pb-10 px-8 md:px-0">
				<Weapons />
			</div>

			<div class="px-8 md:px-0">
				<Educations />
			</div>

			<div class="bg-slate-200 dark:bg-slate-700 pt-5 pb-10 px-8 md:px-0">
				<Awards />
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title:
		"Zulfikar Ditya A - A Laravel Maestro: Crafting Elegant and Efficient Web Solutions.",
	meta: [
		{
			name: "description",
			content:
				"Zulfikar ditya A - A Laravel Maestro: Crafting Elegant and Efficient Web Solutions",
		},
		{
			name: "keywords",
			content:
				"Zulfikar Ditya, Web Development, Web developer, Backend Developer, Laravel Developer, Web App Developer.",
		},
		{
			name: "author",
			content: "Zulfikar Ditya A.",
		},
		{
			name: "theme-color",
			content: "#14b8a6",
		},
	],
};
