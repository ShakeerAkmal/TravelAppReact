import React from "react";
import { Select, DatePicker, Button } from "antd";
import styled from "styled-components";
import dayjs from "dayjs";
import { colors } from "../utils/colorUtils";
import { PrimaryButton } from "./styled";
import { Link } from "react-router-dom";
  
const { Option } = Select;
const { RangePicker } = DatePicker;

const SearchPanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.Accent};
  border-radius: 10px;

  .ant-picker {
    width: 220px; /* Adjust as needed */
  }

  .ant-btn {
    font-size: 16px;
    height: 40px;
  }
`;

const SearchPanel = () => {
  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search clicked");
  };

  return (
    <SearchPanelWrapper>
      <Select
        placeholder="Select a city"
        style={{ width: 200 }}
        allowClear
        onChange={(value) => console.log("City selected:", value)}
      >
        <Option value="new-york">New York</Option>
        <Option value="paris">Paris</Option>
        <Option value="tokyo">Tokyo</Option>
        <Option value="london">London</Option>
      </Select>

      {/* Date Range Selection */}
      <RangePicker
        minDate={dayjs()}
        format="YYYY-MM-DD"
        onChange={(dates, dateStrings) =>
          console.log("Selected dates:", dateStrings)
        }
      />
      <Link to="/search">
        <PrimaryButton onClick={handleSearch} size="small">
          Search
        </PrimaryButton>
      </Link>
    </SearchPanelWrapper>
  );
};

export default SearchPanel;
