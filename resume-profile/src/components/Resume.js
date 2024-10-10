import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <iframe
        src="path_to_your_resume.pdf"
        title="Resume"
        className="resume-iframe"
        width="100%"
        height="600px"
      ></iframe>
      <a href="/Resume_DhruvkumarBhatia.pdf" download="Dhruv_Bhatia_Resume.pdf" className="download-btn">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
