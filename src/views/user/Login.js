import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {withRouter} from "react-router";
import axiosInstance from '../../utils/axiosInstance.js'


class Login extends Component {

    onHandleSubmit = (event) => {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                axiosInstance.post(`/admin/login`,{
                    username : values.username,
                    password : values.password,
                })
                    .then(response => {
                        console.log(response);
                        if(response.data.result === 200 ){
                            this.props.history.push("/admin/user/index");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login-page">

                <div className="wp-inner login">
                    <div className="panel panel-default" id="color-picker">
                        <div className="panel-heading">
                            <h3 className="panel-title">Sign in</h3>
                        </div>

                    </div>
                    <Form onSubmit={this.onHandleSubmit}  className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <span className="padd">||</span>
                            <a href="" className="register">Register now!</a>
                        </Form.Item>

                    </Form>
                </div>

            </div>
        );
    }
}

const WrappedNormalLoginForm  = Form.create({name: 'login'})(Login);
export default withRouter(WrappedNormalLoginForm );