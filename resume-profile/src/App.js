import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <WorkExperience />
      <Skills />
      <Education />
      <Projects />
      
      {/* Resume Button */}
      <div className="resume-section">
        <button
          className="resume-btn"
          onClick={() => window.open('Resume_DhruvkumarBhatia.pdf', '_blank')}
        >
          View Resume
        </button>
      </div>

      <Contact />
    </div>
  );
}

export default App;
