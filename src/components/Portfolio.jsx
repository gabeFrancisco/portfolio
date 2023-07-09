import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center pt-40"
    >
      <Title>Meus projetos</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid p-8 m-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 intems-center">
          {portfolio.map((project, key) => (
            <PortfolioItem
              key={key}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              description={project.desc}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
