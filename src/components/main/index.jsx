import React from "react";
import Navigation from "../Navigation";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Person from "../Person";
import { useAuth } from "../../context/auth-context";
import { Routes, Route, Link } from "react-router-dom"
import Cate from "../../pages/Art_cate"
import List from "../../pages/Art_list"
import Pub from "../../pages/Art_pub"
import Avatar from "../../pages/User_avatar"
import Info from "../../pages/User_info"
import Pwd from "../../pages/User_pwd"
import "antd/dist/antd.css";
import "./index.css";
import "../../lib/main.css";
import logo from "../../images/logo.png";
function Main() {
  const { user,logout } = useAuth();
  const name = user?.nickname || user?.username||'null';
  return (
    <div className="layui-layout layui-layout-admin">
      <div className="layui-header">
        <div className="layui-logo layui-hide-xs layui-bg-black">
          <img src={logo} alt="" />
        </div>

        <div className="headerImg">
          
          { 
            user?.user_pic?<img src={user?.user_pic} className="layui-nav-img" />:<span className="text-avatar">{name[0].toUpperCase()}</span>
          }          
        </div>
        <Person />
        <a id="btnLogout" onClick={logout}>
          <span className="iconfont icon-tuichu"></span>退出
        </a>
      </div>

      <div className="layui-side layui-bg-black">
        <div className="layui-side-scroll">
          <div className="userinfo">
          { 
            user?.user_pic?<img src={user?.user_pic} className="layui-nav-img" />:<span className="text-avatar">{name[0].toUpperCase()}</span>
          }   
            <span id="welcome">欢迎 {user?.nickname ? user?.nickname : user?.username}</span>
          </div>
          {/* <!-- 左侧导航区域（可配合layui已有的垂直导航） --> */}
          <Navigation />
        </div>
      </div>
      <div className="layui-body">
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/cate" element={<Cate />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/pub" element={<Pub />}></Route>
          <Route path="/avatar" element={<Avatar />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/pwd" element={<Pwd />}></Route>
        </Routes>

      </div>
      <div className="layui-footer">
        {/* <!-- 底部固定区域 --> */}
        {/* 底部固定区域 */}
      </div>
    </div>
  );
}

export default Main;
