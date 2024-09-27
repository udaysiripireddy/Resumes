import React from 'react';
import templateData from './templateData';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase, FaUserGraduate, FaAward, FaCode } from 'react-icons/fa';

const Resume = () => {
  const {
    firstname = 'John',
    lastname = 'Doe',
    profession = 'Software Developer',
    email = 'johndoe@example.com',
    phone = '123-456-7890',
    city = 'New York',
    summary = 'A highly skilled software developer with over 5 years of experience...',
    experience = [],
    projects = [],
    education = [],
    certifications = [],
    skills = [],
    declaration = 'I hereby declare that the information provided is accurate to the best of my knowledge.',
  } = templateData;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="w-[210mm] max-w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
        
        {/* Sidebar */}
        <aside className="w-1/3 bg-gray-900 text-white p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{`${firstname} ${lastname}`}</h1>
            <p className="text-xl mt-2">{profession}</p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Contact Info */}
            <section>
              <h2 className="text-lg font-semibold text-gray-300">Contact</h2>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  <span>{city}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-gray-400" />
                  <span>{phone}</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-lg font-semibold text-gray-300">Skills</h2>
              <ul className="mt-4 space-y-2 text-gray-200">
                {skills.length > 0 ? skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <FaCode className="mr-2 text-blue-500" />
                    {skill}
                  </li>
                )) : <li>No skills listed.</li>}
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-semibold text-gray-300">Certifications</h2>
              <ul className="mt-4 space-y-2 text-gray-200">
                {certifications.length > 0 ? certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <FaAward className="mr-2 text-green-500" />
                    {cert}
                  </li>
                )) : <li>No certifications listed.</li>}
              </ul>
            </section>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-2/3 p-8">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Profile</h2>
            <p className="text-gray-700 mt-4">{summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Experience</h2>
            {experience.length > 0 ? experience.map((exp, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-xl font-bold text-gray-800">{exp.title} - {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} | {exp.dateRange}</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            )) : <p className="text-gray-600">No experience listed.</p>}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Projects</h2>
            {projects.length > 0 ? projects.map((project, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-700 mt-2">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
            )) : <p className="text-gray-600">No projects listed.</p>}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Education</h2>
            {education.length > 0 ? education.map((edu, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-xl font-bold">{edu.sclName}</h3>
                <p className="text-sm text-gray-600">{`${edu.degree}, ${edu.fieldOfStudy} (${edu.gradeYear})`}</p>
                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
              </div>
            )) : <p className="text-gray-600">No education details provided.</p>}
          </section>

          {/* Declaration */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Declaration</h2>
            <p className="text-gray-700 mt-4">{declaration}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
