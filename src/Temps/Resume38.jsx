import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume = () => {
  const {
    firstname,
    lastname,
    profession ,
    email ,
    phone ,
    city ,
    summary ,
    experience ,
    projects ,
    education,
    certifications ,
    skills ,
    declaration ,
  } = templateData;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="w-[800px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        
        {/* Header Section */}
        <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">{`${firstname} ${lastname}`}</h1>
            <p className="text-xl">{profession}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {city}
            </span>
            <span className="flex items-center">
              <FaEnvelope className="mr-2" /> {email}
            </span>
            <span className="flex items-center">
              <FaPhone className="mr-2" /> {phone}
            </span>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="flex">
          {/* Left Column */}
          <aside className="w-1/3 bg-gray-100 p-6 border-r border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            <p className="text-gray-700 mt-2">{summary}</p>

            {/* Skills Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Skills</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            {/* Certifications Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Certifications</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>

            {/* Links Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Links</h2>
              <div className="flex flex-col mt-2">
                <a href={`mailto:${email}`} className="text-blue-600">{email}</a>
                <a href={`tel:${phone}`} className="text-blue-600">{phone}</a>
                <a href="https://linkedin.com" className="text-blue-600">LinkedIn</a>
                <a href="https://github.com" className="text-blue-600">GitHub</a>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <main className="w-2/3 p-6">
            {/* Experience Section */}
            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            <div className="mt-4">
              {experience.length > 0 ? experience.map((exp, index) => (
                <div key={index} className="mb-4 relative">
                  <div className="absolute left-0 top-0 w-1 bg-blue-600 h-full"></div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-800">{exp.title} at {exp.company}</h3>
                    <p className="text-gray-600">{exp.dateRange} | {exp.location}</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )) : <p className="text-gray-600">No experience listed.</p>}
            </div>

            {/* Projects Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Projects</h2>
            <div className="mt-4">
              {projects.length > 0 ? projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                  <p className="text-gray-700 mt-2"><strong>Technologies:</strong> {project.technologies}</p>
                </div>
              )) : <p className="text-gray-600">No projects listed.</p>}
            </div>

            {/* Education Section */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Education</h2>
            <div className="mt-4">
              {education.length > 0 ? education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{edu.sclName}</h3>
                  <p className="text-gray-600">{`${edu.degree} in ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                  <p className="text-gray-600">{edu.sclLocation}</p>
                </div>
              )) : <p className="text-gray-600">No education details listed.</p>}
            </div>
          </main>
        </div>

        {/* Declaration Section */}
        <section className="p-6 border-t border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800">Declaration</h2>
          <p className="text-gray-700 mt-2">{declaration}</p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
