import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="w-full max-w-[21cm] bg-white shadow-xl border border-gray-300 rounded-lg p-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl text-gray-600 italic">{templateData.profession}</p>
          <div className="flex justify-center mt-4">
            <ul className="flex space-x-8 text-sm text-gray-500">
              <li>{templateData.city}</li>
              <li>{templateData.email}</li>
              <li>{templateData.phone}</li>
            </ul>
          </div>
        </header>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Summary</h2>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">{templateData.summary}</p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Experience</h2>
          <div className="space-y-6 mt-4">
            {templateData.experience.map((exp, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title} - {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Education</h2>
          <div className="space-y-4 mt-4">
            {templateData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Projects</h2>
          <div className="space-y-6 mt-4">
            {templateData.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2 mt-4">
            {templateData.skills.map((skill, index) => (
              <li key={index} className="bg-gray-800 text-white rounded-md px-4 py-1 text-sm shadow-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Certifications</h2>
          <ul className="list-disc list-inside text-gray-600 text-sm mt-4">
            {templateData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Declaration Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Declaration</h2>
          <p className="text-gray-700 text-sm mt-4">{templateData.declaration}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
