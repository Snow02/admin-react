import React, {Component} from 'react';
import Nav from './nav/Nav';
class Master extends Component{
    render() {
        return (
        <div className="master">
            {/*Nav*/}
            <Nav/>
             {/*Show Content*/}
            <div id="page-wrapper">
                {this.props.children}
            </div>
            {/*end*/}
        </div>

    );
    }
    }
    export default Master;
