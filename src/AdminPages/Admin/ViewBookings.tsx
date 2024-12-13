import React from "react";
import { Table } from "antd";

const ViewBookings: React.FC = () => {
  const bookings = [
    {
      id: 1,
      customerName: "John Doe",
      tourName: "Paris Adventure",
      dates: "2024-12-10 to 2024-12-20",
      peopleCount: 2,
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Tour Name",
      dataIndex: "tourName",
      key: "tourName",
    },
    {
      title: "Dates",
      dataIndex: "dates",
      key: "dates",
    },
    {
      title: "People Count",
      dataIndex: "peopleCount",
      key: "peopleCount",
    },
  ];

  return (
    <div>
      <Table dataSource={bookings} columns={columns} rowKey="id" />
    </div>
  );
};

export default ViewBookings;
