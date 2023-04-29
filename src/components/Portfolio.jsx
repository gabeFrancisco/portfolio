import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid p-8 m-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            description={project.desc}
          />
        ))}
      </div>
    </div>
  );
}
 