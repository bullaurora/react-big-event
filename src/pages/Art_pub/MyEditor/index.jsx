import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent({text,setText}) {
 

  return (
    <ReactQuill theme="snow" value={text} onChange={setText} style={{ width: "1000px" ,height:'500px',position:'relative',left:0,backgroundColor:'#fff'}}/>
  );
}
export default MyComponent;