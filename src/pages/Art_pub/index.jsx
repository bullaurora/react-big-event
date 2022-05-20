import React from 'react'
import './index.css'
  // <!-- 卡片区域 --> */}
function Pub() {
  return (
  
    <div className="layui-card">
      <div className="layui-card-header">写文章</div>
      <div className="layui-card-body">
        {/* <!-- 发布文章的表单 --> */}
        <form className="layui-form">
          {/* <!-- 第一行 --> */}
          <div className="layui-form-item">
            <label className="layui-form-label">文章标题</label>
            <div className="layui-input-block">
              <input
                type="text"                          
                placeholder="请输入标题"              
                className="layui-input"
              />
            </div>
          </div>
          {/* <!-- 第二行 --> */}
          <div className="layui-form-item">
            <label className="layui-form-label">文章类别</label>
            <div className="layui-input-block">
              <select name="cate_id" ></select>
            </div>
          </div>
          {/* <!-- 第三行 --> */}
          <div className="layui-form-item">
            {/* <!-- 左侧的 label --> */}
            <label className="layui-form-label">文章内容</label>
            {/* <!-- 为富文本编辑器外部的容器设置高度 --> */}
            <div className="layui-input-block" >
              {/* <!-- 重要：将来这个 textarea 会被初始化为富文本编辑器 --> */}
              <textarea name="content"></textarea>
            </div>
          </div>
          {/* <!-- 第四行 --> */}
          <div className="layui-form-item">
            {/* <!-- 左侧的 label --> */}
            <label className="layui-form-label">文章封面</label>
            {/* <!-- 选择封面区域 --> */}
            <div className="layui-input-block cover-box">
              {/* <!-- 左侧裁剪区域 --> */}
              <div className="cover-left">
                <img id="image" src="/assets/images/sample2.jpg" alt="" />
              </div>
              {/* <!-- 右侧预览区域和选择封面区域 --> */}
              <div className="cover-right">
                {/* <!-- 预览的区域 --> */}
                <div className="img-preview"></div>
                {/* <!-- 选择封面按钮 --> */}
                <button
                  type="button"
                  className="layui-btn layui-btn-danger"
                  id="btnChooseImage"
                >
                  选择封面
                </button>
                <input
                  type="file"
   

                />
              </div>
            </div>
          </div>
          {/* <!-- 第五行 --> */}
          <div className="layui-form-item">
            <div className="layui-input-block">
              <button className="layui-btn" >发布</button>
              <button
                className="layui-btn layui-btn-primary"
              >
                存为草稿
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Pub