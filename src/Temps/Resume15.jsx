import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-[21cm] min-h-[29.7cm] bg-white shadow-lg border-2 border-gray-300 rounded-lg flex">

        {/* Sidebar */}
        <aside className="w-1/4 bg-teal-900 text-white p-8 flex flex-col justify-between">
          {/* Profile Picture or Initials */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-teal-700 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              {`${templateData.firstname.charAt(0)}${templateData.lastname.charAt(0)}`}
            </div>
            <h2 className="text-2xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h2>
            <p className="text-lg mt-2">{`${templateData.profession}`}</p>
          </div>

          {/* Contact Information */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>{`${templateData.city}`}</li>
              <li>{`${templateData.email}`}</li>
              <li>{`${templateData.phone}`}</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              {templateData.skills.map((skill, index) => (
                <li key={index} className="bg-teal-700 text-white rounded-md px-3 py-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-8 space-y-10">
          
          {/* Summary Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Summary</h2>
            <p className="text-gray-700 text-lg">{`${templateData.summary}`}</p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Experience</h2>
            {templateData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">{exp.title} at {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Projects</h2>
            {templateData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Education</h2>
            {templateData.education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {templateData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>

          {/* Declaration Section */}
          <section>
            <h2 className="text-3xl font-semibold text-teal-900 mb-4">Declaration</h2>
            <p className="text-gray-700">{`${templateData.declaration}`}</p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Resume;
