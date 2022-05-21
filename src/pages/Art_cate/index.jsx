import React, { useState, useEffect } from "react";
import "./index.css";
import { httpCateList } from "../../untils/http";
import ModalCate from "./ModalCate";
import {useAuth} from "../../context/auth-context"
function Cate() {
  const {CateList,setCateList} = useAuth()
  const updateCateList = ()=>{
    httpCateList().then((CateList) => setCateList(CateList));
  }
  useEffect(() => {
    updateCateList()
  }, []);
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card" id="cateId">
      <div className="layui-card-header">
        <span>文章类别管理</span>
        <ModalCate updateCateList={updateCateList}/>
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
            {CateList?.map((item) => {
              return (
                <tr key={item.Id}>
                  <td>{item.name}</td>
                  <td>{item.alias}</td>
                  <td>
                    <button
                      type="button"
                      className="layui-btn layui-btn-xs btn-edit"
                      data-id="1"
                    >
                      编辑
                    </button>
                    <button
                      type="button"
                      className="layui-btn layui-btn-danger layui-btn-xs btn-delete"
                      data-id="1"
                    >
                      删除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cate;
