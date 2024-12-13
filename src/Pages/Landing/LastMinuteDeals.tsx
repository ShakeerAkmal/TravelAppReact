import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import maldives from "../../assets/maldives.jpg";
import hawaii from "../../assets/hawaii-beach-landscape-with-nature-coastline.jpg";
import mesut from "../../assets/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg";
import { colors } from "../../utils/colorUtils";
const CarouselSection = styled.section`
  margin: 50px 0;
  background-color: #f0f0f0; /* Background for the section */
`;

const CarouselContainer = styled.div`
  .ant-carousel .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: ${colors.Accent};
    color: #333;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  .details {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
  }
`;

const images = [
  {
    src: mesut,
    label: "Last Offer",
    location: "Tokyo, Japan",
    price: "$1950",
  },
  {
    src: hawaii,
    label: "Best Deal",
    location: "Krakow",
    price: "$250",
  },
  {
    src: maldives,
    label: "Last Minute",
    location: "Fujiyoshida",
    price: "$2500",
  },
  {
    src: hawaii,
    label: "Exclusive",
    location: "Piran",
    price: "$1250",
  },
  {
    src: maldives,
    label: "Special",
    location: "Venice",
    price: "$3000",
  },
];

const LastMinuteDealsCarousel = () => {
    return (
        <CarouselSection>
          <CarouselContainer>
          <Carousel autoplay infinite dots slidesToShow={4} autoplaySpeed = {3000} speed={3000}>
          {images.map((image, index) => (
                <div key={index}>
                  <div className="carousel-item">
                    <img src={"https://picsum.photos/id/1"+index+"/1200/900"} alt={`Deal ${index + 1}`} />
                    <div className="label">{image.label}</div>
                    <div className="details">
                      <div>{image.location}</div>
                      <div>{image.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </CarouselContainer>
        </CarouselSection>
      );
};

export default LastMinuteDealsCarousel;
