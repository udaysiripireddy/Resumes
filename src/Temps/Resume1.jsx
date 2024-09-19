import React from 'react';
import templateData from './templateData';

const Resume = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100"> {/* Parent wrapper with background color */}
            <div className="max-w-[21cm] min-h-[29.7cm] p-6 bg-white border border-gray-500 shadow-lg"> {/* A4 size container with border */}
                <header className="flex items-center border-b pb-4 mb-4">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold">{`${templateData.firstname} ${templateData.lastname}`}</h1>
                        <p className="text-lg">{`${templateData.profession}`}</p>
                    </div>
                    <div className="text-right">
                        <p>{`${templateData.city}`}</p>
                        <p>{`${templateData.email}`} | {`${templateData.phone}`}</p>
                    </div>
                </header>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Summary</h2>
                    <p>{`${templateData.summary}`}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    {templateData.experience.map((exp, index) => (
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
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                    {templateData.education.map((edu, index) => (
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
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        {templateData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </ul>
                </section>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Certifications</h2>
                    <ul className="list-disc list-inside">
                        {templateData.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Projects</h2>
                    {templateData.projects.map((project, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                            <p className="text-sm text-gray-600">{project.description}</p>
                            <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-semibold mb-2">Declaration</h2>
                <p>{`${templateData.declaration}`}</p>
            </div>
        </div>
    );
};

export default Resume;
