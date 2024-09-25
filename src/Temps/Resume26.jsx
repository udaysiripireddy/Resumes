import React from 'react';
import templateData from './templateData';

// Header Component
const Header = ({ name, profession, city, email, phone }) => (
  <header className="w-full lg:w-1/3 text-center bg-blue-800 text-white rounded-lg p-6">
    <h1 className="text-4xl font-bold mb-2">{name}</h1>
    <p className="text-xl italic">{profession}</p>
    <hr className="my-4 border-t-2 border-blue-400" />
    <div className="space-y-2 text-left">
      <p>{city}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  </header>
);

// SectionWrapper to standardize layout for sections
const SectionWrapper = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">{title}</h2>
    <div className="space-y-4 mt-4">{children}</div>
  </section>
);

// Summary Component
const Summary = ({ summary }) => (
  <SectionWrapper title="Summary">
    <p className="text-gray-700">{summary}</p>
  </SectionWrapper>
);

// Experience Component
const Experience = ({ experience }) => (
  <SectionWrapper title="Experience">
    {experience.map((exp, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold">{exp.title} - {exp.company}</h3>
        <p className="text-sm text-gray-600">{exp.location} | {exp.dateRange}</p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {exp.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </div>
    ))}
  </SectionWrapper>
);

// Projects Component
const Projects = ({ projects }) => (
  <SectionWrapper title="Projects">
    {projects.map((project, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
      </div>
    ))}
  </SectionWrapper>
);

// Education Component
const Education = ({ education }) => (
  <SectionWrapper title="Education">
    {education.map((edu, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold">{edu.sclName}</h3>
        <p className="text-sm text-gray-600">{edu.degree}, {edu.fieldOfStudy} ({edu.gradeYear})</p>
        <p className="text-sm text-gray-600">{edu.sclLocation}</p>
      </div>
    ))}
  </SectionWrapper>
);

// Certifications Component
const Certifications = ({ certifications }) => (
  <SectionWrapper title="Certifications">
    <ul className="list-disc list-inside text-gray-700">
      {certifications.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>
  </SectionWrapper>
);

// Declaration Component
const Declaration = ({ declaration }) => (
  <SectionWrapper title="Declaration">
    <p className="text-gray-700">{declaration}</p>
  </SectionWrapper>
);

// Main Resume Component
const Resume = () => {
  const {
    firstname, lastname, profession, email, phone, city,
    summary, experience, projects, education, certifications, declaration
  } = templateData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-8">
      <div className="w-[21cm] bg-white shadow-xl border-4 border-blue-300 rounded-xl p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <Header 
            name={`${firstname} ${lastname}`} 
            profession={profession}
            city={city}
            email={email}
            phone={phone}
          />
          <main className="w-full lg:w-2/3 space-y-6">
            <Summary summary={summary} />
            <Experience experience={experience} />
            <Projects projects={projects} />
            <Education education={education} />
          </main>
        </div>
        <footer className="mt-8 space-y-6">
          <Certifications certifications={certifications} />
          <Declaration declaration={declaration} />
        </footer>
      </div>
    </div>
  );
};

export default Resume;
