import { Mentions, Form, Button, Select, Input } from "antd";
import React, { useState } from "react";
import { useAuth } from "../../context/auth-context";
import MyEditor from "./MyEditor";
import Pic from '../../components/Pic'
import {addArticle} from "../../untils/http"
import { useNavigate } from "react-router-dom";
import './index.css'
const Pub = () => {
  const [text, setText] = useState("");
  const { CateList } = useAuth();
  const [form] = Form.useForm();
  const [pic,setPic] = useState(null)
  const [state,setState] = useState('草稿')
  let navigate = useNavigate();
  const onCaoGao = () => {
    setState('草稿')
  };
  const onCaogaofalse = ()=>{
    setState('已发布')
  }
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      addArticle({state,cover_img:pic,content:text,...values}).then(()=>navigate("/list"))
      
    } catch (errInfo) {
      console.log("Error:", errInfo);
    }
  };

  return (
    <div className='pubList'>
      <h2>发布文章</h2>
      <hr />
       <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item name={"title"} label="文章标题" rules={[{ required: true }]}style={{position:'relative',left:-10}}>
        <Input style={{ width: "1000px" }} />
      </Form.Item>
      <Form.Item name={"cate_id"} label="文章标题" rules={[{ required: true }]}>
        <Select name="cate_id" style={{ width: "1000px" ,position:'relative',left:-15}}>
          {CateList?.map((item) => {
            return (
              <Select.Option value={item.Id} key={item.Id} style={{ width: "1000px"}}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="文章内容" >
        <MyEditor text={text} setText={setText} />
      </Form.Item >
      <div style={{position:'relative',left:80}}>
      <Pic  pic={pic} setPic={setPic} />
      </div>
      <Form.Item
      style={{position:'relative',left:500}}
      >
        <Button htmlType="submit" type="primary" onClick={onCaogaofalse}>
          发布
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="submit" onClick={onCaoGao}>
          存为草稿
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Pub;
