import { component$ } from "@builder.io/qwik";
import ImgProfile from "~/media/profile.png?jsx";
import { IconSocial } from "./iconSocial";

export const Hero = component$(() => {
	return (
		<>
			<section id="main-profile" class="container mx-auto mt-10 p-4">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div class="flex justify-center items-center lg:justify-end w-full lg:w-10/12">
						<ImgProfile
							class="w-64 rounded-full shadow-md border-8 border-teal-500 dark:border-teal-600 hover:-translate-y-1 hover:scale-95 dark:shadow-navy-700 hover:shadow-teal-500 hover:dark:shadow-teal-800 hover:shadow-2xl"
							loading="lazy"
							alt="Zulfikar Ditya A."
						/>
					</div>
					<div class="text-center lg:text-left lg:flex lg:justify-items-center lg:justify-center lg:flex-col lg:max-w-lg">
						<h1>Zulfikar Ditya A.</h1>

						<h2 class="font-semibold tracking-wider text-2xl text-slate-700 dark:text-navy-200">
							Web Development Enthusiast.
						</h2>

						<IconSocial />
					</div>
				</div>
			</section>
		</>
	);
});
