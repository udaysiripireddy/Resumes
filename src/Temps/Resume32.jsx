import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle, FaUserGraduate, FaClipboardList, FaCode, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

// Main Resume Component
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
    <div className="bg-gray-100 p-8 flex justify-center items-center min-h-screen">
      <div className="bg-white w-full max-w-[210mm] rounded-lg shadow-lg overflow-hidden">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center p-8">
          <h1 className="text-5xl font-extrabold">{`${firstname} ${lastname}`}</h1>
          <p className="text-xl italic mt-2">{profession}</p>
        </header>

        <div className="flex flex-row p-6">

          {/* Sidebar */}
          <aside className="w-1/3 pr-4 border-r border-gray-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Contact</h2>
            <div className="flex items-center mt-2 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <p>{city}</p>
            </div>
            <div className="flex items-center mt-2 text-gray-700">
              <FaEnvelope className="text-blue-600 mr-2" />
              <p>{email}</p>
            </div>
            <div className="flex items-center mt-2 text-gray-700">
              <FaPhone className="text-blue-600 mr-2" />
              <p>{phone}</p>
            </div>

            <h2 className="text-3xl font-semibold text-blue-600 mt-4 mb-2">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-blue-600 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="w-2/3 pl-4">
            {/* Summary */}
            <section className="mb-6 border-b pb-4">
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Summary</h2>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </section>

            {/* Experience */}
            <section className="mb-6 border-b pb-4">
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-50 hover:bg-gray-100 transition duration-200 shadow-sm rounded">
                  <h3 className="text-lg font-bold flex items-center">
                    <FaBriefcase className="mr-2 text-blue-600" />
                    {`${exp.title} at ${exp.company}`}
                  </h3>
                  <p className="text-sm text-gray-600">{`${exp.location} | ${exp.dateRange}`}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheckCircle className="inline-block text-blue-600 mr-1" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section className="mb-6 border-b pb-4">
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-50 hover:bg-gray-100 transition duration-200 shadow-sm rounded">
                  <h3 className="text-lg font-bold flex items-center">
                    <FaLaptopCode className="mr-2 text-blue-600" />
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="mb-6 border-b pb-4">
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <FaUserGraduate className="text-blue-600 mr-2" />
                  <div>
                    <h3 className="text-lg font-bold">{edu.sclName}</h3>
                    <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                    <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section className="mb-6 border-b pb-4">
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FaCheckCircle className="text-blue-600 mr-2" />
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Declaration */}
            <section>
              <h2 className="text-3xl font-semibold text-blue-600 mb-2">Declaration</h2>
              <p className="text-gray-700">{declaration}</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
