import { Typography, Button } from '@mui/material';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ButtonBaseDemo from '../../buttons/headerButton';

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-8 space-y-6">
      {/* Email Section */}
      <div className="flex items-center space-x-4">
        <FaEnvelope 
          className="text-orange-400 text-3xl cursor-pointer"
          onClick={() => window.location.href = 'mailto:radu.c.simuleac@gmail.com'}
          title="Send me an email"
        />
        <Typography 
          onClick={() => window.location.href = 'mailto:radu.c.simuleac@gmail.com'}
          variant="h5" 
          className="text-white cursor-pointer hover:text-orange-400 transition-all"
          title="Click to send an email"
        >
          radu.c.simuleac@gmail.com
        </Typography>
      </div>

      {/* Phone Section */}
  

      {/* Social Icons */}
      <div className="flex space-x-6 text-3xl mt-6">
        <a
          href="https://linkedin.com/in/radu-constantin-simuleac-615146245"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-all"
        >
          <FaLinkedin className="text-orange-400" />
        </a>
        <a
          href="https://github.com/qqoupp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-all"
        >
          <FaGithub className="text-orange-400" />
        </a>
       
      </div>
      
      {/* Add a call to action (optional) */}
      <div className="flex flex-col items-center space-y-4">
      <ButtonBaseDemo title="Get in touch" onClick={() => window.location.href = 'mailto:radu.c.simuleac@gmail.com'} />
      </div>
    </div>
  );
};

export default Contact;
