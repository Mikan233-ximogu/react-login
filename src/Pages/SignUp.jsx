import { Col, Row, Card, Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // 使用 useNavigate
import LOGO from '../assets/LOGO2.jpg';

const SignUp = () => {
    const navigate = useNavigate(); // 获取 navigate 函数

    const onFinish = (values) => {
        // 处理注册逻辑
        console.log('Received values from form: ', values);

        // 显示成功提示框
        message.success('账号注册成功，现在可以登录啦！');

        // 设置两秒后跳转到登录页面
        setTimeout(() => {
            navigate('/login'); // 使用 navigate 跳转到登录页面
        }, 2000);
    };

    return (
        <Row>
            <Col span={8} push={8}>
                <img src={LOGO} style={{
                    width: '300px', display: 'block', margin: '40px auto'
                }} />
                <Card title="创建账号">
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={onFinish} // 添加 onFinish 处理
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                { required: true, message: '请设置用户名!' },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password" // 确保与后台一致
                            rules={[
                                { required: true, message: '请设置密码!' },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ offset: 5, span: 16 }}
                        >
                            <Button type="primary" htmlType="submit" style={{
                                margin: '0 auto', display: 'block'
                            }}>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default SignUp;
