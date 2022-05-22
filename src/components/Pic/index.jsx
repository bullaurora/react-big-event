import React, { useRef, useState } from "react";
import { Button,message } from 'antd';
import choose from '../../images/下载.jfif'
import "./index.css";
import {useAuth} from "../../context/auth-context"
function Pic({pic,setPic}) {
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
    setPic(file)
    const imgURL = URL.createObjectURL(file);
    setimgUrl(imgURL);
  };

  const sendBase64 = () => {
    if (!imgFile)  return message.info('请上传头像')
    const reader = new window.FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => {
      const avatar = reader.result; // reader.result 就是转成base64的数据
      
    };
  };
  return (
    <div className="backbody">
      <h4>选择图片</h4>
      <div className="imgDiv">
        <img src={imgUrl||choose} alt="" />
      </div>
      <div className="uploadDiv">
        <input type="file" ref={fileRef} onChange={getFile} id='file'/>
        <Button type="primary" onClick={upLoadImg}>上传</Button>
        <Button onClick={sendBase64}>确定</Button>
      </div>
    </div>
  );
}

export default Pic;