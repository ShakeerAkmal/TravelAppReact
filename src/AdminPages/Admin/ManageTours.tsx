import React, { useState } from "react";
import { DatePicker, Upload, message, Table, Button, Modal, Form, Input, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";
import { PrimaryButton } from "../../components/styled";

const { RangePicker } = DatePicker;
const ManageTours: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Paris Adventure",
      price: 1500,
      description: "Explore the city of lights with guided tours and more.",
    },
  ]);

  const [form] = Form.useForm();

  const handleAddTour = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      setTours([...tours, { id: tours.length + 1, ...values }]);
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Tour Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <Button type="link" onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const handleDelete = (id: number) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  const handleFinish = (values: any) => {
    console.log("Form Values:", values);
    message.success("Tour created successfully!");
  };

  const handleImageUpload = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 20, backgroundColor: colors.Primary }}
        onClick={handleAddTour}
      >
        Add New Tour
      </Button>
      <Table dataSource={tours} columns={columns} rowKey="id" />

      <Modal
        title="Add New Tour"
        open={isModalVisible}
        footer={null}
        onClose={handleModalCancel}
        onCancel={handleModalCancel}
      >
       <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Tour Name"
          name="name"
          rules={[{ required: true, message: "Please enter the tour name!" }]}
        >
          <Input placeholder="Enter tour name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the tour description!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter tour description" />
        </Form.Item>

        <Form.Item
          label="Tour Dates"
          name="dates"
          rules={[{ required: true, message: "Please select the tour dates!" }]}
        >
          <RangePicker />
        </Form.Item>

        <Form.Item
          label="Tour Price (€)"
          name="price"
          rules={[{ required: true, message: "Please enter the tour price!" }]}
        >
          <Input type="number" placeholder="Enter price in euros" />
        </Form.Item>

        <Form.Item
          label="Upload Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ required: true, message: "Please upload a tour image!" }]}
        >
          <Upload
            name="image"
            listType="picture"
            maxCount={1}
            onChange={handleImageUpload}
            beforeUpload={() => false} // Disable auto-upload
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <PrimaryButton type="primary" htmlType="submit">
            Create Tour
          </PrimaryButton>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
};

export default ManageTours;

