import React , {Component}  from  "react";
import axiosInstance from "../../utils/axiosInstance";
import {Button, Icon, message, Upload} from "antd";

class EditUser extends Component{
    state = {
        user : [],
        fileList: [],
        username : '',
        name : '',
        password : '' ,
        email : '',
    };
    // Get User By Id
    componentDidMount() {
        // Method get id on route
        var id = this.props.match.params.id;
        // Call api
        axiosInstance.get(`/admin/info/${id}`)
            .then((response) => {
                var user = response.data.data;
                this.setState({
                   user : user,
                });
                // Update state input
                this.setState({
                    username : user.username,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                });

            });

    }

    // Handle Change Input
    onHandleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };


    // Handle Change Input file
    onHandleChangeImage = (event) => {
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

    // Handle Submit Form
    onHandleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        var data = {
            username: this.state.username,
            name: this.state.name,
            password : this.state.password,
            email : this.state.email
        };
        // Return to array :  Object.keys(object)
        Object.keys(data).forEach(key => {
            formData.append(key , data[key]) ;
        });
        this.state.fileList.forEach(file => {
            console.log(file);
            formData.append('images[]',file.originFileObj);
        });
        // Call Api Edit user

        var id = this.props.match.params.id;
        axiosInstance.post(`/admin/edit/${id}`,
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // Response Result
            .then((response) => {
                if (response.data.result === 200) {
                    // Redirect
                    this.props.history.push("/admin/user/index");
                    console.log(response.data);
                }

            })
            // Error Server Request
            .catch((error) => {
                console.log(error);
            });



    };

    render() {
        const {user} = this.state;
        console.log(user);

        // Upload file
        const props = {
            onChange: this.onHandleChangeImage,
            multiple: true,
        };
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">User
                            <small>Edit</small>
                        </h1>
                    </div>

                    <div className="col-lg-7">
                        <form onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" name="username" defaultValue={user.username}  disabled />
                            </div>
                            <div className="form-group">
                                <label>Fullname</label>
                                <input type="text" className="form-control" name="name" onChange={this.onHandleChange} placeholder="Please Enter Fullname"  defaultValue={user.name} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={this.onHandleChange} placeholder="Please Enter Password" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={this.onHandleChange} placeholder="Please Enter Email" defaultValue={user.email} />
                            </div>
                            {/*Upload File*/}
                            <div style={{marginBottom : 20+'px'}}>
                                <Upload {...props} fileList={this.state.fileList}>
                                    <Button>
                                        <Icon type="upload" /> Upload
                                    </Button>
                                </Upload>
                            </div>
                            <button type="submit" className="btn btn-default">Edit</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </form>
                    </div>
                </div>


            </div>
        );
    }
}

export default EditUser;
