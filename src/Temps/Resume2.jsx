import React from 'react';
import templateData from './templateData';
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
        languages,
        summary,
        projects,
        declaration,
    } = templateData;

    return (
        <div className="flex justify-center py-8">
            <div className="w-[210mm] h-[297mm] bg-white shadow-lg p-8">
                <div className="flex">
                    {/* Left Section */}
                    <div className="w-1/3 pr-6">
                        <div className="text-center">
                            <img
                                src={`${profileImage}`}
                                alt="Profile"
                                className="rounded-full mx-auto mb-4"
                            />
                            <h2 className="text-xl font-bold">{`${firstname} ${lastname}`}</h2>
                            <p className="text-gray-600">{`${profession}`}</p>
                            <p className="text-gray-600">{`${city}`}</p>
                            <p className="text-gray-600">{`${phone}`}</p>
                            <p className="text-gray-600">{`${email}`}</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Summary</h3>
                            <p className="text-sm text-gray-600">
                                {`${summary}`}  </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Skills</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600">

                                {skills.map((skill, index) => (
                                    <li key={index} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={GitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-2/3 pl-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Education</h3>
                            <hr className="border-t-2 border-blue-500 w-full mb-2" />
                            {education.map((edu) => (
                                <div key={edu.EducationID} className="education-item">
                                    <h3>{edu.sclName}</h3>
                                    <p>{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                                    <p>{edu.sclLocation}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Experience</h3>
                            <hr className="border-t-2 border-blue-500 w-full mb-2" />

                            {experience.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <h3>{exp.title} at {exp.company}</h3>
                                    <p>{exp.location} ({exp.dateRange})</p>
                                    <ul>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                            <hr className="border-t-2 border-blue-500 w-full mb-2" />
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                <li>Certified web developer</li>
                                <li>React Developer Certification</li>
                            </ul>
                        </div>
                        <h3  className="text-lg font-semibold mb-2">Declaration</h3>
                        <hr className="border-t-2 border-blue-500 w-full mb-2" />
                        <p>{declaration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeLayout;
