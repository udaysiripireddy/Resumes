import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaUserGraduate, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';

const Resume = () => {
  const {
    firstname = 'Jane',
    lastname = 'Doe',
    profession = 'Web Developer',
    email = 'jane.doe@example.com',
    phone = '555-987-6543',
    city = 'Los Angeles, CA',
    summary = 'Creative web developer with a passion for building responsive and user-friendly websites. Experienced in JavaScript, React, and Node.js.',
    experience = [],
    projects = [],
    education = [],
    certifications = [],
    skills = [],
    declaration = 'The information provided is true and accurate to the best of my knowledge.',
  } = templateData;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">{`${firstname} ${lastname}`}</h1>
          <p className="text-xl italic">{profession}</p>
          <div className="mt-4 flex justify-center space-x-6">
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {city}</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> {email}</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> {phone}</p>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
          {/* Sidebar */}
          <aside className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-2xl font-semibold text-blue-500">Skills</h2>
            <ul className="mt-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center my-2">
                  <FaCode className="text-blue-500 mr-2" /> {skill}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mt-4">Certifications</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </aside>

          {/* Main Content Section */}
          <main className="md:col-span-2 space-y-6">
            {/* Summary Section */}
            <section className="bg-blue-100 p-4 rounded-md">
              <h2 className="text-2xl font-semibold text-blue-500">Professional Summary</h2>
              <p className="text-gray-700 mt-2">{summary}</p>
            </section>

            {/* Experience Section */}
            <section className="bg-gray-100 p-4 rounded-md">
              <h2 className="text-2xl font-semibold text-blue-500">Experience</h2>
              {experience.length > 0 ? experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{exp.title} at {exp.company}</h3>
                  <p className="text-gray-600">{exp.dateRange} | {exp.location}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )) : <p className="text-gray-600">No experience listed.</p>}
            </section>

            {/* Projects Section */}
            <section className="bg-blue-100 p-4 rounded-md">
              <h2 className="text-2xl font-semibold text-blue-500">Projects</h2>
              {projects.length > 0 ? projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                  <p className="text-gray-700 mt-2"><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              )) : <p className="text-gray-600">No projects listed.</p>}
            </section>

            {/* Education Section */}
            <section className="bg-gray-100 p-4 rounded-md">
              <h2 className="text-2xl font-semibold text-blue-500">Education</h2>
              {education.length > 0 ? education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
                  <p className="text-gray-600">{`${edu.degree} in ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                  <p className="text-gray-600">{edu.sclLocation}</p>
                </div>
              )) : <p className="text-gray-600">No education details listed.</p>}
            </section>
          </main>
        </div>

        {/* Declaration Section */}
        <section className="bg-gradient-to-l from-blue-300 to-blue-500 text-white p-6 rounded-b-lg">
          <h2 className="text-2xl font-semibold">Declaration</h2>
          <p className="mt-2">{declaration}</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
