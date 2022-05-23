import React, { useEffect, useState } from "react";
import "./index.css";
import { useAuth } from "../../context/auth-context";
import { Form, Select ,Pagination,Button,} from "antd";
import { httpCateList,getArticleList,deleteArticleList } from "../../untils/http";
import {useUpdateEffect} from '../../untils'
function List() {
  const { CateList, setCateList } = useAuth();
  const [ filterList, setfilterList ] = useState(null);
  const [ArticleList,setArticleList] = useState(null)
  const [sql,setsql] = useState({pagenum:1,pagesize:20,cate_id:'',state:''})
  useEffect(() => {
    httpCateList().then((CateList) => setCateList(CateList));
    getArticleList(sql).then((ArticleList) => {
      setArticleList(ArticleList)
      const arr = ArticleList.slice(0,2)  
      setfilterList(arr)
    })
  }, []);
  const onFinish = (values) => {
    setsql({pagenum:1,pagesize:2,...values})
  };
  const getSize = (pagenum, pagesize)=>{
    setsql({pagenum,pagesize,cate_id:'',state:''})
  }
  const deleteArticle = (Id)=>{
    return ()=>{
      deleteArticleList(Id).then((ArticleList) => setfilterList(ArticleList))
    }
  }
  useUpdateEffect(()=>{
    getArticleList(sql).then((ArticleList) => {   
      setfilterList(ArticleList)
    })
  },[sql])
  return (
    // <!-- 卡片区域 -->
    <div className="layui-card">
      <div className="layui-card-header">文章列表</div>
      <div className="layui-card-body">
        {/* <!-- 筛选区域 --> */}
        <Form
          className="layui-form"
          id="form-search"
          onFinish={onFinish}
          initialValues={{state:'所有状态',cate_id:CateList[0]?.name}}
        >
          <div className="layui-form-item layui-inline">
            <Form.Item name="cate_id" >
              <Select name="cate_id" style={{ width: "200px" }} defaultActiveFirstOption>
                {CateList?.map((item) => {
                  return (
                    <Select.Option value={item.ID} key={item.Id}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="layui-form-item layui-inline">
            <Form.Item name={"state"} >
              <Select  style={{ width: "200px" }} name={"state"}>
                <Select.Option  value="">所有状态</Select.Option>
                <Select.Option  value="已发布">已发布</Select.Option>
                <Select.Option  value="草稿">草稿</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="layui-form-item layui-inline">
          <Form.Item>
            <Button htmlType={"submit"} type="primary" >
              筛选
            </Button>
            </Form.Item>
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
                {
                  filterList?.map(item =>{
                    return (
                      <tr key={item.Id}>
                      <td>{item.title}</td>
                      <td>{item.cate_name}</td>
                      <td>{item.pub_date}</td>
                      <td>{item.state}</td>
                      <td>
                        <button type="button" className="layui-btn layui-btn-xs">
                          编辑
                        </button>
                        <button
                          type="button"
                          className="layui-btn layui-btn-danger layui-btn-xs btn-delete"
                          data-id="6127"
                          onClick={deleteArticle(item.Id)}
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                    )
                  })
                }
          </tbody>
        </table>
        {/* <!-- 分页区域 --> */}
        <div id="pageBox">
        <Pagination size="default"  defaultCurrent={1} defaultPageSize={2} total={ArticleList?.length} showSizeChanger={true} showQuickJumper={true} onChange={getSize} pageSizeOptions={[2,4,6,8]}/>
        </div>
      </div>
    </div>
    // <!-- Code injected by live-server -->
  );
}

export default List;