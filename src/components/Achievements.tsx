import React from 'react';
import { Trophy, Medal, Award, FileBadge, Github, MonitorPlay, File } from 'lucide-react'; // Import icons

interface Achievement {
  title: string;
  icon: JSX.Element;
  github?: string;
  demo?: string;
  drive?: string;
}

const achievements: Achievement[] = [
  {
    title: "Presented a paper on 'Voting-Based Ensemble Framework for Network Outlier Detection' at the 14th International Conference on Contemporary Engineering and Technology (ICCET-2026).",
    icon: <Award className="text-blue-500" />,
    github: "https://github.com/venu-3754/Voting-Based-Ensemble-Framework-for-NOD",
    demo: "https://network-outlier-detection.onrender.com/",
    drive: "https://github.com/venu-3754/Voting-Based-Ensemble-Framework-for-NOD/blob/main/docs/images/presentation-certificate.png"
  },
  {
    title: "Being a 2nd year student, I secured 3rd place in a coding competition at RGMCET, outperforming both junior and senior participants.",
    icon: <Trophy className="text-blue-500" />,
    drive: "https://lnkd.in/p/dZySDt_p"
  },
  {
    title: "Participated in CODEQUEST 24-Hour Hackathon on campus",
    icon: <FileBadge className="text-blue-500" />,
    drive: "#"
  },
  {
    title: "Achieved Global Rank in 48 in Starters 221",
    icon: <Medal className="text-blue-500" />,
    drive: "https://www.codechef.com/rankings/START221C?itemsPerPage=100&order=asc&page=1&search=songavenugopal&sortBy=rank"
  },
  {
    title: "3 Star coder on CodeChef",
    icon: <Trophy className="text-blue-500" />,
    drive: "https://www.codechef.com/users/songavenugopal"
  }
];

const Achievements = () => {
  return (
    <div className="space-y-4">
      {achievements.map((exp, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform"
        >
          <div className="mt-1">{exp.icon}</div>
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{exp.title}</p>
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
                {exp.drive && (
                  <a
                    href={exp.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Document"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    <File size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
