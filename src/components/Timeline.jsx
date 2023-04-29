import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="grid p-8 m-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7">
          {timeline.map((timeline) => (
            <TimelineItem
              year={timeline.year}
              title={timeline.title}
              details={timeline.details}
            />
          ))}
        </div>
      </div>
    </>
  );
}
