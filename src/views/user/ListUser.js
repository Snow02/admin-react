import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { Table,Button  } from 'antd';
class ListUser extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axiosInstance.get(`/admin/list`)
            .then((response) => {
                this.setState({
                    users: response.data.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

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

            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="danger">
                            <Link to={`/admin/user/delete/${record.key}`}>Delete</Link>
                        </Button>
                        &nbsp;
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
                email: user.email
            }
        ));

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
