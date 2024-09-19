import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-[21cm] min-h-[29.7cm] grid grid-cols-[6cm_auto] gap-4 p-8 bg-white border-4 border-teal-700 rounded-lg shadow-xl">
        
        {/* Sidebar Section */}
        <aside className="bg-teal-700 text-white p-6 rounded-lg">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <p className="text-lg text-teal-200">{`${templateData.profession}`}</p>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p>{`${templateData.city}`}</p>
              <p>{`${templateData.email}`}</p>
              <p>{`${templateData.phone}`}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Skills</h2>
              <ul className="space-y-2">
                {templateData.skills.map((skill, index) => (
                  <li key={index} className="bg-teal-800 text-white rounded-full px-3 py-1 text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Certifications</h2>
              <ul className="list-inside space-y-2">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="p-6 space-y-8">
          {/* Summary Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Summary</h2>
            <p className="text-gray-700">{`${templateData.summary}`}</p>
          </section>

          {/* Experience Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Experience</h2>
            {templateData.experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-bold text-teal-700">{exp.title} at {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Education</h2>
            {templateData.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-teal-700">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Projects</h2>
            {templateData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-teal-700">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <p className="text-sm text-gray-700">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>

          {/* Declaration Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Declaration</h2>
            <p className="text-gray-700">{`${templateData.declaration}`}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
