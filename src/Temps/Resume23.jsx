import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="flex w-full max-w-[21cm] bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Sidebar (Left) */}
        <aside className="w-1/3 bg-gray-800 text-white p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              {`${templateData.firstname.charAt(0)}${templateData.lastname.charAt(0)}`}
            </div>
            <h1 className="text-2xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <p className="text-sm italic">{templateData.profession}</p>
          </div>

          <div className="space-y-8">
            {/* Contact Info */}
            <section>
              <h2 className="text-lg font-semibold">Contact</h2>
              <ul className="text-sm space-y-2 mt-4">
                <li>{templateData.city}</li>
                <li>{templateData.email}</li>
                <li>{templateData.phone}</li>
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-semibold">Skills</h2>
              <ul className="flex flex-wrap gap-2 mt-4">
                {templateData.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-700 text-white px-3 py-1 text-sm rounded-md">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-semibold">Certifications</h2>
              <ul className="list-disc list-inside text-sm mt-4">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        </aside>

        {/* Main Content (Right) */}
        <main className="w-2/3 p-8">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
            <p className="text-gray-700 text-sm">{templateData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            {templateData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title} - {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            {templateData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
            {templateData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
