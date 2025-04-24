import { Form, Input, Modal } from 'antd';

const UpgradeForm = () => {
  const [form] = Form.useForm();
  return (
    <Modal title="Modal" open={true}>
      <Form form={form} layout="vertical" className="p-4">
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpgradeForm;
