import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-8">
      <div className="w-[21cm] bg-white shadow-xl border-4 border-blue-300 rounded-xl p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header Section */}
          <header className="w-full lg:w-1/3 text-center bg-blue-800 text-white rounded-lg p-6">
            <h1 className="text-4xl font-bold mb-2">{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <p className="text-xl italic">{templateData.profession}</p>
            <hr className="my-4 border-t-2 border-blue-400" />
            {/* Contact Info */}
            <div className="space-y-2 text-left">
              <p>{templateData.city}</p>
              <p>{templateData.email}</p>
              <p>{templateData.phone}</p>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="w-full lg:w-2/3 space-y-6">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Summary</h2>
              <p className="text-gray-700 mt-2">{templateData.summary}</p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Experience</h2>
              <div className="space-y-4">
                {templateData.experience.map((exp, index) => (
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
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Projects</h2>
              <div className="space-y-4">
                {templateData.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Education</h2>
              <div className="space-y-4">
                {templateData.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold">{edu.sclName}</h3>
                    <p className="text-sm text-gray-600">{edu.degree}, {edu.fieldOfStudy} ({edu.gradeYear})</p>
                    <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer: Certifications & Declaration */}
        <footer className="mt-8">
          <section className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 border-b-4 border-blue-300 pb-2">Declaration</h2>
              <p className="text-gray-700">{templateData.declaration}</p>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
