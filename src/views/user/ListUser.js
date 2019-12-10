import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { Table,Button ,Popconfirm , message } from 'antd';
class ListUser extends Component {

    state = {
        users: [],

    };

    // Get all users
    componentDidMount() {
        axiosInstance.get(`/admin/list`)
            .then((response) => {
                this.setState({
                    users: response.data.data.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Handle delete user
    confirm = (id) => {
        const {users} = this.state;
        message.success('Click on Yes');
        // if confirm delete -> Call api handle delete user
        axiosInstance.delete(`/admin/delete/${id}`)
            .then(response => {

                if(response.data.result === 200){
                    var listUser = users.filter((user) => (user.id !== id));
                }
                this.setState({
                    users : listUser
                });


            });
    };
    // Cancel delete
    cancel = () => {
        message.error('Click on No');
    };

    render() {
        const {users} = this.state;
        console.log(users);


        const columns = [
            {
                title: 'STT',
                dataIndex: 'stt',
                key: 'stt',

            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            // {
            //     title: 'Avatar',
            //     dataIndex: 'avatar',
            //     key: 'avatar',
            // },

            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Popconfirm
                            title="Are you sure delete this task?"
                            onConfirm={() => this.confirm(record.key)}
                            onCancel={this.cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="danger" >Delete</Button>
                        </Popconfirm> &nbsp;
                        <Button type="primary">
                            <Link to={`/admin/user/edit/${record.key}`}>Edit</Link>
                        </Button>

                    </span>
                ),
            },
        ];
        const data = users.map((user, index) => (
            {
                key: user.id,
                stt: index,
                name: user.name,
                username: user.username,
                email: user.email,
                // avatar: <img src={user.avatar.origin_url} style={{width:80+'px',height:80+'px'}}/>
            }
        ));

        // const resultAdd = this.props.location.state.result;
        // console.log(resultAdd);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">User
                            <small>List</small>
                        </h1>
                    </div>

                </div>
                <Table columns={columns} dataSource={data} />
            </div>


        );
    }
}

export default ListUser;
