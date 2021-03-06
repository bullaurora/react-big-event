import React, { useRef, useState } from "react";
import { Form, Input, Button ,message} from "antd";
import { useAuth } from "../../context/auth-context";
import { httpPwd } from "../../untils/http";
import './index.css'
function Info() {
  const resetNameRef = useRef();
  const {logout} = useAuth()

  const handleSubmit = ({oldPwd,newPwd1,newPwd}) => {
    if (newPwd1!==oldPwd) return message.info('两次密码输出不一致')
    const data = { oldPwd,newPwd};
    httpPwd(data);
    logout()
  };
  const clearInput = () => {
    resetNameRef.current.resetFields();
  };
  return (
    <div className="infoBody" id={'pwdbody'}>
      <h4>修改密码</h4>
      <hr />
      <div className="infoName">
        <Form onFinish={handleSubmit} ref={resetNameRef}>
          <Form.Item name={"oldPwd"} label="原密码" rules={[{ required: true }]}>
            <Input.Password  style={{width:'354px',position:'relative',right:-21}} autoComplete="true"/>
          </Form.Item>
          <Form.Item
            name={"newPwd1"}
            label="新密码"
            rules={[{ required: true }]}
          >
            <Input.Password  style={{width:'354px',position:'relative',right:-16}} autoComplete="true"/>
          </Form.Item>
          <Form.Item
            name={"newPwd"}
            label="请确认密码"
            rules={[{ required: true }]}
          >
            <Input.Password style={{width:'354px',position:'relative',right:10}} autoComplete="true"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"} style={{position:'relative',left:290}}>
              提交修改
            </Button>
            <Button  onClick={clearInput} style={{position:'relative',left:300}}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Info;
