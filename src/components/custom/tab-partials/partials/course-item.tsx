import { component$ } from "@builder.io/qwik";

interface CourseItemProps {
	title: string;
	place: string;
}

export const CourseItem = component$((props: CourseItemProps) => {
	return (
		<>
			<div class="my-4">
				<div>
					<div class="flex gap-x-3">
						<div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
							<div class="relative z-10 w-7 h-7 flex justify-center items-center">
								<div class="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
							</div>
						</div>
						<div class="grow pt-0.5 pb-8">
							<h3 class="flex gap-x-1.5">
								<svg
									class="flex-shrink-0 w-4 h-4 mt-1"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
									<polyline points="14 2 14 8 20 8" />
									<line x1="16" x2="8" y1="13" y2="13" />
									<line x1="16" x2="8" y1="17" y2="17" />
									<line x1="10" x2="8" y1="9" y2="9" />
								</svg>
								{props.title}
							</h3>
							<p class="mt-1 text-md text-slate-700 dark:text-navy-200 font-semibold">
								{props.place}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
