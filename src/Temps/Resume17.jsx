import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10 space-y-8">

        {/* Personal Information */}
        <section className="text-center border-b-2 border-gray-200 pb-8">
          <div className="w-24 h-24 mx-auto bg-teal-700 rounded-full flex items-center justify-center text-4xl font-bold text-white">
            {`${templateData.firstname.charAt(0)}${templateData.lastname.charAt(0)}`}
          </div>
          <h1 className="text-4xl font-bold mt-4">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl font-medium text-teal-900">{templateData.profession}</p>
          <div className="flex justify-center space-x-4 text-gray-600 mt-4">
            <p>{templateData.city}</p>
            <p>|</p>
            <p>{templateData.email}</p>
            <p>|</p>
            <p>{templateData.phone}</p>
          </div>
        </section>

        {/* Summary Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-2">Summary</h2>
          <p className="text-gray-700">{templateData.summary}</p>
        </section>

        {/* Skills Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-2">Skills</h2>
          <ul className="grid grid-cols-2 gap-4">
            {templateData.skills.map((skill, index) => (
              <li key={index} className="bg-teal-100 text-teal-900 rounded-md px-3 py-2 text-center font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Experience</h2>
          {templateData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{exp.title} at {exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Education</h2>
          {templateData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{edu.sclName}</h3>
              <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
              <p className="text-sm text-gray-600">{edu.sclLocation}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Projects</h2>
          {templateData.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {templateData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Declaration Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-teal-900 mb-2">Declaration</h2>
          <p className="text-gray-700">{templateData.declaration}</p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
