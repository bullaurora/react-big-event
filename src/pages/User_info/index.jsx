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
        <Form onFinish={handleSubmit} ref={resetNameRef}>
          <Form.Item label="登录名称" rules={[{ required: true }]}>
            <Input value={user.username} disabled={true}  className='topinput'/>
          </Form.Item>
          <Form.Item
            name={"nickname"}
            label="用户昵称"
            rules={[{ required: true }]}
          >
            <Input placeholder={user.nickname}/>
          </Form.Item>
          <Form.Item
            name={"email"}
            label="用户邮箱"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder={user.email}/>
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>
              提交修改
            </Button>
            <Button  onClick={doRefresh} >
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Info;
