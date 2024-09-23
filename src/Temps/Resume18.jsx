import React from 'react';
import templateData from './templateData'; // Import your JSON data here

const SidebarLayoutResumeA4 = () => {
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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '210mm', height: '297mm' }}>
                {/* Sidebar */}
                <aside className="w-1/4 bg-blue-900 text-white p-6 flex flex-col items-center" style={{ width: '50mm', minWidth: '50mm' }}>
                    <div className="mb-6">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white"
                        />
                    </div>
                    <h1 className="text-xl font-bold text-center">{`${firstname} ${lastname}`}</h1>
                    <p className="text-lg font-medium mb-4 text-center">{profession}</p>
                    <div className="text-sm text-center space-y-2">
                        <p>{phone}</p>
                        <p>{email}</p>
                        <a
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-300 hover:underline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={GitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-300 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-3/4 p-8">
                    {/* Summary Section */}
                    <section id="summary" className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p className="text-gray-600 leading-relaxed">{summary}</p>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium text-center"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{exp.title} at {exp.company}</h3>
                                <p className="text-sm text-gray-600">{exp.location} ({exp.dateRange})</p>
                                <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Education Section */}
                    <section id="education" className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{edu.sclName}</h3>
                                <p className="text-sm text-gray-600">
                                    {edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})
                                </p>
                                <p className="text-sm text-gray-600">{edu.sclLocation}</p>
                            </div>
                        ))}
                    </section>

                    {/* Certifications Section */}
                    <section id="certifications" className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Certifications</h2>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                            {certifications.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Projects (Optional) */}
                    {projects && projects.length > 0 && (
                        <section id="projects" className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
                            {projects.map((project, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                    <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Languages (Optional) */}
                    {languages && languages.length > 0 && (
                        <section id="languages" className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Languages</h2>
                            <ul className="list-disc list-inside text-gray-600 text-sm">
                                {languages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SidebarLayoutResumeA4;