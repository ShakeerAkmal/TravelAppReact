import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { colors } from "../../utils/colorUtils";

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .signin-container {
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

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      a {
        color: ${colors.Primary};
        &:hover {
          color: ${colors.Accent};
        }
      }
    }

    .signup-link {
      text-align: center;
      margin-top: 15px;
      color: ${colors.Text};

      a {
        color: ${colors.Primary};
        &:hover {
          color: ${colors.Accent};
        }
      }
    }
  }
`;

const AdminSignInPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SignInWrapper>
      <div className="signin-container">
        <h1>Welcome Admin</h1>
        <Form
          name="signin"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
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

          <div className="options">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <a href="#">Forgot Password?</a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div className="signup-link">
          Don’t have an account? <a href="/admin/signup">Sign Up</a>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default AdminSignInPage;
