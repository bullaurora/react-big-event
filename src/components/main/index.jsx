import React from "react";

function Main() {
  return (
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo layui-hide-xs layui-bg-black">
          <img src="/assets/images/logo.png" alt="" />
        </div>

        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item layui-hide layui-show-md-inline-block">
            <a href="javascript:;" class="userinfo">
              <img
                src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
                class="layui-nav-img"
              />
              <span class="text-avatar">A</span>
              个人中心
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="/user/user_info.html" target="fm">
                  基本资料
                </a>
              </dd>
              <dd>
                <a href="/user/user_avatar.html" target="fm">
                  更换头像
                </a>
              </dd>
              <dd>
                <a href="/user/user_pwd.html" target="fm">
                  重置密码
                </a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item" lay-header-event="menuRight" lay-unselect>
            <a href="javascript:;" id="btnLogout">
              <span class="iconfont icon-tuichu"></span>退出
            </a>
          </li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <div class="userinfo">
            <img
              src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
              class="layui-nav-img"
            />
            <span class="text-avatar">A</span>
            <span id="welcome">欢迎 ***</span>
          </div>
          {/* <!-- 左侧导航区域（可配合layui已有的垂直导航） --> */}
          <ul class="layui-nav layui-nav-tree" lay-shrink="all">
            <li class="layui-nav-item layui-this">
              <a href="/home/dashboard.html" target="fm">
                <span class="iconfont icon-home"></span>首页
              </a>
            </li>
            <li class="layui-nav-item">
              <a class="" href="javascript:;">
                <span class="iconfont icon-16"></span>文章管理
              </a>
              <dl class="layui-nav-child">
                <dd>
                  <a href="/article/art_cate.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>文章类别
                  </a>
                </dd>
                <dd>
                  <a href="/article/art_list.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>文章列表
                  </a>
                </dd>
                <dd>
                  <a href="/article/art_pub.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>发布文章
                  </a>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">
                <span class="iconfont icon-user"></span>个人中心
              </a>
              <dl class="layui-nav-child">
                <dd>
                  <a href="/user/user_info.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>基本资料
                  </a>
                </dd>
                <dd>
                  <a href="/user/user_avatar.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>更换头像
                  </a>
                </dd>
                <dd>
                  <a href="/user/user_pwd.html" target="fm">
                    <i class="layui-icon layui-icon-app"></i>重置密码
                  </a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        {/* <!-- 内容主体区域 --> */}
        <iframe name="fm" src="/home/dashboard.html" frameborder="0"></iframe>
      </div>

      <div class="layui-footer">
        {/* <!-- 底部固定区域 --> */}
        {/* 底部固定区域 */}
      </div>
    </div>
  );
}

export default Main;
