import React from "react";

export default function Header() {
  const anchors = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "Portfólio",
      url: "#portfolio",
    },
    {
      title: "Habilidades",
      url: "#skills",
    },
    {
      title: "Contato",
      url: "#contact",
    },
    {},
  ];
  return (
    <header className="fixed z-50 flex flex-row justify-center w-full p-3 shadow-lg lg:justify-start bg-zinc-100 bg-opacity-70 dark:bg-zinc-950 dark:border-b dark:border-zinc-700 dark:bg-opacity-90 glass-less">
      <ul className="flex flex-row items-center mx-10">
        {anchors.map((anchor, key) => (
          <li key={key} className=" header-item">
            <a
              href={anchor.url}
              className="mx-3 text-blue-950 dark:text-zinc-300 md:font-semibold"
            >
              {anchor.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
