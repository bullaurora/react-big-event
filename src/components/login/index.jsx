import React, { useState, useRef } from "react";
import "./index.css";
import {useAuth} from "../../context/auth-context"
import { message } from "antd";

function Login() {
  const [isLogin, setisLogin] = useState(true);
  const loginNameRef = useRef();
  const loginPwdRef = useRef();
  const regNameRef = useRef();
  const regPwdRefOne = useRef();
  const regPwdRefTwo = useRef();
  const {login,register} = useAuth()


  function regHandler() {
    const username = regNameRef.current.value;
    const password1 = regPwdRefOne.current.value;
    const password = regPwdRefTwo.current.value;
    if (password1!==password) return message.info('两次输入的密码不一致') 
    const data = { username, password };
    register(data)
  }

  function loginHandler() {
    const username = loginNameRef.current.value;
    const password = loginPwdRef.current.value;
    const data = { username, password };
    login(data)
  }
  return (
    <div>
      {/* <!-- 头部 logo 区域 --> */}
      <div className="layui-main">
        <img src="/assets/images/logo.png" alt="" />
      </div>

      {/* <!-- 登录注册区域 --> */}
      <div className="loginAndRegBox">
        {/* <!-- 登录标题 --> */}
        <div className="title-box"></div>
        {/* <!-- 登录 --> */}
        <div
          className="login-box"
          style={{ display: isLogin ? "block" : "none" }}
        >
          <form
            className="layui-form"
            action=""
            id="form_login"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* <!-- 用户名 --> */}
            <div className="layui-form-item">
              <i className="layui-icon layui-icon-username"></i>
              <input
                ref={loginNameRef}
                type="text"
                name="username"
                required
                lay-verify="required"
                placeholder="请输入用户名"
                autoComplete="off"
                className="layui-input"
              />
            </div>
            {/* <!-- 密码 --> */}
            <div className="layui-form-item">
              <i className="layui-icon layui-icon-password"></i>
              <input
                ref={loginPwdRef}
                type="password"
                name="password"
                required
                lay-verify="required|pwd"
                placeholder="请输入密码"
                autoComplete="off"
                className="layui-input"
              />
            </div>
            {/* <!-- 登录按钮 --> */}
            <div className="layui-form-item">
              {/* <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 --> */}
              <button
                className="layui-btn layui-btn-normal layui-btn-fluid"
                onClick={loginHandler}
              >
                登录
              </button>
            </div>
            <div className="layui-form-item link">
              <a
                id="link_reg"
                onClick={() => {
                  setisLogin(false);
                }}
              >
                去注册账号
              </a>
            </div>
          </form>
        </div>
        {/* <!-- 注册 --> */}
        <div
          className="reg-box"
          style={{ display: !isLogin ? "block" : "none" }}
        >
          <form
            className="layui-form"
            id="form_reg"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* <!-- 用户名 --> */}
            <div className="layui-form-item">
              <i className="layui-icon layui-icon-username"></i>
              <input
                ref={regNameRef}
                type="text"
                name="username"
                required
                lay-verify="required"
                placeholder="请输入用户名"
                autoComplete="off"
                className="layui-input"
              />
            </div>
            {/* <!-- 密码 --> */}
            <div className="layui-form-item">
              <i className="layui-icon layui-icon-password"></i>
              <input
                ref={regPwdRefOne}
                type="password"
                name="password"
                required
                lay-verify="required|pwd"
                placeholder="请输入密码"
                autoComplete="off"
                className="layui-input"
              />
            </div>
            {/* <!-- 确认密码 --> */}
            <div className="layui-form-item">
              <i className="layui-icon layui-icon-password"></i>
              <input
                ref={regPwdRefTwo}
                type="password"
                name="repassword"
                required
                lay-verify="required|pwd|repwd"
                placeholder="再次确认密码"
                autoComplete="off"
                className="layui-input"
              />
            </div>
            {/* <!-- 注册按钮 --> */}
            <div className="layui-form-item">
              {/* <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 --> */}
              <button
                className="layui-btn layui-btn-normal layui-btn-fluid"
                onClick={regHandler}
              >
                注册
              </button>
            </div>
            <div className="layui-form-item link">
              <a
                id="link_login"
                onClick={() => {
                  setisLogin(true);
                }}
              >
                去登录
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
