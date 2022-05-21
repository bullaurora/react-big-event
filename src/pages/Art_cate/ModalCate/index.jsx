import React,{useRef} from "react";
import { Modal, Button, Input, Form } from "antd";
import {addCateList} from '../../../untils/http'

const ModalCate = ({updateCateList}) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const ModalForm = useRef();
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      ModalForm.current.submit()
    }, 500);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };
 const getValue=(value)=>{
  addCateList(value).then(() => updateCateList())
}

  return (
    <>
      <Button type="primary" onClick={showModal}>
        添加分类
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form onFinish={getValue} ref={ModalForm}>
          <Form.Item
            name={"name"}
            label="分类名称"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"alias"}
            label="分类别名"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCate;
