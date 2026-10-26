import React from 'react';
import { Brain, Gamepad2, Globe, BookOpen, Stethoscope, ExternalLink, Github, MonitorPlay, Trophy } from 'lucide-react';

const allProjects = [
  // Cybersecurity Projects
  {
    category: "Cybersecurity",
    title: "Azure Sentinel Cloud SOC",
    description: "SOC project for monitoring and managing security events in cloud environments.",
    techStack: ["Azure", "Cloud", "Microsoft Sentinel","SIEM", "SOAR", "SOC"],
    icon: BookOpen,
    github: "https://github.com/venu-3754/azure-sentinel-cloud-soc",
    demo: "https://venu-3754.github.io/azure-sentinel-cloud-soc/",
    isWinner:true
  },
  {
    category: "Cybersecurity",
    title: "Splunk SIEM Incident Detection",
    description: "SIEM-based Windows Security Event Monitoring & Detection using Splunk Enterprise.",
    techStack: ["Splunk", "Windows 11", "SIEM", "Log Analysis","Playbook"],
    icon: BookOpen,
    github: "https://github.com/venu-3754/splunk-siem-incident-detection",
    demo: "https://github.com/venu-3754/splunk-siem-incident-detection"
  },
  {
    category: "Cybersecurity",
    title: "Wireshark Network Protocol Analysis",
    description: "Practical Wireshark network protocol analysis project demonstrating HTTP, DNS, TCP, ARP, and HTTP credential capture with real packet captures.",
    techStack: ["Python", "Wireshark", "Network Analysis", "Windows 11"],
    icon: BookOpen,
    github: "https://github.com/venu-3754/wireshark-network-protocol-analysis",
    demo: "https://github.com/venu-3754/wireshark-network-protocol-analysis"
  },
  {
    category: "Cybersecurity",
    title: "Enterprise Network Security Assessment using Nmap",
    description: "Tested a public server to identify active hosts, open ports, running services, operating system information, and overall security posture.",
    techStack: ["Nmap", "Command Line", "Network Security Assessment", "Windows 11"],
    icon: Brain,
    github: "https://github.com/venu-3754/nmap-enterprise-network-security-assessment",
    demo: "https://github.com/venu-3754/nmap-enterprise-network-security-assessment"
  },

  /***icon: Stethoscope***/
  


  // Web Development Projects
  {
    category: "Web Development",
    title: "E-Commerce Forever",
    description: "A full-stack e-commerce website built using the MERN stack.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    icon: Globe,
    github: "https://github.com/venu-3754/Ecommerce-Forever",
    demo: "https://forever-bay.vercel.app/",
    isWinner: true
  },
  {
    category: "Web Development",
    title: "My Portfolio Website",
    description: "My personal portfolio showcasing all projects and skills.",
    techStack: ["ReactJS", "Type Script","Vite"],
    icon: Globe,
    github: "https://github.com/venu-3754/portfolio",
    demo: "https://songavenugopal.netlify.app/"
  },
  {
    category: "Web Development",
    title: "Travel Partner",
    description: "Tourist Travel Agency Website for booking and exploring travel destinations.",
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    icon: Globe,
    github: "https://github.com/venu-3754/Travel-Partner",
    demo: "https://yourtravelpartner.vercel.app/"
  },
  {
    category: "Web Development",
    title: "Weather App",
    description: "A weather application that fetches real-time weather data from an API and displays it to the user.",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    icon: Globe,
    github: "https://github.com/venu-3754/Weather_App",
    demo: "https://venu-3754.github.io/Weather_App/"
  },

  // Academic Projects
  {
    category: "Academic Projects",
    title: "Voting-Based Ensemble Framework for Network Outlier Detection",
    description: "A machine-learning network intrusion and outlier detection system using a voting-based ensemble to classify NSL-KDD and CIC-IDS-2017 traffic through a Flask web application.",
    techStack: ["Python", "Flask", "Numpy", "Pandas", "Scikit-learn", "SQLite", "HTML", "CSS", "JavaScript"],
    icon: Brain,
    github: "https://github.com/venu-3754/Voting-Based-Ensemble-Framework-for-NOD",
    demo: "https://network-outlier-detection.onrender.com/",
    isWinner: true
  },

  // Others
  {
    category: "Others",
    title: "Housing Price Predictor",
    description: "A machine learning model to predict housing prices based on various features.",
    techStack: ["Python", "Numpy", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    icon: Gamepad2,
    github: "https://github.com/venu-3754/House-Price-Prediction-System"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <project.icon className="text-blue-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {project.title}
              {project.isWinner && (
                <span className="bg-yellow-300 text-xs text-black px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Trophy size={12} /> Winner
                </span>
              )}
            </h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
            {project.techStack && (
              <p className="text-sm text-gray-500 mt-2"><strong>Tech Used:</strong> {project.techStack.join(", ")}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View Demo"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <MonitorPlay size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const categories = ["Cybersecurity", "Web Development", "Academic Projects", "Others"];

  return (
    <div className="space-y-10">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.filter(p => p.category === category).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
