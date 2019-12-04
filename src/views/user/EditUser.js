import React , {Component}  from  "react";

class EditUser extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">User
                            <small>Edit</small>
                        </h1>
                    </div>

                    <div className="col-lg-7">

                        <form action="" method="POST">
                            <input type="hidden" name="_method" value="PUT" />
                                <input type="hidden" name="id" value="" />
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input className="form-control" name="username" value=""  disabled />
                                    </div>
                                    <div className="form-group">
                                        <label>Fullname</label>
                                        <input type="text" className="form-control" name="fullname" value="" placeholder="Please Enter Fullname"  />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Please Enter Password" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="Please Enter Email" value="" />
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
