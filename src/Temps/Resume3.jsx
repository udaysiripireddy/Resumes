import React from 'react';
import templateData from './templateData'; // Import your JSON data here

const ResumeLayout = () => {
    const {
        profileImage,
        firstname,
        lastname,
        profession,
        city,
        country,
        phone,
        email,
        linkedIn,
        GitHub,
        education,
        experience,
        skills,
        certifications,
        summary,
        declaration,
    } = templateData;

    return (
        <div className="flex justify-center py-8 bg-gray-200">
            {/* A4 Size Layout */}
            <div className="w-[210mm] h-[297mm] bg-white shadow-lg p-10 rounded-lg font-sans text-xs leading-relaxed text-gray-800">
                
                {/* Profile Section */}
                <div className="flex justify-between items-center mb-5">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{`${firstname} ${lastname}`}</h2>
                        <p className="text-lg font-semibold mb-4">{profession}</p>
                        <div className="text-sm text-gray-700">
                            <p>{city}, {country}</p>
                            <p>{phone}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-200"
                    />
                </div>

                {/* Social Links */}
                <div className="mb-6">
                    <div className="flex space-x-4 text-sm">
                        <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Resume Content */}
                <div className="flex justify-between">
                    {/* Left Container */}
                    <div className="w-[48%]">
                        {/* Summary */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Summary</h3>
                            <hr className="border-gray-300 mb-2" />
                            <p>{summary}</p>
                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Education</h3>
                            <hr className="border-gray-300 mb-2" />
                            {education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold text-gray-700">{edu.sclName}</h4>
                                    <p className="text-sm text-gray-600">
                                        {edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})
                                    </p>
                                    <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="w-[48%]">
                        {/* Experience */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Experience</h3>
                            <hr className="border-gray-300 mb-2" />
                            {experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold text-gray-700">{exp.title} at {exp.company}</h4>
                                    <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Skills</h3>
                            <hr className="border-gray-300 mb-2" />
                            <div className="flex flex-wrap">
                                {skills.map((skill, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                    <hr className="border-gray-300 mb-2" />
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        {certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>

                {/* Declaration */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Declaration</h3>
                    <hr className="border-gray-300 mb-2" />
                    <p className="text-sm text-gray-600">{declaration}</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeLayout;
