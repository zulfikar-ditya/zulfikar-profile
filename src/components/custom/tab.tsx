import { component$, useSignal } from "@builder.io/qwik";
import { AboutMe } from "./tab-partials/about-me";
import { Experience } from "./tab-partials/experience";
import { Weapons } from "./tab-partials/weapons";
import { Educations } from "./tab-partials/education";
import { Awards } from "./tab-partials/Award";

export const Tab = component$(() => {
	const TabActive = useSignal("about");
	return (
		<>
			<section class=" pt-20" id="content-section">
				{/* TAB */}
				<div class="">
					<div class="is-scrollbar-hidden flex">
						<div class="max-w-xxl mx-auto ">
							<div class="">
								<div class="tabs-list flex flex-row flex-wrap lg:flex-nowrap gap-4">
									<button
										onClick$={() => (TabActive.value = "about")}
										class={`tab-btn block w-full ${
											TabActive.value === "about" ? "active" : ""
										}`}
									>
										About Me
									</button>
									<button
										onClick$={() => (TabActive.value = "experience")}
										class={`tab-btn block w-full ${
											TabActive.value === "experience" ? "active" : ""
										}`}
									>
										Experiences
									</button>
									<button
										onClick$={() => (TabActive.value = "weapons")}
										class={`tab-btn block w-full ${
											TabActive.value === "weapons" ? "active" : ""
										}`}
									>
										Weapons
									</button>
									<button
										onClick$={() => (TabActive.value = "education")}
										class={`tab-btn block w-full ${
											TabActive.value === "education" ? "active" : ""
										}`}
									>
										Educations
									</button>
									<button
										onClick$={() => (TabActive.value = "award")}
										class={`tab-btn block w-full ${
											TabActive.value === "award" ? "active" : ""
										}`}
									>
										Awards
									</button>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-content pt-4 container mx-auto">
						<div class={` ${TabActive.value != "about" ? "hidden" : ""}`}>
							<AboutMe />
						</div>
						<div class={` ${TabActive.value != "experience" ? "hidden" : ""}`}>
							<Experience />
						</div>
						<div class={` ${TabActive.value != "weapons" ? "hidden" : ""}`}>
							<Weapons />
						</div>
						<div class={` ${TabActive.value != "education" ? "hidden" : ""}`}>
							<Educations />
						</div>
						<div class={` ${TabActive.value != "award" ? "hidden" : ""}`}>
							<Awards />
						</div>
					</div>
				</div>
			</section>
		</>
	);
});
