import React from 'react';
import templateData from './templateData'; // Import your JSON data here

const MinimalistResume = () => {
    const {
        profileImage,
        firstname,
        lastname,
        profession,
        phone,
        email,
        linkedIn,
        GitHub,
        summary,
        skills,
        experience,
        education,
        certifications,
        projects,
        languages,
    } = templateData;

    return (
        <div className="flex justify-center py-12 bg-gray-200">
            {/* Resume Container */}
            <div className="w-[210mm] bg-white shadow-xl rounded-lg font-sans text-sm leading-relaxed text-gray-900 p-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center mb-8">
                    {/* Profile Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-gray-300"
                        />
                    </div>

                    {/* Name and Job Title */}
                    <div className="ml-4 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800">{`${firstname} ${lastname}`}</h1>
                        <p className="text-lg text-gray-600 font-medium">{profession}</p>
                        <div className="mt-2 space-y-1 text-gray-500">
                            <p>{phone}</p>
                            <p>{email}</p>
                            <a
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Summary Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Summary</h2>
                        <p>{summary}</p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{exp.title} at {exp.company}</h3>
                                <p className="text-sm text-gray-500">{exp.location} ({exp.dateRange})</p>
                                <ul className="list-disc list-inside text-gray-500 text-sm mt-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{edu.sclName}</h3>
                                <p className="text-sm text-gray-500">{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                                <p className="text-sm text-gray-500">{edu.sclLocation}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Certifications</h2>
                        <ul className="list-disc list-inside text-gray-500 text-sm">
                            {certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects (Optional) */}
                    {projects && projects.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Projects</h2>
                            {projects.map((project, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                                    <p className="text-sm text-gray-500">{project.description}</p>
                                    <p className="text-sm text-gray-500">Technologies: {project.technologies}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Languages (Optional) */}
                    {languages && languages.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">Languages</h2>
                            <ul className="list-disc list-inside text-gray-500 text-sm">
                                {languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MinimalistResume;
