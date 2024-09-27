import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase, FaUserGraduate, FaAward, FaCode } from 'react-icons/fa';

const Resume = () => {
  const {
    firstname = 'Jessica',
    lastname = 'Brown',
    profession = 'Software Engineer',
    email = 'jessica.brown@example.com',
    phone = '555-123-4567',
    city = 'New York, NY',
    summary = 'Dedicated software engineer with 5+ years of experience in developing scalable web applications. Proficient in JavaScript, React, and Node.js.',
    experience = [],
    projects = [],
    education = [],
    certifications = [],
    skills = [],
    declaration = 'I hereby declare that the above information is true and correct.',
  } = templateData;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="max-w-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-teal-600 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">{`${firstname} ${lastname}`}</h1>
          <p className="text-xl font-medium">{profession}</p>
          <div className="flex justify-center space-x-6 mt-4">
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {city}</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> {email}</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> {phone}</p>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column for Skills and Certifications */}
          <aside className="md:col-span-1 bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-teal-600">Skills</h2>
            <ul className="mt-2 list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <FaCode className="text-teal-600 mr-2" /> {skill}
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-2xl font-semibold text-teal-600">Certifications</h2>
            <ul className="mt-2 list-disc list-inside">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <FaAward className="text-teal-600 mr-2" /> {cert}
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Column for Main Content */}
          <main className="md:col-span-2 space-y-6">
            <section className="bg-gray-200 p-4 rounded-lg border border-gray-300">
              <h2 className="text-2xl font-semibold text-teal-600">Professional Summary</h2>
              <p className="mt-2">{summary}</p>
            </section>

            <section className="bg-gray-200 p-4 rounded-lg border border-gray-300">
              <h2 className="text-2xl font-semibold text-teal-600">Experience</h2>
              {experience.length > 0 ? experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold">{exp.title} at {exp.company}</h3>
                  <p className="text-gray-600">{exp.dateRange} | {exp.location}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )) : <p>No experience listed.</p>}
            </section>

            <section className="bg-gray-200 p-4 rounded-lg border border-gray-300">
              <h2 className="text-2xl font-semibold text-teal-600">Projects</h2>
              {projects.length > 0 ? projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p>{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              )) : <p>No projects listed.</p>}
            </section>

            <section className="bg-gray-200 p-4 rounded-lg border border-gray-300">
              <h2 className="text-2xl font-semibold text-teal-600">Education</h2>
              {education.length > 0 ? education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold">{edu.sclName}</h3>
                  <p>{`${edu.degree} in ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                  <p>{edu.sclLocation}</p>
                </div>
              )) : <p>No education details listed.</p>}
            </section>
          </main>
        </div>

        {/* Declaration Section */}
        <section className="bg-teal-600 text-white p-4 rounded-b-lg">
          <h2 className="text-xl font-semibold">Declaration</h2>
          <p>{declaration}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
