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
      <div className="w-[21cm] bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col md:flex-row">
        {/* Sidebar Section */}
        <aside className="w-full md:w-1/4 bg-green-600 text-white p-8 rounded-l-lg flex flex-col">
          <h1 className="text-4xl font-extrabold mb-2">{`${firstname}`}</h1>
          <p className="text-xl italic mb-4">{profession}</p>
          <hr className="my-4 border-t-2 border-green-400" />
          <div className="flex flex-col space-y-3">
            <p><strong>📍</strong> {city}</p>
            <p><strong>✉️</strong> {email}</p>
            <p><strong>📞</strong> {phone}</p>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="w-full md:w-3/4 p-8 space-y-8">
          {/* Summary Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Experience</h2>
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <div key={index} className="mb-4 bg-green-50 p-4 rounded-md shadow">
                  <h3 className="text-xl font-bold text-green-600">{exp.title} at {exp.company}</h3>
                  <p className="text-sm text-gray-600 mb-2">{exp.location} | {exp.dateRange}</p>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="mb-1">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No experience listed.</p>
            )}
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Projects</h2>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={index} className="mb-4 bg-green-50 p-4 rounded-md shadow">
                  <h3 className="text-xl font-bold text-green-600">{project.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{project.description}</p>
                  <p className="text-sm text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No projects listed.</p>
            )}
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Education</h2>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mb-4 bg-green-50 p-4 rounded-md shadow">
                  <h3 className="text-xl font-bold text-green-600">{edu.sclName}</h3>
                  <p className="text-sm text-gray-600 mb-1">{edu.degree}, {edu.fieldOfStudy} ({edu.gradeYear})</p>
                  <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No education listed.</p>
            )}
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Skills</h2>
            <ul className="flex flex-wrap gap-4 mt-2">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <li key={index} className="bg-green-100 text-green-800 px-6 py-2 rounded-full shadow">
                    {skill}
                  </li>
                ))
              ) : (
                <li className="text-gray-600">No skills listed.</li>
              )}
            </ul>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {certifications.length > 0 ? (
                certifications.map((cert, index) => <li key={index} className="mb-1">{cert}</li>)
              ) : (
                <li>No certifications listed.</li>
              )}
            </ul>
          </section>

          {/* Declaration Section */}
          <section>
            <h2 className="text-3xl font-semibold text-green-700 mb-2">Declaration</h2>
            <p className="text-gray-700">{declaration}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
