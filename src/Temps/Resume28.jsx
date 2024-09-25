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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-[210mm] w-full h-auto bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden flex">
        {/* Sidebar */}
        <aside className="bg-blue-800 text-white w-1/4 p-6">
          <h1 className="text-4xl font-bold mb-2">{`${firstname} `}</h1>
          <p className="text-lg italic">{profession}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>{`${city}`}</p>
            <p>{`${email}`}</p>
            <p>{`${phone}`}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="text-sm">{skill}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-8">
          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 p-4 rounded-md border-l-4 border-blue-500 bg-gray-100 shadow">
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

          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4 p-4 rounded-md border-l-4 border-blue-500 bg-gray-100 shadow">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 p-4 rounded-md border-l-4 border-blue-500 bg-gray-100 shadow">
                <h3 className="text-xl font-bold">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index} className="mb-1">{cert}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-2 border-b-2 border-blue-500">Declaration</h2>
            <p className="text-gray-700 leading-relaxed">{declaration}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
