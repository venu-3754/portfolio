import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  title: string;
  content: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ Icon, title, content, href }) => {
  const ContentElement = href ? 'a' : 'p';
  const contentProps = href ? {
    href,
    className: "text-blue-400 hover:text-blue-500 truncate block" // Added truncate and block
  } : {
    className: "text-gray-600 truncate block" // Added truncate and block
  };

  return (
    <div className="flex items-center space-x-4 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0"> {/* Added flex-shrink-0 */}
        <Icon className="text-blue-400 w-6 h-6" />
      </div>
      <div className="min-w-0 flex-1"> {/* Added min-w-0 and flex-1 */}
        <h3 className="font-semibold text-gray-700 mb-1">{title}</h3>
        <ContentElement {...contentProps}>
          {content}
        </ContentElement>
      </div>
    </div>
  );
};

export default ContactItem;