import React from 'react';
import templateData from './templateData'; // Import your JSON data here

const NewResumeLayout = () => {
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
        <div className="flex justify-center py-10 bg-gray-100">
            {/* Resume Container */}
            <div className="w-[210mm] h-auto bg-white shadow-lg rounded-xl font-sans text-sm leading-relaxed text-gray-900 p-8 flex">
                
                {/* Sidebar */}
                <div className="w-1/4 bg-blue-50 p-6 rounded-lg">
                    {/* Profile Image */}
                    <div className="w-32 h-32 mx-auto mb-4">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-blue-400"
                        />
                    </div>
                    
                    {/* Name and Job Title */}
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{`${firstname} ${lastname}`}</h2>
                    <p className="text-lg text-gray-700 text-center mb-6">{profession}</p>

                    {/* Contact Information */}
                    <div className="text-center text-gray-600 mb-6">
                        <p>{phone}</p>
                        <p>{email}</p>
                        <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Summary</h3>
                        <p>{summary}</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-3/4 ml-8">
                    {/* Skills */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Experience</h3>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="font-semibold text-gray-800">{exp.title} at {exp.company}</h4>
                                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="font-semibold text-gray-800">{edu.sclName}</h4>
                                <p className="text-sm text-gray-600">
                                    {edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})
                                </p>
                                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Certifications</h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                            {certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects (Optional) */}
                    {projects && projects.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Projects</h3>
                            {projects.map((project, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold text-gray-800">{project.name}</h4>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                    <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Languages (Optional) */}
                    {languages && languages.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Languages</h3>
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

export default NewResumeLayout;
