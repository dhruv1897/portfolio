import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Skills.css';  // For additional styling

const Skills = () => {
  const [show, setShow] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (skill) => {
    setSelectedSkill(skill);
    setShow(true);
  };

  const skillsList = [
    {
      name: "Operating Systems",
      details: "Windows, macOS",
    },
    {
      name: "Security",
      details: "Microsoft Defender, Zscaler",
    },
    {
      name: "Collaboration Tools",
      details: "Microsoft Teams, Jira, G Suite, Okta SSO",
    },
    {
      name: "Cloud Services",
      details: "Office 365, Google Workspace, Intune, JAMF, SharePoint",
    },
    {
      name: "Networking",
      details: "DNS, DHCP, TCP/IP, VPN, LAN",
    },
    {
      name: "Programming",
      details: "C, C++, Java",
    }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <Button
            key={index}
            className="skill-button"
            variant="primary"
            onClick={() => handleShow(skill)}
          >
            {skill.name}
          </Button>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSkill.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedSkill.details}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Skills;
