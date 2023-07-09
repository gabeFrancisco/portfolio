import React from "react";

export default function Header() {
	const anchors = [
		{
			title: "Home",
			url: "#home"
		},
		{
			title: "Portfólio",
			url: "#portfolio"
		},
		{
			title: "Habilidades",
			url: "#skills"
		},
		{
			title: "Contato",
			url: "#contact"
		},
	]
  return (
    <div className="w-full flex flex-row lg:justify-start justify-center p-3 bg-zinc-100 bg-opacity-70 dark:bg-gradient-to-l dark:from-zinc-700/80 dark:to-zinc-950/80 fixed glass-less z-10">
			<ul className="flex flex-row mx-10 items-center">
				{anchors.map((anchor, key) => (
					<li key={key} className=" header-item">
						<a href={anchor.url} className="mx-3 text-blue-950 dark:text-zinc-300 md:font-semibold">{anchor.title}</a>
					</li>
				))}
			</ul>
    </div>
  );
}
