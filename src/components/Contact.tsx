import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import ContactItem from './ContactItem';

const contactItems = [
  {
    Icon: Mail,
    title: "Email",
    content: "songavenugopal@gmail.com",
    href: "mailto:songavenugopal@gmail.com"
  },
  {
    Icon: Phone,
    title: "Phone",
    content: "+91 xxxxxxxxxx",
    href: "tel:+91xxxxxxxxxx"
  },
  {
    Icon: MapPin,
    title: "Location",
    content: "Andhra Pradesh, India"
  }
];

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/venu-3754",
    label: "GitHub"
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/songavenugopal/",
    label: "LinkedIn"
  }
];

const Contact = () => {
  return (
    <div className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
      <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
        Get in Touch
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {contactItems.map((item, index) => (
          <div key={index} className="min-w-0 break-words"> {/* Added break-words to handle long content */}
            <ContactItem {...item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 pt-6 border-t border-blue-100">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-all duration-200 transform hover:-translate-y-1"
            aria-label={link.label}
          >
            <link.Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;