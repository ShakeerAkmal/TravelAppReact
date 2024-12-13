import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import bgImage from "../../assets/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg";
import aboutUs from "../../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg";
import TourPackages from "./TourPackages";
import { colors, hexToRgba } from "../../utils/colorUtils";
import LastMinuteDeals from "./LastMinuteDeals";
import SearchPanel from "../../components/SearchPanel";
import { SecondaryButton } from "../../components/styled";


const HeroSection = styled.div`
  position: relative;
  background: url(${bgImage}) no-repeat center center / cover;
  height: 100vh;
  color: ${colors.Background}; /* Light Peach */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${hexToRgba(colors.Primary, 0.5)}; /* Sunset Orange Overlay */
    z-index: 1;
  }

  h1,
  p,
  button {
    z-index: 2;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: ${colors.Accent}; /* Golden Yellow */
    color: ${colors.Text}; /* Dark Brown */
    border: none;
    &:hover {
      background-color: ${colors.Primary}; /* Sunset Orange */
      color: ${colors.Background}; /* Light Peach */
    }
  }
`;

const Section = styled.div`
  padding: 60px 24px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${colors.Text}; /* Dark Brown */
  }
`;

const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;

const AboutText = styled.div`
  max-width: 600px;
  font-size: 1.2rem;
`;

const AboutImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
`;

const SectionHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  color: ${colors.Text};
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 100%;
    background-color: ${colors.Accent}; /* Accent color for the line */
  }

  span {
    display: inline-block;
    padding-left: 20px; /* Space between the line and the title */
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #777; /* Light gray text for description */
  line-height: 1.6;
  text-align: left;
`;
const Title = styled.div`
  text-align: left;
  margin-left: 15%;
`;

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <h1>Adventure Awaits</h1>
        <p>
          Embark on unforgettable journeys to the most beautiful destinations
        </p>
        <SecondaryButton size="large">Explore Now</SecondaryButton>
      </HeroSection>
      <SearchPanel />
      <Section id="packages">
        <Title>
          <SectionHeading>
            <span>Amazing Tours And Fun Adventures</span>
          </SectionHeading>
          <SectionDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
          </SectionDescription>
        </Title>
        <TourPackages />
      </Section>

      <AboutSection id="about">
        <AboutImage src={aboutUs} alt="About us" />

        <AboutText>
          <SectionHeading>
            <span>About Us</span>
          </SectionHeading>
          <SectionDescription>
            At TravelNova, we specialize in curating unique travel experiences.
            Whether you want to explore hidden gems or iconic landmarks, we make
            it possible.{" "}
          </SectionDescription>
        </AboutText>
      </AboutSection>

      <Section id="destinations">
        <Title>
          <SectionHeading>
            <span>Special Deals And Last Minute Amazing Offers</span>
          </SectionHeading>
          <SectionDescription>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
          </SectionDescription>
        </Title>
        <LastMinuteDeals />
      </Section>
    </>
  );
};

export default LandingPage;
