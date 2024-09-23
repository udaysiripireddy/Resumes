import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-[21cm] min-h-[29.7cm] p-8 bg-white rounded-lg shadow-xl">

        {/* Header Section */}
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-6xl font-bold text-gray-800">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl italic text-gray-600">{templateData.profession}</p>
          <div className="mt-4 text-sm text-gray-500">
            <p>{templateData.city}</p>
            <p>{`${templateData.email} | ${templateData.phone}`}</p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-600">Profile Summary</h2>
              <p className="text-gray-700">{templateData.summary}</p>
            </section>

            {/* Skills Section */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                {templateData.skills.map((skill, index) => (
                  <li key={index} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-600">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Experience Section */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-600">Experience</h2>
              {templateData.experience.map((exp, index) => (
                <div key={index} className="mb-4 border-b pb-4">
                  <h3 className="text-lg font-bold text-gray-800">{`${exp.title} at ${exp.company}`}</h3>
                  <p className="text-sm text-gray-500">{`${exp.location} (${exp.dateRange})`}</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-600">Projects</h2>
              {templateData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                  <p className="text-sm text-gray-700">Technologies: {project.technologies}</p>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-10 bg-blue-100 p-4 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-600">Education</h2>
          {templateData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
              <p className="text-sm text-gray-500">{`${edu.degree} in ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
              <p className="text-sm text-gray-500">{edu.sclLocation}</p>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default Resume;
