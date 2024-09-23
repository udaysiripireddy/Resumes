import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-[21cm] min-h-[29.7cm] p-8 bg-white rounded-lg shadow-2xl">

        {/* Header Section */}
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-6xl font-bold text-gray-800">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl text-gray-600 mt-2">{templateData.profession}</p>
          <div className="mt-3 text-sm text-gray-500">
            <p>{templateData.city}</p>
            <p>{`${templateData.email} | ${templateData.phone}`}</p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Profile Summary */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Profile Summary</h2>
              <p className="text-gray-700">{templateData.summary}</p>
            </section>

            {/* Experience Section */}
            <section className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Experience</h2>
              {templateData.experience.map((exp, index) => (
                <div key={index} className="border-b pb-4 mb-4 last:border-none">
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

            {/* Education Section */}
            <section className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Education</h2>
              {templateData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
                  <p className="text-sm text-gray-500">{`${edu.degree} in ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                  <p className="text-sm text-gray-500">{edu.sclLocation}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
            {/* Skills Section */}
            <section className="bg-blue-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {templateData.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            {/* Projects Section */}
            <section className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-3xl font-semibold text-blue-700">Projects</h2>
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

        {/* Declaration Section */}
        <section className="mt-10 bg-blue-100 p-4 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-700">Declaration</h2>
          <p className="text-gray-700">{templateData.declaration}</p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
