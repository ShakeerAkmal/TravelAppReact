import { Button, ButtonProps, LayoutProps } from "antd";
import styled from "styled-components";
import { colors } from "../utils/colorUtils";
import { Content } from "antd/es/layout/layout";
import svg from "../assets/bg.svg";

export const PrimaryButton: React.FunctionComponent<ButtonProps> = styled(
  Button
)`
  background-color: ${colors.Primary}; /* Golden Yellow */
  color: ${colors.Background}; /* Dark Brown */
  border: none;
  &:hover {
    background-color: ${colors.Accent}; /* Sunset Orange */
    color: ${colors.Text}; /* Light Peach */
  }
`;

export const SecondaryButton: React.FunctionComponent<ButtonProps> = styled(
  Button
)`
  background-color: ${colors.Accent}; /* Golden Yellow */
  color: ${colors.Text}; /* Dark Brown */
  border: none;
  &:hover {
    background-color: ${colors.Primary}; /* Sunset Orange */
    color: ${colors.Background}; /* Light Peach */
  }
`;

export const Logo = styled.h1`
  color: ${colors.Background}; /* Light Peach */
  font-size: 1.5rem;
  margin: 0;
  cursor: pointer;

  a {
    color: ${colors.Background}; /* Light Peach */
    font-size: 1.5rem;
    margin: 0;
    cursor: pointer;
  }
`;

export const StyledContent: React.FunctionComponent<LayoutProps> = styled(
  Content
)`
  background-image: url(${svg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`;
