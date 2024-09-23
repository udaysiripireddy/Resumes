import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="max-w-[21cm] bg-white shadow-lg border-2 border-gray-300 rounded-lg p-8">
        <div className="grid grid-cols-3 gap-4">
          {/* Left Section (Personal Info) */}
          <aside className="col-span-1 bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center">
            {/* Profile Picture or Initials */}
            <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center text-5xl font-bold border-4 border-white mb-4">
              {`${templateData.firstname.charAt(0)}${templateData.lastname.charAt(0)}`}
            </div>
            <h1 className="text-3xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
            <p className="text-lg mt-2 font-light italic">{`${templateData.profession}`}</p>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p>{templateData.city}</p>
              <p>{templateData.email}</p>
              <p>{templateData.phone}</p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Skills</h3>
              <ul className="space-y-2">
                {templateData.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-600 text-white rounded-md px-3 py-1 text-sm shadow">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Section (Main Content) */}
          <main className="col-span-2 p-6">
            {/* Summary Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Summary</h2>
              <p className="text-gray-700 leading-relaxed">{templateData.summary}</p>
            </section>

            {/* Experience Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Experience</h2>
              {templateData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
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
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Projects</h2>
              {templateData.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Education</h2>
              {templateData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{edu.sclName}</h3>
                  <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                  <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                </div>
              ))}
            </section>

            {/* Certifications Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {templateData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            {/* Declaration Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">Declaration</h2>
              <p className="text-gray-700">{templateData.declaration}</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
