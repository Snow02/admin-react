import React, {Component}  from 'react';
import {Link} from "react-router-dom";


class Sidebar extends Component{
    render() {
        return(
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                      <button className="btn btn-default" type="button"> <i className="fa fa-search"></i> </button>
                                </span>
                            </div>
                            {/*input-group */}
                        </li>
                        <li>
                            <a><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a><i className="fa fa-bar-chart-o fa-fw"></i> Category<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                   <Link to="/admin/category/index">List Category</Link>
                                </li>
                                <li>
                                    <Link to="/admin/category/add">Add Category</Link>
                                </li>
                            </ul>
                            {/*nav-second-level */}
                        </li>
                        <li>
                            <a><i className="fa fa-cube fa-fw"></i> Product<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="/admin/product/index">List Product</Link>
                                </li>
                                <li>
                                    <Link to="/admin/product/add">Add Product</Link>
                                </li>
                            </ul>
                            {/*nav-second-level */}
                        </li>
                        <li>
                            <a><i className="fa fa-users fa-fw"></i> User<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="/admin/user/index">List User</Link>
                                </li>
                                <li>
                                   <Link to="/admin/user/add"> Add User </Link>
                                </li>
                            </ul>
                            {/*nav-second-level */}
                        </li>
                    </ul>
                </div>
                {/*sidebar-collapse */}
            </div>
        );

    }
}
export default Sidebar;
