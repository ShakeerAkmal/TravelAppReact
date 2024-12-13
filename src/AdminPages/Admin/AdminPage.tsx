import React, { useState } from "react";
import { Empty, Layout, Menu, MenuProps } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";
import ManageTours from "./ManageTours";
import ViewBookings from "./ViewBookings";
import { Logo, StyledContent } from "../../components/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMountainSun,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const { Header, Content, Sider } = Layout;

const LogoWrapper = styled.div`
  padding: 1rem;
`;
const AdminWrapper = styled(Layout)`
  min-height: 100vh;

  .ant-layout-sider {
    background-color: ${colors.Primary};
  }

  .ant-layout-header {
    background-color: ${colors.Primary};
    color: ${colors.Background};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .ant-layout-content {
    padding: 20px;
    background-color: ${colors.Background};
  }

  .ant-menu {
    background-color: ${colors.Primary};
    color: ${colors.Background};

    .ant-menu-item {
      color: ${colors.Background} !important;
      .ant-menu-item-icon {
        color: ${colors.Background} !important;
      }
    }

    .ant-menu-item-selected {
      background-color: ${colors.Accent} !important;
      color: ${colors.Text} !important;
      .ant-menu-item-icon {
        color: ${colors.Text} !important;
      }
    }
  }
`;
type MenuItem = Required<MenuProps>["items"][number];

const AdminPage: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const items: MenuItem[] = [
    {
      key: "1",
      label: "Manage Tours",
      icon: <FontAwesomeIcon icon={faMountainSun} />,
    },
    {
      key: "2",
      label: "View Bookings",
      icon: <FontAwesomeIcon icon={faReceipt} />,
    },
    {
      key: "3",
      label: "Settings",
      icon: <FontAwesomeIcon icon={faGear} />,
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <ManageTours />;
      case "2":
        return <ViewBookings />;
      default:
        return <Empty description={false} />;
    }
  };

  return (
    <AdminWrapper>
      <Sider width={200}>
        <LogoWrapper>
          <Logo>
            <a href="/">TravelNova</a>
          </Logo>
        </LogoWrapper>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={(e) => setSelectedKey(e.key)}
          items={items}
        />
      </Sider>
      <Layout>
        <Header>Welcome Admin</Header>
        <StyledContent>{renderContent()}</StyledContent>
      </Layout>
    </AdminWrapper>
  );
};

export default AdminPage;
