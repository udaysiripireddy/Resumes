import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-[21cm] min-h-[29.7cm] p-10 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
        
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-teal-700 mb-2">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl text-gray-600">{`${templateData.profession}`}</p>
          <div className="flex justify-center space-x-4 mt-4 text-gray-600">
            <p>{`${templateData.city}`}</p>
            <p>{`${templateData.email}`}</p>
            <p>{`${templateData.phone}`}</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          
          {/* Summary Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Summary</h2>
            <p className="text-gray-700">{`${templateData.summary}`}</p>
          </section>

          {/* Experience and Education with Timeline */}
          <div className="grid grid-cols-2 gap-10">
            
            {/* Left Column: Experience */}
            <section>
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Experience</h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-300"></div>
                {templateData.experience.map((exp, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="absolute -left-4 top-1 bg-teal-700 w-4 h-4 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-800">{exp.title} at {exp.company}</h3>
                    <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Right Column: Education */}
            <section>
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Education</h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-300"></div>
                {templateData.education.map((edu, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="absolute -left-4 top-1 bg-orange-500 w-4 h-4 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
                    <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                    <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {templateData.skills.map((skill, index) => (
                <span key={index} className="bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Projects</h2>
            {templateData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <p className="text-sm text-gray-700">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>

          {/* Declaration Section */}
          <section>
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Declaration</h2>
            <p className="text-gray-700">{`${templateData.declaration}`}</p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Resume;
