import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center from-teal-400 via-blue-500 to-orange-500">
      <div className="max-w-[21cm] min-h-[29.7cm] p-8 bg-white border-4 border-teal-700 rounded-lg shadow-xl">
        
        {/* Header Section */}
        <header className="flex items-center border-b-4 border-teal-700 pb-6 mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-teal-700">{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <p className="text-lg text-teal-500 font-medium">{`${templateData.profession}`}</p>
          </div>
          <div className="text-right">
            <p className="text-teal-500 font-semibold">{`${templateData.city}`}</p>
            <p className="text-teal-500">{`${templateData.email}`} | {`${templateData.phone}`}</p>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Summary</h2>
          <p className="text-gray-700">{`${templateData.summary}`}</p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Experience</h2>
          {templateData.experience.map((exp, index) => (
            <div key={index} className="mb-8 bg-teal-50 p-4 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold text-teal-700">{exp.title} at {exp.company}</h3>
              <p className="text-sm text-teal-500 mb-2">{exp.location} ({exp.dateRange})</p>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Education</h2>
          {templateData.education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold text-teal-700">{edu.sclName}</h3>
              <p className="text-sm text-teal-500">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
              <p className="text-sm text-teal-500">{edu.sclLocation}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {templateData.skills.map((skill, index) => (
              <span key={index} className="bg-orange-200 text-orange-700 rounded-full px-4 py-2 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {templateData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Projects</h2>
          {templateData.projects.map((project, index) => (
            <div key={index} className="mb-6 bg-teal-50 p-4 rounded-lg shadow-inner">
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

      </div>
    </div>
  );
};

export default Resume;
