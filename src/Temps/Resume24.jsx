import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-8">
      <div className="w-[21cm] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-gray-900 text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
              <p className="text-lg italic mt-2">{templateData.profession}</p>
            </div>
            <div className="text-sm">
              <p>{templateData.email}</p>
              <p>{templateData.phone}</p>
              <p>{templateData.city}</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-10 space-y-10">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-700 text-sm">{templateData.summary}</p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
            <div className="space-y-6">
              {templateData.experience.map((exp, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.company} – {exp.location} ({exp.dateRange})</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
            {templateData.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
            {templateData.projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {templateData.skills.map((skill, index) => (
                <li key={index} className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>

          {/* Declaration */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Declaration</h2>
            <p className="text-gray-700 text-sm">{templateData.declaration}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
