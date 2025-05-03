import { Typography, Box } from "@mui/material";
import ButtonBaseDemo from "../../buttons/headerButton";

const Contact = () => {
  return (
    <Box className="flex flex-col items-center mt-8 space-y-6">
      {/* Email Section */}
      <Box className="flex flex-col items-center space-y-2">
        <Typography
          variant="h5"
          onClick={() =>
            (window.location.href = "mailto:radu.c.simuleac@gmail.com")
          }
          className="cursor-pointer hover:text-orange-400 transition-all underline"
          title="Click to send an email"
        >
          radu.c.simuleac@gmail.com
        </Typography>
      </Box>

      {/* Social Links as Plain Text */}
      <Box className="flex flex-col items-center space-y-2">
        <Typography
          component="a"
          href="https://linkedin.com/in/radu-constantin-simuleac-615146245"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-orange-400 underline transition-all"
        >
          LinkedIn Profile
        </Typography>
        <Typography
          component="a"
          href="https://github.com/qqoupp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-orange-400 underline transition-all"
        >
          GitHub Profile
        </Typography>
      </Box>

      {/* Call-to-action Button */}
      <Box className="flex flex-col items-center space-y-4">
        <ButtonBaseDemo
          title="Get in touch"
          onClick={() =>
            (window.location.href = "mailto:radu.c.simuleac@gmail.com")
          }
        />
      </Box>
    </Box>
  );
};

export default Contact;
