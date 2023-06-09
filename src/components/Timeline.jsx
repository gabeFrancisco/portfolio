import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import timeline from "../data/timeline";

export default function Timeline() {
  return (
    <>
      <div id="skills" className="flex flex-col md:flex-row justify-center py-12">
        <div className="grid p-8 m-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 lg:p-20">
          <Title>Linha do tempo do meu aprendizado</Title>
          {timeline.map((timeline, key) => (
            <TimelineItem
              key={key}
              year={timeline.year}
              title={timeline.title}
              details={timeline.details}
              image={timeline.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
