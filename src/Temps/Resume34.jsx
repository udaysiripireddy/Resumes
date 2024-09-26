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
      <div className="w-full max-w-[210mm] bg-white shadow-lg rounded-lg overflow-hidden flex">

        {/* Left Section */}
        <aside className="w-2/5 bg-gray-800 text-white p-6">
          <div className="mb-6">
            <h1 className="text-5xl font-bold">{`${firstname} ${lastname}`}</h1>
            <p className="text-lg italic mt-2">{profession}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2">{city}</p>
            <p className="mt-1">{email}</p>
            <p className="mt-1">{phone}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-lg font-bold">{edu.sclName}</h3>
                <p className="text-sm">{`${edu.degree}, ${edu.fieldOfStudy}`}</p>
                <p className="text-sm">{edu.gradeYear}</p>
                <p className="text-sm">{edu.sclLocation}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside mt-4">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Section */}
        <main className="w-3/5 p-8 bg-white">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-gray-700">{exp.title}</h3>
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
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-gray-700">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
              </div>
            ))}
          </section>

          {/* Certifications Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-1">
              Declaration
            </h2>
            <p className="text-gray-700 leading-relaxed">{declaration}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
