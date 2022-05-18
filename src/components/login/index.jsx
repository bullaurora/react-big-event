import React from "react";

function index() {
  return (
    <div>
      {/* <!-- 头部 logo 区域 --> */}
      <div class="layui-main">
        <img src="/assets/images/logo.png" alt="" />
      </div>

      {/* <!-- 登录注册区域 --> */}
      <div class="loginAndRegBox">
        {/* <!-- 登录标题 --> */}
        <div class="title-box"></div>
        {/* <!-- 登录 --> */}
        <div class="login-box">
          <form class="layui-form" action="" id="form_login">
            {/* <!-- 用户名 --> */}
            <div class="layui-form-item">
              <i class="layui-icon layui-icon-username"></i>
              <input
                type="text"
                name="username"
                required
                lay-verify="required"
                placeholder="请输入用户名"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            {/* <!-- 密码 --> */}
            <div class="layui-form-item">
              <i class="layui-icon layui-icon-password"></i>
              <input
                type="password"
                name="password"
                required
                lay-verify="required|pwd"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            {/* <!-- 登录按钮 --> */}
            <div class="layui-form-item">
              {/* <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 --> */}
              <button
                class="layui-btn layui-btn-normal layui-btn-fluid"
                lay-submit
              >
                登录
              </button>
            </div>
            <div class="layui-form-item link">
              <a href="javascript:;" id="link_reg">
                去注册账号
              </a>
            </div>
          </form>
        </div>
        {/* <!-- 注册 --> */}
        <div class="reg-box">
          <form class="layui-form" id="form_reg" action="">
            {/* <!-- 用户名 --> */}
            <div class="layui-form-item">
              <i class="layui-icon layui-icon-username"></i>
              <input
                type="text"
                name="username"
                required
                lay-verify="required"
                placeholder="请输入用户名"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            {/* <!-- 密码 --> */}
            <div class="layui-form-item">
              <i class="layui-icon layui-icon-password"></i>
              <input
                type="password"
                name="password"
                required
                lay-verify="required|pwd"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            {/* <!-- 确认密码 --> */}
            <div class="layui-form-item">
              <i class="layui-icon layui-icon-password"></i>
              <input
                type="password"
                name="repassword"
                required
                lay-verify="required|pwd|repwd"
                placeholder="再次确认密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            {/* <!-- 注册按钮 --> */}
            <div class="layui-form-item">
              {/* <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 --> */}
              <button
                class="layui-btn layui-btn-normal layui-btn-fluid"
                lay-submit
              >
                注册
              </button>
            </div>
            <div class="layui-form-item link">
              <a href="javascript:;" id="link_login">
                去登录
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
