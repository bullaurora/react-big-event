import React from 'react'
import './index.css'
function List() {
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card">
      <div className="layui-card-header">文章列表</div>
      <div className="layui-card-body">
        {/* <!-- 筛选区域 --> */}
        <form className="layui-form" id="form-search">
          <div className="layui-form-item layui-inline">
            <select name="cate_id"></select>
          </div>
          <div className="layui-form-item layui-inline">
            <select name="state">
              <option value="">所有状态</option>
              <option value="已发布">已发布</option>
              <option value="草稿">草稿</option>
            </select>
          </div>
          <div className="layui-form-item layui-inline">
            <button className="layui-btn" lay-filter="formDemo">
              筛选
            </button>
          </div>
        </form>
        {/* <!-- 列表区域 --> */}
        <table className="layui-table">
          <colgroup>
            <col />
            <col width="150" />
            <col width="180" />
            <col width="150" />
            <col width="150" />
          </colgroup>
          <thead>
            <tr>
              <th>文章标题</th>
              <th>分类</th>
              <th>发表时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        {/* <!-- 分页区域 --> */}
        <div id="pageBox"></div>
      </div>
    </div>
  // <!-- Code injected by live-server -->
  )
}

export default List