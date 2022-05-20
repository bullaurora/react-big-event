import React from 'react'

function Cate() {
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card">
      <div className="layui-card-header">
        <span>文章类别管理</span>
        <button type="button" className="layui-btn layui-btn-normal layui-btn-sm" id="btnAddCate">添加类别</button>
      </div>
      <div className="layui-card-body">
        <table className="layui-table">
          <colgroup>
            <col />
            <col />
            <col width="200" />
          </colgroup>
          <thead>
            <tr>
              <th>分类名称</th>
              <th>分类别名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>贤心</td>
              <td>2016-11-29</td>
              <td>人生就像是一场修行</td>
            </tr>
            <tr>
              <td>许闲心</td>
              <td>2016-11-28</td>
              <td>于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Cate