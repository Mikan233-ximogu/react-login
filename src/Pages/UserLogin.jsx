import { Col, Row, Card, Button, Form, Input } from 'antd';
import { Component } from "react";
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO1.jpg'


class UserLoginComponent extends Component {

    constructor(props) {
        super(props)

        // React , state is very important.
        this.state = {

        }

    }

    render() {
        return (

            <Row>
                <Col span={8} push={8} >

                    <img src={LOGO} style={{
                        width: '300px', display: 'block', margin: '40px auto'
                    }} />

                    <Card
                        title="登录入口">
                        <Form
                            name="basic"
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            style={{
                                maxWidth: 600, 
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            
                            autoComplete="off"
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 5,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" style={{
                                    margin:'0 auto',display:'block'
                                }}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                        <div style={{ textAlign: 'center', marginTop: '16px' }}>
                            <span>还没有账号？</span>
                            <Link to="/signup" style={{ marginLeft: '5px' }}>注册一个吧</Link>
                        </div>

                    </Card>
                </Col>

            </Row>
        )
    }
}

export default UserLoginComponent