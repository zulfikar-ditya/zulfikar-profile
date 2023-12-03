import { component$ } from "@builder.io/qwik";
import ImgPhp from "~/media/php.png?jsx";
import ImgJavascript from "~/media/javascript.png?jsx";
import ImgTypescript from "~/media/typescript.png?jsx";
import ImgGolang from "~/media/golang.png?jsx";
import ImgLaravel from "~/media/laravel.png?jsx";
import ImgPgsql from "~/media/postgresql.png?jsx";
import ImgMysql from "~/media/mysql.png?jsx";
import ImgJquery from "~/media/jquery.png?jsx";
import ImgReact from "~/media/react.png?jsx";
import ImgNext from "~/media/nextjs.png?jsx";
import ImgTailwindCss from "~/media/tailwindcss.png?jsx";
import ImgBootstrap from "~/media/bootstrap.png?jsx";

export const Weapons = component$(() => {
	return (
		<>
			<h2 class="text-center mt-10">Weapons</h2>
			<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgPhp class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								PHP.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgJavascript class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Javascript.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgTypescript class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Typescript.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgGolang class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Go.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgLaravel class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Laravel Framework.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgPgsql class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Postgres.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgMysql class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Mysql.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgJquery class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Jquery.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgReact class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								React js.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgNext class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Next js.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgTailwindCss class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Tailwindcss.
							</p>
						</div>
					</div>
					<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div class="flex flex-col justify-center items-center rounded-t-xl p-10">
							<ImgBootstrap class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-gray-500">
								Boostrap Css.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
