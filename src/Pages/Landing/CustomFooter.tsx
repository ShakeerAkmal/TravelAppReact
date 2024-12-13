import { Layout } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faXTwitter } from "@fortawesome/free-brands-svg-icons";  // Corrected Twitter icon

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background-color: ${colors.Primary}; /* Sunset Orange */
  color: ${colors.Background}; /* Light Peach */
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  /* Grid layout for larger screens */
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
    gap: 20px;
  }

  .footer-links, .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 15px 0;
    
    @media (min-width: 769px) {
      justify-content: flex-start;
    }
  }

  .footer-links a, .social-icons svg {
    color: ${colors.Accent}; /* Golden Yellow */
    font-weight: bold;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${colors.Background}; /* Light Peach */
    }
  }

  /* Reduce the size of social media icons for smaller screens */
  .social-icons svg {
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  /* Footer text styling */
  p {
    margin: 0 0 10px;
    font-size: 0.9rem;
    color: ${colors.Background}; /* Light Peach */
  }

  /* Reduce padding on smaller screens */
  .footer-links a {
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const CustomFooter = () => {
  return (
    <StyledFooter>
      <p>© 2024 TravelNova. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faInstagramSquare} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faFacebookSquare} />
      </div>
    </StyledFooter>
  );
};

export default CustomFooter;
