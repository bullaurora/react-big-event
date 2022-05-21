import React, { useRef, useState } from "react";
import { Button,message } from 'antd';
import choose from '../../images/下载.jfif'
import "./index.css";
import { httpAvatar } from "../../untils/http";
import {useAuth} from "../../context/auth-context"
function Avatar() {
  const {updateUser} = useAuth()
  const [imgUrl, setimgUrl] = useState(null);
  const [imgFile, setimgFile] = useState(null);
  const fileRef = useRef();
  const upLoadImg = () => {
    fileRef.current.click();
  };
  const getFile = (e) => {
    const file = e.target.files[0];
    setimgFile(file);
    const imgURL = URL.createObjectURL(file);
    setimgUrl(imgURL);
  };

  const sendBase64 = () => {
    if (!imgFile)  return message.info('请上传头像')
    const reader = new window.FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => {
      const avatar = reader.result; // reader.result 就是转成base64的数据
      httpAvatar({ avatar }).then(()=>updateUser())
    };
  };
  return (
    <div className="backbody">
      <h4>更换头像</h4>
      <div className="imgDiv">
        <img src={imgUrl||choose} alt="" />
      </div>
      <div className="uploadDiv">
        <input type="file" ref={fileRef} onChange={getFile} />
        <Button type="primary" onClick={upLoadImg}>上传</Button>
        <Button onClick={sendBase64}>确定</Button>
      </div>
    </div>
  );
}

export default Avatar;
