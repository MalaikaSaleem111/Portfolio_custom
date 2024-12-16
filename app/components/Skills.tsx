import React from "react";
import "../styles/skills.css";

const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "90%" },
  { name: "TypeScript", level: "80%" },
  { name: "Next.js", level: "50%" },
  { name: "Tailwind CSS", level: "60%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-label">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
