import React from 'react';
import templateData from './templateData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-200 flex justify-center items-center p-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-8">

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-800">{`${templateData.firstname} ${templateData.lastname}`}</h1>
          <p className="text-xl text-gray-600 mt-2">{templateData.profession}</p>
        </header>

        {/* Contact Info Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Contact Information</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-700">Email</p>
              <p className="font-medium">{templateData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Phone</p>
              <p className="font-medium">{templateData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">City</p>
              <p className="font-medium">{templateData.city}</p>
            </div>
          </div>
        </section>

        {/* Summary Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{templateData.summary}</p>
        </section>

        {/* Experience Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Experience</h2>
          {templateData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold text-gray-800">{exp.title} at {exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.location} | {exp.dateRange}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-3">
            {templateData.skills.map((skill, index) => (
              <li key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-sm hover:bg-green-200 transition-colors">{skill}</li>
            ))}
          </ul>
        </section>

        {/* Education Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Education</h2>
          {templateData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
              <p className="text-sm text-gray-600">{edu.degree}, {edu.fieldOfStudy}</p>
              <p className="text-sm text-gray-600">{edu.gradeYear} - {edu.sclLocation}</p>
            </div>
          ))}
        </section>

        {/* Certifications Card */}
        <section className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-green-800 border-b pb-2 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {templateData.certifications.map((cert, index) => (
              <li key={index} className="mt-2">{cert}</li>
            ))}
          </ul>
        </section>

        {/* Declaration Footer */}
        <footer className="text-center mt-8">
          <p className="text-sm text-gray-600">{templateData.declaration}</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
