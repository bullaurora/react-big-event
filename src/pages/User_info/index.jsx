import React, { useRef, useEffect,useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "../../context/auth-context";
import {httpUserInfo} from '../../untils/http'
import { useUpdate } from "../../untils";
import "./index.css";
function Info() {
  const [refresh, setRefresh] = useState(false);
  const resetNameRef = useRef();
  const { user ,updateUser} = useAuth();
  const id = user.id
  const token = window.localStorage.getItem('token')
  const handleSubmit = (values) => {
    const data = {id,token,...values}
    httpUserInfo('POST',data).then(()=>updateUser())
  };
  useEffect(() => {
    setTimeout(() => setRefresh(false))
    }, [refresh,user])
  const doRefresh = () => updateUser()
  return (
    
    <div className="infoBody">
      <h4>修改用户信息</h4>
      <hr />
      <div className="infoName">
        <Form onFinish={handleSubmit} ref={resetNameRef}  initialValues={{
          'username':user.username,
          'nickname':user.nickname,
          'email':user.email,
        }}>
          <Form.Item label="登录名称" rules={[{ required: true }]}>
            <Input placeholder={user.username} disabled={true}  className='topinput' name={"username"}/>
          </Form.Item>
          <Form.Item
            name={"nickname"}
            label="用户昵称"
            rules={[{ required: true }]}
          >
            <Input name={"nickname"}/>
          </Form.Item>
          <Form.Item
            name={"email"}
            label="用户邮箱"
            rules={[{ required: true, type: "email" }]}
          >
            <Input  name={"email"}/>
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"} style={{position:'relative',left:280}}>
              提交修改
            </Button>
            <Button  onClick={doRefresh} style={{position:'relative',left:300}}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Info;
