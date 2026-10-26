import React from 'react';
import { Github, MonitorPlay } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  github?: string;
  demo?: string;
}

const experiences: Experience[] = [
  {
    title: "Full Stack Development (MERN)",
    company: "SmartBridge (APSCHE)",
    period: "MAY-JULY 2025",
    description: "Developed responsive frontend web pages (Home, Login, User Dashboard & Courses) for an LMS portal for smooth navigation across all student-facing sections. Collaborated with a team of three to create a fully functional application using Generative AI tools.",
    techStack: ["React", "Node.js", "MongoDB", "MySQL", "Generative AI Tools"],
    github: "https://github.com/venu-3754/learnhub-your-center-for-skill-enhancement",
    demo: "https://drive.google.com/file/d/1rB-mTteLcYMZsLIEQiCpsytcDdDwxNDT/view?usp=drive_link"
  }
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-blue-500">{exp.title}</h3>
            <div className="flex space-x-2">
              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repo"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <Github size={18} />
                </a>
              )}
              {exp.demo && (
                <a
                  href={exp.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Demo"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <MonitorPlay size={18} />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-800 font-medium">{exp.company}</p>
          <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
          <p className="text-gray-700 mb-3">{exp.description}</p>
          {exp.techStack && (
            <p className="text-sm text-gray-500"><strong>Tech Used:</strong> {exp.techStack.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
