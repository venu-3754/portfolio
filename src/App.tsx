import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Background from './components/Background';
import FloatingImage from './components/FloatingImage';
import Section from './components/Section';
import WorkExperience from './components/WorkExperience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';
import TypewriterText from './components/TypewriterText';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';

function App() {
  return (
    <div>
      <Navbar />
      <Background />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 pt-20">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
              SONGA VENU GOPAL
            </h1>
            <TypewriterText 
              text="Software Engineer | SOC Analyst| Web Developer | Cybersecurity"
              className="text-lg md:text-xl text-blue-400 mb-6 block h-8"
            />
            
            <div className="flex space-x-6 mb-8">
              <a href="https://github.com/venu-3754" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/songavenugopal/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-col items-center space-y-4 mt-6 w-full max-w-md">
              <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                <a
                  href="mailto:songavenugopal@gmail.com"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Mail Me
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:-translate-y-1 mt-4 sm:mt-0"
                >
                  Contact
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1jq27uD9ElHkFFAJDyXh6sZVUZCmxSLDv/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:-translate-y-1 w-full"
              >
                My Resume
              </a>
            </div>
          </div>

          <FloatingImage
            src="https://res.cloudinary.com/nr8sgb3x/image/upload/v1792940526/IMG_20260530_123051.png"
            alt="Venu"
          />
        </div>
        
        {/* About Me Section */}
        <Section title="About Me" id="professional-summary">
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
            <p className="leading-relaxed text-gray-800">
              B.Tech Computer Science and Engineering(𝗖𝘆𝗯𝗲𝗿𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆) graduate with hands-on experience in 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 and 𝗖𝘆𝗯𝗲𝗿𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆. Passionate about building secure applications and solving security challenges through network analysis, security monitoring, and incident investigation. Currently seeking opportunities as a 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿, 𝗖𝘆𝗯𝗲𝗿𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗔𝗻𝗮𝗹𝘆𝘀𝘁, or 𝗦𝗢𝗖 𝗔𝗻𝗮𝗹𝘆𝘀𝘁 where I can contribute, learn, and grow.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {[ 
                { label: "Projects", count: 10 },
                { label: "Certifications", count: 11 },
                { label: "Achievements", count: 5 },
                { label: "Work Experience", count: 1 }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-center rounded-2xl p-2 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-blue-500 mb-2">
                    <span className="count-up">{item.count}+ </span>
                  </h3>
                  <p className="text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" id="education">
          <Education />
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" id="experience">
          <WorkExperience />
        </Section>

        {/* Skills Section */}
        <Section title="Skills" id="skills">
          <Skills />
        </Section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <Projects />
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements" id="achievements">
          <Achievements />
        </Section>

        {/* Extracurricular */}
        <Section title="Extracurricular Activities" id="extracurricular">
          <ExtraCurricular />
        </Section>

        {/* Certifications Section */}
        <Section title="Certifications" id="certifications">
          <Certifications />
        </Section>

        {/* Contact Section */}
        <Section title="Contact" id="contact">
          <Contact />
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto text-center">
          <p className="text-blue-400 text-lg italic font-cursive">
            “Not everyone knows everything, but everyone knows something. The point is, can you get it done with what you know?” - SVG
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
