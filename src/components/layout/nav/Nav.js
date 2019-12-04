import React , {Component} from "react";

import Sidebar from "../sidebar/Sidebar";
import NavbarHeader from "./NavbarHeader";
import NavbarTopLink from "./NavTopLink";

class Nav extends  Component{
    render() {
        return(
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                    {/*navbar header*/}
                    <NavbarHeader />
                    {/*navbar-top-links*/}
                    <NavbarTopLink />
                    {/*Sidebar*/}
                    <Sidebar/>

                </nav>
            </div>
        );
    }
}
export default Nav;
