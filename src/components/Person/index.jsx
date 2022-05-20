import React from "react";
import { Menu, Dropdown, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const onClick = ({ key}) => {
  if (key==='1') {
    message.info(`基本资料`);
  }else if (key==='2') {
    message.info(`更换头像`);
  }else{
    message.info(`重置密码`);
  }
  
};

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: <Link to="/info">基本资料</Link>,
        key: "1",
      },
      {
        label: <Link to="/avatar">更换头像</Link>,
        key: "2",
      },
      {
        label: <Link to="/pwd">重置密码</Link>,
        key: "3",
      },
    ]}
  />
);

export default function Person() {
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          个人中心
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
