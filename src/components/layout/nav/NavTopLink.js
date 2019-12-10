import React ,{Component} from 'react';
import axiosInstance from '../../../utils/axiosInstance.js';
class NavbarTopLink extends Component{
    onHandleLogout = () => {
          axiosInstance.get(`/admin/logout`)
              .then((response) => {
                    if(response.data.result === 200){
                        this.props.history.push('/admin/login');
                    }
              });
    };
    render() {
        return(
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-user fa-fw"/> <i className="fa fa-caret-down"/>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a><i className="fa fa-user fa-fw"/> <b>Admin</b></a></li>
                        <li className="divider"/>
                        <li><a onClick={this.onHandleLogout}><i className="fa fa-sign-out fa-fw"/> Logout</a></li>
                    </ul>
                </li>
            </ul>


        );
    }

}
export default NavbarTopLink;
