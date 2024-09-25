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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-[210mm] w-full bg-white rounded-lg shadow-md border border-gray-300 p-6">
        {/* Header Section */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-semibold text-gray-800">{`${firstname} ${lastname}`}</h1>
          <p className="text-lg text-gray-600 italic">{profession}</p>
        </header>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row mt-6">
          {/* Sidebar for Contact Info */}
          <aside className="w-full lg:w-1/3 p-4 border-r border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h2>
            <p><strong>Location:</strong> {city}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>

            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </aside>

          {/* Content Area */}
          <main className="w-full lg:w-2/3 p-4 lg:pl-6">
            {/* Summary Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
              <p className="text-gray-600">{summary}</p>
            </section>

            {/* Experience Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{`${exp.title} at ${exp.company}`}</h3>
                  <p className="text-sm text-gray-600">{`${exp.location} | ${exp.dateRange}`}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{edu.sclName}</h3>
                  <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                  <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                </div>
              ))}
            </section>

            {/* Certifications Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-600">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            {/* Declaration Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Declaration</h2>
              <p className="text-gray-600">{declaration}</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
