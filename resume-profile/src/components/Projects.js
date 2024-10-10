import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully functional e-commerce web application with cart and checkout features.",
      imageUrl: "/download.png",
      liveDemo: "https://aws.amazon.com/smart-business/?gclid=CjwKCAjw9p24BhB_EiwA8ID5Bi_pgY6u4IsfgSNZrSeCJB-sn4A7DjiGI54XHFqygpp9pBMFkOvpXBoCLF4QAvD_BwE&trk=7541ebd3-552d-4f98-9357-b542436aa66c&sc_channel=ps&ef_id=CjwKCAjw9p24BhB_EiwA8ID5Bi_pgY6u4IsfgSNZrSeCJB-sn4A7DjiGI54XHFqygpp9pBMFkOvpXBoCLF4QAvD_BwE:G:s&s_kwcid=AL!4422!3!651751058796!e!!g!!aws%20console!19852662149!145019243977",
    },
    {
      title: "Blog Website",
      description: "A blog platform with user authentication and content management system.",
      imageUrl: "/APsystems_DS3-2022B.png",
      liveDemo: "https://apsystems.com/",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
