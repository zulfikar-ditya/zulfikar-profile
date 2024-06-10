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
import ImgMendix from "~/media/mendix.png?jsx";

export const Weapons = component$(() => {
	return (
		<>
			<h2 class="text-center mt-5">Weapons</h2>
			<div class="max-w-[85rem] px-0 pt-10 sm:px-6 lg:px-0 lg:pt-14 mx-auto">
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<div class="group card__weapon">
						<div class="card__weapon__head">
							<ImgPhp alt="ImgPhp" class="h-32 object-contain" loading="lazy" />
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								PHP.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgJavascript
								alt="ImgJavascript"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Javascript.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgTypescript
								alt="ImgTypescript"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Typescript.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgGolang
								alt="ImgGolang"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Go.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgLaravel
								alt="ImgLaravel"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Laravel Framework.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgPgsql
								alt="ImgPgsql"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Postgres.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgMysql
								alt="ImgMysql"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Mysql.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgJquery
								alt="ImgJquery"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Jquery.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgReact
								alt="ImgReact"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								React js.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgNext
								alt="ImgNext"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Next js.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgTailwindCss
								alt="ImgTailwindCss"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Tailwindcss.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgBootstrap
								alt="ImgBootstrap"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Boostrap Css.
							</p>
						</div>
					</div>
					<div class="card__weapon">
						<div class="card__weapon__head">
							<ImgMendix
								alt="Mendix"
								class="h-32 object-contain"
								loading="lazy"
							/>
						</div>
						<div class="pb-4 md:pb-6">
							<p class="text-xl text-center tracking-widest text-slate-700 dark:text-navy-200">
								Mendix Low Code
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
