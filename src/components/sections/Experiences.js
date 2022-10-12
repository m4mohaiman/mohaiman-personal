import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Acamedic Degree",
    years: "2019 - Present",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "UX/UI Engineer",
    years: "June 16, 2022 - Present",
    content:
      "Intellier ltd",
  },
  {
    id: 2,
    title: "Front-End Developer",
    years: "October 2020 - April 2022",
    content:
      "BYSL Global Technology Group",
  },
  {
    id: 3,
    title: "Front-End Developer",
    years: "December 2019 - September 2020",
    content:
      "Paradynamic LLC",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          {/* <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div> */}

          <div className="col-md-12">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
