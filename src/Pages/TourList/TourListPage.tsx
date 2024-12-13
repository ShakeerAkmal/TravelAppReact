import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { PrimaryButton } from "../../components/styled";
import SearchPanel from "../../components/SearchPanel";
import { colors } from "../../utils/colorUtils";


const ListWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  .ant-card-body {
    padding: 15px;
  }

  .tour-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.Primary};
    margin-bottom: 10px;
  }

  .tour-description {
    font-size: 0.9rem;
    color: ${colors.Text};
    margin-bottom: 10px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tour-price {
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.Accent};
    margin-bottom: 15px;
  }

  .ant-btn-primary {
    background-color: ${colors.Primary};
    border: none;

    &:hover {
      background-color: ${colors.Accent};
    }
  }
`;

const TourListPage: React.FC = () => {
  const tours = [
    {
      id: 1,
      title: "Swiss Alps Adventure",
      description:
        "Explore the majestic Swiss Alps with breathtaking views and unforgettable experiences.",
      price: "€1,200",
      image: "https://picsum.photos/id/1015/300/200",
    },
    {
      id: 2,
      title: "Tropical Paradise",
      description:
        "Relax in the serene beauty of tropical beaches and enjoy crystal-clear waters.",
      price: "€950",
      image: "https://picsum.photos/id/1021/300/200",
    },
    {
      id: 3,
      title: "Historic Europe Tour",
      description:
        "Discover the rich history and culture of Europe with guided city tours and museums.",
      price: "€1,500",
      image: "https://picsum.photos/id/1032/300/200",
    },
    {
        id: 1,
        title: "Swiss Alps Adventure",
        description:
          "Explore the majestic Swiss Alps with breathtaking views and unforgettable experiences.",
        price: "€1,200",
        image: "https://picsum.photos/id/1015/300/200",
      },
      {
        id: 2,
        title: "Tropical Paradise",
        description:
          "Relax in the serene beauty of tropical beaches and enjoy crystal-clear waters.",
        price: "€950",
        image: "https://picsum.photos/id/1021/300/200",
      },
      {
        id: 3,
        title: "Historic Europe Tour",
        description:
          "Discover the rich history and culture of Europe with guided city tours and museums.",
        price: "€1,500",
        image: "https://picsum.photos/id/1032/300/200",
      },
      {
        id: 1,
        title: "Swiss Alps Adventure",
        description:
          "Explore the majestic Swiss Alps with breathtaking views and unforgettable experiences.",
        price: "€1,200",
        image: "https://picsum.photos/id/1015/300/200",
      },
      {
        id: 2,
        title: "Tropical Paradise",
        description:
          "Relax in the serene beauty of tropical beaches and enjoy crystal-clear waters.",
        price: "€950",
        image: "https://picsum.photos/id/1021/300/200",
      },
      {
        id: 3,
        title: "Historic Europe Tour",
        description:
          "Discover the rich history and culture of Europe with guided city tours and museums.",
        price: "€1,500",
        image: "https://picsum.photos/id/1032/300/200",
      },
    // Add more tours as needed
  ];

  return (
    <>
    <SearchPanel></SearchPanel>
    <ListWrapper>
      {tours.map((tour) => (
        <StyledCard
          key={tour.id}
          cover={<img alt={tour.title} src={tour.image} />}
          hoverable
        >
          <div className="tour-title">{tour.title}</div>
          <div className="tour-description">{tour.description}</div>
          <div className="tour-price">{tour.price}</div>
          <PrimaryButton>View Details</PrimaryButton>
        </StyledCard>
      ))}
    </ListWrapper>
    </>
    
  );
};

export default TourListPage;
