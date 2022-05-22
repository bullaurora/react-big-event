import React from "react";
import { Menu, Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  FileTextOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("首页", "1", <HomeOutlined />),
  getItem("文章管理", "sub1", <FileTextOutlined />, [
    getItem("文章类别", "2", <AppstoreAddOutlined />),
    getItem("文章列表", "3", <AppstoreAddOutlined />),
    getItem("发布文章", "4", <AppstoreAddOutlined />),
  ]),
  getItem("个人中心", "sub2", <AppstoreOutlined />, [
    getItem("基本资料", "5", <AppstoreAddOutlined />),
    getItem("更换头像", "6", <AppstoreAddOutlined />),
    getItem("重置密码", "7", <AppstoreAddOutlined />),
  ]),
];

const Navigation = () => {
  let navigate = useNavigate();
  function goTo({ key }) {
    switch (key) {
      case '1':
        navigate("/dashboard");
        break;
      case '2':
        navigate("/cate");
        break;
      case '3':
        navigate("/list");
        break;
      case '4':
        navigate("/pub");
        break;
      case '5':
        navigate("/info");
        break;
      case '6':
        navigate("/avatar");
        break;
      case '7':
        navigate("/pwd");
        break;
      default:
        break;
    }
  }
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={goTo}
      />
    </div>
  );
};

export default Navigation;
