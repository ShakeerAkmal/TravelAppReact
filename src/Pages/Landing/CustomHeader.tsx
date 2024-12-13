import { useState } from "react";
import { Layout, Button } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo, SecondaryButton } from "../../components/styled";
import { Link } from "react-router-dom";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.Primary};
  padding: 0 24px;
`;



const Nav = styled.div`
  display: flex;
  gap: 1rem;

  button > a {
    color: ${colors.Text}; /* Light Peach */
  }

  a {
    color: ${colors.Background}; /* Light Peach */
  }
`;

const HamburgerButton = styled(Button)`
  @media (min-width: 768px) {
    display: none; /* Hide hamburger button on larger screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide nav links on small screens */
  }
`;
const CustomHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <StyledHeader>
      <Logo>
        <a href="/">TravelNova</a>
      </Logo>
      <Nav>
        {/* Navbar Links for larger screens */}
        <NavLinks>
          {/* <Button type="link" href="#about">
            About
          </Button>
          <Button type="link" href="#packages">
            Tour Packages
          </Button>
          <Button type="link" href="#contact">
            Contact
          </Button> */}

          <SecondaryButton>
            <Link to="/signin">Sign In</Link>
          </SecondaryButton>
        </NavLinks>

        {/* Hamburger Button for small screens */}
        <HamburgerButton
          icon={<MenuOutlined />}
          onClick={showDrawer}
          type="text"
        />

        {/* Drawer (Hamburger Menu) */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
          width={250}
        >
          <Menu
            mode="vertical"
            onClick={closeDrawer} // Close drawer when an item is clicked
          >
            <Menu.Item key="about">
              <Button type="link" href="#about">
                About
              </Button>
            </Menu.Item>
            <Menu.Item key="packages">
              <Button type="link" href="#packages">
                Tour Packages
              </Button>
            </Menu.Item>
            <Menu.Item key="contact">
              <Button type="link" href="#contact">
                Contact
              </Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Nav>
    </StyledHeader>
  );
};

export default CustomHeader;
