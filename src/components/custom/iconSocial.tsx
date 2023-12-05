import { component$ } from "@builder.io/qwik";
import {
	AlignCenterIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "qwik-feather-icons";

export const IconSocial = component$(() => {
	return (
		<>
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
		</>
	);
});
