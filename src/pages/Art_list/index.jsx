import React, { useEffect, useState } from "react";
import "./index.css";
import { useAuth } from "../../context/auth-context";
import { Form, Select ,Pagination} from "antd";
import { httpCateList } from "../../untils/http";
function List() {
  const { CateList, setCateList } = useAuth();
  const { filterList, setfilterList } = useState(CateList);
  useEffect(() => {
    httpCateList().then((CateList) => setCateList(CateList));
  }, []);
  const changeList = () => {};
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card">
      <div className="layui-card-header">文章列表</div>
      <div className="layui-card-body">
        {/* <!-- 筛选区域 --> */}
        <Form
          className="layui-form"
          id="form-search"
          onClick={(e) => e.preventDefault()}
        >
          <div className="layui-form-item layui-inline">
            <Form.Item>
              <Select name="cate_id" style={{ width: "200px" }}>
                {CateList?.map((item) => {
                  return (
                    <Select.Option value={item.name} key={item.Id}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="layui-form-item layui-inline">
            <Form.Item>
              <Select name="state" style={{ width: "200px" }}>
                <Select.Option value="">所有状态</Select.Option>
                <Select.Option value="已发布">已发布</Select.Option>
                <Select.Option value="草稿">草稿</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="layui-form-item layui-inline">
            <button className="layui-btn" onClick={changeList}>
              筛选
            </button>
          </div>
        </Form>
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
          <tbody>
            <tr>
              <td>11111</td>
              <td>最新</td>
              <td>2022-05-21 21:00:31.404</td>
              <td>已发布</td>
              <td>
                <button type="button" className="layui-btn layui-btn-xs">
                  编辑
                </button>
                <button
                  type="button"
                  className="layui-btn layui-btn-danger layui-btn-xs btn-delete"
                  data-id="6127"
                >
                  删除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- 分页区域 --> */}
        <div id="pageBox">
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
      </div>
    </div>
    // <!-- Code injected by live-server -->
  );
}

export default List;
