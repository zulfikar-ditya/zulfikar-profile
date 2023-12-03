import { component$ } from "@builder.io/qwik";
import ImgProfile from "~/media/profile.png?jsx";
import {
	AlignCenterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "qwik-feather-icons";

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
					<div class="text-center lg:text-left lg:flex lg:justify-items-center lg:flex-col lg:max-w-lg">
						<h1>Zulfikar Ditya A.</h1>

						<h2 class="font-semibold tracking-wider text-2xl text-slate-700 dark:text-navy-200">
							Web Development Enthusiast.
						</h2>

						<div class="flex flex-row justify-center lg:justify-start  gap-4 mt-5">
							<div class="">
								<a
									href="https://www.instagram.com/zulfikar.ditya/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p class="text-white dark:hover:border dark:hover:border-orange-500 bg-gradient-to-tr from-orange-500 to-violet-500 p-4 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-rose-500">
										<InstagramIcon />
									</p>
								</a>
							</div>
							<div class="">
								<a
									href="https://www.linkedin.com/in/zulfikar-ditya/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p class="text-white dark:hover:border dark:hover:border-sky-500 bg-gradient-to-tr from-sky-500 to-blue-500 p-4 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-sky-500">
										<LinkedinIcon />
									</p>
								</a>
							</div>
							<div class="">
								<a
									href="https://github.com/zulfikar-ditya"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p class="text-white dark:hover:border dark:hover:border-gray-500 bg-gradient-to-tr from-gray-500 to-slate-900 p-4 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-gray-400">
										<GithubIcon />
									</p>
								</a>
							</div>
							<div class="">
								<a
									href="https://www.figma.com/file/RBauCT8RJqwwsziRpzruD9/Resume?type=design&node-id=0%3A1&mode=design&t=ZnmNRKePXPde3dfp-1"
									target="_blank"
									rel="noopener noreferrer"
									title="Resume"
								>
									<p class="text-white dark:hover:border dark:hover:border-teal-500 bg-gradient-to-tr from-teal-500 to-green-500 hover:bg-white p-4 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-teal-500">
										<AlignCenterIcon />
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
});
