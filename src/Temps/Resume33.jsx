import React from 'react';
import templateData from './templateData';

// Main Resume Component
const Resume = () => {
  const {
    firstname,
    lastname,
    profession,
    email,
    phone,
    city,
    summary,
    experience,
    projects,
    education,
    certifications,
    skills,
    declaration,
  } = templateData;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-[210mm] bg-white shadow-lg rounded-lg p-8">
        
        {/* Header Section */}
        <header className="flex justify-between items-center border-b-2 border-gray-300 pb-6 mb-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">{`${firstname} ${lastname}`}</h1>
            <p className="text-xl text-gray-600">{profession}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">{city}</p>
            <p className="text-gray-500">{email}</p>
            <p className="text-gray-500">{phone}</p>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <aside className="col-span-1">
            {/* Skills Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Skills
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            {/* Declaration Section */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Declaration
              </h2>
              <p className="text-gray-700 leading-relaxed">{declaration}</p>
            </section>
          </aside>

          {/* Right Column */}
          <div className="col-span-2">
            {/* Summary Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </section>

            {/* Experience Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Experience
              </h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.company} - {exp.location} ({exp.dateRange})</p>
                  <ul className="list-disc ml-5 mt-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Projects
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-gray-300 pb-1">
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-700">{edu.sclName}</h3>
                  <p className="text-sm text-gray-600">{edu.degree}, {edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-600">{edu.gradeYear} | {edu.sclLocation}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
