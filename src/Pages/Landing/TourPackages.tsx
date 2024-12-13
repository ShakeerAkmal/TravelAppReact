import React from "react";
import styled from "styled-components";
import maldives from "../../assets/maldives.jpg";
import { colors } from "../../utils/colorUtils";
import { SecondaryButton } from "../../components/styled";

const Content = styled.div`
  position: absolute;
  bottom: 15px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.3s ease;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .price {
    font-size: 1rem;
    color: ${colors.Accent}; /* Golden Yellow */
    font-weight: bold;
    margin-bottom: 10px;
  }

  .learn-more {
    font-size: 0.9rem;
    color: ${colors.Accent};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${colors.Primary}; /* Sunset Orange */
    }
  }
`;

const Collage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 8px;
  margin-top: 20px;
  position: relative;

  & > div {
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 100%;
    cursor: pointer;
    border-radius: 10px; /* Rounded corners */
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Floating effect */
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
  }

  & > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 10px;
  }

  & > div:hover img {
    transform: scale(1.05); /* Slight zoom on hover */
  }
  & > div:hover ${Content} {
    opacity: 1;
  }

  /* Grid items with varying sizes */
  & > div:nth-child(1) {
    grid-column: span 2; /* Spans 2 columns */
    grid-row: span 2; /* Spans 2 rows */
  }

  & > div:nth-child(3) {
    grid-column: span 2; /* Spans 2 columns */
    grid-row: span 1;
  }

  & > div:nth-child(5) {
    grid-column: span 1;
    grid-row: span 2; /* Spans 2 rows */
  }
`;



const SeeMoreButton = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    font-size: 1.1rem;
    background-color: ${colors.Accent}; /* Golden Yellow */
    color: ${colors.Text}; /* Dark Brown */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;

    &:hover {
      background-color: ${colors.Primary}; /* Sunset Orange */
      color: ${colors.Background}; /* Light Peach */
    }
  }
`;

const SpecialCard = styled.div`
  background-color: ${colors.Primary} !important;  
  color : ${colors.Background};
  padding: 1rem;
`;

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      src: maldives,
      title: "Corfu, Greece",
      description: "Explore the serene beaches of Corfu, Greece.",
      price: "$320",
    },
    {
      id: 2,
      src: maldives,
      title: "New York, USA",
      description: "Visit the skyscrapers and vibrant culture of New York.",
      price: "$450",
    },
    {
      id: 3,
      src: maldives,
      title: "Swiss Alps, Switzerland",
      description: "Admire the stunning mountain views in the Swiss Alps.",
      price: "$700",
    },
    {
      id: 4,
      src: maldives,
      title: "Swiss Alps, Switzerland",
      description: "Admire the stunning mountain views in the Swiss Alps.",
      price: "",
    },
    {
      id: 5,
      src: maldives,
      title: "Corfu, Greece",
      description: "Explore the serene beaches of Corfu, Greece.",
      price: "$320",
    },
    {
      id: 6,
      src: maldives,
      title: "New York, USA",
      description: "Visit the skyscrapers and vibrant culture of New York.",
      price: "$450",
    },
    {
      id: 7,
      src: maldives,
      title: "Corfu, Greece",
      description: "Explore the serene beaches of Corfu, Greece.",
      price: "$320",
    },
    {
      id: 8,
      src: maldives,
      title: "New York, USA",
      description: "Visit the skyscrapers and vibrant culture of New York.",
      price: "$450",
    }, {
      id: 9,
      src: maldives,
      title: "New York, USA",
      description: "Visit the skyscrapers and vibrant culture of New York.",
      price: "$450",
    }, {
      id: 10,
      src: maldives,
      title: "New York, USA",
      description: "Visit the skyscrapers and vibrant culture of New York.",
      price: "$450",
    },
  ];

  return (
    <>
      <Collage>
        {packages.map((pkg, index) =>
          pkg.price != "" ? (
            <div key={pkg.id}>
              <img src={"https://picsum.photos/id/1"+pkg.id+"/1200/900"} alt={pkg.title} />
              <Content>
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <div className="price">{pkg.price}</div>
                <a href="/tour" className="learn-more">
                  Learn More &rarr;
                </a>
              </Content>
            </div>
          ) : (
            <SpecialCard>
              <h3>Ready for your next adventure?</h3>
              <p>Browse more tour packages and start planning your dream trip today!</p>
              <SecondaryButton>Explore</SecondaryButton>
            </SpecialCard>
          )
        )}
      </Collage>
    </>
  );
};

export default TourPackages;
