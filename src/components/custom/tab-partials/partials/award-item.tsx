import { component$ } from "@builder.io/qwik";
import { StarIcon } from "qwik-feather-icons";

interface AwardsItemProps {
	title: string;
	year: string;
	description: string;
}

export const AwardsItem = component$((props: AwardsItemProps) => {
	return (
		<>
			<li class="mb-10 ml-6">
				<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-yellow-400 dark:bg-yellow-400">
					<StarIcon class="dark:fill-white" />
				</span>
				<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					{props.title}
				</h3>
				<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
					{props.year}
				</time>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					{props.description}
				</p>
			</li>
		</>
	);
});
