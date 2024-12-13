import React, { useState } from "react";
import { Modal, Form, Input, Button, DatePicker, InputNumber } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";
import { PrimaryButton } from "../../components/styled";

const BookNowButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Form Submitted: ", values);
    setIsModalVisible(false); // Close modal after successful submission
  };

  return (
    <>
      <PrimaryButton onClick={showModal}>Book Now</PrimaryButton>
      <Modal
        title="Book Your Trip"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // Remove default buttons
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[0-9]+$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="How Many People"
            name="peopleCount"
            rules={[
              { required: true, message: "Please enter the number of people" },
            ]}
          >
            <InputNumber
              min={1}
              placeholder="Enter number of people"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Travel Dates"
            name="travelDates"
            rules={[
              { required: true, message: "Please select your travel dates" },
            ]}
          >
            <DatePicker.RangePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <PrimaryButton style={{ width: "100%" }}>
              Submit
            </PrimaryButton>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BookNowButton;
