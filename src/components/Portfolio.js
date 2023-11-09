import React, { useState } from 'react';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('Education');

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Education':
        return <EducationPage />;
      case 'Skills':
        return <SkillsPage />;
      case 'Certifications':
        return <CertificationsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="landing-page">
      <h1>Hi and Welcome!</h1>

      <nav>
        <a href="#" onClick={() => handleNavigationClick('Education')}>Education</a>
        <a href="#" onClick={() => handleNavigationClick('Skills')}>Skills</a>
        <a href="#" onClick={() => handleNavigationClick('Certifications')}>Certifications</a>
      </nav>

      <main>{renderCurrentPage()}</main>
    </div>
  );
};

const EducationPage = () => {
  return (
    <div>
      <h2>Education</h2>
      <p>This is the education page.</p>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div>
      <h2>Skills</h2>
      <p>This is the skills page.</p>
    </div>
  );
};

const CertificationsPage = () => {
  return (
    <div>
      <h2>Certifications</h2>
      <p>This is the certifications page.</p>
    </div>
  );
};

export default LandingPage;
