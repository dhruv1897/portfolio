import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section className="work-experience-box">
      <h2>Work Experience</h2>
      <div className="job">
        <h3>IT and Infra Administrator | Senior IT Support Specialist</h3>
        <p>Rang Technologies Inc., Piscataway, NJ | March 2023 - November 2023</p>
        <ul>
          <li>Managed systems including macOS, Windows, Office 365, etc.</li>
          <li>Configured network services (DNS, DHCP).</li>
          <li>Administered endpoint security using Microsoft-Defender and Zscaler.</li>
          <li>Deployed devices using JAMF and Microsoft Intune.</li>
        </ul>
      </div>
      
      <div className="job">
        <h3>IT Support Technician</h3>
        <p>AP Accounting Services, Midrand, South Africa | Jun 2021 - January 2023</p>
        <ul>
          <li>Delivered support for Office 365, Google Workspace, Windows/macOS systems.</li>
          <li>Configured and troubleshot network issues (DNS, DHCP).</li>
          <li>Managed Active Directory, user accounts, and permissions.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
