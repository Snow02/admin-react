import React, {Component} from "react";
import axiosInstance from '../../utils/axiosInstance.js'
import {withRouter} from "react-router";
import {Form,Input,Button,message,Upload, Icon} from 'antd';

class AddUser extends Component {
    state = {
        username: '',
        name: '',
        email: '',
        password: '',
        confirmDirty: false,
        autoCompleteResult: [],
        users: [],
        fileList: [],
    };
    // Get All User
    componentDidMount() {
        axiosInstance.get(`/admin/list`)
            .then((response) => {
                // console.log(response.data.data);
                this.setState({
                    users: response.data.data.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //

    // Handle Input Form Change
    // onHandleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };
    // Handle Change Upload file
    handleChangeImage = (event) => {
        let fileList = [...event.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });
        this.setState({ fileList });

    };
    // Handle Form Submit
    onHandleSubmit = (event) => {
        event.preventDefault();

        // Get all email users
        var listEmail = this.state.users.map((user) =>{
            return user.email;
        });
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // Email exists
                listEmail.forEach((item) => {
                    if(values.email === item){
                        message.error("Email already exists !! Please Again");
                    }
                });


                const formData = new FormData();
                var data= {
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                };
                Object.keys(data).forEach(key=>{
                    formData.append(key,data[key]);

                });

                this.state.fileList.forEach(file=>{
                    console.log(file);
                    formData.append('image[]',file.originFileObj);
                });
                

                // Call Api Add user
                axiosInstance.post(`/admin/add`,
                    formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    // Response Result
                    .then((response) => {
                        if (response.data.result === 200) {
                            this.props.history.push("/admin/user/index");
                            // console.log(response);
                        }

                    })
                    // Error Server Request
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });

    };



    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelcol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrappercol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrappercol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        // Upload File
        const props = {
            onChange: this.handleChangeImage,
            multiple: true,
        };

        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">User
                            <small>Add</small>
                        </h1>
                    </div>

                </div>
                <form {...formItemLayout} onSubmit={this.onHandleSubmit}>
                    <Form.Item label="Name">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name ',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="Username">
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username ',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid email',
                                },
                                {
                                    required: true,
                                    message: 'Please input your email',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ],
                        })(<Input.Password/>)}
                    </Form.Item>
                    {/*Upload File*/}
                    <div style={{marginBottom : 20+'px'}}>
                        <Upload {...props} fileList={this.state.fileList}>
                            <Button>
                                <Icon type="upload" /> Upload
                            </Button>
                        </Upload>
                    </div>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Add User
                        </Button> &nbsp;
                        <Button type="primary" htmlType="reset">
                            Reset
                        </Button>
                    </Form.Item>



                </form>


            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'addUser'})(AddUser);
export default withRouter(WrappedRegistrationForm);
