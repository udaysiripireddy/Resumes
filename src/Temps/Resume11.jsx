import React from 'react';
import templateData from './templateData'; // Import your JSON data here

const UniqueStructuredResume = () => {
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
            <div className="w-[210mm] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">

                {/* Profile Section */}
                <div className="bg-gray-800 text-white flex items-center p-6">
                    {/* Profile Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-white"
                        />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-3xl font-bold">{`${firstname} ${lastname}`}</h1>
                        <p className="text-lg font-medium">{profession}</p>
                        <div className="mt-4">
                            <p>{phone}</p>
                            <p>{email}</p>
                            <a
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline block"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline block"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-8">
                    {/* Summary Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
                        <p>{summary}</p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-4">{exp.title} at {exp.company}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-gray-800 ml-4">{edu.sclName}</h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})
                                </p>
                                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                            {certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects (Optional) */}
                    {projects && projects.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
                            {projects.map((project, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                    <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Languages (Optional) */}
                    {languages && languages.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h2>
                            <ul className="list-disc list-inside text-gray-600 text-sm">
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

export default UniqueStructuredResume;
