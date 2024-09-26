import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase, FaUserGraduate, FaAward, FaCode } from 'react-icons/fa';

const Resume = () => {
  const {
    firstname,
    lastname,
    profession,
    email,
    phone,
    city,
    summary,
    experience,
    projects,
    education,
    certifications,
    skills,
    declaration,
  } = templateData;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center p-10"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Add the path to your background image here
    >
      <div className="w-[210mm] max-w-full bg-white bg-opacity-90 shadow-lg rounded-lg border border-gray-300 p-10">
        
        {/* Header */}
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">{`${firstname} ${lastname}`}</h1>
          <p className="text-xl text-gray-600">{profession}</p>
          <div className="flex space-x-4 mt-2 text-gray-500">
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {city}
            </span>
            <span>|</span>
            <span className="flex items-center">
              <FaEnvelope className="mr-2" /> {email}
            </span>
            <span>|</span>
            <span className="flex items-center">
              <FaPhone className="mr-2" /> {phone}
            </span>
          </div>
        </header>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Skills & Certifications */}
          <aside className="md:col-span-1">
            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
              <ul className="list-none space-y-2 text-gray-600">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center bg-gray-200 rounded-md px-3 py-2">
                    <FaCode className="text-blue-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
              <ul className="list-disc list-inside text-gray-600">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <FaAward className="text-green-500 mr-2" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Right Column - Experience, Projects, Education */}
          <main className="md:col-span-2 space-y-8">
            {/* Summary Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h2>
              <p className="text-gray-700">{summary}</p>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center">
                    <FaBriefcase className="mr-2 text-blue-600" />
                    {exp.title} - {exp.company}
                  </h3>
                  <p className="text-sm text-gray-600">{exp.location} | {exp.dateRange}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center">
                    <FaCode className="mr-2 text-blue-500" />
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                </div>
              ))}
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <FaUserGraduate className="mr-2 text-blue-500" />
                  <div>
                    <h3 className="text-lg font-bold">{edu.sclName}</h3>
                    <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                    <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Declaration Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Declaration</h2>
              <p className="text-gray-700">{declaration}</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
