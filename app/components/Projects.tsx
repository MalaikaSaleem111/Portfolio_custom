import "../styles/projects.css";
import Image from "next/image";

const projects = [
  {
    title: "Resume Builder",
    description: "An application to create professional resumes. Designed with HTML, CSS, and JavaScript, it allows users to input their details and generate a neatly formatted resume.",
    image: "/resume-builder.jpg",
  },
  {
    title: "PakWheel Clone",
    description: "Clone of the popular car buying and selling platform, PakWheels, developed using Next.js and Tailwind CSS.",
    image: "/pakWheel.jpg",
  },
  {
    title: "Responsive Website",
    description: "A sleek and responsive e-commerce website designed for selling books online. Built with Next.js and Tailwind CSS, the website features a clean interface with categorized book listings, making it easy for users to browse and shop.",
    image: "/bookwebsite.jpg",
  },
  {
    title: "Countdown Timer",
    description: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    image: "/countdown-timer.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
