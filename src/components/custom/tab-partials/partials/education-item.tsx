import { component$ } from "@builder.io/qwik";

interface EducationItemProps {
    from: string;
    to: string;
    name: string;
    major?: string;
}

export const EducationItem = component$((props: EducationItemProps) => {
	return (
		<>
			<li class="mb-10 ml-4">
				<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-teal-500">
					{props.from} - {props.to}
				</time>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					{props.name} {props.major ? `- ${props.major}` : ""}
				</h3>
			</li>
		</>
	);
});
