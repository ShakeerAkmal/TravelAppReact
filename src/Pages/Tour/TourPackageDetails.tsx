import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { colors } from "../../utils/colorUtils";
import Hawaii from "../../assets/hawaii-beach-landscape-with-nature-coastline.jpg";
import Alps from "../../assets/catherine-verrecchia-I9cNDmLuRpQ-unsplash.jpg";
import LastMinuteDealsCarousel from "../Landing/LastMinuteDeals";
import BookNowButton from "./BookNowButton";
import { SecondaryButton } from "../../components/styled";

const PackageDetailsWrapper = styled.div`
  min-height: 100vh;

  .container {
    margin: 0 auto;
    overflow: hidden;

    .image-container {
      height: 400px;
      background-size: cover;
      background-position: center;
    }

    .details {
      padding: 30px;

      h1 {
        color: ${colors.Primary};
        font-size: 2.2rem;
        margin-bottom: 10px;
      }

      .sub-details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .info-item {
          font-size: 1rem;
          color: ${colors.Text};

          span {
            display: block;
            font-weight: bold;
            color: ${colors.Primary};
          }
        }
      }

      .description {
        font-size: 1rem;
        color: ${colors.Text};
        line-height: 1.6;
        margin-bottom: 30px;
      }

      .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${colors.Accent};
        margin-bottom: 20px;
      }

      .action-buttons {
        display: flex;
        gap: 15px;

        .ant-btn {
          font-size: 1rem;
          padding: 10px 20px;
          border-radius: 5px;
        }

        }
      }
    }
  }
`;

const TourPackageDetails: React.FC = () => {
  return (
    <PackageDetailsWrapper>
      <div className="container">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${Alps})`, // Replace with your image URL
          }}
        ></div>
        <div className="details">
          <h1>Explore the Swiss Alps</h1>
          <div className="sub-details">
            <div className="info-item">
              <span>Date:</span> 10th Dec 2024 - 20th Dec 2024
            </div>
            <div className="info-item">
              <span>Place:</span> Switzerland
            </div>
          </div>
          <div className="description">
            Discover the breathtaking beauty of the Swiss Alps. This tour
            includes scenic train rides, mountain excursions, and visits to
            picturesque towns. Perfect for nature lovers and adventure
            enthusiasts!
          </div>
          <div className="price">€1,200 per person</div>
          <div className="action-buttons">
            <BookNowButton />
            <SecondaryButton >Add to Wishlist</SecondaryButton>
          </div>
        </div>
      </div>
      <LastMinuteDealsCarousel />
    </PackageDetailsWrapper>
  );
};

export default TourPackageDetails;
