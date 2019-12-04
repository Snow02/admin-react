import React, {Component} from 'react';
import Nav from './nav/Nav';
import { Layout } from "antd";
const { Content } = Layout;
class Master extends Component{
    render() {
        return (
            <Layout>
                <div className="master">
                    {/*Nav*/}
                    <Nav/>
                    {/*Show Content*/}
                    <div id="page-wrapper">
                        <Content>{this.props.children}</Content>
                    </div>
                    {/*end*/}
                </div>
            </Layout>


    );
    }
    }
    export default Master;
