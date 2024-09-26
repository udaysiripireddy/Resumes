import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

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
    <div className="bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white w-full max-w-[210mm] rounded-lg shadow-lg overflow-hidden">
        
        {/* Header */}
        <header className="bg-blue-600 text-white text-center p-6">
          <h1 className="text-4xl font-bold">{`${firstname} ${lastname}`}</h1>
          <p className="text-lg italic">{profession}</p>
        </header>

        {/* Main Content */}
        <div className="p-6">
          {/* Contact Information */}
          <section className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Contact Information</h2>
            <div className="flex items-center mt-2">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <p>{city}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaEnvelope className="text-blue-600 mr-2" />
              <p>{email}</p>
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="text-blue-600 mr-2" />
              <p>{phone}</p>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-50 hover:bg-gray-100 transition duration-200">
                <h3 className="text-lg font-bold">{`${exp.title} at ${exp.company}`}</h3>
                <p className="text-sm text-gray-600">{`${exp.location} | ${exp.dateRange}`}</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
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
            <h2 className="text-2xl font-semibold text-blue-600">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4 p-4 border-l-4 border-blue-600 bg-gray-50 hover:bg-gray-100 transition duration-200">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="mb-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center mb-2">
                  <FaGraduationCap className="text-blue-600 mr-2" />
                  {cert}
                </li>
              ))}
            </ul>
          </section>

          {/* Declaration */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">Declaration</h2>
            <p className="text-gray-700">{declaration}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
