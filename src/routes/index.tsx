import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ThemeToggle, getCookie } from "../components/custom/dark-mode-toggle";
import { Hero } from "~/components/custom/hero";
import { Tab } from "~/components/custom/tab";

export default component$(() => {
	useVisibleTask$(async () => {
		const themeModeValue = await getCookie();
		document.documentElement.classList.add(`${themeModeValue}`);
	});

	return (
		<>
			<ThemeToggle />
			<Hero />
			<Tab />
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
