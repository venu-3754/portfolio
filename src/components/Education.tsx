import React from 'react';
import { GraduationCap, Book } from 'lucide-react';

const educationData = [
  {
    institution: "Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal",
    period: "2022-2026",
    degree: "B.Tech in Computer Science and Engineering (𝗖𝘆𝗯𝗲𝗿𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆)",
    details: "CGPA: 7.9",
    icon: GraduationCap
  },
  {
    institution: "S. V. A. Govt. Jr. College (Boys), Srikalahasti",
    period: "2020-2022",
    degree: "Intermediate (Mathematics, Physics, Chemistry)",
    details: "Percentage: 75%",
    icon: Book
  }
];

const Education = () => {
  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <edu.icon className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.institution}</h3>
              <p className="text-blue-500">{edu.period}</p>
              <p className="text-gray-700 font-medium">{edu.degree}</p>
              <p className="text-gray-600">{edu.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
