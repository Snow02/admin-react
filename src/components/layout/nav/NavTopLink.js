import React ,{Component} from 'react';

class NavbarTopLink extends Component{
    render() {
        return(
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-user fa-fw"/> <i className="fa fa-caret-down"/>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a><i className="fa fa-user fa-fw"/>Admin</a></li>
                        <li className="divider"/>
                        <li><a><i className="fa fa-sign-out fa-fw"/> Logout</a></li>
                    </ul>
                </li>
            </ul>


        );
    }

}
export default NavbarTopLink;
