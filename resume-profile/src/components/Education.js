import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-box">
      <h2>Education</h2>
      <div className="education-timeline">
        <div className="circle">
          <p>Master of Computer and Information Science</p>
          <span>Westcliff University, Irvine, California | 2023-2025</span>
        </div>
        <div className="circle">
          <p>Bachelor’s in Information Technology</p>
          <span>Gujarat Technological University, Ahmedabad, Gujarat | 2016-2020</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
