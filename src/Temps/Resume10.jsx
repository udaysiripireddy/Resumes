import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-[21cm] min-h-[29.7cm] p-8 bg-white border border-gray-300 shadow-md">

        {/* Header Section */}
        <header className="flex flex-col items-center text-center bg-teal-700 text-white p-8 rounded-md mb-6">
          <h1 className="text-5xl font-extrabold mb-2">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-lg font-medium">{`${templateData.profession}`}</p>
          <div className="mt-4">
            <p>{`${templateData.city}`}</p>
            <p>{`${templateData.email}`} | {`${templateData.phone}`}</p>
          </div>
        </header>

        {/* Two Column Layout for Main Sections */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Summary Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Summary</h2>
              <p className="text-gray-700">{`${templateData.summary}`}</p>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                {templateData.skills.map((skill, index) => (
                  <span key={index} className="bg-orange-200 text-orange-700 rounded-full px-3 py-1 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Experience</h2>
              {templateData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{exp.title} at {exp.company}</h3>
                  <p className="text-sm text-gray-600 mb-2">{exp.location} ({exp.dateRange})</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Education</h2>
              {templateData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
                  <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                  <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-xl font-semibold text-teal-700 mb-2">Projects</h2>
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
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-teal-700 mb-2">Declaration</h2>
          <p className="text-gray-700">{`${templateData.declaration}`}</p>
        </section>
        
      </div>
    </div>
  );
};

export default Resume;
