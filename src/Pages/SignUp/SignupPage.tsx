import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";


const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .signup-container {
    width: 400px;
    background: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    h1 {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
      color: ${colors.Primary};
    }

    .ant-form-item {
      margin-bottom: 15px;
    }

    .ant-btn {
      width: 100%;
      background-color: ${colors.Primary};
      color: #ffffff;
      border: none;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;

      &:hover {
        background-color: ${colors.Accent};
        color: ${colors.Text};
      }
    }

    .terms {
      text-align: center;
      margin-top: 10px;
      color: ${colors.Text};
    }

    a {
      color: ${colors.Primary};
      &:hover {
        color: ${colors.Accent};
      }
    }
  }
`;

const SignupPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SignupWrapper>
      <div className="signup-container">
        <h1>Create Account</h1>
        <Form
          name="signup"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to the terms!")),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href="#">Terms & Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="terms">
          Already have an account? <a href="#">Log In</a>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default SignupPage;
