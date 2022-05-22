import React, { useState, useEffect } from "react";
import "./index.css";
import { httpCateList ,deleteCateList} from "../../untils/http";
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
  const deleteCate = (id)=>{
    return ()=>{
      deleteCateList(id).then(()=>updateCateList())
    }
  }
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card" id="cateId">
      <div className="layui-card-header">
        <span>文章类别管理</span>
        <ModalCate updateCateList={updateCateList} title={'增加分类'}/>
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
          <tbody id={'catebody'}>
            {CateList?.map((item) => {
              return (
                <tr key={item.Id}>
                  <td>{item.name}</td>
                  <td>{item.alias}</td>
                  <td>
                  <ModalCate updateCateList={updateCateList} str={'修改'} item={item} style={{width:'50px',height:"20px"}} title={'修改分类'}/>
                    <button
                      type="button"
                      className="layui-btn layui-btn-danger layui-btn-xs btn-delete"
                      data-id="1"
                      onClick={deleteCate(item.Id)}
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
